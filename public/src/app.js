  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC-hWu-NQ0LnlEM43w_T0GX50yxFlxH_uo",
    authDomain: "personaltoodo.firebaseapp.com",
    projectId: "personaltoodo",
    storageBucket: "personaltoodo.appspot.com",
    messagingSenderId: "433868468312",
    appId: "1:433868468312:web:c746ee1764de2d89999a2d",
    measurementId: "G-N3L8QC88ZE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

     // make auth and firestore references
     const auth = firebase.auth();
     const db = firebase.firestore();
     const functions = firebase.functions();
  



const formSignIn = document.querySelector('.form-signin');
const divError = document.querySelector('.div-error');
const signOutBtn = document.querySelector('.btn-signOut');
const addBtn = document.querySelector('.btn-add');
const todoTitle = document.querySelector('.title');
const formAddTask = document.querySelector('.form-add-new-task');
const modalHide = document.querySelector('.modal');


        function myDataID(selectedID) {

            var selectedIDCard = selectedID.getAttribute("data-id");

                db.collection('personal').doc(selectedIDCard).update({
                    status: true,
                }).then(() => {
                    signOutBtn.style.display = "block";
                })
        }

  
            formSignIn.addEventListener('submit', (e)=> {

                e.preventDefault();
                const userSignInEmail = formSignIn['user-email'].value;
                const userSignInPassword = formSignIn['user-password'].value;

               // console.log(userSignInEmail, userSignInPassword);

                    auth.signInWithEmailAndPassword(userSignInEmail, userSignInPassword).then((cred) => {

                                formSignIn.reset();
                                //divError.innerHTML = '';
                                signOutBtn.style.display = 'block';
                                formSignIn.style.display = "none";
                                cardRenederDiv.style.display = "block";
                                addBtn.style.display = "block";
                                todoTitle.style.display = "none";

                    })
                    .catch(err => {
                        divError.innerHTML = err.message;
                    })
            })


                    signOutBtn.addEventListener('click', (e) => {

                            e.preventDefault();

                                auth.signOut()
                                    .then(() => {
                                        signOutBtn.style.display = 'none';
                                        formSignIn.style.display = "block";
                                        cardRenederDiv.style.display = "none";
                                        addBtn.style.display = "none";
                                        todoTitle.style.display = "block";
                                    })

                    })


                    auth.onAuthStateChanged(user => {


                            if(user){
                    
                                    db.collection('personal').where("status", "==", false).onSnapshot(snapshot => {
                                        setupCard(snapshot.docs);
                                    })
                                
                                    formAddTask.addEventListener('submit', (e) => {

                                            e.preventDefault();

                                                const newTitle = formAddTask['task-title'].value;
                                                const newNote = formAddTask['task-note'].value;

                                            //   console.log("title: ", newTitle);
                                             //   console.log("note: ", newNote);

                                             db.collection('personal').add({
                                                title: newTitle,
                                                note: newNote,
                                                status: false,
                                            })
                                             .then(() => {
                                                    formAddTask.reset();
                                            })

                                    })
                    
                                
                                    }
                    })

            
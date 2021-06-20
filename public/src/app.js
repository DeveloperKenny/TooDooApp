

     // make auth and firestore references
     const auth = firebase.auth();
     const db = firebase.firestore();
     const functions = firebase.functions();
  



const formSignIn = document.querySelector('.form-signin');
const divError = document.querySelector('.div-error');
const signOutBtn = document.querySelector('.btn-signOut');


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
                                    })

                    })


                    auth.onAuthStateChanged(user => {


                            if(user){
                    
                                    db.collection('personal').where("status", "==", false).onSnapshot(snapshot => {
                                        setupCard(snapshot.docs);
                                    })
                                
                    
                                
                            }
                    })

            
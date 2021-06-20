const colDisplayCurrentDate = document.querySelector(".col-date");
const  cardRenederDiv = document.querySelector('.card-render-here');



        function formatDate() {
            var d = new Date(),
                month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                        year = d.getFullYear();

                        if (month.length < 2)

                                month = '0' + month;

                                if (day.length < 2)

                                    day = '0' + day;

                                        return [month, day, year].join(' / ');
        }

        const currentDate = formatDate();

                            colDisplayCurrentDate.innerHTML = currentDate;

  const setupCard = (data) => {

                    let html = '';
                data.forEach(doc => {
                    
                    const info = doc.data();
                  const card = `
                                  <div class="card card-todo">
                                    <div class="card-title">${info.title}</div>
                                  <div class="card-body card-body-note">
                                    <p>${info.note}</p>
                                    <div class="btn btn-primary btn-completed" onclick="myDataID(this)" data-id=${doc.id} >Completed Task</div>
                                  </div>
                                </div>
                              `;
                  html += card;
                })
                cardRenederDiv.innerHTML = html;
  }      
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
                    <div class="card text-center">
                    <div class="card-header">
                      Personal
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">${info.title}</h5>
                      <p class="card-text">${info.note}</p>
                      <button class="btn btn-primary" data-id="${doc.id}" onclick="myDataID(this)">Completed Task</button>
                    </div>
                    <div class="card-footer text-muted">
                      2 days ago
                    </div>
                  </div>
                  `;
                  html += card;
                })
                cardRenederDiv.innerHTML = html;
  }      
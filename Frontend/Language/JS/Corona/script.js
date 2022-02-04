const cardContainer = document.querySelector('.card-container');

fetch('https://data.covid19india.org/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const cardContainer = document.querySelector('.card-container');
    const allCases = data['cases_time_series'];
    for (singleCase of allCases.reverse()) {
      //console.log(singleCase);
      generateCard(singleCase, cardContainer);
    }
  })
  .catch((err) => 'Rejected: ' + err);

//pass in json data object
function generateCard(
  {date, totalconfirmed, totaldeceased, totalrecovered},
  container
) {
  console.log(totalrecovered);
  const newCard = document.createElement('div');
  newCard.classList.add('day-card');
  const title = document.createElement('h2');
  title.classList.add('card-title');
  title.innerText = date;
  const confirmed = document.createElement('p');
  confirmed.innerHTML = `Total Confirmed: <b>${totalconfirmed}</b>`;
  const recovered = document.createElement('p');
  recovered.innerHTML = `Total Recovered: <b>${totalrecovered}</b>`;
  const deceased = document.createElement('p');
  deceased.innerHTML = `Total Deceased: <b>${totaldeceased}</b>`;
  newCard.append(title, confirmed, recovered, deceased);
  container.append(newCard);
  return newCard;
}

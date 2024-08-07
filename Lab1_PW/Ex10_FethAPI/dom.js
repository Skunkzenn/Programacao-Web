document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
  const container = document.getElementById('cards-container');

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = item.title;

    const body = document.createElement('p');
    body.textContent = item.body;

    card.appendChild(title);
    card.appendChild(body);

    container.appendChild(card);
  });
}

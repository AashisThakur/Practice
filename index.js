let productPerPage = 4;
let currentPage = 1;
let start = 0;
let end = 0;
let dataValue;
let maxPage;

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    start = currentPage * productPerPage;
    end = start + productPerPage;
    dataValue = data;
    data = data.slice(start, end);
    maxPage = Math.ceil(dataValue.length / productPerPage);
    renderCard(data);
  });

const container = document.querySelector('#card-container');

function renderCard(data) {
  container.innerHTML = '';

  data.forEach(e => {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement('p');
    const text = document.createElement('p');

    card.classList.add('card')
    image.classList.add('card-img-top')
    name.classList.add('card-title')
    text.classList.add('card-text')

    name.innerText = `${e.title}`
    image.src = `${e.image}`
    text.innerText = `${e.description}`

    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(text)

    container.appendChild(card)
  });
}

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

nextButton.addEventListener('click', () => {
  if (end+productPerPage >= dataValue.length) {
    nextButton.style.display = 'none';
  }
  currentPage++;
  start = currentPage * productPerPage;
  end = start + productPerPage;
  const dataValues = dataValue.slice(start, end);
  container.innerHTML = '';
  renderCard(dataValues);
  prevButton.style.display = 'inline-block';
});

prevButton.addEventListener('click', () => {
  if (currentPage === 1) {
    prevButton.style.display = 'none';
  }
  currentPage--;
  start = currentPage * productPerPage;
  end = start + productPerPage;
  const dataValues = dataValue.slice(start, end);
  container.innerHTML = '';
  renderCard(dataValues);
  nextButton.style.display = 'inline-block';
});
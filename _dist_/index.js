import { registerImage } from './lazy.js';

const MAX = 122;
const MIN = 1;

const random = () => Math.floor(Math.random() * (MAX - MIN) + MIN);

const createImageNode = () => {
  //contenedor
  const container = document.createElement('div');
  container.className = 'p-4';

  //imagen
  const image = document.createElement('img');
  image.className = 'mx-auto';
  image.style.width = '320px';
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  //agregamos imagen al container
  container.appendChild(image);
  return container;
};

// const newImage = createImageNode();
const mountNode = document.getElementById('images');
const addButton = document.querySelector('#add');
const deleteButton = document.querySelector('#delete');

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
};

const deleteImages = () => {
  while (mountNode.firstChild) {
    const toDelete = mountNode.firstChild;
    mountNode.removeChild(toDelete);
  }
};

addButton.addEventListener('click', addImage);
deleteButton.addEventListener('click', deleteImages);

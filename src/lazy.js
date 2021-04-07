const isIntersecting = entry => {
  return entry.isIntersecting; // true (dentro de la pantalla)
};

const action = entry => {
  const nodo = entry.target;
  console.log('holis');
  //desregistra la imagen(unlisten)
  observer.unobserve(nodo);
};

const observer = new IntersectionObserver(entries => {
  entries.filter(isIntersecting).forEach(action);
});

export const registerImage = image => {
  //IntersectionObserver -> observar(imagen)
  observer.observe(image);
};

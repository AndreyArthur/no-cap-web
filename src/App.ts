export const App = (): HTMLHeadingElement => {
  const h1 = document.createElement('h1');
  
  h1.textContent = 'Hello, World!';

  return h1;
};
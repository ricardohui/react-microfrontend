import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  // equivalent to ReactDOM.render(<App/>, el);
  el.innerHTML = products;
  console.log(products);
};
// Situation 1: We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINTELY has an element with an id of dev-product
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  //assuming our container does not have an element with id 'dev-products'
  if (el) {
    // we are probably running in isolation
    mount(el);
  }
}
// Context 2: We are running this file in development or produciton through the container app.  there is no guarantee that an element with an id of 'dev-products' will
// We do not want try to immediately render the app.

export { mount };

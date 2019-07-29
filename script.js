var state = {
  products: [],
  isDialogRender: false
};

function init() {

}

function openDialog() {

}

function closeDialog() {
  
}

function addProduct(description, category, vendor, stock) {
  state.products.push({ id: getId() });
  console.log(state.products);
}

function editProduct(description, category, vendor, stock) {
  
}

function deleteProduct(productId) {
  
}

function updateView() {
  
}

function getId() {
  if(state.products.length === 0) {
    return 0;
  } else {
    return state.products[state.products.length - 1].id + 1;
  }
}

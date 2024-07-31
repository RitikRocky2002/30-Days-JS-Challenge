// +++++++++++++++++++++++++++++ Activity 4 : Module Pattern  +++++++++++++++++++++++++++++

// Task 6 : Use closures to create a simple module for managing a collection of items. Implement methods to add, remove and list items.

function itemManager() {
  const items = [];

  function addItem(item) {
    items.push(item);
  }

  function removeItem(item) {
    items.splice(items.indexOf(item), 1);
  }

  function listItems() {
    console.log(items)
  }

  return {
    addItem,
    removeItem,
    listItems,
  };
}

const app = itemManager();

app.addItem("orange");
app.addItem("apple");
app.listItems(); // Output : [ 'orange', 'apple' ]
app.removeItem("orange");
app.listItems(); // Output : [ 'apple' ]

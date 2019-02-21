// This will be our application state, which to begin with
// is just an empty array.
//
// When the user wants to add an item, the javascript will add it to
// this array, and then update the HTML based on what this contains.
var shoppingList = [];

// get a single HTML tag
// selector is a CSS style selector e.g. 'li.myclass'
// number is which of the tags to get from the list of them
function getTag(selector, number) {
  var elements = document.querySelectorAll(selector);
  var el = elements[number];
  return el;
}

// Get all the tags for a specific selector
// selector is a CSS style selector e.g. 'li.myclass'
function getAllTags(selector) {
  return document.querySelectorAll(selector);
}

// This will loop through the items in the shoppingList array
// and add the correct HTML elements to the list
function renderHtmlList() {
  clearHtmlList();
  for (var i = 0; i < shoppingList.length; i = i + 1) {
    var itemNameToAdd = shoppingList[i];
    addItemElementToList(itemNameToAdd);
  }
}

// Get the HTML list element and remove all it's children
// so the shopping list can be fully re-rendered without
// adding the same item multiple times
//
// There are a couple of subtle things here which are due to looping
// over an array that we're also changing
function clearHtmlList() {
  var htmlList = getTag("ul", 0);

  // Get the length in its own variable, not in the loop setup
  // otherwise as we remove child nodes the list length will change
  var length = htmlList.childNodes.length;

  for (var i = 0; i < length; i = i + 1) {

    // always remove the first element instead of using [i]
    // again, because we're changing the list
    var el = htmlList.childNodes[0];
    htmlList.removeChild(el);
  }
}


// Takes the name of an item to add to the list
// Creates the new HTML element with the name given
// itemName is the string value with the new item's name
function addItemElementToList(itemName) {
  var htmlList = getTag("ul", 0);
  var newItemElement = document.createElement("li");
  newItemElement.innerText = itemName;
  newItemElement.className = "list__item";
  htmlList.appendChild(newItemElement);
}

// Get the input box element from the HTML and
// return the string value from it
function getItemNameFromInput(){
  var inputElement = getTag("input", 0);
  return inputElement.value;
}

// Loop through all the items in the list and
// set a class to style them as 'completed'
function completeAllItems() {
  var listItemElements = getAllTags("li");
  for (var i = 0; i < listItemElements.length; i = i + 1) {
    var el = listItemElements[i];
    el.className = "list__item--completed";
  }
}

// This is the callback that gets triggered when a
// user clicks on the button
function buttonClickHandler(){
  var itemName = getItemNameFromInput();

  if (itemName.length > 0) {
    shoppingList.push(itemName);
    renderHtmlList(itemName);
  } else {
    alert("You didn't enter an item!");
  }
}

var button = getTag("button", 0);
button.addEventListener("click", buttonClickHandler)

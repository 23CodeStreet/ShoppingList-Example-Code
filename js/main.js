
// get a single HTML tag
// selector is a CSS style selector e.g. 'li.myclass'
// number is which of the tags to get from the list of them
function getTag(selector, number) {
  var elements = document.querySelectorAll(selector);
  var el = elements[number];
  return el;
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

// This is the callback that gets triggered when a
// user clicks on the button
function buttonClickHandler(){
  var itemName = getItemNameFromInput();

  if (itemName.length > 0) {
    addItemElementToList(itemName);
  } else {
    alert("You didn't enter an item!");
  }
}

var button = getTag("button", 0);
button.addEventListener("click", buttonClickHandler)

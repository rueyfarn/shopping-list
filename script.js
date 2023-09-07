const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem (e) {
   e.preventDefault();

   const newItem = itemInput.value;
  // validate input
   if ( newItem === '') {
      alert("Please add an item");
      return;
   }
  
   // create a new list item
   const li = document.createElement('li');
   li.appendChild ( document.createTextNode(newItem));
   
   const button = createButton("remove-item btn-link text-red", "fa-solid fa-xmark");
   li.appendChild(button);
   console.log(li);

   // add to the itemList
   itemList.appendChild(li);
   itemInput.value = '';
}

function createButton(classes, iconclasses) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon(iconclasses);
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

// Event Listener
itemForm.addEventListener('submit', addItem);
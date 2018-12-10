/* global cuid, Item */
'use strict';

const store = (function () {

  const items = [{
      id: cuid(),
      name: 'apples',
      checked: false
    },
    {
      id: cuid(),
      name: 'oranges',
      checked: false
    },
    {
      id: cuid(),
      name: 'milk',
      checked: true
    },
    {
      id: cuid(),
      name: 'bread',
      checked: false
    }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function (id) {
    return store.items.find(item => item.id === id);
  };

  // store.items[0]. store.findAndDelete.shoppingList.render()

  const addItem = function (name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (error) {
      console.log(`Error is ${error.message}`);
    }
  };

  const findAndToggleChecked = function (id) {
    let item = findById(id);
    if (item.checked) {
      let foundItem = store.items.find(i => i === item)
      foundItem.checked = false;
    } else {
      let foundItem = store.items.find(i => i === item)
      foundItem.checked = true;
    }
  };

  const findAndUpdateName = function (id, newName) {
    try {
      Item.validateName(newName);
      let itemObj = items.findById(id);
      itemObj.name === newName;
    } catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  };

  const findAndDelete = function (id) {
    const filtered = this.items.filter(item => item !== findById(id));
    this.items = filtered
    
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };

}());
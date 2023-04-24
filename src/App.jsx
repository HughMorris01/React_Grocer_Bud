import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';

const setLocalStorage = (list) => {
  localStorage.setItem('list', JSON.stringify(list));
};

const getLocalStorage = () => {
  let localStorageList = localStorage.getItem('list');
  if (localStorageList) {
    localStorageList = JSON.parse(localStorageList);
  } else {
    localStorageList = [];
  }
  return localStorageList;
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: nanoid() };
    const newList = [...items, newItem];
    setItems(newList);
    setLocalStorage(newList);
    toast.success('item was successfully added');
  };

  const deleteItem = (id) => {
    const newList = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newList);
    setLocalStorage(newList);
    toast.success('item was successfully removed');
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      } else {
        return item;
      }
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <main className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} deleteItem={deleteItem} editItem={editItem} />
    </main>
  );
};

export default App;

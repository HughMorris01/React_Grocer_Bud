import { useState } from 'react';
import Form from './Form';
import Items from './Items';

const App = () => {
  const [items, setItems] = useState([
    { name: 'test', completed: true, id: 4 },
  ]);

  const getResult = (result) => {
    const newList = [...items, result];
    setItems(newList);
  };

  const deleteItem = (id) => {
    const newList = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newList);
  };

  return (
    <main className="section-center">
      <Form getResult={getResult} />
      <Items items={items} deleteItem={deleteItem} />
    </main>
  );
};

export default App;

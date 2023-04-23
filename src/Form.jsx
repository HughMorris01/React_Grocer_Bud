import { useState } from 'react';
import { nanoid } from 'nanoid';

const Form = ({ getResult }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      console.log('please enter a value');
    }
    const newItem = { name: text, completed: false, id: nanoid() };
    getResult(newItem);

    setText('');
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="form-input"
          />
          <button type="submit" className="btn">
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;

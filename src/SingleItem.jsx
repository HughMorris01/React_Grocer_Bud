import { useEffect, useState } from 'react';

const SingleItem = ({ item, deleteItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          editItem(item.id);
        }}
      />
      <p className={item.completed ? 'completed' : undefined}>{item.name}</p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => deleteItem(item.id)}
      >
        Remove
      </button>
    </div>
  );
};
export default SingleItem;

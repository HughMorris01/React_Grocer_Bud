import { useEffect, useState } from 'react';

const SingleItem = ({ item, deleteItem }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (item.completed) {
      setIsChecked(true);
    }
  }, []);

  const handleCheck = () => {
    if (!isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const handleClick = () => {
    deleteItem(item.id);
  };

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked && 'checked'}
        onChange={handleCheck}
      />
      <p>{item.name}</p>
      <button type="button" className="remove-btn" onClick={handleClick}>
        Remove
      </button>
    </div>
  );
};
export default SingleItem;

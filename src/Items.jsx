import SingleItem from './SingleItem';
import { nanoid } from 'nanoid';

const Items = ({ items, deleteItem }) => {
  return (
    <section className="items">
      {items.map((item) => {
        return (
          <SingleItem key={nanoid()} item={item} deleteItem={deleteItem} />
        );
      })}
    </section>
  );
};

export default Items;

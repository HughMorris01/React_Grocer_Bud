import SingleItem from './SingleItem';

const Items = ({ items, deleteItem, editItem }) => {
  return (
    <section className="items">
      {items &&
        items.map((item) => {
          return (
            <SingleItem
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          );
        })}
    </section>
  );
};

export default Items;

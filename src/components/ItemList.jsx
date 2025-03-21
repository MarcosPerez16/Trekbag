const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </ul>
  );
};

const Item = ({ item }) => {
  return (
    <li className='item'>
      <label>
        <input checked={item.packed} type='checkbox' /> {item.name}
      </label>
      <button>❌</button>
    </li>
  );
};

export default ItemList;

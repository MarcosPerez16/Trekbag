const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className='item'>
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type='checkbox'
        />{' '}
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default ItemList;

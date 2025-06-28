const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
};

const Item = ({ item, handleDeleteItem, handleToggleItem }) => {
  return (
    <li className='item'>
      <label>
        <input
          onChange={() => handleToggleItem(item.id)}
          checked={item.packed}
          type='checkbox'
        />{' '}
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default ItemList;

import EmptyView from './EmptyView';

const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}

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

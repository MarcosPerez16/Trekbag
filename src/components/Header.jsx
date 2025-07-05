import Counter from './Counter';
import useItemsContext from './lib/hooks';
import Logo from './Logo';

const Header = () => {
  const { items } = useItemsContext();
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
};

export default Header;

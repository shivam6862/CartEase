import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 's1',
    price: 108,
    title: 'Ramayana',
    description: 'The religious and cultural life of the whole of the Indian',
  },
  {
    id: 's2',
    price: 89,
    title: 'Mahabharata',
    description: 'The religious and cultural life of the whole of the Indian',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

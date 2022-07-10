const PRODUCTS = [
  {
    id: 10,
    name: 'Headset',
    price: 2500,
    image: require('../assets/products/headset.jpg'),
    description: 'A headset',
  },
  {
    id: 11,
    name: 'Toy Car',
    price: 600,
    image: require('../assets/products/car.jpg'),
    description: 'A toy car',
  },
  {
    id: 12,
    name: 'Cupcake',
    price: 60,
    image: require('../assets/products/cake.jpg'),
    description: 'A cupcake',
  },
  {
    id: 13,
    name: 'Mobile',
    price: 20000,
    image: require('../assets/products/mobile.png'),
    description: 'A Mobile',
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find(product => product.id == id);
}

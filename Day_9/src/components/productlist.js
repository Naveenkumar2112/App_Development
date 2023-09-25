
import React from 'react';
import './productlist.css';

function GroceryList() {
  const fruitsandvegetables = [
    {
      id: 1,
      name: 'Apples',
      description: 'Fresh and delicious apples',
      price: '₹100',
      imageUrl: '/apple.jpg',
    },
    {
      id: 2,
      name: 'Bananas',
      description: 'Ripe and sweet bananas',
      price: '₹19',
      imageUrl: '/banana.jpg',
    },
    {
      id: 3,
      name: 'Grapes',
      description: 'Fresh and delicious Grapes',
      price: '₹120',
      imageUrl: '/Grapes.jpg',
    },
    {
      id: 4,
      name: 'Strawberry',
      description: 'Tasty Berries',
      price: '₹19',
      imageUrl: '/Strawberry.jpg',
    },
    {
      id: 5,
      name: 'Beetroot',
      description: 'Healthy rooties',
      price: '₹40',
      imageUrl: '/Beetroot.jpeg',
    },
    {
      id: 6,
      name: 'Tomato',
      description: 'Fresh Tomatos',
      price: '₹60',
      imageUrl: '/Tomato.jpg',
    },
    {
      id: 7,
      name: 'carrot',
      description: 'Fresh Carrots',
      price: '₹65',
      imageUrl: '/Carrot.jpg',
    },
    {
      id: 8,
      name: 'Onion',
      description: 'Peel to fry',
      price: '₹60',
      imageUrl: '/Onion.jpg',
    },

    {
      id: 9,
      name: 'Cucumber',
      description: 'Eat to fresh',
      price: '₹15',
      imageUrl: '/Cucumber.jpg',
    },
    {
      id: 10,
      name: 'Cherry',
      description: 'Sweet cherries',
      price: '₹40',
      imageUrl: '/Cheries.jpg',
    },
    {
      id: 11,
      name: 'Dragon Fruit',
      description: 'Fresh Dragon fruit',
      price: '₹120',
      imageUrl: '/Dragon fruit.jpg',
    },
    {
      id: 12,
      name: 'Watermelon',
      description: 'Fresh and refreshing melons',
      price: '₹70',
      imageUrl: '/Watermelon.jpg',
    },
    {
      id: 13,
      name: 'Avacado',
      description: 'Greeny Greeny',
      price: '₹30',
      imageUrl: '/Avacado.jpg',
    },
    {
      id: 14,
      name: 'Peaches',
      description: 'Fresh and refreshing',
      price: '₹90',
      imageUrl: '/Peaches.jpg',
    },
    {
      id: 15,
      name: 'Brinjal',
      description: 'Fresh purple brinjalss!',
      price: '₹30',
      imageUrl: '/Brinjal.jpg',
    },
    {
      id: 16,
      name: 'Oranges',
      description: 'Juicy and sweet oranges',
      price: '₹90',
      imageUrl: '/orange.jpeg',
    },
  ];

  const breadProducts = [
    {
      id: 17,
      name: 'Whole Wheat Bread',
      description: 'Healthy whole wheat bread',
      price: '₹35',
      imageUrl: '/bread.jpeg',
    },
    {
      id: 18,
      name: 'Bagels',
      description: 'Freshly baked bagels',
      price: '₹40',
      imageUrl: '/bagels.jpg',
    },
    {
      id: 19,
      name: 'Bread',
      description: 'Freshly baked bread',
      price: '₹12',
      imageUrl: '/fresh-bread.jpg',
    },
    {
      id: 20,
      name: 'Corn Bread',
      description: 'Healthy whole wheat bread',
      price: '₹35',
      imageUrl: '/Cornbread.jpg',
    },
    {
      id: 21,
      name: 'Hot-Dog Buns',
      description: 'Freshly baked Hot bun',
      price: '₹40',
      imageUrl: '/Hot dog buns.jpg',
    },
    {
      id: 22,
      name: 'Hamburger buns',
      description: 'Freshly baked bun',
      price: '₹12',
      imageUrl: '/Hamburger buns.jpg',
    },
    {
      id: 23,
      name: 'Croissants',
      description: 'Healthy Croissants',
      price: '₹35',
      imageUrl: '/Croissants.jpg',
    },
    {
      id: 24,
      name: 'Rolls',
      description: 'Roll up to eat!',
      price: '₹40',
      imageUrl: '/rolls.jpg',
    },
    {
      id: 25,
      name: 'Muffins',
      description: 'Freshly baked Muffins',
      price: '₹12',
      imageUrl: '/Muffins.jpg',
    },
    {
      id: 26,


name: 'Macarons',
      description: 'Colorful world',
      price: '₹35',
      imageUrl: '/Macarons.jpg',
    },
    {
      id: 27,
      name: 'Sponge Cake',
      description: 'Freshly baked cake',
      price: '₹40',
      imageUrl: '/Sponge cake.jpg',
    },
    {
      id: 28,
      name: 'Bundt Cake',
      description: 'Freshly baked ',
      price: '₹12',
      imageUrl: '/Bundt cake.jpg',
    },
    
  ];
  const meatAndSeafoodProducts = [
    {
      id: 29,
      name: 'Chicken Breast',
      description: 'Boneless chicken breast',
      price: '₹99',
      imageUrl: '/Chicken Breast.jpeg',
    },
    {
      id: 30,
      name: 'Salmon Fillet',
      description: 'Fresh salmon fillet',
      price: '₹299',
      imageUrl: '/salmon fillet.jpg',
    },
    {
      id: 31,
      name: 'Eggs',
      description: 'Farm-fresh eggs',
      price: '₹5.66',
      imageUrl: '/egg.jpeg',
    },
    {
      id: 29,
      name: 'Beef',
      description: 'Grill to find Joy',
      price: '₹299',
      imageUrl: '/Beef.jpg',
    },
    {
      id: 30,
      name: 'Chicken Sausage',
      description: 'Fresh Chicken Sausage',
      price: '₹199',
      imageUrl: '/Chicken sausage.jpg',
    },
    {
      id: 31,
      name: 'Whole Chicken',
      description: 'Farm-fresh eggs',
      price: '₹299',
      imageUrl: '/Chicken.jpg',
    },
    {
      id: 29,
      name: 'Clawn',
      description: 'find joy in digging Clawn',
      price: '₹199',
      imageUrl: '/clams.jpg',
    },
    {
      id: 30,
      name: 'Salmon Fillet',
      description: 'Fresh salmon fillet',
      price: '₹299',
      imageUrl: '/salmon fillet.jpg',
    },
    {
      id: 31,
      name: 'Lambs',
      description: 'Farm-meat',
      price: '₹400',
      imageUrl: '/Lambs.jpg',
    },
    {
      id: 29,
      name: 'Oyster',
      description: 'Seek Happiness',
      price: '₹199',
      imageUrl: '/Oyster.jpg',
    },
    {
      id: 30,
      name: 'Pork',
      description: 'Fresh Pork fillet',
      price: '₹299',
      imageUrl: '/Pork.jpg',
    },
    {
      id: 31,
      name: 'Prawns',
      description: 'Farm-fresh Prawns',
      price: '₹149',
      imageUrl: '/Shrimp.jpg',
    },
  ];

  const NoodlesAndRiceProducts = [
    { 
      id: 32,
      name: 'Spaghetti',
      description: 'Italian spaghetti pasta',
      price: '₹120',
      imageUrl: '/spaghetti.jpg',
    },
    {
      id: 33,
      name: 'Ramen',
      description: 'Korean Ramen!',
      price: '₹99',
      imageUrl: '/Ramen.jpg',
    },
    { 
      id: 34,
      name: 'Shirataki Noodles',
      description: 'Italian Shirataki Noodles',
      price: '₹120',
      imageUrl: '/Shirataki Noodles.jpg',
    },
    {
      id: 35,
      name: 'Soba noodle',
      description: 'Soba noodle.jpg',
      price: '₹399',
      imageUrl: 'Soba noodle.jpg',
    },
    { 
      id: 36,
      name: 'Jasmine Rice',
      description: 'Healthly Jasmine!',
      price: '₹420',
      imageUrl: '/Jasmine Rice.jpg',
    },
    {
      id: 37,
      name: 'Brown Rice',
      description: 'Healthy brown rice',
      price: '₹399',
      imageUrl: '/Brown Rice.jpg',
    },
    { 
      id: 38,
      name: 'Bomba Rice',
      description: 'Healthy Bomba Rice',
      price: '₹250',
      imageUrl: '/Bomba Rice.jpg',
    },
    {
      id: 39,
      name: 'Black Rice',
      description: 'Healthy black rice',
      price: '₹399',
      imageUrl: '/Black Rice.jpg',
    },
  ];

  const oilSaucesProducts = [
    {
      id: 40,
      name: 'Olive Oil',
      description: 'Extra virgin olive oil',
      price: '₹250',
      imageUrl: '/Olive Oil.jpg',
    },
    {
      id: 41,
      name: 'Sunflower oil',
      description: 'Sunflower oil to shine',
      price: '₹500',
      imageUrl: '/Sunflower Oil.jpeg',


},
    {
      id: 42,
      name: 'Mayonnaise.',
      description: 'Extra Mayonnaise to enjoy',
      price: '₹250',
      imageUrl: '/Mayonnaise.jpg',
    },
    {
      id: 43,
      name: 'Tomato Sauce',
      description: 'Classic tomato pasta sauce',
      price: '₹100',
      imageUrl: '/Tomato Sauce.jpg',
    },
  ];

  const coffeeSweetenersProducts = [
    {
      id: 44,
      name: 'Coffee Beans',
      description: 'Freshly roasted coffee beans',
      price: '₹60',
      imageUrl: '/Coffee Beans.jpg',
    },
    {
      id: 45,
      name: 'Sugar',
      description: 'Granulated sugar',
      price: '₹45',
      imageUrl: '/Sugar.jpg',
    },
    {
      id: 46,
      name: 'Honey',
      description: 'Freshly Packed Honey',
      price: '₹60',
      imageUrl: '/Honey.jpg',
    },
    {
      id: 47,
      name: 'Cocoa Powder',
      description: 'Granulated Cocoa Powdwer',
      price: '₹145',
      imageUrl: '/Cocoa Powder.jpg',
    },
  ];

  const cerealsBreakfastProducts = [
    {
      id: 48,
      name: 'Rice Krispies',
      description: 'Healthy  Krispies',
      price: '₹15',
      imageUrl: '/Rice Krispies.jpg',
    },
    {
      id: 49,
      name: 'Cornflakes',
      description: 'Healthy flakes',
      price: '₹45',
      imageUrl: '/Cornflakes.jpeg',
    },
    {
      id: 50,
      name: 'Shredded whole wheat cereal',
      description: 'Healthy whole wheat cereals',
      price: '₹75',
      imageUrl: '/Shredded whole wheat cereal.jpg',
    },
    {
      id: 51,
      name: 'Oatmeal',
      description: 'Instant oatmeal packets',
      price: '₹79.9',
      imageUrl: '/Oatmeal.jpeg',
    },
  ];

  const soupsCannedGoodsProducts = [
    {
      id: 52,
      name: 'Chicken Soup',
      description: 'Homestyle chicken soup',
      price: '₹99',
      imageUrl: '/Chicken Soup.jpg',
    },
    {
      id: 53,
      name: 'Classic mixed vegetable',
      description: 'Homemade Classic mixed vegetable',
      price: '150',
      imageUrl: '/Classic mixed vegetable.jpg',
    },
    {
      id: 54,
      name: 'Peanut Butter',
      description: 'Homestyle Peanut Butter',
      price: '₹129',
      imageUrl: '/Peanut Butter.jpg',
    },
    {
      id: 55,
      name: 'Jam',
      description: 'FreshJam',
      price: '₹20',
      imageUrl: '/Jam.jpg',
    },
  ];

  const frozenFoodsProducts = [
    {
      id: 56,
      name: 'Frozen Pizza',
      description: 'Delicious frozen pizza',
      price: '₹100',
      imageUrl: '/Frozen Pizza.jpeg',
    },
    {
      id: 57,
      name: 'Frozen bacon',
      description: 'Delicious Frozen bacon',
      price: '₹100',
      imageUrl: '/Frozen bacon.jpg',
    },
    {
      id: 58,
      name: 'Frozen Green Peas',
      description: 'Delicious frozen peas',
      price: '₹100',
      imageUrl: '/Frozen Green Peas.jpg',
    },
    {
      id: 59,
      name: 'Frozen Vegetables',
      description: 'Mixed frozen vegetables',
      price: '₹60',
      imageUrl: '/Frozen Vegetables.jpg',
    },
  ];

  const snacksProducts = [
    {
      id: 60,
      name: 'Potato Chips',
      description: 'Crunchy potato chips',
      price: '₹20',
      imageUrl: '/Potato Chips.jpg',
    },
    {
      id: 61,
      name: 'Crackers',
      description: 'Assorted Crackers',
      price: '₹69',
      imageUrl: '/Crackers.jpg',
    },
    {
      id: 62,
      name: 'Nuts',
      description: 'Crack to nut',
      price: '₹55',
      imageUrl: '/Nuts.jpg',
    },
    {
      id: 63,
      name: 'Cereal Bars',
      description: 'Healthy cereal bars',
      price: '₹5',
      imageUrl: '/Cereal Bars.jpg',
    },
  ];
  const dairyProducts = [
    {
      id: 64,
      name: 'Cheese',
      description: 'Cheesy Cheesy',
      price: '₹40',
      imageUrl: '/Cheese.jpg',
    },


{
      id: 65,
      name: 'Butter',
      description: 'Buttery',
      price: '₹40',
      imageUrl: '/Butter.jpg',
    },
    {
      id: 66,
      name: 'Milk',
      description: 'Nutritious milk',
      price: '₹40',
      imageUrl: '/milk.jpg',
    },
    {
      id: 66,
      name: 'Yogurt',
      description: 'Nutritious Yogurt',
      price: '₹40',
      imageUrl: '/Yogurt.jpg',
    },
  ];

  const groceryListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px',
    padding: '20px',
  };

  const groceryItemStyles = {
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    width: '280px',
    marginBottom: '20px',
    cursor: 'pointer',
  };

  const groceryImageStyles = {
    width: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  };

  const groceryDetailsStyles = {
    padding: '15px',
  };

  const groceryNameStyles = {
    fontSize: '1.2rem',
    margin: '0',
  };

  const groceryDescriptionStyles = {
    fontSize: '0.9rem',
    color: '#666',
    margin: '10px 0',
  };

  const groceryPriceStyles = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0',
  };

  const addToCartButtonStyles = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
    marginTop: '10px',
  };

  const addToCartButtonHoverStyles = {
    backgroundColor: '#0056b3',
  };

  const allGroceries = [
    { category: 'fruits and vegetables', items: fruitsandvegetables },
    { category: 'Bread Products', items: breadProducts },
    { category: 'Meat and Seafood', items: meatAndSeafoodProducts },
    { category: 'Noodles and Rice', items: NoodlesAndRiceProducts },
    { category: 'Oil and Sauces', items: oilSaucesProducts },
    { category: 'Coffee and Sweeteners', items: coffeeSweetenersProducts },
    { category: 'Cereals and Breakfast', items: cerealsBreakfastProducts },
    { category: 'Soups and Canned Goods', items: soupsCannedGoodsProducts },
    { category: 'Frozen Foods', items: frozenFoodsProducts },
    { category: 'Snacks', items: snacksProducts },
    { category: 'Dairy Products', items: dairyProducts },
  ];

  return (
    <div className="grocery-list" style={groceryListStyles}>
      {allGroceries.map((category) => (
        <div key={category.category}>
          <h2 className="category-header">{category.category}</h2>
          <div className="category-container">
            {category.items.map((grocery) => (
              <div className="grocery-item" key={grocery.id} style={groceryItemStyles}>
                <img
                  src={grocery.imageUrl}
                  alt={grocery.name}
                  className="grocery-image"
                  style={groceryImageStyles}
                />
                <div className="grocery-details" style={groceryDetailsStyles}>
                  <h3 className="grocery-name" style={groceryNameStyles}>
                    {grocery.name}
                  </h3>
                  <p className="grocery-description" style={groceryDescriptionStyles}>
                    {grocery.description}
                  </p>
                  <p className="grocery-price" style={groceryPriceStyles}>
                    {grocery.price}
                  </p>
                  <button
                    className="add-to-cart"
                    style={addToCartButtonStyles}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroceryList;
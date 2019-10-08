import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Contexts
import ProductContext from './contexts/productContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products, setProducts] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};
	const removeItem = (id) => {
		let currentProducts = data;
		currentProducts.map(item => {
			if(item.id === id) {
				currentProducts.splice(currentProducts.indexOf(item), 1);
			}
		})
		setProducts(currentProducts);
	}

	return (
		<div className="App">
			{/* Navigation Component */}
			

			{/* Routes */}
			{/* Product Route */}
			<ProductContext.Provider value={products, addItem, removeItem}>
				<Route
					exact
					path="/"
					component={Products}
				/>
				{/* Shopping Cart Route */}
				<CartContext.Provider value={cart}>
					<Navigation cart={cart} />
					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;

import React from 'react';

const Item = () => {
	return (
		<div className="shopping-cart_item">
			<img src={image} alt={`${title} book`} />


			<div>
				<h1>{title}</h1>
				<p>$ {price}</p>
				<button>Remove from cart</button>
			</div>
			{/* <button onClick={this.props.deleteTask.bind(this, id)}>
                    Delete Todo
                </button> */}
		</div>
	);
};

export default Item;

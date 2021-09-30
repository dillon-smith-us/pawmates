import React from "react";
import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";

function ProductItem(item) {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { image, name, _id, zipcode } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>

        <img
          className="pupimages"
          alt={name}
          src={`/images/${image}`}
        />

        <p>{name}</p>
      </Link>
      <div>
        <span>Zip code: {zipcode}</span>
      </div>
      <button onClick={addToCart}>Add to liked</button>
    </div>
  );
}

export default ProductItem;

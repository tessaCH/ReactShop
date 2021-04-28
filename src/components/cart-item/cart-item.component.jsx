import React from 'react';
//import { connect } from 'react-redux';
//import { addItem } from '../../redux/cart/cart.actions'
//import CustomButton from '../custom-button/custom-button.component';
import './cart-item.styles.scss';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <div className='cart-item'>
    <img src = {imageUrl} alt={name} />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x ${price}</span>
    </div>
  </div>
);

export default CartItem;

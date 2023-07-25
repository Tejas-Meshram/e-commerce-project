import React from 'react'
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';

const Checkout = () => {

 const { total_amount } = useCartContext();
 const { myUser } = useUserContext();


  return (
      <div>
      <article>
          <h4>Hello, {myUser && myUser.name}</h4>
          <p>Your total is {formatPrice(total_amount)}</p>
        </article>
    </div>
  )
}

export default Checkout




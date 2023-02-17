import React, { useEffect, useState } from 'react'
import { BsCart4 } from "react-icons/bs";
import '../../Styles/cart.css';
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineAddCircle } from "react-icons/md";
import { AiFillMinusCircle } from "react-icons/ai";
import Pictures from '../Components/Pictures';


export default function Cart({ cart, setCart }) {

  const [cartTotal, setCartTotal] = useState(0);

  const addItem = (item) => {
    cart.map((product, index) => {
      if (product.id === item.id) {
        var temp;
        temp = cart;
        temp[index].quantity += 1;

        setCart([...temp]);
        handlePrice();
      }
      return index;
    })
  }

  const removeItem = (item) => {
    cart.map((product, index) => {
      if (product.id === item.id) {
        var temp;
        temp = cart;
        temp[index].quantity -= 1;
        if (temp[index].quantity === 0) {
          const removeIndex = temp.findIndex((item) => item.quantity === 0);
          temp.splice(removeIndex, 1);
        }
        setCart([...temp]);
        handlePrice();
      }
      return index;
    })
  }

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.quantity * item.price));
    setCartTotal(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const deleteItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };


  return (
    <div className='container'>
      <h1 className='myCartHeading'>My Cart&nbsp;&nbsp;<BsCart4 /></h1>
      <table className='myTable'>
        <thead className='taleHead'>
          <th></th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
          <th>Total Price</th>
          <th></th>
          <th>Remove Item</th>
        </thead>
        <tbody>
          {
            cart.map((item) => {
              const { id, name, price, image, quantity } = item;
              const total = price * quantity;
              return (
                <tr key={id} className="tableRow">
                  <td><img src={image} className="card-img-top tableCardImg" alt="..." /></td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{quantity}</td>
                  <td onClick={() => removeItem(item)}>
                    <AiFillMinusCircle className='deleteIcon' />
                  </td>
                  <td>{total}</td>
                  <td onClick={() => addItem(item)}>
                    <MdOutlineAddCircle className='deleteIcon' />
                  </td>

                  <td onClick={() => deleteItem(id)}><AiFillDelete className='deleteIcon' /></td>


                </tr>
              )
            })
          }
          <tr className='totalRow'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='boldText'>Total Price</td>
            <td className='boldText'> {cartTotal}</td>
          </tr>
        </tbody>
      </table>

      <Pictures />
      
    </div>
  )
}


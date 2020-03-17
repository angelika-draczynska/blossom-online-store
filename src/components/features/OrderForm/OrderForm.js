import React, { useState } from 'react';
import OrderFormTemplate from './OrderFormTemplate';
import axios from 'axios';
import styles from './OrderForm.module.scss';
import { Redirect } from 'react-router';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';

const OrderForm = ({ totalPrice, cart, clearCart }) => {
  const [redirect, fireRedirect] = useState(false);
  const sendOrderHandler = userOptions => {
    const user = userOptions;
    const products = cart.products.map(product => {
      const orderProduct = {
        productId: product._id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        totalAmount: product.price * product.quantity,
        
      }
      if(product.note) {
        orderProduct.note = product.note;
      }
      return orderProduct;
    });
    const url = `http://localhost:8000/api/orders/`;

    axios
      .post(url, {
        user,
        totalPrice,
        products
      })
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          clearCart();
          fireRedirect(true);
        }
      })
      //       setSuccess();
      //     } else {
      //       setError();
      //     }
      //   })
      .catch(error => {
        // setError(error.message)
      });
  };
  const { fields, methods } = OrderFormTemplate(cart);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          sendOrderHandler(fields);
        }}
      >
        <label className={styles.label}>Name and surname: *</label>
        <input
          className={styles.input}
          onChange={e => {
            methods.setName(e.target.value);
          }}
          id="name"
        />
        <label className={styles.label}>Address: *</label>
        <input
          className={styles.input}
          onChange={e => {
            methods.setAddress(e.target.value);
          }}
          id="address"
        />
        <label className={styles.label}>Number: *</label>
        <input
          className={styles.input}
          onChange={e => {
            methods.setPhoneNumber(e.target.value);
          }}
          id="phoneNumber"
        />
        <label className={styles.label}>Note about order:</label>
        <textarea
          className={styles.input}
          onChange={e => {
            methods.setComment(e.target.value);
          }}
          id="comment"
        />
        <div className={styles.button}>
          <Button>Send Order</Button>
        </div>
      </form>
      <Modal show={redirect} message={'Your order was successfully sent to the shop! For more informations check your e-mail.'} title={'Success!'}/>
      {/* {redirect ? <Redirect to="/" /> : null} */}
    </>
  );
};

export default OrderForm;

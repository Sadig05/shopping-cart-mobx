import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../models/Shop";
import { useStore } from "../../stores/RootStore";
import style from "./cart.module.scss";

const Cart = () => {
  const { shopStore } = useStore();

  return (
    <div className={style.cart}>
      <h1>Shopping Cart</h1>
      {shopStore.products.map((item: IProduct) => {
        return (
          <div className={style['cart-item']} key={item.id}>
            <div className={style["product-info"]}>
              <h3>{item.title}</h3>
              <p>Quantity: {item.amount}</p>
            </div>
            <div className={style.actions}>
              <button onClick={() => shopStore.removeFromCart(item.id)}>
                Remove
              </button>
              <button onClick={() => shopStore.incAmount(item)}>+</button>
              <button onClick={() => shopStore.decAmount(item)}>-</button>
            </div>
          </div>
        );
      })}
      <h1>Total: {shopStore.totalPrice}</h1>
    </div>
  );
};

export default observer(Cart);
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../models/Shop";
import { useStore } from "../../stores/RootStore";
import style from "./cart.module.scss";
const Cart = () => {
  const { shopStore } = useStore();

  return (
    <div className={style["cart"]}>
      Cart
      {shopStore.products.map((item: IProduct) => {
        return (
          <div className={style["cart-item"]}>
            <div>
              <h3>{item.title}</h3>
              <p className={style["amount"]}>{item.amount}</p>
            </div>
            <button onClick={() => shopStore.removeFromCart(item.id)}>
              remove
            </button>
            <button onClick={() => shopStore.incAmount(item)}>+</button>
            <button onClick={() => shopStore.decAmount(item)}>-</button>
          </div>
        );
      })}
      <h1>{shopStore.totalPrice}</h1>
    </div>
  );
};

export default observer(Cart);

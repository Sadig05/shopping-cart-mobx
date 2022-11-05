import { observer } from "mobx-react";
import React from "react";
import data from "../../data";
import { useStore } from "../../stores/RootStore";
import style from "./shop.module.scss";
const Shop = () => {
  const {shopStore} = useStore();
  return (
    <div className={style["shop"]}>
      {data.map((item) => {
        return (
          <div>
            <div>
              <img className={style["book-img"]} src={item.img} alt="" />
            </div>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <button onClick={() => shopStore.addToCart(item)} >add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default observer(Shop);

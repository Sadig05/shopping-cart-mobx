import React from "react";
import style from "./navbar.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStore } from "../../stores/RootStore";
import {observer} from 'mobx-react'

const Navbar = () => {
  const { shopStore } = useStore();
  return (
    <div className={style["navbar"]}>
      <div onClick={shopStore.showMainPage} >Books</div>
      <div onClick={shopStore.showCart} >
        <span>
          <AiOutlineShoppingCart />
        </span>
        <span>{shopStore.size}</span>
      </div>
    </div>
  );
};

export default observer(Navbar);

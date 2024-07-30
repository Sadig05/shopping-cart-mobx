import { observer } from "mobx-react";
import data from "../../data";
import { useStore } from "../../stores/RootStore";
import style from "./shop.module.scss";
import { formatCurrency } from "../../utils/formatCurrency";

const Shop = () => {
  const { shopStore } = useStore();
  return (
    <div className={style.shop}>
      {data.map((item) => (
        <div key={item.id} className={style.product}>
          <img className={style["book-img"]} src={item.img} alt={item.title} />
          <div className={style["product-info"]}>
            <p className={style.title}>{item.title}</p>
            <p className={style.author}>{item.author}</p>
            <p className={style.price}>{formatCurrency(item.price)}</p> 
          </div>
          <button onClick={() => shopStore.addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default observer(Shop);

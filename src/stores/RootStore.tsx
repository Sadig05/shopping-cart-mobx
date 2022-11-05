
import { makeAutoObservable, configure } from "mobx";
import { createContext , ReactNode, useContext} from "react";
import ShopStore from "./ShopStore";

configure({
  enforceActions: "never"
})

export class RootStore {
  shopStore: ShopStore;

  constructor() {
    makeAutoObservable(this);
    this.shopStore = new ShopStore();
  }
}

interface IStoreComponent {
    store: RootStore;
    children: ReactNode;
  }
  


export const StoreContext = createContext<RootStore> ({} as RootStore);

export const StoreProvider = ({ children, store }: IStoreComponent) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext<RootStore>(StoreContext);

export default RootStore;
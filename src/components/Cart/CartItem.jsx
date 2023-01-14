import { ItemDescription } from "../ItemDescription";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { removeItem } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

import { formatNumber } from "../../helpers";

export const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const { brand, model, price, imageURL } = item.item;
  const { qty } = item;
  const total = formatNumber(qty * Number(price));

  const onRemoveClick = () => {
    dispatch( removeItem(item) );
  }

  return (
    <div className="py-10 border-b-2 border-slate-300 flex relative dark:border-teal-400">
      
      <figure className="bg-slate-100 w-44 h-44 dark:bg-gray-800 overflow-hidden flex justify-center">
        <img
          src={imageURL} alt="" className="h-44 max-w-fit"
        />
      </figure>

      <div
        className="h-44 pl-4 flex flex-col justify-between"
        style={{width: 'calc(100% - 11rem)'}}
      >
        
        <ItemDescription brand={brand} model={model} price={price} small/>

        <div>
          <span className="py-1 px-3 ring-1 ring-slate-300 rounded-sm text-slate-600 dark:ring-teal-400 dark:text-teal-400">
            x{qty}
          </span>
          <span className="block 2xs:inline-block pl-2 pr-5 bg-slate-200 max-w-xs min-w-max w-7/12 md:w-2/3 lg:w-64 rounded-r-md text-slate-800 dark:bg-teal-500 dark:text-white">
            $ {total}
          </span>
        </div>

        <button
          className="absolute top-1 right-0 px-3 py-1"
          onClick={onRemoveClick}
        >
          <XMarkIcon className="w-6 h-6 text-slate-500 dark:text-teal-400"/>
        </button>

      </div>

    </div>
  )
}
export const CartDetail = ({type, value, bold = false}) => {

  const fontWeight = bold ? "font-bold text-base border-transparent" : "text-sm border-slate-300 dark:border-teal-400";

  return (
    <div 
      className={`${fontWeight} py-3 flex justify-between w-64 2xs:w-72`}
      style={{borderBottomWidth: '1px'}}
    >
      <span className=" dark:text-white">{type}</span>
      <span className="font-medium dark:text-white">$ {value}</span>
    </div>
  )
}
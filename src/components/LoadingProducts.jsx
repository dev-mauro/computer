const CardPlaceholder = () => {
  return (
    <div
      style={{height: '400px'}}
      className="group shrink-0 relative flex flex-col w-72 bg-slate-200 border-b-2 border-b-teal-400 rounded-md shadow-lg hover:shadow-xl dark:border-teal-400 dark:bg-slate-800 animate-pulse"    
    >
    </div>
  )
}

const mapCards = (number) => {
  const cardArray = [];
  for(let i = 0; i < number; i++)
    cardArray.push(<CardPlaceholder key={i}/>);

  return cardArray;
}

export const LoadingProducts = ({justify = 'center', wrap = true}) => {

  const cardNumber = justify == 'center' ? 6 : 3; 
  wrap = (wrap) ? 'flex-wrap max-w-7xl gap-x-10' : 'overflow-x-scroll gap-x-5 xl:overflow-x-auto pb-5 custom-scrollbar';

  return (
    <div className={`flex ${wrap} justify-${justify}  gap-y-12 mx-auto`}>

      {
        mapCards(cardNumber)
      }

    </div> 
  )
}
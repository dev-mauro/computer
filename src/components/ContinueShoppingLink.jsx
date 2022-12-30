import { Link } from 'react-router-dom';
import { MiniLeftArrow } from './MiniLeftArrow';

export const ContinueShoppingLink = ({text = "Continúa comprando"}) => {
  return (
    <Link 
      className="text-teal-500 font-bold ml-2 hover:text-teal-400"
      to="/home"
    >
      { text }
      <MiniLeftArrow/>
    </Link>
  )
}
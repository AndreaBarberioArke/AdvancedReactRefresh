import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import "./MeetupItem.css";
import Card from "../ui/Card";

interface Props {
  image?: string;
  id?: string| number,
  title?: string;
  address?: string;
  description?: string;
}

export const MeetupItem: React.FC<Props> = (props: Props | any) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if(itemIsFavorite){
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title, 
        description: props.description, 
        image: props.image,
        address:props.address,
      });
    }
  }

  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div>
          <h3>{props.title} </h3>
          <address>{props.address} </address>
          <p>{props.description}</p>
        </div>
        <div className="actions">
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;

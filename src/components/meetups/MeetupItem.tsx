import "./MeetupItem.css";
import Card from "../ui/Card";

interface Props {
  image?: string;
  title?: string;
  address?: string;
  description?: string;
}

export const MeetupItem: React.FC<Props> = (props: Props) => {
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
          <button>To Favorites</button>
        </div>
      </Card> 
    </li>
  );
};

export default MeetupItem;

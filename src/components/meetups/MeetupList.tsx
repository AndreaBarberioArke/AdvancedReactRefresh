import MeetupItem from "./MeetupItem";
import "./MeetupList.css"
interface Props {
  meetups: string | any;
  id?: string;
  image?: string;
  title?: string;
  description?: string;
  
}

export const MeetupList: React.FC<Props> = (props) => {
  return (
    <ul className="list">
      {props.meetups.map((meetup: Props) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
          
        />
      ))}
    </ul>
  );
};

export default MeetupList;

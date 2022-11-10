import Card from "../ui/Card";
import "./NewMeetupForm.css";
import { useRef } from "react";
interface Props {
  onAddMeetups: any;
}
export const NewMeetupForm = (props: Props) => {
  const titleInputRef = useRef<any| undefined>();
  const imageInputRef = useRef<any | undefined>();
  const addressInputRef = useRef<any | undefined>();
  const descriptionInputRef = useRef<any | undefined>();

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current?.value;
    const enteredImage = imageInputRef.current?.value;
    const enteredAddress = addressInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;
   
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,

    }
   props.onAddMeetups(meetupData); 
    
  }
  return (
    <Card>
      <form action="" className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className="control">
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="description" >Meetup Description</label>
          <textarea
            name="control"
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
          <div className="actions">
            <button>Add Meetup</button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;

import NewMeetupForm from "../components/meetups/NewMeetupForm";
// import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
interface DummyData {
  id: string;
  title: string;
  image: string;
  address: string;
  descriptions: string;
}
export const NewMeetup = () => {
  const navigate = useNavigate();
  async function addMeetupHandler(meetupData: DummyData) {
    fetch(
      "https://react-adv-refresh-default-rtdb.firebaseio.com/meetups.json",
      {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });

    // axios
    //   .post(
    //     "https://react-adv-refresh-default-rtdb.firebaseio.com/meetups.json",
    //   )
    //   .then((res: {}) => {
    //     console.log(res);
    //   })
    //   .catch((error: {}) => {
    //     console.log(error);
    //   });
    // const response: AxiosResponse = await axios({
    //   method: "post",
    //   url: "https://react-adv-refresh-default-rtdb.firebaseio.com/meetups.json",
    //   data: JSON.stringify(meetupData),
    //   headers: { "Content-Type": "application/json" },
    // })
    // console.log(response);
  }

  return (
    <div>
      <h1>New Meetups</h1>
      <NewMeetupForm onAddMeetups={addMeetupHandler} />
    </div>
  );
};
export default NewMeetup;

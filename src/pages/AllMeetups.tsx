import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
export const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(true);
  const [loadedMeetups, setLoadedMeetups] = useState<boolean[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-adv-refresh-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};
export default AllMeetups;

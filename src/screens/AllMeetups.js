import { useEffect, useState } from "react";
import MeetupsList from "../components/meetups/MeetupsList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [AllMeetupsArray, setMeetupsArray] = useState([]);

  useEffect(() => {
    fetch("https://react-app-5892c-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((extractedata) => {
        let meetupsData = [];
        for (let key in extractedata) {
          meetupsData.push(extractedata[key]);
        }
        setIsLoading(false);
        setMeetupsArray(meetupsData);
      });
  },[]);

  if (isLoading) {
    return (
      <section>
        <h3>Please wait......!</h3>
      </section>
    );
  }
  return (
    <div>
      <section>
        <h1>All Meetings</h1>
        {/* <ul>
          {DUMMY_DATA.map((meetup) => {
            return <li key={meetup.id}>{meetup.title}</li>;
          })}
        </ul> */}
        <MeetupsList meetups={AllMeetupsArray} />
      </section>
    </div>
  );
}

export default AllMeetups;

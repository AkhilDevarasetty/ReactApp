import MeetupsItem from "./MeetupsItem";
import className from "./MeetupsList.module.css";

function MeetupsList(props) {
  return (
    <ul className={className.list}>
      {props.meetups.map((meetup) => (
        <li key={meetup.id}>
          <MeetupsItem
            image={meetup.imgUrl}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        </li>
      ))}
    </ul>
  );
}
export default MeetupsList;

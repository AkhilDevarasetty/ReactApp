import Card from "../ui/Card";
import classes from "./MeetupsItem.module.css";

function MeetupsItem(props) {
  console.log("Image url---------->",props.imgUrl);
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>Add to Favourite</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupsItem;

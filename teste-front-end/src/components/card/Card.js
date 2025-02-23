import "../../styles/Card.scss";
export default function Card(props) {
  // console.log(props)
  return (
    <div className={props.className}>
      <img src={props.url} alt={props.Category ? props.Category : ""} />
      {props.title && (<p>{props.title}</p>)}
    </div>
  );
}

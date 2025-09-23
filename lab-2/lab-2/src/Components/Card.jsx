export default function Card(props){
    return(
        <div className="props-contain">
            <img src={props.image} alt="" width="120px"/>
            <h3>{props.name}</h3>
            <p>{props.resort}</p>
            {props.rating >"4.0 ★" ? <h4 className="rating-style">{props.rating}</h4> : <h4 className="ratingbad-style">{props.rating}</h4>}
            <p>{props.price}</p>
        </div>
    )
}

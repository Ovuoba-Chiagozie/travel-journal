import location from "../img/Fill 219.png" 
const Card = (props) => {
    console.log(props)

    return(

    <div className="cards">
        <img src={props.item.imageUrl}/>
        <div className="cards--explainer">
            <div className="country--div">
            <img src={location}/>
            <span>{props.item.location}</span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{props.item.title}</h1>
            <h3>{props.item.startDate} - {props.item.endDate}</h3>
            <p>{props.item.description}</p>
        </div>
    </div>

    )

}

export default Card
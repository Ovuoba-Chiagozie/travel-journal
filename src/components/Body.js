import Card from "./Card"
import data from "./data"
const Body = () => {

    let cardArray = data.map(value => {
      let  info = <Card item = {value}/>

      return info
    })

    return(

        <div className="mainbody">
            {cardArray}
        </div>

    )

}

export default Body
import Ramdan from "../imges/logen.png";
import "./Ram.css"
export default function Ramprops(props){
    
    return(
        <div className="titel-Ram">
        <img src={props.img} alt="Error"  width="270px" height="370px" className="imges-Ram"/>
       


        <div className="Ram-button">
        <h1 >{props.titel}</h1>
        <h4 >{props.decs}</h4>
        <h4 className="rate">{props.rate}</h4>
        <button class="rating__star"><div className="st-vc">★</div></button>
        
        <img src={Ramdan} width='48px' height="48px" className="asa"/>
        </div>



      


        

        </div>

    )
}
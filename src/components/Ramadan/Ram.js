// import { data } from "../SideMenu/Data";
import Ramprops from "../Ramadan/Ramprops";
import "../Ramadan/Ram.css"
import { data } from "../Ramadan/Data";
export default function Ram(){
    // const dataShow=data.map((el)=><Sidprops title={el.title} desc={el.decs} />)
    const dataShow=data.map((el)=>{
        return(
            
            <Ramprops titel={el.title} img={el.img}  decs={el.decs} rate={el.rate}/>
        )
    })
    return(
        <div className="w">
        
        {dataShow}
        </div>
    )
}
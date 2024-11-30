// import { data } from "../SideMenu/Data";
import Sidprops from "../SideMenu/Sidprops";
import "../SideMenu/SideMenu.css"
import { data } from "../SideMenu/Data";
export default function SideMenu(){
    // const dataShow=data.map((el)=><Sidprops title={el.title} desc={el.decs} />)
    const dataShow=data.map((el)=>{
        return(
            
            <Sidprops titel={el.title} img={el.img}  decs={el.decs}/>
        )
    })
    return(
        <div className="w">
        
        {dataShow}
        </div>
    )
}
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./MyHeader.css"
import SideMenu from "../SideMenu/SideMenu";
import post from "../Post/Post";
import Post from "../Post/Post";
import Anim from "../Anime/Anim";
import Rmadan from "../Post/Rmadan";
import Ram from "../Ramadan/Ram";
import Action from "../Post/Action";
import Header from "./Header";
import Stor from "../Post/Stor";
// import Button from "../Post/Button";

export default function MyHeader(){
    return(
        <>
        
 <Header/>
<SideMenu />
<Post />
<Anim />
<Rmadan />
<Ram />
<Action />
<Stor/>
{/* <Button /> */}








        </>
    )
}
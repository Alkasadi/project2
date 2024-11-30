import "./Anim.css";

// import AnimData from "../Anime/AnimData";
import logen from "../imges/logen.png";
import { useRef ,useState ,useEffect } from "react";
import  AnimeList  from "../Anime/AnimeList";


export default function Anim() {

    const[Anime,setAnime]=useState([]);

    const getData=async()=>{
        const res=await fetch("https://api.jikan.moe/v4/top/anime?type=movie");

        const rest=await res.json();
        setAnime(rest.data);
    };
    // console.log(Anime);
    useEffect(()=>{
        getData()
    },[]);

// const prev=()=>iamgeCont.current.scrollLeft -= 250
  return (
    <>               

    {/* <div className="a">
        
        <button className="s" onClick={prev}>Next</button>
        <button className="z">Ok</button>

        <div className="d" ref={iamgeCont}>
        <img src= 
"https://cdn.myanimelist.net/images/anime/1862/95624l.jpg"alt="dfd" width="200px" className="logen" />
    <img src={logen} alt="dfd" width="200px" className="logen" />
    <img src={logen} alt="dfd" width="200px" className="logen" />

        </div>



    </div> */}
                    {/* <img src="https://cdn.myanimelist.net/images/anime/1862/95624l.jpg"/> */}

    {/* <AnimData animedata={Anime}/> */}
    <AnimeList animeList={Anime}/>

    </>
  );
}

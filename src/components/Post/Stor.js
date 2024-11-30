import { useState ,useEffect } from "react";
import"./Stor.css";
export default function Stor(){
    
    const[move,setAnime]=useState([]);

    const getData=async()=>{
        const res=await fetch("https://api.jikan.moe/v4/top/anime?type=ona");
        const rest=await res.json();
        setAnime(rest.data);
    };
    console.log(move);
    useEffect(()=>{
        getData()
    },[]);
    // console.log(move);

  return(
    <div className="namestore">
    {move?.length ===0 && <span class="loaderr"></span>}
    {move?.length >0 &&(
        <div className="movestor">
         {
        move.filter(item=>item.mal_id!==50407)?.map((item)=>{
            return(
                <div key={item.mal_id}>
                <img src={item.images.jpg.large_image_url} width="240px" height="325px" className="stor"/>

                </div>
            );
        })
    }</div>

    )}
   
    </div>
  )
}


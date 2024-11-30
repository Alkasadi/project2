import "./AnimeList.css";
export const AnimeList=({animeList})=>{
    return(
        <div className="a">
             {
        animeList.map((el)=>{
            return(
                <>
                <div className="bo">
                    <img src={el.images.jpg.large_image_url} width="270px" height="370px" className="as"/>
                    <button className="move-anme">افلام أنمي</button>

                        <div className="bo-text">
                            
                            <div className="titel-text">

                            <h4 >{el.title}</h4>
                            </div>
                            
                        </div>



                   
                </div>
                
                </>
            )
        })
    }

        </div>
    )
}
export default AnimeList;
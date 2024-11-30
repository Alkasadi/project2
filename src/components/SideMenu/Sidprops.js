import "./SideMenu.css"
export default function Sidprops(props){
    return(
        <div className="titel-link">
        <img src={props.img} alt="Error"  width="270px" height="340px" className="imges"/>
        <div class="rating">
    <button class="rating__star">☆</button>
    <button class="rating__star">☆</button>
    <button class="rating__star">☆</button>
    <button class="rating__star">☆</button>
    <button class="rating__star" >★</button>
</div>



        <div className="titel-button">
            <div className="titel-decs"></div>
        <h1 >{props.titel}</h1>
        <h4 >{props.decs}</h4>
        </div>

        <button className="b-button"><div className="button-work">مشاهدة<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-camera-reels-fill" viewBox="0 0 16 16">
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>
</svg></div></button>


      


        

        </div>

    )
}
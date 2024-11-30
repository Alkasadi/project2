import React, { useState, useRef } from 'react';
import { data } from '../Data/Data';
import vid from "../Video/FOLLOW~1.MP4";
import "./Vidu.css";

export default function Vidu() {
  const [currentVideo, setCurrentVideo] = useState(vid);
  const [currentTitle, setCurrentTitle] = useState("من افضل المشاهد في الافلام");
  const [currentDose, setCurrentDose] = useState("  الاحمد محفوظ");
  const lastpara = useRef();

  const moveDown = () => {
    lastpara.current.scrollIntoView({
      // behavior:"smooth"
    }); // Corrected scroll method

  };
  // console.log(moveDown)

  function changeImage(videoSrc, videoTitle, videoDose) {
    setCurrentVideo(videoSrc);
    setCurrentTitle(videoTitle);
    setCurrentDose(videoDose);
    lastpara.current.scrollIntoView({
      // behavior:"smooth"
    });
  }

  const showdata = data.map((el) => (
    <div className='chang-group' key={el.id}>
      <video
        src={el.vide}
        className='chang-vid'
        onClick={() => changeImage(el.vide, el.titel, el.dose,moveDown)}width="300px"type="video/mp4"controls loop autoPlay muted height="250px"/>
      <div className='chang-titel'>
        {/* <button onClick={moveDown}>Okk</button> */}
        <h1 className='chang-name' onClick={() => {changeImage(el.vide, el.titel, el.dose,moveDown)}}>{el.titel}</h1>
        <h1 className='chang-name' onClick={() => changeImage(el.vide, el.titel, el.dose,moveDown)}>{el.dose}</h1>
      </div>
    </div>
  ));

  return (
    <div>
      <div className='action-vide'ref={lastpara}>
        <video src={currentVideo}  className='vid' width="80%" height="350px" type="video/mp4" controls loop autoPlay  />
        <div className='group-titel'>
          <h1 className='title-vid' >{currentTitle}</h1>
          <h1 className='title-vid' >{currentDose}</h1>
        </div>
      </div>
      {showdata}
    </div>
  );
}
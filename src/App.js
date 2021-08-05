import React,{useState} from "react";
import "./style.scss";
import { ImPrevious } from "react-icons/im";
import { ImPause } from "react-icons/im";
import { ImPlay2 } from "react-icons/im";
import { ImNext } from "react-icons/im";
export default function App() {

  const [animationText, setAnimationText] = useState(0);

let musicList = [
"http://k007.kiwi6.com/hotlink/i439fjfmqh/Shake_-JaeJoe_Ft._AceahSpades_and_Thrillz.mp3",

"http://k007.kiwi6.com/hotlink/3yr5g29xpq/Post-Nuclear_Apocalypse_Blues.mp3",

"http://k007.kiwi6.com/hotlink/sce3rezufz/Shadow_Puppets.mp3",

"http://k007.kiwi6.com/hotlink/dvqo71eevo/Ummon_-_Hiyonat_SAD_with_Lyrics_-_ATR_Music_Inc.mp3",
"http://k007.kiwi6.com/hotlink/3x5u3snc2k/10._One_Love.mp3"

]

let corrent = 0;
let music = new Audio(musicList[corrent]);

function getmusicName(){
  let music_title = musicList[corrent].split("/");
   let musicNam = music_title[music_title.length-1];
    musicName.innerText= " 👨‍💻Doniyorbek.uz  "+ musicNam;
}


function Play(){
  music.play();
  pause.style.display="block";
  play.style.display="none";
  getmusicName()

}

function Pause(){
  music.pause();
  pause.style.display="none";
  play.style.display="block";
  getmusicName()
 
}

function Next(){
  corrent++;
  if(musicList[corrent] !== undefined){
    music.pause();
    music = new Audio(musicList[corrent]);
    music.play();
    getmusicName()
  }
}

function Prev(){
  corrent--;
  if(musicList[corrent] !== undefined){
    music.pause();
    music = new Audio(musicList[corrent]);
    music.play();
    getmusicName()
  }
}

  return (
    <div className="music-app">
      <div className="musicNameBox">
      <p id="musicName"></p>
      </div>
        <div className="button-box">

        <ImPrevious
         className="btn" 
        onClick={Prev}
        />

      <ImPause
       className="btn"
        style={{display: "none"}}
         id="pause"
         onClick={Pause}
      />

      <ImPlay2 
      className="btn"
       id="play"
        onClick={Play}
        />
      
      <ImNext
       className="btn"
      onClick={Next}
      />

        </div>
    </div>
  );
}

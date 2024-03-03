import { useState } from 'react'
import './App.css'
import ValentineGif from './ValentineGif'
import Button_yes from './Button_Yes'
import Button_no from './Button_No'
import valentine_gif_yes from './assets/images/bear-kiss-bear-kisses.gif';
const lists = ["Na pewno?","Jesteś pewna?","Żartujesz nie?","Daj spokój będzie fajnie","Na pewno na pewno?"];
function App() {
  const [isClickingYes,setClickYes] = useState(false);
  const [isClickingNo,setClickNo] = useState(false);
  function handleClickYes(){
    setClickYes(true);
  }
  function handleClickNo(){
    setClickNo(true);
  }
  
  function randomInt(max){
    return Math.floor(Math.random() * max);
  }

  let website = <div><ValentineGif></ValentineGif>
  <p id='valentine-p'>
    Zostaniesz moją Walentynką?
  </p>
  <div id="buttons-div">
    <Button_yes onSetClick={handleClickYes} id="button-yes"></Button_yes>
    <Button_no onSetClick={handleClickNo} >Nie</Button_no>
  </div>
  </div>
  if(isClickingYes){
    website = <div id="div-yes">
      <img src={valentine_gif_yes} alt="Will be my valentine?"></img>
      <p id="valentine-p">Wiedziałem ❤️❤️❤️</p>
      </div>
  }
  else if(isClickingNo){
    let number = randomInt(5);
    console.log(number);
    let text = lists[number];
    number++;
    let id = "v";
    id += number.toString();
    website = <div><ValentineGif></ValentineGif>
    <p id='valentine-p'>
      Zostaniesz moją Walentynką?
    </p>
    
    <div id="buttons-div">
      <Button_yes onSetClick={handleClickYes} id={id}></Button_yes>
      <Button_no onSetClick={handleClickNo}>{text}</Button_no>
    </div>
    </div>
    }
    
  return (
    <div id="valentine-card">
      {website}
    </div>
  );
}

export default App

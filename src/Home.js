import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import A1 from "./A1.png";
import A2 from "./A2.png";
import A3 from "./A3.png";
class Home extends Component{ 
render(){return(
    <div className="home">

      <br></br>
      <br></br>
      <div></div>
      <br></br>
      <div className="left" Style="padding-left: 20px;"><h2>Quick Selection:</h2></div>
      <div className="container-fluid" Style={"padding: 10px"}><Coverflow className="container-fluid mx-auto" width="1800" height="500"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={false}
    clickable={true}
    active={0}
  >
    <div className="center"
      onClick
      onKeyDown
      role="menuitem"
      tabIndex="0"
    />
    <img src={A1} alt='Alt #1'/>
    <img src={A2} alt='Art#2'/>
    <img src={A3} alt='Art#3'/>
  </Coverflow>
  </div></div>
    )}}
    export default Home
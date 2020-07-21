import React, {Component} from 'react';
import A1 from "./A1.png";
import A2 from "./A2.png";
import A3 from "./A3.png";
import A4 from "./A4.png";

class Arts extends Component{
    render(){
        return(
            <div className="arts">
              <div className="left" Style="padding-left: 20px;"><h2>Browse All:</h2></div><br/><br/>
              
  <div class="mx-auto row border container-fluid bg-secondary p-2 shadow-lg">
    <div class="col container-fluid inline">
      <button className="bg-primary">Add to My Choices
      </button>
      <h5>Description:</h5>
            <div className="w-50 h-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et placerat nulla, laoreet convallis tortor. Pellentesque et mauris nec justo rutrum porttitor at sed mauris. Nullam magna ipsum, dignissim nec porta id, consectetur vitae odio. Consectetur adipiscing elit. Aenean et placerat nulla, laoreet convallis tortor. Pellentesque et mauris nec justo rutrum porttitor at sed mauris. Nullam magna ipsum, dignissim nec porta id, consectetur vitae odio.</div>
      <button className="bg-primary"><a className="text-body" href="/SpecificArt">More</a></button>
      <img src={A1} className="w-25 h-25 shadow-lg"></img></div>
    <div class="container-fluid border"></div>
    <div class="col container-fluid inline">
      <button className="bg-primary">Add to My Choices
      </button>
      <h5>Description:</h5>
            <div className="w-50 h-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et placerat nulla, laoreet convallis tortor. Pellentesque et mauris nec justo rutrum porttitor at sed mauris. Nullam magna ipsum, dignissim nec porta id, consectetur vitae odio. Consectetur adipiscing elit. Aenean et placerat nulla, laoreet convallis tortor. Pellentesque et mauris nec justo rutrum porttitor at sed mauris. Nullam magna ipsum, dignissim nec porta id, consectetur vitae odio.</div>
            <button className="bg-primary"><a className="text-body" href="/SpecificArt">More</a></button>
      <img src={A2} className="w-25 h-25 shadow-lg"></img></div>
    <div class="container-fluid border"></div>
    <div class="col container-fluid inline">
      <button className="bg-primary">Add to My Choices
      </button>
      <h5>Description:</h5>
            <div className="w-50 h-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et placerat nulla, laoreet convallis tortor. Pellentesque et mauris nec justo rutrum porttitor at sed mauris. Nullam magna ipsum, dignissim nec porta id, consectetur vitae odio. Consectetur adipiscing elit. Aenean et placerat nulla, laoreet convallis tortor. Pellentesque et mauris nec justo rutrum porttitor at sed mauris. Nullam magna ipsum, dignissim nec porta id, consectetur vitae odio.</div>
            <button className="bg-primary"><a className="text-body" href="/SpecificArt">More</a></button>
      <img src={A3} className="w-25 h-25 shadow-lg"></img></div>
    <div class="container-fluid border"></div>
    <div class="col container-fluid inline">
      <button className="bg-primary">Add to My Choices
      </button>
      <h5>Description:</h5>
            <div className="w-50 h-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et placerat nulla, laoreet convallis tortor. Pellentesque et mauris nec justo rutrum porttitor at sed mauris. Nullam magna ipsum, dignissim nec porta id, consectetur vitae odio. Consectetur adipiscing elit. Aenean et placerat nulla, laoreet convallis tortor. Pellentesque et mauris nec justo rutrum porttitor at sed mauris. Nullam magna ipsum, dignissim nec porta id, consectetur vitae odio.</div>
            <button className="bg-primary"><a className="text-body" href="/SpecificArt">More</a></button>
      <img src={A4} className="w-25 h-25 shadow-lg"></img></div>
</div>

           
            </div>
        )
    }
}

export default Arts
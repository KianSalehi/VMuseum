import React, {Component} from 'react';
import A1 from "./A1.png";
class SeeDetail extends Component{
    render(){
        return(
            <div className="SeeDetail">
            <div className="left custom-control-inline" Style="padding-left: 20px;"><h2>Art#1 Picture:</h2><h5 className="m-2">Hover over the picture to zoom in</h5>
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            <button class="btn bg-primary m-2"><i class=" fa fa-chevron-left"></i><a href="/SpecificArt" className="text-body">Back</a></button>
            </div><br/><br/><div>
            <div class="mx-auto row border container-fluid bg-secondary p-2 shadow-lg">
            <div class="col-sm-2 container-fluid btn-group-vertical">
    <h5>Description:</h5><br/><br/>
    <button class="btn bg-primary"><i class=" fa fa-volume-up"></i></button>
    <br/><button className="btn bg-primary">Stop Audio
      </button></div>
      <div class="col-md-10 text-center align-content-center">
      <img id="A1" src={A1} className="w-100 h-100 shadow-lg"></img> <br/>
      <div class="custom-control-inline">
      <br/><button className="btn bg-primary m-1"><i class=" fa fa-plus"></i> Add to my choices
      </button>
      <br></br>
      <div className="text-center align-content-center mx-5 m-3"><b>Artist</b>: Dolor Sit Amet</div>
      </div>
      </div>
      </div>
            </div>
            </div>
        )
    }
    
}

export default SeeDetail
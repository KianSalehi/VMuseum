import React, {Component} from 'react';
import A1 from "./A1.png";

class SpecificArt extends Component{
    render(){
        return(
            <div className="SpecificArt">
            <div className="left custom-control-inline" Style="padding-left: 20px;"><h2>Art#1:</h2>
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            <button class="btn bg-primary m-2 right"><i class=" fa fa-chevron-left"></i><a href="/Paintings" className="text-body">Back</a></button>
</div><br/><br/>
            <div>
            <div class="mx-auto row border container-fluid bg-secondary p-2 shadow-lg">
    <div class="col-sm-2 container-fluid btn-group-vertical">
    <h5>Description:</h5><br/><br/>
    <button class="btn bg-primary"><i class=" fa fa-volume-up"></i></button>
    <br/><button className="btn bg-primary">Stop Audio
      </button></div>

            
      <div class="col-md-5">
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et placerat nulla, laoreet convallis tortor. Pellentesque et mauris nec justo rutrum porttitor at sed mauris. Nullam magna ipsum, dignissim nec porta id, consectetur vitae odio. Consectetur adipiscing elit. Aenean et placerat nulla, laoreet convallis tortor. Pellentesque et mauris nec justo rutrum porttitor at sed mauris. Nullam magna ipsum, dignissim nec porta id, consectetur vitae odio.</div>
      <br/><br/><form>
  <div class="form-group row">
    <label class="col-4 text-body font-weight-bold">Rating:</label> 
    <div class="col-8">
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_0" type="radio" class="custom-control-input" value="1" checked="checked"/> 
        <label for="radio_0" class="custom-control-label text-body font-weight-bold">1</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_1" type="radio" class="custom-control-input" value="2"/> 
        <label for="radio_1" class="custom-control-label text-body font-weight-bold">2</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_2" type="radio" class="custom-control-input" value="3"/> 
        <label for="radio_2" class="custom-control-label text-body font-weight-bold">3</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_3" type="radio" class="custom-control-input" value="4"/> 
        <label for="radio_3" class="custom-control-label text-body font-weight-bold">4</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_4" type="radio" class="custom-control-input" value="5"/> 
        <label for="radio_4" class="custom-control-label text-body font-weight-bold">5</label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="textarea" class="col-4 col-form-label text-body font-weight-bold">Comment:</label> 
    <div class="col-8">
      <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control"></textarea>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary text-body">Submit</button>
    </div>
  </div>
</form>
      </div>
      <div class="col-sm-4 btn-group-vertical text-center align-content-center">
      <img src={A1} className="w-100 h-100 shadow-lg"></img><br/>
      <button class="btn bg-primary"><i class=" fa fa-search"></i><a href="/Detail" className="text-body"> See The Picture in detail</a></button>
      <br/><button className="btn bg-primary"><i class=" fa fa-plus"></i> Add to my choices
      </button>
      <br></br>
      <div className="text-center align-content-center mx-5">Artist: Dolor Sit Amet</div>
      </div>
      </div>
            </div>
            </div>
        )
    }
}
export default SpecificArt
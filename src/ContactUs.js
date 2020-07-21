import React, {Component} from 'react';

class ContactUs extends Component{
    render(){
        return(
            <div className="contactUs container-fluid">
              <div className="left p-3" Style="padding-left: 20px;"><h2>Contact Us:</h2></div><br/><br/>
              
                <div class="btn-group-vertical mx-auto border container-fluid bg-secondary p-2 shadow-lg">
                    <div>
                        <p>
                            <h3>FAQ:</h3>
                            <h4>1- Where can I find the name of the artists?</h4>
                            <h6>You can find the name of the artist on the tab on top of the screen. Under each specific art's picture after clicking on the "more" button, name of the artists can be seen.</h6>
                            <h4>2- How can I save artists or arts?</h4>
                            <h6>You can save the artists and arts by clicking on add  to my collection for each art or artist and review them after adding in the "Your Choice" tab.</h6>
                            </p>
                        </div>
                    <div class="border p-4 text-white"> <b class="">Email Us:</b><br/>
                <form>
                <br/>
            <div class="form-group row">
            <label for="text1" class="col-4 col-form-label text-white">Name:</label> 
            <div class="col-8">
            <div class="input-group">
                <div class="input-group-prepend">
                <div class="input-group-text">
                <i class="fa fa-address-card"></i>
                </div>
                </div> 
            <input id="text1" name="text1" placeholder="First name and Last name" type="text" class="form-control" required="required"/>
        </div>
            </div>
            </div>
        <div class="form-group row">
        <label for="text" class="col-4 col-form-label text-white">Email</label> 
        <div class="col-8">
        <div class="input-group">
            <div class="input-group-prepend">
            <div class="input-group-text">
                <i class="fa fa-at"></i>
            </div>
            </div> 
            <input id="text" name="text" placeholder="Email" type="text" class="form-control" required="required"/>
        </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="textarea" class="col-4 col-form-label text-white">Text Area</label> 
        <div class="col-8">
        <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control"></textarea>
        </div>
    </div> 
    <div class="form-group row">
        <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
    </form>
    </div>

            </div>

           
            </div>
        )
    }
}

export default ContactUs
import React, {Component} from 'react';
import {Grid,Cell,Textfield} from 'react-mdl';
import LetterIcon from '../img/lettericon.png'
import emailjs from 'emailjs-com';
require('dotenv').config()

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env;

class Contact extends Component{

    sendEmail(e) {
        e.preventDefault();
        console.log(process.env);
        emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }



    render(){
        return(
            <div style={{width:'80%',margin:'auto'}}>

                <Grid>
                    <Cell col={6}>
                        <h2 style={{marginTop:'25%',marginLeft:'30%',marginBottom:'0%', color:"#B3B3B3"}}>Contact Me!</h2>
                        <img 
                            src={LetterIcon}
                            alt="letter"
                            style={{width:'400px',marginTop:'5%',marginLeft:'20%'}}
                        />
                    </Cell>
                    <Cell col={4}>
                        <div style={{marginTop:'30%'}}>

                            <form onSubmit={this.sendEmail.bind(this)}>
                                <div className="form-input">
                                    <input type="text" className="form-control" placeholder="Name" name="name"/>
                                </div>

                                <div className="form-input">
                                    <input type="text" className="form-control" placeholder="Company" name="company"/>
                                </div>

                                <div className="form-input">
                                    <input type="text" className="form-control" placeholder="Email" name="email"/>
                                </div>

                                <div className="form-message">
                                    <textarea type="text" className="form-control" cols="30" rows="8" placeholder="Message" name="message"/>
                                </div>
                                <div className="submit-btn">
                                    <input type="submit" className="form-btn" value="Send Message" />
                                </div>
                            </form>


                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
import React, {Component} from 'react';
import {Grid,Cell,Textfield} from 'react-mdl';
import LetterIcon from '../img/lettericon.jpg'

class Contact extends Component{
    render(){
        return(
            <div style={{width:'80%',margin:'auto'}}>
                <Grid>
                    <Cell col={6}>
                        <img 
                            src={LetterIcon}
                            alt="letter"
                            style={{width:'400px',marginTop:'30%',marginLeft:'20%'}}
                        />
                    </Cell>
                    <Cell col={4}>
                        <div style={{marginTop:'30%'}}>

                        <Textfield
                            onChange={() => {}}
                            label="First Name"
                            style={{width: '400px'}}
                        />


                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.companyName}</h4>
                    <h6 style={{marginTop:'0px'}}>{this.props.positionName}</h6>
                    { this.props.jobDescription.map(bulletPoint => <p style={{"margin":0, "marginLeft":"1%"}}>● {bulletPoint}</p>) }
                </Cell>
            </Grid>
        )
    }
}

export default Experience;
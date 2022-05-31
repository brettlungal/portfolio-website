import React from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, IconButton, CardText, CardMenu} from 'react-mdl';

const Project = (props) =>{

    return (
        <>
            <Card shadow={5} style={{minWidth: '512', margin: 'auto', marginBottom:"10%", background: '#212121'}}>
                <CardTitle style={{color:'#fff', height: '200px', background:`url(${props.imageUrl}) center / cover`}}>
                    {props.title}
                </CardTitle>
                <CardText style={{color:"#B0B3B8"}}>
                    {props.description}  
                </CardText>
                <CardActions border>
                    <a href={props.githubUrl} target="_blank"><Button colored>Github</Button></a>
                </CardActions>
            </Card>
        </>
    )
}

export default Project;
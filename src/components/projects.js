import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, IconButton, CardText, CardMenu} from 'react-mdl';

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){

        if ( this.state.activeTab === 0 ){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                        <CardTitle style={{color:'#fff', height: '200px', background:'url(https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png) center / cover'}}>
                            React Project 1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton size={50} name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '200px', background:'url(https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png) center / cover'}}>
                        React Project 1
                    </CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton size={50} name="share" />
                    </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '200px', background:'url(https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png) center / cover'}}>
                        React Project 1
                    </CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton size={50} name="share" />
                    </CardMenu>
                    </Card>
                </div>

            )
        }else if ( this.state.activeTab === 1 ){
            return(
                <div><h1>Project number dos</h1></div>
            )
        }else if ( this.state.activeTab === 2 ){
            return(
                <div><h1>Project number tres</h1></div>
            )
        }else if ( this.state.activeTab === 3 ){
            return(
                <div><h1>Project number quattro</h1></div>
            )
        }
    }


    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Project 1</Tab>
                    <Tab>Project 2</Tab>
                    <Tab>Project 3</Tab>
                    <Tab>Project 4</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;
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
                        <CardTitle style={{color:'#fff', height: '200px', background:'url(https://media.nhl.com/site/asset/public/images/2020/03/NHLShieldBlack-06124818.jpg) center / cover'}}>
                            NHL Widget
                        </CardTitle>
                        <CardText>
                            Desktop Widget that sits on the users desktop and displays the live score of the selected team using the NHL API.  
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/brettlungal/NHL-Score-Widget" target="_blank"><Button colored>Github</Button></a>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton size={50} name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '200px', background:'url(https://miro.medium.com/max/3200/0*KZ2YmnMd-8UYReKL) center / cover'}}>
                        Discord-Bot
                    </CardTitle>
                    <CardText>
                        Discord bot written in NodeJS that moderates the chat channels for academic dishonesty and displays professor quips when prompted by an emoji.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/brettlungal/Discord-Bot" target="_blank"><Button colored>Github</Button></a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton size={50} name="share" />
                    </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '200px', background:'url(https://miro.medium.com/max/3200/0*KZ2YmnMd-8UYReKL) center / cover'}}>
                        Discord-Web-Scrapper
                    </CardTitle>
                    <CardText>
                        Python web scraper that scrapes job postings for software developers in Manitoba, the data is then parsed and sent in a discord text channel via Web-Hook.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/brettlungal/discord-web-scraper" target="_blank"><Button colored>Github</Button></a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton size={50} name="share" />
                    </CardMenu>
                    </Card>
                </div>

            )
        }else if ( this.state.activeTab === 1 ){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '200px', background:'url(https://gridfiti.com/wp-content/uploads/2020/06/Gridfiti_Blog_20-06_MacScreensavers_2_Analog.jpg) center / cover'}}>
                        TimeSheets
                    </CardTitle>
                    <CardText>
                        Android mobile application that allows for tracking and managing employees time. Developed for a local farmer that required a more organized way of tracking employee hours and managing time related expenses.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/brettlungal/time-sheetv2" target="_blank"><Button colored>Github</Button></a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton size={50} name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '200px', background:'url(https://images.moneycontrol.com/static-mcnews/2021/05/stocks_sensex_nifty_stockmarket3-770x433.jpg?impolicy=website&width=770&height=431) center / cover'}}>
                    Stock-Spy
                </CardTitle>
                <CardText>
                    Stock-Spy is an android mobile application which allows the user add stocks to a "spy" list and be notified when the price fluctuates within a set allowable range. Stock prices are retrieved from TSX and NYSE public API.  
                </CardText>
                <CardActions border>
                    <a href="https://github.com/brettlungal/Stock-Spy" target="_blank"><Button colored>Github</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton size={50} name="share" />
                </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '200px', background:'url(https://i.pinimg.com/originals/e2/36/45/e236453077f50cbc8127019400b237b6.jpg) center / cover'}}>
                    weBudget
                </CardTitle>
                <CardText>
                    Software-Engineering Group project that allows for roomates or a group to posses a shared wallet on their android device which allows them to pay bills from their shared funds, and budget together as a household or group.
                </CardText>
                <CardActions border>
                    <a href="https://github.com/brettlungal/weBudget" target="_blank"><Button colored>Github</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton size={50} name="share" />
                </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '200px', background:'url(https://image.freepik.com/free-vector/pliers-hammer-screwdriver-cartoon-icon-illustration-tools-object-icon-concept-isolated-flat-cartoon-style_138676-2155.jpg) center / cover'}}>
                    Home-Maintenance-Hub
                </CardTitle>
                <CardText>
                    Human-Computer-Interaction-2 Group project which is designed to put all of the users home maintenance needs in one place. This app allows the user to book a contractor of any type from their smartphone. 
                </CardText>
                <CardActions border>
                    <a href="https://github.com/COMP4020Group2/HomeMaintenanceHub" target="_blank"><Button colored>Github</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton size={50} name="share" />
                </CardMenu>
                </Card>
            </div>
            )
        }else if ( this.state.activeTab === 2 ){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '200px', background:'url(https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png) center / cover'}}>
                        Portfolio Website
                    </CardTitle>
                    <CardText>
                        I created this website using React to get more experience with front-end development, as well as to teach myself the ReactJS framework. Everything was built out in a modular fashion using components.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/brettlungal/portfolio-website" target="_blank"><Button colored>Github</Button></a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton size={50} name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '200px', background:'url(http://getbootstrap.com/docs/4.1/assets/brand/bootstrap-social.png) center / cover'}}>
                    weBudget
                </CardTitle>
                <CardText>
                    My Software Engineering group project mobile application required a "startup" website to draw potential users and showcase the abilities and function of our application. I created the entire website myself using Bootstrap
                </CardText>
                <CardActions border>
                    <a href="https://github.com/brettlungal/weBudget-Website" target="_blank"><Button colored>Github</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton size={50} name="share" />
                </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '512', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '200px', background:'url(https://miro.medium.com/max/2688/1*Q8w9PI58DKjolhl5aDeiOQ.png) center / cover'}}>
                    Cinema-Connect
                </CardTitle>
                <CardText>
                    Cinema-Connect was my Human-Computer-Interaction-1 group project which was designed to allow users to pre-order movie tickets as well as concession items and pick them up upon arrival. This was my introduction to web development and was done entirely in HTML CSS and vanilla JS.
                </CardText>
                <CardActions border>
                    <a href="https://github.com/brettlungal/Cinema-Connect" target="_blank"><Button colored>Github</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton size={50} name="share" />
                </CardMenu>
                </Card>
            </div>
            )
        }
    }


    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Desktop</Tab>
                    <Tab>Mobile</Tab>
                    <Tab>Web</Tab>
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
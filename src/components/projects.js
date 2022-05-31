import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, IconButton, CardText, CardMenu} from 'react-mdl';
import Project from "./project"

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){

        if ( this.state.activeTab === 0 ){
            // Desktop
            return(
                <div style={{"width":"75%", "margin": "auto"}}>
                    <Grid>
                        <Cell col={4} >
                            <Project 
                                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTT3e6fT7u4ormLM5SnutHobjS_Z4CSDeFg&usqp=CAU"
                                title="Text Extraction Engine"
                                description="AWS Serverless solution that ingests documents to extract the text, parse results, and index using ElasticSearch for data analysis."
                                githubUrl="https://github.com/brettlungal/NHL-Score-Widget"
                            />
                        </Cell>

                        <Cell col={4}>
                            <Project 
                                imageUrl="https://miro.medium.com/max/3200/0*KZ2YmnMd-8UYReKL"
                                title="Discord-Bot"
                                description="Discord bot written in NodeJS that moderates the chat channels for academic dishonesty and displays professor quips when prompted by an emoji."
                                githubUrl="https://github.com/brettlungal/Discord-Bot"
                            />
                        </Cell>

                        <Cell col={4}>
                            <Project 
                                imageUrl="https://miro.medium.com/max/3200/0*KZ2YmnMd-8UYReKL"
                                title="Discord-Web-Scrapper"
                                description="Python web scraper that scrapes job postings for software developers in Manitoba, the data is then parsed and sent in a discord text channel via Web-Hook."
                                githubUrl="https://github.com/brettlungal/discord-web-scraper"
                            />
                        </Cell>
                    </Grid>
                {/* Second Row */}
                <Grid>
                    <Cell col={4} >
                        <Project 
                                imageUrl="https://media.nhl.com/site/asset/public/images/2020/03/NHLShieldBlack-06124818.jpg"
                                title="NHL Widget"
                                description="Desktop Widget that sits on the users desktop and displays the live score of the selected team using the NHL API."
                                githubUrl="https://github.com/brettlungal/NHL-Score-Widget"
                            />
                    </Cell>
                </Grid>
            </div>


            )
        }else if ( this.state.activeTab === 1 ){
            // Mobile
            return(
                <div style={{"width":"75%", "margin": "auto"}}>
                    <Grid>
                        <Cell col={4}>
                            <Project 
                                imageUrl="https://gridfiti.com/wp-content/uploads/2020/06/Gridfiti_Blog_20-06_MacScreensavers_2_Analog.jpg"
                                title="TimeSheets"
                                description="Android mobile application that allows for tracking and managing employees time. Developed for a local farmer that required a more organized way of tracking employee hours and managing time related expenses."
                                githubUrl="https://github.com/brettlungal/time-sheetv2"
                            />
                        </Cell>

                        <Cell col={4}>
                            <Project 
                                imageUrl="https://images.moneycontrol.com/static-mcnews/2021/05/stocks_sensex_nifty_stockmarket3-770x433.jpg?impolicy=website&width=770&height=431"
                                title="Stock-Spy"
                                description="Android mobile application which allows the user add stocks to a spy list and be notified when the price fluctuates within a set allowable range. Stock prices are retrieved from TSX and NYSE public API. "
                                githubUrl="https://github.com/brettlungal/Stock-Spy"
                            />
                        </Cell>

                        <Cell col={4}>
                            <Project 
                                imageUrl="https://i.pinimg.com/originals/e2/36/45/e236453077f50cbc8127019400b237b6.jpg"
                                title="weBudget"
                                description="Software-Engineering Group project that allows for roomates or a group to posses a shared wallet on their android device which allows them to pay bills from their shared funds, and budget together as a household or group."
                                githubUrl="https://github.com/brettlungal/weBudget"
                            />
                        </Cell>

                    </Grid>
                    {/* Second Row */}
                    <Grid>
                        <Cell col={4}>
                            <Project 
                                imageUrl="https://image.freepik.com/free-vector/pliers-hammer-screwdriver-cartoon-icon-illustration-tools-object-icon-concept-isolated-flat-cartoon-style_138676-2155.jpg"
                                title="Home-Maintenance-Hub"
                                description="Human-Computer-Interaction-2 Group project which is designed to put all of the users home maintenance needs in one place. This app allows the user to book a contractor of any type from their smartphone."
                                githubUrl="https://github.com/COMP4020Group2/HomeMaintenanceHub"
                            />
                        </Cell>
                    </Grid>
                </div>
            )
        }else if ( this.state.activeTab === 2 ){
            // Web
            return(
                <div style={{"width":"75%", "margin": "auto"}}>

                    <Grid>
                        <Cell col={4}>
                            <Project 
                                imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
                                title="Portfolio Website"
                                description="I created this website using React to get more experience with front-end development, as well as to teach myself the ReactJS framework. Everything was built out in a modular fashion using components. Website is self hosted on a sever I built and maintain myself."
                                githubUrl="https://github.com/brettlungal/portfolio-website"
                            />
                        </Cell>

                        <Cell col={4}>
                            <Project 
                                imageUrl="http://getbootstrap.com/docs/4.1/assets/brand/bootstrap-social.png"
                                title="weBudget"
                                description="My Software Engineering group project mobile application required a 'startup' website to draw potential users and showcase the abilities and function of our application. I created the entire website myself using raw HTML/CSS+Bootstrap."
                                githubUrl="https://github.com/brettlungal/weBudget-Website"
                            />
                        </Cell>

                        <Cell col={4}>
                            <Project 
                                imageUrl="https://miro.medium.com/max/2688/1*Q8w9PI58DKjolhl5aDeiOQ.png"
                                title="Cinema-Connect"
                                description="Cinema-Connect was my Human-Computer-Interaction-1 group project which was designed to allow users to pre-order movie tickets as well as concession items and pick them up upon arrival. This was my introduction to web development and was done entirely in HTML CSS and vanilla JS."
                                githubUrl="https://github.com/brettlungal/Cinema-Connect"
                            />
                        </Cell>
                    </Grid>
                    {/* Second Row */}
            </div>
            )
        }
    }


    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab style={{color:"#FFFFFF"}}>Desktop</Tab>
                    <Tab style={{color:"#FFFFFF"}}>Mobile</Tab>
                    <Tab style={{color:"#FFFFFF"}}>Web</Tab>
                </Tabs>
                {this.toggleCategories()}
            </div>
        )
    }
}

export default Projects;
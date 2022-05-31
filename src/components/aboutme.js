import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import selfPortrait from '../img/selfPortrait.png';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class AboutMe extends Component{


    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                                src={selfPortrait}
                                alt="avatar"
                                style={{height: '340px'}}    
                            />

                        </div>

                        <h2 style={{paddingTop: '2em', color:'#FFFFFF'}}>Brett Lungal</h2>
                        <h4 style={{color:'#B3B3B3'}}>Software Developer</h4>
                        <hr style={{borderTop:'3px solid #e22947', width:'50%'}}/>
                        <p style={{color:"#B3B3B3"}}>Hello! I am a Software Developer currently living in Calgary, Alberta. I graduated from the University of Manitoba with a B.Sc. in Computer Science 
                            in May 2022. My industry experience has allowed me to gain a knowledge of both frontend and backend development, with more emphasis placed on cloud-based backend development.
                            When I am not coding you can find me either in the mountains, the gym, working on cars, or traveling to the coast for surfing and hiking!
                        </p>
                        <hr style={{borderTop:'3px solid #e22947', width:'50%'}}/>
                        <h4 style={{color:"#FFFFFF"}}>Industry Achievements</h4>
                        <a className="hyper-link" href="https://aws.amazon.com/blogs/machine-learning/tc-energy-builds-an-intelligent-document-processing-workflow-to-process-over-20-million-images-with-amazon-ai/">AWS Machine Learning Blog  -TC Energy AI/ML Record Classification/Digitization</a>
                        <hr style={{borderTop:'3px solid #e22947', width:'50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2017}
                            endYear={2022}
                            schoolName="University of Manitoba"
                            schoolDescription="B.Sc. Computer Science Major (Co-op)"
                        />
                        <hr style={{borderTop:'3px solid #e22947', marginLeft:"34%"}}></hr>
                        <h2>Experience</h2>
                        <Experience
                            startYear="Sept 2021"
                            endYear="June 2022"
                            companyName="QDoc Inc"
                            positionName="Full-Stack Software Developer"
                            jobDescription={["Utilize React to create accessible, user friendly functional components that use backend logic created with AWS API-Gateway, Lambda and DynamoDB",
                                            "sometEmploy AWS Amplify for deployment of application frontend and backend resources in the cloud",
                                            "Architect large features in project for cost effective implementation and secure backend to frontend data transfer",
                                            "Assist in onboarding new hires by pair programming to teach coding standards and company practices",
                                            "Build out billing system for physicians to bill for patients they see in the application",
                                            "Attend AWS organized Amplify immersion day for a deeper understanding of AWS Amplify capabilities"
                                        ]}
                        />
                        <Experience
                            startYear="May 2020"
                            endYear="Sept 2021"
                            companyName="TC Energy"
                            positionName="Software Developer Co-op"
                            jobDescription={["Develop business facing application utilizing AWS AI/ML services",
                                            "Developed a document reference analyzer application in Python, NodeJS, Gremlin and SQL to map references between documents saving the company $4 million",
                                            "Explore new AWS technologies creating proof of concepts to automate manual processes",
                                            "Lead the development of various features in proof of concept projects",
                                            "Hosted product presentations for client teams to communicate development progress",
                                            "Assisted in deployment, maintenance, and feature enhancements of enterprise records search tool",
                                            "Participated in training sessions hosted by AWS to advance knowledge of AWS technologies "
                                        ]}
                        />
                        <hr style={{borderTop:'3px solid #e22947', marginLeft: "34%"}}></hr>
                        <h2>Skills</h2>
                        <Skills 
                            skill="Java"
                            progress={100}
                        />
                        <Skills 
                            skill="Python"
                            progress={100}
                        />
                        <Skills 
                            skill="JavaScript"
                            progress={100}
                        />
                        <Skills
                            skill="React"
                            progress={85}
                        />
                        <Skills 
                            skill="C"
                            progress={85}
                        />
                        <Skills 
                            skill="C++"
                            progress={85}
                        />
                        <Skills 
                            skill="Bash"
                            progress={90}
                        />
                        <Skills 
                            skill="AWS"
                            progress={95}
                        />
                        <Skills 
                            skill="YAML"
                            progress={100}
                        />
                        <Skills 
                            skill="AppleScript"
                            progress={90}
                        />
                        <Skills 
                            skill="Ruby"
                            progress={90}
                        />
                        <Skills 
                            skill="Networking"
                            progress={80}
                        />


                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default AboutMe;
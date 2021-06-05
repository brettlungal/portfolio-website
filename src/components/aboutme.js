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

                        <h2 style={{paddingTop: '2em'}}>Brett Lungal</h2>
                        <h4 style={{color:'grey'}}>Software Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>Hello! I am a Computer Science student Co-op at the University of Manitoba. I am currently
                            in the last year of my studies and will be seeking full time employment as of May 2022. I am constantly trying to learn new things 
                            and as a result I love to spend lots of time teaching myself new technolgies and playing around with new ideas. When I am not coding
                            you can find me either in the gym, working on cars, or traveling to the coast for surfing and hiking!
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Web</h5>
                        <p>www.brettlungal.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2017}
                            endYear={2022}
                            schoolName="University of Manitoba"
                            schoolDescription="B.Sc. Computer Science Major (Co-op)"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}></hr>
                        <h2>Experience</h2>
                        <Experience
                            startYear="May 2020"
                            endYear="Current"
                            companyName="TC Energy"
                            positionName="Software Developer Co-op (Work Term 3)"
                            jobDescription="Work as part of dev-ops team creating software solution for mass record digitization and efficent searchability in an AWS environment utilizing ML and OCR technologies."
                        />
                        <Experience
                            startYear="Jan 2021"
                            endYear="April 2021"
                            companyName="TC Energy"
                            positionName="Software Developer (Part-Time)"
                            jobDescription="Created a system to integrate AWS services with OpenText to allow existing documents to be searched with
                            enterprise records search tool ● Maintained document reference analyzer to ensure client satisfaction ● Produce Document Reference Analyzer enhancement as
                             requested by stakeholders."
                        />
                        <Experience
                            startYear="May 2020"
                            endYear="Jan 2021"
                            companyName="TC Energy"
                            positionName="Software Developer Co-op (Work Term 1&2)"
                            jobDescription="Developed a document reference analyzer application in Python, NodeJS, Gremlin and SQL to map references
                            between documents saving the company $4 million
                            ● Explore new AWS technologies creating proof of concepts to automate manual processes
                            ● Lead the development of various features in proof of concept projects
                            ● Hosted product presentations for client teams to communicate development progress
                            ● Assisted in deployment, maintenance, and feature enhancements of enterprise records search tool
                            ● Participated in training sessions hosted by AWS to advance knowledge of AWS technologies 
                            "
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}></hr>
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
                            progress={75}
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
                            skill="AWS Services"
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
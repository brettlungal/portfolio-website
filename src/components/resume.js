import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import selfPortrait from '../img/selfPortrait.png';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{


    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                                src={selfPortrait}
                                alt="avatar"
                                style={{height: '300px'}}    
                            />

                        </div>

                        <h2 style={{paddingTop: '2em'}}>Brett Lungal</h2>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to \
                            make a type specimen book.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Phone</h5>
                        <p>(204) 797-4401</p>
                        <h5>Email</h5>
                        <p>brettlungal@gmail.com</p>
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
                            startYear={2017}
                            endYear={2022}
                            companyName="TC Energy"
                            positionName="Software Developer Co-op (Work Term 3)"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to \
                            make a type specimen book."
                        />
                        <Experience
                            startYear={2017}
                            endYear={2022}
                            companyName="TC Energy - Part Time"
                            jobDescription="● Created a system to integrate AWS services with OpenText to allow existing documents to be searched with
                            enterprise records search tool<br></br>
                            ● Maintained document reference analyzer to ensure client satisfaction"
                        />
                        <Experience
                            startYear={2017}
                            endYear={2022}
                            companyName="TC Energy - Work Term 1&2"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to \
                            make a type specimen book."
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}></hr>
                        <h2>Skills</h2>
                        <Skills 
                            skill="Java"
                            progress={100}
                        />
                        <Skills 
                            skill="Java"
                            progress={100}
                        />
                        <Skills 
                            skill="Java"
                            progress={100}
                        />
                        <Skills 
                            skill="Java"
                            progress={100}
                        />
                        <Skills 
                            skill="Java"
                            progress={100}
                        />
                        <Skills 
                            skill="Java"
                            progress={100}
                        />

                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume;
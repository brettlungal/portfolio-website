import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import selfPortait from '../img/brett.png'
class LandingPage extends Component{

    render(){
        
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>


                        <img
                            src={selfPortait}
                            alt="self portrait"
                            className="avatar-img"
                        />


                        <div className="banner-text">
                            <h1>Full-Stack Software Developer</h1>
                            <hr/>
                            <p>AWS | Python | Java | C | C++ | Ruby | JavaScript | React | Bash | Gremlin</p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/brettlungal" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/brettlungal" target="_blank">
                                    <i class="fab fa-github-square"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
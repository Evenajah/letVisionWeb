import React, { Component } from 'react';


import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';


export default class Footer extends Component {
    render() {
        return (

            <div className="App">
                <center>
                    <div className="footerContent">
                        <h2 style={{ color: '#DCDCDC' }}>ติดต่อผู้พัฒนา</h2><br />
                        <a href="https://www.facebook.com/tharadol.boonma.9" target="_blank"><FacebookIcon fontSize="large" style={{ margin: 15, color: '#DCDCDC' }} /></a>
                        <a href="https://github.com/evenajah" target="_blank"><GitHubIcon fontSize="large" style={{ margin: 15, color: '#DCDCDC' }} /></a>
                        <a href="https://twitter.com/Boblennon41" target="_blank"><TwitterIcon fontSize="large" style={{ margin: 15, color: '#DCDCDC' }} /></a>
                        <a href="https://www.linkedin.com/in/evelastest/" target="_blank"><LinkedInIcon fontSize="large" style={{ margin: 15, color: '#DCDCDC' }} /></a>
                    </div>


                    <div className="copyRight">
                        <CopyrightIcon /> Letvision 2019 | Powered by react
    
                </div>
                </center>

            </div>
        );
    }
}


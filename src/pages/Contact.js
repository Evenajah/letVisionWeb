import React, { Component } from 'react';

// material
import Grow from '@material-ui/core/Grow';
import NavigationBar from '../component/NavigationBar';

import Footer from '../component/Footer';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';

export default class Contact extends Component {


    componentDidMount() {
        document.title = "Letvision";
        window.scrollTo(0, 0);

    }

    render() {

        return (
            <div>
                <div className="wrapContact">

                    <Fade in={true} timeout={1000}>
                        <div className="App">


                            <NavigationBar />





                            <div className="contactPage">
                                <Footer />
                            </div>




                            <br /> <br /> <br />


                        </div>


                    </Fade>

                </div>
            </div>
        );
    }
}


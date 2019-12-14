import React, { Component } from 'react';

// material
import Grow from '@material-ui/core/Grow';
import NavigationBar from '../component/NavigationBar';
import AndroidDownload from '../component/AndroidDownload';
import Footer from '../component/Footer';


export default class Home extends Component {


    componentDidMount() {
        document.title = "Letvision";
        window.scrollTo(0, 0);

    }

    render() {

        return (
            <div>
                <div className="imgHome" >

                    <NavigationBar />
                    <br /><br /><br /><br /><br /><br />
                    <Grow in={true} timeout={1000}>
                        <div class="headerText">
                            <img className="imgHeader" src={require('../images/logo.png')} alt="cam" />
                       
                            <h1 className="headerText2" style={{ padding: 20 }}>มองไม่เห็น..ก็อ่านได้</h1>
                            <h1 style={{ fontSize: 25, color: '#BEBEBE' }}>แอพพลิเคชั่นช่วยในการอ่านหนังสือสำหรับ<br />ผู้พิการทางสายตา</h1>


                            <AndroidDownload />

                        </div>

                    </Grow >

                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


                </div>
                <Grow in={true} timeout={1000}>
                    <div className="bodyImage">
                        <br /><br /><br />
                        <h1 className="headerBody">การใช้งาน</h1>

                        <img className="imgContent" src={require('../images/howtoUse1.png')} alt="cam" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="imgContent" src={require('../images/howtoUse2s.png')} alt="cam" />
                        <br /><br /><br /><br /><br /><br />
                    </div>
                </Grow>

                <Footer />
            </div>
        );
    }
}


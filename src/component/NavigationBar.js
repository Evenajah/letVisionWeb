import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import HomeIcon from '@material-ui/icons/Home';

export default class NavigationBar extends Component {



    render() {

        return (


            <nav class="navbar fixed-top navbar-expand-sm bg-dark navbar-dark">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item">
                        <Link to="/" class="nav-link" ><HomeIcon style={{ margin: 5 }} /><br /> หน้าแรก</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/book" class="nav-link" href="#"><MenuBookIcon style={{ margin: 5 }} /><br /> หนังสือ</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="contact" class="nav-link" href="#"><ContactMailIcon style={{ margin: 5 }} /> <br />ติดต่อ</Link>
                    </li>

                </ul>
                <ul class="navbar-nav navbar-right">
                    <li class="nav-item">
                        <Link to="contact" class="nav-link" href="#"><SystemUpdateIcon style={{ margin: 5 }} /><br /> ดาวน์โหลด</Link>
                    </li>
                </ul>
            </nav>




        );
    }
}


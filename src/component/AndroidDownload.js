import React, { Component } from 'react';


import AndroidIcon from '@material-ui/icons/Android';


export default class AndroidDownload extends Component {
    render() {
        return (

            <div className="androidContainer">
                <a  target="_blank" href="https://drive.google.com/file/d/13eDeliP9abzw0yzic6NoUHG_Do-ALMtO/view?usp=sharing" className="androidBtn"><AndroidIcon style={{ fontSize: 40 }} />&nbsp;&nbsp;ดาวน์โหลดในระบบ Android</a>

            </div>


        );
    }
}


import React, { Component } from 'react';


import AndroidIcon from '@material-ui/icons/Android';


export default class AndroidDownload extends Component {
    render() {
        return (

            <div className="androidContainer">
                <p className="androidBtn"><AndroidIcon style={{ fontSize: 40 }} />&nbsp;&nbsp;ดาวน์โหลดในระบบ Android</p>

            </div>


        );
    }
}


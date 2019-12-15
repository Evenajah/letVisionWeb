import React, { Component } from 'react';

// material
import Grow from '@material-ui/core/Grow';
import NavigationBar from '../component/NavigationBar';

import Footer from '../component/Footer';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';

import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';



export default class ViewBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookItem: []
        }
    }


    componentDidMount() {
        document.title = "Letvision";
        window.scrollTo(0, 0);


        const request = {
            type: 'searchBookWithId',
            idBook: this.props.match.params.id
        }
        axios.put('https://us-central1-letview-db16d.cloudfunctions.net/book/', request)
            .then((response) => {
                // console.log(response.data)
                if (response.data.length !== 0) {
                    this.setState({
                        bookItem: response.data
                    })
                }

            })
            .catch((error) => {
                console.log(error.message)
            })

    }

    mapBook() {
        if (this.state.bookItem.length !== 0) {
            return this.state.bookItem.map((bookItems, i) => {
                return (

                    <Zoom in={true} timeout={1000}>
                        <div key={i} >

                            <div class="boxBook">
                                <img className="imgViewBook" src={bookItems.bookItem.image} />
                                <h2 style={{ color: '#DCDCDC', padding: 30 }}>{bookItems.bookItem.titleBookName}</h2>
                                <hr/>
                                <br />



                                <div className="gridBookItem">
                                    <h5 className="textDetailBook">ISBN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {bookItems.bookItem.isbn}</h5>
                                    <h5 className="textDetailBook">ผู้แต่ง &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {bookItems.bookItem.authorName}</h5>
                                    <h5 className="textDetailBook">สำนักพิมพ์ : {bookItems.bookItem.publishName}</h5>
                                    <h5 className="textDetailBook">หมวดหมู่&nbsp;&nbsp;&nbsp;: {bookItems.category}</h5>
                                    <h5 className="textDetailBook">เพิ่มโดย&nbsp;&nbsp;&nbsp; : {bookItems.userCreate.first_name}</h5>
                                </div>
                                <div className="gridBookItem">
                                    <h5 className="textDetailBook2">&nbsp;&nbsp;&nbsp;  {bookItems.bookItem.discription}</h5>

                                </div>



                            </div>
                        </div>
                    </Zoom>

                )
            })
        } else {
            return (
                <div className="itemBook">

                    <img src='https://icon-library.net/images/loading-gif-icon/loading-gif-icon-19.jpg' />


                </div>
            )
        }

    }

    render() {

        return (
            <div>
                <Fade in={true} timeout={1000}>
                    <div className="App">
                        <div className="bookPage">

                            <NavigationBar />




                            <br /> <br /> <br />
                            <br /> <br /> <br />

                            {this.mapBook()}



                            <br /> <br /> <br />
                        </div>
                    </div>


                </Fade>

                <Footer />
            </div>
        );
    }
}


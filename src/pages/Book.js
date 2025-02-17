import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// material component
import Fade from '@material-ui/core/Fade';
import NavigationBar from '../component/NavigationBar';
// import Skeleton from '@material-ui/lab/Skeleton'
import axios from 'axios';

import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Footer from '../component/Footer';



export default class Book extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookObj: [],
            category: []
        }
    }


    componentDidMount = () => {
        document.title = "Book";
        window.scrollTo(0, 0);

        this.getCategory();
        axios.get('https://us-central1-letview-db16d.cloudfunctions.net/book/')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    bookObj: response.data
                })
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    mapAllBook() {

        // console.log('bookObj', this.state.bookObj)
        if (this.state.bookObj.length !== 0) {
            return this.state.bookObj.map((bookItems, i) => {
                return (
                    <Zoom in={true} timeout={1000}>
                        <div className="hovereffect" key={i} >


                            <img className="imgBook" src={bookItems.bookItem.image} />
                            <div class="overlay">
                                {(bookItems.bookItem.titleBookName.length >= 20) ? <h2 style={{ fontSize: 15, color: '#DCDCDC' }}>{bookItems.bookItem.titleBookName.substr(0, 20)}...</h2> : <h2 style={{ fontSize: 15, color: '#DCDCDC' }}>{bookItems.bookItem.titleBookName}</h2>}
                                <Link to={'/book/' + bookItems.bookId} class="info" ><VisibilityIcon /> เข้าชม</Link>
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



    getCategory() {



        const service = 'https://us-central1-letview-db16d.cloudfunctions.net/category';

        axios.get(service)
            .then((response) => {

                console.log(response.data);
            })
            .catch((error) => {

            })

    }


    render() {
        return (
            <div>
                <Fade in={true} timeout={1000}>
                    <div className="App">
                        <div className="bookPage">

                            <NavigationBar />


                            <div className="headerTextBook">หนังสือทั้งหมด</div>

                            <div className="wrapBook" >
                                <center><h1 style={{ color: '#BEBEBE', padding: 35 }}>หนังสือทั้งหมด</h1></center>
                                <Grid container spacing={10}>

                                    {this.mapAllBook()}
                                </Grid>
                            </div>

                            <br /> <br /> <br />
                        </div>
                    </div>


                </Fade>
                <Footer />
            </div>
        );
    }
}


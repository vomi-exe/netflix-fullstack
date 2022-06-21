import React, { useContext, useState } from 'react';
import "./list.css"
import { Link } from "react-router-dom";
// import { updateMovie } from '../context/moviesContext/apiCalls';
// import { MovieContext } from '../context/moviesContext/MovieContext';
import { useLocation } from 'react-router-dom';
//import IconButton from '@material-ui/core/IconButton';
//import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';
// import storage from "../firebase";


const Product = () => {

    const location = useLocation();
    const OGlist = location.list;

    // const [list, setList] = useState(null);
    // const [img, setImg] = useState(null);
    // const [trailer, setTrailer] = useState(null);
    // const [video, setVideo] = useState(null);
    // const [uploaded, setUploaded] = useState(0);

    // const { dispatch } = useContext(MovieContext);

    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setMovie({ ...movie, [e.target.name]: value });
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     updateMovie(OGmovie._id, movie, dispatch);
    // }
    // console.log(movie);

    // const upload = (items) => {
    //     items.forEach((item) => {
    //         const fileName = new Date().getTime() + item.label + item.file.name;
    //         const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
    //         uploadTask.on(
    //             "state_changed",
    //             (snapshot) => {
    //                 const progress =
    //                     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //                 console.log("Upload is " + progress + "% done");
    //             },
    //             (error) => {
    //                 console.log(error);
    //             },
    //             () => {
    //                 uploadTask.snapshot.ref.getDownloadURL().then((url) => {
    //                     setMovie((prev) => {
    //                         return { ...prev, [item.label]: url };
    //                     });
    //                     setUploaded((prev) => prev + 1);
    //                 });
    //             }
    //         );
    //     });
    // };

    // const handleUpload = (e) => {
    //     e.preventDefault();
    //     upload([
    //         { file: img, label: "img" },
    //         { file: trailer, label: "trailer" },
    //         { file: video, label: "video" },
    //     ])
    // };

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link className="link" to="/newlist">
                    <Button className="productAddBtn" variant="outlined" color="secondary" >Create</Button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">

                        <span className="productName">{OGlist.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">{OGlist._id}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{OGlist.genre}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">type:</span>
                            <span className="productInfoValue">{OGlist.type}</span>
                        </div>


                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label >List Title</label>
                        <input type="text" name="title" placeholder={OGlist.title} />
                        <label>Genre</label>
                        <input type="text" name="desc" placeholder={OGlist.genre} />
                        <label >Type</label>
                        <input type="text" name="year" placeholder={OGlist.type} />

                    </div>
                    <div className="productFormRight">

                        {/* {uploaded === 3 ?
                            <Link className="linkbtn" to="/movies">
                                <Button className="productUpdateBtn" color="primary" onClick={handleSubmit} variant="contained" component="span">
                                    Update
                                </Button>
                            </Link>
                            : */}
                        <Button className="productUpdateBtn" color="secondary" variant="contained" component="span">
                            Upload
                        </Button>
                        {/* } */}
                    </div>
                </form>
            </div >
        </div >
    );
}

export default Product;

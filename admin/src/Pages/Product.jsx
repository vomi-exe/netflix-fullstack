import React, { useContext, useState } from 'react';
import "./product.css"
import { Link } from "react-router-dom";
import { updateMovie } from '../context/moviesContext/apiCalls';
import { MovieContext } from '../context/moviesContext/MovieContext';
import { useLocation } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';
import storage from "../firebase";


const Product = () => {

    const location = useLocation();
    const OGmovie = location.movie;

    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);

    const { dispatch } = useContext(MovieContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateMovie(OGmovie._id, movie, dispatch);
    }
    console.log(movie);

    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                        setMovie((prev) => {
                            return { ...prev, [item.label]: url };
                        });
                        setUploaded((prev) => prev + 1);
                    });
                }
            );
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            { file: img, label: "img" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" },
        ])
    };

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link className="link" to="/create">
                    <Button className="productAddBtn" variant="outlined" color="secondary" >Create</Button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            className="productImg"
                            src={OGmovie.img}
                            alt="" />
                        <span className="productName">{OGmovie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">{OGmovie._id}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{OGmovie.genre}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Year:</span>
                            <span className="productInfoValue">{OGmovie.year}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">limit:</span>
                            <span className="productInfoValue">{OGmovie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label >Movie Title</label>
                        <input type="text" name="title" onChange={handleChange} placeholder={OGmovie.title} />
                        <label>Description</label>
                        <input type="text" name="desc" onChange={handleChange} placeholder={OGmovie.desc} />
                        <label >Year</label>
                        <input type="text" name="year" onChange={handleChange} placeholder={OGmovie.year} />
                        <label >Genre</label>
                        <input type="text" name="genre" onChange={handleChange} placeholder={OGmovie.genre} />
                        <label >Duration</label>
                        <input type="text" name="duration" onChange={handleChange} placeholder={OGmovie.duration} />
                        <label >Limit</label>
                        <input type="text" name="limit" onChange={handleChange} placeholder={OGmovie.limit} />

                        <label >Trailer</label>
                        <input type="file" id="trailer" onChange={(e) => setTrailer(e.target.files[0])} />
                        <label >Video</label>
                        <input type="file" id="video" onChange={(e) => setVideo(e.target.files[0])} />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img
                                className="productUploadImg"
                                src={OGmovie.img}
                                alt=""
                            />
                            <label for="file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton></label>
                            <input type="file" id="file" onChange={(e) => setImg(e.target.files[0])} style={{ display: "none" }} />
                        </div>

                        {uploaded === 3 ?
                            <Link className="linkbtn" to="/movies">
                                <Button className="productUpdateBtn" color="primary" onClick={handleSubmit} variant="contained" component="span">
                                    Update
                                </Button>
                            </Link>
                            :
                            <Button className="productUpdateBtn" onClick={handleUpload} color="secondary" variant="contained" component="span">
                                Upload
                            </Button>
                        }
                    </div>
                </form>
            </div >
        </div >
    );
}

export default Product;

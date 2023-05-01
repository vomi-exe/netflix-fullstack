import React, { useContext, useState } from 'react';
import "./newProduct.css";
import Button from '@material-ui/core/Button';
import storage from "../firebase";
import { Link } from "react-router-dom";
import { createMovie } from '../context/moviesContext/apiCalls';
import { MovieContext } from '../context/moviesContext/MovieContext';
import { useHistory } from 'react-router-dom';


const Newproduct = () => {

    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);
    const history = useHistory();

    const { dispatch } = useContext(MovieContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createMovie(movie, dispatch);
        history.push('/movies');
    }

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
            { file: imgTitle, label: "imgTitle" },
            { file: imgSm, label: "imgSm" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" },
        ])
    };

    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Movie</h1>
            <form className="productForm">
                <div className="productFormLeft">
                    <label >Image</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                    <label >Title Image</label>
                    <input
                        type="file"
                        id="imgTitle"
                        name="imgTitle"
                        onChange={(e) => setImgTitle(e.target.files[0])}
                    />
                    <label >Thumbnail Image</label>
                    <input
                        type="file"
                        id="imgSm"
                        name="imgSm"
                        onChange={(e) => setImgSm(e.target.files[0])}
                    />

                    <label >Title</label>
                    <input type="text" placeholder="Movie name" name="title" onChange={handleChange} />
                    <label >Description</label>
                    <input type="text" placeholder="Description" name="desc" onChange={handleChange} />
                    <label >Year</label>
                    <input type="text" placeholder="Year" name="year" onChange={handleChange} />
                    <label >Genre</label>
                    <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
                    <label >Duration</label>
                    <input type="text" placeholder="Duration" name="duration" onChange={handleChange} />
                    <label >Limit</label>
                    <input type="text" placeholder="Limit" name="limit" onChange={handleChange} />
                    <label>is Series ?</label>
                    <select name="isSeries" id="isSeries" onChange={handleChange} >
                        <option value="false" >No</option>
                        <option value="true" >Yes</option>
                    </select>

                    <label >Trailer</label>
                    <input
                        type="file"
                        id="trailer"
                        onChange={(e) => setTrailer(e.target.files[0])}
                    />
                    <label >Video</label>
                    <input
                        type="file"
                        id="video"
                        onChange={(e) => setVideo(e.target.files[0])}
                    />
                </div>

                {uploaded === 5 ?
                    <Link className="linkbtn" to="/movies">
                        <Button className="newProductBtn" color="primary" onClick={handleSubmit} variant="contained" component="span">
                            Create
                        </Button>
                    </Link>
                    :
                    <Button className="newProductBtnDisabled" onClick={handleUpload} color="secondary" variant="contained" component="span">
                        Upload
                    </Button>

                }

            </form >
        </div >
    );
}


export default Newproduct;

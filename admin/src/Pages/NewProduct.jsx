import React, { useState } from 'react';
import "./newProduct.css";
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';


const Newproduct = () => {


    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
    }


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
                <Link className="link" to="/products">
                    <Button className="newProductBtn" color="secondary" variant="contained" component="span">
                        Upload
                    </Button>
                </Link>
            </form >
        </div >
    );
}

export default Newproduct;

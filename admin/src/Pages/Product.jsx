import React from 'react';
import "./product.css"
import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';


const Product = () => {

    const location = useLocation();
    const movie = location.movie;

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link className="link" to="/newproduct">
                    <Button className="productAddBtn" variant="outlined" color="secondary" >Create</Button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            className="productImg"
                            src={movie.img}
                            alt="" />
                        <span className="productName">{movie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">{movie._id}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Year:</span>
                            <span className="productInfoValue">{movie.year}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">limit:</span>
                            <span className="productInfoValue">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label >Movie Title</label>
                        <input type="text" placeholder={movie.title} />
                        <label >Year</label>
                        <input type="text" placeholder={movie.year} />
                        <label >Genre</label>
                        <input type="text" placeholder={movie.genre} />
                        <label >Limit</label>
                        <input type="text" placeholder={movie.limit} />
                        <label >Trailer</label>
                        <input type="file" placeholder={movie.trailer} />
                        <label >Video</label>
                        <input type="file" placeholder={movie.video} />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img
                                className="productUploadImg"
                                src={movie.img}
                                alt=""
                            />
                            <label for="file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton></label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <Button className="productUpdateBtn" variant="contained" component="span">
                            Update
                        </Button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default Product;

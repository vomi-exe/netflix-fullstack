import React from 'react';
import "./newProduct.css";
import { Link } from "react-router-dom"
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';


const Newproduct = () => {
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <form className="productForm">
                <div className="productFormLeft">
                    <label >Name</label>
                    <input type="text" placeholder="Product name" />
                    <label >In Stock</label>
                    <input type="text" placeholder="123" />
                    <label>Active</label>
                    <select name="active" id="active" >
                        <option value="yes" >Yes</option>
                        <option value="no" >No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img
                            className="productUploadImg"
                            src="https://images.pexels.com/photos/5099868/pexels-photo-5099868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <label for="file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton></label>
                        <input type="file" id="file" style={{ display: "none" }} />
                    </div>
                    <Link className="link" to="/products">
                        <Button className="newProductBtn" color="secondary" variant="contained" component="span">
                            Update
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Newproduct;

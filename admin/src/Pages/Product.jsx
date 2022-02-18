import React from 'react';
import "./product.css"
import { Link } from "react-router-dom";
import Chart from "../components/Chart/Chart"
import { productData } from "../dummydata.js";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';


const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link className="link" to="newproduct">
                    <Button className="productAddBtn" variant="outlined" color="secondary" >Create</Button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Perfomence" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            className="productImg"
                            src="https://images.pexels.com/photos/5099868/pexels-photo-5099868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label >Product Name</label>
                        <input type="text" placeholder="Apple Airpods" />
                        <label >In Stock</label>
                        <select name="inStock" id="inStock" >
                            <option value="yes" >Yes</option>
                            <option value="no" >No</option>
                        </select>
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

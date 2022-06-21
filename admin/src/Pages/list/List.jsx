import React from 'react';
import "./list.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';



const List = () => {

    const location = useLocation();
    const OGlist = location.list;

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">List</h1>
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
        </div >
    );
}

export default List;

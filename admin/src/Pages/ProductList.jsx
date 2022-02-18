import React, { useState } from 'react';
import "./productList.css";
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { productRows } from "../dummydata.js";
import { Link } from "react-router-dom";

const Productlist = () => {

    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'product',
            headerName: 'Product',
            width: 230,
            renderCell: (params) => {
                return (

                    <div className="productListUsers">
                        <img className="productListRowImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'stocks',
            headerName: 'Stock',
            type: 'Number',
            width: 250,
        },
        {
            field: 'status',
            headerName: 'Status',
            sortable: true,
            width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 150,
        }, {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListBtn">
                        <Link
                            exact
                            style={{ textDecoration: 'none' }}
                            to={"/products/" + params.row.id}
                        >
                            <Button
                                className="btnproductListEdit"
                                variant="outlined"
                                color="primary"
                                size="small"
                            >
                                Edit
                            </Button>
                        </Link>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={() => {
                                handleDelete(params.row.id);
                            }}
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </Button>
                    </div>
                )
            }
        }
    ];








    return (
        <div className="productList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={11}
                checkboxSelection
                disableSelectionOnClick
            />

        </div>
    );
}

export default Productlist;

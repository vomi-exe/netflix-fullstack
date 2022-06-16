import React, { useEffect, useContext } from 'react';
import "./productList.css";
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { Link } from "react-router-dom";
import { MovieContext } from "../context/moviesContext/MovieContext";
import { getMovies, deleteMovies } from '../context/moviesContext/apiCalls';



const Productlist = () => {
    const { movies, dispatch } = useContext(MovieContext);


    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteMovies(id, dispatch);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {
            field: 'movie',
            headerName: 'Movie',
            width: 190,
            renderCell: (params) => {
                return (

                    <div className="productListUsers">
                        <img className="productListRowImg" src={params.row.img} alt="" />
                        {params.row.title}
                    </div>
                )
            }
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 120,
        },
        {
            field: 'year',
            headerName: 'Year',
            width: 120,
        },
        {
            field: 'limit',
            headerName: 'Limit',
            width: 120,
        },
        {
            field: 'isSeries',
            headerName: 'isSeries',
            width: 150,
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListBtn">
                        <Link
                            exact
                            style={{ textDecoration: 'none' }}
                            to={{ pathname: "/products/" + params.row._id, movie: params.row }}
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
                                handleDelete(params.row._id);
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
                rows={movies}
                columns={columns}
                pageSize={11}
                checkboxSelection
                disableSelectionOnClick
                getRowId={r => r._id}
            />

        </div>
    );
}

export default Productlist;

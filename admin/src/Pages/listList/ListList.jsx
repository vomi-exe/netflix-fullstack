import React, { useEffect, useContext } from 'react';
import "./listList.css";
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import { ListContext } from "../../context/listsContext/ListContext";
import { getLists } from '../../context/listsContext/apiCalls';
import { deleteLists } from '../../context/listsContext/apiCalls';


const ListList = () => {
    const { lists, isFetching, dispatch } = useContext(ListContext);


    useEffect(() => {
        getLists(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteLists(id, dispatch);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 300 },

        {
            field: 'title',
            headerName: 'tltle',
            width: 260,
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 150,
        },
        {
            field: 'type',
            headerName: 'type',
            width: 170,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 220,
            renderCell: (params) => {
                return (
                    <div className="productListBtn">
                        <Link
                            exact
                            style={{ textDecoration: 'none' }}
                            to={{ pathname: "/lists/" + params.row._id, list: params.row }}
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
            {!isFetching &&
                <DataGrid
                    rows={lists}
                    columns={columns}
                    pageSize={11}
                    checkboxSelection
                    disableSelectionOnClick
                    getRowId={r => r._id}
                />
            }
        </div>
    );
}

export default ListList;

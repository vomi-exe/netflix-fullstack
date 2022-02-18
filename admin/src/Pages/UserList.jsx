import React, { useState } from 'react';
import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { rows } from "../dummydata.js";
import { Link } from "react-router-dom";


const UserList = () => {

    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'user',
            headerName: 'User name',
            width: 230,
            renderCell: (params) => {
                return (

                    <div className="userListUsers">
                        <img className="userListRowImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'String',
            width: 250,
        },
        {
            field: 'status',
            headerName: 'Status',
            sortable: true,
            width: 150,
        },
        {
            field: 'transction',
            headerName: 'Transaction',
            width: 150,
        }, {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListBtn">
                        <Link
                            style={{ textDecoration: 'none' }}
                            to={"/users/" + params.row.id}
                        >
                            <Button
                                className="btnuserListEdit"
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
                            className=""
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
        <div className="userList">
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

export default UserList;

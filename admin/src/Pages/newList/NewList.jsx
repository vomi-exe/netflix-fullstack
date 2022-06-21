import React, { useContext, useState, useEffect } from 'react';
import "./newList.css";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { MovieContext } from '../../context/moviesContext/MovieContext';
import { ListContext } from '../../context/listsContext/ListContext';
import { getMovies } from '../../context/moviesContext/apiCalls';
import { createList } from '../../context/listsContext/apiCalls';


const Newlist = () => {

    const [list, setList] = useState(null);



    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
    const { dispatch } = useContext(ListContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);


    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    }
    const handleSubmit = (e) => {

        createList(list, dispatch)
    }

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setList({ ...list, [e.target.name]: value });
    };


    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New List</h1>
            <form className="productForm">
                <div className="productFormLeft">


                    <label >Title</label>
                    <input type="text" placeholder="List name" name="title" onChange={handleChange} />
                    <label >Genre</label>
                    <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
                    <label>Type</label>
                    <select name="type" id="type" onChange={handleChange} >
                        <option>Type </option>
                        <option value="movie" >Movie</option>
                        <option value="series" >Series</option>
                    </select>
                    <div className="addProductItem">
                        <label>Content</label>
                        <select multiple name="content" id="content" onChange={handleSelect} >
                            {movies.map((movie) =>
                            (
                                <option key={movie._id} value={movie._id} >{movie.title}</option>
                            ))}
                        </select>
                    </div>

                </div>


                <Link className="linkbtn" to="/lists">
                    <Button className="newProductBtn" color="primary" onClick={handleSubmit} variant="contained" component="span">
                        Create
                    </Button>
                </Link>


            </form >
        </div >
    );
}



export default Newlist;

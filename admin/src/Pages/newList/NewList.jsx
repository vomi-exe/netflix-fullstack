import React, { useContext, useState, useEffect } from 'react';
import "./newList.css";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { MovieContext } from '../../context/moviesContext/MovieContext';
import { ListContext } from '../../context/listsContext/ListContext';
import { getMovies } from '../../context/moviesContext/apiCalls';
import { createList } from '../../context/listsContext/apiCalls';


const Newlist = () => {

    const history = useHistory();

    const [list, setList] = useState(null);

    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);


    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
    const { dispatch } = useContext(ListContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);


    const handleChange = (e) => {
        setError2(false);
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });


    }
    const handleSubmit = (e) => {
        if (count === 12) {
            if (list != null && list.type != null && list.genre != null && list.title != null) {
                createList(list, dispatch);
                history.push("/lists");
                window.location.reload();
            } else {
                setError2(true);
            }
        }
        else {
            setError2(false);
            setError(true);
        }
    }

    console.log(list);

    const handleSelect = (e) => {
        setError(false);
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setList({ ...list, [e.target.name]: value });
        setCount(value.length);
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
                    <div>Items Selected: {count} </div>

                </div>


                <Button className="newProductBtn" color="primary" onClick={handleSubmit} variant="contained" component="span">
                    Create
                </Button>




                {error && <div className="errorMsg">
                    "Please choose 12 items"
                </div>}

                {error2 && <div className="errorMsg">
                    "Please set Title, genre and type also"
                </div>}

            </form >
        </div >
    );
}



export default Newlist;

import React from 'react';
import "./newUser.css";
import Button from '@material-ui/core/Button';


const Newuser = () => {
    return (
        <div className="newUser">
            <div className="newUserContainer">
                <h1 className="newUSerTitle">New User</h1>
                <form className="newUserForm">
                    <div className="newUserItem">
                        <label >Username</label>
                        <input type="text" placeholder="John" />
                    </div>

                    <div className="newUserItem">
                        <label >Full Name</label>
                        <input type="text" placeholder="John Smith" />
                    </div>

                    <div className="newUserItem">
                        <label >Email</label>
                        <input type="email" placeholder="John@email.com" />
                    </div>

                    <div className="newUserItem">
                        <label >Password</label>
                        <input type="password" placeholder="*******" />
                    </div>

                    <div className="newUserItem">
                        <label >Phone</label>
                        <input type="text" placeholder="+1 654 512 4580" />
                    </div>

                    <div className="newUserItem">
                        <label >Address</label>
                        <input type="text" placeholder="New York | USA" />
                    </div>

                    <div className="newUserItem">
                        <label className="newUserGenderTitle" >Gender</label>
                        <div className="newUserGender">
                            <input type="radio" name="gender" id="male" value="male" />
                            <label for="male">Male</label>
                            <input type="radio" name="gender" id="female" value="female" />
                            <label for="female">Female</label>
                            <input type="radio" name="gender" id="other" value="other" />
                            <label for="other">Other</label>
                        </div>
                        <div className="newUserItem">
                            <label className="newUserActiveTitle">Active</label>
                            <select name="active" id="active" className="newUserSelect">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <Button className="newUserCreateBtn" variant="contained" color="primary">Create</Button>
                </form>
            </div>
        </div>
    );
}

export default Newuser;

import React, {Fragment, useState} from "react"
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate} from "react-router-dom";


function Register(){
    const navi = useNavigate();
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [cfmPassword, setCfmPassword] = useState("");

    const registerDetails = {
        email: Email,
        password: Password,
        userName: Username
    };


    const onSubmit = () =>{
        console.log(registerDetails);
        axios.post(`http://localhost:8080/api/profile/register`, registerDetails)
            .then(res => {
                console.log(res.data);
            })
        navi('/')
    }



    return(
        <Fragment>
            <div className="register">
                <div className="row">
                    <div className="col-md-8 m-auto" data-testid="login">
                        <h1 className="display-4 text-center">Register</h1>
                        <div className="form-group">
                            <TextField label="Username" color="primary" focused type="username"
                                       placeholder="Username"
                                       name="username"
                                       onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <br/>
                        <br/>
                        <div className="form-group">
                            <TextField label="Email" color="primary" focused type="email"
                                       placeholder="Email Address"
                                       name="email"
                                       onChange={(e) => setEmail(e.target.value)}/>
                            <br/>
                        </div>
                        <br/>
                        <br/>
                        <div className="form-group">
                            <TextField label="Password" color="primary" focused type="password"
                                       placeholder="Password"
                                       name="password"
                                       onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <br/>
                        <br/>
                        <div className="form-group">
                            <TextField label="ConfirmPassword" color="primary" focused type="password"
                                       placeholder="ConfirmPassword"
                                       name="confirmpassword"
                                       onChange={(e) => setCfmPassword(e.target.value)}/>
                        </div>
                        <br/>
                        <br/>
                        <input type="submit"
                               value="Register"
                               sx={{ mt: 3, mb: 2 }}
                               className="btn btn-info btn-block mt-4"
                            onClick={onSubmit}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Register;
import React, {useState} from "react";
import axios from "axios";
import {useMutation} from "react-query";
import { Navigate } from 'react-router-dom';
import {Avatar} from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import {blue} from "@mui/material/colors";
import Button from "@mui/material/Button";
import {Link} from "@mui/material";

function Login() {

    // const postLogin = async (loginDetails) => {
    //     return axios.post("http://localhost:8081/api/users/login", loginDetails);
    // };
    //
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    
    const loginDetails = {
        username: Username,
        password: Password,
    };
    //
    //
    // const mutation = useMutation(() => {
    //     return postLogin(loginDetails);
    // });
    //
    // const { data: returnFromDB, isSuccess } = mutation;
    //
    //
    // const onSubmit = async (data) => {
    //     return mutation.mutate(data);
    // };
    //
    // if (isSuccess === true) {
    //     console.log(returnFromDB.data);
    //     localStorage.setItem("token",returnFromDB.data.token);
    //
    //     return <Navigate to="/" replace={true} />
    // }


    return (
        <div className="login" >
            <div className="container">
                <br/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-8 m-auto" data-testid="login">
                        <Avatar sx={{ m: 1 }} style={{alignSelf: 'center', backgroundColor: blue[500]}}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h1 className="display-4 text-center">Log In</h1>
                        <div className="form-group">
                            <TextField label="Email" color="primary" focused type="email"
                                       placeholder="Email Address"
                                       name="email"
                                       onChange={(e) => setUsername(e.target.value)}/>
                            {/*<input*/}
                            {/*    className="form-control form-control-lg"*/}
                            {/*    type="email"*/}
                            {/*    placeholder="Email Address"*/}
                            {/*    name="email"*/}
                            {/*    onChange={(e) => setUsername(e.target.value)}*/}
                            {/*/>*/}
                            <br/>
                            <br/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <TextField label="Password" color="primary" focused type="password"
                                       placeholder="Password"
                                       name="password"
                                       onChange={(e) => setPassword(e.target.value)}/>
                            {/*<input*/}
                            {/*    className="form-control form-control-lg"*/}
                            {/*    type="password"*/}
                            {/*    placeholder="Password"*/}
                            {/*    name="password"*/}
                            {/*    onChange={(e) => setPassword(e.target.value)}*/}
                            {/*/>*/}
                        </div>
                        <br/>
                        <br/>
                        <input type="submit"
                               value="Login"
                               sx={{ mt: 3, mb: 2 }}
                               className="btn btn-info btn-block mt-4"
                               // onClick={onSubmit}
                        />
                    </div>
                </div>
                <br/>
                <br/>
                <div>
                    <h4>New around here? Just create a new account</h4>
                    <Button color="secondary" href="/Register">hello</Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
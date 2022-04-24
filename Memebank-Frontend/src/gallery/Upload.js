import React, {Component} from "react";
import {Avatar} from "@material-ui/core";
import {Image} from "@mui/icons-material";
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';
import axios from "axios";


window.Buffer = window.Buffer || require("buffer").Buffer;


// const S3_BUCKET ='memebank-bucket';
// const REGION ='us-east-1';
// const ACCESS_KEY ='ASIARHJT5X4JXUA7ONFH';
// const SECRET_ACCESS_KEY ='ULVMB4/vJ7jZXaJLEjEcHPsUMQQwwugdKEnmAlW8';

// const config = {
//     bucketName: S3_BUCKET,
//     dirName: 'photos',
//     region: REGION,
//     accessKeyId: ACCESS_KEY,
//     secretAccessKey: SECRET_ACCESS_KEY,
// }

class Upload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            obj: null
        };

        this.onImageChange = this.onImageChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            console.log(img);
            this.setState({
                image: URL.createObjectURL(img),
                obj: img
            });
            
        }
    };

    submit = () =>{
        const formData = new FormData();
        formData.append('file', this.state.obj);
        formData.append('title', "title");
        formData.append('user', localStorage.getItem('Username'));

        axios.post(`http://localhost:8080/api/post/CreatePost`, formData)
            .then(res => {
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="centered">
                        <Stack>
                            <Avatar sx={{ m: 1}} style={{alignSelf: 'center'}}>
                                <Image />
                            </Avatar>
                            <br/>
                                <h1 style={{textAlign: 'center'}}>Select Image</h1>
                            <div>
                                <img src={this.state.image} height={600} width={700}/>
                            </div>
                            <br/>
                            <div style={{alignSelf: 'center'}}>
                                <input type="file" name="myImage" onChange={this.onImageChange} />
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div style={{alignSelf: 'center'}} >
                                <Button variant="upload" onClick={this.submit}>Upload</Button>
                            </div>
                        </Stack>
                    </div>
                </div>
            </div>
        );
    }
}
export default Upload;
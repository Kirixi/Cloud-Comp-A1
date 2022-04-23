import React, {Component} from "react";
import {Avatar} from "@material-ui/core";
import {Image} from "@mui/icons-material";
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';





class Upload extends Component {



    constructor(props) {
        super(props);
        this.state = {
            image: null,
        };

        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };

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
                                <Button variant="upload">Upload</Button>
                            </div>
                        </Stack>
                    </div>
                </div>
            </div>
        );
    }
}
export default Upload;
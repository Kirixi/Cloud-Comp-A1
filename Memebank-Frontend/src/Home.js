import React, {Fragment, useEffect, useState} from "react";
import Gallery from "./gallery/Gallery";
import axios from "axios";
import {useQuery} from "react-query";

function Home() {

    const [posts, setPosts] = useState();
    // let images = getData();
    const { data, isSuccess, isRefectching, refetch, isLoading} = useQuery("post", () => axios.get(`http://localhost:8080/api/post/getPost`),
        {enabled: false} );

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        if (isSuccess && data) {
            console.log("here");
            let temp = data.data;
            for(let i = 0; i < temp.length; i++){

                if( i === 0 || i === 1 || i === 3 || i === 6){
                    temp[i]["height"] = 600;
                }
                else if(i === 2 || i === 7) {
                    temp[i]["height"] = 700;
                }
                else if(i === 5 || i === 8){
                    temp[i]["height"] = 500;
                }
                else{
                    temp[i]["height"] = 800;
                }

            }
            console.log(temp)
            setPosts(data.data);
        }
    }, [data, isSuccess]);


    return (
        <Fragment>
            <>
                <h2>Top Memes</h2>
            </>
            <br/>
            { posts ? (<div className="gallery">
                <Gallery imgarr={posts} /></div>) :
                (<h1>Loading ...</h1>)}
            <br/>

        </Fragment>
    );

}
export default Home
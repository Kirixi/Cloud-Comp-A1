import getData from "./data";
import React, {Fragment, useEffect} from "react";
import Gallery from "./gallery/Gallery";

function Home() {
    useEffect(() => {

    }, []);
    let images = getData();
    return (
        <Fragment>
            <div className="gallery">
                <Gallery imgarr={images} />
            </div>
        </Fragment>
    );

}
export default Home
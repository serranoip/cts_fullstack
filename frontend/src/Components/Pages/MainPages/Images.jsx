import Nav from '../../Nav/NavImages'
import "../styling/image.scss"
import photos from '../styling/data';
import PhotoAlbum from "react-photo-album";
import {Lightbox} from 'yet-another-react-lightbox';
import { useState } from 'react';
import "yet-another-react-lightbox/styles.css";

const Images = () => {
    const [index, setIndex] = useState(-1);
    return(
        <>
            <Nav/>
            <div className="images">
            <PhotoAlbum
                layout="rows"
                photos={photos}
                targetRowHeight={300}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={photos}
            />
            </div>
        </>
        
    );
    
};

export default Images;
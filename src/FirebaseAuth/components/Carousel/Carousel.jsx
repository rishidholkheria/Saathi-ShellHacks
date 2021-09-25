import React from "react";
import { Carousel } from "react-carousel-minimal";
import photo1 from "../little-girl.jpg";
import photo2 from "../children.jpg";

const Gallery = () => {
  const data = [
    {
      image: photo1,
      caption: "Save a life",
    },
    {
      image: photo2,
      caption: "Happy faces",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="Carousel">
      <div style={{ textAlign: "center" }}>
        <h2>SAATHI</h2>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            // width="850px"
            // height="500px"
            width="100vw"
            height="70vh"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              // maxWidth: "850px",
              // maxHeight: "500px",
              maxWidth: "100vw",
              maxHeight: "70vh",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

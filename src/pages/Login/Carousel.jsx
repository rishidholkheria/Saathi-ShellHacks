import React from "react";
import { Carousel } from "react-carousel-minimal";
import photo1 from "../../assets/children.jpg";
import photo2 from "../../assets/little_girl.jpg";

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
            height="800px"
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
              maxHeight: "60px",
              margin: "20px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

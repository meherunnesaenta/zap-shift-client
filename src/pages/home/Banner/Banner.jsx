import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // এটা অবশ্যই রাখো (লাইব্রেরির স্টাইল)

import img1 from '/images/img1.jpg';
import img2 from '/images/img2.jpg';
import img3 from '/images/img3.jpg';

function Banner() {
  return (
    <div 
      className="banner-container" 
      style={{ 
        autoPlay: true,
        height: "80vh", 
        width: "100%", 
        overflow: "hidden",
        position: "relative" 
      }}
    >
      <Carousel
        autoPlay               
        interval={4000}         
        infiniteLoop           
        showArrows={true}       
        showThumbs={false}      
        showStatus={false}      
        showIndicators={true}   
        transitionTime={800}    
        swipeable               
        emulateTouch            
      >
        <div>
          <img 
            src={img1} 
            alt="Slide 1" 
            style={{ 
              width: "100%", 
              height: "80vh", 
              objectFit: "cover", 
              objectPosition: "center"
            }} 
          />
          
          <div style={{
            position: "absolute",
            bottom: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            textAlign: "center",
            textShadow: "0 2px 10px rgba(0,0,0,0.8)"
          }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>Welcome</h1>
            <p style={{ fontSize: "1.5rem" }}>Explore our world</p>
          </div>
        </div>

        <div>
          <img 
            src={img2} 
            alt="Slide 2" 
            style={{ 
              width: "100%", 
              height: "80vh", 
              objectFit: "cover", 
              objectPosition: "center"
            }} 
          />
          <div style={{
            position: "absolute",
            bottom: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            textAlign: "center",
            textShadow: "0 2px 10px rgba(0,0,0,0.8)"
          }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>Discover</h1>
            <p style={{ fontSize: "1.5rem" }}>Amazing collections</p>
          </div>
        </div>

        <div>
          <img 
            src={img3} 
            alt="Slide 3" 
            style={{ 
              width: "100%", 
              height: "80vh", 
              objectFit: "cover", 
              objectPosition: "center"
            }} 
          />
          <div style={{
            position: "absolute",
            bottom: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            textAlign: "center",
            textShadow: "0 2px 10px rgba(0,0,0,0.8)"
          }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>Join Us</h1>
            <p style={{ fontSize: "1.5rem" }}>Best offers waiting</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
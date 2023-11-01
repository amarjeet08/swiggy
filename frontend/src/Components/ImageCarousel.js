// import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import './ImageCarousel.css'

// const ImageCarousel = () => {
//     const images = [
//         './swiggyAssets/carousel1.webp',
//         './swiggyAssets/carousel2.webp',
//         './swiggyAssets/carousel3.webp',
//         './swiggyAssets/carousel4.webp',
//         './swiggyAssets/carousel5.webp',
//         './swiggyAssets/carousel6.webp',
//         './swiggyAssets/carousel7.webp',
//         './swiggyAssets/carousel8.webp',
//         './swiggyAssets/carousel9.webp',
//         './swiggyAssets/carousel10.webp',
//         './swiggyAssets/carousel11.webp',
//     ];

//     return (
//         <div className="carousel-container">
//             <h1>Welcome to My Image Carousel</h1>
//             <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} className='carousel-div'>
//                 {images.map((image, index) => (
//                     <div key={index}>
//                         <img src={image} alt={`Image ${index + 1}`} className='image-carousel' />
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default ImageCarousel;

import React from 'react'
import './ImageCarousel.css'

const ImageCarousel = () => {
    return (
        <>
            <div className='image-div'>
                <img className='image-carousel' src='./swiggyAssets/carousel1.webp' alt='swiggy-image' /> <br />
                <img className='image-carousel' src='./swiggyAssets/carousel2.webp' alt='swiggy-image' /> <br />
                <img className='image-carousel' src='./swiggyAssets/carousel3.webp' alt='swiggy-image' /><br />
                <img className='image-carousel' src='./swiggyAssets/carousel4.webp' alt='swiggy-image' /><br />
                <img className='image-carousel' src='./swiggyAssets/carousel5.webp' alt='swiggy-image' /><br />
                <img className='image-carousel' src='./swiggyAssets/carousel6.webp' alt='swiggy-image' /><br />
                <img className='image-carousel' src='./swiggyAssets/carousel7.webp' alt='swiggy-image' /><br />
                <img className='image-carousel' src='./swiggyAssets/carousel8.webp' alt='swiggy-image' /><br />
                <img className='image-carousel' src='./swiggyAssets/carousel9.webp' alt='swiggy-image' /><br />
                <img className='image-carousel' src='./swiggyAssets/carousel10.webp' alt='swiggy-image' /><br />
                <img className='image-carousel' src='./swiggyAssets/carousel11.webp' alt='swiggy-image' /><br />
            </div>
        </>
    )
}

export default ImageCarousel

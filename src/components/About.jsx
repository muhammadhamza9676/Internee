import React from 'react';
import './About.css';
import image from './images/horizontal-shot-happy-mixed-race-females.jpg';

const About = () => {


  const aboutData = [
    {
      image: image,
      title: 'Introducing Internee.pk',
      text: "The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field."
    },
  ];

  return (
    <>
      <div className='mb-5'>
        <div className="image-overlay">
          <div className="overlay-s"></div>
          <div className="image-content">
            <h1 className='s-head-2'>About US</h1>
          </div>
        </div>



        <div className="container">
          {aboutData.map((service, index) => (
            <div className={`row ${index % 2 === 0 ? 'flex-row-reverse' : ''}`} key={index}>
              <div className="col-md-6 my-4 mb-5">
                <div className="service-section">
                  <h2 className="text serv-head">{service.title}</h2>
                  <p className='about-mytext-box'>{service.text}</p>
                </div>
              </div>
              <div className="col-md-6 my-4 mt-5 d-flex align-items-center">
                <div className="image-section big-img">
                  <img src={service.image} alt={service.title} loading='lazy' className="img-fluid" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="about-image-overlay">
          <div className="overlay-about"></div>
          <div className="about-second-overlay">
          <div className="image-content-overlay-about">
            <h1 className='s-head-2'>Internships every months</h1>
            <p>Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>
            <button type="button" className="btn btn-outline-success rounded-0" >Explore Internships</button>
          </div>
          </div>
        </div>

    </>



  )
}

export default About
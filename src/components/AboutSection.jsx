import React from 'react';
import founder from './images/founder.jpg';
import founder2 from './images/rayyan.jpg';
import aboutimg from './images/about.jpg';
import './AboutSection.css';

function AboutSection() {
    const servicesData = [
        {
          image: aboutimg,
          title: 'Launching tech careers with internships, exposure, and networking.',
          text: "Internee.pk kickstarts student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry."
        },
    ]
  return (
    <section className="about-section mt-5 py-5">
      <div className="founder-cont">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div style={{ backgroundColor: 'green' }} className="about-image-wrap custom-border-radius-start">
              <img src={founder} className="about-image custom-border-radius-start img-fluid" alt="" />
              <div className="about-info">
                <h4 className="text-white mb-0 me-2">Hammad Sheikh</h4>
                <p className="text-white mb-0">Founder</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="custom-text-block " style={{ minHeight: '80vh' }}>
              <h2 className="text-white mb-4">Welcome to Internee.pk</h2>
              <p className="text-white">
                Our internship program is designed to give students the opportunity to work on meaningful projects and tasks,
                while also receiving mentorship and guidance from experienced professionals in the field. Our goal is to help interns develop the skills and knowledge
                they need to succeed in their careers, while also building a strong network of talented individuals who may become valuable members of our team in the future.
                If you're looking for a challenging and rewarding internship experience, we invite you to explore our program and{' '}
                <a href="job-listings.html" style={{ color: '#30e792', fontWeight: 'bolder' }} target="_parent">Apply Today</a>
              </p>

              <div className="custom-border-btn-wrap d-flex align-items-center text-white mt-5" style={{color:'white'}}>
                <a href="about.html" className="btn btn btn-light me-4 pr-2 mr-2 rounded-0">Get to know us</a>
                <a href="job-listings.html" className="custom-link smoothscroll" style={{color:'white'}}>Explore Internships</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="instagram-block">
              <img src={founder2} className="about-image custom-border-radius-end img-fluid" style={{ minHeight: '80vh' }} alt="" />
              <div className="about-info">
                <h4 className="text-white mb-0 me-2">Rayyan Zain</h4>
                <p className="text-white mb-0">CMO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cont-serv">
      {servicesData.map((service, index) => (
        <div className={`row ${index % 2 === 0 ? 'flex-row-reverse' : ''}`} key={index}>
          <div className="col-md-6 my-4">
            <div className="service-section">
              <h2 className="text-center serv-head">{service.title}</h2>
              <p className='mt-5'>{service.text}</p>
            </div>
          </div>
          <div className="col-md-6 my-4">
            <div className="image-section big-img">
              <img src={service.image} alt={service.title} className="img-fluid" />
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}

export default AboutSection;

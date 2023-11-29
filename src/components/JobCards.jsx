import React from 'react';
import './JobCards.css';

import analysisImage from './images/jobs/analysis.jpg';
import hackImage from './images/jobs/hack.jpg';
import cloudImage from './images/jobs/cloud.jpg';
import frontEndImage from './images/jobs/FrontEnd.jpg';
import backendImage from './images/jobs/BackendDevelopment.jpg';
import chatbotImage from './images/jobs/chatbotDevelopment.jpg';
import machineLearningImage from './images/jobs/Machine Learning.jpg';
import mobileAppImage from './images/jobs/Mobile App Developer.jpg';
import graphicDesignImage from './images/jobs/logo-designer-working-computer-desktop.jpg';



const jobs = [
  {
    title: 'Data Analyst',
    image: analysisImage,
    link: 'https://forms.gle/3e2bWbthoNJvj7999',
    location: 'Remote',
    duration: '1 Month',
  },
  {
    title: 'Cyber Security',
    image: hackImage,
    link: 'https://forms.gle/jxkmaCWHZA8wyHYGA',
    location: 'Remote',
    duration: '1 Month',
  },
  {
    title: 'Cloud Computing',
    image: cloudImage,
    link: 'https://forms.gle/JG5kUmwFuzYjvP248',
    location: 'Remote',
    duration: '1 Month',
  },
  {
    title: 'Frontend Development',
    image: frontEndImage,
    link: 'web-design.html',
    location: 'Remote',
    duration: '1 Month',
  },
  {
    title: 'Backend Development',
    image: backendImage,
    link: 'web-development.html',
    location: 'Remote',
    duration: '1 Month',
  },
  {
    title: 'Chatbot Development',
    image: chatbotImage,
    link: 'chatbot.html',
    location: 'Remote',
    duration: '1 Month',
  },
  {
    title: 'Machine Learning',
    image: machineLearningImage,
    link: 'https://forms.gle/h16QDGvAGpTEz7Ko7',
    location: 'Remote',
    duration: '1 Month',
  },
  {
    title: 'Mobile App Development',
    image: mobileAppImage,
    link: 'mobile-development.html',
    location: 'Remote',
    duration: '1 Month',
  },
  {
    title: 'Graphic Design',
    image: graphicDesignImage,
    link: 'graphic.html',
    location: 'Remote',
    duration: '1 Month',
  },

];

function JobCards() {
  return (
    <section>
      <div className="row jobswhole">
        {jobs.map((job, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12 p-1">
            <div className="job-thumb job-thumb-box">
              <div className="job-image-box-wrap">
                <a href={job.link}>
                  <img height="130" src={job.image} className="job-image img-fluid" alt={job.title} />
                </a>
              </div>
              <div className="job-body">
                <h4 className="job-title">
                  <a href={job.link} className="job-title-link">{job.title}</a>
                </h4>
                <div className="d-flex align-items-center">
                  <p className="job-location">
                    <i className="fa-solid fa-location-dot mx-1" style={{ color: '#99b4ea' }}></i>
                    {job.location}
                  </p>
                  <p className="job-date">
                    <i className="fa-regular fa-clock mx-1" style={{ color: '#99b4ea' }}></i>
                    {job.duration}
                  </p>
                </div>
                <div className="d-flex align-items-center border-top pt-3">
                  <button href={job.link} className="btn btn-success ms-auto">Apply now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobCards;

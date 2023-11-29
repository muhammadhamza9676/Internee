import React from 'react';
import './MainSection.css';

function MainSection() {
  return (
    <section>
      <div className='home-container'>
        <div className='bg-image'>
          <div className='overlay'>

            <div className="row">
              <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                <div className="main-section-text mt-5 ml-5">
                  <h6 className="text-white">Are you looking for your dream Internship ?</h6>

                  <h1 className="main-title text-white text-bold mt-4 mb-4">Join <br /> Internee.pk now..!</h1>
                  <p className='text-light main-p' style={{ color: 'white' }}>
                    Pakistan's Virtual Internship Platform Powered By{' '}
                    <a className='btn btn-link' href="https://techviochats.com/" style={{ fontWeight: 'bold', color: 'rgb(208, 228, 255)' }}>
                      TechvioChats
                    </a>
                  </p>

                  <a href="job-listings.html" style={{ color: 'white', border: '2px solid white' }} id="styling" className="custom-btn btn-outline-success custom-border-btn btn styling">
                    Browse Internships
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;

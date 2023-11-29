import React from 'react'
import JobCards from './JobCards'

const Internships = () => {
  return (
    <section>
      <div className='mb-5'>
        <div className="image-overlay">
          <div className="overlay-s"></div>
          <div className="image-content">
            <h1 className='s-head-2'>Internships Listing</h1>
          </div>
        </div>
      </div>

      <h1 className='heading-intern py-5'>
        Internships on Different Tech Domain
      </h1>
      <JobCards />
    </section>
  )
}

export default Internships

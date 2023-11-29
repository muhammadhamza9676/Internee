import React from 'react'
import JobCards from './JobCards'

const InternSection = () => {
    return (
        <div>
            <div style={{display : 'block' , padding : '10px', paddingLeft : '60px', fontFamily : 'sans-serif'}}>
                <h1><b>Recent Internships</b></h1>
                <p>Internships came after every two months Grab your internships on your favourite domain to boost up yourself in the field of Computer technology.</p>
            </div>
            <JobCards />
        </div>
    )
}

export default InternSection

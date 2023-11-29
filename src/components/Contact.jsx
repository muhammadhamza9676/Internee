import React from "react";
import './Contact.css';

const Contact = () => {


    return (
        <div className="contact-page">
            <div className="contact-bg">
                <div className="overlay-con"></div>
                <div className="contact-details">
                    <ContactInfo />
                </div>
            </div>
            <div className="contact-form">
                <h1 className="my-5 d-flex justify-content-center head-cont-2"> Send Us A Message </h1>
                <form>
                    <div className='mb-1'>
                        <label htmlFor="FName"><b>Enter your Name:</b></label>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control rounded-0" name='user_fname' placeholder="First name" required />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control rounded-0" name='user_lname' placeholder="Last name" required />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1"><b>Email address: </b></label>
                        <input type="email" placeholder=" example@email.com" name='user_email' className="form-control rounded-0" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Phone"><b>Phone Number:</b></label>
                        <input type="tel" placeholder=" +1 800 000000" name='user_phone' className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Message"><b>Message:</b></label>
                        <textarea placeholder=" Write us a Message" name='user_message' className="form-control rounded-0" required ></textarea>
                    </div>
                    <button className="btn btn-success send-button rounded-0" type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    );
};


export default Contact;






const ContactInfo = () => {
    return (
        <div>
            <h1 className='mb-5 head-cont-1'>Get In Touch!</h1>
            <div className="mb-5">
                <i className="fas fa-envelope"></i><h5> Email </h5>
                <p className="ml-3 detailinfo">info@internee.pk</p>
            </div>
            <div className="mb-5">
                <i className="fas fa-phone"></i><h5> Phone </h5>
                <p className="ml-3 detailinfo">+92 349 2861021</p>
                <p className="ml-3 detailinfo">+92 345 3191638</p>
            </div>
            <div className="mb-5">
                <i className="fas fa-map-marker-alt"></i> <h5> Address </h5>
                <p className="ml-3 detailinfo">National Incubation Center, Karachi, Pakistan</p>
            </div>
        </div>
    );
};
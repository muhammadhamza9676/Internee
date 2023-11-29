import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div className="d-flex flex-column">
            <footer className="mt-auto  text-center text-white" style={{ backgroundColor: 'rgb(0 130 49)' }}>

                <div className="container p-3">

                    <section className="mb-4">

                        <Link className="btn btn-outline-light btn-floating m-1" to="/contact" role="button"><i className="fab fa-facebook-f"></i></Link>


                        <Link className="btn btn-outline-light btn-floating m-1" to="/contact" role="button"><i className="fab fa-twitter"></i></Link>


                        <Link className="btn btn-outline-light btn-floating m-1" to="/contact" role="button"><i className="fab fa-google"></i></Link>


                        <Link className="btn btn-outline-light btn-floating m-1" to="/contact" role="button"><i className="fab fa-instagram"></i></Link>


                        <Link className="btn btn-outline-light btn-floating m-1" to="/contact" role="button"><i className="fab fa-linkedin-in"></i></Link>

                    </section>



                    <section className="">
                        <form action="">

                            <div className="row d-flex justify-content-center">

                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>



                                <div className="col-md-5 col-12">

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-auto">

                                    <button type="submit" placeholder='yourname@email.com' className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section>

                </div>
                <section className="mb-3">
                    <p>
                        Get Updates About Internships
                    </p>
                </section>
                <div className="text-center p-3">
                    © 2023 Internee.pk
                </div>

            </footer>
        </div>
    )
}

export default Footer
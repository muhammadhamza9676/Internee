import React from 'react';
import './Review.css'
import noprofile from './images/profile.jpg';
const Review = () => {
    const allStar = document.querySelectorAll('.rating .star')
    const ratingValue = document.querySelector('.rating input')

    allStar.forEach((item, idx) => {
        item.addEventListener('click', function () {
            let click = 0
            ratingValue.value = idx + 1

            allStar.forEach(i => {
                i.classList.replace('bxs-star', 'bx-star')
                i.classList.remove('active')
            })
            for (let i = 0; i < allStar.length; i++) {
                if (i <= idx) {
                    allStar[i].classList.replace('bx-star', 'bxs-star')
                    allStar[i].classList.add('active')
                } else {
                    allStar[i].style.setProperty('--i', click)
                    click++
                }
            }
        })
    })
    return (
        <>
            <p className='rev-tag'>TESTIMONIAL</p>
            <div className="maindiv">
                <h1 className='rev-head'>Happy Internee Reviews</h1>
            </div>
            <section className="main my-5">
                <div className="full-boxer">
                    <div className="comment-box">
                        <div className="box-top">
                            <div className="Profile">
                                <div className="profile-image">
                                    <img src={noprofile} alt="Profile" loading="eager" />
                                </div>
                                <div className="Name">
                                    <strong>Jordan Hamilton</strong>
                                    <span>@jordanhamilton</span>
                                </div>
                                <div className="C_rating">
                                    <input type="number" name="rating" hidden />
                                    <i className='bx bxs-star star' style={{ '--i': 0 }}></i>
                                    <i className='bx bxs-star star' style={{ '--i': 1 }}></i>
                                    <i className='bx bxs-star star' style={{ '--i': 2 }}></i>
                                    <i className='bx bxs-star star' style={{ '--i': 3 }}></i>
                                    <i className='bx bxs-star star' style={{ '--i': 4 }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus nulla earum! Facere consectetur neque numquam necessitatibus illum possimus ducimus fugit, laborum ab, error, asperiores hic quis adipisci sequi.
                            </p>
                        </div>
                    </div>
                    <div className="comment-box">
                        <div className="box-top">
                            <div className="Profile">
                                <div className="profile-image">
                                    <img src={noprofile} alt="Profile" loading="eager" />
                                </div>
                                <div className="Name">
                                    <strong>Scott MCcoy</strong>
                                    <span>@scottmccoy</span>
                                </div>
                                <div className="C_rating">
                                    <input type="number" name="rating" hidden />
                                    <i className='bx bxs-star star' style={{ '--i': 0 }}></i>
                                    <i className='bx bxs-star star' style={{ '--i': 1 }}></i>
                                    <i className='bx bxs-star star' style={{ '--i': 2 }}></i>
                                    <i className='bx bxs-star star' style={{ '--i': 3 }}></i>
                                    <i className='bx bxs-star star' style={{ '--i': 4 }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus tempora adipisci tenetur, voluptatum quos. Adipisci magni architecto accusantium inventore a alias velit voluptates sequi dolore quod! Modi, molestias! Reprehenderit, qui nemo.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
};

export default Review;
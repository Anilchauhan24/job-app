import React from 'react'
import "./Footer.css";
function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer' id="footer-color">
                <nav>
                    <div className='footer-text' id="footer-text">
                        <h1>FindJobs</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,making it look like readable English.</p>
                    </div>
                    <div className='footer-text-left'>
                        <div className='links'>
                            <div><h5>Product</h5>
                                <ul id="link">
                                    <li>Home</li>
                                    <li>Solution</li>
                                    <li>Serices</li>
                                    <li>Contact</li>
                                    <li>About</li>
                                    <li>Projects</li>

                                </ul>

                            </div>
                            <div><h5>UseFul Links</h5>
                                <ul id="link">
                                    <li>Projects</li>
                                    <li>Min projects</li>
                                    <li>Online</li>
                                    <li>Helpline</li>
                                    <li>Portfolio</li>
                                    <li>Service Desk</li>
                                </ul>

                            </div>
                            <div><h5>Address</h5>
                                <ul id="link">
                                    <li>Submit</li>
                                    <li>Share</li>
                                    <li>Links</li>
                                    <li>Useful</li>
                                    <li>Article</li>
                                    <li>Blog</li>

                                </ul>

                            </div>

                        </div>
                    </div>

                </nav>

            </div>
            <div className='copiright'>
                <div className='social-icons' id="social-icons">
                    <ul>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-square-twitter"></i></li>
                        <li><i class="fa-brands fa-linkedin"></i></li>
                        <li><i class="fa-brands fa-whatsapp"></i></li>

                    </ul>

                </div>
                <div>


                </div>

                <p>Copyright@findJobs</p>
            </div>
        </div>
    )
}

export default Footer
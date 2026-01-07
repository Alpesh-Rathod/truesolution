'use client'

export default function Footer() {
    return (
        <>
            <style jsx global>{`
                .footer {
                    width: 100%;
                    position: relative;
                }
                .footer .footer-body {
                   background: #012060;
                   padding: 40px 0px 20px;
                }
                .footer .footer-body .footer-link h4 {
                    color: #F0903F;
                    font-size: 24px;
                    line-height: 36px;
                    font-weight: bold;
                    padding-bottom: 15px;
                 }
                .footer .footer-body .logo  {
                    position: relative;
                    border-bottom: 1px solid #4EAEBC;
                    padding-bottom: 40px;
                    margin-bottom: 40px;
                 }  
                .footer .footer-body .footer-link .list-inline a,
                .footer .footer-body .footer-link p {
                    color: #ffffff;
                    font-size: 16px;
                    line-height: 24px;
                    font-weight: 300;
                    padding-bottom: 15px;
                    display: block;
                 }
                .footer .footer-body .copyright .container {
                     border-top: 1px solid #4eaebc;
                    margin-top: 20px;
                     padding-top: 30px;
                    position: relative;
                }
                .footer .footer-body .copyright p {
                   color: #ffffff;
                }    
                .footer .footer-body .copyright p span {
                   color: #f0903f;
                }       
            `}
            </style>
            <section className="footer">
                <div className="building-images">
                    <img src="/img/building.png" alt="" />
                </div>
                <div className="footer-body">
                    <div className="container">
                        <div className="logo text-center">
                            <a href="#">
                                <img src="/img/white-logo.svg" alt="" />
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-link">
                                    <h4>Vision Statement</h4>
                                    <p>Impacting lives by turning every customer into a messenger where each experience is so memorable, it’s shared through conversations and connections that echo forever.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-link">
                                    <h4>Navigation</h4>
                                    <ul className="list-inline">
                                        <li>
                                            <a href="#">Property Solutions</a>
                                        </li>
                                        <li>
                                            <a href="#">Investment Opportunities</a>
                                        </li>
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Let’s Talk About Your Property</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-link">
                                    <h4>Contact Us</h4>
                                    <ul className="list-inline">
                                        <li>
                                            <a href="#">
                                                <img src="img/location.svg" alt="" />
                                                <span className="ms-2">4182 Worth Ave., Columbus, OH 43219</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/call.svg" alt="" />
                                                <span className="ms-2">614-706-5775</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>© 2025 <span><strong>TRUE SOLUTIONS.</strong></span> All rights reserved.</p>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="social-nav text-md-end mb-0">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <img src="img/link.svg" alt="" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <img src="img/facebook.svg" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
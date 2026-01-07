
'use client';

export default function Inquiry() {
    return (
        <>
            <style jsx global>{`
                .inquiry-section {
                    background: #ffffff;
                    padding: 80px 0;
                }
                .inquiry-section .form-group input {
                    padding: 0.8rem 1rem;
                    border-radius: 40px;
                }
                .btn-primary {
                     box-shadow: 15px 15px 30px 0px #00000033;
                    border-radius: 40px;
                    padding: 0.8rem 2rem;
                    background: #4eaebc;
                    border: none;
                }
                .btn-primary:hover {
                    background: #3b8a96;
                }
            `}</style>
            <section className="inquiry-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="main-title">Start My <span className="highlight">Free</span> Property Review </h2>
                        </div>
                        <div className="col-md-10 mx-auto">
                            <div className="inquiry-form">
                                <form className="" method="post">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <input type="text" className="form-control" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <input type="text" className="form-control" placeholder="subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-4">
                                                <input type="tel" className="form-control" placeholder="Verification code" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-4">
                                                <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                      <div className="col-md-12">
                                         <div className="form-group text-center mt-4">
                                             <button type="submit" className="btn btn-primary">Submit</button>
                                         </div>
                                      </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
'use client';

export default function Banner({
    title = 'Your Property.',
    highlighted = 'Your Peace of Mind',
    subtitle = 'Your trusted partner in innovative solutions.',
    ctaText = "Let’s Talk About Your Property",
    ctaLink = "#",
    image = "/img/banner-img.png",
    reverse = false
}) {
    return (
        <>
            <style jsx global>{`
            .banner-section {
               padding: 100px 0;
               background-color: #f5f5f5;
            }

            .banner-content h1 {
              font-size: 72px;
              font-weight: bold;
              color: #000000;
              margin-bottom: 20px;
            }

            .banner-content .text-light-primary {
              color: #4EAEBC;
            }

            .banner-content p {
              font-size: 24px;
              line-height: 28px;
              padding-bottom: 30px;
              color: #333333;
            }

            .banner-image img {
              max-width: 100%;
              height: auto;
            }

            .banner-content .btn-primary {
              background-color: #4EAEBC;
              border-color: #4EAEBC;
              box-shadow: 15px 15px 30px 0px #00000033;
              border-radius: 40px;
              padding: 0.8rem 2rem;
            }

            .banner-content .btn-primary:hover {
              background-color: #f0903f;
              border-color: #f0903f;
            }
            `}</style>
            
            <section className="banner-section">
                <div className="container">
                    <div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>

                        {/* CONTENT */}
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1>
                                    {title} <br />
                                    <span className="text-light-primary">{highlighted}</span>
                                </h1>
                                <p>{subtitle}</p>
                                <a href={ctaLink} className="btn btn-primary">
                                    {ctaText}
                                </a>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="col-lg-6">
                            <div className="banner-image text-center">
                                <img src={image} alt="Banner Image" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

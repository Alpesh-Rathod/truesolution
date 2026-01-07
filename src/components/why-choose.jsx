'use client';

export default function WhyChoose({
    title = "Why Choose",
    highlight = "True Solution?",
    subtitle = "Discover the True Solution Advantage: Excellence, Innovation, and Trust.",
    items = [
        {
            icon: "/img/choose-icon1.png",
            title: "Expertise You Can Trust",
            description:
                "Our team of seasoned professionals brings years of industry experience to deliver top-notch solutions tailored to your needs."
        },
        {
            icon: "/img/choose-icon2.png",
            title: "Innovative Solutions",
            description:
                "We leverage cutting-edge technology and creative strategies to provide innovative solutions that drive success and growth."
        },
        {
            icon: "/img/choose-icon3.png",
            title: "Customer-Centric Approach",
            description:
                "Your satisfaction is our priority. We work closely with you to understand your goals and deliver personalized solutions that exceed expectations."
        }
    ]
}) {
    return (
        <>
        <style jsx global>{`
        .why-choose-section {
          padding: 80px 0;
          background-color: #ffffff;
        }

        .why-choose-section h2 {
          font-size: 60px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .why-choose-section .section-title .text-primary {
            color: #4eaebc !important;
        }
        .why-choose-section p {
          font-size: 16px;
          color: #555;
        }

        .why-choose-item {
          text-align: center;
          padding: 30px 20px;
          transition: transform 0.3s ease;
          border: 1px solid #eee;
          border-radius: 8px;
          box-shadow: 0px 2px 40px 0px #a8a8a833;
        }

        .why-choose-item:hover {
          transform: translateY(-6px);
        }

        .why-choose-item img {
          width: 80px;
          height: 80px;
          margin-bottom: 20px;
        }

        .why-choose-item h4 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .why-choose-item p {
          font-size: 15.5px;
          line-height: 22px;
        }
          
      `}</style>
            <section className="why-choose-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="section-title text-center mb-5">
                        <h2>
                            {title} <span className="text-primary">{highlight}</span>
                        </h2>
                        <p>{subtitle}</p>
                    </div>
                    {/* ITEMS */}
                    <div className="row">
                        {items.map((item, index) => (
                            <div
                                className={`col-lg-4 col-md-6 ${index === 2 ? "offset-md-3 offset-lg-0" : ""
                                    }`}
                                key={index}
                            >
                                <div className="why-choose-item">
                                    <img src={item.icon} alt={item.title} />
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

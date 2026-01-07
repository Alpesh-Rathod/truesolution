'use client';

const faqData = [
    {
        question: 'Do I have to sell my property to work with you?',
        answer:
            'No. We help explore all options — including selling, renting, repositioning, or collaborating on creative solutions.',
    },
    {
        question: 'What types of properties do you work with?',
        answer:
            'Single-family homes, multifamily buildings, estates, inherited properties, and rentals with or without tenants.',
    },
    {
        question: 'Are there any fees or obligations?',
        answer:
            'Never. Our consultation and property review are completely free. You decide how you’d like to move forward.',
    },
    {
        question: 'What if I still owe on my mortgage?',
        answer:
            'That’s common. We’ll outline your available options based on your current situation and equity.',
    },
    {
        question: 'Can you help with tenant or estate issues?',
        answer:
            'Yes — our team has experience navigating probate, landlord-tenant matters, and transition planning.',
    },
];

export default function FAQs() {
    return (
        <>
            <style jsx global>{`
                .faqs-section {
                    background: rgba(78, 174, 188, 0.1);
                    padding: 80px 0;
                }
                .main-title {
                    font-size: 3.5rem;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 40px;
                }
                .highlight {
                    color: #4eaeBC;
                }
                .faqs-section .faq-col {
                    background: #fff;
                    border-radius: 16px;
                    padding: 20px;
                    box-shadow: 0 2px 10px #0000001a;
                    margin-bottom: 30px;
                }
                .faqs-section .faq-item:not(:last-child) {
                    border-bottom: 1px solid rgb(0 0 0 / 10%);
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                }
                .faqs-section .faq-item h4 {
                    font-size: 24px;
                    line-height: 32px;
                    color: #000;
                }
                .faqs-section .faq-item p {
                    font-size: 18px;
                    line-height: 28px;
                    color: rgb(0 0 0 / 60%);
                }
            `}</style>

            <section className="faqs-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="main-title">
                                Common Questions From{' '}
                                <span className="highlight">Property Owner</span>
                            </h2>
                        </div>

                        {/* Left Column */}
                        <div className="col-lg-6">
                            <div className="faq-col">
                                {faqData.slice(0, 3).map((item, index) => (
                                    <div className="faq-item" key={index}>
                                        <h4>{item.question}</h4>
                                        <p>{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6">
                            <div className="faq-col">
                                {faqData.slice(3).map((item, index) => (
                                    <div className="faq-item" key={index}>
                                        <h4>{item.question}</h4>
                                        <p>{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

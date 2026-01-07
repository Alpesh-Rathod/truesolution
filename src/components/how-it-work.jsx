'use client';
import React, { useEffect, useRef, useState } from 'react';

const HowItWorksTimeline = () => {
  const timelineRef = useRef(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeDots, setActiveDots] = useState([]);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Start the Conversation',
      description: 'Schedule a quick call or send your property details.',
      image: 'img/how-it-work1.jpg',
      alt: 'Business meeting'
    },
    {
      id: 2,
      number: '02',
      title: 'Get a Custom Plan',
      description: "We'll evaluate your situation and outline flexible options.",
      image: 'img/how-it-work2.jpg',
      alt: 'Team discussion'
    },
    {
      id: 3,
      number: '03',
      title: 'Choose Your Path',
      description: "You decide what works best — we'll handle the rest.",
      image: 'img/how-it-work3.jpg',
      alt: 'Professional consultation'
    }
  ];

  useEffect(() => {
    const updateTimeline = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const timelineItems = timeline.querySelectorAll('.timeline-item');
      const timelineRect = timeline.getBoundingClientRect();
      const timelineTop = timelineRect.top + window.scrollY;
      const scrollPosition = window.scrollY + window.innerHeight * 0.7;

      // Calculate progress
      const timelineStart = timelineTop + 60;
      const timelineHeight = timeline.offsetHeight - 120;
      const progress = Math.max(0, Math.min(1, (scrollPosition - timelineStart) / timelineHeight));

      // Update line height
      const newProgressHeight = progress * timelineHeight;
      setProgressHeight(newProgressHeight);

      // Update dots
      const newActiveDots = [];
      timelineItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2 + window.scrollY;

        if (scrollPosition >= itemCenter) {
          newActiveDots.push(index);
        }
      });
      setActiveDots(newActiveDots);
    };

    // Update timeline on scroll
    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('load', updateTimeline);
    window.addEventListener('resize', updateTimeline);

    // Initial update
    updateTimeline();

    return () => {
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('load', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .how-it-works-timeline {
          padding: 80px 0;
          background: #fff;
        }
        .main-title {
          font-size: 3.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 40px;
          font-family: Georgia, serif;
        }

        .works {
          color: #4EAEBC;
        }

        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0px;
          height: 100%;
          width: 3px;
          background-color: rgba(0, 128, 128, 0.2);
          transform: translateX(-50%);
        }

        .timeline::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 0px;
          width: 3px;
          background-color: #4EAEBC;
          transform: translateX(-50%);
          height: ${progressHeight}px;
          transition: height 0.3s ease;
        }

        .timeline-item {
          margin-bottom: 80px;
          position: relative;
          min-height: 300px;
          display: flex;
          align-items: flex-start;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 24px;
          height: 24px;
          background-color: white;
          border: 4px solid #e0e0e0;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          transition: border-color 0.3s ease;
        }

        .timeline-dot.active {
          border-color: #4EAEBC;
        }

        .timeline-dot::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          background-color: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: background-color 0.3s ease;
        }

        .timeline-dot.active::before {
          background-color: #4EAEBC;
        }

        .timeline-content {
          width: 45%;
          padding: 20px;
        }

        .timeline-image {
          width: 45%;
          padding: 20px;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          order: 2;
          text-align: left;
          padding-left: 120px;
        }

        .timeline-item:nth-child(odd) .timeline-image {
          order: 1;
          padding-right: 0px;
          padding-left: 120px;
        }

        .timeline-item:nth-child(even) .timeline-content {
          order: 1;
          text-align: right;
          padding-right: 60px;
        }

        .timeline-item:nth-child(even) .timeline-image {
          order: 2;
          padding-left: 120px;
        }

        .step-number {
          font-size: 3.5rem;
          font-weight: bold;
          color: #4EAEBC;
          margin-bottom: 20px;
          font-family: Georgia, serif;
        }

        .step-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 15px;
          font-family: Georgia, serif;
        }

        .step-description {
          color: #6c757d;
          font-size: 1.1rem;
          line-height: 1.6;
          font-family: Georgia, serif;
        }

        .step-image {
          border-radius: 10px;
          width: 100%;
          height: auto;
          display: block;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }

          .timeline::before {
            left: 30px;
          }

          .timeline::after {
            left: 30px;
          }

          .timeline-dot {
            left: 30px;
          }

          .timeline-item {
            flex-direction: column;
            align-items: flex-start;
            min-height: auto;
          }

          .timeline-content,
          .timeline-image {
            width: 100%;
            padding-left: 70px !important;
            padding-right: 15px !important;
            text-align: left !important;
          }

          .timeline-item:nth-child(odd) .timeline-content,
          .timeline-item:nth-child(even) .timeline-content {
            order: 2;
          }

          .timeline-item:nth-child(odd) .timeline-image,
          .timeline-item:nth-child(even) .timeline-image {
            order: 1;
          }
        }
      `}</style>

    <section className="how-it-works-timeline">
      <div className="container">
        <h1 className="main-title">
          How It <span className="works">Works</span>
        </h1>
        <div className="timeline" ref={timelineRef}>
          {steps.map((step, index) => (
            <div key={step.id} className="timeline-item">
              <div className={`timeline-dot ${activeDots.includes(index) ? 'active' : ''}`}></div>
              <div className="timeline-image">
                <img src={step.image} alt={step.alt} className="step-image" />
              </div>
              <div className="timeline-content">
                <div className="step-number">{step.number}</div>
                <h2 className="step-title">{step.title}</h2>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default HowItWorksTimeline;
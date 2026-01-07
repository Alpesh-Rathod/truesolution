import Banner from "@/src/components/banner"
import WhyChoose from "@/src/components/why-choose"
import TestimonialsCarousel from "@/src/components/testimonials"
import HowItWorksTimeline from "@/src/components/how-it-work"
import FAQs from "@/src/components/faqs"
import Inquiry from "@/src/components/inquiry"

export default function Home() {
  return (
    <>
      <Banner />
      <WhyChoose />
      <TestimonialsCarousel />
      <HowItWorksTimeline />
      <FAQs />
      <Inquiry />
    </>
  );
}
import React from 'react';
import FeatureSection from './FeatureSection';

const WhyChooseUsSection: React.FC = () => {
  return (
    <FeatureSection
      title="Why Choose Us?"
      image={{ src: '/assets/images/les-argonautes-l4b9wMyn7iU-unsplash.jpg', alt: 'Why Choose Us', width: 900, height: 900 }}
      imageSide="right"
      textWidth="twoThirds"
      gradient="down" dimImage
    >
      <p className="mb-4">
        At Quest Web Development Technologies, we are committed to delivering excellence in every project we undertake. Here's why we are the right choice for your digital needs:
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2">1. Expertise and Experience</h3>
          <p>With years of experience in web development, API creation, and database management, our team possesses the knowledge and skills to bring your vision to life. We stay updated with the latest industry trends and technologies to provide cutting-edge solutions.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">2. Customized Solutions</h3>
          <p>We understand that every business is unique. That's why we offer tailor-made solutions that cater to your specific needs and goals. From initial consultation to final delivery, we ensure our services align with your objectives.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">3. Quality and Reliability</h3>
          <p>Our commitment to quality is unwavering. We adhere to best practices and rigorous testing to ensure that our solutions are reliable, secure, and perform flawlessly. You can trust us to deliver exceptional results, on time and within budget.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">4. Client-Centric Approach</h3>
          <p>Your satisfaction is our top priority. We maintain open communication, provide regular updates, and value your feedback throughout the project. Our collaborative approach ensures that we exceed your expectations at every stage.</p>
        </div>
      </div>
      <p className="mt-4">
        Choose Quest Web Development Technologies for a partner dedicated to your success. Let's embark on a journey to elevate your digital presence together.
      </p>
    </FeatureSection>
  );
};

export default WhyChooseUsSection;

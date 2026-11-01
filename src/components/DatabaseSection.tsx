import React from 'react';
import FeatureSection from './FeatureSection';

const DatabaseSection: React.FC = () => {
  return (
    <FeatureSection
      title="Database Creation & Maintenance"
      image={{ src: '/assets/images/vitolda-klein-lAqSzwr5eQc-unsplash.jpg', alt: 'Database Creation and Maintenance', width: 800, height: 800 }}
      imageSide="right"
      textWidth="twoThirds"
      gradient="down"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Database Creation</h3>
        <p>
          At Quest Web Development Technologies, we understand that a well-structured database is the cornerstone of any successful application. Our database creation services focus on designing and developing databases that are tailored to your specific needs. We ensure your data is organized, secure, and easily accessible, whether you require relational databases, NoSQL solutions, or custom data storage solutions. Our expertise guarantees a robust foundation that supports your business operations and growth.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Database Maintenance</h3>
        <p>
          Maintaining the integrity and performance of your databases is crucial for the smooth operation of your applications. Our database maintenance services at Quest Web Development Technologies include regular monitoring, optimization, and troubleshooting to ensure your databases run efficiently and securely. We perform routine backups, updates, and performance tuning, providing you with peace of mind knowing that your data is in expert hands. Our proactive approach ensures minimal downtime and maximizes the reliability of your data systems.
        </p>
      </div>
    </FeatureSection>
  );
};

export default DatabaseSection;

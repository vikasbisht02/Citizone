import React from 'react';
import MainLayout  from '../layouts/MainLayout';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';

/**
 * Home Page
 * @returns {JSX.Element}
 */
const HomePage = () => {
  return (
    <MainLayout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Citizone
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Empowering citizens with digital solutions for a better tomorrow.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" size="lg">
              <a href="/login">Get Started</a>
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Citizone?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Secure',
                description: 'Enterprise-grade security to protect your data.',
              },
              {
                title: 'Fast',
                description: 'Lightning-fast performance for seamless experience.',
              },
              {
                title: 'Reliable',
                description: '99.9% uptime guarantee with 24/7 support.',
              },
            ].map((feature, index) => (
              <Card key={index} title={feature.title}>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;

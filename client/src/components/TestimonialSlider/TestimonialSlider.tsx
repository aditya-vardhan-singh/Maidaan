import React from 'react';
import Slider from 'react-slick';
import { Card, Image, Text } from '@mantine/core';
import './TestimonialSlider.css'; // Make sure the CSS file is correctly imported

interface Testimonial {
  image: string;
  name: string;
  title: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    name: 'Priya Kapoor',
    title: 'Certified Cricket Coach',
    quote: 'As a coach, finding local talent and organizing matches has never been easier. Maidaan\'s platform connects me with passionate players, and the event management tools are a game-changer for my training camps.',
  },
  // Add more testimonials as needed
];

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Ensure only one slide is shown at a time
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <Card className="testimonial-card">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div>
              <Text size="lg">
                {testimonial.name}
              </Text>
              <Text color="dimmed">{testimonial.title}</Text>
              <Text mt="md" size="sm">
                {testimonial.quote}
              </Text>
            </div>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;

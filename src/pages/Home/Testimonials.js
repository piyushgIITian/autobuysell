import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import Section from 'components/Section';
import Heading from 'components/Heading';
import Text from 'components/Text';
import { reflow } from 'utils/transition';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sangeeta Saho',
    text: 'I was skeptical at first, but this auto trading bot has proven itself to be trustworthy. It follows my strategies faithfully and has generated consistent profits.',
    image: 'https://autobuysell.io/assets/home/img/testi-3.jpg'
  },
  {
    id: 2,
    name: 'Ajendra Yadav',
    text: 'The support team behind this Autobuysell is fantastic. They\'re responsive and helpful, addressing any concerns or questions promptly.',
    image: 'https://autobuysell.io/assets/home/img/testi-4.jpg'
  },
  {
    id: 3,
    name: 'Sagar Siddhu',
    text: 'I love how Autobuysell 24/7, so I don\'t have to be glued to my computer screen. It takes care of trades even when I\'m away.',
    image: 'https://autobuysell.io/assets/home/img/testi-1.jpg'
  },
  {
    id: 4,
    name: 'Sushil Narayan',
    text: 'I\'ve been using this Autobuysell for a few months now, and it\'s been a game-changer! It executes trades quickly and efficiently.',
    image: 'https://autobuysell.io/assets/home/img/testi-2.jpg'
  }
];

const TestimonialItem = ({ testimonial, status }) => (
  <div className={classNames('testimonial__item', `testimonial__item--${status}`)}>
    <div className="testimonial__content">
      <Text className="testimonial__text">
        {testimonial.text}
      </Text>
      <div className="testimonial__author">
        <img 
          className="testimonial__image" 
          src={testimonial.image} 
          alt={testimonial.name} 
        />
        <Heading level={5} className="testimonial__name">
          {testimonial.name}
        </Heading>
      </div>
    </div>
  </div>
);

const Testimonials = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([0, 1]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (visible) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const newIndex = (prevIndex + 1) % testimonials.length;
          setVisibleTestimonials([
            newIndex,
            (newIndex + 1) % testimonials.length
          ]);
          return newIndex;
        });
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [visible]);

  return (
    <Section
      className="testimonials"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="testimonials__content">
            <Heading
              className={classNames('testimonials__title', `testimonials__title--${status}`)}
              level={3}
              id={titleId}
            >
              What Our Client Say about Autobuysell
            </Heading>
            <div className="testimonials__grid">
              {testimonials.map((testimonial, index) => (
                visibleTestimonials.includes(index) && (
                  <TestimonialItem 
                    key={testimonial.id}
                    testimonial={testimonial}
                    status={status}
                  />
                )
              ))}
            </div>
            <div className="testimonials__dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={classNames(
                    'testimonials__dot',
                    { 'testimonials__dot--active': index === currentIndex }
                  )}
                  onClick={() => {
                    setCurrentIndex(index);
                    setVisibleTestimonials([
                      index,
                      (index + 1) % testimonials.length
                    ]);
                    if (intervalRef.current) {
                      clearInterval(intervalRef.current);
                    }
                  }}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Testimonials;

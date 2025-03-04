import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import Section from 'components/Section';
import Heading from 'components/Heading';
import { reflow } from 'utils/transition';
import './Partners.css';

const partnerLogos = [
  'https://autobuysell.io/assets/home/img/5.png',
  'https://autobuysell.io/assets/home/img/6.png',
  'https://autobuysell.io/assets/home/img/7.png',
  'https://autobuysell.io/assets/home/img/1.png',
  'https://autobuysell.io/assets/home/img/2.png',
  'https://autobuysell.io/assets/home/img/3.png',
  'https://autobuysell.io/assets/home/img/4.png'
];

const Partners = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="partners"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="partners__content">
            <Heading
              className={classNames('partners__title', `partners__title--${status}`)}
              level={3}
              id={titleId}
            >
              Our Integrated Partners
            </Heading>
            <div className="partners__grid">
              {partnerLogos.map((logo, index) => (
                <Fragment key={index}>
                  <div 
                    className={classNames(
                      'partners__item', 
                      `partners__item--${status}`,
                      `partners__item--${index + 1}`
                    )}
                  >
                    <img 
                      className="partners__logo" 
                      src={logo} 
                      alt={`Partner ${index + 1}`} 
                    />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Partners;

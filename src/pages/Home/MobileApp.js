import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import Section from 'components/Section';
import Heading from 'components/Heading';
import Text from 'components/Text';
import { reflow } from 'utils/transition';
import './MobileApp.css';

const MobileApp = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="mobile-app"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="mobile-app__content">
            <div className="mobile-app__text-container">
              <Heading
                className={classNames('mobile-app__title', `mobile-app__title--${status}`)}
                level={3}
                id={titleId}
              >
                Autobuysell Mobile app!
              </Heading>
              <Heading
                className={classNames('mobile-app__subtitle', `mobile-app__subtitle--${status}`)}
                level={4}
              >
                Coming Soon
              </Heading>
              <div className="mobile-app__stores">
                <a 
                  href="#" 
                  className={classNames('mobile-app__store', `mobile-app__store--${status}`, 'mobile-app__store--apple')}
                >
                  <img 
                    src="https://autobuysell.io/assets/home/img/appstore.png" 
                    alt="App Store" 
                    className="mobile-app__store-img"
                  />
                </a>
                <a 
                  href="#" 
                  className={classNames('mobile-app__store', `mobile-app__store--${status}`, 'mobile-app__store--google')}
                >
                  <img 
                    src="https://autobuysell.io/assets/home/img/playstore.png" 
                    alt="Play Store" 
                    className="mobile-app__store-img"
                  />
                </a>
              </div>
            </div>
            <div className="mobile-app__image-container">
              <img 
                src="https://autobuysell.io/assets/home/img/logos.png" 
                alt="Mobile app preview" 
                className={classNames('mobile-app__image', `mobile-app__image--${status}`)}
              />
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default MobileApp;

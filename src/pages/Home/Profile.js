import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import Link from 'components/Link';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import Image from 'components/Image';
import Section from 'components/Section';
import { reflow } from 'utils/transition';
import { media } from 'utils/style';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './Profile.css';

const ProfileText = ({ status, titleId }) => (
  <Fragment>
    <Heading
      className={classNames('profile__title', `profile__title--${status}`)}
      level={3}
      id={titleId}
    >
      <DecoderText text="Who We are" start={status !== 'exited'} delay={500} />
    </Heading>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      Revolutionize the world of algorithmic trading with Autobuysell! One of the unique & automated trading bot brimmed with diverse strategies. Autobuysell is expertly crafted to execute buy & sell orders across various financial markets, simultaneously deploying an array of trading tactics.
    </Text>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      Using dynamic methodologies, the bot aspires to capitalize on opportunities within a variety of assets and market situations, ultimately seeking to maximize profits. A multifaceted approach not only bolsters the bot's likelihood of success but also effectively spreads risk, making it an invaluable tool for traders.
    </Text>
  </Fragment>
);

const Profile = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="profile"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="profile__content">
            <div className="profile__column">
              <ProfileText status={status} titleId={titleId} />
              <div className="profile__join">
                <Heading
                  className={classNames('profile__join-title', `profile__join-title--${status}`)}
                  level={4}
                >
                  Join the Autobuysell Revolution!!
                </Heading>
                <Text
                  className={classNames('profile__join-text', `profile__join-text--${status}`)}
                  size="l"
                >
                  Don't let the unpredictable & volatile market conditions affect your trading performance & profitability. Take charge of your own trading destiny with Autobuysell, the innovative and dynamic platform that enables you to harness the power of algorithmic trading.
                </Text>
                <Text
                  className={classNames('profile__join-text', `profile__join-text--${status}`)}
                  size="l"
                >
                  With Autobuysell, you can make informed, data-driven & strategic decisions that will boost your trading results as well as confidence. Don't settle for less than you deserve. Upgrade your trading experience today & see the difference for yourself.
                </Text>
                <Button
                  className={classNames('profile__button', `profile__button--${status}`)}
                  href="https://autobuysell.io/register"
                  iconHoverShift
                  iconEnd="arrowRight"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="profile__column">
              <div className="profile__tag" aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={status !== 'entered'}
                  collapseDelay={1000}
                />
                <div
                  className={classNames(
                    'profile__tag-text',
                    `profile__tag-text--${status}`
                  )}
                >
                  About Us
                </div>
              </div>
              <div className="profile__image-wrapper">
                <img
                  className={classNames('profile__image', `profile__image--${status}`)}
                  src="https://autobuysell.io/assets/home/img/design.jpeg"
                  alt="Trading design"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;

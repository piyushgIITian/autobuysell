import { Suspense, lazy, useEffect, useState, Fragment } from 'react';
import classNames from 'classnames';
import { TransitionGroup, Transition } from 'react-transition-group';
import DecoderText from 'components/DecoderText';
import { useInterval, usePrevious, useWindowSize } from 'hooks';
import { reflow } from 'utils/transition';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';
import { tokens } from 'components/ThemeProvider/theme';
import Heading from 'components/Heading';
import Section from 'components/Section';
import { useTheme } from 'components/ThemeProvider';
import VisuallyHidden from 'components/VisuallyHidden';
import { Button } from 'components/Button';
import './Intro.css';

const DisplacementSphere = lazy(() => import('pages/Home/DisplacementSphere'));

function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const theme = useTheme();
  const windowSize = useWindowSize();
  const prevTheme = usePrevious(theme);
  const titleId = `${id}-title`;

  useEffect(() => {
    if (prevTheme && prevTheme.themeId !== theme.themeId) {
      // Reset any theme-specific state here
    }
  }, [theme.themeId, prevTheme]);

  return (
    <Section
      className="intro"
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition
        key={theme.themeId}
        appear={!prerender}
        in={!prerender}
        timeout={3000}
        onEnter={reflow}
      >
        {status => (
          <Fragment>
            {!prerender && (
              <Suspense fallback={null}>
                <DisplacementSphere />
              </Suspense>
            )}
            <header className="intro__text">
              <h1
                className={classNames('intro__name', `intro__name--${status}`)}
                id={titleId}
              >
                <DecoderText text="Unleash The Power" start={!prerender} delay={300} />
              </h1>
              <Heading level={0} as="h2" className="intro__title">
                <VisuallyHidden className="intro__title-label">Of AI Trading</VisuallyHidden>
                <span
                  aria-hidden
                  className={classNames('intro__title-row', {
                    'intro__title-row--hidden': prerender,
                  })}
                >
                  <span
                    className={classNames(
                      'intro__title-word',
                      `intro__title-word--${status}`
                    )}
                    style={{ '--delay': tokens.base.durationXS }}
                  >
                    Of AI Trading
                  </span>
                </span>
              </Heading>
              <div className="intro__subtitle">
                <h3 className={classNames('intro__subtitle-text', `intro__subtitle-text--${status}`)}>
                  Autobuysell - Your Trusted Partner In Automated Trading.
                </h3>
              </div>
              <div className="intro__buttons">
                <Button
                  className={classNames('intro__button', `intro__button--${status}`)}
                  href="https://autobuysell.io/register"
                  iconHoverShift
                >
                  Get Started
                </Button>
                <Button
                  className={classNames('intro__button', `intro__button--${status}`)}
                  secondary
                  href="https://youtu.be/RD9MueV6cHE?si=NqnhgrmpG7ygCI1E"
                  iconHoverShift
                >
                  How It Works?
                </Button>
              </div>
            </header>
            {windowSize.width > media.tablet && (
              <div
                className={classNames(
                  'intro__scroll-indicator',
                  `intro__scroll-indicator--${status}`,
                  { 'intro__scroll-indicator--hidden': scrollIndicatorHidden }
                )}
                status={status}
              />
            )}
            {windowSize.width <= media.tablet && (
              <div
                className={classNames(
                  'intro__mobile-scroll-indicator',
                  `intro__mobile-scroll-indicator--${status}`,
                  { 'intro__mobile-scroll-indicator--hidden': scrollIndicatorHidden }
                )}
              >
                <ArrowDown aria-hidden />
              </div>
            )}
          </Fragment>
        )}
      </Transition>
    </Section>
  );
}

export default Intro;

import './index.css';

import gamestackTexture2Large from 'assets/autobuysell-logos-large.png';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/autobuysell-logos.png';
import gamestackTextureLarge from 'assets/autobuysell-design-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/autobuysell-design.jpg';
import iphone11 from 'assets/iphone-11.glb';
import macbookPro from 'assets/macbook-pro.glb';
import sliceTextureLarge from 'assets/autobuysell-robot-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/autobuysell-robot.jpg';
import sprTextureLarge from 'assets/autobuysell-design-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/autobuysell-design.jpg';
import Footer from 'components/Footer';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Intro from './Intro';
import Profile from './Profile';
import ProjectSummary from './ProjectSummary';
import Testimonials from './Testimonials';
import Partners from './Partners';
import MobileApp from './MobileApp';

const Home = () => {
  const { status } = useRouteTransition();
  const { hash, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const featuresSection = useRef();
  const aboutSection = useRef();
  const testimonialsSection = useRef();
  const partnersSection = useRef();
  const mobileAppSection = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [
      intro,
      featuresSection,
      aboutSection,
      testimonialsSection,
      partnersSection,
      mobileAppSection,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    revealSections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    const hasEntered = status === 'entered';
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    let scrollObserver;
    let scrollTimeout;

    const handleHashchange = (hash, scroll) => {
      clearTimeout(scrollTimeout);
      const hashSections = [intro, featuresSection, aboutSection];
      const hashString = hash.replace('#', '');
      const element = hashSections.filter(item => item.current.id === hashString)[0];
      if (!element) return;
      const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant';
      const top = element.current.offsetTop;

      scrollObserver = new IntersectionObserver(
        (entries, observer) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            scrollTimeout = setTimeout(
              () => {
                element.current.focus();
              },
              prefersReducedMotion ? 0 : 400
            );
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '-20% 0px -20% 0px' }
      );

      scrollObserver.observe(element.current);

      if (supportsNativeSmoothScroll) {
        window.scroll({
          top,
          left: 0,
          behavior,
        });
      } else {
        window.scrollTo(0, top);
      }
    };

    if (hash && initHash.current && hasEntered) {
      handleHashchange(hash, false);
      initHash.current = false;
    } else if (!hash && initHash.current && hasEntered) {
      window.scrollTo(0, 0);
      initHash.current = false;
    } else if (hasEntered) {
      handleHashchange(hash, true);
    }

    return () => {
      clearTimeout(scrollTimeout);
      if (scrollObserver) {
        scrollObserver.disconnect();
      }
    };
  }, [hash, state, prefersReducedMotion, status]);

  return (
    <div className="home">
      <Helmet>
        <title>Autobuysell | Home</title>
        <meta
          name="description"
          content="Autobuysell - Your Trusted Partner In Automated Trading."
        />
        <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
        <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
      </Helmet>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="features"
        sectionRef={featuresSection}
        visible={visibleSections.includes(featuresSection.current)}
        index={1}
        title="Automation"
        description="Automation is a powerful tool that can streamline processes, reduce human error, and improve efficiency."
        buttonText="Get Started"
        buttonLink="https://autobuysell.io/register"
        model={{
          type: 'laptop',
          alt: 'Automation',
          textures: [
            {
              src: sliceTexture,
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1440w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="algorithms"
        alternate
        visible={visibleSections.includes(featuresSection.current)}
        index={2}
        title="Algorithms"
        description="Access a diverse range of pre-built strategies or create your own custom algorithms to tailor your trading approach."
        buttonText="How It Works?"
        buttonLink="https://youtu.be/RD9MueV6cHE?si=NqnhgrmpG7ygCI1E"
        model={{
          type: 'phone',
          alt: 'Algorithms',
          textures: [
            {
              src: gamestackTexture,
              srcSet: `${gamestackTexture} 254w, ${gamestackTextureLarge} 508w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              src: gamestackTexture2,
              srcSet: `${gamestackTexture2} 254w, ${gamestackTexture2Large} 508w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="risk-management"
        visible={visibleSections.includes(featuresSection.current)}
        index={3}
        title="Risk Management"
        description="Utilize stop-loss, take-profit, and position sizing tools to manage and mitigate risks, safeguarding your investments."
        buttonText="Get Started"
        buttonLink="https://autobuysell.io/register"
        model={{
          type: 'laptop',
          alt: 'Risk Management',
          textures: [
            {
              src: sprTexture,
              srcSet: `${sprTexture} 800w, ${sprTextureLarge} 1440w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="real-time"
        alternate
        visible={visibleSections.includes(featuresSection.current)}
        index={4}
        title="Real-time"
        description="Stay up to date with live market data and execute orders instantly, ensuring you make informed, timely decisions."
        buttonText="Get Started"
        buttonLink="https://autobuysell.io/register"
        model={{
          type: 'phone',
          alt: 'Real-time',
          textures: [
            {
              src: gamestackTexture,
              srcSet: `${gamestackTexture} 254w, ${gamestackTextureLarge} 508w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              src: gamestackTexture2,
              srcSet: `${gamestackTexture2} 254w, ${gamestackTexture2Large} 508w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="backtesting"
        visible={visibleSections.includes(featuresSection.current)}
        index={5}
        title="Backtesting"
        description="Analyze your strategies using historical data, assess performance, and fine-tune your algorithms for improved results."
        buttonText="Get Started"
        buttonLink="https://autobuysell.io/register"
        model={{
          type: 'laptop',
          alt: 'Backtesting',
          textures: [
            {
              src: sprTexture,
              srcSet: `${sprTexture} 800w, ${sprTextureLarge} 1440w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="customization"
        alternate
        visible={visibleSections.includes(featuresSection.current)}
        index={6}
        title="Customization"
        description="Personalize your user interface and strategy settings to match your trading style, enhancing your overall trading experience."
        buttonText="Get Started"
        buttonLink="https://autobuysell.io/register"
        model={{
          type: 'phone',
          alt: 'Customization',
          textures: [
            {
              src: gamestackTexture,
              srcSet: `${gamestackTexture} 254w, ${gamestackTextureLarge} 508w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              src: gamestackTexture2,
              srcSet: `${gamestackTexture2} 254w, ${gamestackTexture2Large} 508w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={aboutSection}
        visible={visibleSections.includes(aboutSection.current)}
        id="about"
      />
      <Testimonials
        sectionRef={testimonialsSection}
        visible={visibleSections.includes(testimonialsSection.current)}
        id="testimonials"
      />
      <Partners
        sectionRef={partnersSection}
        visible={visibleSections.includes(partnersSection.current)}
        id="partners"
      />
      <MobileApp
        sectionRef={mobileAppSection}
        visible={visibleSections.includes(mobileAppSection.current)}
        id="mobile-app"
      />
      <Footer />
    </div>
  );
};

export default Home;

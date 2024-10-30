import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Brand from '../Brand';
import Container from '../Container';
import Config from '../../config.json';
import Drawer from '../Drawer';
import ExpandedMenu from '../ExpandedMenu';
import Icon from '../Icons/Icon';
import MiniCart from '../MiniCart';
import MobileNavigation from '../MobileNavigation';
import * as styles from './Header.module.css';

const Header = () => {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const [menu, setMenu] = useState();
  const [activeMenu, setActiveMenu] = useState();

  const bannerMessage = 'Visit our new showroom in Sherborne, North Dorset!';

  const handleHover = (navObject) => {
    if (navObject.category) {
      setShowMenu(true);
      setMenu(navObject.category);
    } else {
      setMenu(undefined);
    }
    setActiveMenu(navObject.menuLabel);
  };

  useEffect(() => {
    if (showMenu === false) setActiveMenu(false);
  }, [showMenu]);

  // hide menu onscroll
  useEffect(() => {
    const onScroll = () => {
      setShowMenu(false);
      setActiveMenu(undefined);
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.headerMessageContainer}>
        <span>{bannerMessage}</span>
      </div>
      <Container size={'large'} spacing={'min'}>
        {/* header container */}
        <div className={styles.header}>
          <div className={styles.linkContainer}>
            <nav
              role={'presentation'}
              onMouseLeave={() => {
                setShowMenu(false);
              }}
            >
              {Config.headerLinksLeft.map((navObject) => (
                <Link
                  key={navObject.menuLink}
                  onMouseEnter={() => handleHover(navObject)}
                  className={`${styles.navLink} ${
                    activeMenu === navObject.menuLabel ? styles.activeLink : ''
                  }`}
                  to={navObject.menuLink}
                >
                  {navObject.menuLabel}
                </Link>
              ))}
            </nav>
          </div>
          <div
            role={'presentation'}
            onClick={() => {
              setMobileMenu(!mobileMenu);
              // setDepth(0);
            }}
            className={styles.burgerIcon}
          >
            <Icon symbol={`${mobileMenu === true ? 'cross' : 'burger'}`}></Icon>
          </div>
          <Brand />
          <div className={styles.linksRight}>
          <div className={styles.linkContainer}>
            <nav
              role={'presentation'}
              onMouseLeave={() => {
                setShowMenu(false);
              }}
            >
              {Config.headerLinksRight.map((navObject) => (
                <Link
                  key={navObject.menuLink}
                  onMouseEnter={() => handleHover(navObject)}
                  className={`${styles.navLink} ${
                    activeMenu === navObject.menuLabel ? styles.activeLink : ''
                  }`}
                  to={navObject.menuLink}
                >
                  {navObject.menuLabel}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        </div>
      </Container>

      {/* menu container */}
      <div
        role={'presentation'}
        onMouseLeave={() => setShowMenu(false)}
        onMouseEnter={() => setShowMenu(true)}
        className={`${styles.menuContainer} ${
          showMenu === true ? styles.show : ''
        }`}
      >
        <Container size={'large'} spacing={'min'}>
          <ExpandedMenu menu={menu} />
        </Container>
      </div>

      {/* minicart container */}
      <Drawer visible={showMiniCart} close={() => setShowMiniCart(false)}>
        <MiniCart />
      </Drawer>

      {/* mobile menu */}
      <div className={styles.mobileMenuContainer}>
        <Drawer
          hideCross
          top={'98px'}
          isReverse
          visible={mobileMenu}
          close={() => setMobileMenu(false)}
        >
          <MobileNavigation close={() => setMobileMenu(false)} />
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
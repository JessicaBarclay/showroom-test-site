import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import Config from '../../config.json';
import Icon from '../Icons/Icon';
import { isAuth } from '../../helpers/general';

//TO DO: refactor this to handle multiple nested links to avoid hardcoding 'depth'
// have to restructure config.json
// refactor this

import * as styles from './MobileNavigation.module.css';

const MobileNavigation = (props) => {
  const { close } = props;

  const [subMenu, setSubMenu] = useState();
  const [category, setCategory] = useState();
  const [depth, setDepth] = useState(0);

  return (
    <div className={styles.root}>
      <nav>

        <div className={styles.mobileNavContainer}>
          {/* dynamic portion */}
          {depth === 0 && (
            <div>
              {Config.mobileLinks.map((navObject) => {
                const hasSubmenu =
                  navObject.category?.length !== undefined ? true : false;
                return (
                  <Link
                    key={navObject.menuLink}
                    className={`${styles.mobileLink}`}
                    to={hasSubmenu === true ? '' : navObject.menuLink}
                    onClick={() => {
                      if (hasSubmenu) {
                        setDepth(1);
                        setCategory(navObject);
                      }
                    }}
                  >
                    {navObject.menuLabel}
                    {hasSubmenu && <Icon symbol={'caret'}></Icon>}
                  </Link>
                );
              })}
              <div className={styles.navFooter}>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;

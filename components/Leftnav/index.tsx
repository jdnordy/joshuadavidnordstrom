import React from 'react';
// components
import { Navigator } from '../';
import navigators from './navigators.config';
// styles
import styles from './styles.module.scss';

type Props = {
  page: string;
};

const Leftnav: React.FC<Props> = ({ page }) => (
  <nav className={styles.leftnav}>
    {navigators.map((el, i) => (
      <Navigator selected={el.value === page} {...el} />
    ))}
  </nav>
);

export default Leftnav;

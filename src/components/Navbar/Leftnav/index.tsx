// components
import Navigator from '../Navigator';
import navigators from './navigators.config';
// styles
import styles from './styles.module.scss';

interface LeftnavProps {
  page: string;
}

const Leftnav = ({ page }: LeftnavProps) => (
  <nav className={styles.leftnav}>
    {navigators.map((el, i) => (
      <Navigator selected={el.value === page} {...el} key={i} />
    ))}
  </nav>
);

export default Leftnav;

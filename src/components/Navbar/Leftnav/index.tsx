// components
import { useEffect, useState } from 'react';
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from 'lib/database.types';
import Navigator from '../Navigator';
import navigators from './navigators.config';
// styles
import styles from './styles.module.scss';

interface LeftnavProps {
  page: string;
}

const Leftnav = ({ page }: LeftnavProps) => {
  const [user, setUser] = useState<User|null>(null);
  const supabase = createClientComponentClient<Database>()
  const navs = [... navigators];
  if (user) {
    navs.push({
      label: 'For Jess',
      link: '/for-jess',
      value: 'for-jess',
    });
  }

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      console.log(user);
      setUser(user);
    }
    getUser();
  }, [setUser, supabase]);

  return (
    <nav className={styles.leftnav}>
      {navs.map((el, i) => (
        <Navigator selected={el.value === page} {...el} key={i} />
      ))}
    </nav>
  );
}

export default Leftnav;

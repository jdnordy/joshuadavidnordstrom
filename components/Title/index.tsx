import React from 'react';
import styles from './styles.module.scss';

type Props = {
  title: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
};

const Title: React.FC<Props> = ({ title, date, author }) => (
  <header className={styles.title}>
    <h1>{title.toUpperCase()}</h1>
    <div>
      <i>by {author.name.toLowerCase()}</i>
      <i>{date}</i>
    </div>
  </header>
);

export default Title;

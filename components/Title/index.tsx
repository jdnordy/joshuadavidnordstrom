import React from 'react';
import styles from './styles.module.scss';

type Props = {
  title: string;
  date: string;
  author: string;
  coverImage?: string;
};

const Title: React.FC<Props> = ({ title, date, author, coverImage }) => (
  <header className={styles.title}>
    {coverImage && <img src={coverImage} />}
    <h1>{title.toUpperCase()}</h1>
    <div>
      <i>by {author.toLowerCase()}</i>
      <i>{date}</i>
    </div>
  </header>
);

export default Title;

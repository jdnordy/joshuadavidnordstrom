import React from 'react';
import styles from './styles.module.scss';

type Props = {
  content: string;
};

const Content: React.FC<Props> = ({ content, children }) =>
  children ? (
    <section className={styles.writing_content}>{children}</section>
  ) : (
    <section
      className={styles.writing_content}
      dangerouslySetInnerHTML={{ __html: content }}
    ></section>
  );

export default Content;

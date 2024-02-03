import { useEffect } from 'react';
import styles from './styles.module.scss';

type Props = {
  content: string;
  children?: React.ReactNode;
};

const Content = ({ content, children }: Props) => {
  useEffect(() => {
    document
      .getElementById('content_container')!
      .querySelectorAll('a')
      .forEach((el) => {
        if (!el.className) el.target = '_blank';
      });
  });

  return children ? (
    <section className={styles.writing_content} id="content_container">
      {children}
    </section>
  ) : (
    <section
      className={styles.writing_content}
      id="content_container"
      dangerouslySetInnerHTML={{ __html: content }}
    ></section>
  );
};

export default Content;

import { useEffect } from 'react';
import styles from './styles.module.scss';

type Props = {
  content: string;
};

const Content: React.FC<Props> = ({ content, children }) => {
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

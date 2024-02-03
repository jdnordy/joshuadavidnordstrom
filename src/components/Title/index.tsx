import Image from 'next/image';
import styles from './styles.module.scss';

interface TitleProps {
  title: string;
  date: string;
  author: string;
  coverImage?: string;
}

const Title = ({ title, date, author, coverImage }: TitleProps) => (
  <header className={styles.title}>
    {coverImage && <Image src={coverImage} alt="loading cover image..."/>}
    <h1>{title.toUpperCase()}</h1>
    <div>
      <i>by {author.toLowerCase()}</i>
      <i>{date}</i>
    </div>
  </header>
);

export default Title;

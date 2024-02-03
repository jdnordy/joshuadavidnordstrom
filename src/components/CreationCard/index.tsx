import Link from 'next/link';
import Image from 'next/image';
// styles
import styles from './styles.module.scss';

interface CreationCardProps {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  link: string | null;
  internalLink: string | null;
}

const CreationCard = ({
  title,
  subtitle,
  image,
  description,
  link,
  internalLink,
}: CreationCardProps) => {
  const children = (
    <>
      <Image src={image} alt="Loading image..."/>
      <div>
        <hgroup>
          <h2>{title}</h2>
          <h4>
            <i>{subtitle}</i>
          </h4>
        </hgroup>
        <p>{description}</p>
      </div>
    </>
  );
  return link ? (
    <a className={styles.creation_card} href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link
      href="/writings/[slug]"
      as={internalLink!}
      className={styles.creation_card}>
      {children}
    </Link>
  );
};

export default CreationCard;

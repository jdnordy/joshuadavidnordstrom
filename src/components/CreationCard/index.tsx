import Link from 'next/link';
// styles
import styles from './styles.module.scss';

type Props = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  link: string | null;
  internalLink: string | null;
};

const CreationCard: React.FC<Props> = ({
  title,
  subtitle,
  image,
  description,
  link,
  internalLink,
}) => {
  const children = (
    <>
      <img src={image} />
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
    <a className={styles.creation_card} href={link} target="_blank">
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

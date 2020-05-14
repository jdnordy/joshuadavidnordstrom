import React from 'react';
// styles
import styles from './styles.module.scss';

type Props = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  link: string;
};

const CreationCard: React.FC<Props> = ({
  title,
  subtitle,
  image,
  description,
  link,
}) => (
  <a className={styles.creation_card} href={link} target="_blank">
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
  </a>
);

export default CreationCard;

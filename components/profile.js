import React from 'react';
import styles from '../public/css/components/profile.module.css';

const Profile = ({profile}) => {
  return(
    <li className={styles.item}>
      <img src={profile.img} alt="" />
      <dl className={styles.info}>
        <dt className={styles.name}>{profile.name}</dt>
        <dd className={styles.message}>{profile.message}</dd>
      </dl>
      <div className={styles.buttons}>
        {profile.sns.map((sns, index) => (
          <a key={index} href={sns.url} target="_blank" rel="noopener noreferrer" data-sns={sns.name} className={styles.sns}>
            <span className="blind">{sns.name}</span>
          </a>
        ))}
      </div>
    </li>
  )
};

export default Profile;
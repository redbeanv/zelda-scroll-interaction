import React from 'react';
import AppLayout from '../../components/appLayout';
import Profile from '../../components/profile';
import styles from '../../public/css/pages/about/about.module.css';

const About = () => {
  const profiles = [
    {
      name: 'kimhb',
      message: 'developer',
      img: 'https://placeimg.com/300/300/animals',
      sns: [
        {
          name: 'github',
          url: 'www'
        }
      ]
    },
    {
      name: 'wonij',
      message: 'publiser',
      img: 'https://placeimg.com/300/300/any',
      sns: [
        {
          name: 'github',
          url: 'www'
        },
        {
          name: 'facebook',
          url: 'www'
        }
      ]
    },
  ];

  return (
    <AppLayout>
      <div className={styles.about}>
        <ul className={styles.list}>
        {profiles.map((profile, index) => (
          <Profile key={index} profile={profile} />
        ))}
        </ul>
      </div>
    </AppLayout>
  )
};

export default About;
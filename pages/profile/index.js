import React from 'react';
import AppLayout from '../../components/appLayout';
import Profile from '../../components/profile';
import styles from '../../public/css/pages/about/about.module.css';
import profileData from './profiles.json';

const About = () => {
  return (
    <AppLayout>
      <div className={styles.about}>
        <ul className={styles.list}>
        {profileData.profiles.map((profile, index) => (
          <Profile key={index} profile={profile} />
        ))}
        </ul>
      </div>
    </AppLayout>
  )
};

export default About;
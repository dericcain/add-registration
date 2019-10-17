import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';

import { connect } from 'Utils/connect';
import styles from './home.module.scss';
import { Button, ButtonType } from 'Components/button';

// RouteComponentProps comes from @types/reach__router
type HomeProps = RouteComponentProps & {
  appVersion: string;
};

export const Home: React.FC<HomeProps> = ({ appVersion }) => {
  const [clicked, updateClicked] = useState('No');

  function onClick() {
    updateClicked(clicked === 'Yes' ? 'No' : 'Yes');
  }

  return (
    <div className={styles.home}>
      <h4>Your app is bootstrapped and ready to go...</h4>
      <code style={{ color: styles.codeColor }}>App version: {appVersion}</code>
      <hr />
      <div className={styles.inputWrapper}>
        <p>
          Has the button been clicked? <span className={styles[clicked]}>{clicked}</span>
        </p>
        <label htmlFor="nothing">
          This input does nothing. It simply shows off <code>jest-axe</code> and how if you remove
          this label, the test will fail.
        </label>
        <br />
        <input id="nothing" value="This input does nothing." readOnly />
      </div>
      <Button onClick={onClick}>Click me!</Button>
      <Button onClick={onClick} type={ButtonType.Primary}>
        And me!
      </Button>
    </div>
  );
};

// Hook up the MobX root store and pass in the props we need
export default connect(({ store }) => ({
  appVersion: store.appVersion,
}))(Home);

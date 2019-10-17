import React, { Suspense } from 'react';
import { FeatureToggle, Else } from 'react-tiny-feature-switch';

import { Routes } from 'Routes';

const App: React.FC = () => {
  return (
    <FeatureToggle features="routes">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
      <Else>
        <div>
          Looks like you don't have the "routes" feature enabled. Enable it in the features.json
          file.
        </div>
      </Else>
    </FeatureToggle>
  );
};

export default App;

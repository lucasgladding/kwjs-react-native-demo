import React from 'react';

import Screen from './Screen';

const fixture = require('../../fixtures/events.json');

const Container: React.FC = () => {
  const event = fixture[0];
  return <Screen event={event} />;
};

export default Container;

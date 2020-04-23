import React from 'react';
import {render} from '@testing-library/react-native';

import Screen from './Screen';

describe('Screen', () => {
  const data = [
    {id: 'react-native-intro', name: 'React Native Intro', date: 'Today', attendees: '50 attendees'},
  ];

  it('renders the title', () => {
    const {getByText} = render(<Screen data={data} />);
    expect(getByText('Events')).toBeDefined();
  });

  it('renders an event', () => {
    const {getByText} = render(<Screen data={data} />);
    expect(getByText('React Native Intro')).toBeDefined();
  });
});

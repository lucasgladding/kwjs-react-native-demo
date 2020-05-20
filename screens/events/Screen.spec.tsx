import React from 'react';
import {render} from '@testing-library/react-native';

import Screen from './Screen';

describe('Screen', () => {
  const events = [
    {
      id: '1',
      name: 'React Native Intro',
      starts_at: '2020-06-01T00:00:00.000',
      ends_at: '2020-06-02T00:00:00.000',
      attendees_count: 50,
      description: 'Lorem ipsum',
    },
  ];
  const onSelect = jest.fn();

  it('renders an event', () => {
    const {getByText} = render(<Screen events={events} onSelect={onSelect} />);
    expect(getByText(events[0].name)).toBeDefined();
  });
});

import React from 'react';
import {render} from '@testing-library/react-native';

import Event from './Event';

describe('Event', () => {
  it('renders', () => {
    const name = 'Event name';
    const date = 'Today!';
    const attendees = '50 attendees';
    const {getByText} = render(<Event name={name} date={date} attendees={attendees} />);

    expect(getByText(name)).toBeDefined();
    expect(getByText(date)).toBeDefined();
    expect(getByText(attendees)).toBeDefined();
  });
});

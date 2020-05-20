import React from 'react';
import {render} from '@testing-library/react-native';

import Screen from './Screen';
import moment from 'moment';

describe('Screen', () => {
  const event = {
    id: '1',
    name: 'React Native Intro',
    starts_at: '2020-06-01T00:00:00.000',
    ends_at: '2020-06-02T00:00:00.000',
    attendees_count: 50,
    description: 'Lorem ipsum',
  };

  it('renders an event', () => {
    const date = moment(event.starts_at).format('MMMM DD, YYYY');
    const start = moment(event.starts_at).format('h:mm a');
    const end = moment(event.ends_at).format('h:mm a');
    const attendees = `${event.attendees_count} attendees`;

    const {getByText} = render(<Screen event={event} />);
    expect(getByText(event.name)).toBeDefined();
    expect(getByText(date)).toBeDefined();
    expect(getByText(`${start} - ${end}`)).toBeDefined();
    expect(getByText(attendees)).toBeDefined();
    expect(getByText(event.description)).toBeDefined();
  });
});

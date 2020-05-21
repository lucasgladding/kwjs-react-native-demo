import React from 'react';
import {render} from '@testing-library/react-native';
import moment from 'moment';

import Screen from './Screen';

const fixture = require('../../fixtures/events.json');

describe('Screen', () => {
  it('renders', () => {
    const event = fixture[0];
    event.description = 'Lorem ipsum';

    const date = moment(event.starts_at).format('MMMM D, YYYY');
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

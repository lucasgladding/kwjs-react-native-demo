import React, {useEffect, useState} from 'react';

import Event from '../../services/events/Event';
import Screen from './Screen';
import Service from '../../services/events/Service';

const Container: React.FC = (props: any) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const load = async () => {
      const service = new Service();
      const response = await service.list();
      setEvents(response);
    };
    load();
  }, []);

  const onSelect = (event: Event) => {
    props.navigation.navigate('Event', {
      id: event.id,
    });
  }

  return <Screen events={events} onSelect={onSelect} />;
};

export default Container;

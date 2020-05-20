import React, {useEffect, useState} from 'react';

import Event from '../../services/events/Event';
import Screen from './Screen';
import Service from '../../services/events/Service';

const Container: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const load = async () => {
      const service = new Service();
      const response = await service.list();
      setEvents(response);
    };
    load();
  }, []);

  return <Screen events={events} />;
};

export default Container;

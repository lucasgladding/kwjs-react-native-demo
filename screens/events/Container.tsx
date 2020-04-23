import React, {useEffect, useState} from 'react';

import Screen from './Screen';
import Service from '../../services/events/Service';

const Container: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const service = new Service();
      const response = await service.list();
      const transformed = response.map((item) => {
        return {
          name: item.name,
          date: new Date(item.starts_at).toDateString(),
          attendees: `${item.attendees_count} attendees`,
        };
      });
      setEvents(transformed);
    };
    load();
  }, []);

  return <Screen data={events} />;
};

export default Container;

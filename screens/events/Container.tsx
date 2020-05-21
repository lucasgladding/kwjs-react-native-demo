import React, {useEffect, useState} from 'react';

import Event from '../../services/events/Event';
import Screen from './Screen';
import Service from '../../services/events/Service';

enum Sort {
  Ascending,
  Descending,
}

const Container: React.FC = (props: any) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [sort, setSort] = useState<Sort>(Sort.Descending);

  useEffect(() => {
    const load = async () => {
      const service = new Service();
      const response = await service.list();
      setEvents(response);
    };
    load();
  }, []);

  const onSort = () => {
    const direction = sort === Sort.Descending ? Sort.Ascending : Sort.Descending;
    setSort(direction);
  };

  const onSelect = (event: Event) => {
    props.navigation.navigate('Event', {
      event_id: event.id,
    });
  };

  const sorted = sort === Sort.Descending ? events : [...events].reverse();

  return <Screen events={sorted} onSort={onSort} onSelect={onSelect} />;
};

export default Container;

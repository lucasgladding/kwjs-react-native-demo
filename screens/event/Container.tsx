import React, {useEffect, useState} from 'react';

import Event from '../../services/events/Event';
import Screen from './Screen';
import Service from '../../services/events/Service';

const Container: React.FC = (props: any) => {
  const [event, setEvent] = useState<Event | undefined>();

  useEffect(() => {
    const load = async () => {
      const service = new Service();
      const id = props.route.params?.id;
      const response = await service.get(id);
      setEvent(response);
    };
    load();
  }, []);

  if (!event) {
    return null;
  }

  return <Screen event={event} />;
};

export default Container;

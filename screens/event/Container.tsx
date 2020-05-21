import React, {useEffect, useState} from 'react';

import Event from '../../services/events/Event';
import Screen from './Screen';
import Service from '../../services/events/Service';

const Container: React.FC = (props: any) => {
  const [event, setEvent] = useState<Event | undefined>();

  useEffect(() => {
    const load = async () => {
      try {
        const service = new Service();
        const event_id = props.route.params?.event_id;
        const event = await service.get(event_id);
        setEvent(event);
      } catch (error) {
        console.log('Error retrieving the event', error);
      }
    }
    load();
  }, []);

  if (!event) {
    return null;
  }

  return <Screen event={event} />;
};

export default Container;

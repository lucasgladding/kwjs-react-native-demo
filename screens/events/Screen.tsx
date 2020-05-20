import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import moment from 'moment';

import Event from '../../services/events/Event';
import EventComponent from '../../components/Event';
import Separator from '../../components/Separator';

interface ScreenProps {
  events: Event[];
}

const Screen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const renderEvent: ListRenderItem<Event> = ({item}) => {
    const date = moment(item.starts_at).format('MMM DD');
    const attendees = `${item.attendees_count} attendees`;

    return <EventComponent name={item.name} date={date} attendees={attendees} />;
  };

  return (
    <FlatList data={props.events} ItemSeparatorComponent={Separator} renderItem={renderEvent} />
  );
};

export default Screen;

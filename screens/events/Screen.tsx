import React from 'react';
import {FlatList, ListRenderItem, TouchableWithoutFeedback, View} from 'react-native';
import moment from 'moment';

import Event from '../../services/events/Event';
import EventComponent from '../../components/Event';
import Separator from '../../components/Separator';

interface ScreenProps {
  events: Event[];
  onSelect: (event: Event) => void;
}

const Screen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const renderEvent: ListRenderItem<Event> = ({item}) => {
    const date = moment(item.starts_at).format('MMM DD');
    const attendees = `${item.attendees_count} attendees`;

    const onSelect = () => {
      props.onSelect(item);
    };

    return (
      <TouchableWithoutFeedback onPress={onSelect}>
        <View>
          <EventComponent name={item.name} date={date} attendees={attendees} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <FlatList data={props.events} ItemSeparatorComponent={Separator} renderItem={renderEvent} />
  );
};

export default Screen;

import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import moment from 'moment';

import Event from '../../services/events/Event';
import EventComponent from '../../components/Event';
import Separator from '../../components/Separator';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  list: {
    flexBasis: 0,
    flexGrow: 1,
  },
});

interface ScreenProps {
  events: Event[];
  onSelect: (event: Event) => void;
}

const Screen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const renderEvent: ListRenderItem<Event> = ({item}) => {
    const onSelect = () => {
      props.onSelect(item);
    };

    const date = moment(item.starts_at).format('MMM DD');
    const attendees = `${item.attendees_count} attendees`;

    return (
      <TouchableWithoutFeedback onPress={onSelect}>
        <View>
          <EventComponent name={item.name} date={date} attendees={attendees} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={props.events} ItemSeparatorComponent={Separator} renderItem={renderEvent} style={styles.list} />
    </View>
  );
};

export default Screen;

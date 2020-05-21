import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import moment from 'moment';

import Event from '../../services/events/Event';
import EventComponent from '../../components/Event';
import Separator from '../../components/Separator';

interface ScreenProps {
  events: Event[];
  onSelect: (event: Event) => void;
  onSort: () => void;
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    padding: 20,
  },
  list: {
    flexBasis: 0,
    flexGrow: 1,
  },
});

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
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={props.onSort}>
        <View style={styles.button}>
          <Text>Sort</Text>
        </View>
      </TouchableWithoutFeedback>
      <FlatList data={props.events} ItemSeparatorComponent={Separator} renderItem={renderEvent} style={styles.list} />
    </View>
  );
};

export default Screen;

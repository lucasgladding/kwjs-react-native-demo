import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Event from '../../services/events/Event';
import moment from 'moment';

interface ScreenProps {
  event: Event;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  spacing: {
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
  },
  metadataText: {
    color: '#888',
  },
});

const Screen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const date = moment(props.event.starts_at).format('MMMM D, YYYY');
  const start = moment(props.event.starts_at).format('h:mm a');
  const end = moment(props.event.ends_at).format('h:mm a');
  const attendees = `${props.event.attendees_count} attendees`;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.nameText, styles.spacing]}>{props.event.name}</Text>
        <View style={styles.spacing}>
          <Text style={styles.metadataText}>{date}</Text>
          <Text style={styles.metadataText}>{start} - {end}</Text>
          <Text style={styles.metadataText}>{attendees}</Text>
        </View>
        <Text>{props.event.description}</Text>
      </View>
    </ScrollView>
  );
};

export default Screen;

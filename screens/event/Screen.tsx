import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';

import Event from '../../services/events/Event';

interface ScreenProps {
  event: Event;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  nameText: {
    fontSize: 24,
  },
  spacing: {
    marginBottom: 10,
  },
  metadataText: {
    color: '#888',
    fontSize: 14,
  },
  descriptionText: {
    fontSize: 14,
  },
});

const Screen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const {event} = props;

  const date = moment(event.starts_at).format('MMMM DD, YYYY');
  const start = moment(event.starts_at).format('h:mm a');
  const end = moment(event.ends_at).format('h:mm a');
  const attendees = `${event.attendees_count} attendees`;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.nameText, styles.spacing]}>{event.name}</Text>
        <View style={styles.spacing}>
          <Text style={styles.metadataText}>{date}</Text>
          <Text style={styles.metadataText}>{start} - {end}</Text>
        </View>
        <Text style={[styles.metadataText, styles.spacing]}>{attendees}</Text>
        <Text style={styles.descriptionText}>{event.description}</Text>
      </View>
    </ScrollView>
  );
};

export default Screen;

import React from 'react';
import {StyleSheet, Text, View} from "react-native";

interface EventProps {
  name: string;
  date: string;
  attendees: string;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  date: {
    width: '30%',
  },
  dateText: {
    fontSize: 20,
  },
  details: {
    width: '70%',
  },
  attendeesText: {
    color: '#888',
  },
});

const Event: React.FC<EventProps> = (props: EventProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <Text style={styles.dateText}>{props.date}</Text>
      </View>
      <View style={styles.details}>
        <Text>{props.name}</Text>
        <Text style={styles.attendeesText}>{props.attendees}</Text>
      </View>
    </View>
  );
};

export default Event;

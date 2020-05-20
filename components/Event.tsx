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
    paddingVertical: 10,
  },
  date: {
    width: '30%',
  },
  dateText: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  info: {
    width: '70%',
  },
  nameText: {
    fontSize: 18,
    marginBottom: 5,
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
      <View style={styles.info}>
        <Text style={styles.nameText}>{props.name}</Text>
        <Text style={styles.attendeesText}>{props.attendees}</Text>
      </View>
    </View>
  );
};

export default Event;

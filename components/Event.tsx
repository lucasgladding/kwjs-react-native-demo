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
    paddingVertical: 20,
  },
  date: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  details: {
    borderLeftColor: '#888',
    borderLeftWidth: 0.5,
    paddingHorizontal: 20,
  },
  attendees: {
    color: '#888',
  },
});

const Event: React.FC<EventProps> = (props: EventProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.details}>
        <Text>{props.name}</Text>
        <Text style={styles.attendees}>{props.attendees}</Text>
      </View>
    </View>
  );
};

export default Event;

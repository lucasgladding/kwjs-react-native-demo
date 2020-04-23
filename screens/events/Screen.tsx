import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';

import Event from '../../components/Event';
import Separator from '../../components/Separator';

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    padding: 20,
  },
});

interface ScreenProps {
  data: any[];
}

const Screen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const renderEvent: ListRenderItem<any> = ({item}) => {
    return <Event name={item.name} date={item.date} attendees={item.attendees} />
  };

  return (
    <View>
      <Text style={styles.title}>Events</Text>
      <FlatList data={props.data} ItemSeparatorComponent={Separator} renderItem={renderEvent} />
    </View>
  );
};

export default Screen;

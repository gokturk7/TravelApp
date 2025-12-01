import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Guide</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Paris"
          onPress={() => navigation.navigate('Details', { place: 'Paris', rating: 5 })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to London"
          onPress={() => navigation.navigate('Details', { place: 'London', rating: 4 })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create**({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
});
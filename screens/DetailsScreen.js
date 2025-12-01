import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation }) {
    const { place, rating } = route.params;
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to {place}</Text>
          <Text style={styles.subtitle}>Rating: {rating} Stars</Text>
          
          {/* Meydan Okuma: Rating 5 ise özel mesaj */}
          {rating === 5 && (
            <Text style={{color: 'gold', fontSize: 20, marginBottom: 20}}>★ Top Pick! ★</Text>
          )}
    
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
      );
    }
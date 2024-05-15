import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';

const DeliveryAddress = () => {
  return (
    <View style={{marginTop: 30}}>
      <Text style={{fontSize: 12, color: '#A6A6A6'}}>Delivery address</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
        }}>
        <Text style={{fontSize: 15, color: 'black'}}>
          416 Grandrose Ave.{'\n'}
          Des Plaines, IL 60016
        </Text>
        <TouchableOpacity>
          <FeatherIcons style={{color: 'black', fontSize: 20}} name="edit-2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryAddress;

const styles = StyleSheet.create({});

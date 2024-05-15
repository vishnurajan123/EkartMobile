import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DeliveryType from './DeliveryType';
import DeliveryAddress from './DeliveryAddress';
import Bill from './Bill';

export default function Delivery() {
  return (
    <View>
      <DeliveryType />
      <DeliveryAddress />
      <Bill />
    </View>
  );
}

const styles = StyleSheet.create({});

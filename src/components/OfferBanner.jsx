import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';

export default function OfferBanner() {
  return (
    <View
      style={{
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#08C25D',
            borderRadius: 20,
            paddingHorizontal: 6,
            paddingVertical: 5,
          }}>
          <FeatherIcons
            name="percent"
            style={{color: '#08C25D', fontSize: 20, marginTop: 2}}
          />
        </View>
        <View style={{justifyContent: 'center', marginLeft: 6}}>
          <Text style={{color: 'black', fontWeight: '800', fontSize: 12}}>
            60% OFF to Rs120
          </Text>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 12}}>
            Use code ZIKET
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#08C25D',
            borderRadius: 20,
            paddingHorizontal: 6,
            paddingVertical: 5,
          }}>
          <FeatherIcons
            name="percent"
            style={{color: '#08C25D', fontSize: 20, marginTop: 2}}
          />
        </View>
        <View style={{justifyContent: 'center', marginLeft: 6}}>
          <Text style={{color: 'black', fontWeight: '800', fontSize: 12}}>
            60% OFF to Rs150
          </Text>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 12}}>
            Use code 60%OFF
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

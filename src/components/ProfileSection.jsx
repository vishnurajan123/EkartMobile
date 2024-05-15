import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import FAIcons from 'react-native-vector-icons/FontAwesome6';
import FeatherIcons from 'react-native-vector-icons/Feather';

export default function ProfileSection() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row'}}>
        <FeatherIcons name="map-pin" style={{color: '#08C25D', fontSize: 27}} />
        <View style={{marginLeft: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 19, color: 'black', fontWeight: '500'}}>
              Work
            </Text>
            <FeatherIcons
              name="chevron-down"
              style={{color: 'black', fontSize: 25, marginTop: 2}}
            />
          </View>
          <Text style={{fontSize: 12, color: 'grey', lineHeight: 16}}>
            P.O. Box 3625. Sheikh Khalifa Bin Saeed {'\n'}Street Dubai. P.O. Box
            901
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/f118/d128/9ea00ec7a4e23016fb53d984c9c97100?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DMC9d9SeD3Bsz4AD2wJycuj3PQqMxfKlRbV8WbEXi9miPtf~gs8gNKCFquzHhxDUqeHNiv8bwtCpSQ896ytKOd~1OcqAttt5uGGcLjDP3s6joYY2raz7PzOfAOsaaBjXu1DW8otxDHcUpSjjPKlbK0oyc~dkXbMSaZ7wtCHENeg6E7HcxvMfjiNw3zt~rYXuMZkR2jke8fNrzu47uC6sWLHuvHcPhbSXeZ5HvdjDrzR4~N31LW0Yg2UfWgo2aBI2g50X9ypYK9A5kv5nXXcd7PeL~hLXym5mXaaNsTni1u4VtCNa~XICMUEdqdgogybk5Vekibg5ILirtvJaaPIS6Q__',
          }}
          style={{
            width: 35,
            height: 35,
            objectFit: 'cover',
            borderRadius: 30,
            borderColor: '#08C25D',
            borderWidth: 2,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

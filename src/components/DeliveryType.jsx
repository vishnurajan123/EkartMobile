import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';

export default function DeliveryType() {
  const [typeOfDelivery, setTypeOfDelivery] = useState('scheduled');
  const [deliveryDay, setDeliveryDay] = useState('today');
  const [deliveryTime, setDeliveryTime] = useState('morning');

  return (
    <View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginTop: 30,
        }}>
        <TouchableOpacity onPress={() => setTypeOfDelivery('instant')}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: typeOfDelivery === 'instant' ? '#08C25D' : '#EDEDED',
              width: 150,
              height: 73,
              borderRadius: 10,
            }}>
            <FeatherIcons
              style={{
                fontSize: 25,
                color: typeOfDelivery === 'instant' ? '#08C25D' : '#EDEDED',
              }}
              name="zap"
            />
            <Text style={{fontSize: 12, color: 'black'}}>Instant delivery</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTypeOfDelivery('scheduled')}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor:
                typeOfDelivery === 'scheduled' ? '#08C25D' : '#EDEDED',
              width: 150,
              height: 73,
              borderRadius: 10,
            }}>
            <FeatherIcons
              style={{
                fontSize: 25,
                color: typeOfDelivery === 'scheduled' ? '#08C25D' : '#EDEDED',
              }}
              name="clock"
            />
            <Text style={{fontSize: 12, color: 'black'}}>
              Scheduled delivery
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: deliveryDay === 'today' ? '#08C25D' : 'white',
            width: 150,
            height: 36,
            borderRadius: 10,
          }}
          onPress={() => setDeliveryDay('today')}>
          <Text style={{color: deliveryDay === 'today' ? 'white' : 'black'}}>
            Today
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: deliveryDay === 'tommorrow' ? '#08C25D' : 'white',
            width: 150,
            height: 36,
            borderRadius: 10,
          }}
          onPress={() => setDeliveryDay('tommorrow')}>
          <Text
            style={{color: deliveryDay === 'tommorrow' ? 'white' : 'black'}}>
            Tommorrow
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <TouchableOpacity onPress={() => setDeliveryTime('morning')}>
          <View
            style={{
              width: 102,
              padding: 10,
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: deliveryTime == 'morning' ? '#08C25D' : 'white',
              borderRadius: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'black'}}>Morning</Text>
              <FeatherIcons
                style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}
                name="sun"
              />
            </View>
            <Text style={{fontSize: 11, color: '#A6A6A6'}}>10AM to 11AM</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setDeliveryTime('evening')}>
          <View
            style={{
              width: 102,
              padding: 10,
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: deliveryTime == 'evening' ? '#08C25D' : 'white',
              borderRadius: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'black'}}>Evening</Text>
              <FeatherIcons
                style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}
                name="sun"
              />
            </View>
            <Text style={{fontSize: 11, color: '#A6A6A6'}}>2PM to 3PM</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setDeliveryTime('night')}>
          <View
            style={{
              width: 102,
              padding: 10,
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: deliveryTime == 'night' ? '#08C25D' : 'white',
              borderRadius: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'black'}}>Evening</Text>
              <FeatherIcons
                style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}
                name="sun"
              />
            </View>
            <Text style={{fontSize: 11, color: '#A6A6A6'}}>6PM to 7PM</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

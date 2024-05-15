import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ProfileSection from '../components/ProfileSection';
import Store from '../components/Store';
import OfferBanner from '../components/OfferBanner';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import Checkout from '../components/Checkout';
import {ProductResponseContext} from '../contexts/ContextShare';

export default function Home({navigation}) {
  const {cart, setCart} = useContext(ProductResponseContext);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: 'white',
          paddingVertical: 30,
        }}
        showsVerticalScrollIndicator={false}>
        <ProfileSection />
        <View
          style={{
            backgroundColor: '#DDDDDD',
            height: 1.5,
            width: '100%',
            marginTop: 20,
          }}></View>
        <Store />
        <OfferBanner />
        <Categories />
        <ProductList />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 5,
          left: 0,
          right: 0,
          paddingHorizontal: 20,
        }}>
        {cart.length > 1 && <Checkout navigation={navigation} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import products from '../products';

export const ProductResponseContext = createContext();
export const FilterProductContext = createContext();

export default function ContextShare({children}) {
  const [cart, setCart] = useState([0]);
  const [filter, setFilter] = useState('');

  return (
    <>
      <FilterProductContext.Provider value={{filter, setFilter}}>
        <ProductResponseContext.Provider value={{cart, setCart}}>
          {children}
        </ProductResponseContext.Provider>
      </FilterProductContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({});

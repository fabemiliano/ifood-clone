import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, View, Image } from './style';
import img from './icon.png'


export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Perfil</Text>
          <Image source={img} />
        </View>
      </SafeAreaView>
    </>
  );
}
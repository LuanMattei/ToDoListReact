import React from 'react';
import { Text, View } from 'react-native';

const RandomColorHeaderTitle = ({ title }) => {
  const randomColor = () => {
    const color = Math.floor(Math.random()*16777215).toString(16); 
    return '#' + '0'.repeat(6 - color.length) + color; // Completa com zeros à esquerda, se necessário para android
  };
  

  const renderTitle = () => {
    return title.split('').map((letter, index) => {
      const color = randomColor();
      return <Text key={index} style={{ color, fontSize: 30 }}>{letter}</Text>; 
    });
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {renderTitle()}
    </View>
  );
};

export default RandomColorHeaderTitle;

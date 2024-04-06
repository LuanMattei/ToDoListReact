import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Card = ({ id, nome }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{`ID: ${id}`}</Text>
      <Text style={styles.description}>{`Nome: ${nome}`}</Text>
    </View>
  );
};

const Cards = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <Card key={index} id={item.id} nome={item.nome} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Alteração para exibição em colunas
    justifyContent: 'flex-start', // Alinhar os elementos no início da coluna
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    margin: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: '80%', // Definir a largura dos cartões
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default Cards;

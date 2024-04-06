import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Importando o componente Cards
import Cards from './Componentes/cards';

const HomeScreen = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [searchResults, setSearchResults] = useState([]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleIconPress = () => {
        fetch('http://127.0.0.1:8000/core/users/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados');
                }
                return response.json();
            })
            .then(data => {
                setSearchResults(data.pessoas);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
                // Trate o erro de acordo com sua aplicação
            });
    };

    return (
        <View style={styles.container}>
            {sidebarOpen && (
                <View style={styles.sidebar}>
                    <Text style={styles.sidebarItem}>Item 1</Text>
                    <Text style={styles.sidebarItem}>Item 2</Text>
                    <Text style={styles.sidebarItem}>Item 3</Text>
                </View>
            )}
            <View style={styles.mainContent}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={toggleSidebar} style={styles.toggleButton}>
                        <FontAwesome name={sidebarOpen ? 'bars' : 'bars'} size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.input]} // Ajuste o tamanho conforme necessário
                            placeholder="#ID"
                            onChangeText={(text) => console.log(text)}
                            underlineColorAndroid="transparent" // Remove a borda no Android
                        />

                        <TouchableOpacity onPress={handleIconPress} style={styles.iconContainer}>
                            <Ionicons name="search" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* Renderiza os resultados da busca usando o componente Cards */}
                <View style={styles.cardsContainer}>
                    <Cards data={searchResults} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    sidebar: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        padding: 20,
        borderRightWidth: 2, 
        borderRightColor: 'rgb(216, 216, 216)', 
    },
    sidebarItem: {
        marginBottom: 10,
        fontSize: 18,
        
    },
    mainContent: {
        display: 'flex',
        flex: 3,
        marginTop:10, 
        alignSelf: 'flex-start', 
    },
    toggleButton: {
        backgroundColor: 'lightgray',
        padding: 10,
        marginLeft:15,
        borderRadius: 5, 
    },
    inputContainer: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 8, // Corrigido para um número
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center', 
    },        
    input: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderWidth: 0, // Remove a borda
    },
    cardsContainer: {
        marginTop: 20,
    },
});

export default HomeScreen;

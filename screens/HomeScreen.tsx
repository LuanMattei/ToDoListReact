import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const handleIconPress = () => {
       
        console.log('Ícone pressionado!');
        
      };
      
    return (
        <View style={styles.container}>
            {/* Sidebar Lateral */}
            {sidebarOpen && (
                <View style={styles.sidebar}>
                    <Text style={styles.sidebarItem}>Item 1</Text>
                    <Text style={styles.sidebarItem}>Item 2</Text>
                    <Text style={styles.sidebarItem}>Item 3</Text>

                </View>
            )}


            <View style={styles.mainContent}>
                <TouchableOpacity onPress={toggleSidebar} style={styles.toggleButton}>
                    <FontAwesome name={sidebarOpen ? 'bars' : 'bars'} size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    placeholder="#ID"
                    onChangeText={(text) => console.log(text)}
                    />
                    <TouchableOpacity onPress={handleIconPress} style={styles.iconContainer}>
                    {/* Ícone Ionicons dentro do botão */}
                    <Ionicons name="search" size={24} color="black" />
                    </TouchableOpacity>
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
        
    },mainContent: {
        display: 'flex',
        flex: 3,
        marginTop:10,
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexDirection: 'row', 
        alignSelf: 'flex-start', 
    },
    toggleButton: {
        backgroundColor: 'lightgray',
        padding: 10,
        marginLeft:15,
        borderRadius: 5,
        zIndex: 1,
        alignSelf: 'flex-start', 
    },inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '30%',
    marginRight: 15,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center', 
},
input: {
    flex: 1,
    outlineWidth: 0,
    outlineColor: 'transparent',
},
iconContainer: {
    marginLeft: 10, 
},  
});
export default HomeScreen;

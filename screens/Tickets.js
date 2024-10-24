import React from "react";
import { View, Text,StyleSheet, TextInput, Button, ScrollView,Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tickets = () => {

    const navigation = useNavigation();
    
    
    return (
        <ScrollView>
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Total"/>
        <TextInput style={styles.input} placeholder="Fecha"/>
        <Button  title="Registrar ticket"/>
        
        <TextInput style={styles.input} placeholder="Id Ticket"/>
        <TextInput style={styles.input} placeholder="Total"/>

        <TextInput style={styles.input} placeholder="Fecha"/>
        <Button  title="Actualizar Ticket"/>
        
        <TextInput style={styles.input} placeholder="Id Ticket"/>
        <Button  title="Borrar"/>
        <Button  title="Ver lista"/>


    </View>
    </ScrollView>
);
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:"1%"
    },
    input:{
        backgroundColor:"white",
        width:'90%',
        borderColor:'#e8e8e8',
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:1
    },
    
    
    });
export default Tickets;
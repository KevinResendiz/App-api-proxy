import React from "react";
import { View, TextInput,StyleSheet,Button,Switch, Text,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Eventos = () => {

    const navigation = useNavigation();
    
    
    return (
        <ScrollView>
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Fecha Inicio"/>
        <TextInput style={styles.input} placeholder="Fecha Final"/>
        <Text>Pago</Text>
        <Switch/>
        
        <TextInput style={styles.input} placeholder="Observaciones"/>
        <Button  title="Registrar Producto"/>
        
        <TextInput style={styles.input} placeholder="Id Producto"/>
        <TextInput style={styles.input} placeholder="Fecha Inicio"/>
        <TextInput style={styles.input} placeholder="Fecha Final"/>
        <Text>Pago</Text>
        <Switch/>
        
        <TextInput style={styles.input} placeholder="Observaciones"/>
        <Button  title="Actualizar Producto"/>
        
        <TextInput style={styles.input} placeholder="Id Producto"/>
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
export default Eventos;
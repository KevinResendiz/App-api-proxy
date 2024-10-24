import React from "react";
import { View, TextInput,StyleSheet , Button, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CrudInventario = () => {

    const navigation = useNavigation();
    
    
    return (
        <ScrollView>
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Id Producto"/>
        <Button  title="Eliminar"/>
        
        <TextInput style={styles.input} placeholder="Id Producto"/>
        <TextInput style={styles.input} placeholder="Cantidad"/>
        <Button  title="Actualizar"/>

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
    marginTop:"20%"
    },
    input:{
        backgroundColor:"white",
        width:'90%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5
    },
    
    });
export default CrudInventario;
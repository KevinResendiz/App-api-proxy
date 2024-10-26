import * as React from 'react';
import { View, TextInput, StyleSheet, 
    Button, ScrollView, Alert 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const API_URL = "http://localhost:3000/api/productos";

const Producto = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const [nombreProducto, setNombreProducto] = React.useState("");
    const [categoria, setCategoria] = React.useState("");
    const [proveedorId, setProveedorId]  = React.useState("");
    const [productoId, setProductoId] = React.useState("");

    const registrarProducto = async () => {

        setIsLoading(true);

        try {
            const response = await axios.post(API_URL, {
                nombre_producto: nombreProducto,
                proveedor_id: proveedorId,
                categoria
            });
            Alert.alert("Registro exitoso", `ID: ${response.id}`);
            console.log("Registro exitoso", `ID: ${response.id}`);
        } catch (error) {
            console.error("Error al registrar el producto:", error);
            Alert.alert("Error", "No se pudo registrar el producto");
        } finally {
            setIsLoading(false);
        }
    };

    const actualizarProducto = async () => {

        setIsLoading(true);

        try {
            const response = await axios.put(`${API_URL}/${productoId}`, {
                nombre_producto: nombreProducto,
                proveedor_id: proveedorId,
                categoria
            });
            Alert.alert("Actualización exitosa", "El producto ha sido actualizado");
            console.log("Actualización exitosa", "El producto ha sido actualizado");
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            Alert.alert("Error", "No se pudo actualizar el producto");
        } finally {
            setIsLoading(false);
        }
    };

    const eliminarProducto = async () => {

        setIsLoading(true);

        try {
            await axios.delete(`${API_URL}/${productoId}`);
            Alert.alert("Eliminación exitosa", "El producto ha sido eliminado");
            console.log("Eliminación exitosa", "El producto ha sido eliminado");
        } catch (error) {
            console.error("Error al eliminar producto:", error);
            Alert.alert("Error", "No se pudo eliminar el producto");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Nombre Producto" 
                    value={nombreProducto} 
                    onChangeText={setNombreProducto} 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Categoria" 
                    value={categoria} 
                    onChangeText={setCategoria} 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Proveedor id" 
                    value={proveedorId} 
                    onChangeText={setProveedorId}
                    keyboardType="numeric" 
                /> 
                <Button title="Registrar" onPress={registrarProducto} />

                <TextInput 
                    style={styles.input} 
                    placeholder="Id Producto" 
                    value={productoId} 
                    onChangeText={setProductoId}
                    keyboardType="numeric" 
                />
                <Button title="Actualizar" onPress={actualizarProducto} />

                <Button title="Eliminar" onPress={eliminarProducto} />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: "1%"
    },
    input: {
        backgroundColor: "white",
        width: '90%',
        borderColor: '#e8e8e8',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5
    },
});

export default Producto;

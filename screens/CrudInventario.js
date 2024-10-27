import * as React from 'react';
import { View, TextInput, StyleSheet, 
    Button, ScrollView, Alert 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const API_URL = "http://localhost:3000/api/inventario";

const CrudInventario = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const [productoId, setProductoId] = React.useState("");
    const [cantidad, setCantidad] = React.useState("");  
    const [tipoMovimiento, setTipoMovimiento]  = React.useState("");
    const [fechaMovimiento, setFechaMovimiento] = React.useState("");
    const [usuarioResponsableId, setUsuarioResponsableId] = React.useState("");
    const [observaciones, setObservaciones] = React.useState("");
    const  [inventarioId, setInventarioId] = React.useState([]);


    const registrarInventario = async () => {

        setIsLoading(true);

        try {
            const response = await axios.post(API_URL, {
                producto_id: productoId,
                cantidad,
                tipo_movimiento: tipoMovimiento,
                fecha_movimiento: fechaMovimiento,
                usuario_responsable_id: usuarioResponsableId,
                observaciones
            });
            Alert.alert("Registro exitoso", `ID: ${response.id}`);
            console.log("Registro exitoso", `ID: ${response.id}`);
        } catch (error) {
            console.error("Error al registrar el inventario:", error);
            Alert.alert("Error", "No se pudo registrar el inventario");
        } finally {
            setIsLoading(false);
        }
    };

    const actualizarInventario = async () => {

        setIsLoading(true);

        try {
            const response = await axios.put(`${API_URL}/${inventarioId}`, {
                producto_id: productoId,
                cantidad,
                tipo_movimiento: tipoMovimiento,
                fecha_movimiento: fechaMovimiento,
                usuario_responsable_id: usuarioResponsableId,
                observaciones
            });
            Alert.alert("Actualización exitosa", "El inventario ha sido actualizado");
            console.log("Actualización exitosa", "El inventario ha sido actualizado");
        } catch (error) {
            console.error("Error al actualizar el inventario:", error);
            Alert.alert("Error", "No se pudo actualizar el inventario");
        } finally {
            setIsLoading(false);
        }
    };

    const eliminarInventario = async () => {

        setIsLoading(true);

        try {
            await axios.delete(`${API_URL}/${inventarioId}`);
            Alert.alert("Eliminación exitosa", "El inventario ha sido eliminado");
            console.log("Eliminación exitosa", "El inventario ha sido eliminado");
        } catch (error) {
            console.error("Error al eliminar inventario:", error);
            Alert.alert("Error", "No se pudo eliminar el inventario");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Producto Id" 
                    value={productoId} 
                    onChangeText={setProductoId}
                    keyboardType="numeric" 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Cantidad" 
                    value={cantidad} 
                    onChangeText={setCantidad}
                    keyboardType="numeric" 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Tipo de Movimiento" 
                    value={tipoMovimiento} 
                    onChangeText={setTipoMovimiento} 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Fecha del Movimiento" 
                    value={fechaMovimiento} 
                    onChangeText={setFechaMovimiento} 
                /> 
                <TextInput 
                    style={styles.input} 
                    placeholder="Usuario responsable Id" 
                    value={usuarioResponsableId} 
                    onChangeText={setUsuarioResponsableId} 
                /> 
                <TextInput 
                    style={styles.input} 
                    placeholder="Observaciones" 
                    value={observaciones} 
                    onChangeText={setObservaciones} 
                /> 
                <Button title="Registrar" onPress={registrarInventario} />

                <TextInput 
                    style={styles.input} 
                    placeholder="Id inventario" 
                    value={inventarioId} 
                    onChangeText={setInventarioId}
                    keyboardType="numeric" 
                />
                <Button title="Actualizar" onPress={actualizarInventario} />

                <Button title="Eliminar" onPress={eliminarInventario} />

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

export default CrudInventario;

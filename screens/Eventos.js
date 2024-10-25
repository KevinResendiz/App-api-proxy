import * as React from 'react';
import { View, TextInput, StyleSheet, Button, 
    Switch, Text, ScrollView, Alert 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const API_URL = "http://192.168.1.68:3000/api/eventos";

const Eventos = () => {
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = React.useState(false);

    const [fechaInicio, setFechaInicio] = React.useState("");
    const [fechaFinal, setFechaFinal] = React.useState("");
    const [pago, setPago] = React.useState(false);
    const [observaciones, setObservaciones] = React.useState("");
    const [bloqueId, setBloqueId] = React.useState("");
    const [clienteId, setClienteId] = React.useState("");
    const [eventoId, setEventoId] = React.useState("");
    const [precioBloque, setPrecioBloque] = React.useState("");

    const registrarEvento = async () => {

        setIsLoading(true);

        try {
            const response = await axios.post(API_URL, {
                fecha_inicio: fechaInicio,
                fecha_final: fechaFinal,
                pago_renta: pago,
                observaciones,
                bloque_id: bloqueId,
                precio_bloque_id: precioBloque,
                cliente_rentador_id: clienteId,
            });
            Alert.alert("Registro exitoso", `ID: ${response.id}`);
            console.log("Registro exitoso", `ID: ${response.id}`);
        } catch (error) {
            console.error("Error al registrar evento:", error);
            Alert.alert("Error", "No se pudo registrar el evento");
        } finally {
            setIsLoading(false);
        }
    };

    const actualizarEvento = async () => {

        setIsLoading(true);

        try {
            const response = await axios.put(`${API_URL}/${eventoId}`, {
                fecha_inicio: fechaInicio,
                fecha_final: fechaFinal,
                pago_renta: pago,
                observaciones,
                bloque_id: bloqueId,
                precio_bloque_id: precioBloque,
                cliente_rentador_id: clienteId,
            });
            Alert.alert("Actualización exitosa", "El evento ha sido actualizado");
            console.log("Actualización exitosa", "El evento ha sido actualizado");
        } catch (error) {
            console.error("Error al actualizar evento:", error);
            Alert.alert("Error", "No se pudo actualizar el evento");
        } finally {
            setIsLoading(false);
        }
    };

    const eliminarEvento = async () => {

        setIsLoading(true);

        try {
            await axios.delete(`${API_URL}/${eventoId}`);
            Alert.alert("Eliminación exitosa", "El evento ha sido eliminado");
            console.log("Eliminación exitosa", "El evento ha sido eliminado");
        } catch (error) {
            console.error("Error al eliminar evento:", error);
            Alert.alert("Error", "No se pudo eliminar el evento");
        } finally {
            setIsLoading(false);
        }
    };

    const verLista = () => {
        navigation.navigate("ListaEventos");
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Fecha Inicio" 
                    value={fechaInicio} 
                    onChangeText={setFechaInicio} 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Fecha Final" 
                    value={fechaFinal} 
                    onChangeText={setFechaFinal} 
                />
                <Text>Pago</Text>
                <Switch value={pago} onValueChange={setPago} />
                <TextInput 
                    style={styles.input} 
                    placeholder="Observaciones" 
                    value={observaciones} 
                    onChangeText={setObservaciones} 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Bloque id" 
                    value={bloqueId} 
                    onChangeText={setBloqueId}
                    keyboardType="numeric" 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Precio Bloque id" 
                    value={precioBloque} 
                    onChangeText={setPrecioBloque} 
                    keyboardType="numeric"
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Cliente id" 
                    value={clienteId} 
                    onChangeText={setClienteId}
                    keyboardType="numeric" 
                />
                <Button title="Registrar" onPress={registrarEvento} />

                <TextInput 
                    style={styles.input} 
                    placeholder="Id evento" 
                    value={eventoId} 
                    onChangeText={setEventoId}
                    keyboardType="numeric" 
                />
                <Button title="Actualizar" onPress={actualizarEvento} />

                <Button title="Eliminar" onPress={eliminarEvento} />

                {/* <Button title="Ver lista" onPress={verLista} /> */}
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

export default Eventos;

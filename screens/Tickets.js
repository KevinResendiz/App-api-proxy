import * as React from 'react';
import { 
    View, TextInput, StyleSheet, Button, ScrollView, Alert 
} from "react-native";
import axios from 'axios';

const API_URL = "http://localhost:3000/api/tickets";

const Tickets = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const [total, setTotal] = React.useState("");
    const [productos, setProductos] = React.useState([]);
    const [productoId, setProductoId] = React.useState("");
    const [ticketId, setTicketId]  = React.useState("");

    const agregarProducto = () => {
        if (productoId.trim() === "") {
            Alert.alert("Error", "Ingresa un ID de producto válido.");
            return;
        }
        setProductos([...productos, { producto_id: parseInt(productoId) }]);
        setProductoId("");
    };

    const registrarTicket = async () => {
        setIsLoading(true);

        try {
            const response = await axios.post(API_URL, {
                total: parseFloat(total),
                productos: productos,
            });

            Alert.alert("Registro exitoso", `ID del Ticket: ${response.data.id}`);
            console.log("Registro exitoso", `ID del Ticket: ${response.data.id}`);

            setTotal("");
            setProductos([]);

        } catch (error) {
            console.error("Error al registrar el ticket:", error);
            Alert.alert("Error", "No se pudo registrar el ticket");
        } finally {
            setIsLoading(false);
        }
    };

    const eliminarTicket = async () => {
        setIsLoading(true);

        try {
            await axios.delete(`${API_URL}/${ticketId}`);
            Alert.alert("Eliminación exitosa", "El ticket ha sido eliminado");
            console.log("Eliminación exitosa", "El ticket ha sido eliminado");
        } catch (error) {
            console.error("Error al eliminar ticket:", error);
            Alert.alert("Error", "No se pudo eliminar el ticket");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Total del Ticket" 
                    value={total} 
                    onChangeText={setTotal} 
                    keyboardType="numeric"
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="ID de Producto" 
                    value={productoId} 
                    onChangeText={setProductoId} 
                    keyboardType="numeric" 
                />
                <Button title="Agregar Producto" onPress={agregarProducto} />

                <Button 
                    title="Registrar Ticket" 
                    onPress={registrarTicket} 
                    disabled={productos.length === 0 || total === ""}
                />

                <TextInput 
                    style={styles.input} 
                    placeholder="Ticket Id" 
                    value={ticketId} 
                    onChangeText={setTicketId}
                    keyboardType="numeric" 
                />
                <Button title="Eliminar Ticket" onPress={eliminarTicket} />
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

export default Tickets;

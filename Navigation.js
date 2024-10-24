import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

//screens

import CrudInventario from "./screens/CrudInventario";
import Eventos from "./screens/Eventos";
import Producto from "./screens/Producto";
import Registro from "./screens/Registro";
import Usuarios from "./screens/Usuarios";
import Login from "./screens/Login";
import Tickets from "./screens/Tickets";



import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStackNavigator = createNativeStackNavigator();




const Tab = createBottomTabNavigator();

function MyTabs() {
return (
    <Tab.Navigator
        initialRouteName="Registro"
        screenOptions= {{
            tabBarActiveTintColor: 'purple',
        }}
    >
        <Tab.Screen 
            name="Registro" 
            component={Registro} 
            options={{
                tabBarLabel: 'Registro',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="numeric-1" color={color} size={30} />
                ),
                
            }}
        />
        <Tab.Screen 
            name="Login" 
            component={Login}
            options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="numeric-2" color={color} size={30} />
                ),
            }}
        />
        <Tab.Screen 
            name="Crudinventario" 
            component={CrudInventario}
            options={{
                tabBarLabel: 'CrudINventario',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="numeric-3" color={color} size={30} />
                ),
            }}
        />
        <Tab.Screen 
            name="Producto" 
            component={Producto}
            options={{
                tabBarLabel: 'Producto ',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="numeric-4" color={color} size={30} />
                ),
            }}
        />
        <Tab.Screen 
            name="Eventos" 
            component={Eventos}
            options={{
                tabBarLabel: 'Eventos',
                tabBarIcon: ({ color, size }) => (
                    
                    <MaterialCommunityIcons  name="numeric-5" color={color} size={30} />
                ),
                
            }}
        />
        <Tab.Screen 
            name="Ticket" 
            component={Tickets}
            options={{
                tabBarLabel: 'Ticket',
                tabBarIcon: ({ color, size }) => (
                    
                    <MaterialCommunityIcons  name="numeric-6" color={color} size={30} />
                ),
                
            }}
        />
        <Tab.Screen 
        name="Usuario" 
        component={Usuarios}
        options={{
            tabBarLabel: 'Usuario',
            tabBarIcon: ({ color, size }) => (
                
                <MaterialCommunityIcons  name="numeric-7" color={color} size={30} />
            ),
            
        }}
    />
    </Tab.Navigator>
    );
}


export default function Navigation() {
return (
    <NavigationContainer>
    <MyTabs />
    </NavigationContainer>
);
}
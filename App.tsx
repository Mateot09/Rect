import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InsertScreen } from './assets/src/presentation/views/InsertView/InsertScreen';
import { UpdateScreen } from './assets/src/presentation/views/UpdateView/UpdateScreen';
import { ListScreen } from './assets/src/presentation/views/ListaEstudiante/List';
import { HomeScreen } from './assets/src/presentation/views/Home/HomeScreen';
export type RootStackParamList = {
  InsertScreen: undefined,
  UpdateScreen: undefined,
  ListScreen: undefined,
  HomeScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
        }
      }
      >
        <Stack.Screen 
          name='HomeScreen'
          component={HomeScreen}
          options={{title: 'Home', headerShown: true}}
        />
        <Stack.Screen 
          name='ListScreen'
          component={ListScreen}
          options={{title: 'Estudiantes registrados', headerShown: true}}
        />
         <Stack.Screen 
          name='InsertScreen'
          component={InsertScreen}
          options={{title: 'Crear un estudiante', headerShown: true}}
        />
        
       
        <Stack.Screen 
          name='UpdateScreen'
          component={UpdateScreen}
          options={{title: 'Editar estudiante', headerShown: true}}
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App;
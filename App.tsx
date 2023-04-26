import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabBar from './src/components/BottomTabBar/BottomTabBar';
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login';
import Profile from './src/pages/Profile';
import Upload from './src/pages/Upload';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='home' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='Upload'
          component={Upload}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='ios-add-circle' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='person-circle' color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
/*
<Tab.Navigator
  initialRouteName='Feed'
  tabBarOptions={{
    activeTintColor: '#42f44b',
  }}
>
  <Tab.Screen
    name='HomeStack'
    component={HomeStack}
    options={{
      headerShown: false,
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name='home' color={color} size={size} />
      ),
    }}
  />
  <Tab.Screen
    name='SettingsStack'
    component={SettingsStack}
    options={{
      tabBarLabel: 'Settings',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name='settings' color={color} size={size} />
      ),
    }}
  />
</Tab.Navigator>;
*/

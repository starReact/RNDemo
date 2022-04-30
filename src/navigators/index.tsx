/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
 import { NavigationContainer, RouteProp } from '@react-navigation/native';
 import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from '@react-navigation/stack';
 import ButtomTabs from './ButtomTabs';
 
 export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
 
 export type RootStackParamList = {
    ButtomTabs: {
        screen: string,
    };
   Detail: {
     name: string
   }
 }
 
 interface IHomeScreenProps {
   navigation: RootStackNavigation
 }
 
 interface IDetailScreenProps {
   navigation: RootStackNavigation
   route: RouteProp<RootStackParamList, "Detail">
 }
 
 function HomeScreen({navigation}: IHomeScreenProps) {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Home Screen</Text>
       <Button title='Go to Detail' onPress={() => navigation.navigate("Detail", {
         name: '123'
       })} />
     </View>
   );
 }
 function DetailScreen({navigation, route}: IDetailScreenProps) {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Detail Screen</Text>
       {/* <Text>{route.params.name}</Text> */}
       <Button
         title="Detail again"
         onPress={() => navigation.navigate("Detail", {
           name: ""
         })}
       />
       <Button
         title="Go back"
         onPress={() => navigation.goBack()}
       />
       <Button
         title="Go back to first screen in stack"
         onPress={() => navigation.popToTop()}
       />
     </View>
   );
 }
 
 const App = () => {
   const Stack = createStackNavigator<RootStackParamList>();
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='ButtomTabs' screenOptions={{
        headerTitleAlign: "center",
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,  // 开启手势系统，安卓手机端，右滑切换
        headerStatusBarHeight: StatusBar.currentHeight,
        headerStyle: {
          ...Platform.select({
            android: {
              elevation: 0,
              borderBottomWidth: StyleSheet.hairlineWidth
            }
          })
        }
       }}>
         <Stack.Screen name="ButtomTabs" component={ButtomTabs} />
         <Stack.Screen name="Detail" component={DetailScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 export default App;
 
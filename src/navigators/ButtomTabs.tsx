import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationContainer, RouteProp, TabNavigationState, useNavigationState } from '@react-navigation/native'
import { RootStackNavigation, RootStackParamList } from '.';
import IconFont from '../assets/iconfont';

type BottomTabParamList = {
    Home: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
}

const bottomTabObj = {
    "Home": "首页",
    "Listen": "我听",
    "Found": "发现",
    "Account": "我的"
}

const Tab = createBottomTabNavigator<BottomTabParamList>();

interface IHomeScreenProps {
    navigation: RootStackNavigation
}

function Home ({ navigation }: IHomeScreenProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title='Go to Detail' onPress={() => navigation.navigate("Detail", {
            name: '123'
            })} />
        </View>
    );
}
function Listen () {
    return <Text>Listen</Text>
}
function Found () {
    return <Text>Found</Text>
}
function Account () {
    return <Text>Account</Text>
}

type Route = RouteProp<RootStackParamList, "ButtomTabs"> & {
    state?: TabNavigationState<BottomTabParamList>;
}

interface IProps {
    navigation: RootStackNavigation;
    route: Route
}

export default function ButtomTabs({navigation, route}: IProps) {
    const state = useNavigationState(state => state);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: getHeaderTitleTag()
        })
    }, [state])

    function getHeaderTitleTag() {
        if(state.routes[0].state) {
            const routeNames = state.routes[0].state?.routeNames as string[];
            const index = state.routes[0].state?.index as number;
            const routeTag = routeNames[index];
            switch (routeTag) {
                case 'Home':
                    return bottomTabObj.Home;
                case "Found": 
                    return bottomTabObj.Found;
                case "Listen":
                    return bottomTabObj.Listen;
                case "Account": 
                    return bottomTabObj.Account;
                default:
                    return bottomTabObj.Home
            }
        }
    } 

  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#f86442", header: () => null }}>
        <Tab.Screen name='Home' component={Home}
            options={{ tabBarLabel: bottomTabObj.Home, tabBarIcon: ({color, size}) => <IconFont name='icon-shouye' size={size} color={color} /> }} />
        <Tab.Screen name='Listen' component={Listen} 
            options={{ tabBarLabel: bottomTabObj.Listen, tabBarIcon: ({color, size}) => <IconFont name='icon-listen' size={size} color={color} />}} />
        <Tab.Screen name='Found' component={Found}
            options= {{tabBarLabel: bottomTabObj.Found, tabBarIcon: ({color, size}) => <IconFont name='icon-faxian' size={size} color={color} />}} />
        <Tab.Screen name='Account' component={Account}
            options={{tabBarLabel: bottomTabObj.Account, tabBarIcon: ({color, size}) => <IconFont name='icon-wode' size={size} color={color} />}} />
    </Tab.Navigator>
  )
}

import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationContainer, RouteProp, TabNavigationState, useNavigationState } from '@react-navigation/native'
import { RootStackNavigation, RootStackParamList } from '.';
import IconFont from '../assets/iconfont';
import HomeTabs from './HomeTabs';

type BottomTabParamList = {
    HomeTabs: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
}

const bottomTabObj = {
    "HomeTabs": "首页",
    "Listen": "我听",
    "Found": "发现",
    "Account": "我的"
}

const Tab = createBottomTabNavigator<BottomTabParamList>();

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
                    return bottomTabObj.HomeTabs;
                case "Found": 
                    return bottomTabObj.Found;
                case "Listen":
                    return bottomTabObj.Listen;
                case "Account":
                    return bottomTabObj.Account;
                default:
                    return bottomTabObj.HomeTabs
            }
        }
    } 

  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#f86442", header: () => null }}>
        <Tab.Screen name='HomeTabs' component={HomeTabs}
            options={{ tabBarLabel: bottomTabObj.HomeTabs, tabBarIcon: ({color, size}) => <IconFont name='icon-shouye' size={size} color={color} /> }} />
        <Tab.Screen name='Listen' component={Listen} 
            options={{ tabBarLabel: bottomTabObj.Listen, tabBarIcon: ({color, size}) => <IconFont name='icon-listen' size={size} color={color} />}} />
        <Tab.Screen name='Found' component={Found}
            options= {{tabBarLabel: bottomTabObj.Found, tabBarIcon: ({color, size}) => <IconFont name='icon-faxian' size={size} color={color} />}} />
        <Tab.Screen name='Account' component={Account}
            options={{tabBarLabel: bottomTabObj.Account, tabBarIcon: ({color, size}) => <IconFont name='icon-wode' size={size} color={color} />}} />
    </Tab.Navigator>
  )
}

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
//screens
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/Profile";
import ReelScreen from "./screens/Reel";
import SearchScreen from "./screens/Search";
import ShopScreen from "./screens/Shop";
import {
  Home,
  HomeField,
  Reel,
  ReelField,
  Search,
  SearchField,
  Shop,
  ShopField,
} from "./icons";
import { Image, StyleSheet } from "react-native";

function Screens() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#262626",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <HomeField size={size} fill={color} />;
            }
            return <Home size={size} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <SearchField size={size} fill={color} />;
            }
            return <Search size={size} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="reel"
        component={ReelScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <ReelField size={size} fill={color} />;
            }
            return <Reel size={size} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <ShopField size={size} fill={color} />;
            }
            return <Shop size={size} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              style={[
                styles.avatar,
                { borderColor: focused ? "#000" : "transparent" },
              ]}
              source={{
                uri: "https://pbs.twimg.com/profile_images/1495331397208350722/CdeZdZaQ_400x400.jpg",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderRadius: 21,
  },
});

export default Screens;

import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import climateImage from "../assets/images/climate.png";
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";

const climate = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={climateImage}
        resizeMode="contain"
      />
      <Pressable onPress={() => router.back()} style={styles.backIcon}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>
      <View style={styles.footer}>
        <Text style={styles.climateText}>Interior 74 °F - Exterior 66°</Text>
        <View style={styles.control}>
          <View style={styles.icons}>
            <AntDesign name="poweroff" size={24} color="white" />
            <Text style={styles.colorText}>On</Text>
          </View>
          <View style={styles.temperatureContainer}>
            <Entypo name="chevron-left" size={24} color="gray" />
            <Text style={styles.temperatureText}>68°</Text>
            <Entypo name="chevron-right" size={24} color="gray" />
          </View>
          <View style={styles.icons}>
            <MaterialCommunityIcons name="car-door" size={24} color="white" />
            <Text style={styles.colorText}>Vent</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default climate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#161818",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 500,
  },
  backIcon: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
    backgroundColor: '#2f3030',
    padding: 10,
    borderRadius: 5
  },
  footer: {
    alignItems: "center",
    padding: 12,
    marginBottom: 20,
    marginTop: "auto"

  },
  climateText: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
  },
  colorText: {
    color: "white",
    fontWeight: "bold",
  },
  control: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: "300",
    color: "white",
    marginHorizontal: 20,
  },
  icons: {
    alignItems: "center"
  }
})
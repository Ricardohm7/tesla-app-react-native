import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="grey" />
      </View>
      <Image source={car} style={styles.image} resizeMode="contain" />
      <View style={styles.control}>
        <Entypo name="lock" size={36} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View>

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.optionRow}>
              {/* icon */}
              <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
              {/* Text */}
              <Text style={styles.optionText}>{item.name}</Text>
              {/* Icon */}
              <MaterialCommunityIcons style={styles.optionIcon} name="chevron-right" size={26} color="gray" />
            </View>
          )
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818"
  },
  header: {
    marginTop: 48,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#eee", //"#0C0D34
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "grey",
    fontWeight: "500"
  },
  image: {
    width: "100%",
    height: 200
  },
  control: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  optionRow: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontWeight: "bold",
    marginLeft: 10,
  },
  optionIcon: {
    marginLeft: "auto",
  }
});

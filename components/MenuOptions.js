import { StyleSheet, Text, View, Pressable } from "react-native"
import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";

const MenuOptions = ({ item }) => {
  return (
    <Link href={item.href} asChild>
      <Pressable style={styles.optionRow}>
        {/* icon */}
        <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
        {/* Text */}
        <Text style={styles.optionText}>
          {item.name}
        </Text>
        {/* Icon */}
        <MaterialCommunityIcons style={styles.optionIcon} name="chevron-right" size={26} color="gray" />
      </Pressable>
    </Link>
  )
}

export default MenuOptions;

const styles = StyleSheet.create({
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
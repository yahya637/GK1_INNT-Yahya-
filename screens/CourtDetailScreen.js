import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles";

export default function CourtDetailScreen({ route }) {
  const { court } = route.params;

  return (
    <View style={styles.container}>
      <Image source={court.image} style={styles.imageLarge} />

      <Text style={styles.title}>{court.name}</Text>
      <Text style={styles.detailAddress}>{court.address}</Text>
      <Text style={styles.detailPrice}>{court.price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Bane booket!")}
      >
        <Text style={styles.buttonText}>Book bane</Text>
      </TouchableOpacity>
    </View>
  );
}

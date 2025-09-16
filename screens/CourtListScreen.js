import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "../styles";

// Importer billeder
import basketImg from "../assets/images/basketbane.jpg";
import fodboldImg from "../assets/images/fodbold.jpeg";
import tennisImg from "../assets/images/tennis.jpg";

const COURTS = [
  { 
    id: "1", 
    name: "Fodboldbane A", 
    image: fodboldImg, 
    price: "200 kr/time", 
    address: "Sportsvej 12, København" 
  },
  { 
    id: "2", 
    name: "Tennishal B", 
    image: tennisImg, 
    price: "150 kr/time", 
    address: "Tennisvej 7, Frederiksberg" 
  },
  { 
    id: "3", 
    name: "Basketbane C", 
    image: basketImg, 
    price: "120 kr/time", 
    address: "Basketgade 3, Valby" 
  },
];

export default function CourtListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vælg en bane</Text>
      <FlatList
        data={COURTS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardLarge}
            onPress={() => navigation.navigate("Details", { court: item })}
          >
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>{item.address}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

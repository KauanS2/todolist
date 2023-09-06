import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function WithoutTask() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/clip.png")}
      />
      <Text style={styles.textOne}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.textTwo}>r
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}

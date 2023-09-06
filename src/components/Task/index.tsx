import { Pressable, Text, View } from "react-native";
import { Circle, Trash } from "phosphor-react";
import { styles } from "./styles";
export function Task() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonCheck}>
        <Circle color="#4EA8DE" size={20} />
      </Pressable>
      <Text style={styles.text}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <Pressable style={styles.buttonDelete}>
        <Trash color="#808080" size={20} />
      </Pressable>
    </View>
  );
}

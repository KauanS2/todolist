import { Pressable, Text, View } from "react-native";
import { Circle, Trash, CheckCircle } from "phosphor-react";
import { styles } from "./styles";

interface TaskProps {
  content: string;
  onRemove: () => void;
  onComplete: () => void;
  isComplete: boolean;
}
export function Task({ content, onRemove, onComplete, isComplete }: TaskProps) {
  return (
    <View style={styles.container}>
      {isComplete ? (
        <Pressable onPress={onComplete} style={styles.buttonCheck}>
          <CheckCircle color="#5E60CE" size={20} />
        </Pressable>
      ) : (
        <Pressable onPress={onComplete} style={styles.buttonCheck}>
          <Circle color="#4EA8DE" size={20} />
        </Pressable>
      )}
      {isComplete ? (
        <Text style={styles.textUnder}>{content}</Text>
      ) : (
        <Text style={styles.text}>{content}</Text>
      )}
      <Pressable onPress={onRemove} style={styles.buttonDelete}>
        <Trash color="#808080" size={20} />
      </Pressable>
    </View>
  );
}

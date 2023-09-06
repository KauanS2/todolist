import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { WithoutTask } from "../../components/WithoutTask";
import { Task } from "../../components/Task";
import { PlusCircle } from "phosphor-react";
export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <Pressable style={styles.button}>
            <PlusCircle color="#FFF" size={22} />
          </Pressable>
        </View>
        <View>
          <View style={styles.tasksInfo}>
            <Text style={styles.textCreate}>
              Criadas <Text style={styles.info}>0</Text>
            </Text>
            <Text style={styles.textConclued}>
              Concluidas <Text style={styles.info}>0</Text>
            </Text>
          </View>

          {/*FlatList//*/}
          <Task />
        </View>
      </View>
    </View>
  );
}

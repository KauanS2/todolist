import {
  Alert,
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./styles";
import { WithoutTask } from "../../components/WithoutTask";
import { Task } from "../../components/Task";
import { PlusCircle } from "phosphor-react";
import { useState } from "react";

interface TaskProps {
  content: string;
  isComplete: boolean;
}
export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskName, setTaskName] = useState("");

  function handleAddTask() {
    if (tasks.map((res) => res.content).includes(taskName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse mesmo nome."
      );
    }
    if (taskName.length) {
      setTasks((state) => [
        ...state,
        {
          content: taskName,
          isComplete: false,
        },
      ]);
      setTaskName("");
    }
  }
  function handleRemoveTask(content: string) {
    const newListTask = tasks.filter((res) => {
      return res.content !== content;
    });
    setTasks(newListTask);
  }
  function handleIsCompleteTask(task: string) {
    const newTask = tasks.map((res) => {
      if (task === res.content) {
        return {
          ...res,
          isComplete: !res.isComplete,
        };
      }
      return res;
    });
    setTasks(newTask);
  }
  const taskIsComplete = tasks.filter((res) => res.isComplete);
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
            value={taskName}
            onChangeText={setTaskName}
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <Pressable onPress={handleAddTask} style={styles.button}>
            <PlusCircle color="#FFF" size={22} />
          </Pressable>
        </View>
        <View>
          <View style={styles.tasksInfo}>
            <Text style={styles.textCreate}>
              Criadas <Text style={styles.info}>{tasks.length}</Text>
            </Text>
            <Text style={styles.textConclued}>
              Concluidas{" "}
              <Text style={styles.info}>{taskIsComplete.length}</Text>
            </Text>
          </View>

          <FlatList
            data={tasks}
            keyExtractor={(item) => item.content}
            renderItem={({ item }) => (
              <Task
                content={item.content}
                onRemove={() => handleRemoveTask(item.content)}
                onComplete={() => handleIsCompleteTask(item.content)}
                isComplete={item.isComplete}
              />
            )}
            ListEmptyComponent={<WithoutTask />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

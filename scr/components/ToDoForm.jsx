
 
import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';


 
function ToDoForm({addTask}) {
  const [task, setTask] = React.useState('');

  const handleChangeText = (text) => {
    setTask(text);

  }

  const handlePress = () => {
    addTask(task);
  };

  return(
    <View style = {style.form}>
        <TextInput
          style= {StyleSheet.input}
          placeholder='Add a new task...'
          onChangeText={handleChangeText}
          value={task}
          />
          <Button title='Add' onPress={handlePress}/>

    </View>
  );
}

const style = StyleSheet.create ({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
});

export default ToDoForm
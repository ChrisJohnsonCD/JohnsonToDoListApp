/**
 * My To Do List App
 *
 * @format
 */
 
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
 
function App() {
  const [items, setItems] = React.useState([
    'Do Laundry',
    'Go to gym',
    'Walk dog',
  ]);
  return (
    <SafeAreaView>
      <ToDoList item = {items} />
      <ToDoForm />
    </SafeAreaView>
  );
}
export default App;
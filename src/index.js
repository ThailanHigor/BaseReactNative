import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Todo from 'components/Todo';

import 'config/DevToolsConfig';
import 'config/ReactotronConfig';

export default class App extends Component {
  state = {
    todos: [
      { id: 0, text: 'fazer café' },
      { id: 1, text: 'Estudar GoNative' },
    ],
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), text: 'Estudar Javascript' },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.todos.map(todo => <Todo key={todo.id} title={todo.text} />)}
        <Button title="Adicionar Todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFF',
    flexWrap: 'wrap',
    alignContent:'center',
  },
  box:{
    width:80,
    height:80,
    backgroundColor: '#F00',
    margin: 20,
    transform:[
      {rotateZ: '50deg' },
    ]
  }
});

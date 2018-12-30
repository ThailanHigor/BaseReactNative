import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Todo = (props) => (
    <View>
        <Text>
            {props.title}
        </Text>
    </View>

);
Todo.defaultProps = {
  title: 'nada',
};

Todo.propTypes = {
  title: PropTypes.string,
}

const styles = StyleSheet.create({

});

export default Todo;

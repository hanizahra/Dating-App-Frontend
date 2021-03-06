import React, { Component } from 'react';
import { View, StyleSheet, Button, TouchableHighlight, Text } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String
});

const options = {
    fields: {
    username: {
      error: 'Required'
    },
    password: {
      error: 'Required'
    }
  },
};

export default class Matches extends Component {


  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    const { navigate } = this.props.navigation
    navigate('SwipeScreen')
  }

  signupPage = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    const { navigate } = this.props.navigation
    navigate('RegisterScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Your match's profile
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

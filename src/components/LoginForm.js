import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  render() {
    const { form } = styles;
    return (
      <View style={form}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@email.com"
              onChangeText={this.onEmailChange}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Password"
              placeholder="password"
            />
          </CardSection>

          <CardSection>
            <Button buttonText="Login" />
          </CardSection>
        </Card>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  form: {
    marginTop: 50
  }
});


export default connect(null, { emailChanged })(LoginForm);

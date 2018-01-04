import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class ListServicesScreen extends Component<{}> {

  handleGoToBookAppointment = () => {
    this.props.navigation.navigate('BookAppointmentScreen', {}, null);
  };


  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          List Services SCREEN!
        </Text>

        <Text
          style={styles.instructions}
          onPress={this.handleGoToBookAppointment}
        >
          Go to Book Appointment Screen...
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

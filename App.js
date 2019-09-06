import React, {Component} from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import LoanRequestDetails from './src/Screens/LoanRequestDetails';

export default class APP extends Component {
  componentDidMount() {
    lor(this);
  }

  componentWillUnmount() {
    rol();
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        marginTop: hp('5%'),
      },
    });
    return (
      <View style={styles.container}>
        <LoanRequestDetails />
      </View>
    );
  }
}

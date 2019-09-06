import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

export default class FinancialItem extends Component {
  componentDidMount() {
    lor(this);
  }

  componentWillUnmount() {
    rol();
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        borderLeftWidth: wp('1%'),
        borderRadius: wp('1%'),
        width: wp('44%'),
        borderLeftColor: '#00D034',
        paddingHorizontal: wp('2.5%'),
        paddingVertical: hp('1%'),
        marginTop: hp('2%'),
        backgroundColor: '#FFF',

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        borderWidth: 0.01,
      },
    });
    return (
      <View style={[styles.container, {borderLeftColor: this.props.data.color}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: wp('3%'), color: '#9B9B9B'}}>
            {this.props.data.type}
          </Text>
          <Image
            style={{width: wp('5%'), height: wp('5%'), marginLeft: wp('2%')}}
            source={require('../icons/help.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={{fontSize: wp('6%'), color: '#000'}}>
          {this.props.data.value}
        </Text>
      </View>
    );
  }
}

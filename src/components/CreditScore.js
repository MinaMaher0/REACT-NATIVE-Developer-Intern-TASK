import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

export default class CreditScore extends Component {
  componentDidMount() {
    lor(this);
  }

  componentWillUnmount() {
    rol();
  }
  render() {
    const styles = StyleSheet.create({
      creditScoreContainer: {
        flexDirection: 'row',
      },
      userImage: {
        width: wp('22%'),
        height: wp('22%'),
      },
      userInformatinContainer: {
        paddingLeft: wp('3%'),
        flex: 1,
      },
      userName: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
      },
      scoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    });
    return (
      <View style={styles.creditScoreContainer}>
        <Image
          style={styles.userImage}
          source={require('../icons/userImage.png')}
        />
        <View style={styles.userInformatinContainer}>
          <Text style={styles.userName}>IO</Text>
          <View style={styles.scoreContainer}>
            <View style={{paddingRight: wp('4%')}}>
              <Text style={{fontSize: wp('3.5%'), color: '#9B9B9B'}}>
                LENME SCORE
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: hp('1%'),
                }}>
                <Image
                  style={{
                    width: wp('5%'),
                    height: wp('5%'),
                    marginRight: wp('1%'),
                  }}
                  source={require('../icons/lenme.png')}
                  resizeMode="contain"
                />
              <Text style={{fontSize: wp('5%')}}>73</Text>
                <Image
                  style={{
                    width: wp('7%'),
                    height: wp('7%'),
                    marginLeft: wp('1%'),
                  }}
                  source={require('../icons/help.png')}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={{}}>
              <Text style={{fontSize: wp('3.5%'), color: '#9B9B9B'}}>
                CREDIT SCORE
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: hp('1%'),
                }}>
                <Image
                  style={{
                    width: wp('5%'),
                    height: wp('5%'),
                    marginRight: wp('1%'),
                  }}
                  source={require('../icons/gradientCircle.png')}
                  resizeMode="contain"
                />
              <Text style={{fontSize: wp('5%')}}>500-630</Text>
                <Image
                  style={{
                    width: wp('7%'),
                    height: wp('7%'),
                    marginLeft: wp('1%'),
                  }}
                  source={require('../icons/help.png')}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
          <Text style={{color: '#9B9B9B'}}>Vantage Score 4.0</Text>
        </View>
      </View>
    );
  }
}

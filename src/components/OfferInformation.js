import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import Slider from 'react-native-slider';
import LinearGradient from 'react-native-linear-gradient';

export default class OfferInformation extends Component {
  componentDidMount() {
    lor(this);
  }

  componentWillUnmount() {
    rol();
  }

  state = {
    rate: 4,
  };

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: hp('5%'),
        marginHorizontal: wp('3%'),
      },
      informationHeaders: {
        fontSize: wp('5%'),
        fontWeight: 'normal',
        color: '#BD2EFF',
      },
      btnStyle: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: hp('1%'),
        minHeight: 50,
      },
      btnShadow: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('5%'),
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2.2,
        borderWidth: 0.01,
        borderRadius: wp('2%'),
      },
      linearGradient: {
        borderRadius: 5,
      },
      track: {
        height: hp('2%'),
        borderRadius: wp('2%'),
      },
      thumb: {
        width: wp('7%'),
        height: wp('7%'),
        borderRadius: wp('100%'),
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 10,
        borderWidth: 0.01,
      },
    });
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.informationHeaders}>Invest Amount</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: wp('5%')}}>$ </Text>
              <Text style={{fontSize: wp('6%'), fontWeight: 'bold'}}>
                970
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.informationHeaders}>Payback Priod</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: wp('6%'), fontWeight: 'bold'}}>
                1
              </Text>
              <Text style={{fontSize: wp('5%')}}> month</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: hp('3%')}}>
          <Text style={styles.informationHeaders}>Annual Interests</Text>
          <Text style={{fontSize: wp('4%'), color: 'rgba(47, 47, 47, 0.6)'}}>
            Recommended interest rate: 3%
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: wp('7%'), fontWeight: 'bold', color: '#000'}}>
              {this.state.rate}
            </Text>
            <Text style={{fontSize: wp('5%'), color: '#000'}}> %</Text>
          </View>
          <Slider
            value={this.state.rate}
            step={1}
            minimumValue={0}
            maximumValue={100}
            maximumTrackTintColor="#D8D8D8"
            minimumTrackTintColor="#BF2BFF"
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            style={{marginTop: hp('4%')}}
            onValueChange={rate => this.setState({rate})}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: wp('3%'), color: 'rgba(47, 47, 47, 0.6)'}}>
              0%
            </Text>
            <Text style={{fontSize: wp('3%'), color: 'rgba(47, 47, 47, 0.6)'}}>
              100%
            </Text>
          </View>
          <TouchableOpacity style={[styles.btnStyle, styles.btnShadow, {marginTop: hp('4%')}]}>
            <Text style={{color: '#FF4040', fontSize: wp('5%')}}>Dismiss</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: hp('2%'), marginBottom: hp('5%')}}>
            <LinearGradient
              colors={['#568FFC', '#BF2BFF']}
              start={{x: 0, y: 1.5}}
              end={{x: 0.3, y: 0}}
              style={[styles.btnStyle,{borderRadius: wp('1%')}]}>
              <Text style={{color: '#FFF', fontSize: wp('5%')}}>
                Make Offer
              </Text>
            </LinearGradient>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

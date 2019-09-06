import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import CreditScore from '../components/CreditScore';
import FinancialHealth from '../components/FinancialHealth';
import OfferInformation from '../components/OfferInformation';

const keyExtractor = ({id}) => id.toString();

export default class LoanRequestDetails extends Component {
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
        paddingHorizontal: wp('5%'),
        backgroundColor: '#F8F8F8',
      },
    });
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <CreditScore />
        <FinancialHealth />
        <OfferInformation />
      </ScrollView>
    );
  }
}

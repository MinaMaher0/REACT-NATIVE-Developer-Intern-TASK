import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import FinancialItem from './FinancialItem';

export default class financialHealth extends Component {
  componentDidMount() {
    lor(this);
  }

  componentWillUnmount() {
    rol();
  }
  render() {
    const items = [
      {
        id: 1,
        type: 'PAYMENT HISTORY',
        value: '1 yr 5 mos',
        color: '#00D034',
      },
      {
        id: 2,
        type: 'CREDIT UTILIZATION',
        value: '100%',
        color: '#00D034',
      },
      {
        id: 3,
        type: 'Total accounts',
        value: '2',
        color: '#FFA831',
      },
      {
        id: 4,
        type: 'TOTAL ACCOUNTS',
        value: '11%',
        color: '#FFA831',
      },
      {
        id: 5,
        type: 'ANNUAL INCOME',
        value: '$53,000/yr',
        color: '#FFA831',
      },
      {
        id: 6,
        type: 'Derogatory Marks',
        value: '3 ',
        color: '#FFA831',
      },
    ];
    const styles = StyleSheet.create({
      container: {
        marginTop: hp('3%'),
      },
    });
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <FinancialItem data={items[0]} />
          <FinancialItem data={items[1]} />
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <FinancialItem data={items[2]} />
          <FinancialItem data={items[3]} />
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <FinancialItem data={items[4]} />
          <FinancialItem data={items[5]} />
        </View>
      </View>
    );
  }
}

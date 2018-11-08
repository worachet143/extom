import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { List, ListItem } from 'react-native-elements'

const list = [
    {
      title: 'Appointments',
      icon: 'av-timer'
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff'
    },
  ]

export default class BookingList extends Component {
  render() {
      const {bookingdata}=  this.props;
    //   const list = data;
    return (
      <View>
        {/* <Text>{JSON.stringify(data)}</Text> */}
        <List>
  {
    bookingdata.map((item) => (
      <ListItem
        key={item.id}
        title={item.cid}
        subtitle={'เตียง : '+item.bed_no+' วันที่ : '+item.book_date+' เวลา : '+item.book_time}
      />
    ))
  }
</List>
      </View>
    )
  }
}
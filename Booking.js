import React from "react";
import { View, Text, Button, TextInput, Alert,Picker,StyleSheet } from "react-native";
import axios from "axios";
import BookingList from './BookingList'

import DatePicker from "react-native-datepicker";
import {Header} from 'react-native-elements'
export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cid: "",
      book_date: "2018-11-10",
      book_time: "10:00",
      bed_no: "",
      bookings:[]
    };
  }

  componentDidMount(){
    this.loadBooking();
  }

  clearForm = () => {
    this.setState({
      cid: "",
      book_date: "",
      book_time: "",
      bed_no: ""
  
    });
  };

  newBooking = async () => {
    const { cid, book_date, book_time, bed_no } = this.state;
    if (cid == "" || book_date == "" || book_time == "" || bed_no == "") {
      Alert.alert("กรุณากรอกรายละเอียดให้ครบถ้วน");
      return;
    }

    let url = "http://61.19.22.99:4000/new-booking";
    let resp = await axios.post(url, this.state);
    if(resp.data=='ok'){
      this.clearForm();
      Alert.alert("จองสำเร็จ");
    }else{
      Alert.alert("จองไม่สำเร็จ");
    }
  
  };

  loadBooking = () => {
    axios.get('http://61.19.22.99:4000/bookings')
    .then(res =>{
      this.setState({
        bookings:res.data
      });
    })
  }


  render() {
    const { cid, book_date, book_time, bed_no } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "space-between",marginLeft:5 }}>


        <Text style={{ fontSize: 20 }}>{this.props.title}</Text>
        <TextInput
          placeholder="เลขบัตรประชาชน"
          value={cid}
          onChangeText={text => this.setState({ cid: text })}
        />

        <DatePicker
          style={{width:300}}
          date={book_date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={date => {
            this.setState({ book_date: date });
          }}
        />

        <DatePicker
          style={{ width: 300 }}
          date={book_time}
          mode="time"
          placeholder="select time"
          //format="HH-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={time => {
            this.setState({ book_time: time });
          }}
        />

        <TextInput
          placeholder="เตียงที่"
          value={bed_no}
          onChangeText={text => this.setState({ bed_no: text })}
        />

        <Picker
          selectedValue={this.state.bed_no}
          style={{ height: 50, width: 300 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ bed_no: itemValue })
          }
        >
          <Picker.Item label="เลือกเตียง" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
        </Picker> 
        <View style={{ flex: 0 }}>
          <Button title="จอง" color="green" onPress={this.newBooking} />
          <Button title="ยกเลิก" color="red" onPress={this.clearForm} />
        </View>
        <BookingList bookingdata={this.state.bookings}/>
      </View>
    );
  }
}
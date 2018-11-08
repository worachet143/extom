import React from 'react'
import {View,Button} from 'react-native'
class Age extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 0,
            name: '',
            lname: '',
            wise: []
        }
    }

    plusAge() {
     this.setState({
              age:this.state.age+1
     });

    }

    delAge(){
        this.setState({
            age:this.state.age-1
     });
            }
   
    render(){
        const {age,name} = this.state;
        return (
            <view style={{ paddingTop: 15 }}>
                <Text>อายุ : {age} ปี</Text>
                <button title="เพิ่ม" onPress={()=>this.plusAge()}/>
                <button title="ลบ" onPress={()=>this.delAge()}/>

            </view>
        );
    }
}
export default Age;
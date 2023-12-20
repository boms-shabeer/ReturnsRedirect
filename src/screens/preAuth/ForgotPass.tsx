import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputText from '../../components/InputText'
import FullButton from '../../components/FullButton'
import OTPInput from '../../components/OtpInput'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [screenName, setScreenName] = useState('forgotPass')
    const [headerText, setHeaderText] = useState("Forgot Password")
    const [subHeader, setSubHeader] = useState("Forgot Password")
    const [newPassVisible, setNewPassVisible] = useState(false)
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassVisible, setConfirmPassVisible] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")

    const otpHandler=()=>{
        console.log("otp requested");
        setScreenName("OTP");
        setHeaderText("Enter your OTP code")
        setSubHeader('Enter the 4 digit code sent to your email address')
    }
    

    const submitOtp=()=>{
      console.log('OTP Submitting....');
      setScreenName("NewPass");
        setHeaderText("New Password")
        setSubHeader('Set your new password')
      
    }

    const handleOtpComplete = (otp: string) => {
      console.log('OTP Complete:', otp);
    };

    const passwordChangehandler=()=>{

    }

    const buttonHandler=()=>{
      console.log(screenName);
      
      if(screenName==="forgotPass"){
        otpHandler()
      }else if(screenName==="OTP"){
        submitOtp()
      }else if (screenName==="NewPass"){
        passwordChangehandler()
      }
    }
  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={{marginHorizontal:24}}>
      <Text style={[styles.headerText,{marginTop:150}, screenName==="OTP"?{fontSize:32}: {fontSize:35}]}>{headerText}</Text>
      <Text style={styles.subHeaderText}>{subHeader}</Text>
      <View style={{marginTop:35}}>
     
      {screenName ==="forgotPass"?<InputText headerText={'Enter Your Email'} onChangeText={setEmail} value={email} secureTextEntry={false} placeholder={'Eg. jamesburnes@gmail.com'}/> :  null}
      {screenName ==="OTP"?<OTPInput onComplete={handleOtpComplete} /> : null}
      {screenName==="NewPass"? <View>
      <InputText headerText={'Enter New Password'} onChangeText={setNewPassword} value={newPassword} secureTextEntry={newPassVisible} isVisible={true} isVisibleHandler={()=>setNewPassVisible(!newPassVisible)} />
      <InputText headerText={'Confirm New Password'} onChangeText={setConfirmPassword} value={confirmPassword} secureTextEntry={confirmPassVisible} isVisible={true} isVisibleHandler={()=>setConfirmPassVisible(!confirmPassVisible)} />
      </View>: null}

      </View>
      <FullButton
          title={'Send OTP'}
          backgroundColor={'#37A585'}
          titleColor={'#fff'}
          style={styles.buttonStyle}
          onPress={() =>buttonHandler()}
          
        />
      </View> 
    </SafeAreaView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    headerText:{
        color:'#343434',
        fontSize:38,
        fontWeight:'900'
    },
    subHeaderText:{
        color:'#555',
        fontSize:14,
        fontWeight:'500'
    },
    buttonStyle:{
        height:57,
        marginTop:10
    }
})
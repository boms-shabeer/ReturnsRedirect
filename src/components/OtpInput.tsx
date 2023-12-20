import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Keyboard } from 'react-native';

interface OTPInputProps {
  onComplete: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ onComplete }) => {
  const [otp, setOtp] = useState<string>('');
  const inputRefs = Array(6).fill(0).map((_, index) => useRef<TextInput>(null));

  const handleOtpChange = (value: string, index: number) => {
    setOtp((prevOtp) => {
      const newOtp = prevOtp.split('');
      newOtp[index] = value;
      return newOtp.join('');
    });

    // Move to the next input
    if (value !== '' && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    // Handle backspace to move to the previous input
    if (key === 'Backspace' && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleOtpComplete = () => {
    onComplete(otp);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      {Array(6).fill(0).map((_, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index]}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(value) => handleOtpChange(value, index)}
          onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor:'#F6F6F5'
  },
  button: {
    marginLeft: 20,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OTPInput;

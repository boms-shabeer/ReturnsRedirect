import React,{useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import LoginGoogle from '../../components/LoginGoogle';
import LoginApple from '../../components/LoginApple';
import FullButton from '../../components/FullButton';

const validationSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(3, 'Full name must be at least 3 characters')
    .required('Full name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  phone: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  rePassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match') // Validate that it matches the 'password' field
    .required('Please re-enter your password'), // Add a required validation
});

const SignUp = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const [passwordVisible,setPasswordVisible]=useState(false)
  const [confirmPasswordVisible,setConfirmPasswordVisible]=useState(false)
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    register,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{padding: 20, flex: 1, marginTop: 60}}>
        <Text style={{fontSize: 38}}>Sign Up</Text>
        <Text style={{fontSize: 14,marginTop:10}}>Create your Return Redirect Account</Text>
        <View style={{marginTop: 40}}>
          <LoginGoogle text={'Sign Up with Google'} />
          <LoginApple style={{marginTop: 20}} text={'Sign Up with Apple'} />
        </View>

        <Text style={{margin: 30, alignSelf: 'center', color: '#bababa'}}>
          Or
        </Text>
        <Controller
          {...register('fullname', {required: true})}
          control={control}
          name="fullname"
          render={({field: {onChange, value, onBlur}}) => (
            <>
              <Text>full Name</Text>
              <TextInput
                label="fullName"
                placeholder="Enter full Name"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                backgroundColor={'#fff'}
                textColor={'#1d1d1b'}
                style={[
                  {
                    borderRadius: 5,
                    borderColor: '#f0f0f0',
                    marginTop: 10,
                    padding: 10,
                    elevation: 2,
                    backgroundColor: '#F6F6F5',
                    height: 50,
                  },
                ]}
                returnKeyType={'done'}
              />
            </>
          )}
        />
        {errors.fullname && (
          <Text style={{color: 'red', marginTop: 2}}>
            {errors.fullname.message}
          </Text>
        )}
        <Controller
          {...register('email', {required: true})}
          control={control}
          name="email"
          render={({field: {onChange, value, onBlur}}) => (
            <View style={{marginTop: 20}}>
              <Text>Email</Text>
              <TextInput
                label="email"
                placeholder="Enter Email"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                backgroundColor={'#fff'}
                textColor={'#1d1d1b'}
                style={[
                  {
                    borderRadius: 5,
                    borderColor: '#f0f0f0',
                    marginTop: 10,
                    padding: 10,
                    elevation: 2,
                    backgroundColor: '#F6F6F5',
                    height: 50,
                  },
                ]}
                returnKeyType={'done'}
              />
            </View>
          )}
        />
        {errors.email && (
          <Text style={{color: 'red', marginTop: 2}}>
            {errors.email.message}
          </Text>
        )}
        <Controller
          {...register('phone', {required: true})}
          control={control}
          name="phone"
          render={({field: {onChange, value, onBlur}}) => (
            <View style={{marginTop: 20}}>
              <Text>phone</Text>
              <View style={{flexDirection: 'row',alignItems:"center",justifyContent:"center",marginTop:10}}>
                <View style={{backgroundColor:"#F6F6F5",height: 50,alignItems:"center",justifyContent:"center",margin:2,width:50,borderRadius:5}}>
                    <Text>+1</Text>
                </View>

                <TextInput
                  label="phone"
                  placeholder="Enter phone"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  backgroundColor={'#fff'}
                  textColor={'#1d1d1b'}
                  style={[
                    {
                      borderRadius: 5,
                      borderColor: '#f0f0f0',
                      padding: 10,
                      elevation: 2,
                      backgroundColor: '#F6F6F5',
                      flex:1,
                      height: 50,
                    },
                  ]}
                  returnKeyType={'done'}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
          )}
        />
        {errors.phone && (
          <Text style={{color: 'red', marginTop: 2}}>
            {errors.phone.message}
          </Text>
        )}

        <Controller
          {...register('password', {required: true})}
          control={control}
          name="password"
          render={({field: {onChange, value, onBlur}}) => (
            <View style={{marginTop: 20}}>
              <Text>Password</Text>
              <View style={{flexDirection:"row",backgroundColor:"#F6F6F5",marginTop:10,height:50,justifyContent:"center",alignItems:"center",alignContent:'center'}}>
              <TextInput
                label="password"
                placeholder="Enter Password"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                backgroundColor={'#fff'}
                textColor={'#1d1d1b'}
                secureTextEntry={!passwordVisible}
                style={[
                  {
                    borderRadius: 5,
                    borderColor: '#f0f0f0',
                    elevation: 2,
                    padding: 10,
                    flex:1,
                    backgroundColor: '#F6F6F5',
                  },
                ]}
                returnKeyType={'done'}
              />
                <Icon
                  style={{marginRight:20,color:"#A6A798"}}
                  name={passwordVisible ? "eye-off" : "eye"}
                  size={20}
                  onPress={()=>{setPasswordVisible(!passwordVisible)}}
                />
            </View>
            </View>
          )}
        />
        {errors.password && (
          <Text style={{color: 'red', marginTop: 2}}>
            {errors.password.message}
          </Text>
        )}
        <Controller
          {...register('rePassword', {required: true})}
          control={control}
          name="rePassword"
          render={({field: {onChange, value, onBlur}}) => (
            <View style={{marginTop: 20}}>
              <Text>Retype Password</Text>
              <View style={{flexDirection:"row",backgroundColor:"#F6F6F5",marginTop:10,height:50,justifyContent:"center",alignItems:"center",alignContent:'center'}}>
                <TextInput
                label="rePassword"
                placeholder="Re-Enter Password"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                backgroundColor={'#fff'}
                textColor={'#1d1d1b'}
                secureTextEntry={!confirmPasswordVisible}
                style={[
                  {
                    borderRadius: 5,
                    borderColor: '#f0f0f0',
                    elevation: 2,
                    padding: 10,
                    flex:1,
                    backgroundColor: '#F6F6F5',
                  },
                ]}
                returnKeyType={'done'}
              />
                  <Icon
                  style={{marginRight:20,color:"#A6A798"}}
                  name={confirmPasswordVisible ? "eye-off" : "eye"}
                  size={20}
                  onPress={()=>{setConfirmPasswordVisible(!confirmPasswordVisible)}}
                />
            </View>
            </View>
          )}
        />
        {errors.rePassword && (
          <Text style={{color: 'red', marginTop: 2}}>
            {errors.rePassword.message}
          </Text>
        )}
        <FullButton
          title={'Create Account'}
          backgroundColor={'#37A585'}
          titleColor={'#fff'}
          style={{marginTop: 20}}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 20,
        }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SignIn');
          }}>
          <Text style={{color: '#37A585'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default SignUp;

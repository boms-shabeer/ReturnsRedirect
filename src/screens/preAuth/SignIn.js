import React,{useState} from 'react';
import {
  SafeAreaView,
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
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const SignIn = props => {
  const [passwordVisible,setPasswordVisible]=useState(false)
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
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{padding: 20, flex: 1, marginTop: 60}}>
        <Text style={{fontSize: 38}}>Login</Text>
        <Text style={{fontSize: 14,marginTop:10}}>Login to Return Redirect</Text>
        <View style={{marginTop: 40}}>
          <LoginGoogle text={'Sign In with Google'} />
          <LoginApple style={{marginTop: 20}} text={'Sign In with Apple'} />
        </View>

        <Text style={{margin: 30, alignSelf: 'center', color: '#bababa'}}>
          Or
        </Text>

        <Controller
          {...register('email', {required: true})}
          control={control}
          name="email"
          render={({field: {onChange, value, onBlur}}) => (
            <>
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
                keyboardType="email-pad"
              />
            </>
          )}
        />
        {errors.email && (
          <Text style={{color: 'red', marginTop: 2}}>
            {errors.email.message}
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
                      padding: 10,
                      elevation: 2,
                      backgroundColor: '#F6F6F5',
                      flex:1,
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
        <FullButton
          title={'Sign In'}
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
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('ForgotPassword');
          }}>
        <Text>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}>
          <Text style={{color: '#37A585'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

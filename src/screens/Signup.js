import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Background from '../../assets/Background'
import Field from '../../assets/field'
import { Formik } from 'formik'
import * as Yup from 'yup'


const SignupSchema = Yup.object().shape({
  fname: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Please enter your full name'),
  lname: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Please enter your full name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email id'),
  mobile: Yup.string()
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .matches(/^[0-9]+$/, 'Must be digits only')
    .required('Please enter your mobile number'),
  password: Yup.string()
    .min(8)
    .required("Please enter your password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain minimum 8 characters,at least one upper case letter, one lower case letter,one number and one special chacter',
    ),
  confirm_password: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const SignUp = (props) => {
  const [myPassword, setMyPassword] = useState('');

  const navigation = useNavigation();
  return (
    <Background>

      <Formik initialValues={{
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        password: '',
        confirm_password: '',
      }}
        validationSchema={SignupSchema}
      >
        {({ values, errors, touched, handleChange, validateOnBlur, setFieldTouched, isValid, handleSubmit }) => (
          <View style={{ alignItems: 'center', width: 400 }}>
            <Text style={{ color: 'white', fontSize: 60, fontWeight: 'bold', marginVertical: 10 }}>Register</Text>
            <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 15 }}>Create a new account</Text>
            <View style={{
              backgroundColor: 'white',
              height: 700,
              width: '100%',
              borderTopLeftRadius: 150,
              alignItems: 'center',
              paddingTop: 50
            }}>

              <Field placeholder="First Name"
                value={values.fname}
                onChangeText={handleChange('fname')}
                autoCapitalize={false}
                onBlur={() => setFieldTouched('fname')}
              />
              {errors.fname && (<Text style={{ color: 'red' }}>{errors.fname}</Text>)}

              <Field placeholder="Last Name"
                value={values.lname}
                onChangeText={handleChange('lname')}
                onBlur={() => setFieldTouched('lname')}
                autoCapitalize={false}
              />
              {touched.lname && errors.lname && (<Text style={{ color: 'red' }}>{errors.lname}</Text>)}

              <Field placeholder="Email/UserName"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                autoCapitalize={false}
              />
              {touched.email && errors.email && (<Text style={{ color: 'red' }}>{errors.email}</Text>)}

              <Field placeholder="Contact Number"
                keyboardType='phone-pad'
                value={values.mobile}
                onChangeText={handleChange('mobile')}
                onBlur={() => setFieldTouched('mobile')}
              />
              {touched.mobile && errors.mobile && (<Text style={{ color: 'red' }}>{errors.mobile}</Text>)}


              <Field placeholder="Password" secureTextEntry={true}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                autoCapitalize={false}
              />
              {touched.password && errors.password && (<Text style={{ color: 'red' }}>{errors.password}</Text>)}

              <Field placeholder="Confirm Password" secureTextEntry={true}
                value={values.confirm_password}
                onChangeText={handleChange('confirm_password')}
                onBlur={() => setFieldTouched('confirm_password')}
                autoCapitalize={false}
              />
              {touched.confirm_password && errors.confirm_password && (<Text style={{ color: 'red' }}>{errors.confirm_password}</Text>)}

              <View style={{ display: 'flex', flexDirection: 'row', width: '65%', paddingRight: 10, marginBottom: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 14 }}>By signing in,you agree to our </Text>
                <Text style={{ color: 'darkgreen', fontWeight: 'bold', fontSize: 14 }}>Terms & Conditions and </Text>


              </View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '65%', paddingRight: 10, marginBottom: 30 }}>
                <Text style={{ color: 'darkgreen', fontWeight: 'bold', fontSize: 14 }}>Privacy Policy</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  alert("Account created Successfully") 
                  props.navigation.navigate("Login")
                } }
                disabled={!isValid}
                style={{
                  width: 300,
                  borderRadius: 100,
                  paddingVertical: 5,
                  marginVertical: 5,
                  alignItems: 'center',
                  backgroundColor : isValid ? 'darkgreen' : 'lightgreen'
                }}

              >
                <Text style={{fontSize:25,fontWeight:'bold', color:'white'}}>SignUp</Text>
              </TouchableOpacity>


              <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                  Already have an account ?
                </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                  <Text style={{ color: 'darkgreen', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                </TouchableOpacity>


              </View>



            </View>
          </View>

        )}

      </Formik>

    </Background>

  )
}

export default SignUp
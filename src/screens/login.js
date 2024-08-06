import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Background from '../../assets/Background'
import Btn from '../../assets/Btn'
import Field from '../../assets/field'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .min(5, 'Please enter valid email id or UserName')
    .required('Please enter your email id or UserName'),
  password: Yup.string()
    .min(8, "Invalid Password")
    .required("Invalid Password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Invalid Password',
    ),

});

const Login = (props) => {
  const navigation = useNavigation();
  return (
    <Background>
      <Formik initialValues={{
        email: '',
        password: '',
      }}
        validationSchema={LoginSchema}
      >
        {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (
          <View style={{ alignItems: 'center', width: 400 }}>
            <Text style={{ color: 'white', fontSize: 60, fontWeight: 'bold', marginVertical: 10 }}>Login</Text>
            <View style={{
              backgroundColor: 'white',
              height: 700,
              width: '100%',
              borderTopLeftRadius: 150,
              alignItems: 'center',
              paddingTop: 150
            }}>
              <Text style={{ fontSize: 30, color: 'darkgreen', fontWeight: 'bold' }}>Welcome Back</Text>
              <Text style={{ fontSize: 19, color: 'grey', fontWeight: 'bold', marginBottom: 20 }}>Login to your account</Text>

              <Field placeholder="Email/UserName" keyboardType={"email-address"}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                autoFocus={true}
              />
              {touched.email && errors.email && (<Text style={{ color: 'red', backgroundColor: 'white' }}>{errors.email}</Text>)}


              <Field placeholder="Password" secureTextEntry={true}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                autoCapitalize={false}
              />
              {touched.password && errors.password && (<Text style={{ color: 'red' }}>{errors.password}</Text>)}


              <View style={{ alignItems: 'flex-end', width: '65%', paddingRight: 10, marginBottom: 150 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("ForgotPassword")}>
                  <Text style={{ color: 'darkgreen', fontWeight: 'bold', fontSize: 16 }}>Forgot Password ?</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                onPress={ () => 
                  {
                    if(values.email==='' && values.password==='')
                      {
                        alert("UserName/Email or Password should not be blank")
                      }
                      else
                      {
                        props.navigation.navigate("Home")
                      }
                  }
                } 
                  disabled={!isValid}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: isValid && values.email!='' && values.password!='' ? 'darkgreen' : 'lightgreen',
                    width: 300,
                    borderRadius: 100,
                    paddingVertical: 5,
                    marginVertical: 5,
                    marginHorizontal: 10,
                    height: 40
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
                </TouchableOpacity>
              </View>


              <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                  Don't have an account ?
                </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
                  <Text style={{ color: 'darkgreen', fontWeight: 'bold', fontSize: 16 }}>SignUp</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        )}

      </Formik>
    </Background>

  )
}

export default Login
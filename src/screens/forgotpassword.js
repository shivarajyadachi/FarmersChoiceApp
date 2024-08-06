import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Background from '../../assets/Background'
import Field from '../../assets/field'
import Btn from '../../assets/Btn'
import { Formik } from 'formik'
import * as Yup from 'yup'



const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .min(5, 'Please enter valid email id')
        .required('Please enter your email id'),
    mobile: Yup.string()
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits')
        .matches(/^[0-9]+$/, 'Must be digits only')
        .required('Please enter your mobile number'),

});

const ForgotPassword = (props) => {
    const [otpMessage, setOtpMessage] = useState(false)
    return (
        <Background>
            <Formik
                initialValues={{
                    email: '',
                    mobile: '',
                }}
                validationSchema={SignupSchema}
            >
                {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (

                    <View style={{ flex: 1, marginTop: 200, width: '100%', marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 15, backgroundColor: 'grey', fontWeight: 'bold' }}>Note:Please keep your mobile with you before sending OTP</Text>

                        <Field placeholder="Enter your UserName or Email-id"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                        />
                        {touched.email && errors.email && (<Text style={{ color: 'red', backgroundColor: 'white' }}>{errors.email}</Text>)}

                        <Field placeholder="Enter your Mobile Number"
                            keyboardType='phone-pad'
                            value={values.mobile}
                            onChangeText={handleChange('mobile')}
                            onBlur={() => setFieldTouched('mobile')}
                        />
                        {touched.mobile && errors.mobile && (<Text style={{ color: 'red', backgroundColor: 'white' }}>{errors.mobile}</Text>)}


                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Btn bgcolor='darkgreen' textcolor='white' btnlabel="Back" btnwidth={150} press={() => props.navigation.navigate("Landing")} />


                            <TouchableOpacity
                                onPress={() => {
                                    if (isValid && values.email != '') {
                                        setOtpMessage(true)
                                    } else {

                                        alert("Please enter valid email and mobile number to get OTP")
                                    }
                                }}
                                disabled={!isValid}
                                style={{
                                    borderRadius: 100, width: 150,
                                    backgroundColor: isValid && values.email != '' ? 'darkgreen' : 'lightgreen',
                                    paddingVertical: 5, marginVertical: 5, marginHorizontal: 10, alignItems: 'center'
                                }}

                            >
                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Get OTP</Text>
                            </TouchableOpacity>

                        </View>
                        {
                            otpMessage ?
                                <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 15, backgroundColor: 'grey', fontWeight: 'bold' }}>Please enter the OTP</Text>

                                    <Field placeholder="OTP" keyboardType='numeric'
                                        maxLength={6}
                                    />
                                    <Btn bgcolor='darkgreen' textcolor='white' btnlabel="Reset" btnwidth={150} press={() => props.navigation.navigate("NewPassword")} />
                                </View>
                                : null
                        }


                    </View>
                )}

            </Formik>


        </Background>

    )
}

export default ForgotPassword
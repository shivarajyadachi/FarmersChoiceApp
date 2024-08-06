import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Background from '../../assets/Background'
import Field from '../../assets/field'
import { Formik } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Please enter your password")
        .required("Please enter your password")
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            'Must contain minimum 8 characters,at least one upper case letter, one lower case letter,one number and one special chacter',
        ),
    confirm_password: Yup.string()
        .label('confirm password')
        .required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

class BlinkText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showText: true
        }
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText }
            })

        }, 500)
    }
    render() {
        const { textData } = this.props
        const { showText } = this.state
        return (
            <Text>{showText ? textData : ""}</Text>
        )
    }

}


const NewPassword = (props) => {
    const [dispMessage, setdisMessage] = useState(false)

    return (
        <Background>
            <Formik
                initialValues={{
                    password: '',
                    confirm_password: ''
                }}
                validationSchema={SignupSchema}
            >
                {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (
                    <View style={{ backgroundColor: 'white', width: 400, justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>

                        <Field placeholder="Enter your new Password" secureTextEntry={true}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={() => setFieldTouched('password')}
                            autoCapitalize={false}
                            autoFocus={true}

                        />
                        {touched.password && errors.password && (<Text style={{ color: 'red' }}>{errors.password}</Text>)}

                        <Field placeholder="Re-enter your new Password" secureTextEntry={true}
                            value={values.confirm_password}
                            onChangeText={handleChange('confirm_password')}
                            onBlur={() => setFieldTouched('confirm_password')}
                            autoCapitalize={false}
                        />
                        {touched.confirm_password && errors.confirm_password && (<Text style={{ color: 'red' }}>{errors.confirm_password}</Text>)}
                        <View style={{display:'flex', flexDirection:'row',}}>
                            
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("ForgotPassword")
                            }
                            style={{
                                width: 100,
                                marginRight:50,
                                borderRadius: 100,
                                paddingVertical: 5,
                                marginVertical: 5,
                                alignItems: 'center',
                                backgroundColor: 'darkgreen'
                            }}
                        >
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                if (values.password) {
                                    setdisMessage(true)
                                } else {
                                    alert("please enter the password")
                                }
                            }
                            }

                            disabled={!isValid}

                            style={{
                                width: 100,
                                borderRadius: 100,
                                paddingVertical: 5,
                                marginVertical: 5,
                                alignItems: 'center',
                                backgroundColor: isValid && values.password!='' ? 'darkgreen' : 'lightgreen'
                            }}
                        >
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Submit</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

                )}
            </Formik>

            {
                dispMessage ?
                    <View style={{ backgroundColor: 'white', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>

                        <BlinkText textData={<Text style={{ color: 'darkgreen', fontSize: 16, fontWeight: 'bold' }}>
                            Password changed successfully</Text>} />
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                                <Text style={{ color: "blue", fontSize: 16, fontWeight: 'bold', fontStyle: 'italic', textDecorationLine: 'underline' }}>
                                    ClickHere</Text>
                            </TouchableOpacity>
                            <Text style={{ color: "black", fontSize: 16, fontWeight: '400' }}> to login</Text>
                        </View>

                    </View> : null
            }



        </Background>

    )
}

export default NewPassword
import { View, Text, ScrollView,Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'


interface FormState {
  name: string;
  email: string;
  password: string;
}
const SignUp = () => {
   const [form,setForm] = useState<FormState>({
    name:'',
    email:'',
    password:''
   })
  
  const onSignupPress =async()=>{

  }

  return (
    <ScrollView className="flex-1 bg-white ">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label={"Name"}
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(text: string) => setForm({ ...form, name: text })}
          />
          <InputField
            label={"Email"}
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(text: string) => setForm({ ...form, email: text })}
          />

          <InputField
            label={"Password"}
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(text: string) => setForm({ ...form, password: text })}
            secureTextEntry={true}
          />

          <CustomButton title='Sign Up' onPress={onSignupPress} className='mt-6'/>

          {/* OAuth */}
          <Link href="/sign-in" className='text-lg text-center text-general-200 mt-10'>
          <Text>Already have an account?</Text>
          <Text className='text-primary-500'>Log In</Text>
          
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUp
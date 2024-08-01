import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react'; // Thêm useState
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/LoginStyles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Thực hiện logic đăng nhập ở đây
    console.log('Username:', username);
    console.log('Password:', password);
    // Ví dụ: gọi API để đăng nhập, điều hướng đến màn hình chính
  };

  const handleForgotPassword = () => {
    // Thực hiện logic quên mật khẩu ở đây
    console.log('Forgot password clicked');
    // Ví dụ: điều hướng đến màn hình quên mật khẩu
  };

  const handleNavigateToSignup = () => {
    navigation.navigate('Signup'); // Điều hướng tới trang đăng ký
  };

  return (
    <View style={styles.login}>
      <Text style={[styles.hello, styles.helloTypo]}>Hello</Text>
      <Text style={[styles.signInTo, styles.helloTypo]}>
        Sign in to your account
      </Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={styles.profileIcon}
          resizeMode="cover"
          source={require("../assets/profile.png")}
        />
        <TextInput
          style={[styles.username, styles.usernameTypo]}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <TextInput
          style={[styles.password, styles.usernameTypo]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={[styles.forgotYourPassword, styles.signInTypo]}>
          Forgot your password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigateToSignup}>
        <Text style={[styles.dontHaveAnContainer, styles.forgotYourPasswordTypo]}>
          Don’t have an account?{" "}
          <Text style={styles.create}>Create</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.groupParent, styles.groupLayout]}>
        <View style={styles.signPosition}>
          <Text style={[styles.signIn, styles.signPosition]}>Sign in</Text>
        </View>
        <LinearGradient
          style={[styles.groupInner, styles.groupLayout]}
          locations={[0, 1]}
          colors={["#f97794", "#623aa2"]}
        />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.loginChild}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={styles.loginItem}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
    </View>
  );
};




export default Login;

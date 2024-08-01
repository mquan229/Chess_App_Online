import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react'; // Thêm useState
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../components/GlobalStyles';


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

const styles = StyleSheet.create({
  helloTypo: {
    width: 203,
    textAlign: "center",
    color: Color.colorGray,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  rectangleLayout: {
    height: 50,
    width: 300,
    left: 43,
    position: "absolute",
  },
  usernameTypo: {
    width: 115,
    color: Color.colorSilver_100,
    top: 16,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signInTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  forgotYourPasswordTypo: {
    fontSize: FontSize.size_mini,
    height: 24,
    position: "absolute",
  },
  groupLayout: {
    height: 34,
    position: "absolute",
  },
  signPosition: {
    width: 88,
    height: 34,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello: {
    top: 144,
    left: 92,
    fontSize: 64,
    height: 83,
    fontWeight: "700",
    width: 203,
  },
  signInTo: {
    top: 246,
    left: 91,
    fontSize: 18,
    height: 26,
  },
  groupShadowBox: {
    borderRadius: Border.br_21xl,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: 0,
    top: 0,
    height: 50,
    width: 300,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  profileIcon: {
    top: 13,
    left: 14,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  username: {
    left: 45,
    height: 18,
  },
  rectangleParent: {
    top: 313,
  },
  vectorIcon: {
    height: "34%",
    width: "6%",
    top: "32%",
    right: "88.33%",
    bottom: "34%",
    left: "5.67%",
  },
  password: {
    left: 47,
    height: 17,
  },
  rectangleGroup: {
    top: 404,
  },
  forgotYourPassword: {
    top: 488,
    left: 191,
    color: "#bebebe",
    width: 200,
    fontSize: FontSize.size_mini,
    height: 24,
    position: "absolute",
    
  },
  create: {
    textDecorationLine: "underline",
  },
  dontHaveAnContainer: {
    top: 651,
    left: 89,
    width: 209,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_mini,
    color: Color.colorGray,
  },
  signIn: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    color: Color.colorGray,
    width: 88,
    fontWeight: "700",
  },
  groupInner: {
    left: 88,
    borderRadius: Border.br_mid,
    width: 56,
    backgroundColor: "transparent",
    top: 0,
  },
  vectorIcon1: {
    height: "79.41%",
    width: "19.44%",
    top: "8.82%",
    right: "9.72%",
    bottom: "11.76%",
    left: "70.83%",
  },
  groupParent: {
    top: 565,
    left: 196,
    width: 144,
  },
  loginChild: {
    left: -1,
    width: 391,
    height: 119,
    top: 0,
    position: "absolute",
  },
  loginItem: {
    top: 574,
    left: -275,
    width: 369,
    height: 305,
    position: "absolute",
    
  },
  login: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Login;

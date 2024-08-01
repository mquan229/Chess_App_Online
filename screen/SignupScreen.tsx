import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const navigation = useNavigation();

  const handleSignup = () => {
    // Thực hiện logic đăng nhập ở đây
    console.log('Username:', username);
    console.log('Password:', password);
    // Ví dụ: gọi API để đăng nhập, điều hướng đến màn hình chính
  };
  const handleBacktoLogin = () => {
    navigation.navigate('Login'); // Điều hướng tới trang đăng ký
  };

  return (
    <View style={styles.signup}>
      <TouchableOpacity onPress={handleBacktoLogin}
      style={styles.backIcon}
      >
      <Ionicons 
      name="arrow-back-circle-outline" size={40} color="black" />
      </TouchableOpacity>
      <Text style={styles.createAccount}>Create account</Text>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <View style={[styles.profileParent, styles.profileLayout]}>
          <Image
            style={[styles.profileIcon, styles.profileLayout]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
          <TextInput
          style={[styles.username, styles.usernameTypo]}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <TextInput
          style={[styles.password, styles.usernameTypo]}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.emailIcon, styles.emailIconPosition]}
          contentFit="cover"
          source={require("../assets/email.png")}
        />
        <TextInput
        style={[styles.password, styles.usernameTypo]}
        placeholder="E-Mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <TextInput
        style={[styles.password, styles.usernameTypo]}
        placeholder="Mobile"
        value={mobile}
        onChangeText={(text) => setMobile(text)}
        />
        <View style={[styles.groupChild1, styles.emailIconPosition]} />
      </View>
      <Text style={styles.orCreateAccount}>
        Or create account using social media
      </Text>
      <TouchableOpacity>
      <Text style={styles.create}>Create</Text>
      {/* //them logic dang ky luu thong tin da dang ky vao csdl */}
      <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.rectangleLayout]}
          locations={[0, 1]}
          colors={["#f97794", "#623aa2"]}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      </TouchableOpacity>
      <Image
        style={styles.signupChild}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={styles.signupItem}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={styles.signupInner} />
      <View style={[styles.facebookParent, styles.facebookLayout]}>
        <Image
          style={[styles.facebookIcon, styles.facebookLayout]}
          contentFit="cover"
          source={require("../assets/facebook.png")}
        />
        <Image
          style={[styles.twitterIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/twitter.png")}
        />
        <Image
          style={[styles.googleIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/google.png")}
        />
      </View>
      <Image
        style={styles.signupChild1}
        contentFit="cover"
        source={require("../assets/vector-21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 50,
    width: 300,
    left: 45,
    position: "absolute",
  },
  profileLayout: {
    height: 24,
    position: "absolute",
  },
  usernameTypo: {
    width: 115,
    textAlign: "left",
    color: Color.colorSilver_100,
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
  emailIconPosition: {
    width: 14,
    left: 18,
    position: "absolute",
  },
  rectangleLayout: {
    width: 56,
    height: 34,
    position: "absolute",
  },
  facebookLayout: {
    height: 35,
    position: "absolute",
  },
  iconPosition: {
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  createAccount: {
    top: 166,
    left: 92,
    fontSize: 30,
    width: 206,
    height: 41,
    textAlign: "center",
    color: Color.colorGray,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
    position: "absolute",
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
  backIcon: {
    position: 'absolute',
    zIndex: 10, 
    top: 70,
    left: 20,
    
},
  profileIcon: {
    width: 24,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  username: {
    top: 3,
    left: 27,
    height: 18,
  },
  profileParent: {
    top: 13,
    left: 14,
    width: 143,
  },
  rectangleParent: {
    top: 249,
  },
  vectorIcon: {
    height: "35%",
    width: "4.67%",
    top: "28%",
    right: "89.33%",
    bottom: "37%",
    left: "6%",
  },
  password: {
    top: 14,
    height: 17,
    left: 45,
    width: 115,
    textAlign: "left",
    color: Color.colorSilver_100,
  },
  rectangleGroup: {
    top: 341,
  },
  emailIcon: {
    top: 19,
    height: 11,
    overflow: "hidden",
  },
  rectangleContainer: {
    top: 433,
  },
  groupChild1: {
    top: 15,
    borderRadius: 3,
    backgroundColor: "#9a9a9a",
    height: 20,
  },
  groupView: {
    top: 525,
  },
  orCreateAccount: {
    top: 700,
    left: 68,
    width: 254,
    fontSize: FontSize.size_mini,
    height: 24,
    textAlign: "center",
    color: Color.colorGray,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  create: {
    left: 201,
    fontSize: FontSize.size_6xl,
    width: 88,
    height: 34,
    top: 627,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleLineargradient: {
    borderRadius: Border.br_mid,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  vectorIcon1: {
    height: "52.94%",
    width: "32.14%",
    top: "23.53%",
    right: "33.93%",
    bottom: "23.53%",
    left: "33.93%",
  },
  rectangleParent1: {
    left: 289,
    top: 627,
    width: 56,
  },
  signupChild: {
    left: -203,
    width: 391,
    height: 119,
    top: 0,
    position: "absolute",
  },
  signupItem: {
    top: 556,
    left: 69,
    width: 2,
    height: 2,
    position: "absolute",
  },
  signupInner: {
    top: 542,
    left: 65,
    borderRadius: 1,
    width: 10,
    height: 12,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  facebookIcon: {
    width: 35,
    left: 0,
    top: 0,
  },
  twitterIcon: {
    height: "99.72%",
    width: "23.18%",
    right: "40.4%",
    bottom: "0.28%",
    left: "36.42%",
  },
  googleIcon: {
    height: "100%",
    width: "23.25%",
    right: "3.91%",
    bottom: "0%",
    left: "72.85%",
  },
  facebookParent: {
    top: 736,
    left: 119,
    width: 151,
  },
  signupChild1: {
    top: 599,
    left: -267,
    width: 415,
    height: 363,
    position: "absolute",
  },
  signup: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Signup;

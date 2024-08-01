import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from '../styles/SignupStyles';

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



export default Signup;

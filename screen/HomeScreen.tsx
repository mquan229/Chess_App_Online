import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [rooms, setRooms] = useState([
    { id: 1, name: 'Phòng 1', players: 2, difficulty: 'Dễ' },
    { id: 2, name: 'Phòng 2', players: 1, difficulty: 'Trung bình' },
    // ... thêm các phòng khác
  ]);

  // const handleCreateRoom = () => {
  //   // Điều hướng đến màn hình tạo phòng
  //   navigation.navigate('CreateRoom');
  // };

  // const handleJoinRoom = (roomId) => {
  //   // Điều hướng đến màn hình chơi
  //   navigation.navigate('GameScreen', { roomId });
  // };

  // const renderItem = ({ item }) => (
  //   <TouchableOpacity onPress={() => handleJoinRoom(item.id)}>
  //     <View style={styles.roomItem}>
  //       <Text style={styles.roomName}>{item.name}</Text>
  //       <Text style={styles.roomInfo}>
  //         {item.players} người chơi - {item.difficulty}
  //       </Text>
  //     </View>
  //   </TouchableOpacity>
  // );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Phòng chơi</Text>
      <FlatList
        data={rooms}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.createRoomButton} onPress={handleCreateRoom}>
        <AntDesign name="pluscircle" size={24} color="black" />
        <Text style={styles.buttonText}>Tạo phòng mới</Text>
      </TouchableOpacity> */}

      <Text>asdasdhbasjd</Text>
    </View>
  );
};


const styles=StyleSheet.create({
  container:{
    flex:1,
    
  },

}
)


export default HomeScreen;

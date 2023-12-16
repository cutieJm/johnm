import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, ScrollView, Button } from 'react-native';
import { styles } from './assets/style';

const userDataWithImages = [
  {
    firstName: 'Jess',
    lastName: 'Jumawan',
    nickname: 'agaw',
    course: 'BSIT',
    year: 'Third Year',
    
  },
  {
    firstName: 'Junrey',
    lastName: 'Genzon',
    nickname: 'lover boy',
    course: 'BSIT',
    year: 'Third Year',
     
  },
  {
    firstName: 'Jovert',
    lastName: 'Davirao',
    nickname: 'Berting',
    course: 'BSIT',
    year: 'Third Year',
    
  },
  {
    firstName: 'John Mark',
    lastName: 'Lagrimas',
    nickname: 'Marky',
    course: 'BSIT',
    year: 'Third Year',
    
  },
  {
    firstName: 'James',
    lastName: 'Noble',
    nickname: 'Jamis',
    course: 'BSIT',
    year: 'Third Year',
    
  },
  {
    firstName: 'John Carlo',
    lastName: 'Razon',
    nickname: 'varsity',
    course: 'BSIT',
    year: 'Third Year',
    
  },
  {
    firstName: 'Aldwin',
    lastName: 'Handumon',
    nickname: 'Kol',
    course: 'BSIT',
    year: 'Third Year',
    
  },
  {
    firstName: 'Rodel Glenn',
    lastName: 'Jawa',
    nickname: 'Delro',
    course: 'BSIT',
    year: 'Third Year',
    
  },
];

const UserList = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedUser(item);
      setModalVisible(true);
    }}>
      <Text style={styles.nickname}>{item.nickname}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <Text style={styles.pt}>Choose your Pokemon</Text>
      <FlatList
        data={userDataWithImages}
        keyExtractor={(item) => item.nickname}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          {selectedUser && (
            <ScrollView>
              <Text style={styles.fullName}>
                {selectedUser.firstName} {selectedUser.lastName}
              </Text>
              <Text>Nickname: {selectedUser.nickname}</Text>
              <Text>Course: {selectedUser.course}</Text>
              <Text>Year: {selectedUser.year}</Text>
              {selectedUser.image && <Image source={selectedUser.image} style={{ width: 200, height: 200 }} />}
              <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
            </ScrollView>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default UserList;
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RootStackParamList, User} from '../../types';
import {createBackground, updateName} from '../../utils/helper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../utils/constants';

type NavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const UserCard = ({item}: {item: User}) => {
  const navigation: NavigationType = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(screens.DetailScreen, {id: item.id})}>
      <View style={styles.user}>
        <View style={styles.imageContainer}>
          <Text style={styles.imageText}>
            {updateName(item.name, item.surname)}
          </Text>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.text}>
            {item.name} {item.surname}
          </Text>
          <Text style={styles.text}>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  imageContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#00acff',
  },

  imageText: {
    fontSize: 20,
    fontWeight: '400',
    textTransform: 'uppercase',
    color: 'white',
  },

  userInfo: {
    gap: 5,
  },

  text: {
    fontWeight: '500',
    fontSize: 15,
  },
});

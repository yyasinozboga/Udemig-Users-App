import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {getAllUsers} from '../../redux/actions';
import {RootStackParamList, UsersStore} from '../../types';
import UserCard from '../../components/userCard';
import {Add} from 'iconsax-react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screens} from '../../utils/constants';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {isLoading, error, users} = useSelector(
    (store: UsersStore) => store.users,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white', position: 'relative'}}>
      <FlatList
        data={users}
        renderItem={({item}) => <UserCard item={item} />}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate(screens.AddUserScreen)}>
        <Add size="40" color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: 'green',
    height: 70,
    width: 70,
    borderRadius: 50,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

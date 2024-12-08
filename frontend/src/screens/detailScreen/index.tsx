import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, UserStore} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {deleteUser, getUser} from '../../redux/actions';
import {updateName} from '../../utils/helper';
import {Calendar, Call, Man, Sms, Woman} from 'iconsax-react-native';
import {screens} from '../../utils/constants';

type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailScreen'
>;

const DetailScreen: React.FC<DetailScreenProps> = ({route, navigation}) => {
  const {id} = route.params;
  const {isLoading, error, user} = useSelector(
    (store: UserStore) => store.user,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  const handleClick = () => {
    dispatch(deleteUser(id));
    navigation.goBack();
  };

  const details = [
    {icon: <Sms size="25" color="black" />, value: user?.email},
    {icon: <Call size="25" color="black" />, value: user?.phone},
    {
      icon:
        user?.gender === 'Male' ? (
          <Man size="25" color="black" />
        ) : (
          <Woman size="25" color="black" />
        ),
      value: user?.gender,
    },
    {icon: <Calendar size="25" color="black" />, value: user?.age},
  ];

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error!</Text>
      ) : (
        user && (
          <>
            <View style={styles.header}>
              <View style={styles.imageContainer}>
                <Text style={styles.imageText}>
                  {updateName(user.name, user.surname)}
                </Text>
              </View>

              <Text style={styles.name}>
                {user.name} {user.surname}
              </Text>
            </View>

            <View style={styles.userInfo}>
              {details.map((detail, key) => (
                <View key={key} style={styles.userInfoItem}>
                  {detail.icon}
                  <Text style={styles.text}>{detail.value}</Text>
                </View>
              ))}
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: 'tomato'}]}
                onPress={handleClick}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, {backgroundColor: 'purple'}]}
                onPress={() =>
                  navigation.navigate(screens.AddUserScreen, {info: user})
                }>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
            </View>
          </>
        )
      )}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flex: 1,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    gap: 5,
  },

  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#00acff',
  },

  imageText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },

  name: {
    fontWeight: '600',
    fontSize: 18,
  },

  userInfo: {
    gap: 30,
    paddingVertical: 10,
  },

  userInfoItem: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  text: {
    fontWeight: '500',
    fontSize: 16,
  },

  buttonContainer: {
    gap: 15,
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 10,
  },

  button: {
    padding: 18,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 15,
  },
});

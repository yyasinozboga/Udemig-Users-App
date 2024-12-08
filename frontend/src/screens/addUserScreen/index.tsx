import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import Input from '../../components/input';
import schema from '../../schemas';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {addUser, updateUser} from '../../redux/actions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import {setUser} from '../../redux/slices/getUserSlice';
import {useFocusEffect} from '@react-navigation/native';

interface FormikType {
  name: string;
  surname: string;
  email: string;
  phone: string;
  gender: string;
  age: string;
}

type AddUserScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AddUserScreen'
>;

const AddUserScreen: React.FC<AddUserScreenProps> = ({navigation, route}) => {
  const dispatch = useDispatch<AppDispatch>();
  const info = route.params?.info;
  const initialValues: FormikType = {
    name: info?.name ? info?.name : '',
    surname: info?.surname ? info?.surname : '',
    email: info?.email ? info?.email : '',
    phone: info?.phone ? info?.phone : '',
    gender: info?.gender ? info?.gender : '',
    age: info?.age ? info?.age : '',
  };

  const handleClick = async (values: any) => {
    if (!info) {
      dispatch(addUser(values));
    } else {
      const newUser = {...values, id: info.id};
      await dispatch(updateUser(newUser)).unwrap();
      dispatch(setUser(newUser));
    }
    navigation.goBack();
  };

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerTitle: info ? 'Update User' : 'Add New User',
      });
    }, []),
  );

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={values => handleClick(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.form}>
            <Input
              value={values.name}
              label="Name"
              change={handleChange('name')}
              error={errors.name}
              blur={handleBlur('name')}
              touched={touched.name}
            />
            <Input
              value={values.surname}
              label="Surname"
              change={handleChange('surname')}
              error={errors.surname}
              blur={handleBlur('surname')}
              touched={touched.surname}
            />
            <Input
              value={values.phone}
              label="Phone Number"
              change={handleChange('phone')}
              error={errors.phone}
              blur={handleBlur('phone')}
              touched={touched.phone}
            />
            <Input
              value={values.email}
              label="E-mail"
              change={handleChange('email')}
              error={errors.email}
              blur={handleBlur('email')}
              touched={touched.email}
            />
            <Input
              value={values.gender}
              label="Gender"
              change={handleChange('gender')}
              error={errors.gender}
              blur={handleBlur('gender')}
              touched={touched.gender}
            />
            <Input
              value={values.age}
              label="Age"
              change={handleChange('age')}
              error={errors.age}
              blur={handleBlur('age')}
              touched={touched.age}
            />
            <TouchableOpacity
              onPress={handleSubmit as (values: any) => void}
              style={styles.button}>
              <Text style={styles.buttonText}>{info ? 'Update' : 'Send'}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddUserScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },

  form: {
    gap: 20,
  },

  button: {
    padding: 15,
    backgroundColor: '#2ccce4',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});

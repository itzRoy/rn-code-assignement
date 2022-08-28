import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import InputWitchIcon from '../../components/atoms/inputWithIcon/inputWithIcon';
import PrimaryButton from '../../components/atoms/primaryButton/primaryButton';
import styles from './styles';
import { login } from '../../store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { loading, error, accessToken } = user;
  const [hidePass, setHidePass] = useState(true);
  const [errMsg, setErrMsg] = useState('');
  const [username, setUsername] = useState('candidate');
  const [password, setPassword] = useState('P@ssw0rd');

  useEffect(() => {
    if (accessToken) navigation.replace('dashboard');
  }, [accessToken]);

  const setPassState = type => () =>
    type === 'password' ? setHidePass(prev => !prev) : null;

  const hadnleEmailChange = () => value => setUsername(value);
  const hadnlePassChange = () => value => setPassword(value);

  const handleSubmit = useCallback(() => {
    setErrMsg(null);
    if (!username) {
      return setErrMsg('*username is required');
    }

    if (!password) {
      return setErrMsg('*password is required');
    }

    dispatch(login({ username, password }));
  }, [dispatch, username, password]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Login</Text>
      <InputWitchIcon
        hidePass={hidePass}
        setPassState={setPassState}
        inputValue={username}
        handleInputChange={hadnleEmailChange}
        type="username"
      />

      <InputWitchIcon
        hidePass={hidePass}
        setPassState={setPassState}
        inputValue={password}
        handleInputChange={hadnlePassChange}
        type="password"
      />
      <Text style={styles.msgText}>{errMsg || error}</Text>
      <PrimaryButton onPressHandler={handleSubmit} loading={loading} disabled={!username || !password} />
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Login;

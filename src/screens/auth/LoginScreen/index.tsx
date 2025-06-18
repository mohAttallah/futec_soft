import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import AnimatedMessage from '../../../components/common/AnimatedMessage';
import { useLoginMutation } from '../../../store/appApi';
import { validateLoginForm } from '../../../utils/validation';
import styles from './style';

interface MessageState {
  visible: boolean;
  message: string;
  type: 'error' | 'success' | 'warning';
}

const LoginScreen: React.FC = () => {
  const [login, { isLoading }] = useLoginMutation();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [messageState, setMessageState] = useState<MessageState>({
    visible: false,
    message: '',
    type: 'error',
  });

  const showMessage = (message: string, type: 'error' | 'success' | 'warning' = 'error') => {
    setMessageState({
      visible: true,
      message,
      type,
    });
  };

  const hideMessage = () => {
    setMessageState(prev => ({ ...prev, visible: false }));
  };

  const handleLogin = async (): Promise<void> => {
    hideMessage();

    const validation = validateLoginForm(username, password);
    if (!validation.isValid) {
      showMessage(validation.errors[0], 'error');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('UserName', username.trim());
      formData.append('Password', password);

      const result = await login(formData).unwrap();

      if (result.Success) {
        showMessage("Login successful", 'success');
      } else {
        const errorMessage = result.ErrorMessage || 'Login failed';
        showMessage(errorMessage, 'error');
      }
    } catch (loginError: any) {
      const errorMessage = loginError?.data?.ErrorMessage || 'Login failed';
      showMessage(errorMessage, 'error');
    }
  };


  return (
    <ImageBackground
      source={require('../../../assets/images/login-bacground.webp')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <AnimatedMessage
          message={messageState.message}
          type={messageState.type}
          visible={messageState.visible}
          onHide={hideMessage}
          duration={4000}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.content}>
              <View style={styles.logoSection}>
                <Text style={styles.logoText}>FUTEC-SOFT © 2024</Text>
              </View>

              <View style={styles.formSection}>
                <View style={styles.formContainer}>
                  <Text style={styles.title}>Login</Text>
                  <Text style={styles.subtitle}>
                    Please enter your credentials
                  </Text>

                  <View style={styles.form}>
                    <Input
                      placeholder="Username"
                      value={username}
                      onChangeText={setUsername}
                      autoCapitalize="none"
                      containerStyle={styles.inputContainer}
                      editable={!isLoading}
                    />

                    <Input
                      placeholder="Password"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      containerStyle={styles.inputContainer}
                      editable={!isLoading}
                    />

                    <Button
                      title="Login"
                      onPress={handleLogin}
                      loading={isLoading}
                      style={styles.loginButton}
                      disabled={isLoading}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

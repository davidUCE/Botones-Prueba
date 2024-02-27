// frontend/App.js
import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://192.168.1.4:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: 'soriamayerli@gmail.com',
          subject: 'Hola...',
          text: 'Holaaaaaaa maaay'
        })
      });
      const data = await response.text();
      Alert.alert('Resultado', data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un error al enviar el correo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Enviar Correo" onPress={handleSendEmail} disabled={loading} />
    </View>
  );
};

import React from 'react';
import { Button, View } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

export default function App() {
  const recipientEmail = 'davidlee9613@gmail.com';
  const emailSubject = 'Hola';
  const emailBody = 'Hola si valio...';

  const handleEmail = () => {
    MailComposer.composeAsync({
      recipients: [recipientEmail],
      subject: emailSubject,
      body: emailBody,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Enviar correo" onPress={handleEmail} />
    </View>
  );
}

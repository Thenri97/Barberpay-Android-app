import React from 'react';
import { Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Index() {
  return (
    <View style={{ flex: 1, paddingTop: '10%' }}>
      {Platform.OS === 'web' ? (
        <iframe
          src="https://barberpay.online"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Barberpay"
        />
      ) : (
        <WebView
          source={{ uri: 'https://barberpay.online' }}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
}

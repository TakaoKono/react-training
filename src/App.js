import React from 'react';
import { View, WebView } from 'react-native';  
  
const GoogleSlidesViewer = () => {  
  const url = 'https://docs.google.com/presentation/d/1-0BpAyuVaGfn5Ob5BwtAvEjg9zIGyTSTmhbo3s0G_GE/edit?usp=drive_link/embed?rm=minimal&hideBorder=true';  
  
  return (  
    <View style={{ flex: 1 }}>  
      <WebView source={{ uri: url }} />  
    </View>  
  );  
};  
  
export default GoogleSlidesViewer;  
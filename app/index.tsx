import { ThemedText } from '@/components/ThemedText';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import {View, Text, Button} from 'react-native';





const PushApp = () => {
    const {} = usePushNotifications();
  return (
    <View style={{marginHorizontal: 10, marginTop: 5}}>
      <ThemedText>Token:</ThemedText>
    </View>
  );
}

export default PushApp;
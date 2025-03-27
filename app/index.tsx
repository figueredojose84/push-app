import { ThemedText } from '@/components/ThemedText';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import {View, FlatList} from 'react-native';





const PushApp = () => {
    const {expoPushToken, notifications} = usePushNotifications();
  return (
    <View style={{marginHorizontal: 10, marginTop: 5}}>
      <ThemedText style={{marginTop: 10, fontWeight: 'bold', fontSize: 25}}>Notification: {expoPushToken}</ThemedText>
      <FlatList
        data={notifications}
        keyExtractor={ (item) => item.request.identifier}
        renderItem= {({item}) => (
            <View>
                <ThemedText>{item.request.content.title}</ThemedText>
                <ThemedText>{item.request.content.body}</ThemedText>
                <ThemedText>{JSON.stringify(item.request.content.data)}</ThemedText>
            </View>
        )
        }
        />
    </View>
  );
}

export default PushApp;
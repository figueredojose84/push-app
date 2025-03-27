import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router';
import {View, Text } from 'react-native';

const {id} = useLocalSearchParams();

const ChatIdScreen = () => {
    return (
        <View style={{marginHorizontal: 10}}>
            <ThemedText style={{fontSize: 25, marginBottom: 10}}>Push Information</ThemedText>
            <ThemedText style={{fontSize: 25, marginBottom: 10}}>ChatId {id}</ThemedText>
        </View>
    );
 }
export default ChatIdScreen;    
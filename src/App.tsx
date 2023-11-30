import { Tab } from "@rneui/base";
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App(prop: any) {

  function HomeScreen({ navigation }: any) {
    console.log(navigation);
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Home1')}
        />
      </View>
    );
  }

  function HomeScreen1() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen1</Text>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();
  return (
    // Rest of your app...
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Home1" component={HomeScreen1} />
    </Stack.Navigator>
  )
}
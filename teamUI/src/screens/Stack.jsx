import { createStackNavigator } from '@react-navigation/stack';
import { ListScreen } from './listScreen';
import { SelectPlayerScreen } from './selectPlayerScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
    return (
    <NavigationContainer theme={{colors:'white'}}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListScreen} options={{headerShown:false}} />
        <Stack.Screen name="selectPlayer" component={SelectPlayerScreen} options={{headerShown:false}} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default MyStack
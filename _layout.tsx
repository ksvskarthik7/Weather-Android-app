// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Index from '.';

// const Stack = createStackNavigator();

// export default function RootLayout() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Weather App" component={Index} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
    </Stack>
  );
}

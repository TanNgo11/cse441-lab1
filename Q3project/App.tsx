import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={{alignItems: 'center', margin: 20}}>
      <Text>You've pressed the button: {pressCount} times</Text>
      <Button title="Press me" onPress={() => setPressCount(pressCount + 1)} />
    </View>
  );
}

export default App;

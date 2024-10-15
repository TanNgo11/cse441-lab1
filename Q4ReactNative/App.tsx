import React from 'react';
import {ScrollView} from 'react-native';
import {Square} from './Square.tsx';
import {data} from './Data.ts';
import styles from './styles.ts';

function App(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      {data.map((item: number, index: number) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
}
export default App;

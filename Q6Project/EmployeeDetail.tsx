import React from 'react';
import {View, Text} from 'react-native';
type EmployeeDetailProps = {
  name: string;
  age: number;
  ocupation: string;
};
export default function EmployeeDetail({
  name,
  age,
  ocupation,
}: EmployeeDetailProps) {
  return (
    <View>
      <Text>Employee Details:</Text>
      <Text>Full name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Ocupation: {ocupation}</Text>
    </View>
  );
}

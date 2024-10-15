import React, {useState, useEffect} from 'react';
import {View, Button, Text, TextInput, Alert} from 'react-native';

interface EmployeeProps {
  employee: {
    name: string;
    age: number;
    ocupation: string;
  };
  setEmployee: (employee: {
    name: string;
    age: number;
    ocupation: string;
  }) => void;
}

export default function Employee(props: EmployeeProps) {
  const {employee, setEmployee} = props;
  const [tempEmployee, setTempEmployee] = useState(employee);

  useEffect(() => {
    setTempEmployee(employee);
  }, [employee]);

  const handleChange = (key: keyof typeof employee, value: string | number) => {
    setTempEmployee({...tempEmployee, [key]: value});
  };

  const handleUpdate = () => {
    Alert.alert('Employee updated:', JSON.stringify(tempEmployee));
    setEmployee(tempEmployee);
  };

  return (
    <View>
      <Text>Full name: </Text>
      <TextInput
        value={tempEmployee.name}
        onChangeText={text => handleChange('name', text)}
      />
      <Text>Age: </Text>
      <TextInput
        value={tempEmployee.age.toString()}
        keyboardType="numeric"
        onChangeText={text => handleChange('age', Number(text))}
      />
      <Text>Ocupation: </Text>
      <TextInput
        value={tempEmployee.ocupation}
        onChangeText={text => handleChange('ocupation', text)}
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
}

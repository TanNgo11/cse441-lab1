import React, {useState} from 'react';
import {View} from 'react-native';
import Employee from './Employee';
import EmployeeDetail from './EmployeeDetail';

function App(): React.JSX.Element {
  const [employee, setEmployee] = useState({
    name: 'Nguyen van A',
    age: 18,
    ocupation: 'IT',
  });

  return (
    <View>
      <Employee employee={employee} setEmployee={setEmployee} />
      <EmployeeDetail
        name={employee.name}
        age={employee.age}
        ocupation={employee.ocupation}
      />
    </View>
  );
}

export default App;

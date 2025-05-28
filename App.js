import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { params } from './src/constant/params';
import { Field } from './src/component/Field';
import { Flag } from './src/component/Flag';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Iniciando Minesweeper</Text>
      <Text>Tamanho da grade:</Text>
      <Text>{params.getCollumnAmount()} x {params.getRowAmount()}</Text>
      <StatusBar style="auto" />
      <Field />
      <Field opened />
      <Field opened  nearMines={1}/>
      <Field opened  nearMines={2}/>
      <Field opened  nearMines={3}/>
      <Field opened  nearMines={6}/>
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
      <Field flagged />
      <Field flagged opened />
      <Flag />
      <Flag bigger />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

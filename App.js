import {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { params } from './src/constant/params';
import { 
  createMinedBoard, 
  cloneBoard, 
  openField, 
  hadExplosion, 
  wonGame, 
  showMines,
  toggleFlag,
} from './src/functions';
import { Field } from './src/component/Field';
import { Flag } from './src/component/Flag';
import {FieldBoard} from './src/component/FieldBoard';

export default function App() {
  const initialState = {
    board:[],
    won: false,
    lost: false
  }
  const [state, setState] = useState(initialState)
  const cols = params.getCollumnAmount()
  const rows = params.getRowAmount()
  const minesAmount = (): number => Math.ceil(cols * rows * params.difficulty)
  const createState = () => ({
    board: createMinedBoard(rows, cols, minesAmount()),
  })
  const onOpenField = (row, column) => {
    const board = cloneBoard(state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)
    if (lost) {
      showMines(board)
      Alert.alert('Perdeeeeeu', 'Que burro!!!')
    }
    if (won) {
      Alert.alert('Ganhou', 'Parabéns')
    }
    setState({board, lost, won})
  }
  const onSelectField = (row, column) => {
    const board = cloneBoard(state.board)
    toggleFlag(board, row, column)
    const won = wonGame(board)
    if (won) {
      Alert.alert('Ganhou', 'Parabéns')
    }
    setState({board, won})
  }
  useEffect(() => {
    setState(createState())
  }, []);
  return (
    <View style={styles.container}>
      <Text>Iniciando Minesweeper</Text>
      <Text>Tamanho da grade:</Text>
      <Text>{params.getCollumnAmount()} x {params.getRowAmount()}</Text>
      <StatusBar style="auto" />
      <FieldBoard
       board={state.board}  
       style={styles.board} 
       onOpenField={onOpenField}
       onSelectField={onSelectField}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});

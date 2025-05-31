import {View} from 'react-native'
import {Field} from './Field'

export const FieldBoard = props => {
  const rows = props.board.map((row, rowIndex) => {
    const columns = row.map((field, columnIndex) => {
      return <Field
         key={columnIndex} 
         {...field} 
         onOpen={() => props.onOpenField(rowIndex, columnIndex)} 
         onSelect={() => props.onSelectField(rowIndex, columnIndex)} 
         />
    })
    return <View key={rowIndex} style={{flexDirection: 'row'}}>{columns}</View>
  })
  return <View style={{backgroundColor: '#EEE'}}>{rows}</View>
}
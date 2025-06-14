import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {params} from '../constant/params'
import { Mine } from './Mine'
import { Flag } from './Flag'

export const Field = props => {
  const {mined, opened, nearMines, exploded, flagged} = props
  const styleField = [styles.field]
  if(opened) styleField.push(styles.opened)
  if(exploded) styleField.push(styles.exploded)
  if(flagged) styleField.push(styles.flagged, styles.regular)
  if(styleField.length === 1) styleField.push(styles.regular)
          
    let color = null
    if(nearMines > 0){
      if(nearMines === 1) color = "#2A28D7"
      if(nearMines === 2) color = "#2B520F"
      if(nearMines > 2 && nearMines < 6 ) color = "#F9060A"
      if(nearMines >= 6 ) color = "#F221A9"
    }
  return (
    <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
      <View style={styleField}>
        {
            !mined && opened && nearMines > 0 
            ?  <Text style ={[styles.label, {color: color}]}>
              {nearMines}
            </Text>
            : null
          }
          {mined && opened ? <Mine /> : null}
          {flagged && !opened ? <Flag /> : null}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  field: {
    width: params.blockSize,
    height: params.blockSize,
    borderWidth: params.borderSize
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333'
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red'
  }
})
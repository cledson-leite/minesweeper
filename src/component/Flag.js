import {View, StyleSheet} from 'react-native'

export const Flag = props => {
  return (
    <View style={styles.container}>
      <View style={props.bigger ? styles.flagPoleBigger : styles.flagPole}/>
      <View style={props.bigger ? styles.flagBigger : styles.flag}/>
      <View style={props.bigger ? styles.base1Bigger : styles.base1}/>
      <View style={props.bigger ? styles.base2Bigger : styles.base2}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 2
  },
  flagPole: {
    position: 'absolute',
    width: 2,
    height: 14,
    backgroundColor: '#222',
    marginLeft: 9
  },
  flag: {
    position: 'absolute',
    width: 6,
    height: 5,
    backgroundColor: '#F22',
    marginLeft: 3
  },
  base1: {
    position: 'absolute',
    width: 6,
    height: 2,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10
  },
  base2: {
    position: 'absolute',
    width: 10,
    height: 2,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12
  }, 
  flagPoleBigger: {
    position: 'absolute',
    width: 4,
    height: 28,
    backgroundColor: '#222',
    marginLeft: 16
  },
  flagBigger: {
    position: 'absolute',
    width: 14,
    height: 10,
    backgroundColor: '#F22',
    marginLeft: 3
  },
  base1Bigger: {
    position: 'absolute',
    width: 12,
    height: 4,
    backgroundColor: '#222',
    marginLeft: 12,
    marginTop: 20
  },
  base2Bigger: {
    position: 'absolute',
    width: 20,
    height: 4,
    backgroundColor: '#222',
    marginLeft: 8,
    marginTop: 24
  }, 
  })
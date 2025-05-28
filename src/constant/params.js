import {Dimensions} from 'react-native';

export const params = {
  blockSize: 30,
  borderSize : 5,
  fontSize : 15,
  headerRadio: 0.15,
  difficulty: 0.1,
  getCollumnAmount: () => {
    const width = Dimensions.get('window').width;
    return Math.floor(width / params.blockSize);
  },
  getRowAmount: () => {
    const totalHeight = Dimensions.get('window').height;
    const boarderHeight = totalHeight * (1 - params.headerRadio);
    return Math.floor(boarderHeight / params.blockSize);
  }
};
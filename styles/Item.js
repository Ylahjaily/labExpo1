import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 16,
        borderBottomWidth: 0.5,
        borderColor: '#BCBCBC',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
      },
      itemContainer: {
          display: 'flex',
          flexDirection:'row',
          justifyContent:'flex-start',
      },
    title: {
      fontSize: 32,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    infosContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
  },
    image: {
        width: 60, height: 60,
        marginRight: 20,
    }
  });
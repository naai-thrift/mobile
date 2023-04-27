import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

const screenWidth = Dimensions.get('screen').width;
const cardWidth = screenWidth - 40;
const borderRadius = 14;

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    width: cardWidth,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: 'white',
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 30,
    marginTop: -12,
    minHeight: 200,
  },
  cardDrawBar: {
    height: 3,
    width: 55,
    marginHorizontal: 'auto',
    marginVertical: 20,
    backgroundColor: 'black',
    opacity: 0.1,
  },
  cardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  size: {
    color: colors.text_gray,
    fontSize: 12,
  },
  description: {
    color: colors.text_gray,
    fontSize: 12,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  pfp: {
    borderRadius: 900,
    width: 40,
    aspectRatio: '1/1',
  },
  name: {
    fontSize: 14,
  },
  location: {
    fontSize: 12,
    color: colors.text_gray,
  },
  viewCloset: {
    backgroundColor: colors.tertiary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 900,
  },
});

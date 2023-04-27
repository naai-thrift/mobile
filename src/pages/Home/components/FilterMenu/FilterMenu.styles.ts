import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },
  prioritized: {
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    borderWidth: 1,
    borderRadius: 200,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderColor: colors.secondary,
  },
  card_text: {
    color: colors.secondary,
    fontWeight: '500',
    fontSize: 11,
  },
});

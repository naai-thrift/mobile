import { Octicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../../styles/colors';
import { FilterOptions } from '../../Home';
import styles from './FilterMenu.styles';

interface Props {
  filters: FilterOptions;
  onChange(filters: FilterOptions): void;
}

export default function FilterMenu({ onChange, filters }: Props) {
  function activate(category: keyof FilterOptions, value: string) {
    onChange({
      ...filters,
      [category]: filters[category] ? [...filters[category], value] : [value],
    });
  }

  function deactivate(category: keyof FilterOptions, value: string) {
    onChange({
      ...filters,
      [category]: filters[category].filter((e: string) => e != value),
    });
  }

  function toggle(category: keyof FilterOptions, value: string) {
    if (isActive(category, value)) {
      deactivate(category, value);
    } else {
      activate(category, value);
    }
  }

  function isActive(category: keyof FilterOptions, value: string) {
    if (!filters[category]) return false;
    if ((filters[category] as string[]).includes(value)) return true;
    return false;
  }

  const activeFilters = Object.entries(filters).map(
    ([category, values]: [keyof FilterOptions, string[]]) => {
      return values
        .map((value) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => toggle(category, value)}
          >
            <Text style={styles.card_text}>{value.toUpperCase()}</Text>
          </TouchableOpacity>
        ))
        .flat(1);
    }
  );

  return (
    <View style={styles.container}>
      <View style={styles.prioritized}>{activeFilters}</View>
      <TouchableOpacity>
        <Octicons name='filter' color={colors.secondary} size={20} />
      </TouchableOpacity>
    </View>
  );
}

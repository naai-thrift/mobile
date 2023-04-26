import { SafeAreaView, Text } from 'react-native';
import styles from './Home.styles';
import Swiper from './components/Swiper/Swiper';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home page</Text>
      <Swiper />
    </SafeAreaView>
  );
}

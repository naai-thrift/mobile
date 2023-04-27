import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Listing from '../../../../models/Listing';
import styles from './ListingCard.styles';

interface Props {
  listing: Listing;
}
export default function ListingCard({ listing }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.image}
      />
      <View style={styles.card}>
        <View style={styles.cardDrawBar} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.size}>Size: {listing.size.toUpperCase()}</Text>
          <Text style={styles.description}>{listing.description}</Text>
          <View style={styles.profile}>
            <View style={styles.user}>
              <Image
                source={{ uri: listing.user.profilePhoto }}
                style={styles.pfp}
              />
              <View>
                <Text style={styles.name}>
                  {listing.user.firstName}{' '}
                  {listing.user.lastName.substring(0, 1)}.
                </Text>
                <Text style={styles.location}>
                  {listing.user.generalLocation}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.viewCloset}>
              <Text>View Closet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

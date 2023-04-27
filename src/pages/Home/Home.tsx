import { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import Listing from '../../models/Listing';
import styles from './Home.styles';
import FilterMenu from './components/FilterMenu';
import ListingCard from './components/Listing/ListingCard';
import Swiper from './components/Swiper/Swiper';

export interface FilterOptions {
  garments?: string[];
  sizes?: string[];
}

export default function Home() {
  const [filters, setFilters] = useState<FilterOptions>({
    garments: ['tops', 'bottoms'],
  });
  const [listings, setListings] = useState<Listing[]>([
    {
      id: uuid(),
      title: 'Turquoise Windbreaker',
      size: 'm',
      description:
        'Thrifted, well-loved windbreaker in good condition! Looking for a new home!',
      bids: [],
      uploadTimestamp: new Date().toISOString(),
      lastUpdatedTimestamp: new Date().toISOString(),
      photos: [],
      user: {
        id: uuid(),
        firstName: 'Chloe',
        lastName: 'M',
        generalLocation: 'Downtown Berkeley',
        profilePhoto: 'https://picsum.photos/100/100',
      },
    },
    {
      id: uuid(),
      title: 'Turquoise Windbreaker',
      size: 'm',
      description:
        'Thrifted, well-loved windbreaker in good condition! Looking for a new home!',
      bids: [],
      uploadTimestamp: new Date().toISOString(),
      lastUpdatedTimestamp: new Date().toISOString(),
      photos: [],
      user: {
        id: uuid(),
        firstName: 'Chloe',
        lastName: 'M',
        generalLocation: 'Downtown Berkeley',
        profilePhoto: 'https://picsum.photos/100/100',
      },
    },
    {
      id: uuid(),
      title: 'Turquoise Windbreaker',
      size: 'm',
      description:
        'Thrifted, well-loved windbreaker in good condition! Looking for a new home!',
      bids: [],
      uploadTimestamp: new Date().toISOString(),
      lastUpdatedTimestamp: new Date().toISOString(),
      photos: [],
      user: {
        id: uuid(),
        firstName: 'Chloe',
        lastName: 'M',
        generalLocation: 'Downtown Berkeley',
        profilePhoto: 'https://picsum.photos/100/100',
      },
    },
    {
      id: uuid(),
      title: 'Turquoise Windbreaker',
      size: 'm',
      description:
        'Thrifted, well-loved windbreaker in good condition! Looking for a new home!',
      bids: [],
      uploadTimestamp: new Date().toISOString(),
      lastUpdatedTimestamp: new Date().toISOString(),
      photos: [],
      user: {
        id: uuid(),
        firstName: 'Chloe',
        lastName: 'M',
        generalLocation: 'Downtown Berkeley',
        profilePhoto: 'https://picsum.photos/100/100',
      },
    },
    {
      id: uuid(),
      title: 'Turquoise Windbreaker',
      size: 'm',
      description:
        'Thrifted, well-loved windbreaker in good condition! Looking for a new home!',
      bids: [],
      uploadTimestamp: new Date().toISOString(),
      lastUpdatedTimestamp: new Date().toISOString(),
      photos: [],
      user: {
        id: uuid(),
        firstName: 'Chloe',
        lastName: 'M',
        generalLocation: 'Downtown Berkeley',
        profilePhoto: 'https://picsum.photos/100/100',
      },
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FilterMenu onChange={setFilters} filters={filters} />
      <ScrollView
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={Dimensions.get('screen').width - 30} //your element width
        snapToAlignment={'center'}
      >
        {listings.map((listing) => (
          <ListingCard listing={listing} key={listing.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

import { useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  Text,
  View,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height * (2 / 3);
const SCREEN_WIDTH = Dimensions.get('screen').width * (2 / 3);

const Cards = [
  { id: '1', uri: 'https://picsum.photos/200/300' },
  { id: '2', uri: 'https://picsum.photos/200/300' },
  { id: '3', uri: 'https://picsum.photos/200/300' },
  { id: '4', uri: 'https://picsum.photos/200/300' },
  { id: '5', uri: 'https://picsum.photos/200/300' },
];

export default function Swiper() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [curIdx, setCurIdx] = useState<number>(0);
  const [panResponder, setPanResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        setPosition(
          new Animated.ValueXY({ x: gestureState.dx, y: gestureState.dy })
        );
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            useNativeDriver: true,
          }).start(() => {
            setCurIdx((prev) => prev + 1);
            setPosition(new Animated.ValueXY({ x: 0, y: 0 }));
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            useNativeDriver: true,
          }).start(() => {
            setCurIdx((prev) => prev + 1);
            setPosition(new Animated.ValueXY({ x: 0, y: 0 }));
          });
        } else {
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  );
  const [position, setPosition] = useState(new Animated.ValueXY());
  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['-30deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  });

  const onLayout = (event: any) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setDimensions({ height, width });
  };

  const rotateAndTranslate = {
    transform: [
      {
        rotate: rotate,
      },
      ...position.getTranslateTransform(),
    ],
  };

  const likeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });
  const dislikeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });

  const nextCardOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  });
  const nextCardScale = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp',
  });

  const cards = Cards.map((item, i) => {
    if (i < curIdx) {
      return null;
    } else if (i == curIdx) {
      return (
        <Animated.View
          {...panResponder.panHandlers}
          key={item.id}
          style={[
            rotateAndTranslate,
            {
              backgroundColor: 'red',
              height: SCREEN_HEIGHT - 120,
              width: SCREEN_WIDTH,
              position: 'absolute',
            },
          ]}
        >
          <Animated.View
            style={{
              opacity: likeOpacity,
              transform: [{ rotate: '-30deg' }],
              position: 'absolute',
              top: 50,
              left: 40,
              zIndex: 1000,
            }}
          >
            <Text
              style={{
                borderWidth: 1,
                borderColor: 'green',
                color: 'green',
                fontSize: 32,
                fontWeight: '800',
                padding: 10,
              }}
            >
              LIKE
            </Text>
          </Animated.View>

          <Animated.View
            style={{
              opacity: dislikeOpacity,
              transform: [{ rotate: '30deg' }],
              position: 'absolute',
              top: 50,
              right: 40,
              zIndex: 1000,
            }}
          >
            <Text
              style={{
                borderWidth: 1,
                borderColor: 'red',
                color: 'red',
                fontSize: 32,
                fontWeight: '800',
                padding: 10,
              }}
            >
              NOPE
            </Text>
          </Animated.View>

          <Image
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: 'cover',
              borderRadius: 20,
            }}
            source={item}
          />
        </Animated.View>
      );
    } /* else {
      return (
        <Animated.View
          key={item.id}
          style={[
            {
              opacity: nextCardOpacity,
              transform: [{ scale: nextCardScale }],
              height: SCREEN_HEIGHT - 120,
              width: SCREEN_WIDTH,
              padding: 10,
              position: 'absolute',
            },
          ]}
        >
          <Animated.View
            style={{
              opacity: 0,
              transform: [{ rotate: '-30deg' }],
              position: 'absolute',
              top: 50,
              left: 40,
              zIndex: 1000,
            }}
          >
            <Text
              style={{
                borderWidth: 1,
                borderColor: 'green',
                color: 'green',
                fontSize: 32,
                fontWeight: '800',
                padding: 10,
              }}
            >
              LIKE
            </Text>
          </Animated.View>

          <Animated.View
            style={{
              opacity: 0,
              transform: [{ rotate: '30deg' }],
              position: 'absolute',
              top: 50,
              right: 40,
              zIndex: 1000,
            }}
          >
            <Text
              style={{
                borderWidth: 1,
                borderColor: 'red',
                color: 'red',
                fontSize: 32,
                fontWeight: '800',
                padding: 10,
              }}
            >
              NOPE
            </Text>
          </Animated.View>

          <Image
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: 'cover',
              borderRadius: 20,
            }}
            source={item}
          />
        </Animated.View>
      );
    }*/
  }).reverse();

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'orange',
      }}
      onLayout={onLayout}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {cards}
      </View>
    </View>
  );
}

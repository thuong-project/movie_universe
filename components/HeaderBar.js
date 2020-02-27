import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import colors from '../constant/color';
import { withNavigation } from 'react-navigation';

export default withNavigation(Nav);

function Nav(props) {
  const { navigation } = props;
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.iconWrap}>
          <Image
            source={require('../assets/images/icon/movieIcon.png')}
            style={[styles.icon, styles.iconLogo]}
            resizeMode="contain"
          />
          <Text style={styles.appName}>Movie Universe</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchMovieScreen')}
          >
            <Image
              source={require('../assets/images/icon/searchIcon.png')}
              style={styles.icon}
            ></Image>
          </TouchableOpacity>

          <Image
            source={require('../assets/images/icon/notificationIcon.png')}
            style={styles.icon}
          ></Image>
          <Image
            source={require('../assets/images/icon/starIcon.png')}
            style={styles.icon}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginVertical: 14
  },
  iconWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 14,
    height: 24,
    width: 24
  },
  iconLogo: {
    marginRight: 0
  },
  appName: {
    color: colors.orange,
    fontSize: 16,
    marginRight: 30
  }
});

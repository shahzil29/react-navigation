import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Animated, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Animation for Home Page
function HomeScreen({ navigation }: any) {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const animatedStyle = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.05],
        }),
      },
    ],
  };

  return (
    <View style={styles.homeContainer}>
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        <Image
          source={{ uri: 'your-photo-url-here' }}
          style={styles.profileImage}
        />
        <Text style={styles.header}>Shahzil Khan</Text>
        <Text style={styles.subtitle}>Professional Web Designer & App Developer</Text>
        <View style={styles.buttonContainer}>
          <Button 
            title="View Portfolio" 
            color="#E76F51"
            onPress={() => navigation.navigate('Portfolio')} 
          />
          <Button 
            title="Contact Us" 
            color="#2A9D8F"
            onPress={() => navigation.navigate('ContactUs')} 
          />
        </View>
      </Animated.View>

      {/* Login and Signup Section */}
      <View style={styles.loginSignupContainer}>
        <Text style={styles.loginSignupHeader}>Get Started</Text>
        <View style={styles.loginSignupButtons}>
          <Button 
            title="Login" 
            color="#457B9D"
            onPress={() => {  }} 
          />
          <Button 
            title="Sign Up" 
            color="#1D3557"
            onPress={() => {  }} 
          />
        </View>
      </View>
    </View>
  );
}

function PortfolioScreen() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.portfolioContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Shahzil Khan</Text>
          <Text style={styles.subtitle}>BS IT - Islamia University Bahawalpur</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Skills</Text>
          <Text style={styles.bodyText}>- Expert in React Native</Text>
          <Text style={styles.bodyText}>- Professional Web Designer</Text>
          <Text style={styles.bodyText}>- Mobile App Development</Text>
          <Text style={styles.bodyText}>- Backend Development</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Projects</Text>
          <Text style={styles.bodyText}>1. E-commerce Web App</Text>
          <Text style={styles.bodyText}>2. Fitness Mobile App</Text>
          <Text style={styles.bodyText}>3. Carpooling Web App</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Experience</Text>
          <Text style={styles.bodyText}>- Freelance Web and App Developer</Text>
          <Text style={styles.bodyText}>- Instructor for Mobile App Development</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function ContactUsScreen() {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.contactHeader}>Contact Us</Text>
      <Text style={styles.contactText}>Phone: +92 312 7889589</Text>
      <Text style={styles.contactText}>Email: shahzilkhan29@gmail.com</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Portfolio" component={PortfolioScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#264653',
    paddingVertical: 30,
  },
  animatedContainer: {
    padding: 40,
    backgroundColor: '#F4A261',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#E9C46A',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  
  // Login & Signup Styling
  loginSignupContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#E9C46A',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  loginSignupHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#264653',
  },
  loginSignupButtons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Portfolio Styling
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  portfolioContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    elevation: 4,
  },
  headerContainer: {
    backgroundColor: '#2A9D8F',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  section: {
    marginTop: 20,
    backgroundColor: '#F4A261',
    padding: 15,
    borderRadius: 10,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#E76F51',
    borderBottomWidth: 2,
    borderBottomColor: '#E76F51',
  },
  bodyText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },

  // Contact Us Page
  contactContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#264653',
    padding: 20,
  },
  contactHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  contactText: {
    fontSize: 18,
    color: '#E9C46A',
    marginVertical: 10,
  },
});

export default App;

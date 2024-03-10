import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const Footer = () => {
    return (
      <View style={footerStyles.container}>
        <Text>A JohnsonCD Product.</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

    const footerStyles = StyleSheet.create({
        container: {
          backgroundColor: 'lightgray',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
  },
});

export default MainLayout;
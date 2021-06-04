import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

interface HeaderProps {
  isThemeDark: boolean;
  toggleSwitch: () => void;
}

export function Header({isThemeDark, toggleSwitch}: HeaderProps) {

  return (
    <View style={styles(isThemeDark).header}>
      <View style={styles().title}>
        <Text style={styles().headerText}>to.</Text>
        <Text style={[styles().headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
      <Switch 
        trackColor={{ false: "#F5F4F8", true: "#A09CB1" }}
        thumbColor={isThemeDark ? "#191932" : "#999"}
        onValueChange={toggleSwitch}
        value={isThemeDark}
        style={styles().togle}
      />
    </View>
  )
}

const styles = (isDarkTheme?: boolean) => StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: isDarkTheme? '#483C67' : '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  title:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: -50
  },
  togle: {
    width: 50
  }
});

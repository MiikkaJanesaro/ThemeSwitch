import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import Styles from '../Styles';
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import { useTheme } from '../context/useTheme';

export default function Settings() {
    const { isDarkMode } = useTheme()
  return (
    <View style={[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
        <Text style={isDarkMode ? Styles.dark : Styles.light}>
            Change theme:
        </Text>
        <ThemeSwitchButton/>
    </View>

  )
}

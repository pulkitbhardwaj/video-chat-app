import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from './Header'

export const App = () => {
	return (
		<View style={styles.box}>
			<Text style={styles.text}>Hello, world!</Text>
			<Header />
		</View>
	)
}

const styles = StyleSheet.create({
	box: { padding: 10 },
	text: { fontWeight: 'bold' }
})

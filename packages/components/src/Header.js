import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Search } from './Search'

export const Header = () => {
	return (
		<View style={styles.header}>
			<Search />
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})

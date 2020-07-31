import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

export const Autocomplete = ({ search }) => {
	const data = [
		{ key: 'Devin' },
		{ key: 'Dan' },
		{ key: 'Dominic' },
		{ key: 'Jackson' },
		{ key: 'James' },
		{ key: 'Joel' },
		{ key: 'John' },
		{ key: 'Jillian' },
		{ key: 'Jimmy' },
		{ key: 'Julie' }
	]

	let suggestions = data.filter(item =>
		item.key.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<View>
			<Text>{search}</Text>
			<FlatList
				style={{ height: 30 }}
				data={data}
				renderItem={({ item }) => <Text>{item.key}</Text>}
			/>
		</View>
	)
}

const styles = StyleSheet.create({})

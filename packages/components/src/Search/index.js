import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Autocomplete } from './Autocomplete'

export const Search = () => {
	const [search, setSearch] = useState('')

	return (
		<View>
			<TextInput
				style={{ height: 40 }}
				placeholder="What are you looking for?"
				onChangeText={search => setSearch(search)}
				defaultValue={search}
			/>
			<Autocomplete search={search} />
		</View>
	)
}

const styles = StyleSheet.create({})

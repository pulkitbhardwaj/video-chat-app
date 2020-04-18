import { StyleSheet, Text, View } from 'react-native'

const App = () => {
	return (
		<View style={styles.box}>
			<Text style={styles.text}>Hello, world!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	box: { padding: 10 },
	text: { fontWeight: 'bold' }
})

export default App

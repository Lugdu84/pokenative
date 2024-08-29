import ThemedText from '@/components/ThemedText';
import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<ThemedText
				variant="headline"
				color="grayWhite">
				Home
			</ThemedText>
			<Link href={'/about'}>About</Link>
			<Link href={'/pokemon/1'}>Pokemon 1</Link>
			<Link href={{ pathname: '/pokemon/[id]', params: { id: 3 } }}>
				Pokemon 3
			</Link>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
	},
});

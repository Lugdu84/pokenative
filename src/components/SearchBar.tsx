import { View, Text, TextInput } from 'react-native';

type SearchBarProps = {
	value: string;
	onChange: (text: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
	return (
		<View>
			<TextInput
				onChangeText={onChange}
				value={value}
			/>
		</View>
	);
}

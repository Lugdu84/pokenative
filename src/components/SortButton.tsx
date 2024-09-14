import { StyleSheet, View } from 'react-native';

type valueType = 'id' | 'name';

type SortButtonProps = {
	value: valueType;
	onChange: (value: valueType) => void;
};

export default function SortButton({ value, onChange }: SortButtonProps) {
	return <View></View>;
}

const styles = StyleSheet.create({});

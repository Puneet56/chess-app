import { StyleSheet, View } from "react-native";
import ChessBoard from "./src/chess-board";

export default function App() {
	return (
		<View style={styles.container}>
			<ChessBoard />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#41403a",
		alignItems: "center",
		justifyContent: "center",
	},
});

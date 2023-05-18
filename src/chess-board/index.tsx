import React from "react";
import { StyleSheet, View } from "react-native";
import ColoredBaseBoard from "./colored-base-board";
import PiecesBoard from "./pieces-board";

const ChessBoard = () => {
	return (
		<View style={styles.container}>
			<ColoredBaseBoard />
			<PiecesBoard />
		</View>
	);
};

export default ChessBoard;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		aspectRatio: 1,
		position: "relative",
	},
});

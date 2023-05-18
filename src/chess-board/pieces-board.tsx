import React from "react";
import { StyleSheet, Text, View } from "react-native";

const getXPosition = (x: number) => {
	switch (x) {
		case 8:
			return "a";
		case 7:
			return "b";
		case 6:
			return "c";
		case 5:
			return "d";
		case 4:
			return "e";
		case 3:
			return "f";
		case 2:
			return "g";
		case 1:
			return "h";
		default:
			// wrong index
			return "wi";
	}
};

const createBoard = (sideLength: number) => {
	const board = [];
	for (let i = 1; i <= sideLength; i++) {
		const row = [];
		for (let j = 1; j <= sideLength; j++) {
			row.push({
				x: getXPosition(i),
				y: j,
			});
		}
		board.push(row);
	}
	return board;
};

const BOARD = createBoard(8);

const PiecesBoard = () => {
	return (
		<View style={styles.board}>
			{BOARD.map((row, i) => {
				return (
					<View style={styles.row} key={i}>
						{row.map((square, j) => {
							let isBlack = (i + j) % 2 !== 0;
							return (
								<View style={[styles.tile]} key={j}>
									<Text
										style={{
											color: "red",
										}}
									>
										{square.x}
										{square.y}
									</Text>
								</View>
							);
						})}
					</View>
				);
			})}
		</View>
	);
};

export default PiecesBoard;

const styles = StyleSheet.create({
	board: {
		position: "absolute",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		aspectRatio: 1,
	},
	row: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	tile: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		aspectRatio: 1,
		borderRadius: 1,
	},
});

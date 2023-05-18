import React from "react";
import { StyleSheet, Text, View } from "react-native";

const createBoard = (sideLength: number) => {
	const board = [];
	for (let i = 1; i <= sideLength; i++) {
		const row = [];
		for (let j = 1; j <= sideLength; j++) {
			row.push({
				x: (() => {
					switch (i) {
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
					}
				})(),
				y: j,
			});
		}
		board.push(row);
	}
	return board;
};

const BOARD = createBoard(8);

const ChessBoard = () => {
	return (
		<View style={styles.board}>
			{BOARD.map((row, i) => {
				return (
					<View style={styles.row} key={i}>
						{row.map((square, j) => {
							let isBlack = (i + j) % 2 !== 0;
							return (
								<View
									style={[
										styles.box,
										{ backgroundColor: isBlack ? "#779455" : "#ebebd0" },
									]}
									key={j}
								>
									<Text>
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

export default ChessBoard;

const styles = StyleSheet.create({
	board: {
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
	box: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		aspectRatio: 1,
		borderRadius: 1,
	},
});

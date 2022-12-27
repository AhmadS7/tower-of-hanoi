/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "./App.css";
const NUM_DISCS = 3;
function App() {
	const [towers, setTowers] = useState([[3, 2, 1], [], []]);
	const [selectedTowerIndex, setSelectedTowerIndex] = useState<
		number | undefined
	>();

	function handleClickedTower(clickedTowerIndex: number) {
		// debugger;
		if (selectedTowerIndex !== undefined) {
			const selectedTower = towers[selectedTowerIndex];
			const clickedTower = towers[clickedTowerIndex];
			if (selectedTower[0] > (clickedTower[0] ?? 99999)) {
				setSelectedTowerIndex(undefined);
				return;
			}
			const newTowers = [...towers];
			const poppedDisc = newTowers[selectedTowerIndex].shift()!;
			newTowers[clickedTowerIndex].unshift(poppedDisc);
			setTowers(newTowers);
			setSelectedTowerIndex(undefined);
			if (clickedTower.length >= NUM_DISCS) {
				alert("You win! ");
			}
		} else {
			setSelectedTowerIndex(clickedTowerIndex);
		}
	}
	return (
		<div className="app">
			<div className="towers">
				{towers.map((discs, towerIndex) => (
					<div
						onClick={() => handleClickedTower(towerIndex)}
						className={
							"tower " + (selectedTowerIndex === towerIndex ? "selected" : "")
						}
						key={towerIndex}
					>
						<div className="line"></div>
						<div className="discs">
							{discs.reverse().map((discNumber) => {
								return (
									<div
										key={discNumber}
										className="disc"
										style={{ width: `${discNumber * 10 + 10}px` }}
									>
										{discNumber}
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;


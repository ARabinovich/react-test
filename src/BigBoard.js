import SmallBoard from './SmallBoard.js';

export default function BigBoard(props) {
    let rows = [];
    let rowSquares = [];
    for (let i = 1; i <= 9; i++) {
        rowSquares.push(<SmallBoard key={i} position={i} />);
        if (i % 3 === 0) {
            rows.push(
                <div key={i} className="row-small-board">
                    {rowSquares}
                </div>
            );
            rowSquares = [];
        }
    }

    return (
        <div className="big-board">
            {/* {Array.from(Array(9).keys()).map(
                i => <SmallBoard key={i} position={i+1} />
            )} */}
            {rows}
        </div>
    );
}
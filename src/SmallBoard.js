import Square from './Square.js';

export default function SmallBoard(props) {
    let rows = [];
    let rowSquares = [];
    for (let i = 1; i <= 9; i++) {
        rowSquares.push(<Square key={i} position={i} />);
        if (i % 3 === 0) {
            rows.push(
                <div key={i} className="row-square">
                    {rowSquares}
                </div>
            );
            rowSquares = [];
        }
    }

    return (
        <div className="small-board">
            {/* {Array.from(Array(9).keys()).map(
                i => <Square key={i} position={i+1} />
            )} */}
            {rows}
        </div>
    );
}
export function createMap(rows: number, cols: number, border: number): boolean[][] {
    const cells: boolean[][] = [[]]

    for (let r:number = 0; r < rows; r++) {
        cells[r] = []
        for (let c:number = 0; c < cols; c++) {
            cells[r][c] = Math.random() > .8

            // Leave borders false
            if (r < border || r >= rows - border || c < border || c >= cols - border ) {
                cells[r][c] = false
            }
        }
    }

    return cells;
}

const scan = (mat) => {
    let islands = 0;
    for (let x = 0; x < mat.length; x++) {
        for (let y = 0; y < mat[0].length; y++) {
    /*
    for (let x = mat.length - 1; x >= 0 ; x--) {
        for (let y = mat[0].length -1; y >= 0 ; y--) {
        */
            if (mat[x][y] === 1) {
                islands ++;
                flood(mat, x, y, 1, 0);
            }

        }
    }
    return islands;
};

const flood = (mat, i, j, orig, newc) => {
    // base case
    if (i < 0 || 
        j < 0 ||
        i >= mat.length ||
        j >= mat[0].length) {
        return;
    }

    if (mat[i][j] === orig) {
        mat[i][j] = newc;
        flood(mat, i + 1, j, orig, newc);
        flood(mat, i - 1, j, orig, newc);
        flood(mat, i, j + 1, orig, newc);
        flood(mat, i, j - 1, orig, newc);
    }
};

var mat = [[0,1,1,1,0],
           [1,1,0,0,0],
           [0,0,0,1,1]];

console.log(scan(mat));

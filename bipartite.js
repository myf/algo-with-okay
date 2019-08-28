const bipartite = (graph) => {
	let res = true;
	try {
    	bip(graph, Array(graph.length).fill(-1), 0, 1);
	} catch(e) {
		res = false;
	}
	return res;
    
};

const bip = (graph, colors, i, c) => {
    if (graph[i].length === 0) {
        bip(graph, colors, i + 1 % colors.length, c);
    }
    if (colors[i] !== c && colors[i] > 0) {
        throw Error('no bipartite');
    }
	if (colors[i] > 0) {
		return;
	}

	colors[i] = c;

	let c2 = c === 0 ? 1 : 0;
	graph[i].map((j) => {
		bip(graph, colors, j, c2);
	});

};

//const res = bipartite([[1,3], [0,2], [1,3], [0,2]]);
//const res2 = bipartite([[1,2,3], [0,2], [0,1,3], [0,2]]);
const res3 = bipartite([[],[2,4,6],[1,4,8,9],[7,8],[1,2,8,9],[6,9],[1,5,7,8,9],[3,6,9],[2,3,4,6,9],[2,4,5,6,7,8]]);
console.log(res3);

function graph_from_Edges_undir(arr, n){
    let graph = new Array(n)
    for(i = 0; i < n;i++)
    {
        graph[i] = []
    }

    for(i = 0; i <arr.length();i++)
    {
       u = arr[i][0];
       v = arr[i][1];
       graph[u].append(v);
       graph[v].append(u);
    }

    return graph;
}

module.export = graph_from_Edges_undir

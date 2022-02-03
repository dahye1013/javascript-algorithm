//인접 행렬
{
  const graph = Array.from(Array(5), () => Array(5).fill(false));

  graph[0][1] = true;
  graph[0][3] = true;
  graph[1][2] = true;
  graph[2][0] = true;
  graph[2][4] = true;
  graph[3][2] = true;
  graph[4][0] = true;
}

//인접 리스트
{
  const graph = Array.from(Array(5), () => []);

  graph[0].push(1);
  graph[0].push(3);
  graph[1].push(2);
  graph[2].push(0);
  graph[2].push(4);
  graph[3].push(2);
  graph[4].push(0);
}

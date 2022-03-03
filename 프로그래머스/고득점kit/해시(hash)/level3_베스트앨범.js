function solution(genres, plays) {
  var answer = [];
  const genreMap = new Map();

  const result = genres.map((genre, index) => [genre, plays[index]]);

  result.forEach(([genre, play], index) => {
    const data = genreMap.get(genre) || { total: 0, songs: [] };
    genreMap.set(genre, {
      ...data,
      total: data.total + play,
      songs: [...data.songs, { play, index }]
        .sort((a, b) => b.play - a.play)
        .slice(0, 2),
    });
  });

  answer = [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((item) => item.index);

  return answer;
}


const getData = () => {

  let data = [
    {
      id: "1",
      title: 'title',
      src: `https://source.unsplash.com/random/500x500?sig=${Math.floor(Math.random() * 999)}`,
      height: 600,
      author: 'Awesome',
      voteNum: 220
    }, {
      id: "2",
      title: 'title',
      src: `https://source.unsplash.com/random/500x400?sig=${Math.floor(Math.random() * 999)}`,
      height: 600,
      author: 'Awesome',
      voteNum: 210
    }, {
      id: "3",
      title: 'title',
      src: `https://source.unsplash.com/random/500x700?sig=${Math.floor(Math.random() * 999)}`,
      height: 700,
      author: 'Awesome',
      voteNum: 201
    }, {
      id: "4",
      title: 'title',
      src: `https://source.unsplash.com/random/500x250?sig=${Math.floor(Math.random() * 999)}`,
      height: 600,
      author: 'Awesome',
      voteNum: 200
    }, {
      id: "5",
      title: 'title',
      src: `https://source.unsplash.com/random/500x800?sig=${Math.floor(Math.random() * 999)}`,
      height: 800,
      author: 'Awesome',
      voteNum: 200
    }, {
      id: "6",
      title: 'title',
      src: `https://source.unsplash.com/random/500x500?sig=${Math.floor(Math.random() * 999)}`,
      height: 500,
      author: 'Awesome',
      voteNum: 230,
    }, {
      id: "7",
      title: 'title',
      src: `https://source.unsplash.com/random/500x400?sig=${Math.floor(Math.random() * 999)}`,
      height: 600,
      author: 'Awesome',
      voteNum: 203
    }, {
      id: "8",
      title: 'title',
      src: `https://source.unsplash.com/random/500x700?sig=${Math.floor(Math.random() * 999)}`,
      height: 700,
      author: 'Awesome',
      voteNum: 206
    }, {
      id: "9",
      title: 'title',
      src: `https://source.unsplash.com/random/500x250?sig=${Math.floor(Math.random() * 999)}`,
      height: 500,
      author: 'Awesome',
      voteNum: 208
    }, {
      id: "10",
      title: 'title',
      src: `https://source.unsplash.com/random/500x800?sig=${Math.floor(Math.random() * 999)}`,
      height: 800,
      author: 'Awesome',
      voteNum: 207
    }
  ]
  return data;
}

export default getData;
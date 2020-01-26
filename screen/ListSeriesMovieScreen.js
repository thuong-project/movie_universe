import React from 'react';
import ListMovieBase from './ListMovieScreenBase';

const urla = [
  'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movieData%2Fmovie%2Favenger_endgame%2Fmovie.mp4?alt=media&token=65e4d38c-31be-4733-925f-5eafde896e10',
  'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movieData%2FseriesMovie%2Fthe_walking_dead_season10%2Fep1.mp4?alt=media&token=8a34a255-a826-4c47-a7ef-e3313d8514ad'
];
const series = {
  localName: 'Localnameeeeeeeeeeeeeee',
  globalName: 'Globalnameeeeeeeeeeeee',
  movieType: 'series',
  episode: '24/24',
  poster:
    'https://bilutv.org/upload/images/2018/11/tan-bach-nuong-tu-truyen-ky-2018_1542019807.jpg',
  movieUrl: urla,
  director: ['Pham Van Thuong'],
  actor: ['Pham Van Thuong', 'Pham Anh Kiet', 'Pham Anh Khoa'],
  category: ['Trinh tham', 'Hanh dong', 'Kinh di'],
  release: '2020-1-25',
  content:
    'ahiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
};
const data = Array(15).fill(series);

export default function(props) {
  return <ListMovieBase listMovie={data} />;
}

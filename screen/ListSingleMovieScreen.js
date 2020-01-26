import React from 'react';
import ListMovieBase from './ListMovieScreenBase';

const single = {
  localName: 'Localnameeeeeeeeeeeeeeeeeeeee',
  globalName: 'Globalnameeeeeeeeeeeeeeeeeee',
  movieType: 'single',
  poster:
    'https://bilutv.org/upload/images/2018/11/tan-bach-nuong-tu-truyen-ky-2018_1542019807.jpg',
  movieUrl:
    'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movieData%2Fmovie%2Favenger_endgame%2Fmovie.mp4?alt=media&token=65e4d38c-31be-4733-925f-5eafde896e10',
  director: ['Pham Van Thuong'],
  actor: ['Pham Van Thuong', 'Pham Anh Kiet', 'Pham Anh Khoa'],
  category: ['Trinh tham', 'Hanh dong', 'Kinh di'],
  release: '2020-1-25',
  content:
    'ahiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii' +
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii' +
    'kkkkkkkkkkkkkkkkkkkkkkooooooooooooooooooooooooooooooooooooooooooooooooooooooo'
};
const data = Array(15).fill(single);

export default function(props) {
  return <ListMovieBase listMovie={data} />;
}

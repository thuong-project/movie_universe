import React, { useEffect, useState, useContext } from 'react';
import ListMovieBase from './ListMovieScreenBase';
import AppContext from '../AppContext';

export default function(props) {
  const dbservices = useContext(AppContext);
  const [data, setData] = useState();
  useEffect(() => {
    dbservices.getAllSeriesMovie().then(rs => {
      setData(rs);
      console.log(data);
    });
  }, []);
  return <ListMovieBase listMovie={data} />;
}

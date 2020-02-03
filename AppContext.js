import React from 'react';
import DBServices from './databaseService/DBServices';

const AppContext = React.createContext(DBServices);

export default AppContext;

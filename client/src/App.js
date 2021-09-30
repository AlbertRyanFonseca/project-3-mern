import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'; 

import Post from "./components/Posts"
import IconInfo from './components/IconInfo/IconInfo';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';  
import Register from './components/Register/Register';
import UserPage from './components/UserPage/UserPage';

// import ApolloClient from 'apollo-boost';
// import ApolloProvider from 'apollo-boost';
// import InMemoryCache from 'apollo-boost';
// import createHttpLink from 'apollo-boost';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   request: operation => {
//     const token = localStorage.getItem('id_token');

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     });
//   },
//   uri: '/graphql',
  
//   cache: new InMemoryCache()
// });

function App() {
  const categories = [
    {
      id: 'i1',
      title: 'PM',
      description: 'paint/mediums',
    },
    {
      id: 'i2',
      title: 'CS',
      description: 'canvas/surfaces'
    },
    {
      id: 'i3',
      title: 'BT',
      description: 'brushes/painting tools'
    },
    {
      id: 'i4',
      title: 'DI',
      description: 'drawing/illustration'
    },
    {
      id: 'i5',
      title: 'PB',
      description: 'paper/boards'
    },
    {
      id: 'i6',
      title: 'F',
      description: 'framing'
    },
    {
      id: 'i7',
      title: 'CT',
      description: 'ceramics textiles'
    },
    {
      id: 'i8',
      title: 'M',
      description: 'miscellaneous'
    },
    {
      id: 'i9',
      title: 'E',
      description: 'electronics'
    }
  ]

  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
        {/* <IconInfo info={categories} /> */}
        <Route exact path="/Posts" component={ Post } />
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
 
        </Switch>
        </div>
      </div>

      </Router>
    </ApolloProvider>
  );





  // return (
  //   <div className="App">
  //     <Header />
  //     <IconInfo info={categories} />
  //     {/* <Login /> */}
  //   </div>
  // );
}

export default App;

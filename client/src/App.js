
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import {BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
// UNCOMMENT ONCE PAGES ARE WORKING
// import Navbar from './components/Navbar';

import Landing from './pages/Landing';

// import likeProfiles from './pages/likedProfiles';
// import Profle from './pages/Profile';
// import Home from './pages/home';
// import Dashboard from './pages/dashboard';
import { setContext } from '@apollo/client/link/context';

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



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <>
         {/* <Navbar/> */}
         <Switch>
            {/* <Route path="/Home" component= {Home} /> */}
            <Route path="/Landing" component= {Landing} />
            <Route path="/SignupForm" component= {SignupForm} />
            <Route path="/LoginForm" component= {LoginForm} />

            {/* <Route path="/likedProfiles" component= {likeProfiles} /> */}
            {/* <Route path="/Profile" component= {Profle} /> */}
            {/* <Route path="/dashboard" component= {Dashboard} /> */}
            <Route path ="/" exact component= {Landing} />
            
         </Switch>
         <Footer />
      </>
      </Router>
      </ApolloProvider>
  );
}

const HomePage = () => (
  <div>
    <Landing />
  </div>
)

export default App;

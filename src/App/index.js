
import React from 'react';
import PageLayout from '../components/PageLayout'
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from '../Routes/HomePage';
import BlogPage from '../Routes/Blog';
import MediaPage from '../Routes/MediaPage';

const App = () => {
    return (
      <Router>
        <PageLayout>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/media" component={MediaPage} />
        </PageLayout>
      </Router>
    );
}

export default App
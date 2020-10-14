import React, { Suspense, lazy, useState } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
const Form = lazy(() => import('./Form'));
const Comments = lazy(() => import('./Comments'));

function App() {
  const [comments, setComments] = useState(([]));

  return (
    <div className="App">
      <h1 id="title ">Welcome To My Blog</h1>
      <p>this is my blog. what do u think about it? please tell me!</p>
      <Suspense fallback={<h2>Loding...</h2>} >
        <ErrorBoundary>
          <Form comments={comments} setComments={setComments} />
          <Comments comments={comments} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

const HomePage = props => {
  console.log("homepage", props);

  return (
    <div>
      <Link to="/topics">Topics</Link>
      <br />
      <button onClick={() => props.history.push("/topics")}>Topics</button>
      <h1>Home Page</h1>
    </div>
  );
};

const TopicList = props => {
  console.log("topicList", props);
  return (
    <div>
      <h1>Topic List Page</h1>
      <Link to={`${props.match.url}/13`}>To Topic 13</Link>
      <Link to={`${props.match.url}/21`}>To Topic 21</Link>
      <Link to={`${props.match.url}/43`}>To Topic 43</Link>
    </div>
  );
};

const TopicDetail = props => {
  console.log("topcidetail", props);
  return (
    <div>
      <h1>Topic Detail : {props.match.params.topicId} </h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicList} />
      <Route path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;

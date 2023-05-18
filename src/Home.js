import Login from './Login'
import Clock from './Clock'

function Home() {


  return (
    <div>
      <Clock />
      <Login />
      <form id="todo-form">
        <input id="todo-input" type="text" placeholder="Write a To Do and Press Enter" required />
      </form>
      <ul id="todo-list"></ul>
      <div id="quote">
        <div id="bible"></div>
        <div id="verse"></div>
      </div>

      <div id="weather">
        <div id="city"></div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Home;
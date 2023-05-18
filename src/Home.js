import Login from './Login';
import Clock from './Clock-main';
import Todo from './Todo';

function Home() {


  return (
    <div>
      <Clock />
      <Login />
      {/* <Todo /> */}

      <div id="weather">
        <div id="city"></div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Home;
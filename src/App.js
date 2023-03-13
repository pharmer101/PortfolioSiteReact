import React from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
//import projects from './projects.json';


function App() {
  return (
   <div>
     <Navbar/>
     <AboutMe />
     <Wrapper>
    <Projects
    name="Team Generator CLI"
    github="https://github.com/pharmer101/wk8Challenge5dayWeatherForecast"
    app = "https://pharmer101.github.io/wk8Challenge5dayWeatherForecast/"
    />

<Projects
    name="5dayWeatherForecast"
    github="https://github.com/pharmer101/Team-Generator-CLI"
    app = "Command line only"
    />

<Projects
    name="5dayWeatherForecast"
    github="https://github.com/pharmer101/Team-Generator-CLI"
    app = "Command line only"
    />
 </Wrapper>

      <Wrapper>
      <Title>Friends List</Title>
      <FriendCard
        name={friends[0].name}
        image={friends[0].image}
        occupation={friends[0].occupation}
        location={friends[0].location}
      />
      <FriendCard
        name={friends[1].name}
        image={friends[1].image}
        occupation={friends[1].occupation}
        location={friends[1].location}
      />
      <FriendCard
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location}

        //----Copy of Cards

        // <Title>Friends List</Title>
        // <FriendCard
        //   name={friends[0].name}
        //   image={friends[0].image}
        //   occupation={friends[0].occupation}
        //   location={friends[0].location}
        // />
        // <FriendCard
        //   name={friends[1].name}
        //   image={friends[1].image}
        //   occupation={friends[1].occupation}
        //   location={friends[1].location}
        // />
        // <FriendCard
        //   name={friends[2].name}
        //   image={friends[2].image}
        //   occupation={friends[2].occupation}
        //   location={friends[2].location}


        // ---- Copy of Cards
      />
    </Wrapper>
    </div>
  );
}

export default App;

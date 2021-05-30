import "./App.css";
import TeamCard from "./components/TeamCard";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { data } from "./data/dummyData";
import { teams } from "./data/teamsArray";

// const URL = `http://data.nba.net/json/cms/noseason/team/${team}/roster.json`;

function App() {
  const [playerData, setPlayerData] = useState(data);

  const getRandom = (event) => {
    event.preventDefault();
    const rndmTeam = Math.floor(Math.random() * 30);

    axios
      .get(
        `http://data.nba.net/json/cms/noseason/team/${teams[rndmTeam]}/roster.json`
      )
      .then((res) => {
        setPlayerData(res.data);
      })
      .catch((err) => console.log(err.data));
  };

  const getEastern = (event) => {
    // event.preventDefault();
    const rndmTeam = Math.floor(Math.random() * 15);
    console.log(rndmTeam);
    console.log(teams[rndmTeam]);
    axios
      .get(
        `http://data.nba.net/json/cms/noseason/team/${teams[rndmTeam]}/roster.json`
      )
      .then((res) => {
        setPlayerData(res.data);
      })
      .catch((err) => console.log(err.data));
  };
  const getWestern = (event) => {
    event.preventDefault();

    const rndmTeam = Math.floor(Math.random() * (29 - 17 + 1) + 17);
    console.log(rndmTeam);
    axios
      .get(
        `http://data.nba.net/json/cms/noseason/team/${teams[rndmTeam]}/roster.json`
      )
      .then((res) => {
        setPlayerData(res.data);
      })
      .catch((err) => console.log(err.data));
  };

  const handleChanges = (event) => {
    axios
      .get(
        `http://data.nba.net/json/cms/noseason/team/${event.target.value}/roster.json`
      )
      .then((res) => {
        setPlayerData(res.data);
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <div className="App">
      <select name="team" onChange={handleChanges}>
        <option>---CHOOSE A TEAM---</option>
        {teams.map((team) => (
          <option value={team} key={team}>
            {team.toUpperCase()}
          </option>
        ))}
      </select>
      <button onClick={getRandom}>Random Roster</button>
      <button onClick={getEastern}>Random Eastern Conference Roster</button>
      <button onClick={getWestern}>Random Western Conference Roster</button>
      <TeamCard playerData={playerData} />
    </div>
  );
}

export default App;

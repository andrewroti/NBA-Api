// import TeamCardModal from "./TeamCardModal";
import "./TeamCard.css";
// import { useState } from "react";

function TeamCard(props) {
  const { playerData } = props;
  console.log(playerData);
  const playerInfo = playerData.sports_content.roster.players.player;
  const teamName = playerData.sports_content.roster.team.team_nickname;
  const teamCity = playerData.sports_content.roster.team.team_city;
  const teamAbbrev = playerData.sports_content.roster.team.team_abbrev;
  const season = playerData.sports_content.roster.season_year;
  console.log(season);
  console.log(playerInfo[1].first_name);
  const espnLink = `https://www.espn.com/nba/team/_/name/${teamAbbrev}/${teamCity}-${teamName}`;
  // const [modalStatus, setModalStatus] = useState(false);
  // const test = "Test modal";
  // function toggleModal() {
  //   document.getElementById("modal").showModal();
  // }

  return (
    <div className={teamName.toLowerCase()}>
      <h1>
        {season} {""}
        <a href={espnLink} target="_blank" rel="noreferrer">
          {teamCity} {teamName}
        </a>{" "}
        Roster Info
      </h1>

      {playerInfo.map((playerInfo) => (
        <div>
          <p key={playerInfo.person_id}>
            {playerInfo.first_name} {playerInfo.last_name} played basketball for{" "}
            {playerInfo.affiliation} before the NBA{" "}
            <button
              onClick={() =>
                alert(
                  `${playerInfo.first_name} ${playerInfo.last_name} is ${playerInfo.height_ft}' ${playerInfo.height_in}" tall and wears jersey number ${playerInfo.jersey_number}`
                )
              }
            >
              +
            </button>
          </p>

          {/* <dialog id="modal">{playerInfo.first_name}</dialog> */}
        </div>
      ))}

      {/* <TeamCardModal playerInfo={playerInfo} /> */}
    </div>
  );
}

export default TeamCard;

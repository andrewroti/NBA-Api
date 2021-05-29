function TeamCardModal(props) {
  const { playerInfo } = props;
  //   console.log(playerInfo);
  //   console.log(playerInfo.first_name);
  //   console.log(playerInfo);
  console.log(playerInfo.first_name);
  return <div>{playerInfo.first_name}</div>;
}

export default TeamCardModal;

const Die = ({
  nameN,
  nameS,
  selected,
  onClick,
}: {
  nameN: number;
  nameS: string;
  selected: boolean;
  onClick: (nameN: number) => void;
}) => {
  // function handleClick(e) {
  //   if (e.currentTarget.classList.contains("selected")) {
  //     e.currentTarget.classList.remove("selected");
  //   } else {
  //     e.currentTarget.classList.add("selected");
  //   }
  //   console.log(e.currentTarget.classList);
  // }

  return (
    <div
      className={`outline ${selected && "selected"} hover:cursor-pointer`}
      onClick={() => onClick(nameN)}
    >
      <div id={`dice${nameN}`} className={`dice dice-${nameS}`}>
        <div id={`dice-${nameS}-side-one`} className="side one"></div>
        <div id={`dice-${nameS}-side-two`} className="side two"></div>
        <div id={`dice-${nameS}-side-three`} className="side three"></div>
        <div id={`dice-${nameS}-side-four`} className="side four"></div>
        <div id={`dice-${nameS}-side-five`} className="side five"></div>
        <div id={`dice-${nameS}-side-six`} className="side six"></div>
      </div>
    </div>
  );
};

export default Die;

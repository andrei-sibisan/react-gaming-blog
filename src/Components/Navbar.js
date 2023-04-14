function Year({ year, months }) {
  return (
    <div className="nav-year">
      <span>{year}</span>
      <ul>
        {months.map((month) => (
          <li>{month + 1}</li>
        ))}
      </ul>
    </div>
  );
}

function Navbar({ articles }) {
  let yearsElemArray = [];

  let yearsTemp = [];
  // get all unique years
  for (let i = 0; i < articles.length; i++) {
    let date = new Date(articles[i].date);
    let year = date.getFullYear();
    yearsTemp.push(year);
  }
  const yearsSet = new Set(yearsTemp);
  const yearsUnique = [...yearsSet];

  for (let i = 0; i < yearsUnique.length; i++) {
    let monthsTemp = [];
    for (let j = 0; j < articles.length; j++) {
      let date = new Date(articles[j].date);
      let year = date.getFullYear();
      if (yearsUnique[i] === year) {
        monthsTemp.push(date.getMonth());
      }
    }
    const monthsSet = new Set(monthsTemp);
    const monthsUnique = [...monthsSet];
    yearsElemArray.push(<Year year={yearsUnique[i]} months={monthsUnique} />);
  }

  return (
    <div className="navbar">
      <ul>{yearsElemArray}</ul>
    </div>
  );
}

export default Navbar;

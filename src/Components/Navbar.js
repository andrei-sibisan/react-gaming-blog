import { Link } from "react-router-dom";

function Year({ year, months }) {
  return (
    <div className="nav-year">
      <span>{year}</span>
      <ul>
        {months.map((month) => (
          <li>{month}</li>
        ))}
      </ul>
    </div>
  );
}

function Month({ month, days }) {
  return (
    <div className="nav-month">
      <span>{month}</span>
      <ul>
        {days.map((day) => (
          <li>{day}</li>
        ))}
      </ul>
    </div>
  );
}

function Day({ day, articleTitles }) {
  return (
    <div className="nav-article-titles">
      <span>{day}</span>
      <ul>
        {articleTitles.map((title) => (
          <li>
            <Link to={`articles/${title}`}>{title}</Link>
          </li>
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
    let monthsElemArray = [];

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

    for (let k = 0; k < monthsUnique.length; k++) {
      let daysElemArray = [];

      let daysTemp = [];
      for (let l = 0; l < articles.length; l++) {
        let date = new Date(articles[l].date);
        console.log("Dates are: ", date);
        let month = date.getMonth();
        if (monthsUnique[k] === month) {
          daysTemp.push(date.getDate());
          console.log("Days are: ", date.getDay());
        }
      }
      const daysSet = new Set(daysTemp);
      const daysUnique = [...daysSet];

      for (let m = 0; m < daysUnique.length; m++) {
        let articleTitles = [];
        for (let n = 0; n < articles.length; n++) {
          let date = new Date(articles[n].date);
          if (
            date.getFullYear() === yearsUnique[i] &&
            date.getMonth() === monthsUnique[k] &&
            date.getDate() === daysUnique[m]
          ) {
            articleTitles.push(articles[n].title);
          }
        }
        daysElemArray.push(
          <Day day={daysUnique[m]} articleTitles={articleTitles} />
        );
      }

      monthsElemArray.push(
        <Month month={monthsUnique[k] + 1} days={daysElemArray} />
      );
    }

    yearsElemArray.push(
      <Year year={yearsUnique[i]} months={monthsElemArray} />
    );
  }

  return (
    <div className="navbar">
      <ul>{yearsElemArray}</ul>
    </div>
  );
}

export default Navbar;

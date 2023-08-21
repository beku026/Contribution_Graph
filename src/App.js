import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./App.css";
import ContributionItem from "./components/ContributionItem/ContributionItem";

function App() {
  const [contribution, setContribution] = useState([]);
  const monthNames = [
    "Янв.",
    "Февр.",
    "Март",
    "Апр.",
    "Май",
    "Июнь",
    "Июль",
    "Авг.",
    "Сент.",
    "Окт.",
    "Нояб.",
    "Дек.",
  ];

  const currentDate = dayjs();
  const previousDate = currentDate.subtract(50, "week");

  const weeks = [];
  for (let i = 0; i < 51; i++) {
    const startOfWeek = previousDate.add(i, "week");
    const weekDays = [];

    for (let j = 0; j < 7; j++) {
      const day = startOfWeek.add(j, "day");
      const matchingContribution = contribution.find(
        (item) => item.date === day.format("YYYY-MM-DD")
      );
      const cotributionNumber = matchingContribution
        ? matchingContribution.cotributionNumber
        : 0;
      weekDays.push({
        day: day.format("YYYY-MM-DD"),
        count: cotributionNumber,
      });
    }

    weeks.push(weekDays);
  }

  const convertToArray = (obj) => {
    const arr = Object.entries(obj).map((item) => {
      const [date, cotributionNumber] = item;
      const itemConvertObj = { date, cotributionNumber };
      return itemConvertObj;
    });
    return arr;
  };

  const getcontribut = async () => {
    await fetch("https://dpg.gg/test/calendar.json")
      .then((res) => res.json())
      .then((res) => setContribution(() => convertToArray(res)));
  };

  useEffect(() => {
    getcontribut();
  }, []);

  return (
    <div className="App">
      <div className='widgetBlock'>
        {weeks?.map((item, weekIndex) => (
          <div className='weekContainer' key={`week-${weekIndex}`}>
            {weekIndex % 4 === 0 && (
              <div className='monthName'>
                {monthNames[currentDate.subtract(50 - weekIndex, 'week').month()]}
              </div>
            )}
            <div className='contribution'>
              {item.map(week => (
                <ContributionItem 
                  week={week} 
                  weekIndex={weekIndex}
                />
              ))}
            </div>
          </div>
          
        ))}
      </div> 
    </div>
  );
};

export default App;

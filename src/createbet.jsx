import React, { useState } from "react";
import Select from "react-select";
import "./App.css"; // Import the external CSS file

const CreateBet = () => {
  const [league, setLeague] = useState("");
  const [teams, setTeams] = useState("");
  const [selectedOdds, setSelectedOdds] = useState([]);
  const [date, setDate] = useState("");

  const oddsOptions = [
    { value: "1.5", label: "1.5" },
    { value: "2.0", label: "2.0" },
    { value: "3.5", label: "3.5" },
    { value: "4.0", label: "4.0" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form submitted:", { league, teams, selectedOdds, date });
  };

  return (
    <>
      <div className="create-bet-container">
        <h2 className="text-gray-100 uppercase mb-8 text-2xl font-bold">
          Add Local Games
        </h2>

        <form onSubmit={handleSubmit} className="create-bet-form">
          <div className="form-group">
            <label htmlFor="league">Team A:</label>
            <input
              type="text"
              id="league"
              value={league}
              onChange={(e) => setLeague(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="teams">Team B:</label>
            <input
              type="text"
              id="teams"
              value={teams}
              onChange={(e) => setTeams(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="odds">Odds:</label>
            <Select
              options={oddsOptions}
              isMulti
              value={selectedOdds}
              onChange={(selectedOptions) => setSelectedOdds(selectedOptions)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </form>
      </div>
      <div className="pop-up">
        <h1>Pop-Up Message</h1>
        <input type="text" placeholder="user name" />
        <textarea name="" id="" cols="90" rows="30"></textarea>
        <button type="submit">Send Msg</button>
      </div>
    </>
  );
};

export default CreateBet;

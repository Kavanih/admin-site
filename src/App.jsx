import React, { useState } from "react";
import "./App.css"; // Import the external CSS file
import CreateBet from "./createbet";
import Login from "./login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="app-container">
          <CreateBet />
          <div className="content-container">
            <div className="bg-gradient-to-b from-blue-900 to-blue-500 mt-4 text-white py-10 px-6 sm:px-10 -mx-4 sm:mx-0">
              {/* user management part */}
              <div className="user-management">
                <h1>User Balance Management</h1>
                <div className="overflow-x-auto bg-white rounded-lg shadow-lg mt-8">
                  <table className="table">
                    <thead className="table-header">
                      <tr>
                        <th>User</th>
                        <th>Balance</th>
                        <th>Email Address</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody className="table-body">
                      <tr>
                        <td>Username</td>
                        <td>
                          <input type="number" />
                        </td>
                        <td>Email Address</td>
                        <td>User Password</td>
                        <td>
                          <button className="btn-primary">Save</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Username</td>
                        <td>
                          <input type="number" />
                        </td>
                        <td>Email Address</td>
                        <td>User Password</td>
                        <td>
                          <button className="btn-primary">Save</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* leagues management part */}
              <div className="leagues-management">
                <h1>Leagues Management</h1>
                <div className="overflow-x-auto bg-white rounded-lg shadow-lg mt-8">
                  <table className="table">
                    <thead className="table-header">
                      <tr>
                        <th>Team</th>
                        <th>Current Score</th>
                        <th>Edit Status</th>
                      </tr>
                    </thead>
                    <tbody className="table-body">
                      <tr>
                        <td>Team A Vs Team B </td>
                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <select className="form-select">
                            <option value="">Select</option>
                            <option value="win">Win</option>
                            <option value="lose">Lose</option>
                          </select>
                        </td>
                        <td>
                          <button className="btn-primary">Save</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Team A Vs Team B </td>
                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <select className="form-select">
                            <option value="">Select</option>
                            <option value="win">Win</option>
                            <option value="lose">Lose</option>
                          </select>
                        </td>
                        <td>
                          <button className="btn-primary">Save</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;

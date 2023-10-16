import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Timetable from './timetableadmin/timetable';
import FacultyTable from './timetableadmin/facultytable';
import CreateTimetable from './timetableadmin/creatett';
import AddSubject from './timetableadmin/addsubject';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Timetable</h1>
            <Link to="/create-timetable">Create Timetable</Link>
          

        <Routes>
          <Route path="/tt/:generatedLink" element={<Timetable />} />
          <Route path="/facultytable" element={<FacultyTable />} />
          <Route path="/create-timetable" element={<CreateTimetable />} />
          <Route path="/tt/:generatedLink/addsubject" element={<AddSubject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

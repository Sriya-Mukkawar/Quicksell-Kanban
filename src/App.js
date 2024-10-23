import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
// import UserPreferences from './UserPreferences';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from './EventHandler/EventHandler';
import Loading from './components/Load/Loading';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets, loading, error } = useSelector(state => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  // Check if the data is still loading
  if (loading) {
    return <Loading />;
  }

  // Handle case where allTickets is not available
  if (!allTickets || allTickets.length === 0) {
    return <div>No tickets available</div>; // You can customize this message
  }

  return (
    <div style={{ paddingTop: "10px" }}>
      {/* <UserPreferences />   */}
      <Nav />
      <hr style={{ marginTop: "10px" }} />
      <KanbanBoard />
    </div>
  );
};

export default App;

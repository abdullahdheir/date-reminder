import { Container } from "react-bootstrap";
import { useEffect, useState } from 'react';
import DataCount from "./components/DataCount";
import DataLists from "./components/DataLists";
import DataActions from "./components/DataActions";
import person from "./components/Data";
function App() {
  const [personData, setPersonData] = useState(person);
  const clearAll = () => setPersonData([]);
  const viewAll = () => setPersonData(person);
  return (
    <Container className="font py-5">
      <DataCount person={personData}/>
      <DataLists person={personData}/>
      <DataActions onDelete={clearAll} onView={viewAll}/>
      
    </Container>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SelectTeamPage from "./pages/SelectTeamPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/select-team" element={<SelectTeamPage />} />
    </Routes>
  );
}

export default App;

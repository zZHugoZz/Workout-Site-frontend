import { Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthProvider from "./context/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";

import ProfilePage from "./pages/ProfilePage";

import ManagePage from "./pages/ManagePage";
import WorkoutsPage from "./pages/WorkoutsPage";
import ProgramsPage from "./pages/ProgramsPage";

import NutritionPage from "./pages/NutritionPage";

import ExplorePage from "./pages/ExplorePage";
import BackPage from "./pages/BackPage";

import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Headers />}>
              <Route path="/profile/" element={<ProfilePage />} />
              <Route path="/manage/" element={<ManagePage />} />
              <Route path="/manage/workouts/:id" element={<WorkoutsPage />} />
              <Route path="/manage/programs/:id" element={<ProgramsPage />} />
              <Route path="/nutrition/" element={<NutritionPage />} />
              <Route path="/explore/" element={<ExplorePage />} />
              <Route path="/explore/back/" element={<BackPage />} />
              <Route path="/community/" element={<CommunityPage />} />
            </Route>
          </Route>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login/" element={<LoginPage />} />
          <Route path="/signup/" element={<SignupPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

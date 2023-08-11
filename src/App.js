import { Routes, Route } from "react-router-dom";
import Headers from "./components/headers/Headers";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/authentication/LoginPage";
import SignupPage from "./pages/authentication/SignupPage";
import AuthProvider from "./context/AuthContext";
import PrivateRoutes from "./components/authentication/PrivateRoutes";

import ProfilePage from "./pages/profile/ProfilePage";

import ManagePage from "./pages/manage/ManagePage";
import WorkoutsPage from "./pages/manage/WorkoutsPage";
import WorkoutProvider from "./context/WorkoutContext";
import ProgramsPage from "./pages/manage/ProgramsPage";
import UnitProvider from "./context/UnitContext";

import NutritionPage from "./pages/nutrition/NutritionPage";

import ExplorePage from "./pages/explore/ExplorePage";
import BackPage from "./pages/explore/BackPage";

import CommunityPage from "./pages/community/CommunityPage";

function App() {
  return (
    <>
      <AuthProvider>
        {/* <WorkoutsProvider> */}
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Headers />}>
              <Route path="/profile/" element={<ProfilePage />} />
              <Route
                path="/manage/"
                element={
                  <UnitProvider>
                    <ManagePage />
                  </UnitProvider>
                }
              />
              <Route
                path="/manage/workouts/:id"
                element={
                  <WorkoutProvider>
                    <WorkoutsPage />
                  </WorkoutProvider>
                }
              />
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
        {/* </WorkoutsProvider> */}
      </AuthProvider>
    </>
  );
}

export default App;

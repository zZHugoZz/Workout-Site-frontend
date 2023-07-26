import "./App.css";
import "./assets/fonts/fonts.css";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import ManagePage from "./pages/ManagePage";
import WorkoutsPage from "./pages/WorkoutsPage";
import NutritionPage from "./pages/NutritionPage";
import ExplorePage from "./pages/ExplorePage";
import CommunityPage from "./pages/CommunityPage";
import AuthProvider from "./context/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Headers />}>
              <Route path="/profile/" element={<ProfilePage />} />
              <Route path="/manage/" element={<ManagePage />} />
              <Route path="/manage/workouts/:id" element={<WorkoutsPage />} />
              <Route path="/nutrition/" element={<NutritionPage />} />
              <Route path="/explore/" element={<ExplorePage />} />
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

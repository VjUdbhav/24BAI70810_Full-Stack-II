import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function HomeTab(){
  return <h1>Home</h1>
}

function Dashboard(){
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  )
}

function Profile(){
  return <h2>Profile</h2>
}

function Settings(){
  return <h2>Settings</h2>
}

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTab />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
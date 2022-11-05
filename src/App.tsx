import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "pages/notFound";
import Home from "pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      {
        // <Route element={<Something />}>
        //   <Route path="Child" element={<Child />} />
        // </Route>
      }
      <Route path="/" element={<Home />} />
      <Route path="/NotFound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/NotFound" replace />} />
    </Routes>
  );
}

export default App;

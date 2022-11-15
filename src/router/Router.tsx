import { memo, FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home";

export const Router: FC = memo(function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
});

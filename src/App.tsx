import { useState } from "react";
import "./App.css";
import FormsHandling from "./FormsExamples.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.tsx";
import ReactBasics from "./ReactBasics.tsx";
import { ReactHooks } from "./ReactHooks.tsx";
import { ContextApi } from "./ContextApi.tsx";
import { StateProps } from "./StateProps.tsx";
import { LifecycleMethods } from "./LifecycleMethods.tsx";
import { ReactModals } from "./ReactModals.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ReactBasics />} />
        <Route path="/state-and-props" element={<StateProps />} />
        <Route path="/lifecycle-methods" element={<LifecycleMethods />} />
        <Route path="/react-hooks" element={<ReactHooks />} />
        <Route path="/context-api" element={<ContextApi />} />
        <Route path="/react-modal" element={<ReactModals />} />
        <Route path="/react-examples" element={<FormsHandling />} />

        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

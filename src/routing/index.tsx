import SpikeCV from "@cv/spike_index";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import DesignSystem from "@ui/views/DesignSystem";
import Layout from "@ui/views/Layout";
import Maintenance from "@ui/views/Maintenance";

/**
 * Set-Up routing and view relationship here.
 * Delegates all routing and views with respect to layout components.
 */
const Routing = () => {
  return (
    <BrowserRouter>
      <DesignSystem>
        {/* START: Website Routing */}

        <Routes>
          <Route path="/cv" element={<SpikeCV />} />
          <Route element={<Layout />} path="/">
            <Route element={<SpikeCV />} path="" />
          </Route>
          <Route element={<Layout />} path="/maintenance">
            <Route element={<Maintenance />} path="" />
          </Route>
        </Routes>

        {/* END: Website Routing */}
      </DesignSystem>
    </BrowserRouter>
  );
};

export default Routing;

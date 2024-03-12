import { withProviders } from "./providers/index";
import { Routing } from "../pages/index";
import { Flowbite } from "flowbite-react";

const App = () => {
  return (
    <Flowbite>
      <div className="w-full min-h-screen bg-slate-50">
        <div className="w-full flex justify-center py-4">
          <Routing />
        </div>
      </div>
    </Flowbite>
  );
};

export default withProviders(App);

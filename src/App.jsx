import { RecoilRoot } from "recoil";
import { Fragment } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "../src/routes/index";

const App = () => {
  const queryClient = new QueryClient();
  // const cors = require("cors");
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </QueryClientProvider>

      {/* app.use(cors()); */}
    </Fragment>
  );
};

export default App;

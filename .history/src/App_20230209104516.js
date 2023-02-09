import { Fragment } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./shared/Router";

const App = () => {
  const queryClient = new QueryClient();
  const cors = require("cors");
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
      app.use(cors);
    </Fragment>
  );
};

export default App;

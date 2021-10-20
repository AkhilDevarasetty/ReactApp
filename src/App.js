import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainLayout from "./components/layout/MainLayout";
import AllMeetups from "./screens/AllMeetups";
import Favourites from "./screens/Favourites";
import NewMeetups from "./screens/NewMeetups";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/all-meetups" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetups" exact>
          <NewMeetups />
        </Route>
        <Route path="/favourites" exact>
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

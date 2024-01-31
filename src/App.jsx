import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Notes } from "./pages/Notes";
import { Create } from "./pages/Create";
import { ThemeProvider, createTheme } from "@mui/material";
import { blueGrey, purple } from "@mui/material/colors";
import { Layout } from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

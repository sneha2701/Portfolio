
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePages from "./Pages/HomePages";
import Aboutpage from "./Pages/Aboutpage";
import ContactPage from "./Pages/ContactPage";
import SkillPage from "./Pages/SkillPage";
import ExperiencePage from "./Pages/ExperiencePage";
import ProjectPage from "./Pages/ProjectPage";
import QualificationPage from "./Pages/QualificationPage";
import { Route, Switch } from "react-router";
//import MenuIcon from '@material-ui/icons/Menu'

function App() {
  return (
      <div className="App">
        <Sidebar />
        <MainContentStyled>
        <Switch>
          <Route path= "/" exact>
            <HomePages />
          </Route>
          <Route path= "/about" exact>
            <Aboutpage />
          </Route>
          <Route path= "/experience" exact>
            <ExperiencePage />
          </Route>
          <Route path= "/qualification" exact>
            <QualificationPage />
          </Route>
          <Route path= "/project" exact>
            <ProjectPage />
          </Route>
          <Route path= "/skill" exact>
            <SkillPage />
          </Route>
          <Route path= "/contact" exact>
            <ContactPage />
          </Route>
          
        </Switch>
        
        </MainContentStyled>

      </div>
  );
}

const MainContentStyled=styled.main`
position: relative;
margin-left: 10.3rem;
min-height: 100vh;

@media screen and (max-width:1200px){
  margin-left: 0;
  }

`;

export default App;

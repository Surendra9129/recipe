import logo from './logo.svg';
import './App.css';
import { Main_div } from './component/style/main_div';
import { Left_div } from './component/style/Left_div';
import { Right_div } from './component/style/Right_div';
import { Bottom_div } from './component/style/Bottom_div';
import Middle_cont from './Middle_cont';
import Right_container from './Right_container';
import RCP_form from './RCP_form';
function App() {
  return (
  <>
  
  <Main_div>
  
    <Left_div>
    <RCP_form></RCP_form>
    </Left_div>
    <Right_div>
      <Right_container></Right_container>
    </Right_div>
    <Bottom_div>
      <Middle_cont></Middle_cont>
    </Bottom_div>
  </Main_div>
  </>
  );
}

export default App;

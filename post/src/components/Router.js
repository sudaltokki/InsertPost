import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Read from './Read';
import Write from './Write';
import Edit from './Edit';
import Home from './Home';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

export default function AppRouter({isLoggedIn, userObj, upload}) {
    return (
        <>    
          <Switch>    
              <Route exact path="/"><Home isLoggedIn={isLoggedIn} userObj={userObj}/></Route>
              <Route path="/home"><Home isLoggedIn={isLoggedIn} userObj={userObj} upload={upload}/></Route>      
              <Route path="/read"><Read isLoggedIn={isLoggedIn} userObj={userObj}/></Route>
              <Route path="/write"><Write isLoggedIn={isLoggedIn} userObj={userObj} upload={upload}/></Route>
              <Route path="/edit"><Edit isLoggedIn={isLoggedIn} userObj={userObj} upload={upload}/></Route>
              <Route path="/login"><Login isLoggedIn={isLoggedIn} userObj={userObj}/></Route>
              <Route path="/signup"><Signup isLoggedIn={isLoggedIn} userObj={userObj}/></Route>
              <Route path="/:id"><div>잘못들어옴</div></Route>
            
          </Switch> 
        </>  
    );
};
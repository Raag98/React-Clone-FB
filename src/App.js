import './App.css';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      
      {
      !user ? (
          <>
            { console.log(user) }
            <Login />                    
          </>
        ) : (
          
          <>      
          { console.log(user) }
            {/* Header Componnent */}
            <Header />

            {/* App Body */}
            <div className="app_body">
              {/* SideBar */}
              <Sidebar />
              {/* Feed */}
              <Feed />
              {/*  Can add Widget using 'iFrame' */}
            </div>
          </>  
        )
      }
    </div>
  );
}

export default App;

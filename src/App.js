import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function hideMenu(){
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
}



function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/">Brett Lungal</Link>} scroll>
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer style={{background:"#212121", color: "#B3B3B3"}} title={<Link style={{textDecoration:'none', color:'#FFFFFF'}} to="/" onClick={() => hideMenu()}>Brett Lungal</Link>}>
                <Navigation>
                    <Link to="/aboutme" onClick={() => hideMenu()}>About Me</Link>
                    <Link to="/projects" onClick={() => hideMenu()}>Projects</Link>
                    <Link to="/contact"onClick={() => hideMenu()}>Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                  <Main/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;

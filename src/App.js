import './App.css';
import Footer from './components/footer-comp';
import Header from './components/header-comp';
import Main from './components/main-comp';

const headerText = 'Header'
const footerText = 'Footer'
const productList = [
  {id:1,
    name: 'Apple'
  },
  {id:2,
    name: 'Banana'
  },
  {id:3,
    name: 'Cherry'
  },
  {id:4,
    name: 'Carrot'
  }
]

function App() {
  return (
    <>    
      <Header text={headerText}/>
      <Main data={productList}/>
      <Footer text={footerText}/>
    </>
  );
}

export default App;

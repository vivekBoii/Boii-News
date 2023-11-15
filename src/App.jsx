import React, { useState , useEffect } from 'react';
import Navabar from './components/Navbar/Navabar';
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination/Pagination';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [page,setPage] = useState(1);
  const [article,setArticle] = useState(1);
  const [appSearch,appSetSearch]=useState("");
  const numArticle = 12;
  
  const apikey=import.meta.env.VITE_API_KEY2
  
  return (
    <Router>
      <Navabar appSearch={appSearch} appSetSearch={appSetSearch}/>
      <Routes>
      {/* key dalne se yeh reload hoga -- mount  */}
        <Route exact path="/" element={<Content key="Headlines" head="Headlines" category="general"  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
        <Route exact path="/entertainment" element={<Content key="entertainment" head={"entertainment"} category="entertainment"  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
        <Route exact path="/business" element={<Content key="business" head={"business"} category="business"  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
        <Route exact path="/health" element={<Content key="health" head={"health"} category="health"  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
        <Route exact path="/science" element={<Content key="science" head={"science"} category="science"  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
        <Route exact path="/sports" element={<Content key="sports" head={"sports"} category="sports"  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
        <Route exact path="/technology" element={<Content key="technology" head={"technology"} category="technology"  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
        <Route exact path="/bitcoin" element={<Content key="bitcoin" head={"bitcoin"} category="bitcoin"  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
        <Route exact path="/education" element={<Content key="education" head={"education"} category="education"  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
        <Route exact path="/environmental" element={<Content key="environmental" head={"environmental"} category="environmental"  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
        <Route exact path="/crime" element={<Content key="crime" category="crime" head={"crime"}  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
        <Route exact path="/search" element={<Content key="search" category={appSearch} head={appSearch}  apikey={apikey} setArticle={setArticle} page={page} setPage={setPage} numArticle={numArticle}/>} />
      </Routes>
      <Pagination numArticle={numArticle} article={article}  page={page} setPage={setPage} />
      <Footer/>
    </Router>
  )
}

export default App;
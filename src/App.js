import './App.css';
import {useState} from 'react';


function App() {
  const [inputFields, setInputFields] = useState({
    articleTitle: "gggggg",
    wordCountSelects:"",
    numberOfArticles:"",
    articleCost: "",
    articleKeywords:"",

  });

  const [keywordFields, setKeywordFields] = useState({articleKeyword:""});

  const addKeywords =() =>{
    setKeywordFields(...addKeywords, {articlekeyword: ""}  )
  };

  const wordCountOptions = [0, 150, 300, 500, 1000, 2000, 3000, 4000, 5000];


  const wordCount = [{word1:34, word2:45}];

const handleInputChange = e =>{
  const {name, value} = e.target;
  setInputFields({
    ...inputFields, [name]:value}

  );

};


  const [wordCountSelects, setWordCountSelects] = useState();
  const [numberOfArticles, setnumberOfArticles] = useState();
  const [articleTitle, setArticleTitle] = useState();


  const handleCost = () =>{
    // const wordCount = [0, 150, 300, 500, 1000, 2000, 3000, 4000, 5000]
  }


  return (
    <div className="App">
      <h1>Zelisline Logo</h1>

      <div className="order-box">
      <h1>Order Article</h1>
      <p>Fill the Form to Order an Article</p>

     <h2><label>Article Title: </label> <input type="text" value={inputFields.articleTitle} name="articleTitle" onChange={handleInputChange}/> </h2>
     <h2><label onChange={handleInputChange}>Number of Words: </label> </h2>

     <div>
     <select name="numberOfWords" className="select" value={inputFields.numberOfWords} onChange={handleInputChange} >  
   <option type="number"  value={150*0.03}>150 Words</option>
    <option value={300*0.03} type="number">300 Words</option>
    <option value={500*0.03}>500 Words</option>
    <option value={1000*0.03}>1000 Words</option>
    <option value={2000*0.03}>2000 Words</option>
    <option value={3000*0.03}>3000 Words</option>
    <option value={4000*0.03}>4000 Words</option>
    <option value={5000*0.03}>5000 Words</option>
  
     

  </select>
  
     </div>
  <br></br>
  <h2><label>How Many Articles: </label> <input type="number" name="numberOfArticles" value={inputFields.numberOfArticles} onChange={handleInputChange}/></h2>


     <p><b>Amount to Pay (in USDs): <p onChange={handleInputChange}>{inputFields.numberOfWords*inputFields.numberOfArticles}</p> </b>
</p>
     <h2><label>Article Keywords (Optional): </label> <input type="text" name="articleKeywords" value={keywordFields.articleKeywords} onChange={handleInputChange}/> <button onClick={addKeywords}>+</button><button>Remove</button></h2>
     <h2><label>Article Instructions (Optional): </label> <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea> </h2>


      <div className="upload-button"><h2><label className="upload-button">Upload a Sample Article (Optional): </label> <input type="file"className="upload-file"/> </h2></div>
     <h2><label>Due Date: </label> <input type="number" defaultValue = "00"/> </h2> <p id="timerr"> 00 </p>
     <h2><label>Amount to Pay: </label> <input type="number"/> </h2> <p id="totalPay">00 </p>

     </div>

     <div> <h2>Wordcount: {numberOfArticles} * {wordCountSelects} </h2> </div> 
     <div><h2>{articleTitle}</h2></div>
     <pre>
      {JSON.stringify(inputFields, null, 2)}
     </pre>
    </div>
  );
}

export default App;

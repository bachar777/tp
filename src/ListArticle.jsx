import React from 'react'

const ListArticle = () => {
    const [nouveauArticle, setNouveauArticle] = React.useState('');
    const [articles, setArticles] = React.useState(['Article 1', 'Article 2', 'Article 3']);
    function ajouterArticle(){
        setArticles([...articles, nouveauArticle]);
        setNouveauArticle('');
    }
  return (
    <div>
      <input type='text' value={nouveauArticle} onChange={(e) => setNouveauArticle(e.target.value)}></input>
      <button onClick={ajouterArticle}>Ajouter Article</button>

      <ul style={{ marginTop: '20px' }}>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>

  )
}

export default ListArticle

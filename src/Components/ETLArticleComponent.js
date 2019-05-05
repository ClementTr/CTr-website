import MiniBioComponent from './MiniBioComponent';
import React from 'react';

function ETLArticleComponent (){
 return (

   <div className="container margin-section">
     <div className="col-md-9">
       <div className="title-article">
         <h1 className="title-font">Extract, Transform & Load</h1>
         <h3>Pandas Basics with Arsenal Football Club</h3>
         <span className="mr-2 title-date">March 15, 2018 </span>
       </div>

       <p>
        Bonjour à tous
       </p>

       <div className=" highlight hl-ipython3">
        <pre>
          <span></span>
          <span className="k">def</span>
          <span className="nf"> remove_duplicates</span>
          <span className="p">(</span>
          <span className="n">df_extracted</span>
          <span className="p">):</span>
          <br/>
          <span className="sd">    &#39;&#39;&#39;</span>
          <br/>
          <span className="sd">    On garde qu&#39;une message ID, on supprime les doublons, ce qui permet de</span>
          <br/>
          <span className="sd">     pouvoir synchroniser deux extractions.</span>
          <br/>
          <span className="sd">    et de supprimer les données de chat et brouillons qui biaisent nos travaux</span>
          <br/>
          <span className="sd">    &#39;&#39;&#39;</span>
          <br/>
          <span className="nb">print</span>
          <span className="p">(</span>
          <span className="s2">&quot;Taille du data frame avec doublons: </span>
          <span className="si">%d</span>
          <span className="s2">&quot;</span>
          <span className="o"> % </span>
          <span className="nb">len</span>
          <span className="p">(</span>
          <span className="n">df_extracted</span>
          <span className="p">))</span>
          <br/>
          <span className="n">df_extracted</span>
          <span className="o">=</span>
          <span className="n">df_extracted</span>
          <span className="o">.</span>
          <span className="n">drop_duplicates</span>
          <span className="p">(</span>
          <span className="n">subset</span>
          <span className="o">=</span>
          <span className="s2">&quot;Message_ID&quot;</span>
          <span className="p">,</span>
          <span className="n">keep</span>
          <span className="o">=</span>
          <span className="s1">&#39;first&#39;</span>
          <span className="p">)</span>
          <br/>
          <span className="nb">print</span>
          <span className="p">(</span>
          <span className="s2">&quot;Taille du data frame sans doublon: </span>
          <span className="si">%d</span>
          <span className="s2">&quot;</span>
          <span className="o"> % </span>
          <span className="nb">len</span>
          <span className="p">(</span>
          <span className="n">df_extracted</span>
          <span className="p">))</span>
          <br/>
          <span className="n">remove_duplicates</span>
          <span className="p">(</span>
          <span className="n">df_extracted</span>
          <span className="p">)</span>
          <br/>
        </pre>
       </div>
     </div>



     <MiniBioComponent></MiniBioComponent>
   </div>
 )

}

export default ETLArticleComponent;

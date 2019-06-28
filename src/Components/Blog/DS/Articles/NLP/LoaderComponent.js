import React from 'react';

function LoaderComponent (){
 return (
   <div id='nlp-loader'>
     <h2>Loader</h2>
     <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="kn">from</span>
    		<span className="nn"> sklearn.model_selection</span>
    		<span className="k"> import</span>
    		<span className="n"> StratifiedKFold</span>
    		<span className="p">,</span>
    		<span className="n"> GridSearchCV</span>
    		<span className="p">,</span>
    		<span className="n"> train_test_split</span>
    		<span className="p">,</span>
    		<span className="n"> cross_val_score</span>
    		<span className="p">,</span>\
        <br/>
    		<span className="n">                                    cross_val_predict</span>
    		<span className="p">,</span>
    		<span className="n"> StratifiedShuffleSplit</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> sklearn.ensemble</span>
    		<span className="k"> import</span>
    		<span className="n"> RandomForestClassifier</span>
    		<span className="p">,</span>
    		<span className="n"> ExtraTreesClassifier</span>
    		<span className="p">,</span>\
        <br/>
    		<span className="n">                              BaggingClassifier</span>
    		<span className="p">,</span>
    		<span className="n"> VotingClassifier</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> sklearn.feature_extraction.text</span>
    		<span className="k"> import</span>
    		<span className="n"> CountVectorizer</span>
    		<span className="p">,</span>
    		<span className="n"> TfidfVectorizer</span><br/>
        <span className="kn">from</span>
    		<span className="nn"> sklearn.preprocessing</span>
    		<span className="k"> import</span>
    		<span className="n"> LabelBinarizer</span>
    		<span className="p">,</span>
    		<span className="n"> StandardScaler</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> sklearn.base</span>
    		<span className="k"> import</span>
    		<span className="n"> BaseEstimator</span>
    		<span className="p">,</span>
    		<span className="n"> TransformerMixin</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> sklearn.metrics</span>
    		<span className="k"> import</span>
    		<span className="n"> confusion_matrix</span>
    		<span className="p">,</span>
    		<span className="n"> f1_score</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> yellowbrick.model_selection</span>
    		<span className="k"> import</span>
    		<span className="n"> LearningCurve</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> sklearn.linear_model</span>
    		<span className="k"> import</span>
    		<span className="n"> LogisticRegression</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> sklearn.preprocessing</span>
    		<span className="k"> import</span>
    		<span className="n"> StandardScaler</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> sklearn.decomposition</span>
    		<span className="k"> import</span>
    		<span className="n"> TruncatedSVD</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> sklearn.naive_bayes</span>
    		<span className="k"> import</span>
    		<span className="n"> GaussianNB</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> sklearn.pipeline</span>
    		<span className="k"> import</span>
    		<span className="n"> Pipeline</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> stop_words</span>
    		<span className="k"> import</span>
    		<span className="n"> get_stop_words</span><br/>
    		<span className="kn">import</span>
    		<span className="nn"> matplotlib.pyplot</span>
    		<span className="k"> as</span>
    		<span className="nn"> plt</span><br/>
    		<span className="kn">from</span>
    		<span className="nn"> sklearn.svm</span>
    		<span className="k"> import</span>
    		<span className="n"> SVC</span><br/>
    		<span className="kn">import</span>
    		<span className="nn"> seaborn</span>
    		<span className="k"> as</span>
    		<span className="nn"> sns</span><br/>
    		<span className="kn">import</span>
    		<span className="nn"> pandas</span>
    		<span className="k"> as</span>
    		<span className="nn"> pd</span><br/>
    		<span className="kn">import</span>
    		<span className="nn"> numpy</span>
    		<span className="k"> as</span>
    		<span className="nn"> np</span><br/>
    		<span className="kn">import</span>
    		<span className="nn"> spacy</span><br/>
    		<span className="kn">import</span>
    		<span className="nn"> re</span><br/>
    		<span className="kn">import</span>
    		<span className="nn"> os</span>
    	</pre>
    </div>



    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="k">def</span>
    		<span className="nf"> data_loader</span>
    		<span className="p">(</span>
    		<span className="n">path</span>
    		<span className="p">):</span><br/>
    		<span className="n">    data_domain</span>
    		<span className="o"> = </span>
    		<span className="p">[</span>
    		<span className="s2">&quot;CIV&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;COM&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;CRIM&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;SOC&quot;</span>
    		<span className="p">]</span><br/>
    		<span className="n">    data</span>
    		<span className="o"> = </span>
    		<span className="p">[]</span><br/>
    		<span className="n">    full_path</span>
    		<span className="o"> = </span>
    		<span className="n">os</span>
    		<span className="o">.</span>
    		<span className="n">getcwd</span>
    		<span className="p">()</span>
    		<span className="o"> + </span>
    		<span className="s1">&#39;/&#39;</span>
    		<span className="o"> + </span>
    		<span className="n">path</span><br/>
    		<span className="k">    for</span>
    		<span className="n"> domain</span>
    		<span className="ow"> in</span>
    		<span className="n"> data_domain</span>
    		<span className="p">:</span><br/>
    		<span className="n">        data</span>
    		<span className="o">.</span>
    		<span className="n">append</span>
    		<span className="p">(</span>
    		<span className="n">pd</span>
    		<span className="o">.</span>
    		<span className="n">read_csv</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;</span>
    		<span className="si">{}</span>
    		<span className="s2">/</span>
    		<span className="si">{}</span>
    		<span className="s2">.csv&quot;</span>
    		<span className="o">.</span>
    		<span className="n">format</span>
    		<span className="p">(</span>
    		<span className="n">full_path</span>
    		<span className="p">,</span>
    		<span className="n"> domain</span>
    		<span className="p">),</span>
    		<span className="n"> header</span>
    		<span className="o">=</span>
    		<span className="kc">None</span>
    		<span className="p">,</span>
    		<span className="n"> names</span>
    		<span className="o">=</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;document&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;domain&quot;</span>
    		<span className="p">]))</span><br/>
    		<span className="k">    return</span>
    		<span className="n"> pd</span>
    		<span className="o">.</span>
    		<span className="n">concat</span>
    		<span className="p">(</span>
    		<span className="n">data</span>
    		<span className="p">,</span>
    		<span className="n"> ignore_index</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">,</span>
    		<span className="n"> sort</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">)</span>
        <br/>
        <br/>
    		<span className="n">decisions</span>
    		<span className="o"> = </span>
    		<span className="n">data_loader</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;data&quot;</span>
    		<span className="p">)</span>
    		<span className="c1"># Take a Quick Look at the Data Structure</span>
        <br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="n">decisions</span>
    		<span className="o">.</span>
    		<span className="n">shape</span>
    		<span className="p">)</span>
        <br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="n">decisions</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;domain&quot;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">value_counts</span>
    		<span className="p">())</span>
        <br/>
    		<span className="n">decisions</span>
    		<span className="o">.</span>
    		<span className="n">head</span>
    		<span className="p">()</span>
    	</pre>
    </div>


    <div className="output_text">
      <pre className='output_area'>
      (27998, 2)<br/>
      <br/>
      CIV     13087<br/>
      SOC     12262<br/>
      COM      2265<br/>
      CRIM      384<br/>
      Name: domain, dtype: int64
      </pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        <table border="1" className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>document</th>
              <th>domain</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>0</th>
              <td>&lt;p&gt;COUR D'APPEL DE BASTIA &lt;/p&gt;\n&lt;p&gt;CHAMBRE CIV...</td>
              <td>CIV</td>
            </tr>
            <tr>
              <th>1</th>
              <td>\n&lt;br&gt;\n&lt;p&gt;\n&lt;br clear="none"&gt;Ch. civile A &lt;/p...</td>
              <td>CIV</td>
            </tr>
            <tr>
              <th>2</th>
              <td>\nCOUR D'APPEL DE LYON &lt;br&gt;Troisième Chambre C...</td>
              <td>CIV</td>
            </tr>
            <tr>
              <th>3</th>
              <td>\n&lt;p&gt;\n&lt;br clear="none"&gt;\n&lt;br clear="none"&gt;Ch....</td>
              <td>CIV</td>
            </tr>
            <tr>
              <th>4</th>
              <td>\n&lt;p&gt;\n&lt;br clear="none"&gt;R. G : 09/ 01472 &lt;/p&gt;\...</td>
              <td>CIV</td>
            </tr>
          </tbody>
        </table>
      </pre>
    </div>


   </div>
 )
}

export default LoaderComponent;

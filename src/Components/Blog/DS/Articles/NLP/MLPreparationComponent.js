import React from 'react';

const tb = '    '

function MLPreparationComponent (){
 return (
   <div id='nlp-ml-preparation'>
    <h2>Prepare Data For Machine Learning Algorithm</h2>
    <h4>Split Data</h4>
    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="c1">#Split data in train-val/test with stratify on labels because classes are unbalanced</span><br/>
    		<span className="n">decisions_features</span>
    		<span className="p">,</span>
    		<span className="n"> decisions_features_test</span>
    		<span className="p">,</span>
    		<span className="n">y_train</span>
    		<span className="p">,</span>
    		<span className="n"> y_test</span>
    		<span className="o"> = </span>\
        <br/>
    		<span className="n">{tb}train_test_split</span>
    		<span className="p">(</span>
    		<span className="n">decisions</span>
    		<span className="p">,</span>
    		<span className="n"> decisions</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;domain&quot;</span>
    		<span className="p">],</span>
    		<span className="n"> stratify</span>
    		<span className="o">=</span>
    		<span className="n">decisions</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;domain&quot;</span>
    		<span className="p">],</span>\
        <br/>
    		<span className="n">                     random_state</span>
    		<span className="o">=</span>
    		<span className="mi">42</span>
    		<span className="p">,</span>
    		<span className="n"> test_size</span>
    		<span className="o">=</span>
    		<span className="mf">0.3</span>
    		<span className="p">,</span>
    		<span className="n"> shuffle</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">)</span>
        <br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Train-Val:</span>
    		<span className="se">\n</span>
    		<span className="s2">&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> decisions_features</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;domain&quot;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">value_counts</span>
    		<span className="p">())</span>
        <br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Test:</span>
    		<span className="se">\n</span>
    		<span className="s2">&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> decisions_features_test</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;domain&quot;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">value_counts</span>
    		<span className="p">())</span>
    	</pre>
    </div>


    <div className="output_text">
      <pre className='output_area'>
        Train-Val:<br/>
        CIV     9159<br/>
        SOC     8582<br/>
        COM     1584<br/>
        CRIM     268<br/>
        Name: domain, dtype: int64<br/>
        <br/>
        Test:<br/>
        CIV     3925<br/>
        SOC     3678<br/>
        COM      679<br/>
        CRIM     115<br/>
        Name: domain, dtype: int64
      </pre>
    </div>


    <h4>Data Cleaning</h4>
    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="k">class</span>
    		<span className="nc"> DataCleaner</span>
    		<span className="p">(</span>
    		<span className="n">BaseEstimator</span>
    		<span className="p">,</span>
    		<span className="n"> TransformerMixin</span>
    		<span className="p">):</span><br/>
        <br/>
    		<span className="k">{tb}def</span>
    		<span className="nf"> __init__</span>
    		<span className="p">(</span>
    		<span className="bp">self</span>
    		<span className="p">):</span><br/>
    		<span className="bp">{tb}{tb}self</span>
    		<span className="o">.</span>
    		<span className="n">X_cleaned</span>
    		<span className="o"> = </span>
    		<span className="kc">None</span><br/>
        <br/>
    		<span className="k">{tb}def</span>
    		<span className="nf"> clean_html_syntax</span>
    		<span className="p">(</span>
    		<span className="bp">self</span>
    		<span className="p">,</span>
    		<span className="n"> decision</span>
    		<span className="p">):</span><br/>
    		<span className="n">{tb}{tb}decision_cleaned</span>
    		<span className="o"> = </span>
    		<span className="n">decision</span>
    		<span className="o">.</span>
    		<span className="n">replace</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;</span>
    		<span className="se">\n</span>
    		<span className="s2">&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot; &quot;</span>
    		<span className="p">)</span>
    		<span className="c1">#Remove \n</span><br/>
    		<span className="n">{tb}{tb}decision_cleaned</span>
    		<span className="o"> = </span>
    		<span className="n">re</span>
    		<span className="o">.</span>
    		<span className="n">sub</span>
    		<span className="p">(</span>
    		<span className="sa">r</span>
    		<span className="s2">&quot;&lt;[^&gt;]*&gt;&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot; &quot;</span>
    		<span className="p">,</span>
    		<span className="n"> decision_cleaned</span>
    		<span className="p">)</span>
    		<span className="c1">#Remove html balises</span><br/>
    		<span className="n">{tb}{tb}decision_cleaned</span>
    		<span className="o"> = </span>
    		<span className="n">re</span>
    		<span className="o">.</span>
    		<span className="n">sub</span>
    		<span className="p">(</span>
    		<span className="sa">r</span>
    		<span className="s2">&quot;\b[a-zA-Z]</span>
    		<span className="si">{"{1}"}</span>
    		<span className="s2">\b&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot; &quot;</span>
    		<span className="p">,</span>
    		<span className="n"> decision_cleaned</span>
    		<span className="p">)</span>
    		<span className="c1"># Remove word size 1</span><br/>
    		<span className="k">{tb}{tb}return</span>
    		<span className="s2"> &quot; &quot;</span>
    		<span className="o">.</span>
    		<span className="n">join</span>
    		<span className="p">(</span>
    		<span className="n">decision_cleaned</span>
    		<span className="o">.</span>
    		<span className="n">split</span>
    		<span className="p">())</span>
    		<span className="c1"># Remove white spaces</span><br/>
        <br/>
    		<span className="k">{tb}def</span>
    		<span className="nf"> fit</span>
    		<span className="p">(</span>
    		<span className="bp">self</span>
    		<span className="p">,</span>
    		<span className="n"> X</span>
    		<span className="p">,</span>
    		<span className="n"> y</span>
    		<span className="o">=</span>
    		<span className="kc">None</span>
    		<span className="p">):</span><br/>
    		<span className="k">{tb}{tb}return</span>
    		<span className="bp"> self</span><br/>
        <br/>
    		<span className="k">{tb}def</span>
    		<span className="nf"> get_data_cleaned</span>
    		<span className="p">(</span>
    		<span className="bp">self</span>
    		<span className="p">):</span><br/>
    		<span className="k">{tb}{tb}return</span>
    		<span className="bp"> self</span>
    		<span className="o">.</span>
    		<span className="n">X_cleaned</span><br/>
        <br/>
    		<span className="k">{tb}def</span>
    		<span className="nf"> transform</span>
    		<span className="p">(</span>
    		<span className="bp">self</span>
    		<span className="p">,</span>
    		<span className="n"> X</span>
    		<span className="p">,</span>
    		<span className="n"> y</span>
    		<span className="o">=</span>
    		<span className="kc">None</span>
    		<span className="p">):</span><br/>
    		<span className="n">{tb}{tb}X_cleaned</span>
    		<span className="o"> = </span>
    		<span className="n">X</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;document&quot;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">apply</span>
    		<span className="p">(</span>
    		<span className="k">lambda</span>
    		<span className="n"> x</span>
    		<span className="p">:</span>
    		<span className="bp"> self</span>
    		<span className="o">.</span>
    		<span className="n">clean_html_syntax</span>
    		<span className="p">(</span>
    		<span className="n">x</span>
    		<span className="p">))</span><br/>
    		<span className="bp">{tb}{tb}self</span>
    		<span className="o">.</span>
    		<span className="n">X_cleaned</span>
    		<span className="o"> = </span>
    		<span className="n">X_cleaned</span><br/>
    		<span className="k">{tb}{tb}return</span>
    		<span className="n"> X_cleaned</span><br/>
        <br/>
    		<span className="n">stop_words</span>
    		<span className="o"> = </span>
    		<span className="n">get_stop_words</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;fr&#39;</span>
    		<span className="p">)</span>
        <br/>
    		<span className="n">nlp_pipeline</span>
    		<span className="o"> = </span>
    		<span className="n">Pipeline</span>
    		<span className="p">([</span>
        <br/>
    		<span className="p">{tb}{tb}(</span>
    		<span className="s1">&#39;cleaner&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> DataCleaner</span>
    		<span className="p">()),</span>
        <br/>
    		<span className="p">{tb}{tb}(</span>
    		<span className="s1">&#39;vectorizer&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> CountVectorizer</span>
    		<span className="p">(</span>
    		<span className="n">stop_words</span>
    		<span className="o">=</span>
    		<span className="n">stop_words</span>
    		<span className="p">,</span><br/>
    		<span className="n">{tb}{tb}{tb}{tb}{tb}{tb}{tb}{tb}{tb}{tb}lowercase</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">,</span><br/>
    		<span className="n">{tb}{tb}{tb}{tb}{tb}{tb}{tb}{tb}{tb}{tb}min_df</span>
    		<span className="o">=</span>
    		<span className="mi">10</span>
    		<span className="p">))</span>
        <br/>
    		<span className="p">])</span>
        <br/>
    		<span className="n">X_train</span>
    		<span className="o"> = </span>
    		<span className="n">nlp_pipeline</span>
    		<span className="o">.</span>
    		<span className="n">fit_transform</span>
    		<span className="p">(</span>
    		<span className="n">decisions_features</span>
    		<span className="p">)</span>
        <br/>
    		<span className="n">X_test</span>
    		<span className="o"> = </span>
    		<span className="n">nlp_pipeline</span>
    		<span className="o">.</span>
    		<span className="n">transform</span>
    		<span className="p">(</span>
    		<span className="n">decisions_features_test</span>
    		<span className="p">)</span>
    	</pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="k">def</span>
    		<span className="nf"> get_cleaned_dataframe</span>
    		<span className="p">(</span>
    		<span className="n">data</span>
    		<span className="p">,</span>
    		<span className="n"> pipeline</span>
    		<span className="p">):</span><br/>
    		<span className="n">{tb}col</span>
    		<span className="o"> = </span>
    		<span className="n">pipeline</span>
    		<span className="o">.</span>
    		<span className="n">named_steps</span>
    		<span className="o">.</span>
    		<span className="n">vectorizer</span>
    		<span className="o">.</span>
    		<span className="n">get_feature_names</span>
    		<span className="p">()</span><br/>
    		<span className="n">{tb}df</span>
    		<span className="o"> = </span>
    		<span className="n">pd</span>
    		<span className="o">.</span>
    		<span className="n">DataFrame</span>
    		<span className="p">(</span>
    		<span className="n">data</span>
    		<span className="o">.</span>
    		<span className="n">toarray</span>
    		<span className="p">(),</span>
    		<span className="n"> columns</span>
    		<span className="o">=</span>
    		<span className="n">col</span>
    		<span className="p">)</span><br/>
    		<span className="k">{tb}return</span>
    		<span className="n"> df</span><br/>
        <br/>
    		<span className="c1"># Display wordcount to improve cleaning and get more context</span>
    		<span className="n">df_cleaned</span>
    		<span className="o"> = </span>
    		<span className="n">get_cleaned_dataframe</span>
    		<span className="p">(</span>
    		<span className="n">X_train</span>
    		<span className="p">,</span>
    		<span className="n"> nlp_pipeline</span>
    		<span className="p">)</span><br/>
    		<span className="n">words_counting</span>
    		<span className="o"> = </span>
    		<span className="n">df_cleaned</span>
    		<span className="o">.</span>
    		<span className="n">sum</span>
    		<span className="p">(</span>
    		<span className="n">axis</span>
    		<span className="o">=</span>
    		<span className="mi">0</span>
    		<span className="p">)</span><br/>
    		<span className="n">words_counting</span>
    		<span className="o"> = </span>
    		<span className="n">words_counting</span>
    		<span className="o">.</span>
    		<span className="n">sort_values</span>
    		<span className="p">(</span>
    		<span className="n">ascending</span>
    		<span className="o">=</span>
    		<span className="kc">False</span>
    		<span className="p">)</span><br/>
    		<span className="n">words_counting</span>
    		<span className="p">[:</span>
    		<span className="mi">10</span>
    		<span className="p">]</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        société      215041<br/>
        article      180308<br/>
        cour         177734<br/>
        code         169296<br/>
        procédure    153085<br/>
        titre        151066<br/>
        monsieur     149533<br/>
        travail      134380<br/>
        jugement     129166<br/>
        euros        121254<br/>
        dtype: int64
      </pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="k">def</span>
    		<span className="nf"> word_frequency_barplot</span>
    		<span className="p">(</span>
    		<span className="n">words_count</span>
    		<span className="p">,</span>
    		<span className="n"> nb_top_words</span>
    		<span className="o">=</span>
    		<span className="mi">50</span>
    		<span className="p">):</span><br/>
    		<span className="n">{tb}fig</span>
    		<span className="p">,</span>
    		<span className="n"> ax</span>
    		<span className="o"> =</span>
    		<span className="n"> plt</span>
    		<span className="o">.</span>
    		<span className="n">subplots</span>
    		<span className="p">(</span>
    		<span className="mi">1</span>
    		<span className="p">,</span>
    		<span className="mi"> 1</span>
    		<span className="p">,</span>
    		<span className="n"> figsize</span>
    		<span className="o">=</span>
    		<span className="p">(</span>
    		<span className="mi">20</span>
    		<span className="p">,</span>
    		<span className="mi"> 5</span>
    		<span className="p">))</span><br/>
    		<span className="n">{tb}sns</span>
    		<span className="o">.</span>
    		<span className="n">barplot</span>
    		<span className="p">(</span>
    		<span className="nb">list</span>
    		<span className="p">(</span>
    		<span className="nb">range</span>
    		<span className="p">(</span>
    		<span className="n">nb_top_words</span>
    		<span className="p">)),</span>
    		<span className="n"> words_count</span>
    		<span className="p">[:</span>
    		<span className="n">nb_top_words</span>
    		<span className="p">],</span>
    		<span className="n"> palette</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;hls&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> ax</span>
    		<span className="o">=</span>
    		<span className="n">ax</span>
    		<span className="p">)</span><br/>
    		<span className="n">{tb}ax</span>
    		<span className="o">.</span>
    		<span className="n">set_xticks</span>
    		<span className="p">(</span>
    		<span className="nb">list</span>
    		<span className="p">(</span>
    		<span className="nb">range</span>
    		<span className="p">(</span>
    		<span className="n">nb_top_words</span>
    		<span className="p">)))</span><br/>
    		<span className="n">{tb}ax</span>
    		<span className="o">.</span>
    		<span className="n">set_xticklabels</span>
    		<span className="p">(</span>
    		<span className="n">words_count</span>
    		<span className="o">.</span>
    		<span className="n">index</span>
    		<span className="p">[:</span>
    		<span className="n">nb_top_words</span>
    		<span className="p">],</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">14</span>
    		<span className="p">,</span>
    		<span className="n"> rotation</span>
    		<span className="o">=</span>
    		<span className="mi">90</span>
    		<span className="p">)</span><br/>
    		<span className="k">{tb}return</span>
    		<span className="n"> ax</span><br/>
        <br/>
    		<span className="n">ax</span>
    		<span className="o"> = </span>
    		<span className="n">word_frequency_barplot</span>
    		<span className="p">(</span>
    		<span className="n">words_counting</span>
    		<span className="p">)</span>
        <br/>
    		<span className="n">ax</span>
    		<span className="o">.</span>
    		<span className="n">set_title</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Word Frequencies&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">16</span>
    		<span className="p">);</span>
    	</pre>
    </div>

    <img src='/img/main/NLP_2.png' width='100%'/>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="k">def</span>
    		<span className="nf"> display_wc_target</span>
    		<span className="p">(</span>
    		<span className="n">cat</span>
    		<span className="p">):</span><br/>
    		<span className="n">{tb}words_counting</span>
    		<span className="o"> = </span>
    		<span className="n">df_cleaned</span>
    		<span className="p">[</span>
    		<span className="n">df_cleaned</span>
    		<span className="p">[</span>
    		<span className="s1">&#39;target&#39;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="n">cat</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">drop</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;target&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> axis</span>
    		<span className="o">=</span>
    		<span className="mi">1</span>
    		<span className="p">)</span>
    		<span className="o">.</span>
    		<span className="n">sum</span>
    		<span className="p">(</span>
    		<span className="n">axis</span>
    		<span className="o">=</span>
    		<span className="mi">0</span>
    		<span className="p">)</span><br/>
    		<span className="n">{tb}words_counting</span>
    		<span className="o"> = </span>
    		<span className="n">words_counting</span>
    		<span className="o">.</span>
    		<span className="n">sort_values</span>
    		<span className="p">(</span>
    		<span className="n">ascending</span>
    		<span className="o">=</span>
    		<span className="kc">False</span>
    		<span className="p">)</span><br/>
    		<span className="n">{tb}ax</span>
    		<span className="o"> = </span>
    		<span className="n">word_frequency_barplot</span>
    		<span className="p">(</span>
    		<span className="n">words_counting</span>
    		<span className="p">)</span><br/>
    		<span className="k">{tb}return</span>
    		<span className="n"> ax</span>
    		<span className="o">.</span>
    		<span className="n">set_title</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Word Frequencies&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">16</span>
    		<span className="p">);</span><br/>
        <br/>
    		<span className="n">df_cleaned</span>
    		<span className="p">[</span>
    		<span className="s1">&#39;target&#39;</span>
    		<span className="p">]</span>
    		<span className="o"> = </span>
    		<span className="n">y_train</span>
        <br/>
    		<span className="k">for</span>
    		<span className="n"> cat</span>
    		<span className="ow"> in</span>
    		<span className="n"> df_cleaned</span>
    		<span className="p">[</span>
    		<span className="s1">&#39;target&#39;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">value_counts</span>
    		<span className="p">()</span>
    		<span className="o">.</span>
    		<span className="n">index</span>
    		<span className="o">.</span>
    		<span className="n">tolist</span>
    		<span className="p">():</span>
    		<span className="n">{tb}display_wc_target</span>
    		<span className="p">(</span>
    		<span className="n">cat</span>
    		<span className="p">)</span>
    	</pre>
    </div>

    <img src='/img/main/NLP_3.png' width='100%'/>
    <img src='/img/main/NLP_4.png' width='100%'/>

    <h4>Going Deeper in Data Cleaning/Data Visualization</h4>

    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="c1">#TFIDF &amp; NGRAMS: How Does it work</span><br/>
    		<span className="n">corpus</span>
    		<span className="o"> = </span>
    		<span className="p">[</span><br/>
    		<span className="s1">{tb}{tb}&#39;Un après midi par semaine dimanche ou lundi à définir amiablement&#39;</span>
    		<span className="p">,</span><br/>
    		<span className="s1">{tb}{tb}&#39;Que dans ces conditions la décision du premier juge en application de article 100 sera confirmée&#39;</span>
    		<span className="p">,</span><br/>
    		<span className="s1">{tb}{tb}&#39;cette demande diamétralement opposée à la celle de première instance sera déclarée irrecevable&#39;</span>
    		<span className="p">,</span><br/>
    		<span className="s1">{tb}{tb}&#39;condamner à lui payer 800 € en application de article 700 du Code de procédure civile et aux dépens&#39;</span>
    		<span className="p">,</span><br/>
    		<span className="p">]</span><br/>
        <br/>
    		<span className="n">vectorizer</span>
    		<span className="o"> = </span>
    		<span className="n">CountVectorizer</span>
    		<span className="p">(</span>
    		<span className="n">lowercase</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">,</span>
    		<span className="n"> ngram_range</span>
    		<span className="o">=</span>
    		<span className="p">(</span>
    		<span className="mi">2</span>
    		<span className="p">,</span>
    		<span className="mi"> 2</span>
    		<span className="p">))</span><br/>
    		<span className="n">X</span>
    		<span className="o"> = </span>
    		<span className="n">vectorizer</span>
    		<span className="o">.</span>
    		<span className="n">fit_transform</span>
    		<span className="p">(</span>
    		<span className="n">corpus</span>
    		<span className="p">)</span><br/>
    		<span className="n">pd</span>
    		<span className="o">.</span>
    		<span className="n">DataFrame</span>
    		<span className="p">(</span>
    		<span className="n">X</span>
    		<span className="o">.</span>
    		<span className="n">toarray</span>
    		<span className="p">(),</span>
    		<span className="n"> columns</span>
    		<span className="o">=</span>
    		<span className="n">vectorizer</span>
    		<span className="o">.</span>
    		<span className="n">get_feature_names</span>
    		<span className="p">())</span>
    	</pre>
    </div>


    <div className="output_text">
      <pre className='output_area'>
        <table border="1" className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>100 sera</th>
              <th>700 du</th>
              <th>800 en</th>
              <th>application de</th>
              <th>après midi</th>
              <th>article 100</th>
              <th>article 700</th>
              <th>aux dépens</th>
              <th>celle de</th>
              <th>ces conditions</th>
              <th>...</th>
              <th>par semaine</th>
              <th>payer 800</th>
              <th>premier juge</th>
              <th>première instance</th>
              <th>procédure civile</th>
              <th>que dans</th>
              <th>semaine dimanche</th>
              <th>sera confirmée</th>
              <th>sera déclarée</th>
              <th>un après</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>0</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>...</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <th>1</th>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>...</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th>2</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>...</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <th>3</th>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>...</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </pre>
    </div>



    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">vectorizer</span>
    		<span className="o"> = </span>
    		<span className="n">TfidfVectorizer</span>
    		<span className="p">()</span><br/>
    		<span className="n">X</span>
    		<span className="o"> = </span>
    		<span className="n">vectorizer</span>
    		<span className="o">.</span>
    		<span className="n">fit_transform</span>
    		<span className="p">(</span>
    		<span className="n">corpus</span>
    		<span className="p">)</span><br/>
    		<span className="n">X</span>
    		<span className="o"> = </span>
    		<span className="n">vectorizer</span>
    		<span className="o">.</span>
    		<span className="n">fit_transform</span>
    		<span className="p">(</span>
    		<span className="n">corpus</span>
    		<span className="p">)</span><br/>
    		<span className="n">pd</span>
    		<span className="o">.</span>
    		<span className="n">DataFrame</span>
    		<span className="p">(</span>
    		<span className="n">X</span>
    		<span className="o">.</span>
    		<span className="n">toarray</span>
    		<span className="p">(),</span>
    		<span className="n"> columns</span>
    		<span className="o">=</span>
    		<span className="n">vectorizer</span>
    		<span className="o">.</span>
    		<span className="n">get_feature_names</span>
    		<span className="p">())</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        <table border="1" className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>100</th>
              <th>700</th>
              <th>800</th>
              <th>amiablement</th>
              <th>application</th>
              <th>après</th>
              <th>article</th>
              <th>aux</th>
              <th>celle</th>
              <th>ces</th>
              <th>...</th>
              <th>ou</th>
              <th>par</th>
              <th>payer</th>
              <th>premier</th>
              <th>première</th>
              <th>procédure</th>
              <th>que</th>
              <th>semaine</th>
              <th>sera</th>
              <th>un</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>0</th>
              <td>0.0000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.316228</td>
              <td>0.000000</td>
              <td>0.316228</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.0000</td>
              <td>...</td>
              <td>0.316228</td>
              <td>0.316228</td>
              <td>0.000000</td>
              <td>0.0000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.0000</td>
              <td>0.316228</td>
              <td>0.000000</td>
              <td>0.316228</td>
            </tr>
            <tr>
              <th>1</th>
              <td>0.2759</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.217523</td>
              <td>0.000000</td>
              <td>0.217523</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.2759</td>
              <td>...</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.2759</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.2759</td>
              <td>0.000000</td>
              <td>0.217523</td>
              <td>0.000000</td>
            </tr>
            <tr>
              <th>2</th>
              <td>0.0000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.306417</td>
              <td>0.0000</td>
              <td>...</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.0000</td>
              <td>0.306417</td>
              <td>0.000000</td>
              <td>0.0000</td>
              <td>0.000000</td>
              <td>0.241583</td>
              <td>0.000000</td>
            </tr>
            <tr>
              <th>3</th>
              <td>0.0000</td>
              <td>0.257206</td>
              <td>0.257206</td>
              <td>0.000000</td>
              <td>0.202784</td>
              <td>0.000000</td>
              <td>0.202784</td>
              <td>0.257206</td>
              <td>0.000000</td>
              <td>0.0000</td>
              <td>...</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.257206</td>
              <td>0.0000</td>
              <td>0.000000</td>
              <td>0.257206</td>
              <td>0.0000</td>
              <td>0.000000</td>
              <td>0.000000</td>
              <td>0.000000</td>
            </tr>
          </tbody>
        </table>
      </pre>
    </div>


   </div>
 )
}

export default MLPreparationComponent;

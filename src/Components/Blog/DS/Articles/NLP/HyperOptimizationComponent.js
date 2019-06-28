import React from 'react';

const tb = '    '

function HyperOptimizationComponent (){
 return (
   <div id='nlp-hyper-optimization'>
     <h4>Hyper Parameters Optimization</h4>

     <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="c1"># Initialize SVD</span><br/>
    		<span className="n">svd</span>
    		<span className="o"> = </span>
    		<span className="n">TruncatedSVD</span>
    		<span className="p">()</span><br/>
        <br/>
    		<span className="c1"># Algorithms Kept</span><br/>
    		<span className="n">rf_model</span>
    		<span className="o"> = </span>
    		<span className="n">RandomForestClassifier</span>
    		<span className="p">()</span><br/>
    		<span className="n">et_model</span>
    		<span className="o"> = </span>
    		<span className="n">ExtraTreesClassifier</span>
    		<span className="p">()</span><br/>
    		<span className="n">bc_model</span>
    		<span className="o">=</span>
    		<span className="n">BaggingClassifier</span>
    		<span className="p">()</span>
    	</pre>
    </div>

    <h4>Random Forest - HP Optimization</h4>
    <div className=" highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="c1"># Create the pipeline </span><br/>
    		<span className="n">clf</span>
    		<span className="o"> = </span>
    		<span className="n">Pipeline</span>
    		<span className="p">([</span><br/>
        <span className="p">{tb}(</span>
    		<span className="s1">&#39;svd&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> svd</span>
    		<span className="p">),</span><br/>
    		<span className="p">{tb}(</span>
    		<span className="s1">&#39;clf&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> rf_model)</span><br/>
    		<span className="p">])</span><br/>
        <br/>
    		<span className="n">param_grid</span>
    		<span className="o"> = </span>
    		<span className="p">{"{"}</span>
    		<span className="s1">&#39;svd__n_components&#39;</span>
    		<span className="p">:</span>
    		<span className="p"> [</span>
    		<span className="mi">50</span>
    		<span className="p">,</span>
    		<span className="mi"> 100</span>
    		<span className="p">],</span>
    		<span className="s1"> &#39;clf__n_estimators&#39;</span>
    		<span className="p">:</span>
    		<span className="p"> [</span>
    		<span className="mi">10</span>
    		<span className="p">,</span>
    		<span className="mi"> 100</span>
    		<span className="p">],</span><br/>
    		<span className="s1">{tb}{tb}{tb}{tb}&#39;clf__max_depth&#39;</span>
    		<span className="p">:</span>
    		<span className="p"> [</span>
    		<span className="mi">50</span>
    		<span className="p">,</span>
    		<span className="mi"> 500</span>
    		<span className="p">],</span>
    		<span className="s1"> &#39;clf__class_weight&#39;</span>
    		<span className="p">:</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;balanced&quot;</span>
    		<span className="p">,</span>
    		<span className="kc"> None</span>
    		<span className="p">]}</span><br/>
    		<span className="c1"># max depth add bias default is none</span><br/>
    		<span className="c1"># Add balanced weights for small class</span><br/>
        <br/>
    		<span className="n">skf</span>
    		<span className="o"> = </span>
    		<span className="n">StratifiedKFold</span>
    		<span className="p">(</span>
    		<span className="mi">2</span>
    		<span className="p">)</span><br/>
    		<span className="c1"># Initialize Grid Search Model</span><br/>
    		<span className="n">gs_rf_model</span>
    		<span className="o"> = </span>
    		<span className="n">GridSearchCV</span>
    		<span className="p">(</span>
    		<span className="n">estimator</span>
    		<span className="o">=</span>
    		<span className="n">clf</span>
    		<span className="p">,</span>
    		<span className="n"> param_grid</span>
    		<span className="o">=</span>
    		<span className="n">param_grid</span>
    		<span className="p">,</span>
    		<span className="n"> scoring</span>
    		<span className="o">=</span>
    		<span className="s2">&quot;f1_micro&quot;</span>
    		<span className="p">,</span><br/>
    		<span className="n">{tb}{tb}{tb}{tb}{tb}{tb}{tb}cv</span>
    		<span className="o">=</span>
    		<span className="n">skf</span>
    		<span className="p">,</span>
    		<span className="n"> return_train_score</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">,</span>
    		<span className="n"> verbose</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">,</span>
    		<span className="n"> n_jobs</span>
    		<span className="o">=</span>
    		<span className="mi">4</span>
    		<span className="p">)</span><br/>
        <br/>
    		<span className="c1"># Fit Grid Search Model</span><br/>
    		<span className="n">gs_rf_model</span>
    		<span className="o">.</span>
    		<span className="n">fit</span>
    		<span className="p">(</span>
    		<span className="n">X_train</span>
    		<span className="p">,</span>
    		<span className="n"> y_train</span>
    		<span className="p">)</span>
        <br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;RANDOM FOREST:&quot;</span>
    		<span className="p">)</span>
        <br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Best score: </span>
    		<span className="si">%0.3f</span>
    		<span className="s2">&quot;</span>
    		<span className="o"> % </span>
    		<span className="n">gs_rf_model</span>
    		<span className="o">.</span>
    		<span className="n">best_score_</span>
    		<span className="p">)</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Best parameters set:&quot;</span>
    		<span className="p">)</span><br/>
    		<span className="n">best_parameters</span>
    		<span className="o"> = </span>
    		<span className="n">gs_rf_model</span>
    		<span className="o">.</span>
    		<span className="n">best_estimator_</span>
    		<span className="o">.</span>
    		<span className="n">get_params</span>
    		<span className="p">()</span><br/>
    		<span className="k">for</span>
    		<span className="n"> param_name</span>
    		<span className="ow"> in</span>
    		<span className="nb"> sorted</span>
    		<span className="p">(</span>
    		<span className="n">param_grid</span>
    		<span className="o">.</span>
    		<span className="n">keys</span>
    		<span className="p">()):</span><br/>
    		<span className="nb">{tb}print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;</span>
    		<span className="se">\t</span>
    		<span className="si">%s</span>
    		<span className="s2">: </span>
    		<span className="si"> %r</span>
    		<span className="s2">&quot;</span>
    		<span className="o"> % </span>
    		<span className="p">(</span>
    		<span className="n">param_name</span>
    		<span className="p">,</span>
    		<span className="n"> best_parameters</span>
    		<span className="p">[</span>
    		<span className="n">param_name</span>
    		<span className="p">]))</span><br/>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        [Parallel(n_jobs=4)]: Using backend LokyBackend with 4 concurrent workers.<br/>
        [Parallel(n_jobs=4)]: Done  32 out of  32 | elapsed:  4.4min finished
      </pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        RANDOM FOREST:<br/>
        Best score: 0.905<br/>
        Best parameters set:<br/>
        {tb}clf__class_weight: None<br/>
        {tb}clf__max_depth: 500<br/>
        {tb}clf__n_estimators: 100<br/>
        {tb}svd__n_components: 50
      </pre>
    </div>

    <h4>Extra Trees - HP Optimization</h4>
    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">clf</span>
    		<span className="o"> = </span>
    		<span className="n">Pipeline</span>
    		<span className="p">([</span><br/>
        <span className="p">{tb}(</span>
    		<span className="s1">&#39;svd&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> svd</span>
    		<span className="p">),</span><br/>
    		<span className="p">{tb}(</span>
    		<span className="s1">&#39;clf&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> et_model</span>
    		<span className="p">)</span><br/>
        <span className="p">])</span><br/>
        <br/>
    		<span className="n">param_grid</span>
    		<span className="o"> = </span>
    		<span className="p">{'{'}</span>
    		<span className="s1">&#39;svd__n_components&#39;</span>
    		<span className="p">:</span>
    		<span className="p"> [</span>
    		<span className="mi">50</span>
    		<span className="p">],</span>
    		<span className="s1"> &#39;clf__n_estimators&#39;</span>
    		<span className="p">:</span>
    		<span className="p">[</span>
    		<span className="mi">1000</span>
    		<span className="p">],</span>
        <br/>
    		<span className="s1">{tb}{tb}{tb}{tb}&#39;clf__max_depth&#39;</span>
    		<span className="p">:</span>
    		<span className="p">[</span>
    		<span className="mi">100</span>
    		<span className="p">,</span>
    		<span className="mi"> 300</span>
    		<span className="p">],</span>
    		<span className="s1"> &#39;clf__class_weight&#39;</span>
    		<span className="p">:</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;balanced&quot;</span>
    		<span className="p">,</span>
    		<span className="kc"> None</span>
    		<span className="p">]}</span><br/>
        <br/>
    		<span className="n">skf</span>
    		<span className="o"> = </span>
    		<span className="n">StratifiedKFold</span>
    		<span className="p">(</span>
    		<span className="mi">2</span>
    		<span className="p">)</span><br/>
    		<span className="n">gs_et_model</span>
    		<span className="o"> = </span>
    		<span className="n">GridSearchCV</span>
    		<span className="p">(</span>
    		<span className="n">estimator</span>
    		<span className="o">=</span>
    		<span className="n">clf</span>
    		<span className="p">,</span>
    		<span className="n"> param_grid</span>
    		<span className="o">=</span>
    		<span className="n">param_grid</span>
    		<span className="p">,</span>
    		<span className="n"> scoring</span>
    		<span className="o">=</span>
    		<span className="s2">&quot;f1_micro&quot;</span>
    		<span className="p">,</span>\
        <br/>
    		<span className="n">{tb}{tb}{tb}{tb}{tb}{tb}{tb}cv</span>
    		<span className="o">=</span>
    		<span className="n">skf</span>
    		<span className="p">,</span>
    		<span className="n"> return_train_score</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">,</span>
    		<span className="n"> verbose</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">,</span>
    		<span className="n"> n_jobs</span>
    		<span className="o">=</span>
    		<span className="mi">4</span>
    		<span className="p">)</span><br/>
        <br/>
    		<span className="n">gs_et_model</span>
    		<span className="o">.</span>
    		<span className="n">fit</span>
    		<span className="p">(</span>
    		<span className="n">X_train</span>
    		<span className="p">,</span>
    		<span className="n"> y_train</span>
    		<span className="p">)</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;EXTRA TREES:&quot;</span>
    		<span className="p">)</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Best score: </span>
    		<span className="si">%0.3f</span>
    		<span className="s2">&quot;</span>
    		<span className="o"> % </span>
    		<span className="n">gs_et_model</span>
    		<span className="o">.</span>
    		<span className="n">best_score_</span>
    		<span className="p">)</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Best parameters set:&quot;</span>
    		<span className="p">)</span><br/>
    		<span className="n">best_parameters</span>
    		<span className="o"> = </span>
    		<span className="n">gs_et_model</span>
    		<span className="o">.</span>
    		<span className="n">best_estimator_</span>
    		<span className="o">.</span>
    		<span className="n">get_params</span>
    		<span className="p">()</span><br/>
    		<span className="k">for</span>
    		<span className="n"> param_name</span>
    		<span className="ow"> in</span>
    		<span className="nb"> sorted</span>
    		<span className="p">(</span>
    		<span className="n">param_grid</span>
    		<span className="o">.</span>
    		<span className="n">keys</span>
    		<span className="p">()):</span><br/>
    		<span className="nb">{tb}print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;</span>
    		<span className="se">\t</span>
    		<span className="si">%s</span>
    		<span className="s2">: </span>
    		<span className="si">%r</span>
    		<span className="s2">&quot;</span>
    		<span className="o"> % </span>
    		<span className="p">(</span>
    		<span className="n">param_name</span>
    		<span className="p">,</span>
    		<span className="n"> best_parameters</span>
    		<span className="p">[</span>
    		<span className="n">param_name</span>
    		<span className="p">]))</span><br/>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        [Parallel(n_jobs=4)]: Using backend LokyBackend with 4 concurrent workers.<br/>
        [Parallel(n_jobs=4)]: Done   8 out of   8 | elapsed:  2.3min finished
      </pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        EXTRA TREES:<br/>
        Best score: 0.905<br/>
        Best parameters set:<br/>
        {tb}clf__class_weight: None<br/>
        {tb}clf__max_depth: 100<br/>
        {tb}clf__n_estimators: 1000<br/>
        {tb}svd__n_components: 50
      </pre>
    </div>

    <h4>Bagging - HP Optimization</h4>
    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">clf</span>
    		<span className="o"> = </span>
    		<span className="n">Pipeline</span>
    		<span className="p">([</span><br/>
        <span className="p">{tb}(</span>
    		<span className="s1">&#39;svd&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> svd</span>
    		<span className="p">),</span><br/>
    		<span className="p">{tb}(</span>
    		<span className="s1">&#39;clf&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> bc_model</span>
    		<span className="p">)</span><br/>
        <span className="p">])</span><br/>
        <br/>
    		<span className="n">param_grid</span>
    		<span className="o"> = </span>
    		<span className="p">{'{'}</span>
    		<span className="s1">&#39;svd__n_components&#39;</span>
    		<span className="p">:</span>
    		<span className="p"> [</span>
    		<span className="mi">25</span>
    		<span className="p">,</span>
    		<span className="mi"> 75</span>
    		<span className="p">],</span>
    		<span className="s1"> &#39;clf__n_estimators&#39;</span>
    		<span className="p">:</span>
    		<span className="p"> [</span>
    		<span className="mi">10</span>
    		<span className="p">,</span>
    		<span className="mi"> 100</span>
    		<span className="p">]}</span><br/>
        <br/>
    		<span className="n">skf</span>
    		<span className="o"> = </span>
    		<span className="n">StratifiedKFold</span>
    		<span className="p">(</span>
    		<span className="mi">2</span>
    		<span className="p">)</span><br/>
    		<span className="n">gs_bc_model</span>
    		<span className="o"> = </span>
    		<span className="n">GridSearchCV</span>
    		<span className="p">(</span>
    		<span className="n">estimator</span>
    		<span className="o">=</span>
    		<span className="n">clf</span>
    		<span className="p">,</span>
    		<span className="n"> param_grid</span>
    		<span className="o">=</span>
    		<span className="n">param_grid</span>
    		<span className="p">,</span>
    		<span className="n"> scoring</span>
    		<span className="o">=</span>
    		<span className="s2">&quot;f1_micro&quot;</span>
    		<span className="p">,</span>\
        <br/>
    		<span className="n">{tb}{tb}{tb}{tb}{tb}{tb}{tb}cv</span>
    		<span className="o">=</span>
    		<span className="n">skf</span>
    		<span className="p">,</span>
    		<span className="n"> return_train_score</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">,</span>
    		<span className="n"> verbose</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">,</span>
    		<span className="n"> n_jobs</span>
    		<span className="o">=</span>
    		<span className="mi">4</span>
    		<span className="p">)</span><br/>
        <br/>
    		<span className="n">gs_bc_model</span>
    		<span className="o">.</span>
    		<span className="n">fit</span>
    		<span className="p">(</span>
    		<span className="n">X_train</span>
    		<span className="p">,</span>
    		<span className="n"> y_train</span>
    		<span className="p">)</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;BAGGING:&quot;</span>
    		<span className="p">)</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Best score: </span>
    		<span className="si">%0.3f</span>
    		<span className="s2">&quot;</span>
    		<span className="o"> % </span>
    		<span className="n">gs_bc_model</span>
    		<span className="o">.</span>
    		<span className="n">best_score_</span>
    		<span className="p">)</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Best parameters set:&quot;</span>
    		<span className="p">)</span><br/>
    		<span className="n">best_parameters</span>
    		<span className="o"> = </span>
    		<span className="n">gs_bc_model</span>
    		<span className="o">.</span>
    		<span className="n">best_estimator_</span>
    		<span className="o">.</span>
    		<span className="n">get_params</span>
    		<span className="p">()</span><br/>
    		<span className="k">for</span>
    		<span className="n"> param_name</span>
    		<span className="ow"> in</span>
    		<span className="nb"> sorted</span>
    		<span className="p">(</span>
    		<span className="n">param_grid</span>
    		<span className="o">.</span>
    		<span className="n">keys</span>
    		<span className="p">()):</span><br/>
    		<span className="nb">{tb}print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;</span>
    		<span className="se">\t</span>
    		<span className="si">%s</span>
    		<span className="s2">: </span>
    		<span className="si">%r</span>
    		<span className="s2">&quot;</span>
    		<span className="o"> % </span>
    		<span className="p">(</span>
    		<span className="n">param_name</span>
    		<span className="p">,</span>
    		<span className="n"> best_parameters</span>
    		<span className="p">[</span>
    		<span className="n">param_name</span>
    		<span className="p">]))</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        [Parallel(n_jobs=4)]: Using backend LokyBackend with 4 concurrent workers.<br/>
        [Parallel(n_jobs=4)]: Done   8 out of   8 | elapsed:  2.2min finished
      </pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        BAGGING:<br/>
        Best score: 0.903<br/>
        Best parameters set:<br/>
          {tb}clf__n_estimators: 100<br/>
          {tb}svd__n_components: 75
      </pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">clean_used</span>
    		<span className="o"> = </span>
    		<span className="kc">False</span><br/>
    		<span className="k">if</span>
    		<span className="n"> clean_used</span>
    		<span className="p">:</span><br/>
    		<span className="n">{tb}pipeline</span>
    		<span className="o"> = </span>
    		<span className="n">Pipeline</span>
    		<span className="p">([</span><br/>
    		<span className="p">{tb}{tb}{tb}{tb}{tb}{tb} (</span>
    		<span className="s1">&#39;cleaner&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> DataCleaner</span>
    		<span className="p">()),</span><br/>
    		<span className="p">{tb}{tb}{tb}{tb}{tb}{tb} (</span>
    		<span className="s1">&#39;vectorizer&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> CountVectorizer</span>
    		<span className="p">(</span>
    		<span className="n">stop_words</span>
    		<span className="o">=</span>
    		<span className="n">stop_words</span>
    		<span className="p">,</span>
    		<span className="n">lowercase</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">)),</span><br/>
    		<span className="p">{tb}{tb}{tb}{tb}{tb}{tb} (</span>
    		<span className="s1">&#39;svd&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> svd</span>
    		<span className="p">),</span><br/>
    		<span className="p">{tb}{tb}{tb}{tb}{tb}{tb} (</span>
    		<span className="s1">&#39;clf&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> et_model</span>
    		<span className="p">)</span><br/>
    		<span className="p">{tb}{tb}{tb}{tb}{tb}{tb}])</span><br/>
        <br/>
    		<span className="n">{tb}param_grid</span>
    		<span className="o"> = </span>
    		<span className="p">{'{'}</span><br/>
    		<span className="s1">{tb}{tb}{tb}{tb}{tb}&#39;vectorizer__max_features&#39;</span>
    		<span className="p">:</span>
    		<span className="p"> [</span>
    		<span className="mi">1000</span>
    		<span className="p">,</span>
    		<span className="mi"> 10000</span>
    		<span className="p">],</span><br/>
    		<span className="s1">{tb}{tb}{tb}{tb}{tb}&#39;svd__n_components&#39;</span>
    		<span className="p">:</span>
    		<span className="p"> [</span>
    		<span className="mi">100</span>
    		<span className="p">,</span>
    		<span className="mi"> 500</span>
    		<span className="p">],</span><br/>
    		<span className="s1">{tb}{tb}{tb}{tb}{tb}&#39;clf__n_estimators&#39;</span>
    		<span className="p">:</span>
    		<span className="p"> [</span>
    		<span className="mi">1000</span>
    		<span className="p">],</span><br/>
    		<span className="s1">{tb}{tb}{tb}{tb}{tb}&#39;clf__max_depth&#39;</span>
    		<span className="p">:</span>
    		<span className="p">[</span>
    		<span className="mi">500</span>
    		<span className="p">]</span><br/>
    		<span className="p">{tb}{tb}{tb}{tb} }</span><br/>
        <br/>
    		<span className="n">{tb}strat_cv</span>
    		<span className="o"> = </span>
    		<span className="n">StratifiedKFold</span>
    		<span className="p">(</span>
    		<span className="mi">2</span>
    		<span className="p">)</span><br/>
    		<span className="n">{tb}model</span>
    		<span className="o"> = </span>
    		<span className="n">GridSearchCV</span>
    		<span className="p">(</span>
    		<span className="n">estimator</span>
    		<span className="o">=</span>
    		<span className="n">pipeline</span>
    		<span className="p">,</span>
    		<span className="n"> param_grid</span>
    		<span className="o">=</span>
    		<span className="n">param_grid</span>
    		<span className="p">,</span>
    		<span className="n"> scoring</span>
    		<span className="o">=</span>
    		<span className="s2">&quot;f1_micro&quot;</span>
    		<span className="p">,</span><br/>
    		<span className="n">{tb}{tb}{tb}{tb}{tb}cv</span>
    		<span className="o">=</span>
    		<span className="n">strat_cv</span>
    		<span className="p">,</span>
    		<span className="n"> return_train_score</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">,</span>
    		<span className="n"> verbose</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">,</span>
    		<span className="n"> n_jobs</span>
    		<span className="o">=</span>
    		<span className="mi">4</span>
    		<span className="p">)</span><br/>
        <br/>
    		<span className="n">{tb}model</span>
    		<span className="o">.</span>
    		<span className="n">fit</span>
    		<span className="p">(</span>
    		<span className="n">decisions_features</span>
    		<span className="p">,</span>
    		<span className="n"> decisions_labels</span>
    		<span className="p">)</span><br/>
    		<span className="nb">{tb}print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;EXTRA TREES&quot;</span>
    		<span className="p">)</span><br/>
    		<span className="nb">{tb}print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Best score: </span>
    		<span className="si">%0.3f</span>
    		<span className="s2">&quot;</span>
    		<span className="o"> % </span>
    		<span className="n">model</span>
    		<span className="o">.</span>
    		<span className="n">best_score_</span>
    		<span className="p">)</span><br/>
    		<span className="nb">{tb}print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Best parameters set:&quot;</span>
    		<span className="p">)</span><br/>
    		<span className="n">{tb}best_parameters</span>
    		<span className="o"> = </span>
    		<span className="n">model</span>
    		<span className="o">.</span>
    		<span className="n">best_estimator_</span>
    		<span className="o">.</span>
    		<span className="n">get_params</span>
    		<span className="p">()</span><br/>
    		<span className="k">{tb}for</span>
    		<span className="n"> param_name</span>
    		<span className="ow"> in</span>
    		<span className="nb"> sorted</span>
    		<span className="p">(</span>
    		<span className="n">param_grid</span>
    		<span className="o">.</span>
    		<span className="n">keys</span>
    		<span className="p">()):</span><br/>
    		<span className="nb">{tb}{tb}print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;</span>
    		<span className="se">\t</span>
    		<span className="si">%s</span>
    		<span className="s2">: </span>
    		<span className="si">%r</span>
    		<span className="s2">&quot;</span>
    		<span className="o">%</span>
    		<span className="p">(</span>
    		<span className="n">param_name</span>
    		<span className="p">,</span>
    		<span className="n">best_parameters</span>
    		<span className="p">[</span>
    		<span className="n">param_name</span>
    		<span className="p">]))</span>
    	</pre>
    </div>


   </div>
 )
}

export default HyperOptimizationComponent;

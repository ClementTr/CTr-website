import React from 'react';

const tb = '    '

function TrainingComponent (){
 return (
   <div id='nlp-training'>
     <h2>Training Algorithms</h2>
     <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">TRAIN_DATA_V0</span>
    		<span className="o"> = </span>
    		<span className="p">[</span>
    		<span className="kc">False</span>
    		<span className="p">,</span>
    		<span className="kc"> False</span>
    		<span className="p">]</span><br/>
        <br/>
    		<span className="n">TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">0</span>
    		<span className="p">],</span>
    		<span className="n"> _</span>
    		<span className="p">,</span>
    		<span className="n"> TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">1</span>
    		<span className="p">],</span>
    		<span className="n"> _</span>
    		<span className="o"> = </span>\
        <br/>
    		<span className="n">{tb}{tb}{tb}train_test_split</span>
    		<span className="p">(</span>
    		<span className="n">X_train</span>
    		<span className="p">,</span>
    		<span className="n"> y_train</span>
    		<span className="p">,</span>
    		<span className="n"> test_size</span>
    		<span className="o">=</span>
    		<span className="n">X_train</span>
    		<span className="o">.</span>
    		<span className="n">shape</span>
    		<span className="p">[</span>
    		<span className="mi">0</span>
    		<span className="p">]</span>
    		<span className="o">-</span>
    		<span className="mi">1000</span>
    		<span className="p">,</span><br/>
    		<span className="n">{tb}{tb}{tb}{tb}{tb}{tb}{tb}stratify</span>
    		<span className="o">=</span>
    		<span className="n">y_train</span>
    		<span className="p">,</span>
    		<span className="n"> random_state</span>
    		<span className="o">=</span>
    		<span className="mi">42</span>
    		<span className="p">)</span><br/>
    		<span className="n">TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">0</span>
    		<span className="p">]</span>
    		<span className="o"> = </span>
    		<span className="n">TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">0</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">toarray</span>
    		<span className="p">()</span>
    	</pre>
    </div>

    <h4>Naive Approach</h4>

    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">clf_nb</span>
    		<span className="o"> = </span>
    		<span className="n">GaussianNB</span>
    		<span className="p">()</span><br/>
    		<span className="n">scores</span>
    		<span className="o"> = </span>
    		<span className="n">cross_val_score</span>
    		<span className="p">(</span>
    		<span className="n">clf_nb</span>
    		<span className="p">,</span>
    		<span className="n"> TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">0</span>
    		<span className="p">],</span>
    		<span className="n"> TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">1</span>
    		<span className="p">],</span>
    		<span className="n"> scoring</span>
    		<span className="o">=</span>
    		<span className="s2">&quot;f1_micro&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> cv</span>
    		<span className="o">=</span>
    		<span className="mi">3</span>
    		<span className="p">)</span><br/>
        <br/>
    		<span className="c1"># Micro f1 is based on global precision and recall. </span><br/>
    		<span className="c1"># It treats each test case equally and doesn&#39;t give advantages to small classes</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;NB - F1 SCORE:&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> np</span>
    		<span className="o">.</span>
    		<span className="n">mean</span>
    		<span className="p">(</span>
    		<span className="n">scores</span>
    		<span className="p">))</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        NB - F1 SCORE: 0.7890243609167206
      </pre>
    </div>

    <h4>SVM</h4>
    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="c1">#SVM algo so we need to scale our features this time</span><br/>
    		<span className="n">scaler</span>
    		<span className="o"> = </span>
    		<span className="n">StandardScaler</span>
    		<span className="p">()</span><br/>
    		<span className="n">SCALER_TRAIN_DATA_V0</span>
    		<span className="o"> = </span>
    		<span className="n">scaler</span>
    		<span className="o">.</span>
    		<span className="n">fit_transform</span>
    		<span className="p">(</span>
    		<span className="n">TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">0</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">astype</span>
    		<span className="p">(</span>
    		<span className="nb">float</span>
    		<span className="p">))</span><br/>
    		<span className="n">clf_svm</span>
    		<span className="o"> = </span>
    		<span className="n">SVC</span>
    		<span className="p">(</span>
    		<span className="n">gamma</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;auto&#39;</span>
    		<span className="p">)</span><br/>
    		<span className="n">scores</span>
    		<span className="o"> = </span>
    		<span className="n">cross_val_score</span>
    		<span className="p">(</span>
    		<span className="n">clf_svm</span>
    		<span className="p">,</span>
    		<span className="n"> SCALER_TRAIN_DATA_V0</span>
    		<span className="p">,</span>
    		<span className="n"> TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">1</span>
    		<span className="p">],</span>
    		<span className="n"> scoring</span>
    		<span className="o">=</span>
    		<span className="s2">&quot;f1_micro&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> cv</span>
    		<span className="o">=</span>
    		<span className="mi">3</span>
    		<span className="p">)</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;SVM - F1 SCORE:&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> np</span>
    		<span className="o">.</span>
    		<span className="n">mean</span>
    		<span className="p">(</span>
    		<span className="n">scores</span>
    		<span className="p">))</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        SVM - F1 SCORE: 0.8120145251665344
      </pre>
    </div>

    <h4>Random Forest</h4>
    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">clf_rf</span>
    		<span className="o"> = </span>
    		<span className="n">RandomForestClassifier</span>
    		<span className="p">(</span>
    		<span className="n">n_estimators</span>
    		<span className="o">=</span>
    		<span className="mi">100</span>
    		<span className="p">,</span>
    		<span className="n"> random_state</span>
    		<span className="o">=</span>
    		<span className="mi">0</span>
    		<span className="p">)</span><br/>
    		<span className="n">scores</span>
    		<span className="o"> = </span>
    		<span className="n">cross_val_score</span>
    		<span className="p">(</span>
    		<span className="n">clf_rf</span>
    		<span className="p">,</span>
    		<span className="n"> TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">0</span>
    		<span className="p">],</span>
    		<span className="n"> TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">1</span>
    		<span className="p">],</span>
    		<span className="n"> scoring</span>
    		<span className="o">=</span>
    		<span className="s2">&quot;f1_micro&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> cv</span>
    		<span className="o">=</span>
    		<span className="mi">3</span>
    		<span className="p">)</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;RF - F1 SCORE:&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> np</span>
    		<span className="o">.</span>
    		<span className="n">mean</span>
    		<span className="p">(</span>
    		<span className="n">scores</span>
    		<span className="p">))</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        RF - F1 SCORE: 0.8959971623019022
      </pre>
    </div>


    <h4>Extra Trees</h4>
    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">clf_et</span>
    		<span className="o"> = </span>
    		<span className="n">ExtraTreesClassifier</span>
    		<span className="p">(</span>
    		<span className="n">n_estimators</span>
    		<span className="o">=</span>
    		<span className="mi">100</span>
    		<span className="p">)</span><br/>
    		<span className="n">scores</span>
    		<span className="o"> = </span>
    		<span className="n">cross_val_score</span>
    		<span className="p">(</span>
    		<span className="n">clf_et</span>
    		<span className="p">,</span>
    		<span className="n"> TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">0</span>
    		<span className="p">],</span>
    		<span className="n"> TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">1</span>
    		<span className="p">],</span>
    		<span className="n"> scoring</span>
    		<span className="o">=</span>
    		<span className="s2">&quot;f1_micro&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> cv</span>
    		<span className="o">=</span>
    		<span className="mi">3</span>
    		<span className="p">)</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;ET - F1 SCORE:&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> np</span>
    		<span className="o">.</span>
    		<span className="n">mean</span>
    		<span className="p">(</span>
    		<span className="n">scores</span>
    		<span className="p">))</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        ET - F1 SCORE: 0.8919991342615973
      </pre>
    </div>

    <h4>Bagging Classifier</h4>
    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">clf_bc</span>
    		<span className="o"> = </span>
    		<span className="n">BaggingClassifier</span>
    		<span className="p">()</span><br/>
    		<span className="n">scores</span>
    		<span className="o"> = </span>
    		<span className="n">cross_val_score</span>
    		<span className="p">(</span>
    		<span className="n">clf_bc</span>
    		<span className="p">,</span>
    		<span className="n"> TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">0</span>
    		<span className="p">],</span>
    		<span className="n"> TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">1</span>
    		<span className="p">],</span>
    		<span className="n"> scoring</span>
    		<span className="o">=</span>
    		<span className="s2">&quot;f1_micro&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> cv</span>
    		<span className="o">=</span>
    		<span className="mi">3</span>
    		<span className="p">)</span><br/>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;BC - F1 SCORE:&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> np</span>
    		<span className="o">.</span>
    		<span className="n">mean</span>
    		<span className="p">(</span>
    		<span className="n">scores</span>
    		<span className="p">))</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        BC - F1 SCORE: 0.9059892263665441
      </pre>
    </div>


    <h4>Bias-Variance Tradeoff</h4>
    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">skf</span>
    		<span className="o"> = </span>
    		<span className="n">StratifiedKFold</span>
    		<span className="p">(</span>
    		<span className="mi">3</span>
    		<span className="p">)</span><br/>
    		<span className="n">sizes</span>
    		<span className="o"> = </span>
    		<span className="n">np</span>
    		<span className="o">.</span>
    		<span className="n">linspace</span>
    		<span className="p">(</span>
    		<span className="mf">0.3</span>
    		<span className="p">,</span>
    		<span className="mf"> 1.0</span>
    		<span className="p">,</span>
    		<span className="mi"> 10</span>
    		<span className="p">)</span><br/>
    		<span className="n">viz</span>
    		<span className="o"> = </span>
    		<span className="n">LearningCurve</span>
    		<span className="p">(</span>
    		<span className="n">ExtraTreesClassifier</span>
    		<span className="p">(</span>
    		<span className="n">n_estimators</span>
    		<span className="o">=</span>
    		<span className="mi">100</span>
    		<span className="p">),</span>
    		<span className="n"> cv</span>
    		<span className="o">=</span>
    		<span className="n">skf</span>
    		<span className="p">,</span><br/>
    		<span className="n">{tb}{tb}{tb}{tb}{tb}train_sizes</span>
    		<span className="o">=</span>
    		<span className="n">sizes</span>
    		<span className="p">,</span>
    		<span className="n"> scoring</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;f1_micro&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> n_jobs</span>
    		<span className="o">=-</span>
    		<span className="mi">1</span>
    		<span className="p">)</span><br/>
        <br/>
    		<span className="c1"># Fit and poof the learning curves visualizer</span><br/>
    		<span className="n">viz</span>
    		<span className="o">.</span>
    		<span className="n">fit</span>
    		<span className="p">(</span>
    		<span className="n">TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">0</span>
    		<span className="p">],</span>
    		<span className="n"> TRAIN_DATA_V0</span>
    		<span className="p">[</span>
    		<span className="mi">1</span>
    		<span className="p">])</span><br/>
    		<span className="n">viz</span>
    		<span className="o">.</span>
    		<span className="n">poof</span>
    		<span className="p">()</span>
    	</pre>
    </div>

    <img src='/img/main/NLP_6.png' width='50%'/>

   </div>
 )
}

export default TrainingComponent;

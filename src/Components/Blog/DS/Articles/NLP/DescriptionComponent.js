import React from 'react';

function DescriptionComponent (){
 return (
   <div id='nlp-description'>
    <h2>Description</h2>

    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">decisions</span>
    		<span className="o">.</span>
    		<span className="n">isnull</span>
    		<span className="p">()</span>
    		<span className="o">.</span>
    		<span className="n">sum</span>
    		<span className="p">()</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
      document    0<br/>
      domain      0<br/>
      dtype: int64
      </pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">decisions</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;document_length&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> = </span>
    		<span className="n">decisions</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;document&quot;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">apply</span>
    		<span className="p">(</span>
    		<span className="k">lambda</span>
    		<span className="n">x</span>
    		<span className="p">:</span>
    		<span className="nb">len</span>
    		<span className="p">(</span>
    		<span className="n">x</span>
    		<span className="o">.</span>
    		<span className="n">split</span>
    		<span className="p">()))</span>
        <br/>
    		<span className="n">decisions</span>
    		<span className="o">.</span>
    		<span className="n">describe</span>
    		<span className="p">()</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        <table border="1" className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>document_length</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>count</th>
              <td>27998.000000</td>
            </tr>
            <tr>
              <th>mean</th>
              <td>2464.983999</td>
            </tr>
            <tr>
              <th>std</th>
              <td>1626.319993</td>
            </tr>
            <tr>
              <th>min</th>
              <td>0.000000</td>
            </tr>
            <tr>
              <th>25%</th>
              <td>1455.250000</td>
            </tr>
            <tr>
              <th>50%</th>
              <td>2077.000000</td>
            </tr>
            <tr>
              <th>75%</th>
              <td>3025.000000</td>
            </tr>
            <tr>
              <th>max</th>
              <td>26239.000000</td>
            </tr>
          </tbody>
        </table>
      </pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="c1">#Remove documents having less than 100 words</span>
        <br/>
    		<span className="n">decisions</span>
    		<span className="o"> = </span>
    		<span className="n">decisions</span>
    		<span className="p">[</span>
    		<span className="n">decisions</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;document_length&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> &gt; </span>
    		<span className="mi">100</span>
    		<span className="p">]</span>
        <br/>
    		<span className="n">decisions</span>
    		<span className="o">.</span>
    		<span className="n">describe</span>
    		<span className="p">()</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        <table border="1" className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>document_length</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>count</th>
              <td>27990.000000</td>
            </tr>
            <tr>
              <th>mean</th>
              <td>2465.680993</td>
            </tr>
            <tr>
              <th>std</th>
              <td>1626.029582</td>
            </tr>
            <tr>
              <th>min</th>
              <td>116.000000</td>
            </tr>
            <tr>
              <th>25%</th>
              <td>1456.000000</td>
            </tr>
            <tr>
              <th>50%</th>
              <td>2077.000000</td>
            </tr>
            <tr>
              <th>75%</th>
              <td>3025.750000</td>
            </tr>
            <tr>
              <th>max</th>
              <td>26239.000000</td>
            </tr>
          </tbody>
        </table>
      </pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">fig</span>
    		<span className="p">,</span>
    		<span className="n"> ax</span>
    		<span className="o"> = </span>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">subplots</span>
    		<span className="p">(</span>
    		<span className="n">figsize</span>
    		<span className="o"> = </span>
    		<span className="p">(</span>
    		<span className="mi">15</span>
    		<span className="p">,</span>
    		<span className="mi"> 6</span>
    		<span className="p">))</span>
        <br/>
    		<span className="n">ax</span>
    		<span className="o">.</span>
    		<span className="n">set_title</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Distribution of number of words&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">16</span>
    		<span className="p">)</span>
        <br/>
    		<span className="n">ax</span>
    		<span className="o">.</span>
    		<span className="n">set_xlabel</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Number of words&quot;</span>
    		<span className="p">)</span>
        <br/>
    		<span className="n">sns</span>
    		<span className="o">.</span>
    		<span className="n">distplot</span>
    		<span className="p">(</span>
    		<span className="n">decisions</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;document_length&quot;</span>
    		<span className="p">],</span>
    		<span className="n"> bins</span>
    		<span className="o">=</span>
    		<span className="mi">50</span>
    		<span className="p">,</span>
    		<span className="n"> ax</span>
    		<span className="o">=</span>
    		<span className="n">ax</span>
    		<span className="p">);</span>
    	</pre>
    </div>

    <img src='/img/main/NLP_1.png' width='100%'/>



   </div>
 )
}

export default DescriptionComponent;

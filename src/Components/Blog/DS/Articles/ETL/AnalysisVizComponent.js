import React from 'react';

function AnalysisVizComponent (){
 return (
   <div id='analysis-viz'>
    <h2>Data Analysis - Data Visualization</h2>
     <div className="highlight hl-ipython3">
       <pre>
         <span></span>
         <span className="n">colors_club</span>
         <span className="o"> = </span>
         <span className="p">{"{"}</span>
         <span className="s2">&quot;Arsenal&quot;</span>
         <span className="p">:</span>
         <span className="s2">&quot;#EF0107&quot;</span>
         <span className="p">,</span>
         <span className="s2"> &quot;Chelsea&quot;</span>
         <span className="p">:</span>
         <span className="s2">&quot;#034694&quot;</span>
         <span className="p">,</span>
         <span className="s2"> &quot;Tottenham&quot;</span>
         <span className="p">:</span>
         <span className="s1">&#39;#1B1A30&#39;</span>
         <span className="p">,</span>
         <span className="s2"> &quot;Watford&quot;</span>
         <span className="p">:</span>
         <span className="s2">&quot;#ffeb00&quot;</span>
         <span className="p"> }</span>
       </pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="c1"># Data Preparation #</span><br/>
    		<span className="n">df_b6</span>
    		<span className="o"> = </span>
    		<span className="n">df_england</span>
    		<span className="p">[[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Month&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Results&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;is_Big6_Opponent&quot;</span>
    		<span className="p">]]</span>\<br/>
    		<span className="o">                                 .</span>
    		<span className="n">groupby</span>
    		<span className="p">([</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Month&quot;</span>
    		<span className="p">])</span>
    		<span className="o">.</span>
    		<span className="n">sum</span>
    		<span className="p">()</span>
    		<span className="o">.</span>
    		<span className="n">reset_index</span>
    		<span className="p">([</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Month&quot;</span>
    		<span className="p">])</span><br/>
    		<span className="n">df_l</span>
    		<span className="o"> = </span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s1">&#39;Results&#39;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s1">&#39;D&#39;</span>
    		<span className="p">][[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Month&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Results&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;is_Big6_Opponent&quot;</span>
    		<span className="p">]]</span>\<br/>
    		<span className="o">                                 .</span>
    		<span className="n">pivot_table</span>
    		<span className="p">(</span>
    		<span className="n">index</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;Month&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> columns</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;Team_Concerned&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> values</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;Results&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> fill_value</span>
    		<span className="o">=</span>
    		<span className="mi">0</span>
    		<span className="p">,</span>
    		<span className="n"> aggfunc</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;count&#39;</span>
    		<span className="p">)</span>\<br/>
    		<span className="o">                                 .</span>
    		<span className="n">unstack</span>
    		<span className="p">()</span>
    		<span className="o">.</span>
    		<span className="n">to_frame</span>
    		<span className="p">()</span>
    		<span className="o">.</span>
    		<span className="n">rename</span>
    		<span className="p">(</span>
    		<span className="n">columns</span>
    		<span className="o"> = </span>
    		<span className="p">{"{"}</span>
    		<span className="mi">0</span>
    		<span className="p">:</span>
    		<span className="s1"> &#39;Results&#39;</span>
    		<span className="p">})</span>
    		<span className="o">.</span>
    		<span className="n">reset_index</span>
    		<span className="p">([</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Month&quot;</span>
    		<span className="p">])</span><br/>
    		<span className="n">df_arsenal</span>
    		<span className="o"> = </span>
    		<span className="n">pd</span>
    		<span className="o">.</span>
    		<span className="n">concat</span>
    		<span className="p">([</span>
    		<span className="n">df_b6</span>
    		<span className="p">[</span>
    		<span className="n">df_b6</span>
    		<span className="o">.</span>
    		<span className="n">Team_Concerned</span>
    		<span className="o"> == </span>
    		<span className="s2">&quot;Arsenal&quot;</span>
    		<span className="p">][[</span>
    		<span className="s2">&quot;is_Big6_Opponent&quot;</span>
    		<span className="p">]],</span>
    		<span className="n"> df_l</span>
    		<span className="p">[</span>
    		<span className="n">df_l</span>
    		<span className="o">.</span>
    		<span className="n">Team_Concerned</span>
    		<span className="o"> == </span>
    		<span className="s2">&quot;Arsenal&quot;</span>
    		<span className="p">]],</span>
    		<span className="n"> axis</span>
    		<span className="o">=</span>
    		<span className="mi">1</span>
    		<span className="p">)</span><br/>
        <br/>
    		<span className="n">football_months</span>
    		<span className="o"> = </span>
    		<span className="p">[</span>
    		<span className="s2">&quot;January&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;February&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;March&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;April&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;May&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;August&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;September&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;October&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;November&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;December&quot;</span>
    		<span className="p">]</span><br/>
        <br/>
    		<span className="c1"># Plot #</span><br/>
    		<span className="n">fig</span>
    		<span className="o"> = </span>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">figure</span>
    		<span className="p">(</span>
    		<span className="n">figsize</span>
    		<span className="o"> = </span>
    		<span className="p">(</span>
    		<span className="mi">14</span>
    		<span className="p">,</span>
    		<span className="mi"> 9</span>
    		<span className="p">))</span><br/>
    		<span className="n">ax</span>
    		<span className="o"> = </span>
    		<span className="n">fig</span>
    		<span className="o">.</span>
    		<span className="n">add_subplot</span>
    		<span className="p">(</span>
    		<span className="mi">111</span>
    		<span className="p">)</span><br/>
    		<span className="n">ax2</span>
    		<span className="o"> = </span>
    		<span className="n">ax</span>
    		<span className="o">.</span>
    		<span className="n">twinx</span>
    		<span className="p">()</span><br/>
    		<span className="n">width</span>
    		<span className="o"> = </span>
    		<span className="mf">0.2</span><br/>
    		<span className="n">df_arsenal</span>
    		<span className="o">.</span>
    		<span className="n">Results</span>
    		<span className="o">.</span>
    		<span className="n">plot</span>
    		<span className="p">(</span>
    		<span className="n">kind</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;bar&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Arsenal&quot;</span>
    		<span className="p">],</span>
    		<span className="n"> ax</span>
    		<span className="o">=</span>
    		<span className="n">ax</span>
    		<span className="p">,</span>
    		<span className="n"> width</span>
    		<span className="o">=</span>
    		<span className="n">width</span>
    		<span className="p">,</span>
    		<span className="n"> position</span>
    		<span className="o">=</span>
    		<span className="mi">1</span>
    		<span className="p">)</span><br/>
    		<span className="n">df_arsenal</span>
    		<span className="o">.</span>
    		<span className="n">is_Big6_Opponent</span>
    		<span className="o">.</span>
    		<span className="n">plot</span>
    		<span className="p">(</span>
    		<span className="n">kind</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;bar&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Chelsea&quot;</span>
    		<span className="p">],</span>
    		<span className="n"> ax</span>
    		<span className="o">=</span>
    		<span className="n">ax2</span>
    		<span className="p">,</span>
    		<span className="n"> width</span>
    		<span className="o">=</span>
    		<span className="n">width</span>
    		<span className="p">,</span>
    		<span className="n"> position</span>
    		<span className="o">=</span>
    		<span className="mi">0</span>
    		<span className="p">)</span><br/>
    		<span className="n">ax</span>
    		<span className="o">.</span>
    		<span className="n">set_title</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;Arsenal losses by month function of top6 opponent</span>
    		<span className="se">\n</span>
    		<span className="s1">&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">18</span>
    		<span className="p">)</span><br/>
    		<span className="n">ax</span>
    		<span className="o">.</span>
    		<span className="n">set_ylabel</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;Arsenal losses&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Arsenal&quot;</span>
    		<span className="p">],</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">15</span>
    		<span className="p">)</span><br/>
    		<span className="n">ax2</span>
    		<span className="o">.</span>
    		<span className="n">set_ylabel</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;</span>
    		<span className="se">\n</span>
    		<span className="s1">Arsenal against top 6&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Chelsea&quot;</span>
    		<span className="p">],</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">15</span>
    		<span className="p">)</span><br/>
    		<span className="n">ax</span>
    		<span className="o">.</span>
    		<span className="n">tick_params</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;y&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> colors</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Arsenal&quot;</span>
    		<span className="p">])</span><br/>
    		<span className="n">ax2</span>
    		<span className="o">.</span>
    		<span className="n">tick_params</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;y&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> colors</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Chelsea&quot;</span>
    		<span className="p">])</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">xticks</span>
    		<span className="p">(</span>
    		<span className="n">np</span>
    		<span className="o">.</span>
    		<span className="n">arange</span>
    		<span className="p">(</span>
    		<span className="mi">10</span>
    		<span className="p">),</span>
    		<span className="n"> football_months</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">15</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">show</span>
    		<span className="p">()</span>
    	</pre>
    </div>


    <img src='/img/main/ETL_1.png' width='100%'/>



    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="c1"># Data Preparation #</span><br/>
    		<span className="c1"># Wins</span><br/>
    		<span className="n">df_england_wins</span>
    		<span className="o"> = </span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s1">&#39;Results&#39;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s1">&#39;V&#39;</span>
    		<span className="p">][[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Month&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Results&quot;</span>
    		<span className="p">]]</span>\<br/>
    		<span className="o">                    .</span>
    		<span className="n">pivot_table</span>
    		<span className="p">(</span>
    		<span className="n">index</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;Month&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> columns</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;Team_Concerned&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> values</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;Results&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> fill_value</span>
    		<span className="o">=</span>
    		<span className="mi">0</span>
    		<span className="p">,</span>
    		<span className="n"> aggfunc</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;count&#39;</span>
    		<span className="p">)</span>
    		<span className="o">.</span>
    		<span className="n">unstack</span>
    		<span className="p">()</span>
    		<span className="o">.</span>
    		<span className="n">to_frame</span>
    		<span className="p">()</span>
    		<span className="o">.</span>
    		<span className="n">rename</span>
    		<span className="p">(</span>
    		<span className="n">columns</span>
    		<span className="o">=</span>
    		<span className="p">{"{"}</span>
    		<span className="mi">0</span>
    		<span className="p">:</span>
    		<span className="s1">&#39;Results&#39;</span>
    		<span className="p">})</span><br/>
    		<span className="n">ars_w_val</span>
    		<span className="p">,</span>
    		<span className="n"> che_w_val</span>
    		<span className="p">,</span>
    		<span className="n"> to_w_val</span>
    		<span className="p">,</span>
    		<span className="n"> _</span>
    		<span className="o"> = </span>
    		<span className="p">[</span>
    		<span className="n">df_england_wins</span>
    		<span className="o">.</span>
    		<span className="n">iloc</span>
    		<span className="p">[</span>
    		<span className="n">df_england_wins</span>
    		<span className="o">.</span>
    		<span className="n">index</span>\<br/>
    		<span className="o">                    .</span>
    		<span className="n">get_level_values</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;Team_Concerned&#39;</span>
    		<span className="p">)</span>
    		<span className="o"> == </span>
    		<span className="n">t</span>
    		<span className="p">][</span>
    		<span className="s2">&quot;Results&quot;</span>
    		<span className="p">]</span>\<br/>
    		<span className="o">                    .</span>
    		<span className="n">ravel</span>
    		<span className="p">()</span>
    		<span className="k"> for</span>
    		<span className="n"> t </span>
    		<span className="ow">in</span>
    		<span className="n"> colors_club</span>
    		<span className="o">.</span>
    		<span className="n">keys</span>
    		<span className="p">()]</span><br/>
    		<span className="c1"># Played</span><br/>
    		<span className="n">df_england_played</span>
    		<span className="o"> = </span>
    		<span className="n">df_england</span>
    		<span className="p">[[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Month&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Results&quot;</span>
    		<span className="p">]]</span>\<br/>
    		<span className="o">                    .</span>
    		<span className="n">pivot_table</span>
    		<span className="p">(</span>
    		<span className="n">index</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;Month&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> columns</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;Team_Concerned&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> values</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;Results&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> fill_value</span>
    		<span className="o">=</span>
    		<span className="mi">0</span>
    		<span className="p">,</span>
    		<span className="n"> aggfunc</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;count&#39;</span>
    		<span className="p">)</span>
    		<span className="o">.</span>
    		<span className="n">unstack</span>
    		<span className="p">()</span>
    		<span className="o">.</span>
    		<span className="n">to_frame</span>
    		<span className="p">()</span>
    		<span className="o">.</span>
    		<span className="n">rename</span>
    		<span className="p">(</span>
    		<span className="n">columns</span>
    		<span className="o">=</span>
    		<span className="p">{"{"}</span>
    		<span className="mi">0</span>
    		<span className="p">:</span>
    		<span className="s1">&#39;Results&#39;</span>
    		<span className="p">})</span><br/>
    		<span className="n">ars_p_val</span>
    		<span className="p">,</span>
    		<span className="n"> che_p_val</span>
    		<span className="p">,</span>
    		<span className="n"> to_p_val</span>
    		<span className="p">,</span>
    		<span className="n"> _</span>
    		<span className="o"> = </span>
    		<span className="p">[</span>
    		<span className="n">df_england_played</span>
    		<span className="o">.</span>
    		<span className="n">iloc</span>
    		<span className="p">[</span>
    		<span className="n">df_england_played</span>
    		<span className="o">.</span>
    		<span className="n">index</span>\<br/>
    		<span className="o">                    .</span>
    		<span className="n">get_level_values</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;Team_Concerned&#39;</span>
    		<span className="p">)</span>
    		<span className="o"> == </span>
    		<span className="n">t</span>
    		<span className="p">][</span>
    		<span className="s2">&quot;Results&quot;</span>
    		<span className="p">]</span>\<br/>
    		<span className="o">                    .</span>
    		<span className="n">ravel</span>
    		<span className="p">()</span>
    		<span className="k"> for </span>
    		<span className="n">t</span>
    		<span className="ow"> in </span>
    		<span className="n">colors_club</span>
    		<span className="o">.</span>
    		<span className="n">keys</span>
    		<span className="p">()]</span><br/>
    		<span className="c1"># Plot #</span><br/>
    		<span className="n">mpl_fig</span>
    		<span className="o"> = </span>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">figure</span>
    		<span className="p">(</span>
    		<span className="n">figsize</span>
    		<span className="o">=</span>
    		<span className="p">(</span>
    		<span className="mi">14</span>
    		<span className="p">,</span>
    		<span className="mi"> 10</span>
    		<span className="p">))</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">plot</span>
    		<span className="p">(</span>
    		<span className="n">ars_w_val</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Arsenal&quot;</span>
    		<span className="p">],</span>
    		<span className="n"> linewidth</span>
    		<span className="o">=</span>
    		<span className="mi">2</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">plot</span>
    		<span className="p">(</span>
    		<span className="n">che_w_val</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Chelsea&quot;</span>
    		<span className="p">],</span>
    		<span className="n"> linewidth</span>
    		<span className="o">=</span>
    		<span className="mi">2</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">plot</span>
    		<span className="p">(</span>
    		<span className="n">to_w_val</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Tottenham&quot;</span>
    		<span className="p">],</span>
    		<span className="n"> linewidth</span>
    		<span className="o">=</span>
    		<span className="mi">2</span>
    		<span className="p">)</span><br/><br/>
    		<span className="k">for</span>
    		<span className="n"> m </span>
    		<span className="ow">in</span>
    		<span className="nb"> range</span>
    		<span className="p">(</span>
    		<span className="nb">len</span>
    		<span className="p">(</span>
    		<span className="n">football_months</span>
    		<span className="p">)):</span><br/>
    		<span className="n">     plt</span>
    		<span className="o">.</span>
    		<span className="n">text</span>
    		<span className="p">(</span>
    		<span className="n">m</span>
    		<span className="o">-</span>
    		<span className="mf">0.01</span>
    		<span className="p">,</span>
    		<span className="n"> ars_w_val</span>
    		<span className="p">[</span>
    		<span className="n">m</span>
    		<span className="p">]</span>
    		<span className="o">+</span>
    		<span className="mf">0.1</span>
    		<span className="p">,</span>
    		<span className="nb"> str</span>
    		<span className="p">(</span>
    		<span className="n">ars_p_val</span>
    		<span className="p">[</span>
    		<span className="n">m</span>
    		<span className="p">]),</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">11</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Arsenal&quot;</span>
    		<span className="p">])</span><br/>
    		<span className="n">     plt</span>
    		<span className="o">.</span>
    		<span className="n">text</span>
    		<span className="p">(</span>
    		<span className="n">m</span>
    		<span className="o">-</span>
    		<span className="mf">0.01</span>
    		<span className="p">,</span>
    		<span className="n"> che_w_val</span>
    		<span className="p">[</span>
    		<span className="n">m</span>
    		<span className="p">]</span>
    		<span className="o">-</span>
    		<span className="mf">0.3</span>
    		<span className="p">,</span>
    		<span className="nb"> str</span>
    		<span className="p">(</span>
    		<span className="n">che_p_val</span>
    		<span className="p">[</span>
    		<span className="n">m</span>
    		<span className="p">]),</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">11</span>
    		<span className="p">,</span>
    		<span className="n">color</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Chelsea&quot;</span>
    		<span className="p">])</span><br/>
    		<span className="n">     plt</span>
    		<span className="o">.</span>
    		<span className="n">text</span>
    		<span className="p">(</span>
    		<span className="n">m</span>
    		<span className="o">-</span>
    		<span className="mf">0.01</span>
    		<span className="p">,</span>
    		<span className="n"> to_w_val</span>
    		<span className="p">[</span>
    		<span className="n">m</span>
    		<span className="p">]</span>
    		<span className="o">+</span>
    		<span className="mf">0.2</span>
    		<span className="p">,</span>
    		<span className="nb"> str</span>
    		<span className="p">(</span>
    		<span className="n">to_p_val</span>
    		<span className="p">[</span>
    		<span className="n">m</span>
    		<span className="p">]),</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">11</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Tottenham&quot;</span>
    		<span className="p">])</span><br/><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">annotate</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;Arsenal won 7 matches in</span>
    		<span className="se">\n</span>
    		<span className="s1">October and played 8 times&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="n">colors_club</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Arsenal&quot;</span>
    		<span className="p">],</span><br/>
    		<span className="n">              xy</span>
    		<span className="o">=</span>
    		<span className="p">(</span>
    		<span className="mi">7</span>
    		<span className="p">,</span>
    		<span className="mi"> 7</span>
    		<span className="p">),</span>
    		<span className="n"> xytext</span>
    		<span className="o">=</span>
    		<span className="p">(</span>
    		<span className="mi">4</span>
    		<span className="p">,</span>
    		<span className="mi"> 8</span>
    		<span className="p">),</span>
    		<span className="n"> arrowprops</span>
    		<span className="o">=</span>
    		<span className="nb">dict</span>
    		<span className="p">(</span>
    		<span className="n">facecolor</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;grey&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> shrink</span>
    		<span className="o">=</span>
    		<span className="mf">0.05</span>
    		<span className="p">),</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">12</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">title</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Months impact on victories by club over 2 years</span>
    		<span className="se">\n</span>
    		<span className="s2">&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">16</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">legend</span>
    		<span className="p">([</span>
    		<span className="n">club</span>
    		<span className="k"> for </span>
    		<span className="n">club</span>
    		<span className="ow"> in </span>
    		<span className="n">colors_club</span>
    		<span className="o">.</span>
    		<span className="n">keys</span>
    		<span className="p">()],</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">14</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">ylabel</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Number of vitories&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">14</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">xticks</span>
    		<span className="p">(</span>
    		<span className="n">np</span>
    		<span className="o">.</span>
    		<span className="n">arange</span>
    		<span className="p">(</span>
    		<span className="mi">10</span>
    		<span className="p">),</span>
    		<span className="n"> football_months</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">12</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">show</span>
    		<span className="p">()</span>
    	</pre>
    </div>


    <img src='/img/main/ETL_2.png' width='100%'/>



    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="c1"># Data Preparation #</span><br/>
    		<span className="n">ars_stats</span>
    		<span className="o"> = </span>
    		<span className="n">df_england</span>
    		<span className="p">[(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s1">&#39;Results&#39;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s1">&#39;V&#39;</span>
    		<span className="p">)</span>
    		<span className="o"> &amp; </span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s1">&#39;Team_Concerned&#39;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s1">&#39;Arsenal&#39;</span>
    		<span className="p">)]</span>\<br/>
    		<span className="p">                    [[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Difference&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Month&quot;</span>
    		<span className="p">]]</span>
    		<span className="o">.</span>
    		<span className="n">groupby</span>
    		<span className="p">([</span>
    		<span className="s1">&#39;Month&#39;</span>
    		<span className="p">])</span>\<br/>
    		<span className="o">                    .</span>
    		<span className="n">agg</span>
    		<span className="p">({"{"}</span>
    		<span className="s1">&#39;Difference&#39;</span>
    		<span className="p">:</span>
    		<span className="p">[</span>
    		<span className="s1">&#39;sum&#39;</span>
    		<span className="p">,</span>
    		<span className="s1"> &#39;size&#39;</span>
    		<span className="p">]})</span>
    		<span className="o">.</span>
    		<span className="n">reset_index</span>
    		<span className="p">([</span>
    		<span className="s1">&#39;Month&#39;</span>
    		<span className="p">])</span><br/>
        <br/>
    		<span className="c1"># Plot #</span><br/>
    		<span className="n">cmap</span>
    		<span className="o"> = </span>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">cm</span>
    		<span className="o">.</span>
    		<span className="n">hot</span><br/>
    		<span className="n">ars_colors</span>
    		<span className="o"> = </span>
    		<span className="n">ars_stats</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Difference&quot;</span>
    		<span className="p">][</span>
    		<span className="s1">&#39;size&#39;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">values</span>
    		<span className="o"> - </span>
    		<span className="nb">max</span>
    		<span className="p">(</span>
    		<span className="n">ars_stats</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Difference&quot;</span>
    		<span className="p">][</span>
    		<span className="s1">&#39;size&#39;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">values</span>
    		<span className="p">)</span>
    		<span className="o"> - </span>
    		<span className="mi">1</span><br/>
    		<span className="n">ars_colors</span>
    		<span className="o">=</span>
    		<span className="n">ars_colors</span>
    		<span className="o"> * </span>
    		<span className="mi">250</span>
    		<span className="o"> / </span>
    		<span className="nb">max</span>
    		<span className="p">(</span>
    		<span className="nb">abs</span>
    		<span className="p">(</span>
    		<span className="n">ars_colors</span>
    		<span className="p">))</span><br/>
    		<span className="n">ars_colors</span>
    		<span className="o"> = </span>
    		<span className="p">[</span>
    		<span className="nb">abs</span>
    		<span className="p">(</span>
    		<span className="nb">int</span>
    		<span className="p">(</span>
    		<span className="n">a</span>
    		<span className="p">))</span>
    		<span className="k"> for</span>
    		<span className="n"> a</span>
    		<span className="ow"> in</span>
    		<span className="n"> ars_colors</span>
    		<span className="p">]</span><br/>
        <br/>
    		<span className="n">mpl_fig</span>
    		<span className="o"> = </span>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">figure</span>
    		<span className="p">(</span>
    		<span className="n">figsize</span>
    		<span className="o">=</span>
    		<span className="p">(</span>
    		<span className="mi">12</span>
    		<span className="p">,</span>
    		<span className="mi"> 8</span>
    		<span className="p">))</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">scatter</span>
    		<span className="p">(</span>
    		<span className="n">y</span>
    		<span className="o">=</span>
    		<span className="n">ars_stats</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Difference&quot;</span>
    		<span className="p">][</span>
    		<span className="s1">&#39;size&#39;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">values</span>
    		<span className="p">,</span>
    		<span className="n"> x</span>
    		<span className="o">=</span>
    		<span className="n">ars_stats</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Month&quot;</span>
    		<span className="p">],</span><br/>
    		<span className="n">            s</span>
    		<span className="o">=</span>
    		<span className="p">(</span>
    		<span className="n">ars_stats</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Difference&quot;</span>
    		<span className="p">][</span>
    		<span className="s1">&#39;sum&#39;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">values</span>
    		<span className="p">)</span>
    		<span className="o"> * </span>
    		<span className="mi">150</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="n">cmap</span>
    		<span className="p">(</span>
    		<span className="n">ars_colors</span>
    		<span className="p">))</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">title</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;</span>
    		<span className="se">\n</span>
    		<span className="s2">&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">16</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">xlabel</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;</span>
    		<span className="se">\n</span>
    		<span className="s2">Month&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">14</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">ylabel</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Number of matches won</span>
    		<span className="se">\n</span>
    		<span className="s2">&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">14</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">axvline</span>
    		<span className="p">(</span>
    		<span className="n">x</span>
    		<span className="o">=</span>
    		<span className="mf">5.5</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;green&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> ls</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;--&#39;</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">axvline</span>
    		<span className="p">(</span>
    		<span className="n">x</span>
    		<span className="o">=</span>
    		<span className="mf">7.7</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;green&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> ls</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;--&#39;</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">axvspan</span>
    		<span className="p">(</span>
    		<span className="mf">5.5</span>
    		<span className="p">,</span>
    		<span className="mf"> 7.7</span>
    		<span className="p">,</span>
    		<span className="n"> alpha</span>
    		<span className="o">=</span>
    		<span className="mf">0.1</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;green&#39;</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">text</span>
    		<span className="p">(</span>
    		<span className="mf">6.1</span>
    		<span className="p">,</span>
    		<span className="mi"> 8</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Holidays&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">14</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;green&#39;</span>
    		<span className="p">)</span><br/>
    		<span className="n">gll</span>
    		<span className="o"> =</span>
    		<span className="n"> plt</span>
    		<span className="o">.</span>
    		<span className="n">scatter</span>
    		<span className="p">([],[],</span>
    		<span className="n"> s</span>
    		<span className="o">=</span>
    		<span className="mi">20</span>
    		<span className="p">,</span>
    		<span className="n"> marker</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;o&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;#FFFFC4&#39;</span>
    		<span className="p">)</span><br/>
    		<span className="n">gl</span>
    		<span className="o"> = </span>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">scatter</span>
    		<span className="p">([],[],</span>
    		<span className="n"> s</span>
    		<span className="o">=</span>
    		<span className="mi">300</span>
    		<span className="p">,</span>
    		<span className="n"> marker</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;o&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;#FFB000&#39;</span>
    		<span className="p">)</span><br/>
    		<span className="n">ga</span>
    		<span className="o"> = </span>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">scatter</span>
    		<span className="p">([],[],</span>
    		<span className="n"> s</span>
    		<span className="o">=</span>
    		<span className="mi">900</span>
    		<span className="p">,</span>
    		<span className="n"> marker</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;o&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> color</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;#740000&#39;</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">legend</span>
    		<span className="p">((</span>
    		<span className="n">gll</span>
    		<span className="p">,</span>
    		<span className="n"> gl</span>
    		<span className="p">,</span>
    		<span className="n"> ga</span>
    		<span className="p">),</span><br/>
    		<span className="p">          (</span>
    		<span className="s1">&#39;Goal Gap -&#39;</span>
    		<span className="p">,</span>
    		<span className="s1"> &#39;</span>
    		<span className="se">\n</span>
    		<span className="s1">Goal Gap +</span>
    		<span className="se">\n</span>
    		<span className="s1">&#39;</span>
    		<span className="p">,</span>
    		<span className="s1"> &#39;Goal Gap ++&#39;</span>
    		<span className="p">),</span><br/>
    		<span className="n">          scatterpoints</span>
    		<span className="o">=</span>
    		<span className="mi">1</span>
    		<span className="p">,</span>
    		<span className="n"> loc</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;upper left&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> ncol</span>
    		<span className="o">=</span>
    		<span className="mi">1</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">12</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">title</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Arsenal Gap &amp; Matches won by month</span>
    		<span className="se">\n</span>
    		<span className="s2">&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">17</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">xticks</span>
    		<span className="p">(</span>
    		<span className="n">fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">12</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">ylim</span>
    		<span className="p">((</span>
    		<span className="mi">0</span>
    		<span className="p">,</span>
    		<span className="mi"> 9</span>
    		<span className="p">))</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">show</span>
    		<span className="p">()</span>
    	</pre>
    </div>

    <img src='/img/main/ETL_3.png' width='100%'/>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="c1"># Data Preparation #</span><br/>
    		<span className="n">ars_games_won</span>
    		<span className="o"> = </span>
    		<span className="nb">len</span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s2">&quot;Arsenal&quot;</span>
    		<span className="p">)</span>
    		<span className="o"> &amp; </span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Results&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s1">&#39;V&#39;</span>
    		<span className="p">)])</span><br/>
    		<span className="n">wat_games_won</span>
    		<span className="o"> = </span>
    		<span className="nb">len</span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s2">&quot;Watford&quot;</span>
    		<span className="p">)</span>
    		<span className="o"> &amp; </span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Results&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s1">&#39;V&#39;</span>
    		<span className="p">)])</span><br/>
    		<span className="n">ars_games_draws</span>
    		<span className="o"> = </span>
    		<span className="nb">len</span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s2">&quot;Arsenal&quot;</span>
    		<span className="p">)</span>
    		<span className="o"> &amp; </span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Results&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s1">&#39;N&#39;</span>
    		<span className="p">)])</span><br/>
    		<span className="n">wat_games_draws</span>
    		<span className="o"> = </span>
    		<span className="nb">len</span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s2">&quot;Watford&quot;</span>
    		<span className="p">)</span>
    		<span className="o"> &amp; </span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Results&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s1">&#39;N&#39;</span>
    		<span className="p">)])</span><br/>
    		<span className="n">ars_games_losses</span>
    		<span className="o"> = </span>
    		<span className="nb">len</span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s2">&quot;Arsenal&quot;</span>
    		<span className="p">)</span>
    		<span className="o"> &amp; </span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Results&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s1">&#39;D&#39;</span>
    		<span className="p">)])</span><br/>
    		<span className="n">wat_games_losses</span>
    		<span className="o"> = < /span>
    		<span className="nb">len</span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s2">&quot;Watford&quot;</span>
    		<span className="p">)</span>
    		<span className="o"> &amp; </span>
    		<span className="p">(</span>
    		<span className="n">df_england</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Results&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> == </span>
    		<span className="s1">&#39;D&#39;</span>
    		<span className="p">)])</span><br/>
        <br/>
    		<span className="c1"># Plot #</span><br/>
    		<span className="n">fig</span>
    		<span className="o"> = </span>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">figure</span>
    		<span className="p">(</span>
    		<span className="n">figsize</span>
    		<span className="o">=</span>
    		<span className="p">(</span>
    		<span className="mi">14</span>
    		<span className="p">,</span>
    		<span className="mi"> 10</span>
    		<span className="p">))</span><br/>
    		<span className="n">gs</span>
    		<span className="o"> = </span>
    		<span className="n">gridspec</span>
    		<span className="o">.</span>
    		<span className="n">GridSpec</span>
    		<span className="p">(</span>
    		<span className="mi">2</span>
    		<span className="p">,</span>
    		<span className="mi"> 2</span>
    		<span className="p">,</span>
    		<span className="n"> height_ratios</span>
    		<span className="o">=</span>
    		<span className="p">[</span>
    		<span className="mi">2</span>
    		<span className="p">,</span>
    		<span className="mf"> 0.9</span>
    		<span className="p">])</span><br/>
    		<span className="n">colors</span>
    		<span className="o"> = </span>
    		<span className="p">[</span>
    		<span className="s1">&#39;#3b7e49&#39;</span>
    		<span className="p">,</span>
    		<span className="s1"> &#39;#023473&#39;</span>
    		<span className="p">,</span>
    		<span className="s1"> &#39;#F00100&#39;</span>
    		<span className="p">]</span><br/>
    		<span className="n">explode</span>
    		<span className="o"> = </span>
    		<span className="p">(</span>
    		<span className="mi">0</span>
    		<span className="p">,</span>
    		<span className="mf"> 0.1</span>
    		<span className="p">,</span>
    		<span className="mf"> 0.2</span>
    		<span className="p">)</span><br/>
    		<span className="n">ax0</span>
    		<span className="o"> = </span>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">subplot</span>
    		<span className="p">(</span>
    		<span className="n">gs</span>
    		<span className="p">[</span>
    		<span className="mi">0</span>
    		<span className="p">])</span><br/>
    		<span className="n">_</span>
    		<span className="p">,</span>
    		<span className="n"> _</span>
    		<span className="p">,</span>
    		<span className="n"> autotexts0</span>
    		<span className="o"> = </span>
    		<span className="n">ax0</span>
    		<span className="o">.</span>
    		<span className="n">pie</span>
    		<span className="p">([</span>
    		<span className="n">ars_games_won</span>
    		<span className="p">,</span>
    		<span className="n"> ars_games_draws</span>
    		<span className="p">,</span>
    		<span className="n"> ars_games_losses</span>
    		<span className="p">],</span>
    		<span className="n"> explode</span>
    		<span className="o">=</span>
    		<span className="n">explode</span>
    		<span className="p">,</span><br/>
    		<span className="n">                            labels</span>
    		<span className="o">=</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;WIN&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;DRAW&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;DEFEAT&quot;</span>
    		<span className="p">],</span>
    		<span className="n"> colors</span>
    		<span className="o">=</span>
    		<span className="n">colors</span>
    		<span className="p">,</span>
        <br/>
    		<span className="n">                            autopct</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;</span>
    		<span className="si">%1.1f%%</span>
    		<span className="s1">&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> shadow</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">)</span><br/>
    		<span className="n">ax0</span>
    		<span className="o">.</span>
    		<span className="n">set_title</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Proportion of Matches Results</span>
    		<span className="se">\n</span>
    		<span className="s2">Arsenal&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">15</span>
    		<span className="p">)</span><br/>
        <br/>
    		<span className="k">for</span>
    		<span className="n"> autotext</span>
    		<span className="ow"> in</span>
    		<span className="n"> autotexts0</span>
    		<span className="p">:</span><br/>
    		<span className="n">     autotext</span>
    		<span className="o">.</span>
    		<span className="n">set_color</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;white&#39;</span>
    		<span className="p">)</span><br/>
    		<span className="n">     autotext</span>
    		<span className="o">.</span>
    		<span className="n">set_size</span>
    		<span className="p">(</span>
    		<span className="mi">12</span>
    		<span className="p">)</span><br/>
        <br/>
    		<span className="n">ax1</span>
    		<span className="o"> = </span>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">subplot</span>
    		<span className="p">(</span>
    		<span className="n">gs</span>
    		<span className="p">[</span>
    		<span className="mi">1</span>
    		<span className="p">])</span><br/>
    		<span className="n">_</span>
    		<span className="p">,</span>
    		<span className="n"> _</span>
    		<span className="p">,</span>
    		<span className="n"> autotexts1</span>
    		<span className="o"> = </span>
    		<span className="n">ax1</span>
    		<span className="o">.</span>
    		<span className="n">pie</span>
    		<span className="p">([</span>
    		<span className="n">wat_games_won</span>
    		<span className="p">,</span>
    		<span className="n"> wat_games_draws</span>
    		<span className="p">,</span>
    		<span className="n"> wat_games_losses</span>
    		<span className="p">],</span>
    		<span className="n"> explode</span>
    		<span className="o">=</span>
    		<span className="n">explode</span>
    		<span className="p">,</span><br/>
    		<span className="n">                            labels</span>
    		<span className="o">=</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;WIN&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;DRAW&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;DEFEAT&quot;</span>
    		<span className="p">],</span>
    		<span className="n"> colors</span>
    		<span className="o">=</span>
    		<span className="n">colors</span>
    		<span className="p">,</span>
        <br/>
    		<span className="n">                            autopct</span>
    		<span className="o">=</span>
    		<span className="s1">&#39;</span>
    		<span className="si">%1.1f%%</span>
    		<span className="s1">&#39;</span>
    		<span className="p">,</span>
    		<span className="n"> shadow</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">)</span><br/>
    		<span className="n">ax1</span>
    		<span className="o">.</span>
    		<span className="n">set_title</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Proportion of Matches Results</span>
    		<span className="se">\n</span>
    		<span className="s2">Watford&quot;</span>
    		<span className="p">,</span>
    		<span className="n"> fontsize</span>
    		<span className="o">=</span>
    		<span className="mi">15</span>
    		<span className="p">)</span><br/>
        <br/>
    		<span className="k">for</span>
    		<span className="n"> autotext</span>
    		<span className="ow"> in</span>
    		<span className="n"> autotexts1</span>
    		<span className="p">:</span><br/>
    		<span className="n">     autotext</span>
    		<span className="o">.</span>
    		<span className="n">set_color</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;white&#39;</span>
    		<span className="p">)</span><br/>
    		<span className="n">     autotext</span>
    		<span className="o">.</span>
    		<span className="n">set_size</span>
    		<span className="p">(</span>
    		<span className="mi">12</span>
    		<span className="p">)</span><br/>
        <br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">axis</span>
    		<span className="p">(</span>
    		<span className="s1">&#39;equal&#39;</span>
    		<span className="p">)</span><br/>
    		<span className="n">plt</span>
    		<span className="o">.</span>
    		<span className="n">show</span>
    		<span className="p">()</span>
    	</pre>
    </div>


    <img src='/img/main/ETL_4.png' width='100%'/>


   </div>
 )
}

export default AnalysisVizComponent;

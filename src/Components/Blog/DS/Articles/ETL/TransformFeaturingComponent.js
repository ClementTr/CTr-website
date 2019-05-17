import React from 'react';

function TransformFeaturingComponent (){
 return (
   <div id='transform-featuring'>
    <h2>Transform - Data Featuring</h2>
     <div className="highlight hl-ipython3">
       <pre>
         <span></span>
         <span className="k">def</span>
         <span className="nf"> get_complete_df</span>
         <span className="p">(</span>
         <span className="n">league</span>
         <span className="p">,</span>
         <span className="n"> start_year</span>
         <span className="p">,</span>
         <span className="n"> end_year</span>
         <span className="p">):</span><br/>
         <span className="sd">    &#39;&#39;&#39;</span><br/>
         <span className="sd">    input: league - type str - championnat we want to scrap</span><br/>
         <span className="sd">           start_year - type int - first year we want to scrap</span><br/>
         <span className="sd">           end_year - type int - last year we want to scrap</span><br/>
         <span className="sd">    output: df_league - type pd.DataFrame - dataframe of all teams results in a specific league</span><br/>
         <span className="sd"></span><br/>
         <span className="sd">    This function return a full dataframe of all teams results in a specific league between 2 dates</span><br/>
         <span className="sd">    &#39;&#39;&#39;</span><br/>
         <br/>
         <span className="n">     frames</span>
         <span className="o"> = </span>
         <span className="p">[]</span><br/>
         <br/>
         <span className="k">     for</span>
         <span className="n"> year</span>
         <span className="ow"> in</span>
         <span className="nb"> range</span>
         <span className="p">(</span>
         <span className="n">start_year</span>
         <span className="p">,</span>
         <span className="n"> end_year</span>
         <span className="o"> + </span>
         <span className="mi">1</span>
         <span className="p">):</span><br/>
         <span className="n">          dict_angleterre</span>
         <span className="o"> = </span>
         <span className="n">create_dict</span>
         <span className="p">(</span>
         <span className="nb">str</span>
         <span className="p">(</span>
         <span className="n">year</span>
         <span className="p">),</span>
         <span className="n"> league</span>
         <span className="p">)</span><br/>
         <span className="k">          for</span>
         <span className="n"> team</span>
         <span className="ow"> in</span>
         <span className="n"> dict_angleterre</span>
         <span className="o">.</span>
         <span className="n">values</span>
         <span className="p">():</span><br/>
         <span className="n">              df_foot</span>
         <span className="o"> = </span>
         <span className="n">recover_main_football_data</span>
         <span className="p">(</span>
         <span className="n">league</span>
         <span className="p">,</span>
         <span className="n"> team</span>
         <span className="p">,</span>
         <span className="n"> year</span>
         <span className="p">)</span><br/>
         <span className="n">              frames</span>
         <span className="o">.</span>
         <span className="n">append</span>
         <span className="p">(</span>
         <span className="n">df_foot</span>
         <span className="p">)</span><br/>
         <br/>
         <span className="k">     return</span>
         <span className="n"> pd</span>
         <span className="o">.</span>
         <span className="n">concat</span>
         <span className="p">(</span>
         <span className="n">frames</span>
         <span className="p">)</span>
         <span className="c1">#df_league</span><br/>
         <br/>
         <span className="n">df_england</span>
         <span className="o"> = </span>
         <span className="n">get_complete_df</span>
         <span className="p">(</span>
         <span className="s2">&quot;angleterre&quot;</span>
         <span className="p">,</span>
         <span className="mi"> 2016</span>
         <span className="p">,</span>
         <span className="mi"> 2017</span>
         <span className="p">)</span><br/>
         <span className="nb">print</span>
         <span className="p">(</span>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">shape</span>
         <span className="p">)</span><br/>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">head</span>
         <span className="p">()</span>
       </pre>
     </div>


     <div className="output_text">
       (1520, 9)
       <pre className='output_area'>
         <table border="1" className="table table-striped">
           <thead>
             <tr>
               <th></th>
               <th>Date</th>
               <th>Football_Season</th>
               <th>Played_Day</th>
               <th>Results</th>
               <th>Score_Away</th>
               <th>Score_Home</th>
               <th>Team_Away</th>
               <th>Team_Concerned</th>
               <th>Team_Home</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th>0</th>
               <td>08/08/15</td>
               <td>2016</td>
               <td>1</td>
               <td>V</td>
               <td>2</td>
               <td>4</td>
               <td>Sunderland</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
             </tr>
             <tr>
               <th>1</th>
               <td>15/08/15</td>
               <td>2016</td>
               <td>2</td>
               <td>V</td>
               <td>2</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>WestHam</td>
             </tr>
             <tr>
               <th>2</th>
               <td>22/08/15</td>
               <td>2016</td>
               <td>3</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>Tottenham</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
             </tr>
             <tr>
               <th>3</th>
               <td>29/08/15</td>
               <td>2016</td>
               <td>4</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>Bournemouth</td>
             </tr>
             <tr>
               <th>4</th>
               <td>13/09/15</td>
               <td>2016</td>
               <td>5</td>
               <td>V</td>
               <td>2</td>
               <td>3</td>
               <td>AstonVilla</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
             </tr>
           </tbody>
         </table>
       </pre>
     </div>


     <div className=" highlight hl-ipython3">
       <pre>
         <span></span>
         <span className="k">def</span>
         <span className="nf"> get_season_time</span>
         <span className="p">(</span>
         <span className="n">month</span>
         <span className="p">):</span><br/>
         <span className="sd">    &#39;&#39;&#39;</span><br/>
         <span className="sd">    input: month - type int - month of the game</span><br/>
         <span className="sd">    output: season_time - type str - season of the game</span><br/>
         <span className="sd"></span><br/>
         <span className="sd">    This function return the season when the match was played.</span><br/>
         <span className="sd">    &#39;&#39;&#39;</span><br/>
         <br/>
         <span className="k">     if</span>
         <span className="p"> (</span>
         <span className="n">month</span>
         <span className="o"> == </span>
         <span className="mi">8</span>
         <span className="p">)</span>
         <span className="o"> | </span>
         <span className="p">(</span>
         <span className="n">month</span>
         <span className="o"> == </span>
         <span className="mi">7</span>
         <span className="p">):</span><br/>
         <span className="k">          return</span>
         <span className="mi"> 0</span><br/>
         <span className="k">     elif</span>
         <span className="p"> (</span>
         <span className="n">month</span>
         <span className="o"> &gt;= </span>
         <span className="mi">9</span>
         <span className="p">)</span>
         <span className="o"> &amp; </span>
         <span className="p"> (</span>
         <span className="n">month</span>
         <span className="o"> &lt; </span>
         <span className="mi">12</span>
         <span className="p"> ):</span><br/>
         <span className="k">          return</span>
         <span className="mi"> 1</span><br/>
         <span className="k">     elif</span>
         <span className="p"> (</span>
         <span className="n">month</span>
         <span className="o"> &gt;= </span>
         <span className="mi">12</span>
         <span className="p">)</span>
         <span className="o"> | </span>
         <span className="p">(</span>
         <span className="n">month</span>
         <span className="o"> &lt; </span>
         <span className="mi">3</span>
         <span className="p">):</span><br/>
         <span className="k">          return</span>
         <span className="mi"> 2</span><br/>
         <span className="k">     return</span>
         <span className="mi"> 3</span><br/>
         <br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Date&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">pd</span>
         <span className="o">.</span>
         <span className="n">to_datetime</span>
         <span className="p">(</span>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Date&quot;</span>
         <span className="p">],</span>
         <span className="nb"> format</span>
         <span className="o"> = </span>
         <span className="s1">&#39;</span>
         <span className="si">%d</span>
         <span className="s1">/%m/%y&#39;</span>
         <span className="p">,</span>
         <span className="n"> errors</span>
         <span className="o"> = </span>
         <span className="s1">&#39;coerce&#39;</span>
         <span className="p">)</span><br/>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">set_index</span>
         <span className="p">([</span>
         <span className="s1">&#39;Date&#39;</span>
         <span className="p">],</span>
         <span className="n"> inplace</span>
         <span className="o">=</span>
         <span className="kc">True</span>
         <span className="p">)</span><br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Year&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">index</span>
         <span className="o">.</span>
         <span className="n">year</span><br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Month&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">index</span>
         <span className="o">.</span>
         <span className="n">month</span><br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Day&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">index</span>
         <span className="o">.</span>
         <span className="n">day</span><br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Day_in_Week&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">index</span>
         <span className="o">.</span>
         <span className="n">dayofweek</span><br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Season&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Month&quot;</span>
         <span className="p">]</span>
         <span className="o">.</span>
         <span className="n">apply</span>
         <span className="p">(</span>
         <span className="k">lambda</span>
         <span className="n"> x</span>
         <span className="p">:</span>
         <span className="n"> get_season_time</span>
         <span className="p">(</span>
         <span className="n">x</span>
         <span className="p">))</span><br/>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">head</span>
         <span className="p">()</span>
       </pre>
     </div>


     <div className="output_text">
       <pre className='output_area'>
         <table border="1" className="table table-striped">
           <thead>
             <tr>
               <th></th>
               <th>Football_Season</th>
               <th>Played_Day</th>
               <th>Results</th>
               <th>Score_Away</th>
               <th>Score_Home</th>
               <th>Team_Away</th>
               <th>Team_Concerned</th>
               <th>Team_Home</th>
               <th>Year</th>
               <th>Month</th>
               <th>Day</th>
               <th>Day_in_Week</th>
               <th>Season</th>
             </tr>
             <tr>
               <th>Date</th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th>2015-08-08</th>
               <td>2016</td>
               <td>1</td>
               <td>V</td>
               <td>2</td>
               <td>4</td>
               <td>Sunderland</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>8</td>
               <td>8</td>
               <td>5</td>
               <td>0</td>
             </tr>
             <tr>
               <th>2015-08-15</th>
               <td>2016</td>
               <td>2</td>
               <td>V</td>
               <td>2</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>WestHam</td>
               <td>2015</td>
               <td>8</td>
               <td>15</td>
               <td>5</td>
               <td>0</td>
             </tr>
             <tr>
               <th>2015-08-22</th>
               <td>2016</td>
               <td>3</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>Tottenham</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>8</td>
               <td>22</td>
               <td>5</td>
               <td>0</td>
             </tr>
             <tr>
               <th>2015-08-29</th>
               <td>2016</td>
               <td>4</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>Bournemouth</td>
               <td>2015</td>
               <td>8</td>
               <td>29</td>
               <td>5</td>
               <td>0</td>
             </tr>
             <tr>
               <th>2015-09-13</th>
               <td>2016</td>
               <td>5</td>
               <td>V</td>
               <td>2</td>
               <td>3</td>
               <td>AstonVilla</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>9</td>
               <td>13</td>
               <td>6</td>
               <td>1</td>
             </tr>
           </tbody>
         </table>
       </pre>
     </div>

     <div className="highlight hl-ipython3">
       <pre>
         <span></span>
         <span className="k">def</span>
         <span className="nf"> get_big6_opponent</span>
         <span className="p">(</span>
         <span className="n">opponent</span>
         <span className="p">):</span><br/>
         <span className="sd">    &#39;&#39;&#39;</span><br/>
         <span className="sd">    input: opponent - type str - opponent team name</span><br/>
         <span className="sd">           big_six - type list - list of big six teams in Premier League</span><br/>
         <span className="sd">    output: is_op_big6 - type int - 1 if opponent is in big 6, 0 otherwise</span><br/>
         <span className="sd"></span><br/>
         <span className="sd">    This function return if a team plays against a big 6 team (in London) or not</span><br/>
         <span className="sd">    &#39;&#39;&#39;</span><br/>
         <br/>
         <span className="n">     big_six</span>
         <span className="o"> = </span>
         <span className="p">[</span>
         <span className="s2">&quot;Arsenal&quot;</span>
         <span className="p">,</span>
         <span className="s2"> &quot;Chelsea&quot;</span>
         <span className="p">,</span>
         <span className="s2"> &quot;Tottenham&quot;</span>
         <span className="p">,</span>
         <span className="s2"> &quot;Liverpool&quot;</span>
         <span className="p">,</span>
         <span className="s2"> &quot;ManchesterCity&quot;</span>
         <span className="p">,</span>
         <span className="s2"> &quot;ManchesterUnited&quot;</span>
         <span className="p">]</span><br/>
         <span className="k">     if</span>
         <span className="n"> opponent</span>
         <span className="ow"> in</span>
         <span className="n"> big_six</span>
         <span className="p">:</span><br/>
         <span className="k">          if</span>
         <span className="n"> opponent</span>
         <span className="ow"> in</span>
         <span className="n"> big_six</span>
         <span className="p">[:</span>
         <span className="mi">3</span>
         <span className="p">]:</span><br/>
         <span className="k">              return</span>
         <span className="n"> pd</span>
         <span className="o">.</span>
         <span className="n">Series</span>
         <span className="p">((</span>
         <span className="mi">1</span>
         <span className="p">,</span>
         <span className="mi">1</span>
         <span className="p">))</span>
         <span className="c1">#is_Big6_Opponent and is_Big6_London</span><br/>
         <span className="k">          else</span>
         <span className="p">:</span><br/>
         <span className="k">              return</span>
         <span className="n"> pd</span>
         <span className="o">.</span>
         <span className="n">Series</span>
         <span className="p">((</span>
         <span className="mi">1</span>
         <span className="p">,</span>
         <span className="mi">0</span>
         <span className="p">))</span><br/>
         <span className="k">          return</span>
         <span className="n"> pd</span>
         <span className="o">.</span>
         <span className="n">Series</span>
         <span className="p">((</span>
         <span className="mi">0</span>
         <span className="p">,</span>
         <span className="mi">0</span>
         <span className="p">))</span><br/>
         <br/>
         <span className="c1"># Get Oponnent #</span>
         <br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Opponent&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">np</span>
         <span className="o">.</span>
         <span className="n">where</span>
         <span className="p">(</span>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Team_Concerned&quot;</span>
         <span className="p">]</span>
         <span className="o"> == </span>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Team_Home&quot;</span>
         <span className="p">],</span><br/>
         <span className="n">                                  df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Team_Away&quot;</span>
         <span className="p">],</span><br/>
         <span className="n">                                  df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Team_Home&quot;</span>
         <span className="p">])</span><br/>
         <br/>
         <span className="c1"># Get Bool is_Big6_Opponent is_Big6_London #</span><br/>
         <span className="n">df_england</span>
         <span className="p">[[</span>
         <span className="s1">&#39;is_Big6_Opponent&#39;</span>
         <span className="p">,</span>
         <span className="s1"> &#39;is_Big6_London_Opponent&#39;</span>
         <span className="p">]]</span>
         <span className="o"> = </span>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">apply</span>
         <span className="p">(</span>
         <span className="k">lambda</span>
         <span className="n"> row</span>
         <span className="p">:</span>
         <span className="n"> pd</span>
         <span className="o">.</span>
         <span className="n">Series</span>
         <span className="p">(</span>
         <span className="n">get_big6_opponent</span>
         <span className="p">(</span>
         <span className="n">row</span>
         <span className="p">[</span>
         <span className="s1">&#39;Opponent&#39;</span>
         <span className="p">])),</span>
         <span className="n"> axis</span>
         <span className="o">=</span>
         <span className="mi">1</span>
         <span className="p">)</span><br/>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">head</span>
         <span className="p">()</span>
       </pre>
     </div>


     <div className="output_text">
       <pre className='output_area'>
         <table border="1" className="table table-striped">
           <thead>
             <tr>
               <th></th>
               <th>Football_Season</th>
               <th>Played_Day</th>
               <th>Results</th>
               <th>Score_Away</th>
               <th>Score_Home</th>
               <th>Team_Away</th>
               <th>Team_Concerned</th>
               <th>Team_Home</th>
               <th>Year</th>
               <th>Month</th>
               <th>Day</th>
               <th>Day_in_Week</th>
               <th>Season</th>
               <th>Opponent</th>
               <th>is_Big6_Opponent</th>
               <th>is_Big6_London_Opponent</th>
             </tr>
             <tr>
               <th>Date</th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th>2015-08-08</th>
               <td>2016</td>
               <td>1</td>
               <td>V</td>
               <td>2</td>
               <td>4</td>
               <td>Sunderland</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>8</td>
               <td>8</td>
               <td>5</td>
               <td>0</td>
               <td>LeicesterCity</td>
               <td>0</td>
               <td>0</td>
             </tr>
             <tr>
               <th>2015-08-15</th>
               <td>2016</td>
               <td>2</td>
               <td>V</td>
               <td>2</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>WestHam</td>
               <td>2015</td>
               <td>8</td>
               <td>15</td>
               <td>5</td>
               <td>0</td>
               <td>WestHam</td>
               <td>0</td>
               <td>0</td>
             </tr>
             <tr>
               <th>2015-08-22</th>
               <td>2016</td>
               <td>3</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>Tottenham</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>8</td>
               <td>22</td>
               <td>5</td>
               <td>0</td>
               <td>LeicesterCity</td>
               <td>0</td>
               <td>0</td>
             </tr>
             <tr>
               <th>2015-08-29</th>
               <td>2016</td>
               <td>4</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>Bournemouth</td>
               <td>2015</td>
               <td>8</td>
               <td>29</td>
               <td>5</td>
               <td>0</td>
               <td>Bournemouth</td>
               <td>0</td>
               <td>0</td>
             </tr>
             <tr>
               <th>2015-09-13</th>
               <td>2016</td>
               <td>5</td>
               <td>V</td>
               <td>2</td>
               <td>3</td>
               <td>AstonVilla</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>9</td>
               <td>13</td>
               <td>6</td>
               <td>1</td>
               <td>LeicesterCity</td>
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
         <span className="k">def</span>
         <span className="nf"> points_won</span>
         <span className="p">(</span>
         <span className="n">result</span>
         <span className="p">):</span><br/>
         <span className="sd">     &#39;&#39;&#39;</span><br/>
         <span className="sd">    input: result - type str - result of a team V (Victories), D (Defeat) or N (Nul=Draw)</span><br/>
         <span className="sd">    output: int_result - type int - return points won function of result</span><br/>
         <span className="sd"></span><br/>
         <span className="sd">    This function return the number of points won function of the result</span><br/>
         <span className="sd">    &#39;&#39;&#39;</span><br/>
         <br/>
         <span className="k">    if</span>
         <span className="n"> result</span>
         <span className="o"> == </span>
         <span className="s2">&quot;V&quot;</span>
         <span className="p">:</span><br/>
         <span className="k">         return</span>
         <span className="mi"> 3</span>
         <span className="c1"> #int_result</span><br/>
         <span className="k">    elif</span>
         <span className="n"> result</span>
         <span className="o"> == </span>
         <span className="s2">&quot;D&quot;</span>
         <span className="p">:</span><br/>
         <span className="k">         return</span>
         <span className="mi"> 0</span><br/>
         <span className="k">    return</span>
         <span className="mi"> 1</span><br/>
         <br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Points_Won&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Results&quot;</span>
         <span className="p">]</span>
         <span className="o">.</span>
         <span className="n">apply</span>
         <span className="p">(</span>
         <span className="k">lambda</span>
         <span className="n"> x</span>
         <span className="p">:</span>
         <span className="n"> points_won</span>
         <span className="p">(</span>
         <span className="n">x</span>
         <span className="p">))</span><br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Difference&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">np</span>
         <span className="o">.</span>
         <span className="n">where</span>
         <span className="p">(</span>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Team_Concerned&quot;</span>
         <span className="p">]</span>
         <span className="o"> == </span>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Team_Home&quot;</span>
         <span className="p">],</span><br/>
         <span className="n">                                     df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Score_Home&quot;</span>
         <span className="p">]</span>
         <span className="o"> - </span>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Score_Away&quot;</span>
         <span className="p">],</span><br/>
         <span className="n">                                     df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Score_Away&quot;</span>
         <span className="p">]</span>
         <span className="o"> - </span>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Score_Home&quot;</span>
         <span className="p">])</span><br/>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">head</span>
         <span className="p">()</span>
       </pre>
     </div>


     <div className="output_text">
       <pre className='output_area'>
         <table border="1" className="table table-striped">
           <thead>
             <tr>
               <th></th>
               <th>Football_Season</th>
               <th>Played_Day</th>
               <th>Results</th>
               <th>Score_Away</th>
               <th>Score_Home</th>
               <th>Team_Away</th>
               <th>Team_Concerned</th>
               <th>Team_Home</th>
               <th>Year</th>
               <th>Month</th>
               <th>Day</th>
               <th>Day_in_Week</th>
               <th>Season</th>
               <th>Opponent</th>
               <th>is_Big6_Opponent</th>
               <th>is_Big6_London_Opponent</th>
               <th>Points_Won</th>
               <th>Difference</th>
             </tr>
             <tr>
               <th>Date</th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th>2015-08-08</th>
               <td>2016</td>
               <td>1</td>
               <td>V</td>
               <td>2</td>
               <td>4</td>
               <td>Sunderland</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>8</td>
               <td>8</td>
               <td>5</td>
               <td>0</td>
               <td>LeicesterCity</td>
               <td>0</td>
               <td>0</td>
               <td>3</td>
               <td>-2</td>
             </tr>
             <tr>
               <th>2015-08-15</th>
               <td>2016</td>
               <td>2</td>
               <td>V</td>
               <td>2</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>WestHam</td>
               <td>2015</td>
               <td>8</td>
               <td>15</td>
               <td>5</td>
               <td>0</td>
               <td>WestHam</td>
               <td>0</td>
               <td>0</td>
               <td>3</td>
               <td>1</td>
             </tr>
             <tr>
               <th>2015-08-22</th>
               <td>2016</td>
               <td>3</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>Tottenham</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>8</td>
               <td>22</td>
               <td>5</td>
               <td>0</td>
               <td>LeicesterCity</td>
               <td>0</td>
               <td>0</td>
               <td>1</td>
               <td>0</td>
             </tr>
             <tr>
               <th>2015-08-29</th>
               <td>2016</td>
               <td>4</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>Bournemouth</td>
               <td>2015</td>
               <td>8</td>
               <td>29</td>
               <td>5</td>
               <td>0</td>
               <td>Bournemouth</td>
               <td>0</td>
               <td>0</td>
               <td>1</td>
               <td>0</td>
             </tr>
             <tr>
               <th>2015-09-13</th>
               <td>2016</td>
               <td>5</td>
               <td>V</td>
               <td>2</td>
               <td>3</td>
               <td>AstonVilla</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>9</td>
               <td>13</td>
               <td>6</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>0</td>
               <td>0</td>
               <td>3</td>
               <td>-1</td>
             </tr>
           </tbody>
         </table>
       </pre>
     </div>


     <div className="highlight hl-ipython3">
       <pre>
         <span></span>
         <span className="k">def</span>
         <span className="nf"> get_cumul</span>
         <span className="p">(</span>
         <span className="n">row</span>
         <span className="p">,</span>
         <span className="n"> str_col_name</span>
         <span className="p">,</span>
         <span className="n"> df</span>
         <span className="p">):</span><br/>
         <span className="sd">    &#39;&#39;&#39;</span><br/>
         <span className="sd">    input: row - row of the apply dataframe we work on </span><br/>
         <span className="sd">           str_col_name - column name we want to cumul</span><br/>
         <span className="sd">           df - type pd.DataFrame - dataframe we work on</span><br/>
         <span className="sd">    output: cum_points - int - cumul point at a specific date in a football season</span><br/>
         <span className="sd"></span><br/>
         <span className="sd">    This function return the cumul of a specific column at every moment of the season</span><br/>
         <span className="sd">    &#39;&#39;&#39;</span><br/>
         <span className="n">     date</span>
         <span className="o"> = </span>
         <span className="n">row</span>
         <span className="o">.</span>
         <span className="n">name</span><br/>
         <span className="n">     season</span>
         <span className="o"> = </span>
         <span className="n">row</span>
         <span className="o">.</span>
         <span className="n">Football_Season</span><br/>
         <span className="n">     team</span>
         <span className="o"> = </span>
         <span className="n">row</span>
         <span className="o">.</span>
         <span className="n">Team_Concerned</span><br/>
         <span className="n">     cum_points</span>
         <span className="o"> = </span>
         <span className="n">df</span>
         <span className="p">[(</span>
         <span className="n">df</span>
         <span className="o">.</span>
         <span className="n">index</span>
         <span className="o"> &lt;= </span>
         <span className="n">date</span>
         <span className="p">)</span>
         <span className="o"> &amp; </span>
         <span className="p">(</span>
         <span className="n">df</span>
         <span className="o">.</span>
         <span className="n">Football_Season</span>
         <span className="o"> == </span>
         <span className="n">season</span>
         <span className="p">)</span>
         <span className="o"> &amp; </span>
         <span className="p">(</span>
         <span className="n">df</span>
         <span className="o">.</span>
         <span className="n">Team_Concerned</span>
         <span className="o"> == </span>
         <span className="n">team</span>
         <span className="p">)][</span>
         <span className="n">str_col_name</span>
         <span className="p">]</span>
         <span className="o">.</span>
         <span className="n">sum</span>
         <span className="p">()</span><br/>
         <br/>
         <span className="k">     return</span>
         <span className="n"> cum_points</span><br/>
         <br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Cumul_Points&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">apply</span>
         <span className="p">(</span>
         <span className="n">get_cumul</span>
         <span className="p">,</span>
         <span className="n"> axis</span>
         <span className="o">=</span>
         <span className="mi">1</span>
         <span className="p">,</span>
         <span className="n"> args</span>
         <span className="o">=</span>
         <span className="p">(</span>
         <span className="s1">&#39;Points_Won&#39;</span>
         <span className="p">,</span>
         <span className="n"> df_england</span>
         <span className="p">,))</span><br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Cumul_Difference&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">apply</span>
         <span className="p">(</span>
         <span className="n">get_cumul</span>
         <span className="p">,</span>
         <span className="n"> axis</span>
         <span className="o">=</span>
         <span className="mi">1</span>
         <span className="p">,</span>
         <span className="n"> args</span>
         <span className="o">=</span>
         <span className="p">(</span>
         <span className="s1">&#39;Difference&#39;</span>
         <span className="p">,</span>
         <span className="n"> df_england</span>
         <span className="p">,))</span><br/>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">head</span>
         <span className="p">()</span>
       </pre>
     </div>


     <div className="output_text">
       <pre className='output_area'>
         <table border="1" className="table table-striped">
           <thead>
             <tr>
               <th></th>
               <th>Football_Season</th>
               <th>Played_Day</th>
               <th>Results</th>
               <th>Score_Away</th>
               <th>Score_Home</th>
               <th>Team_Away</th>
               <th>Team_Concerned</th>
               <th>Team_Home</th>
               <th>Year</th>
               <th>Month</th>
               <th>Day</th>
               <th>Day_in_Week</th>
               <th>Season</th>
               <th>Opponent</th>
               <th>is_Big6_Opponent</th>
               <th>is_Big6_London_Opponent</th>
               <th>Points_Won</th>
               <th>Difference</th>
               <th>Cumul_Points</th>
               <th>Cumul_Difference</th>
             </tr>
             <tr>
               <th>Date</th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th>2015-08-08</th>
               <td>2016</td>
               <td>1</td>
               <td>V</td>
               <td>2</td>
               <td>4</td>
               <td>Sunderland</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>8</td>
               <td>8</td>
               <td>5</td>
               <td>0</td>
               <td>LeicesterCity</td>
               <td>0</td>
               <td>0</td>
               <td>3</td>
               <td>-2</td>
               <td>3</td>
               <td>-2</td>
             </tr>
             <tr>
               <th>2015-08-15</th>
               <td>2016</td>
               <td>2</td>
               <td>V</td>
               <td>2</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>WestHam</td>
               <td>2015</td>
               <td>8</td>
               <td>15</td>
               <td>5</td>
               <td>0</td>
               <td>WestHam</td>
               <td>0</td>
               <td>0</td>
               <td>3</td>
               <td>1</td>
               <td>6</td>
               <td>-1</td>
             </tr>
             <tr>
               <th>2015-08-22</th>
               <td>2016</td>
               <td>3</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>Tottenham</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>8</td>
               <td>22</td>
               <td>5</td>
               <td>0</td>
               <td>LeicesterCity</td>
               <td>0</td>
               <td>0</td>
               <td>1</td>
               <td>0</td>
               <td>7</td>
               <td>-1</td>
             </tr>
             <tr>
               <th>2015-08-29</th>
               <td>2016</td>
               <td>4</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>Bournemouth</td>
               <td>2015</td>
               <td>8</td>
               <td>29</td>
               <td>5</td>
               <td>0</td>
               <td>Bournemouth</td>
               <td>0</td>
               <td>0</td>
               <td>1</td>
               <td>0</td>
               <td>8</td>
               <td>-1</td>
             </tr>
             <tr>
               <th>2015-09-13</th>
               <td>2016</td>
               <td>5</td>
               <td>V</td>
               <td>2</td>
               <td>3</td>
               <td>AstonVilla</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>9</td>
               <td>13</td>
               <td>6</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>0</td>
               <td>0</td>
               <td>3</td>
               <td>-1</td>
               <td>11</td>
               <td>-2</td>
             </tr>
           </tbody>
         </table>
       </pre>
     </div>


     <div className=" highlight hl-ipython3">
       <pre>
         <span></span>
         <span className="k">def </span>
         <span className="nf">get_classement</span>
         <span className="p">(</span>
         <span className="n">row</span>
         <span className="p">,</span>
         <span className="n"> df</span>
         <span className="p">):</span><br/>
         <span className="sd">    &#39;&#39;&#39;</span><br/>
         <span className="sd">    input: row - row of the apply dataframe we work on</span><br/>
         <span className="sd">           df - type pd.DataFrame - dataframe we work on</span><br/>
         <span className="sd">    output: cum_points - type int - classement at a specific date in a football season</span><br/>
         <span className="sd"></span><br/>
         <span className="sd">    This function return the classement of a team at every moment of the season</span><br/>
         <span className="sd">    &#39;&#39;&#39;</span><br/>
         <span className="n">     date</span>
         <span className="o"> = </span>
         <span className="n">row</span>
         <span className="o">.</span>
         <span className="n">name</span><br/>
         <span className="n">     season</span>
         <span className="o"> = </span>
         <span className="n">row</span>
         <span className="o">.</span>
         <span className="n">Football_Season</span><br/>
         <span className="n">     team</span>
         <span className="o"> = </span>
         <span className="n">row</span>
         <span className="o">.</span>
         <span className="n">Team_Concerned</span><br/>
         <span className="n">     classement</span>
         <span className="o"> = </span>
         <span className="n">df</span>
         <span className="p">[(</span>
         <span className="n">df</span>
         <span className="o">.</span>
         <span className="n">index</span>
         <span className="o"> &lt;= </span>
         <span className="n">date</span>
         <span className="p">)</span><br/>
         <span className="o">                  &amp;</span>
         <span className="p">(</span>
         <span className="n">df</span>
         <span className="o">.</span>
         <span className="n">Football_Season</span>
         <span className="o"> == </span>
         <span className="n">season</span>
         <span className="p">)][[</span>
         <span className="s2">&quot;Team_Concerned&quot;</span>
         <span className="p">, </span>
         <span className="s2">&quot;Points_Won&quot;</span>
         <span className="p">, </span>
         <span className="s2">&quot;Difference&quot;</span>
         <span className="p">]]</span>\<br/>
         <span className="o">                    .</span>
         <span className="n">groupby</span>
         <span className="p">(</span>
         <span className="s2">&quot;Team_Concerned&quot;</span>
         <span className="p">)</span>
         <span className="o">.</span>
         <span className="n">sum</span>
         <span className="p">()</span>
         <span className="o">.</span>
         <span className="n">sort_values</span>
         <span className="p">(</span>
         <span className="n">by</span>
         <span className="o"> = </span>
         <span className="p">[</span>
         <span className="s2">&quot;Points_Won&quot;</span>
         <span className="p">,</span>
         <span className="s1">&#39;Difference&#39;</span>
         <span className="p">],</span><br/>
         <span className="n">                    ascending</span>
         <span className="o"> = </span>
         <span className="kc">False</span>
         <span className="p">)</span>
         <span className="o">.</span>
         <span className="n">index</span>
         <span className="o">.</span>
         <span className="n">get_loc</span>
         <span className="p">(</span>
         <span className="n">team</span>
         <span className="p">)</span>
         <span className="o">+</span>
         <span className="mi">1</span><br/>
         <br/>
         <span className="k">     return</span>
         <span className="n"> classement</span><br/>
         <br/>
         <span className="n">df_england</span>
         <span className="p">[</span>
         <span className="s2">&quot;Classement&quot;</span>
         <span className="p">]</span>
         <span className="o"> = </span>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">apply</span>
         <span className="p">(</span>
         <span className="n">get_classement</span>
         <span className="p">,</span>
         <span className="n"> axis</span>
         <span className="o">=</span>
         <span className="mi">1</span>
         <span className="p">,</span>
         <span className="n">args</span>
         <span className="o">=</span>
         <span className="p">(</span>
         <span className="n">df_england</span>
         <span className="p">,))</span><br/>
         <span className="n">df_england</span>
         <span className="o">.</span>
         <span className="n">head</span>
         <span className="p">()</span>
       </pre>
     </div>


     <div className="output_text">
       <pre className='output_area'>
         <table border="1" className="table table-striped">
           <thead>
             <tr>
               <th></th>
               <th>Football_Season</th>
               <th>Played_Day</th>
               <th>Results</th>
               <th>Score_Away</th>
               <th>Score_Home</th>
               <th>Team_Away</th>
               <th>Team_Concerned</th>
               <th>Team_Home</th>
               <th>Year</th>
               <th>Month</th>
               <th>Day</th>
               <th>Day_in_Week</th>
               <th>Season</th>
               <th>Opponent</th>
               <th>is_Big6_Opponent</th>
               <th>is_Big6_London_Opponent</th>
               <th>Points_Won</th>
               <th>Difference</th>
               <th>Cumul_Points</th>
               <th>Cumul_Difference</th>
               <th>Classement</th>
             </tr>
             <tr>
               <th>Date</th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th>2015-08-08</th>
               <td>2016</td>
               <td>1</td>
               <td>V</td>
               <td>2</td>
               <td>4</td>
               <td>Sunderland</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>8</td>
               <td>8</td>
               <td>5</td>
               <td>0</td>
               <td>LeicesterCity</td>
               <td>0</td>
               <td>0</td>
               <td>3</td>
               <td>-2</td>
               <td>3</td>
               <td>-2</td>
               <td>4</td>
             </tr>
             <tr>
               <th>2015-08-15</th>
               <td>2016</td>
               <td>2</td>
               <td>V</td>
               <td>2</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>WestHam</td>
               <td>2015</td>
               <td>8</td>
               <td>15</td>
               <td>5</td>
               <td>0</td>
               <td>WestHam</td>
               <td>0</td>
               <td>0</td>
               <td>3</td>
               <td>1</td>
               <td>6</td>
               <td>-1</td>
               <td>2</td>
             </tr>
             <tr>
               <th>2015-08-22</th>
               <td>2016</td>
               <td>3</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>Tottenham</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>8</td>
               <td>22</td>
               <td>5</td>
               <td>0</td>
               <td>LeicesterCity</td>
               <td>0</td>
               <td>0</td>
               <td>1</td>
               <td>0</td>
               <td>7</td>
               <td>-1</td>
               <td>2</td>
             </tr>
             <tr>
               <th>2015-08-29</th>
               <td>2016</td>
               <td>4</td>
               <td>N</td>
               <td>1</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>Leicester-City</td>
               <td>Bournemouth</td>
               <td>2015</td>
               <td>8</td>
               <td>29</td>
               <td>5</td>
               <td>0</td>
               <td>Bournemouth</td>
               <td>0</td>
               <td>0</td>
               <td>1</td>
               <td>0</td>
               <td>8</td>
               <td>-1</td>
               <td>3</td>
             </tr>
             <tr>
               <th>2015-09-13</th>
               <td>2016</td>
               <td>5</td>
               <td>V</td>
               <td>2</td>
               <td>3</td>
               <td>AstonVilla</td>
               <td>Leicester-City</td>
               <td>LeicesterCity</td>
               <td>2015</td>
               <td>9</td>
               <td>13</td>
               <td>6</td>
               <td>1</td>
               <td>LeicesterCity</td>
               <td>0</td>
               <td>0</td>
               <td>3</td>
               <td>-1</td>
               <td>11</td>
               <td>-2</td>
               <td>2</td>
             </tr>
           </tbody>
         </table>
       </pre>
     </div>

   </div>
 )
}

export default TransformFeaturingComponent;

import React from 'react';

function TransformManipulationComponent (){
 return (
   <div id='transform-manipulation'>
     <div className="highlight hl-ipython3">
       <pre>
         <span></span>
         <span className="n">df_england_months_scores</span>
         <span className="o"> = </span>
         <span className="n">df_england</span>
         <span className="p">[[</span>
         <span className="s2">&quot;Score_Away&quot;</span>
         <span className="p">,</span>
         <span className="s2"> &quot;Score_Home&quot;</span>
         <span className="p">]]</span>
         <span className="o">.</span>
         <span className="n">resample</span>
         <span className="p">(</span>
         <span className="s1">&#39;m&#39;</span>
         <span className="p">)</span>
         <span className="o">.</span>
         <span className="n">sum</span>
         <span className="p">()</span>
         <span className="o">.</span>
         <span className="n">copy</span>
         <span className="p">()</span><br/>
         <span className="n">df_england_months_scores</span>
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
              <th>Score_Away</th>
              <th>Score_Home</th>
            </tr>
            <tr>
              <th>Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>2015-08-31</th>
              <td>110</td>
              <td>88</td>
            </tr>
            <tr>
              <th>2015-09-30</th>
              <td>72</td>
              <td>104</td>
            </tr>
            <tr>
              <th>2015-10-31</th>
              <td>102</td>
              <td>108</td>
            </tr>
            <tr>
              <th>2015-11-30</th>
              <td>72</td>
              <td>108</td>
            </tr>
            <tr>
              <th>2015-12-31</th>
              <td>92</td>
              <td>132</td>
            </tr>
          </tbody>
        </table>
      </pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">df_england_resume_teams</span>
    		<span className="o"> = </span>
    		<span className="n">df_england</span>
    		<span className="p">[[</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Football_Season&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Points_Won&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Difference&quot;</span>
    		<span className="p">]]</span>\<br/>
    		<span className="o">                            .</span>
    		<span className="n">groupby</span>
    		<span className="p">([</span>
    		<span className="s1">&#39;Team_Concerned&#39;</span>
    		<span className="p">,</span>
    		<span className="s1"> &#39;Football_Season&#39;</span>
    		<span className="p">])</span>\<br/>
    		<span className="o">                            .</span>
    		<span className="n">agg</span>
    		<span className="p">({"{"}</span>
    		<span className="s1">&#39;Points_Won&#39;</span>
    		<span className="p">:</span>
    		<span className="p">[</span>
    		<span className="s1">&#39;sum&#39;</span>
    		<span className="p">,</span>
    		<span className="s1"> &#39;mean&#39;</span>
    		<span className="p">],</span>
    		<span className="s1"> &#39;Difference&#39;</span>
    		<span className="p">:</span>
    		<span className="p">[</span>
    		<span className="s1">&#39;sum&#39;</span>
    		<span className="p">,</span>
    		<span className="s1"> &#39;mean&#39;</span>
    		<span className="p">,</span>
    		<span className="s1"> &#39;min&#39;</span>
    		<span className="p">,</span>
    		<span className="s1"> &#39;max&#39;</span>
    		<span className="p">,</span>
    		<span className="s1">&#39;size&#39;</span>
    		<span className="p">]{"}"})</span><br/>
        <br/>
    		<span className="n">df_england_resume_teams</span>
    	</pre>
    </div>


    <div className="output_text">
      <pre className='output_area'>
        <table border="1" className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th colSpan="2" halign="left">Points_Won</th>
              <th colSpan="5" halign="left">Difference</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>sum</th>
              <th>mean</th>
              <th>sum</th>
              <th>mean</th>
              <th>min</th>
              <th>max</th>
              <th>size</th>
            </tr>
            <tr>
              <th>Team_Concerned</th>
              <th>Football_Season</th>
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
              <th rowSpan="2" valign="top">Arsenal</th>
              <th>2016</th>
              <td>71</td>
              <td>1.868421</td>
              <td>29</td>
              <td>0.763158</td>
              <td>-4</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>75</td>
              <td>1.973684</td>
              <td>33</td>
              <td>0.868421</td>
              <td>-3</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th>Aston-Villa</th>
              <th>2016</th>
              <td>17</td>
              <td>0.447368</td>
              <td>-7</td>
              <td>-0.184211</td>
              <td>-4</td>
              <td>6</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Bournemouth</th>
              <th>2016</th>
              <td>42</td>
              <td>1.105263</td>
              <td>-22</td>
              <td>-0.578947</td>
              <td>-4</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>46</td>
              <td>1.210526</td>
              <td>-12</td>
              <td>-0.315789</td>
              <td>-4</td>
              <td>5</td>
              <td>38</td>
            </tr>
            <tr>
              <th>Burnley</th>
              <th>2017</th>
              <td>40</td>
              <td>1.052632</td>
              <td>-16</td>
              <td>-0.421053</td>
              <td>-4</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Chelsea</th>
              <th>2016</th>
              <td>50</td>
              <td>1.315789</td>
              <td>6</td>
              <td>0.157895</td>
              <td>-3</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>93</td>
              <td>2.447368</td>
              <td>52</td>
              <td>1.368421</td>
              <td>-3</td>
              <td>5</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Crystal-Palace</th>
              <th>2016</th>
              <td>42</td>
              <td>1.105263</td>
              <td>-4</td>
              <td>-0.105263</td>
              <td>-4</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>41</td>
              <td>1.078947</td>
              <td>-11</td>
              <td>-0.289474</td>
              <td>-5</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Everton</th>
              <th>2016</th>
              <td>47</td>
              <td>1.236842</td>
              <td>4</td>
              <td>0.105263</td>
              <td>-4</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>61</td>
              <td>1.605263</td>
              <td>18</td>
              <td>0.473684</td>
              <td>-5</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th>Hull-City</th>
              <th>2017</th>
              <td>34</td>
              <td>0.894737</td>
              <td>-29</td>
              <td>-0.763158</td>
              <td>-5</td>
              <td>6</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Leicester-City</th>
              <th>2016</th>
              <td>81</td>
              <td>2.131579</td>
              <td>-2</td>
              <td>-0.052632</td>
              <td>-4</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>44</td>
              <td>1.157895</td>
              <td>-27</td>
              <td>-0.710526</td>
              <td>-3</td>
              <td>5</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Liverpool</th>
              <th>2016</th>
              <td>60</td>
              <td>1.578947</td>
              <td>13</td>
              <td>0.342105</td>
              <td>-3</td>
              <td>6</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>76</td>
              <td>2.000000</td>
              <td>36</td>
              <td>0.947368</td>
              <td>-2</td>
              <td>5</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Manchester-City</th>
              <th>2016</th>
              <td>66</td>
              <td>1.736842</td>
              <td>-22</td>
              <td>-0.578947</td>
              <td>-5</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>78</td>
              <td>2.052632</td>
              <td>1</td>
              <td>0.026316</td>
              <td>-5</td>
              <td>5</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Manchester-United</th>
              <th>2016</th>
              <td>66</td>
              <td>1.736842</td>
              <td>-22</td>
              <td>-0.578947</td>
              <td>-3</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>69</td>
              <td>1.815789</td>
              <td>-3</td>
              <td>-0.078947</td>
              <td>-4</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th>Middlesbrough</th>
              <th>2017</th>
              <td>28</td>
              <td>0.736842</td>
              <td>-26</td>
              <td>-0.684211</td>
              <td>-4</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th>Newcastle</th>
              <th>2016</th>
              <td>37</td>
              <td>0.973684</td>
              <td>-21</td>
              <td>-0.552632</td>
              <td>-5</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th>Norwich</th>
              <th>2016</th>
              <td>34</td>
              <td>0.894737</td>
              <td>-28</td>
              <td>-0.736842</td>
              <td>-4</td>
              <td>2</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Southampton</th>
              <th>2016</th>
              <td>63</td>
              <td>1.657895</td>
              <td>18</td>
              <td>0.473684</td>
              <td>-3</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>46</td>
              <td>1.210526</td>
              <td>-7</td>
              <td>-0.184211</td>
              <td>-3</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Stoke-City</th>
              <th>2016</th>
              <td>51</td>
              <td>1.342105</td>
              <td>-10</td>
              <td>-0.263158</td>
              <td>-4</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>44</td>
              <td>1.157895</td>
              <td>-15</td>
              <td>-0.394737</td>
              <td>-4</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Sunderland</th>
              <th>2016</th>
              <td>39</td>
              <td>1.026316</td>
              <td>-14</td>
              <td>-0.368421</td>
              <td>-4</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>24</td>
              <td>0.631579</td>
              <td>-40</td>
              <td>-1.052632</td>
              <td>-4</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Swansea-City</th>
              <th>2016</th>
              <td>47</td>
              <td>1.236842</td>
              <td>-10</td>
              <td>-0.263158</td>
              <td>-4</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>41</td>
              <td>1.078947</td>
              <td>-11</td>
              <td>-0.289474</td>
              <td>-5</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Tottenham</th>
              <th>2016</th>
              <td>70</td>
              <td>1.842105</td>
              <td>34</td>
              <td>0.894737</td>
              <td>-4</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>86</td>
              <td>2.263158</td>
              <td>60</td>
              <td>1.578947</td>
              <td>-2</td>
              <td>6</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Watford</th>
              <th>2016</th>
              <td>45</td>
              <td>1.184211</td>
              <td>-10</td>
              <td>-0.263158</td>
              <td>-4</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>40</td>
              <td>1.052632</td>
              <td>-28</td>
              <td>-0.736842</td>
              <td>-5</td>
              <td>2</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">West-Brom</th>
              <th>2016</th>
              <td>43</td>
              <td>1.131579</td>
              <td>-2</td>
              <td>-0.052632</td>
              <td>-3</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>45</td>
              <td>1.184211</td>
              <td>-18</td>
              <td>-0.473684</td>
              <td>-4</td>
              <td>4</td>
              <td>38</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">West-Ham</th>
              <th>2016</th>
              <td>62</td>
              <td>1.631579</td>
              <td>-2</td>
              <td>-0.052632</td>
              <td>-3</td>
              <td>3</td>
              <td>38</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>45</td>
              <td>1.184211</td>
              <td>7</td>
              <td>0.184211</td>
              <td>-3</td>
              <td>4</td>
              <td>38</td>
            </tr>
          </tbody>
        </table>
      </pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="nb">print</span>
    		<span className="p">(</span>
    		<span className="s2">&quot;Classement 2017:&quot;</span>
    		<span className="p">)</span><br/>
    		<span className="n">df_england_resume_teams</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Points_Won&quot;</span>
    		<span className="p">][</span>
    		<span className="s2">&quot;sum&quot;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">xs</span>
    		<span className="p">(</span>
    		<span className="mi">2017</span>
    		<span className="p">,</span>
    		<span className="n"> level</span>
    		<span className="o"> = </span>
    		<span className="s1">&#39;Football_Season&#39;</span>
    		<span className="p">)</span>
    		<span className="o">.</span>
    		<span className="n">sort_values</span>
    		<span className="p">(</span>
    		<span className="n">ascending</span>
    		<span className="o">=</span>
    		<span className="kc">False</span>
    		<span className="p">)</span>
    	</pre>
    </div>


    <div className="output_text">
      Classement 2017:
      <pre className='output_area'>
        Team_Concerned<br/>
        Chelsea              93<br/>
        Tottenham            86<br/>
        Manchester-City      78<br/>
        Liverpool            76<br/>
        Arsenal              75<br/>
        Manchester-United    69<br/>
        Everton              61<br/>
        Southampton          46<br/>
        Bournemouth          46<br/>
        West-Brom            45<br/>
        West-Ham             45<br/>
        Stoke-City           44<br/>
        Leicester-City       44<br/>
        Swansea-City         41<br/>
        Crystal-Palace       41<br/>
        Watford              40<br/>
        Burnley              40<br/>
        Hull-City            34<br/>
        Middlesbrough        28<br/>
        Sunderland           24<br/>
        <br/>
        Name: sum, dtype: int64
      </pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">df_england_resume_teams_classement</span>
    		<span className="o"> = </span>
    		<span className="n">df_england_resume_teams</span>
    		<span className="o">.</span>
    		<span className="n">copy</span>
    		<span className="p">()</span><br/>
    		<span className="n">df_england_resume_teams_classement</span>
    		<span className="o">.</span>
    		<span className="n">reset_index</span>
    		<span className="p">(</span>
    		<span className="n">level</span>
    		<span className="o"> = </span>
    		<span className="p">[</span>
    		<span className="s1">&#39;Football_Season&#39;</span>
    		<span className="p">,</span>
    		<span className="s1"> &#39;Team_Concerned&#39;</span>
    		<span className="p">],</span>
    		<span className="n"> inplace</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">)</span><br/>
    		<span className="n">df_england_resume_teams_classement</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Points_Season&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> = </span>\<br/>
    		<span className="n">                                  df_england_resume_teams_classement</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Points_Won&quot;</span>
    		<span className="p">][</span>
    		<span className="s2">&quot;sum&quot;</span>
    		<span className="p">]</span><br/>
    		<span className="n">df_england_resume_teams_classement</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Difference_Season&quot;</span>
    		<span className="p">]</span>
    		<span className="o">=</span>\<br/>
    		<span className="n">                                  df_england_resume_teams_classement</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Difference&quot;</span>
    		<span className="p">][</span>
    		<span className="s2">&quot;sum&quot;</span>
    		<span className="p">]</span><br/>
    		<span className="k">del</span>
    		<span className="n"> df_england_resume_teams_classement</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Points_Won&quot;</span>
    		<span className="p">]</span><br/>
    		<span className="k">del</span>
    		<span className="n"> df_england_resume_teams_classement</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Difference&quot;</span>
    		<span className="p">]</span><br/>
    		<span className="n">df_england_resume_teams_classement</span>
    		<span className="o">.</span>
    		<span className="n">sort_values</span>
    		<span className="p">(</span>
    		<span className="n">by</span>
    		<span className="o">=</span>
    		<span className="p">[</span>
    		<span className="s2">&quot;Football_Season&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Points_Season&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Difference_Season&quot;</span>
    		<span className="p">],</span><br/>
    		<span className="n">                                                </span>
    		<span className="o">ascending=</span>
    		<span className="kc">False</span>
    		<span className="p">,</span>
    		<span className="n"> inplace</span>
    		<span className="o">=</span>
    		<span className="kc">True</span>
    		<span className="p">)</span><br/>
    		<span className="n">df_england_resume_teams_classement</span>
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
              <th>Team_Concerned</th>
              <th>Football_Season</th>
              <th>Points_Season</th>
              <th>Difference_Season</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>7</th>
              <td>Chelsea</td>
              <td>2017</td>
              <td>93</td>
              <td>52</td>
            </tr>
            <tr>
              <th>33</th>
              <td>Tottenham</td>
              <td>2017</td>
              <td>86</td>
              <td>60</td>
            </tr>
            <tr>
              <th>18</th>
              <td>Manchester-City</td>
              <td>2017</td>
              <td>78</td>
              <td>1</td>
            </tr>
            <tr>
              <th>16</th>
              <td>Liverpool</td>
              <td>2017</td>
              <td>76</td>
              <td>36</td>
            </tr>
            <tr>
              <th>1</th>
              <td>Arsenal</td>
              <td>2017</td>
              <td>75</td>
              <td>33</td>
            </tr>
          </tbody>
        </table>
      </pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">df_england_resume_teams_classement</span>
    		<span className="o">.</span>
    		<span className="n">loc</span>
    		<span className="p">[</span>
    		<span className="n">df_england_resume_teams_classement</span>
    		<span className="o">.</span>
    		<span className="n">Football_Season</span>
    		<span className="o"> == </span>
    		<span className="mi">2016</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Classement&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> = </span>
    		<span className="n">np</span>
    		<span className="o">.</span>
    		<span className="n">arange</span>
    		<span className="p">(</span>
    		<span className="mi">1</span>
    		<span className="p">,</span>
    		<span className="mi"> 21</span>
    		<span className="p">)</span><br/>
    		<span className="n">df_england_resume_teams_classement</span>
    		<span className="o">.</span>
    		<span className="n">loc</span>
    		<span className="p">[</span>
    		<span className="n">df_england_resume_teams_classement</span>
    		<span className="o">.</span>
    		<span className="n">Football_Season</span>
    		<span className="o"> == </span>
    		<span className="mi">2017</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Classement&quot;</span>
    		<span className="p">]</span>
    		<span className="o"> = </span>
    		<span className="n">np</span>
    		<span className="o">.</span>
    		<span className="n">arange</span>
    		<span className="p">(</span>
    		<span className="mi">1</span>
    		<span className="p">,</span>
    		<span className="mi">21</span>
    		<span className="p">)</span><br/>
    		<span className="n">df_england_resume_teams_classement</span>
    		<span className="o"> = </span>
    		<span className="n">df_england_resume_teams_classement</span>
    		<span className="o">.</span>
    		<span className="n">groupby</span>
    		<span className="p">([</span>
    		<span className="s2">&quot;Team_Concerned&quot;</span>
    		<span className="p">,</span>
    		<span className="s2"> &quot;Football_Season&quot;</span>
    		<span className="p">])[</span>
    		<span className="s2">&quot;Classement&quot;</span>
    		<span className="p">]</span>
    		<span className="o">.</span>
    		<span className="n">sum</span>
    		<span className="p">()</span>
    		<span className="o">.</span>
    		<span className="n">to_frame</span>
    		<span className="p">()</span><br/>
    		<span className="n">df_england_resume_teams_classement</span>
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
              <th></th>
              <th>Classement</th>
            </tr>
            <tr>
              <th>Team_Concerned</th>
              <th>Football_Season</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="2" valign="top">Arsenal</th>
              <th>2016</th>
              <td>2.0</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>5.0</td>
            </tr>
            <tr>
              <th>Aston-Villa</th>
              <th>2016</th>
              <td>20.0</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Bournemouth</th>
              <th>2016</th>
              <td>16.0</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>9.0</td>
            </tr>
          </tbody>
        </table>
      </pre>
    </div>


    <div className="highlight hl-ipython3">
    	<pre>
    		<span></span>
    		<span className="n">pd</span>
    		<span className="o">.</span>
    		<span className="n">concat</span>
    		<span className="p">([</span>
    		<span className="n">df_england_resume_teams</span>
    		<span className="p">,</span>
    		<span className="n"> df_england_resume_teams_classement</span>
    		<span className="p">],</span>
    		<span className="n"> axis</span>
    		<span className="o">=</span>
    		<span className="mi">1</span>
    		<span className="p">)</span>
    		<span className="o">.</span>
    		<span className="n">head</span>
    		<span className="p">(</span>
    		<span className="mi">8</span>
    		<span className="p">)</span>
    	</pre>
    </div>

    <div className="output_text">
      <pre className='output_area'>
        <table border="1" className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>(Points_Won, sum)</th>
              <th>(Points_Won, mean)</th>
              <th>(Difference, sum)</th>
              <th>(Difference, mean)</th>
              <th>(Difference, min)</th>
              <th>(Difference, max)</th>
              <th>(Difference, size)</th>
              <th>Classement</th>
            </tr>
            <tr>
              <th>Team_Concerned</th>
              <th>Football_Season</th>
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
              <th rowSpan="2" valign="top">Arsenal</th>
              <th>2016</th>
              <td>71</td>
              <td>1.868421</td>
              <td>29</td>
              <td>0.763158</td>
              <td>-4</td>
              <td>4</td>
              <td>38</td>
              <td>2.0</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>75</td>
              <td>1.973684</td>
              <td>33</td>
              <td>0.868421</td>
              <td>-3</td>
              <td>4</td>
              <td>38</td>
              <td>5.0</td>
            </tr>
            <tr>
              <th>Aston-Villa</th>
              <th>2016</th>
              <td>17</td>
              <td>0.447368</td>
              <td>-7</td>
              <td>-0.184211</td>
              <td>-4</td>
              <td>6</td>
              <td>38</td>
              <td>20.0</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Bournemouth</th>
              <th>2016</th>
              <td>42</td>
              <td>1.105263</td>
              <td>-22</td>
              <td>-0.578947</td>
              <td>-4</td>
              <td>3</td>
              <td>38</td>
              <td>16.0</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>46</td>
              <td>1.210526</td>
              <td>-12</td>
              <td>-0.315789</td>
              <td>-4</td>
              <td>5</td>
              <td>38</td>
              <td>9.0</td>
            </tr>
            <tr>
              <th>Burnley</th>
              <th>2017</th>
              <td>40</td>
              <td>1.052632</td>
              <td>-16</td>
              <td>-0.421053</td>
              <td>-4</td>
              <td>3</td>
              <td>38</td>
              <td>16.0</td>
            </tr>
            <tr>
              <th rowSpan="2" valign="top">Chelsea</th>
              <th>2016</th>
              <td>50</td>
              <td>1.315789</td>
              <td>6</td>
              <td>0.157895</td>
              <td>-3</td>
              <td>4</td>
              <td>38</td>
              <td>10.0</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>93</td>
              <td>2.447368</td>
              <td>52</td>
              <td>1.368421</td>
              <td>-3</td>
              <td>5</td>
              <td>38</td>
              <td>1.0</td>
            </tr>
          </tbody>
        </table>
      </pre>
    </div>


  </div>
 )
}

export default TransformManipulationComponent;

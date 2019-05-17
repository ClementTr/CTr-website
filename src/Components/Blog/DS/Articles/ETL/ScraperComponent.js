import React from 'react';

function ScraperComponent (){
 return (
   <div id="scraper">
    <h2>Scraper</h2>
     <div className="highlight hl-ipython3">
      <pre>
        <span></span>
        <span className="kn">from</span>
        <span className="nn"> plotly.offline</span>
        <span className="k"> import</span>
        <span className="n"> download_plotlyjs</span>
        <span className="p">,</span>
        <span className="n"> init_notebook_mode</span>
        <span className="p">,</span>
        <span className="n"> plot</span>
        <span className="p">,</span>
        <span className="n"> iplot</span>
        <br/>
        <span className="kn">from</span>
        <span className="nn"> urllib.request</span>
        <span className="k"> import</span>
        <span className="n"> HTTPError</span>
        <span className="p">,</span>
        <span className="n"> urlopen</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> matplotlib.gridspec</span>
        <span className="k"> as</span>
        <span className="nn"> gridspec</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> matplotlib.patches</span>
        <span className="k"> as</span>
        <span className="nn"> mpatches</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> matplotlib.pyplot</span>
        <span className="k"> as</span>
        <span className="nn"> plt</span>
        <br/>
        <span className="kn">from</span>
        <span className="nn"> collections</span>
        <span className="k"> import</span>
        <span className="n"> Counter</span>
        <br/>
        <span className="kn">from</span>
        <span className="nn"> unidecode</span>
        <span className="k"> import</span>
        <span className="n"> unidecode</span>
        <br/>
        <span className="kn">from</span>
        <span className="nn"> bs4</span>
        <span className="k"> import</span>
        <span className="n"> BeautifulSoup</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> plotly.plotly</span>
        <span className="k"> as</span>
        <span className="nn"> py</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> plotly.tools</span>
        <span className="k"> as</span>
        <span className="nn"> tls</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> pandas</span>
        <span className="k"> as</span>
        <span className="nn"> pd</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> numpy</span>
        <span className="k"> as</span>
        <span className="nn"> np</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> lxml.html</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> requests</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> pickle</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> sys</span>
        <br/>
        <span className="kn">import</span>
        <span className="nn"> re</span>
        <br/>
        <br/>
        <span className="o">%</span>matplotlib inline
        <br/>
        <span className="n">plt</span>
        <span className="o">.</span>
        <span className="n">rcParams</span>
        <span className="p">[</span>
        <span className="s1">'figure.figsize'</span>
        <span className="p">]</span>
        <span className="o"> = </span>
        <span className="p">(</span>
        <span className="mi">14</span>
        <span className="p">, </span>
        <span className="mi">8</span>
        <span className="p">)</span>
        <br/>
        <span className="n">plt</span>
        <span className="o">.</span>
        <span className="n">style</span>
        <span className="o">.</span>
        <span className="n">use</span>
        <span className="p">(</span>
        <span className="s1">'seaborn-darkgrid'</span>
        <span className="p">)</span>
        <br/>
        <span className="n">init_notebook_mode</span>
        <span className="p">(</span>
        <span className="n">connected</span>
        <span className="o"> = </span>
        <span className="kc">True</span>
        <span className="p">)</span>
        <br/>
        <span className="n">pd</span>
        <span className="o">.</span>
        <span className="n">set_option</span>
        <span className="p">(</span>
        <span className="s2">&quot;display.max_columns&quot;</span>
        <span className="p">, </span>
        <span className="mi">100</span>
        <span className="p">)</span>
      </pre>
    </div>



    <div className=" highlight hl-ipython3">
      <pre>
        <span></span>
        <span className="k">def </span>
        <span className="nf">clean_scraping_dict</span>
        <span className="p">(</span>
        <span className="n">list_to_clean</span>
        <span className="p">):</span>
        <br/>
        <span className="sd">    '''</span><br/>
        <span className="sd">    input: list_to_clean - type list - list scrapped</span><br/>
        <span className="sd">    output: list_clean - type list - list scrapped clean</span><br/>
        <span className="sd"></span><br/>
        <span className="sd">    This function return list with scrapped elements cleaned</span><br/>
        <span className="sd">    '''</span><br/>
        <span className="k">     return</span>
        <span className="p"> [</span>
        <span className="n">ltc</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">'</span>
        <span className="se">\n</span>
        <span className="s1">'</span>
        <span className="p">, </span>
        <span className="s1">''</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">'</span>
        <span className="se">\t</span>
        <span className="s1">'</span>
        <span className="p">, </span>
        <span className="s1">''</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">'</span>
        <span className="se">\xa0</span>
        <span className="s1">'</span>
        <span className="p">, </span>
        <span className="s1">''</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">' '</span>
        <span className="p">, </span>
        <span className="s1">'-'</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">'ejournée'</span>
        <span className="p">, </span>
        <span className="s1">''</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">' '</span>
        <span className="p">, </span>
        <span className="s1">''</span>
        <span className="p">)</span>
        <span className="k"> for</span>
        <span className="n"> ltc</span>
        <span className="ow"> in</span>
        <span className="n"> list_to_clean</span>
        <span className="p">]</span>
        <span className="c1"> # list_clean</span>
        <br/>
        <br/>
        <span className="k">def</span>
        <span className="nf"> to_web_name</span>
        <span className="p">(</span>
        <span className="n">real_name</span>
        <span className="p">):</span>
        <br/>
        <span className="sd">    '''</span><br/>
        <span className="sd">    input: real_name - type list - name of teams scrapped</span><br/>
        <span className="sd">    output: web_name - type list - name of teams used in URL</span><br/>
        <span className="sd"></span><br/>
        <span className="sd">    This function return list that contains team names used in URL</span><br/>
        <span className="sd">    '''</span><br/>
        <span className="n">     web_name</span>
        <span className="o"> = </span>
        <span className="p">[]</span>
        <br/>
        <span className="k">     for</span>
        <span className="n"> r</span>
        <span className="ow"> in</span>
        <span className="n"> real_name</span>
        <span className="p">:</span>
        <br/>
        <span className="n">          r</span>
        <span className="o"> = </span>
        <span className="n">r</span>
        <span className="o">.</span>
        <span className="n">lower</span>
        <span className="p">()</span>
        <br/>
        <span className="n">          r</span>
        <span className="o"> = </span>
        <span className="n">r</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">' '</span>
        <span className="p">, </span>
        <span className="s1">'-'</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">'</span>
        <span className="se">\xa0</span>
        <span className="s1">'</span>
        <span className="p">, </span>
        <span className="s1">''</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">' '</span>
        <span className="p">, </span>
        <span className="s1">''</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     web_name</span>
        <span className="o">.</span>
        <span className="n">append</span>
        <span className="p">(</span>
        <span className="n">unidecode</span>
        <span className="p">(</span>
        <span className="n">r</span>
        <span className="p">))</span>
        <br/>
        <span className="k">     return</span>
        <span className="n"> web_name</span>
        <br/>
        <br/>
        <span className="k">def</span>
        <span className="nf"> create_dict</span>
        <span className="p">(</span>
        <span className="n">year</span>
        <span className="p">, </span>
        <span className="n">league</span>
        <span className="p">):</span>
        <br/>
        <span className="sd">    '''</span><br/>
        <span className="sd">    input: year - type int - year team names to scrap </span><br/>
        <span className="sd">           championnat - type str - championnat team names to scrap</span><br/>
        <span className="sd">    output: dict_league - type dict - dict with key as team names in classement and values </span><br/>
        <span className="sd">                                            as teams names used in URL</span><br/>
        <span className="sd"></span><br/>
        <span className="sd">    This function return dict of with key as team names in classement </span><br/>
        <span className="sd">    and values as teams names used in URL</span><br/>
        <span className="sd">    '''</span><br/>
        <span className="n">     dict_league</span>
        <span className="o"> = </span>
        <span className="p"> {"{}"} </span><br/>
        <span className="n">     year</span>
        <span className="o"> = </span>
        <span className="nb">str</span>
        <span className="p">(</span>
        <span className="n">year</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     URL</span>
        <span className="o"> = </span>
        <span className="s2">&quot;http://www.sports.fr/football/&quot;</span>
        <span className="o"> + </span>
        <span className="n">league</span>
        <span className="o"> + </span>
        <span className="s2">&quot;/&quot;</span>
        <span className="o"> + </span>
        <span className="n">year</span>
        <span className="o"> + </span>
        <span className="s2">&quot;/classements/classement-general.html&quot;</span>
        <br/>
        <span className="n">     page</span>
        <span className="o"> = </span>
        <span className="n">urlopen</span>
        <span className="p">(</span>
        <span className="n">URL</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">read</span>
        <span className="p">()</span>
        <br/>
        <span className="n">     html</span>
        <span className="o"> = </span>
        <span className="n">lxml</span>
        <span className="o">.</span>
        <span className="n">html</span>
        <span className="o">.</span>
        <span className="n">fromstring</span>
        <span className="p">(</span>
        <span className="n">page</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     scraping</span>
        <span className="o"> = </span>
        <span className="n">html</span>
        <span className="o">.</span>
        <span className="n">xpath</span>
        <span className="p">(</span>
        <span className="s2">&quot;//td[@className='tl nowrap']&quot;</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     data</span>
        <span className="o"> = </span>
        <span className="p">{"{}"}</span>
        <br/>
        <span className="n">     team_name_list</span>
        <span className="o"> = </span>
        <span className="p">[</span>
        <span className="n">sc</span>
        <span className="o">.</span>
        <span className="n">text_content</span>
        <span className="p">()</span>
        <span className="k"> for</span>
        <span className="n"> sc</span>
        <span className="ow"> in</span>
        <span className="n"> scraping</span>
        <span className="p">]</span>
        <br/>
        <span className="n">     team_name_list</span>
        <span className="o"> = </span>
        <span className="n">clean_scraping_dict</span>
        <span className="p">(</span>
        <span className="n">team_name_list</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     web_name_list</span>
        <span className="o"> = </span>
        <span className="n">to_web_name</span>
        <span className="p">(</span>
        <span className="n">team_name_list</span>
        <span className="p">)</span>
        <br/>
        <span className="k">     for</span>
        <span className="n"> wn</span>
        <span className="p">,</span>
        <span className="n"> tn</span>
        <span className="ow"> in</span>
        <span className="nb"> zip</span>
        <span className="p">(</span>
        <span className="n">web_name_list</span>
        <span className="p">,</span>
        <span className="n"> team_name_list</span>
        <span className="p">):</span>
        <br/>
        <span className="n">          dict_league</span>
        <span className="p">[</span>
        <span className="n">tn</span>
        <span className="p">]</span>
        <span className="o"> = </span>
        <span className="n">wn</span>
        <br/>
        <span className="k">     return</span>
        <span className="n"> dict_league</span>
        <br/>
        <br/>
        <span className="n">league</span>
        <span className="p">,</span>
        <span className="n"> year</span>
        <span className="o"> = </span>
        <span className="s2">&quot;angleterre&quot;</span>
        <span className="p">,</span>
        <span className="mi"> 2015</span>
        <br/>
        <span className="n">create_dict</span>
        <span className="p">(</span>
        <span className="nb">str</span>
        <span className="p">(</span>
        <span className="n">year</span>
        <span className="p">),</span>
        <span className="n"> league</span>
        <span className="p">)</span>
      </pre>
    </div>


    <div className="output_text">
      <pre className='output_area'>
        &#10100;
        <br/>
          'Arsenal': 'arsenal',
          'Aston-Villa': 'aston-villa',<br/>
          'Burnley': 'burnley',<br/>
          'Chelsea': 'chelsea',<br/>
          'Crystal-Palace': 'crystal-palace',<br/>
          'Everton': 'everton',<br/>
          'Hull-City': 'hull-city',<br/>
          'Leicester-City': 'leicester-city',<br/>
          'Liverpool': 'liverpool',<br/>
          'Manchester-City': 'manchester-city',<br/>
          'Manchester-United': 'manchester-united',<br/>
          'Newcastle': 'newcastle',<br/>
          'Queens-Park-Rangers': 'queens-park-rangers',<br/>
          'Southampton': 'southampton',<br/>
          'Stoke-City': 'stoke-city',<br/>
          'Sunderland': 'sunderland',<br/>
          'Swansea-City': 'swansea-city',<br/>
          'Tottenham': 'tottenham',<br/>
          'West-Brom': 'west-brom',<br/>
          'West-Ham': 'west-ham'
        <br/>
        &#10101;
      </pre>
    </div>


    <div className="highlight hl-ipython3">
      <pre>
        <span></span>
        <span className="k">def </span>
        <span className="nf">clean_scraping</span>
        <span className="p">(</span>
        <span className="n">list_to_clean</span>
        <span className="p">):</span>
        <br/>
        <span className="sd">    &#39;&#39;&#39;</span><br/>
        <span className="sd">    input: list_to_clean - type list - list scrapped</span><br/>
        <span className="sd">    output: list_clean - type list - list scrapped clean</span><br/>
        <span className="sd"></span><br/>
        <span className="sd">    This function return list with scrapped elements cleaned</span><br/>
        <span className="sd">    &#39;&#39;&#39;</span><br/>
        <br/>
        <span className="k">    return</span>
        <span className="p">[</span>
        <span className="n">ltc</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">&#39;</span>
        <span className="se">\n</span>
        <span className="s1">&#39;</span>
        <span className="p">,</span>
        <span className="s1"> &#39;&#39;</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">&#39;</span>
        <span className="se">\t</span>
        <span className="s1">&#39;</span>
        <span className="p">,</span>
        <span className="s1"> &#39;&#39;</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">&#39;</span>
        <span className="se">\xa0</span>
        <span className="s1">&#39;</span>
        <span className="p">,</span>
        <span className="s1"> &#39;&#39;</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">&#39; &#39;</span>
        <span className="p">,</span>
        <span className="s1"> &#39;&#39;</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">&#39;ejournée&#39;</span>
        <span className="p">,</span>
        <span className="s1"> &#39;&#39;</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">replace</span>
        <span className="p">(</span>
        <span className="s1">&#39;ej.&#39;</span>
        <span className="p">,</span>
        <span className="s1"> &#39;&#39;</span>
        <span className="p">)</span>
        <span className="k"> for</span>
        <span className="n"> ltc</span>
        <span className="ow"> in</span>
        <span className="n"> list_to_clean</span>
        <span className="p">]</span>
        <span className="c1"># list_clean</span>
        <br/>
        <br/>
        <span className="k">def</span>
        <span className="nf"> recover_main_football_data</span>
        <span className="p">(</span>
        <span className="n">league</span>
        <span className="p">,</span>
        <span className="n"> team</span>
        <span className="p">,</span>
        <span className="n"> year</span>
        <span className="p">):</span>
        <br/>
        <span className="sd">    &#39;&#39;&#39;</span><br/>
        <span className="sd">    input: championnat - type str - league we want to scrap</span><br/>
        <span className="sd">           team - type str - team result we want to scrap</span><br/>
        <span className="sd">           year - type int - year result we want to scrap</span><br/>
        <span className="sd">    output: df - type pd.DataFrame - df with results of a specific team over a year</span><br/>
        <span className="sd"></span><br/>
        <span className="sd">    This function return the results of team over a year as dataframe object</span><br/>
        <span className="sd">    &#39;&#39;&#39;</span><br/>
        <br/>
        <span className="n">     URL</span>
        <span className="o"> = </span>
        <span className="s2">&quot;http://www.sports.fr/football/&quot;</span>
        <span className="o"> + </span>
        <span className="n">league</span>
        <span className="o"> + </span>
        <span className="s2">&quot;/&quot;</span>
        <span className="o"> + </span>
        <span className="nb">str</span>
        <span className="p">(</span>
        <span className="n">year</span>
        <span className="p">)</span>
        <span className="o"> + </span>
        <span className="s2">&quot;/calendrier/&quot;</span>
        <span className="o"> + </span>
        <span className="n">team</span>
        <span className="o"> + </span>
        <span className="s2">&quot;.html&quot;</span>
        <br/>
        <span className="n">     page</span>
        <span className="o"> = </span>
        <span className="n">urlopen</span>
        <span className="p">(</span>
        <span className="n">URL</span>
        <span className="p">)</span>
        <span className="o">.</span>
        <span className="n">read</span>
        <span className="p">()</span>
        <br/>
        <span className="n">     html</span>
        <span className="o"> = </span>
        <span className="n">lxml</span>
        <span className="o">.</span>
        <span className="n">html</span>
        <span className="o">.</span>
        <span className="n">fromstring</span>
        <span className="p">(</span>
        <span className="n">page</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     scraping</span>
        <span className="o"> = </span>
        <span className="n">html</span>
        <span className="o">.</span>
        <span className="n">xpath</span>
        <span className="p">(</span>
        <span className="s2">&quot;//tr[@className=&#39;alt&#39;]//td&quot;</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     data</span>
        <span className="o"> = </span>
        <span className="p">{"{}"}</span>
        <br/>
        <span className="n">     data_list</span>
        <span className="o"> = </span>
        <span className="p">[</span>
        <span className="n">sc</span>
        <span className="o">.</span>
        <span className="n">text_content</span>
        <span className="p">()</span>
        <span className="k"> for</span>
        <span className="n"> sc</span>
        <span className="ow"> in</span>
        <span className="n"> scraping</span>
        <span className="p">]</span>
        <br/>
        <span className="n">     results_list</span>
        <span className="o"> = </span>
        <span className="n">data_list</span>
        <span className="p">[</span>
        <span className="mi">3</span>
        <span className="p">::</span>
        <span className="mi">8</span>
        <span className="p">]</span>
        <br/>
        <span className="n">     dates_list</span>
        <span className="o"> = </span>
        <span className="n">data_list</span>
        <span className="p">[</span>
        <span className="mi">0</span>
        <span className="p">::</span>
        <span className="mi">8</span>
        <span className="p">]</span>
        <br/>
        <span className="n">     team_home_list</span>
        <span className="o"> = </span>
        <span className="n">data_list</span>
        <span className="p">[</span>
        <span className="mi">4</span>
        <span className="p">::</span>
        <span className="mi">8</span>
        <span className="p">]</span>
        <br/>
        <span className="n">     team_away_list</span>
        <span className="o"> = </span>
        <span className="n">data_list</span>
        <span className="p">[</span>
        <span className="mi">6</span>
        <span className="p">::</span>
        <span className="mi">8</span>
        <span className="p">]</span>
        <br/>
        <span className="n">     played_day_list</span>
        <span className="o"> = </span>
        <span className="n">data_list</span>
        <span className="p">[</span>
        <span className="mi">2</span>
        <span className="p">::</span>
        <span className="mi">8</span>
        <span className="p">]</span>
        <br/>
        <span className="n">     score_list</span>
        <span className="o"> = </span>
        <span className="n">data_list</span>
        <span className="p">[</span>
        <span className="mi">5</span>
        <span className="p">::</span>
        <span className="mi">8</span>
        <span className="p">]</span>
        <br/>
        <br/>
        <span className="c1">    #Results</span>
        <br/>
        <span className="n">     results_list_cleaned</span>
        <span className="o"> = </span>
        <span className="n">clean_scraping</span>
        <span className="p">(</span>
        <span className="n">results_list</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     data</span>
        <span className="p">[</span>
        <span className="s2">&quot;Results&quot;</span>
        <span className="p">]</span>
        <span className="o"> = </span>
        <span className="n">results_list_cleaned</span>
        <br/>
        <br/>
        <span className="c1">    #Date</span>
        <br/>
        <span className="n">     dates_list_cleaned</span>
        <span className="o"> = </span>
        <span className="n">clean_scraping</span>
        <span className="p">(</span>
        <span className="n">dates_list</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     data</span>
        <span className="p">[</span>
        <span className="s2">&quot;Date&quot;</span>
        <span className="p">]</span>
        <span className="o"> = </span>
        <span className="n">dates_list_cleaned</span>
        <br/>
        <br/>
        <span className="c1">    #Team Name Home</span>
        <br/>
        <span className="n">     team_home_list_cleaned</span>
        <span className="o"> = </span>
        <span className="n">clean_scraping</span>
        <span className="p">(</span>
        <span className="n">team_home_list</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     data</span>
        <span className="p">[</span>
        <span className="s2">&quot;Team_Home&quot;</span>
        <span className="p">]</span>
        <span className="o"> = </span>
        <span className="n">team_home_list_cleaned</span>
        <br/>
        <br/>
        <span className="c1">    #Team Name Away</span>
        <br/>
        <span className="n">     team_away_list_cleaned</span>
        <span className="o"> = </span>
        <span className="n">clean_scraping</span>
        <span className="p">(</span>
        <span className="n">team_away_list</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     data</span>
        <span className="p">[</span>
        <span className="s2">&quot;Team_Away&quot;</span>
        <span className="p">]</span>
        <span className="o"> = </span>
        <span className="n">team_away_list_cleaned</span>
        <br/>
        <br/>
        <span className="c1">    #Played Day</span>
        <br/>
        <span className="n">     played_day_list_cleaned</span>
        <span className="o"> = </span>
        <span className="n">clean_scraping</span>
        <span className="p">(</span>
        <span className="n">played_day_list</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     data</span>
        <span className="p">[</span>
        <span className="s2">&quot;Played_Day&quot;</span>
        <span className="p">]</span>
        <span className="o"> = </span>
        <span className="n">played_day_list_cleaned</span>
        <br/>
        <br/>
        <span className="c1">    # Goal(s) scored Team Home/Away</span>
        <br/>
        <span className="n">     score_list_cleaned</span>
        <span className="o"> = </span>
        <span className="n">clean_scraping</span>
        <span className="p">(</span>
        <span className="n">score_list</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     score_list_home_cleaned</span>
        <span className="o"> = </span>
        <span className="s1">&#39;-&#39;</span>
        <span className="o">.</span>
        <span className="n">join</span>
        <span className="p">(</span>
        <span className="n">score_list_cleaned</span>
        <span className="p">)[</span>
        <span className="mi">0</span>
        <span className="p">::</span>
        <span className="mi">4</span>
        <span className="p">]</span>
        <br/>
        <span className="n">     data</span>
        <span className="p">[</span>
        <span className="s2">&quot;Score_Home&quot;</span>
        <span className="p">]</span>
        <span className="o"> = </span>
        <span className="nb">list</span>
        <span className="p">(</span>
        <span className="nb">map</span>
        <span className="p">(</span>
        <span className="nb">int</span>
        <span className="p">,</span>
        <span className="n"> score_list_home_cleaned</span>
        <span className="p">))</span>
        <br/>
        <span className="n">     score_away_list_cleaned</span>
        <span className="o"> = </span>
        <span className="s1">&#39;-&#39;</span>
        <span className="o">.</span>
        <span className="n">join</span>
        <span className="p">(</span>
        <span className="n">score_list_cleaned</span>
        <span className="p">)[</span>
        <span className="mi">2</span>
        <span className="p">::</span>
        <span className="mi">4</span>
        <span className="p">]</span>
        <br/>
        <span className="n">     data</span>
        <span className="p">[</span>
        <span className="s2">&quot;Score_Away&quot;</span>
        <span className="p">]</span>
        <span className="o"> = </span>
        <span className="nb">list</span>
        <span className="p">(</span>
        <span className="nb">map</span>
        <span className="p">(</span>
        <span className="nb">int</span>
        <span className="p">,</span>
        <span className="n"> score_away_list_cleaned</span>
        <span className="p">))</span>
        <br/>
        <span className="n">     data</span>
        <span className="p">[</span>
        <span className="s2">&quot;Team_Concerned&quot;</span>
        <span className="p">]</span>
        <span className="o"> = </span>
        <span className="n">team</span>
        <span className="o">.</span>
        <span className="n">title</span>
        <span className="p">()</span>
        <span className="n">data</span>
        <span className="p">[</span>
        <span className="s2">&quot;Football_Season&quot;</span>
        <span className="p">]</span>
        <span className="o"> = </span>
        <span className="nb">int</span>
        <span className="p">(</span>
        <span className="n">year</span>
        <span className="p">)</span>
        <br/>
        <span className="n">     df</span>
        <span className="o"> = </span>
        <span className="n">pd</span>
        <span className="o">.</span>
        <span className="n">DataFrame</span>
        <span className="p">(</span>
        <span className="n">data</span>
        <span className="p">)</span>
        <br/>
        <span className="k">     assert</span>
        <span className="p">(</span>
        <span className="n">df</span>
        <span className="o">.</span>
        <span className="n">shape</span>
        <span className="o"> == </span>
        <span className="p">(</span>
        <span className="mi">38</span>
        <span className="p">,</span>
        <span className="mi">9</span>
        <span className="p">))</span>
        <br/>
        <span className="k">     return</span>
        <span className="n"> df</span>
        <br/>
        <br/>
        <span className="n">league</span>
        <span className="p">,</span>
        <span className="n"> team</span>
        <span className="p">,</span>
        <span className="n"> year</span>
        <span className="o"> = </span>
        <span className="s2">&quot;angleterre&quot;</span>
        <span className="p">,</span>
        <span className="s2"> &quot;arsenal&quot;</span>
        <span className="p">,</span>
        <span className="mi"> 2017</span>
        <br/>
        <span className="n">recover_main_football_data</span>
        <span className="p">(</span>
        <span className="n">league</span>
        <span className="p">,</span>
        <span className="n"> team</span>
        <span className="p">,</span>
        <span className="n"> year</span>
        <span className="p">)</span>
      </pre>
    </div>

    <div className="output_text">
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
              <td>14/08/16</td>
              <td>2017</td>
              <td>1</td>
              <td>D</td>
              <td>4</td>
              <td>3</td>
              <td>Liverpool</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>1</th>
              <td>20/08/16</td>
              <td>2017</td>
              <td>2</td>
              <td>N</td>
              <td>0</td>
              <td>0</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>LeicesterCity</td>
            </tr>
            <tr>
              <th>2</th>
              <td>27/08/16</td>
              <td>2017</td>
              <td>3</td>
              <td>V</td>
              <td>3</td>
              <td>1</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>Watford</td>
            </tr>
            <tr>
              <th>3</th>
              <td>10/09/16</td>
              <td>2017</td>
              <td>4</td>
              <td>V</td>
              <td>1</td>
              <td>2</td>
              <td>Southampton</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>4</th>
              <td>17/09/16</td>
              <td>2017</td>
              <td>5</td>
              <td>V</td>
              <td>4</td>
              <td>1</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>HullCity</td>
            </tr>
            <tr>
              <th>5</th>
              <td>24/09/16</td>
              <td>2017</td>
              <td>6</td>
              <td>V</td>
              <td>0</td>
              <td>3</td>
              <td>Chelsea</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>6</th>
              <td>02/10/16</td>
              <td>2017</td>
              <td>7</td>
              <td>V</td>
              <td>1</td>
              <td>0</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>Burnley</td>
            </tr>
            <tr>
              <th>7</th>
              <td>15/10/16</td>
              <td>2017</td>
              <td>8</td>
              <td>V</td>
              <td>2</td>
              <td>3</td>
              <td>SwanseaCity</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>8</th>
              <td>22/10/16</td>
              <td>2017</td>
              <td>9</td>
              <td>N</td>
              <td>0</td>
              <td>0</td>
              <td>Middlesbrough</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>9</th>
              <td>29/10/16</td>
              <td>2017</td>
              <td>10</td>
              <td>V</td>
              <td>4</td>
              <td>1</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>Sunderland</td>
            </tr>
            <tr>
              <th>10</th>
              <td>06/11/16</td>
              <td>2017</td>
              <td>11</td>
              <td>N</td>
              <td>1</td>
              <td>1</td>
              <td>Tottenham</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>11</th>
              <td>19/11/16</td>
              <td>2017</td>
              <td>12</td>
              <td>N</td>
              <td>1</td>
              <td>1</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>ManchesterUnited</td>
            </tr>
            <tr>
              <th>12</th>
              <td>27/11/16</td>
              <td>2017</td>
              <td>13</td>
              <td>V</td>
              <td>1</td>
              <td>3</td>
              <td>Bournemouth</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>13</th>
              <td>03/12/16</td>
              <td>2017</td>
              <td>14</td>
              <td>V</td>
              <td>5</td>
              <td>1</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>WestHam</td>
            </tr>
            <tr>
              <th>14</th>
              <td>10/12/16</td>
              <td>2017</td>
              <td>15</td>
              <td>V</td>
              <td>1</td>
              <td>3</td>
              <td>StokeCity</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>15</th>
              <td>13/12/16</td>
              <td>2017</td>
              <td>16</td>
              <td>D</td>
              <td>1</td>
              <td>2</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>Everton</td>
            </tr>
            <tr>
              <th>16</th>
              <td>18/12/16</td>
              <td>2017</td>
              <td>17</td>
              <td>D</td>
              <td>1</td>
              <td>2</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>ManchesterCity</td>
            </tr>
            <tr>
              <th>17</th>
              <td>26/12/16</td>
              <td>2017</td>
              <td>18</td>
              <td>V</td>
              <td>0</td>
              <td>1</td>
              <td>WestBrom</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>18</th>
              <td>01/01/17</td>
              <td>2017</td>
              <td>19</td>
              <td>V</td>
              <td>0</td>
              <td>2</td>
              <td>CrystalPalace</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>19</th>
              <td>03/01/17</td>
              <td>2017</td>
              <td>20</td>
              <td>N</td>
              <td>3</td>
              <td>3</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>Bournemouth</td>
            </tr>
            <tr>
              <th>20</th>
              <td>14/01/17</td>
              <td>2017</td>
              <td>21</td>
              <td>V</td>
              <td>4</td>
              <td>0</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>SwanseaCity</td>
            </tr>
            <tr>
              <th>21</th>
              <td>22/01/17</td>
              <td>2017</td>
              <td>22</td>
              <td>V</td>
              <td>1</td>
              <td>2</td>
              <td>Burnley</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>22</th>
              <td>31/01/17</td>
              <td>2017</td>
              <td>23</td>
              <td>D</td>
              <td>2</td>
              <td>1</td>
              <td>Watford</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>23</th>
              <td>04/02/17</td>
              <td>2017</td>
              <td>24</td>
              <td>D</td>
              <td>1</td>
              <td>3</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>Chelsea</td>
            </tr>
            <tr>
              <th>24</th>
              <td>11/02/17</td>
              <td>2017</td>
              <td>25</td>
              <td>V</td>
              <td>0</td>
              <td>2</td>
              <td>HullCity</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>25</th>
              <td>04/03/17</td>
              <td>2017</td>
              <td>27</td>
              <td>D</td>
              <td>1</td>
              <td>3</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>Liverpool</td>
            </tr>
            <tr>
              <th>26</th>
              <td>18/03/17</td>
              <td>2017</td>
              <td>29</td>
              <td>D</td>
              <td>1</td>
              <td>3</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>WestBrom</td>
            </tr>
            <tr>
              <th>27</th>
              <td>02/04/17</td>
              <td>2017</td>
              <td>30</td>
              <td>N</td>
              <td>2</td>
              <td>2</td>
              <td>ManchesterCity</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>28</th>
              <td>05/04/17</td>
              <td>2017</td>
              <td>31</td>
              <td>V</td>
              <td>0</td>
              <td>3</td>
              <td>WestHam</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>29</th>
              <td>10/04/17</td>
              <td>2017</td>
              <td>32</td>
              <td>D</td>
              <td>0</td>
              <td>3</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>CrystalPalace</td>
            </tr>
            <tr>
              <th>30</th>
              <td>17/04/17</td>
              <td>2017</td>
              <td>33</td>
              <td>V</td>
              <td>2</td>
              <td>1</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>Middlesbrough</td>
            </tr>
            <tr>
              <th>31</th>
              <td>26/04/17</td>
              <td>2017</td>
              <td>28</td>
              <td>V</td>
              <td>0</td>
              <td>1</td>
              <td>LeicesterCity</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>32</th>
              <td>30/04/17</td>
              <td>2017</td>
              <td>35</td>
              <td>D</td>
              <td>0</td>
              <td>2</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>Tottenham</td>
            </tr>
            <tr>
              <th>33</th>
              <td>07/05/17</td>
              <td>2017</td>
              <td>36</td>
              <td>V</td>
              <td>0</td>
              <td>2</td>
              <td>ManchesterUnited</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>34</th>
              <td>10/05/17</td>
              <td>2017</td>
              <td>26</td>
              <td>V</td>
              <td>2</td>
              <td>0</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>Southampton</td>
            </tr>
            <tr>
              <th>35</th>
              <td>13/05/17</td>
              <td>2017</td>
              <td>37</td>
              <td>V</td>
              <td>4</td>
              <td>1</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
              <td>StokeCity</td>
            </tr>
            <tr>
              <th>36</th>
              <td>16/05/17</td>
              <td>2017</td>
              <td>34</td>
              <td>V</td>
              <td>0</td>
              <td>2</td>
              <td>Sunderland</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
            <tr>
              <th>37</th>
              <td>21/05/17</td>
              <td>2017</td>
              <td>38</td>
              <td>V</td>
              <td>1</td>
              <td>3</td>
              <td>Everton</td>
              <td>Arsenal</td>
              <td>Arsenal</td>
            </tr>
          </tbody>
        </table>
      </pre>
    </div>
  </div>
 )

}

export default ScraperComponent;

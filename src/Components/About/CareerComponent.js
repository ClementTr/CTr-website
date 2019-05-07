import React from 'react';

function CareerComponent (){
 return (
   <div id="section-career">
     <div className="container">

       <section className="timeline">
         <div className="timeline-item">
           <div className="timeline-img"></div>
             <div className="timeline-content js--fadeInLeft">
               <div className="align-left">
                 <h3 className="timeline-title">Data Scientist & Analyst <i>Job</i></h3>
                 <h4 className="timeline-title">CONTENTSQUARE - New York</h4>
               </div>
               <div className="date">2018 -</div>
               <p>
                 <u>Insi</u>g<u>ht Automation</u> - Professional thesis <i>« Define algorithms and capitalize on Machine
                 Learning approaches to automate insights generation »</i>.
               </p>
               <a className="btn_timeline" href="https://www.contentsquare.com/" target="_blank">More</a>
             </div>
         </div>


         <div className="timeline-item">
           <div className="timeline-img"></div>
             <div className="timeline-content js--fadeInRight">
               <div className="align-right">
                 <h3 className="no-margin timeline-title">CEO & Co-Founder</h3>
                 <h4 className="timeline-title">DATADEER - Paris</h4>
               </div>
               <div className="date">2018 -</div>
               <p><u>Data Consultin</u>g<u>  Firm</u> - Founded with
                 <a href="https://www.linkedin.com/in/poulainmaxime/"> Maxime Poulain</a>, we bring via DataDeer,
                 our <small>Machine Learning</small> and <small>Big Data</small> expertise
                 to create data tools and data collection processes.<br/><br/>
                 DataDeer helps European startups to scale up and create value from their data.
               </p>
               <a className="btn_timeline" href="http://www.datadeer.fr" target="_blank">More</a>
             </div>
         </div>

         <div className="timeline-item">
           <div className="timeline-img"></div>
             <div className="timeline-content js--fadeInLeft">
               <div className="align-left">
                 <h3 className="timeline-title">Data Eng. / Vis. <i>Project</i></h3>
                 <h4 className="timeline-title">Télécom ParisTech - Paris</h4>
               </div>
               <div className="date">2018<br/>1 month</div>
               <p>
                 <u>Interactions Ma</u>p<u> </u> - Created a <small>Javascript</small>  Map representing
                 countries' interactions based on GDELT database whose data is stored in <small>MongoDB</small>
                 instances (<small>cluster</small>) running on <small>AWS</small>.
               </p>
             </div>
         </div>

         <div className="timeline-item">
           <div className="timeline-img"></div>
             <div className="timeline-content js--fadeInRight">
               <div className="align-right">
                 <h3 className="no-margin timeline-title">Data Science / Spark <i>Project</i></h3>
                 <h4 className="timeline-title">Télécom ParisTech - Paris</h4>
               </div>
               <div className="date">2017<br/>1 month</div>
               <p><u>AchieveIT</u> - Developed a model that can predict whether a Kickstarter campaign
                 will achieve its goal or not using <small>Spark Scala</small>.</p>
             </div>
         </div>

         <div className="timeline-item">
           <div className="timeline-img"></div>
             <div className="timeline-content js--fadeInLeft">
               <div className="align-left">
                 <h3 className="timeline-title">Data Scientist <i>Job</i></h3>
                 <h4 className="timeline-title">OCTO Technology - Paris</h4>
               </div>
               <div className="date">2017<br/>6 months</div>
               <p><u>Peo</u>p<u>le Anal</u>y<u>tics</u> - Implemented <b>machine learning</b> algorithms to identify
                 the different cooperation <b>networks</b> of a company and analyze them using <small>Python</small> and <small>Gephi</small>.<br/>
                 › Unsupervised/supervised learning (<b>Naive Bayes</b>, <b>SVM</b>, <b>K-Means</b>),
                 <b>data visualization</b>, <b>Devops</b> (<small>Vagrant</small>, <small>Docker</small>)</p>
               <a className="btn_timeline" href="https://www.octo.com/en" target="_blank">More</a>
             </div>
         </div>

         <div className="timeline-item">
           <div className="timeline-img"></div>
             <div className="timeline-content js--fadeInRight">
               <div className="align-right">
                 <h3 className="no-margin timeline-title">Data Engineering <i>Project</i></h3>
                 <h4 className="timeline-title">ESME Sudria - Paris</h4>
               </div>
               <div className="date">2016<br/>6 months</div>
               <p><u>L</u>y<u>nkid</u> - Captured real-time data simulation from household electrical meters, analyzing them and creating
                 a <b>predictive model</b> to advise consumers using in particular <small>Kafka</small>, <small>Vertica</small> and <small>Tableau</small>.</p>
             </div>
         </div>

         <div className="timeline-item">
           <div className="timeline-img"></div>
             <div className="timeline-content js--fadeInLeft">
               <div className="align-left">
                 <h3 className="timeline-title">Data Scientist <i>Job</i></h3>
                 <h4 className="timeline-title">Stats (previously Prozone) - Nice</h4>
               </div>
               <div className="date">2016<br/>4 months</div>
               <p>Developed a <b>predictive model</b> with <small>R</small>, able to assess the injury risk of a professional football player.<br/>
                 › Analysis, statistical research, machine learning (<b>random forest</b>, <b>decision tree</b>)</p>
               <a className="btn_timeline" href="https://www.stats.com/" target="_blank">More</a>
             </div>
         </div>

         <div className="timeline-item">
           <div className="timeline-img"></div>
             <div className="timeline-content js--fadeInRight">
               <div className="align-right">
                 <h3 className="no-margin timeline-title">Data Analyst <i>Project</i></h3>
                 <h4 className="timeline-title">BME - Budapest</h4>
               </div>
               <div className="date">2015<br/>4 months</div>
               <p><u>Best Pla</u>y<u>ers</u> - Get specific group of football players using <small>RapidMiner</small>.</p>
             </div>
         </div>

       </section>
     </div>
   </div>
 )
}

export default CareerComponent;

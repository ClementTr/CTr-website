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
                 <h3 className="no-margin timeline-title">Head of Data - Data Engineer</h3>
                 <h4 className="timeline-title">BoA Data - Everywhere</h4>
               </div>
               <div className="date">2023<br/>-</div>
               <p>
                As a data consultant, I support companies not only on the technical aspects of data architecture design and implementation but also the strategic planning necessary for effective hiring within the data domain. I am committed to nurturing a robust data culture within organizations, focusing on enhancing processes and facilitating seamless communication between teams. I try to keep a holistic approach, aiming to bridge gaps between technical capabilities and business goals, ensuring that companies are not just data-informed but also data-driven at their core.
                Fimalac Entertainment: PyAirbite - BigQuery - DBT - Tableau
                Mooncard: Spark - Databricks - Airbyte - DBT - Tableau
                Horse Republic: Postgre - dlt - Dagster - DBT - Metabase
               </p>
               <a className="btn_timeline" href="https://www.boadata.com/" target="_blank">More</a>
             </div>
         </div>

       <div className="timeline-item">
           <div className="timeline-img"></div>
             <div className="timeline-content js--fadeInRight">
               <div className="align-right">
                 <h3 className="timeline-title">Head of Data</h3>
                 <h4 className="timeline-title">QARE - Paris</h4>
               </div>
               <div className="date">2019-2024<br/>-</div>
               <p>
                Develop a Data Driven environment from scratch in a hyper-growth startup.
                I have had the opportunity to blend leadership with a hands-on approach across the diverse fields of Data Engineering, Data Analysis, and Data Science. By laying the groundwork for each department and staying deeply involved in the operational aspects, I've aimed to support and learn alongside my teams, contributing to our collective growth and success.
                Create a scalable Data architecture (Lake/Warehouse) and its ETL/RETL pipelines using AWS tools (S3/Redshift) and Python with an Airflow scheduler. More than 30 API/databases connections featured with DBT.
                Define a strong Data Governance in a sensitive (medical) environment (GDPR & HDS)
                Successfully integrated the company's warehouse data with Tableau Software. Spearheaded a company-wide initiative that not only democratized data access but also fostered a data-driven culture across multiple departments, including Operations, Finance, Sales, Marketing, and Medical.  Our approach led to a substantial increase in daily users to 130 having a high usage rate, encompassing senior leadership teams such as the Executive Committee (Europe COMEX) and the Board of Directors (France CODIR), thereby facilitating informed decision-making at all levels of the organization in a balanced self-service BI environment. 
                Develop internal company processes connecting Data to Salesforce - linking Sales, Operations and Products departments. Add FastAPI solution for internal specific needs (monthly billings, product bug email targeting…) 
                Leveraged  NLP algorithms to enhance our data pipelines, ensuring efficient text cleaning and preprocessing for improved data quality and analysis. Spearheaded the development of Offer/Demand prediction algorithms, integrating these directly with our product to significantly enhance matching capabilities and drive user satisfaction. Pioneered the implementation of generative AI technologies to meet internal operational needs and improve product focusing particularly on optimizing doctors' time and resources. 
                Build and manage a strong and complementary team (OPS/Engineers/Analysts/Scientists) and make it growth from 1 to 10 collaborators.
               </p>
               <a className="btn_timeline" href="https://www.qare.fr/" target="_blank">More</a>
             </div>
         </div>


         <div className="timeline-item">
           <div className="timeline-img"></div>
             <div className="timeline-content js--fadeInLeft">
               <div className="align-left">
                 <h3 className="no-margin timeline-title">Data Scientist & Analyst</h3>
                 <h4 className="timeline-title">CONTENTSQUARE - New York</h4>
               </div>
               <div className="date">2018<br/>1 year</div>
               <p>
                Empowering clients to enhance their conversion rates through the strategic use of data insights, ensuring actionable recommendations were both accessible and implementable.
                Maintained a partnership with business stakeholders, directly contributing to the development and presentation of compelling visualizations that clearly communicated findings and recommendations to clients.
                Pioneered the design and execution of advanced algorithms, leveraging Machine Learning to drive significant revenue growth for e-commerce platforms by automating data insight generation.
              </p>
               <a className="btn_timeline" href="https://www.contentsquare.com/" target="_blank">More</a>
             </div>
         </div>

         <div className="timeline-item">
           <div className="timeline-img"></div>
             <div className="timeline-content js--fadeInRight">
               <div className="align-right">
                 <h3 className="no-margin timeline-title">Data Scientist</h3>
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
             <div className="timeline-content js--fadeInLeft">
               <div className="align-left">
                 <h3 className="timeline-title">Data Scientist</h3>
                 <h4 className="timeline-title">Stats (previously Prozone) - Nice</h4>
               </div>
               <div className="date">2016<br/>6 months</div>
               <p>Developed a <b>predictive model</b> with <small>R</small>, able to assess the injury risk of a professional football player.<br/>
                 › Analysis, statistical research, machine learning (<b>random forest</b>, <b>decision tree</b>)</p>
               <a className="btn_timeline" href="https://www.stats.com/" target="_blank">More</a>
             </div>
         </div>

       </section>
     </div>
   </div>
 )
}

export default CareerComponent;

import type { PortfolioProject, TelemetryMetric } from './types';
export const seedProjects: PortfolioProject[] = [
 {id:'finsight-ai',title:'FinSight AI',category:'FINTECH · AI',description:'A finance-focused assistant concept designed to make financial information more accessible to everyday users and financial advisors.',stack:['Flutter','Python','AI','Finance'],href:'https://github.com/AR20031959/FinSight_AI',featured:true,sort_order:1},
 {id:'mental-health-research',title:'Mental Health Research',category:'PSYCHOLOGY · RESEARCH',description:'Collected and analysed survey responses from 110 participants on mental-health distress, then translated findings into clear visual presentations.',stack:['Research','Data Analysis','Visualization'],href:null,featured:true,sort_order:2},
 {id:'marketing-automation',title:'Marketing Automation & CRM',category:'AUTOMATION · CRM',description:'Built automation pipelines and CRM workflows during an internship, connecting digital marketing systems with follow-up and sales processes.',stack:['CRM','Workflow Automation','Lead Management'],href:null,featured:true,sort_order:3},
 {id:'movie-reservation',title:'Movie Seating Reservation System',category:'WEB DEVELOPMENT',description:'A database-backed movie seating reservation project built to practise application flow, data storage, and booking logic.',stack:['PHP','MySQL','XAMPP'],href:null,featured:false,sort_order:4},
 {id:'titanic-model',title:'Titanic Prediction App',category:'DATA SCIENCE',description:'A logistic-regression classification project presented through an interactive Streamlit interface.',stack:['Python','Scikit-learn','Streamlit'],href:null,featured:false,sort_order:5},
 {id:'power-bi-analytics',title:'Business Intelligence Dashboard',category:'BUSINESS ANALYTICS',description:'Explored data modelling and dashboard storytelling to turn raw information into decision-support visuals.',stack:['Power BI','Data Modelling','DAX'],href:null,featured:false,sort_order:6}
];
export const seedMetrics: TelemetryMetric[] = [
 {id:'domains',label:'CORE DOMAINS',value:4,suffix:'',detail:'Finance · Analytics · Data Science · Psychology'},
 {id:'research',label:'RESEARCH RESPONDENTS',value:110,suffix:'+',detail:'Mental-health survey project'},
 {id:'certification',label:'NISM CERTIFICATION',value:2029,suffix:'',detail:'Validity through July'},
 {id:'toolkit',label:'ANALYTICAL TOOLKIT',value:6,suffix:'+',detail:'Power BI · Excel · Python · SQL · Tableau · R'}
];

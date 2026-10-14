-- Run this in Supabase Dashboard > SQL Editor.
create table if not exists public.projects (
  id text primary key,
  title text not null,
  category text not null,
  description text not null,
  stack text[] not null default '{}',
  href text,
  featured boolean not null default false,
  sort_order integer not null default 100,
  updated_at timestamptz not null default now()
);
create table if not exists public.telemetry_metrics (
  id text primary key,
  label text not null,
  value numeric not null default 0,
  suffix text not null default '',
  detail text not null default '',
  updated_at timestamptz not null default now()
);
-- Public portfolio data is readable by visitors. Writes should only be performed by trusted admins.
alter table public.projects enable row level security;
alter table public.telemetry_metrics enable row level security;
drop policy if exists "Public can read projects" on public.projects;
create policy "Public can read projects" on public.projects for select to anon, authenticated using (true);
drop policy if exists "Public can read telemetry metrics" on public.telemetry_metrics;
create policy "Public can read telemetry metrics" on public.telemetry_metrics for select to anon, authenticated using (true);
-- Do not create public INSERT/UPDATE/DELETE policies. Manage content in the Supabase dashboard or trusted server-side tooling.
-- Realtime: Dashboard > Database > Replication: enable projects and telemetry_metrics.
insert into public.projects (id,title,category,description,stack,href,featured,sort_order) values
('finsight-ai','FinSight AI','FINTECH · AI','A finance-focused assistant concept designed to make financial information more accessible to everyday users and financial advisors.',array['Flutter','Python','AI','Finance'],'https://github.com/AR20031959/FinSight_AI',true,1),
('mental-health-research','Mental Health Research','PSYCHOLOGY · RESEARCH','Collected and analysed survey responses from 110 participants on mental-health distress, then translated findings into clear visual presentations.',array['Research','Data Analysis','Visualization'],null,true,2),
('marketing-automation','Marketing Automation & CRM','AUTOMATION · CRM','Built automation pipelines and CRM workflows during an internship, connecting digital marketing systems with follow-up and sales processes.',array['CRM','Workflow Automation','Lead Management'],null,true,3),
('movie-reservation','Movie Seating Reservation System','WEB DEVELOPMENT','A database-backed movie seating reservation project built to practise application flow, data storage, and booking logic.',array['PHP','MySQL','XAMPP'],null,false,4),
('titanic-model','Titanic Prediction App','DATA SCIENCE','A logistic-regression classification project presented through an interactive Streamlit interface.',array['Python','Scikit-learn','Streamlit'],null,false,5),
('power-bi-analytics','Business Intelligence Dashboard','BUSINESS ANALYTICS','Explored data modelling and dashboard storytelling to turn raw information into decision-support visuals.',array['Power BI','Data Modelling','DAX'],null,false,6)
on conflict (id) do nothing;
insert into public.telemetry_metrics (id,label,value,suffix,detail) values
('domains','CORE DOMAINS',4,'','Finance · Analytics · Data Science · Psychology'),
('research','RESEARCH RESPONDENTS',110,'+','Mental-health survey project'),
('certification','NISM CERTIFICATION',2029,'','Validity through July'),
('toolkit','ANALYTICAL TOOLKIT',6,'+','Power BI · Excel · Python · SQL · Tableau · R')
on conflict (id) do nothing;
-- Realtime requires these tables in the publication; if not already present:
alter publication supabase_realtime add table public.projects;
alter publication supabase_realtime add table public.telemetry_metrics;

import{a9 as d,h as D,X as l,v as e,aa as p,j as s}from"./vendor-t0l2jWQ9.js";import{D as x}from"./index-CXrumv9o.js";import{D as c}from"./DashboardViewParams-CHXlEHLP.js";const b=({Dashboard:o})=>{const{projectId:r}=d();D(r);const a=l(),m=a.min_timestamp!==null&&a.max_timestamp!==null,i={minDate:e(a.min_timestamp),maxDate:e(a.max_timestamp)},[t,n]=p("dashboard-hide-dates",!1);return s.jsxs(s.Fragment,{children:[s.jsx(x,{dataRanges:i,isShowDateFilter:m,isDashboardHideDates:t,setIsDashboardHideDates:n}),s.jsx(c.Provider,{value:{isXaxisAsCategorical:t},children:s.jsx(o,{data:a})})]})};export{b as DashboardComponentTemplate};

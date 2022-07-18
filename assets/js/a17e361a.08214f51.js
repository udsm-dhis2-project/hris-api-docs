"use strict";(self.webpackChunkhris_api_docs=self.webpackChunkhris_api_docs||[]).push([[220],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8277:function(e,t,r){r.r(t),r.d(t,{default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"Import-Export",title:"Import/ExportModule",sidebar_label:"Import/Export"},p={unversionedId:"developers/data/Import-Export",id:"developers/data/Import-Export",isDocsHomePage:!1,title:"Import/ExportModule",description:"Import/Export Module.",source:"@site/docs/developers/data/importExport.md",sourceDirName:"developers/data",slug:"/developers/data/Import-Export",permalink:"/hris-api-docs/docs/developers/data/Import-Export",editUrl:"https://github.com/udsm-dhis2-lab/hris-api-docs/blob/main/docs/developers/data/importExport.md",version:"current",sidebar_label:"Import/Export",frontMatter:{id:"Import-Export",title:"Import/ExportModule",sidebar_label:"Import/Export"},sidebar:"docs",previous:{title:"Education Records Module",permalink:"/hris-api-docs/docs/developers/data/education-records"},next:{title:"Scheduler Module",permalink:"/hris-api-docs/docs/developers/data/Scheduler"}},l=[{value:"Import/Export Module.",id:"importexport-module",children:[{value:"Data Import Process",id:"data-import-process",children:[]},{value:"Data Export Process",id:"data-export-process",children:[]}]}],d={toc:l};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"importexport-module"},"Import/Export Module."),(0,a.kt)("p",null,"This module allows manual data entry and retrieval in the system. Manual data entry and retrieval is done based on templates  that can be downloaded from the system. The templates are categorized based on the forms used to capture data in the system and have same data fields as those existing in the forms. "),(0,a.kt)("h3",{id:"data-import-process"},"Data Import Process"),(0,a.kt)("p",null,"Data importation involves a series of actions such as downloading import template, choosing data import file, importing data. The following are the requests and respons associated with each process."),(0,a.kt)("h4",{id:"downloading-data-import-template"},"Downloading data import template"),(0,a.kt)("h3",{id:"data-export-process"},"Data Export Process"),(0,a.kt)("p",null,"Data exportation involves a series of actions such as selecting an organization unit, selecting a data export form and downloading exported data.The following are the requests and respons associated with each process."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Method:")," GET"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Payload")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n"id": "fbzalEYFM9a7O",\n"name": "Registration",\n"title": "Registration",\n"formSections": [],\n"formFieldMembers": [\n{\n"id": "vRLD9O4I91T6R",\n"created": "2021-09-06T22:46:35.215Z",\n"lastUpdated": "2021-09-06T22:46:35.215Z",\n"fieldid": "140",\n"formid": "40",\n"sort": 1,\n"isPinned": false,\n"showInList": true,\n"compulsory": false,\n"searchable": true,\n"field": {\n"id": "5289e934ab062",\n"created": "2013-11-18T07:17:24.000Z",\n"lastUpdated": "2013-11-18T07:17:24.000Z",\n"name": "firstname",\n"description": "Compulsory, Employee`s Firstname.",\n"caption": "First Name",\n"compulsory": true,\n"isUnique": false,\n"isCalculated": false,\n"hasHistory": false,\n"datatype": "String",\n"fieldOptions": []\n}\n}\n')))}c.isMDXComponent=!0}}]);
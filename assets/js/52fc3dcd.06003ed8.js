"use strict";(self.webpackChunkhris_api_docs=self.webpackChunkhris_api_docs||[]).push([[412],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9653:function(e,t,a){a.r(t),a.d(t,{default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"basics",title:"Introduction",sidebar_label:"Introduction"},l={unversionedId:"developers/basics",id:"developers/basics",isDocsHomePage:!1,title:"Web API",description:"The Web API is a component which makes it possible for external systems",source:"@site/docs/developers/basics.md",sourceDirName:"developers",slug:"/developers/basics",permalink:"/hris-api-docs/docs/developers/basics",editUrl:"https://github.com/udsm-dhis2-lab/hris-api-docs/blob/main/docs/developers/basics.md",version:"current",sidebar_label:"Introduction",frontMatter:{id:"basics",title:"Introduction",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Messaging",permalink:"/hris-api-docs/docs/users/messaging/message"},next:{title:"Introduction to HRHIS APIs",permalink:"/hris-api-docs/docs/developers/api-introduction"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Authentication",id:"authentication",children:[{value:"Basic Authentication",id:"basic-authentication",children:[]},{value:"OAuth2",id:"oauth2",children:[]}]},{value:"Error and info messages",id:"error-and-info-messages",children:[]},{value:"Date and period format",id:"date-and-period-format",children:[{value:"Relative Periods",id:"relative-periods",children:[]}]},{value:"Identifier schemes",id:"identifier-schemes",children:[]},{value:"Browsing the Web API",id:"browsing-the-web-api",children:[]},{value:"Metadata object filter",id:"metadata-object-filter",children:[]},{value:"Metadata field filter",id:"metadata-field-filter",children:[]},{value:"Metadata create, read, update, delete, validate",id:"metadata-create-read-update-delete-validate",children:[{value:"Create / update parameters",id:"create--update-parameters",children:[]},{value:"Creating and updating objects",id:"creating-and-updating-objects",children:[]},{value:"Deleting objects",id:"deleting-objects",children:[]}]},{value:"Forms",id:"forms",children:[]}],d={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Web API is a component which makes it possible for external systems\nto access and manipulate data stored in an instance of HRHIS4. More\nprecisely, it provides a programmatic interface to a wide range of\nexposed data and service methods for applications such as third-party\nsoftware clients, web portals and internal HRHIS4 modules."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The Web API adheres to many of the principles behind the REST\narchitectural style. To mention some few and important ones:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The fundamental building blocks are referred to as ",(0,i.kt)("em",{parentName:"p"},"resources"),". A\nresource can be anything exposed to the Web, from a document to a\nbusiness process - anything a client might want to interact with.\nThe information aspects of a resource can be retrieved or exchanged\nthrough resource ",(0,i.kt)("em",{parentName:"p"},"representations"),". A representation is a view of a\nresource's state at any given time. For instance, the ",(0,i.kt)("em",{parentName:"p"},"reportTable"),"\nresource in HRHIS4 represents a tabular report of aggregated data for\na certain set of parameters. This resource can be retrieved in a\nvariety of representation formats including HTML, PDF, and MS Excel.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All resources can be uniquely identified by a ",(0,i.kt)("em",{parentName:"p"},"URI")," (also referred\nto as ",(0,i.kt)("em",{parentName:"p"},"URL"),"). All resources have a default representation. You can\nindicate that you are interested in a specific representation by\nsupplying an ",(0,i.kt)("em",{parentName:"p"},"Accept")," HTTP header, a file extension or a ",(0,i.kt)("em",{parentName:"p"},"format"),"\nquery parameter. So in order to retrieve the PDF representation of a\nreport table you can supply an ",(0,i.kt)("em",{parentName:"p"},"Accept: application/pdf")," header or\nappend ",(0,i.kt)("em",{parentName:"p"},".pdf")," or ",(0,i.kt)("em",{parentName:"p"},"?format=pdf")," to your request URL.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Interactions with the API requires the correct use of HTTP ",(0,i.kt)("em",{parentName:"p"},"methods")," or\n",(0,i.kt)("em",{parentName:"p"},"verbs"),". This implies that for a resource you must issue a ",(0,i.kt)("em",{parentName:"p"},"GET"),"\nrequest when you want to retrieve it, ",(0,i.kt)("em",{parentName:"p"},"POST")," request when you want\nto create one, ",(0,i.kt)("em",{parentName:"p"},"PUT")," when you want to update it and ",(0,i.kt)("em",{parentName:"p"},"DELETE")," when\nyou want to remove it. So if you want to retrieve the default\nrepresentation of a report table you can send a GET request to e.g.\n",(0,i.kt)("em",{parentName:"p"},"/reportTable/iu8j/hYgF6t"),", where the last part is the report table\nidentifier.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Resource representations are ",(0,i.kt)("em",{parentName:"p"},"linkable"),", meaning that\nrepresentations advertise other resources which are relevant to the\ncurrent one by embedding links into itself (please be aware that you\nneed to request ",(0,i.kt)("em",{parentName:"p"},"href")," in your field filter to have this working.\nThis feature greatly improves the usability and robustness of the\nAPI as we will see later. For instance, you can easily navigate to\nthe indicators which are associated with a report table from the\n",(0,i.kt)("em",{parentName:"p"},"reportTable")," resource through the embedded links using your\npreferred representation format."))),(0,i.kt)("p",null,"While all of this might sound complicated, the Web API is actually very\nsimple to use. We will proceed with a few practical examples in a\nminute."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The HRHIS4 Web API supports two protocols for authentication, Basic\nAuthentication and OAuth 2. You can verify and get information about the\ncurrently authenticated user by making a GET request to the following\nURL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/me\n")),(0,i.kt)("h3",{id:"basic-authentication"},"Basic Authentication"),(0,i.kt)("p",null,"The HRHIS4 Web API supports ",(0,i.kt)("em",{parentName:"p"},"Basic authentication"),". Basic authentication\nis a technique for clients to send login credentials over HTTP to a web\nserver. Technically speaking, the username is appended with a colon and\nthe password, Base64-encoded, prefixed Basic and supplied as the value\nof the ",(0,i.kt)("em",{parentName:"p"},"Authorization")," HTTP header. More formally that is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Authorization: Basic base64encode(username:password)\n")),(0,i.kt)("p",null,"Most network-aware development environments provide support for Basic\nauthentication, such as ",(0,i.kt)("em",{parentName:"p"},"Apache HttpClient")," and ",(0,i.kt)("em",{parentName:"p"},"Spring RestTemplate"),".\nAn important note is that this authentication scheme provides no security\nsince the username and password are sent in plain text and can be easily\nobserved by an attacker. Using Basic is recommended only if the server is\nusing SSL/TLS (HTTPS) to encrypt communication with clients. Consider this\na hard requirement in order to provide secure interactions with the Web\nAPI."),(0,i.kt)("h3",{id:"oauth2"},"OAuth2"),(0,i.kt)("p",null,"HRHIS4 supports the ",(0,i.kt)("em",{parentName:"p"},"OAuth2")," authentication protocol. OAuth2 is an open\nstandard for authorization which allows third-party clients to\nconnect on behalf of a HRHIS4 user and get a reusable ",(0,i.kt)("em",{parentName:"p"},"bearer token")," for\nsubsequent requests to the Web API. HRHIS4 does not support fine-grained\nOAuth2 roles but rather provides applications access based on user roles\nof the HRHIS4 user."),(0,i.kt)("h4",{id:"adding-a-client-using-the-web-api"},"Adding a client using the Web API"),(0,i.kt)("p",null,"An OAuth2 client can be added through the Web API. As an example, we can\nsend a payload like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "OAuth2 Demo Client",\n  "cid": "demo",\n  "secret": "1e6db50c-0fee-11e5-98d0-3c15c2c6caf6",\n  "grantTypes": [\n    "password",\n    "refresh_token",\n    "authorization_code"\n  ],\n  "redirectUris": [\n    "http://www.example.org"\n  ]\n}\n')),(0,i.kt)("p",null,"The payload can be sent with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'SERVER="https://dev.hrhis.dhis2udsm.org"\ncurl -X POST -H "Content-Type: application/json" -d @client.json\n  -u admin:district "$SERVER/api/oAuth2Clients"\n')),(0,i.kt)("p",null,"We will use this client as the basis for our next grant type examples."),(0,i.kt)("h4",{id:"grant-type-password"},"Grant type password"),(0,i.kt)("p",null,"The simplest of all grant types is the ",(0,i.kt)("em",{parentName:"p"},"password")," grant type. This\ngrant type is similar to basic authentication in the sense that it\nrequires the client to collect the user's username and password. As an\nexample we can use our demo server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'SERVER="https://dev.hrhis.dhis2udsm.org"\nSECRET="1e6db50c-0fee-11e5-98d0-3c15c2c6caf6"\n\ncurl -X POST -H "Accept: application/json" -u demo:$SECRET "$SERVER/uaa/oauth/token"\n  -d grant_type=password -d username=admin -d password=district\n')),(0,i.kt)("p",null,"This will give you a response similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expires_in": 43175,\n  "scope": "ALL",\n  "access_token": "07fc551c-806c-41a4-9a8c-10658bd15435",\n  "refresh_token": "a4e4de45-4743-481d-9345-2cfe34732fcc",\n  "token_type": "bearer"\n}\n')),(0,i.kt)("p",null,"For now, we will concentrate on the ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),", which is what we\nwill use as our authentication (bearer) token. As an example, we will get\nall data elements using our token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'SERVER="https://dev.hrhis.dhis2udsm.org"\ncurl -H "Authorization: Bearer 07fc551c-806c-41a4-9a8c-10658bd15435" "$SERVER/api/fields"\n')),(0,i.kt)("h4",{id:"grant-type-refresh_token"},"Grant type refresh","_","token"),(0,i.kt)("p",null,"In general the access tokens have limited validity. You can have a look\nat the ",(0,i.kt)("inlineCode",{parentName:"p"},"expires_in")," property of the response in the previous example\nto understand when a token expires. To get a fresh ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," you\ncan make another round trip to the server and use ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),"\nwhich allows you to get an updated token without needing to ask for the\nuser credentials one more time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'SERVER="https://dev.hrhis.dhis2udsm.org"\nSECRET="1e6db50c-0fee-11e5-98d0-3c15c2c6caf6"\nREFRESH_TOKEN="a4e4de45-4743-481d-9345-2cfe34732fcc"\n\ncurl -X POST -H "Accept: application/json" -u demo:$SECRET "$SERVER/uaa/oauth/token"\n  -d "grant_type=refresh_token" -d "refresh_token=$REFRESH_TOKEN"\n')),(0,i.kt)("p",null,"The response will be exactly the same as when you get a token to start with."),(0,i.kt)("h4",{id:"grant-type-authorization_code"},"Grant type authorization_code"),(0,i.kt)("p",null,"Authorized code grant type is the recommended approach if you don't want\nto store the user credentials externally. It allows HRHIS4 to collect the\nusername/password directly from the user instead of the client\ncollecting them and then authenticating on behalf of the user. Please be\naware that this approach uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"redirectUris")," part of the client\npayload."),(0,i.kt)("p",null,"Step 1: Visit the following URL using a web browser. If you have more than one\nredirect URIs, you might want to add ",(0,i.kt)("inlineCode",{parentName:"p"},"&redirect_uri=http://www.example.org"),"\nto the URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'SERVER="https://dev.hrhis.dhis2udsm.org"\n$SERVER/uaa/oauth/authorize?client_id=demo&response_type=code\n')),(0,i.kt)("p",null,"Step 2: After the user has successfully logged in and accepted your\nclient access, it will redirect back to your redirect uri like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://www.example.org/?code=XYZ\n")),(0,i.kt)("p",null,"Step 3: This step is similar to what we did in the password grant type,\nusing the given code, we will now ask for an access token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'SERVER="https://dev.hrhis.dhis2udsm.org"\nSECRET="1e6db50c-0fee-11e5-98d0-3c15c2c6caf6"\n\ncurl -X POST -u demo:$SECRET -H "Accept: application/json" $SERVER/uaa/oauth/token\n-d "grant_type=authorization_code" -d "code=XYZ"\n')),(0,i.kt)("h2",{id:"error-and-info-messages"},"Error and info messages"),(0,i.kt)("p",null,"The Web API uses a consistent format for all error/warning and\ninformational messages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "httpStatus": "Forbidden",\n  "message": "You don\'t have the proper permissions to read objects of this type.",\n  "httpStatusCode": 403,\n  "status": "ERROR"\n}\n')),(0,i.kt)("p",null,"Here we can see from the message that the user tried to access a\nresource I did not have access to. It uses the http status code 403, the\nhttp status message ",(0,i.kt)("em",{parentName:"p"},"forbidden")," and a descriptive message."),(0,i.kt)("h2",{id:"date-and-period-format"},"Date and period format"),(0,i.kt)("p",null,"Throughout the Web API, we refer to dates and periods. The date format\nis:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yyyy-MM-dd\n")),(0,i.kt)("p",null,"For instance, if you want to express March 20, 2014, you must use\n",(0,i.kt)("em",{parentName:"p"},"2014-03-20"),"."),(0,i.kt)("p",null,"The period format is described in the following table (also available on\nthe API endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/periodTypes"),")"),(0,i.kt)("h3",{id:"relative-periods"},"Relative Periods"),(0,i.kt)("p",null,"In some parts of the API, like for the analytics resource, you can\nutilize relative periods in addition to fixed periods (defined above).\nThe relative periods are relative to the current date and allow e.g.\nfor creating dynamic reports. The available relative period values are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"THIS_WEEK, LAST_WEEK, LAST_4_WEEKS, LAST_12_WEEKS, LAST_52_WEEKS,\nTHIS_MONTH, LAST_MONTH, THIS_BIMONTH, LAST_BIMONTH, THIS_QUARTER, LAST_QUARTER,\nTHIS_SIX_MONTH, LAST_SIX_MONTH, MONTHS_THIS_YEAR, QUARTERS_THIS_YEAR,\nTHIS_YEAR, MONTHS_LAST_YEAR, QUARTERS_LAST_YEAR, LAST_YEAR, LAST_5_YEARS, LAST_12_MONTHS,\nLAST_3_MONTHS, LAST_6_BIMONTHS, LAST_4_QUARTERS, LAST_2_SIXMONTHS, THIS_FINANCIAL_YEAR,\nLAST_FINANCIAL_YEAR, LAST_5_FINANCIAL_YEARS\n")),(0,i.kt)("h2",{id:"identifier-schemes"},"Identifier schemes"),(0,i.kt)("p",null,"This section provides an explanation of the identifier scheme concept.\nIdentifier schemes are used to map metadata objects to other metadata\nduring import, and to render metadata as part of exports. Please note\nthat not all schemes work for all API calls, and not all\nschemes can be used for both input and output. This is outlined in the\nsections explaining the various Web APIs."),(0,i.kt)("p",null,"The full set of identifier scheme object types available are listed\nbelow, using the name of the property to use in queries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"idScheme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"dataElementIdScheme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"categoryOptionComboIdScheme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"orgUnitIdScheme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"programIdScheme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"programStageIdScheme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"trackedEntityIdScheme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"trackedEntityAttributeIdScheme"))),(0,i.kt)("p",null,"The general idScheme applies to all types of objects. It can be\noverridden by specific object types."),(0,i.kt)("p",null,"The default scheme for all parameters is UID (stable HRHIS4\nidentifiers). The supported identifier schemes are described in the\ntable below."),(0,i.kt)("p",null,"Note that identifier schemes is not an independent feature but needs to\nbe used in combination with resources such as data value import and metadata import."),(0,i.kt)("p",null,"As an example, to specify CODE as the general id scheme and override\nwith UID for organisation unit id scheme you can use these query\nparameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"?idScheme=CODE&orgUnitIdScheme=UID\n")),(0,i.kt)("p",null,"As another example, to specify an attribute for the organisation unit id\nscheme, code for the data element id scheme and use the default UID id\nscheme for all other objects you can use these parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"?orgUnitIdScheme=ATTRIBUTE:j38fk2dKFsG&dataElementIdScheme=CODE\n")),(0,i.kt)("h2",{id:"browsing-the-web-api"},"Browsing the Web API"),(0,i.kt)("p",null,"The entry point for browsing the Web API is ",(0,i.kt)("inlineCode",{parentName:"p"},"/api"),". This resource\nprovides links to all available resources. Four resource representation\nformats are consistently available for all resources: HTML, XML, JSON,\nand JSONP. Some resources will have other formats available, like MS\nExcel, PDF, CSV, and PNG. To explore the API from a web browser, navigate\nto the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api")," entry point and follow the links to your desired\nresource, for instance ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/dataElements"),". For all resources which\nreturn a list of elements certain query parameters can be used to modify\nthe response:"),(0,i.kt)("p",null,"You can get specific pages and page sizes of objects like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/fields.json?page=2&pageSize=20\n")),(0,i.kt)("p",null,"You can completely disable paging like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/fieldGroups.json?paging=false\n")),(0,i.kt)("h2",{id:"metadata-object-filter"},"Metadata object filter"),(0,i.kt)("p",null,"To filter the metadata there are several filter operations that can be\napplied to the returned list of metadata. The format of the filter\nitself is straight-forward and follows the pattern\n",(0,i.kt)("em",{parentName:"p"},"property:operator:value"),", where ",(0,i.kt)("em",{parentName:"p"},"property")," is the property on the\nmetadata you want to filter on, ",(0,i.kt)("em",{parentName:"p"},"operator")," is the comparison operator\nyou want to perform and ",(0,i.kt)("em",{parentName:"p"},"value")," is the value to check against (not all\noperators require value). Please see the ",(0,i.kt)("em",{parentName:"p"},"schema")," section to discover\nwhich properties are available. Recursive filtering, ie. filtering on\nassociated objects or collection of objects, is supported as well."),(0,i.kt)("p",null,"Operators will be applied as logical ",(0,i.kt)("em",{parentName:"p"},"and")," query, if you need a ",(0,i.kt)("em",{parentName:"p"},"or"),"\nquery, you can have a look at our ",(0,i.kt)("em",{parentName:"p"},"in")," filter (also have a look at the\nsection below). The filtering mechanism allows for recursion. See below\nfor some examples."),(0,i.kt)("p",null,"Get data elements with id property ID1 or ID2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/fields?filter=id:eq:ID1&filter=id:eq:ID2\n")),(0,i.kt)("p",null,"Get all data elements which have the dataSet with id ID1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/fields?filter=form.id:eq:ID1\n")),(0,i.kt)("p",null,'Get all data elements with aggregation operator "sum" and value type\n"int":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/fields.json?filter=name:eq:first_appointment&filter=datatype:eq:Integer\n")),(0,i.kt)("p",null,'You can do filtering within collections, e.g. to get data elements which\nare members of the "ANC" data element group you can use the following\nquery using the id property of the associated data element groups:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/dataElements.json?filter=dataElementGroups.id:eq:qfxEYY9xAl6\n")),(0,i.kt)("p",null,"Since all operators are ",(0,i.kt)("em",{parentName:"p"},"and")," by default, you can't find a data\nelement matching more than one id, for that purpose you can use the ",(0,i.kt)("em",{parentName:"p"},"in"),"\noperator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/dataElements.json?filter=id:in:[fbfJHSPpUQD,cYeuwXTCPkU]\n")),(0,i.kt)("h2",{id:"metadata-field-filter"},"Metadata field filter"),(0,i.kt)("p",null,"In many situations, the default views of the metadata can be too\nverbose. A client might only need a few fields from each object and want\nto remove unnecessary fields from the response. To discover which fields\nare available for each object please see the ",(0,i.kt)("em",{parentName:"p"},"schema")," section."),(0,i.kt)("p",null,'The format for include/exclude allows for infinite recursion. To filter\nat the "root" level you can just use the name of the field,\ni.e. ',(0,i.kt)("inlineCode",{parentName:"p"},"?fields=id,name")," which would only display the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"name")," fields for every object. For objects that are either collections or\ncomplex objects with properties on their own, you can use the format\n",(0,i.kt)("inlineCode",{parentName:"p"},"?fields=id,name,forms[id,name]")," which would return ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," of\nthe root, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," of every data set on that object.\nNegation can be done with the exclamation operator, and we have a set of\npresets of field select. Both XML and JSON are supported."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": Get ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," on the indicators resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/indicators?fields=id,name\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": Get ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," from dataElements, and ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\nfrom the dataSets on dataElements:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/fields?fields=id,name,forms[id,name]\n")),(0,i.kt)("p",null,"To exclude a field from the output you can use the exclamation ",(0,i.kt)("inlineCode",{parentName:"p"},"!"),"\noperator. This is allowed anywhere in the query and will simply not\ninclude that property as it might have been inserted in some of the\npresets."),(0,i.kt)("p",null,"A few presets (selected fields groups) are available and can be applied\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},":")," operator."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": Include all fields from dataSets except organisationUnits:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/forms?fields=:all,!organisationUnits\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": Include only id, name and the collection of organisation units from a data set, but exclude the id from organisation units:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/forms/BfMAe6Itzgt?fields=id,name,organisationUnits[:all,!id]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": Include nameable properties from all indicators:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/indicators.json?fields=:nameable\n")),(0,i.kt)("h2",{id:"metadata-create-read-update-delete-validate"},"Metadata create, read, update, delete, validate"),(0,i.kt)("p",null,"All metadata entities in HRHIS4 have their own API endpoint which supports\n",(0,i.kt)("em",{parentName:"p"},"CRUD")," operations (create, read, update and delete). The endpoint URLs\nfollows this format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/<entityName>\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"entityName")," uses the camel-case notation. As an example, the endpoint\nfor ",(0,i.kt)("em",{parentName:"p"},"fields")," is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/dataEfieldslements\n")),(0,i.kt)("h3",{id:"create--update-parameters"},"Create / update parameters"),(0,i.kt)("p",null,"The following request query parameters are available across all metadata endpoints."),(0,i.kt)("h3",{id:"creating-and-updating-objects"},"Creating and updating objects"),(0,i.kt)("p",null,"For creating new objects you will need to know the endpoint, the type\nformat, and make sure that you have the required authorities. As an\nexample, we will create and update a ",(0,i.kt)("em",{parentName:"p"},"field"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -d @field.json "http://server/api/fields" -X POST\n  -H "Content-Type: application/json" -u user:password\n')),(0,i.kt)("p",null,"A specific example of posting the constant to the demo\nserver:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -d @field.json "https://dev.hrhis.dhis2udsm.org/api/fields" -X POST\n  -H "Content-Type: application/json" -u admin:district\n')),(0,i.kt)("p",null,"If everything went well, you should see an output similar to the object of the field that was created."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id":"5289e934af5c4",\n  "created":"2013-11-18T10:17:24.000Z",\n  "lastUpdated":"2013-11-18T10:17:24.000Z",\n  "name":"hosp_Superlative_Post",\n  "description":"",\n  "caption":"Hospital Superlative Post",\n  "compulsory":true,\n  "isUnique":false,\n  "isCalculated":false,\n  "hasHistory":false,\n  "datatype":"String",\n  "fieldOptions":[]\n}\n')),(0,i.kt)("p",null,"The process will be exactly the same for updating, you make your changes\nto the JSON payload, find out the ",(0,i.kt)("em",{parentName:"p"},"ID")," of the field, and then\nsend a PUT request to the endpoint including ID:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT -d @pi.json -H "Content-Type: application/json"\n  -u user:password "http://server/api/fields/ID"\n')),(0,i.kt)("h3",{id:"deleting-objects"},"Deleting objects"),(0,i.kt)("p",null,"Deleting objects is very straight forward, you will need to know the\n",(0,i.kt)("em",{parentName:"p"},"ID")," and the endpoint of the type you want to delete, let's continue our\nexample from the last section and use a ",(0,i.kt)("em",{parentName:"p"},"field"),". Let's assume that\nthe id is ",(0,i.kt)("em",{parentName:"p"},"abc123"),", then all you need to do is the send the DELETE\nrequest to the endpoint + id:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE -u user:password "http://server/api/fields/ID"\n')),(0,i.kt)("p",null,"A successful delete should return HTTP status 204 (no content)."),(0,i.kt)("h2",{id:"forms"},"Forms"),(0,i.kt)("p",null,"To retrieve information about a form (which corresponds to a data set\nand its sections) you can interact with the ",(0,i.kt)("inlineCode",{parentName:"p"},"form")," resource. The form\nresponse is accessible as XML and JSON and will provide information\nabout each section (group) in the form as well as each field in the\nsections, including labels and identifiers. By supplying period and\norganisation unit identifiers the form response will be populated with\ndata values."),(0,i.kt)("p",null,"To retrieve the form for a data set you can do a GET request like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/forms/<form-id>\n")),(0,i.kt)("p",null,"When it comes to custom data entry forms, this resource also allows for\ncreating such forms directly for a data set. This can be done through a\nPOST or PUT request with content type text/html where the payload is the\ncustom form markup such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -d @form.html "localhost/api/forms/BfMAe6Itzgt"\n  -H "Content-Type:text/html" -u admin:district -X PUT\n')))}c.isMDXComponent=!0}}]);
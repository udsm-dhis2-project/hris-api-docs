"use strict";(self.webpackChunkhris_api_docs=self.webpackChunkhris_api_docs||[]).push([[962],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},i={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,k=c["".concat(o,".").concat(m)]||c[m]||i[m]||s;return t?n.createElement(k,l(l({ref:a},d),{},{components:t})):n.createElement(k,l({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=c;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<s;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9346:function(e,a,t){t.r(a),t.d(a,{default:function(){return i},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u}});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),l=["components"],p={id:"datastore",title:"Datastore",sidebar_label:"Datastore"},o={unversionedId:"developers/data/datastore",id:"developers/data/datastore",isDocsHomePage:!1,title:"Datastore",description:"Data store",source:"@site/docs/developers/data/datastore.md",sourceDirName:"developers/data",slug:"/developers/data/datastore",permalink:"/hris-api-docs/docs/developers/data/datastore",editUrl:"https://github.com/udsm-dhis2-lab/hris-api-docs/blob/main/docs/developers/data/datastore.md",version:"current",sidebar_label:"Datastore",frontMatter:{id:"datastore",title:"Datastore",sidebar_label:"Datastore"},sidebar:"docs",previous:{title:"Reports",permalink:"/hris-api-docs/docs/developers/data/reports"},next:{title:"Data quality Module",permalink:"/hris-api-docs/docs/developers/data/data-quality"}},u=[{value:"Data store",id:"data-store",children:[{value:"Data store structure",id:"data-store-structure",children:[]},{value:"Get keys and namespaces",id:"get-keys-and-namespaces",children:[]},{value:"Create values",id:"create-values",children:[]},{value:"Update values",id:"update-values",children:[]},{value:"Delete keys",id:"delete-keys",children:[]},{value:"Sharing datastore keys",id:"sharing-datastore-keys",children:[]}]},{value:"User data store",id:"user-data-store",children:[{value:"User data store structure",id:"user-data-store-structure",children:[]},{value:"Get namespaces",id:"get-namespaces",children:[]},{value:"Get keys",id:"get-keys",children:[]},{value:"Get values",id:"get-values",children:[]},{value:"Create value",id:"create-value",children:[]},{value:"Update values",id:"update-values-1",children:[]},{value:"Delete key",id:"delete-key",children:[]},{value:"Delete namespace",id:"delete-namespace",children:[]}]}],d={toc:u};function i(e){var a=e.components,t=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"data-store"},"Data store"),(0,s.kt)("p",null,"Using the ",(0,s.kt)("em",{parentName:"p"},"dataStore")," resource, developers can store arbitrary data for\ntheir apps. Access to a datastore's key is based on its sharing settings.\nBy default all keys created are publicly accessible (read and write).\nAdditionally,  access to a datastore's namespace is limited to the user's\naccess to the corresponding app, if the app has reserved the namespace.\nFor example a user with access to the \"sampleApp\" application will also\nbe able to use the sampleApp namespace in the datastore. If a namespace\nis not reserved, no specific access is required to use it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/api/dataStore\n")),(0,s.kt)("h3",{id:"data-store-structure"},"Data store structure"),(0,s.kt)("p",null,"Data store entries consist of a namespace, key and value. The\ncombination of namespace and key is unique. The value data type is JSON."),(0,s.kt)("h3",{id:"get-keys-and-namespaces"},"Get keys and namespaces"),(0,s.kt)("p",null,"For a list of all existing namespaces:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET /api/dataStore\n")),(0,s.kt)("p",null,"Example curl request for listing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl "dev.hrhis.dhis2udsm.org/demo/api/dataStore" -u admin:district\n')),(0,s.kt)("p",null,"Example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "foo",\n  "bar"\n]\n')),(0,s.kt)("p",null,"For a list of all keys in a namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET /api/dataStore/<namespace>\n")),(0,s.kt)("p",null,"Example curl request for listing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl "dev.hrhis.dhis2udsm.org/demo/api/dataStore/foo" -u admin:district\n')),(0,s.kt)("p",null,"Example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "key_1",\n  "key_2"\n]\n')),(0,s.kt)("p",null,"To retrieve a value for an existing key from a namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET /api/dataStore/<namespace>/<key>\n")),(0,s.kt)("p",null,"Example curl request for retrieval:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl "dev.hrhis.dhis2udsm.org/demo/api/dataStore/foo/key_1"-u admin:district\n')),(0,s.kt)("p",null,"Example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "foo":"bar"\n}\n')),(0,s.kt)("p",null,"To retrieve meta-data for an existing key from a namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET /api/dataStore/<namespace>/<key>/metaData\n")),(0,s.kt)("p",null,"Example curl request for retrieval:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl "dev.hrhis.dhis2udsm.org/demo/api/dataStore/foo/key_1/metaData" -u admin:district\n')),(0,s.kt)("p",null,"Example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "created": "...",\n  "user": {...},\n  "namespace": "foo",\n  "key": "key_1"\n}\n')),(0,s.kt)("h3",{id:"create-values"},"Create values"),(0,s.kt)("p",null,"To create a new key and value for a namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"POST /api/dataStore/<namespace>/<key>\n")),(0,s.kt)("p",null,"Example curl request for create, assuming a valid JSON payload:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://dev.hrhis.dhis2udsm.org/demo/api/dataStore/foo/key_1" -X POST\n  -H "Content-Type: application/json" -d "{\\"foo\\":\\"bar\\"}" -u admin:district\n')),(0,s.kt)("p",null,"Example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "httpStatus": "OK",\n  "httpStatusCode": 201,\n  "status": "OK",\n  "message": "Key \'key_1\' created."\n}\n')),(0,s.kt)("p",null,"If you require the data you store to be encrypted (for example user\ncredentials or similar) you can append a query to the url like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET /api/dataStore/<namespace>/<key>?encrypt=true\n")),(0,s.kt)("h3",{id:"update-values"},"Update values"),(0,s.kt)("p",null,"To update a key that exists in a namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"PUT /api/dataStore/<namespace>/<key>\n")),(0,s.kt)("p",null,"Example curl request for update, assuming valid JSON payload:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://dev.hrhis.dhis2udsm.org/demo/api/dataStore/foo/key_1" -X PUT -d "[1, 2, 3]"\n  -H "Content-Type: application/json" -u admin:district\n')),(0,s.kt)("p",null,"Example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "httpStatus": "OK",\n  "httpStatusCode": 200,\n  "status": "OK",\n  "message": "Key \'key_1\' updated."\n}\n')),(0,s.kt)("h3",{id:"delete-keys"},"Delete keys"),(0,s.kt)("p",null,"To delete an existing key from a namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"DELETE /api/dataStore/<namespace>/<key>\n")),(0,s.kt)("p",null,"Example curl request for delete:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl "dev.hrhis.dhis2udsm.org/demo/api/dataStore/foo/key_1" -X DELETE -u admin:district\n')),(0,s.kt)("p",null,"Example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "httpStatus": "OK",\n  "httpStatusCode": 200,\n  "status": "OK",\n  "message": "Key \'key_1\' deleted from namespace \'foo\'."\n}\n')),(0,s.kt)("p",null,"To delete all keys in a namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"DELETE /api/dataStore/<namespace>\n")),(0,s.kt)("p",null,"Example curl request for delete:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl "dev.hrhis.dhis2udsm.org/demo/api/dataStore/foo" -X DELETE -u admin:district\n')),(0,s.kt)("p",null,"Example response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "httpStatus": "OK",\n  "httpStatusCode": 200,\n  "status": "OK",\n  "message": "Namespace \'foo\' deleted."\n}\n')),(0,s.kt)("h3",{id:"sharing-datastore-keys"},"Sharing datastore keys"),(0,s.kt)("p",null,"Sharing of datastore keys follows the same principle as for other metadata sharing (see\n",(0,s.kt)("a",{parentName:"p",href:"#webapi_sharing"},"Sharing"),")."),(0,s.kt)("p",null,"To get sharing settings for a specific datastore key:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET /api/sharing?type=dataStore&id=<uid>\n")),(0,s.kt)("p",null,"To modify sharing settings for a specific datastore key:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"POST /api/sharing?type=dataStore&id=<uid> \n")),(0,s.kt)("p",null,"with the following request:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "object": {\n        "publicAccess": "rw------",\n        "externalAccess": false,\n        "user": {},\n        "userAccesses": [],\n        "userGroupAccesses": [\n            {\n                "id": "hj0nnsVsPLU",\n                "access": "rw------"\n            },\n            {\n                "id": "qMjBflJMOfB",\n                "access": "r-------"\n            }\n        ]\n    }\n}\n')),(0,s.kt)("h2",{id:"user-data-store"},"User data store"),(0,s.kt)("p",null,"In addition to the ",(0,s.kt)("em",{parentName:"p"},"dataStore")," which is shared between all users of the\nsystem, a user-based data store is also available. Data stored to the\n",(0,s.kt)("em",{parentName:"p"},"userDataStore")," is associated with individual users, so that each user\ncan have different data on the same namespace and key combination. All\ncalls against the ",(0,s.kt)("em",{parentName:"p"},"userDataStore")," will be associated with the logged in\nuser. This means one can only see, change, remove and add values\nassociated with the currently logged in user."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/api/userDataStore\n")),(0,s.kt)("h3",{id:"user-data-store-structure"},"User data store structure"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"userDataStore")," consists of a user, a namespace, keys and associated\nvalues. The combination of user, namespace and key is unique."),(0,s.kt)("h3",{id:"get-namespaces"},"Get namespaces"),(0,s.kt)("p",null,"Returns an array of all existing namespaces"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET /api/userDataStore\n")),(0,s.kt)("p",null,"Example\nrequest:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -u admin:district "dev.hrhis.dhis2udsm.org/api/userDataStore"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "foo",\n  "bar"\n]\n')),(0,s.kt)("h3",{id:"get-keys"},"Get keys"),(0,s.kt)("p",null,"Returns an array of all existing keys in a given namespace"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET /api/userDataStore/<namespace>\n")),(0,s.kt)("p",null,"Example request:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -u admin:district "dev.hrhis.dhis2udsm.org/api/userDataStore/foo"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "key_1",\n  "key_2"\n]\n')),(0,s.kt)("h3",{id:"get-values"},"Get values"),(0,s.kt)("p",null,"Returns the value for a given namespace and key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET /api/userDataStore/<namespace>/<key>\n")),(0,s.kt)("p",null,"Example request:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -u admin:district "dev.hrhis.dhis2udsm.org/api/userDataStore/foo/bar"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "some": "value"\n}\n')),(0,s.kt)("h3",{id:"create-value"},"Create value"),(0,s.kt)("p",null,"Adds a new value to a given key in a given namespace."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"POST /api/userDataStore/<namespace>/<key>\n")),(0,s.kt)("p",null,"Example request:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/json" -u admin:district -d "[\'some value\']"\n  "dev.hrhis.dhis2udsm.org/api/userDataStore/foo/bar"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "httpStatus": "Created",\n  "httpStatusCode": 201,\n  "status": "OK",\n  "message": "Key \'bar\' in namespace \'foo\' created."\n}\n')),(0,s.kt)("p",null,"If you require the value to be encrypted (For example user credentials\nand such) you can append a query to the url like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET /api/userDataStore/<namespace>/<key>?encrypt=true\n")),(0,s.kt)("h3",{id:"update-values-1"},"Update values"),(0,s.kt)("p",null,"Updates an existing value"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"PUT /api/userDataStore/<namespace>/<key>\n")),(0,s.kt)("p",null,"Example request:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT -H "Content-Type: application/json" -u admin:district -d "[\'new value\']"\n  "dev.hrhis.dhis2udsm.org/api/userDataStore/foo/bar"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "httpStatus":"Created",\n  "httpStatusCode":201,\n  "status":"OK",\n  "message":"Key \'bar\' in namespace \'foo\' updated."\n}\n')),(0,s.kt)("h3",{id:"delete-key"},"Delete key"),(0,s.kt)("p",null,"Delete a key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"DELETE /api/userDataStore/<namespace>/<key>\n")),(0,s.kt)("p",null,"Example request:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE -u admin:district "dev.hrhis.dhis2udsm.org/api/userDataStore/foo/bar"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "httpStatus":"OK",\n  "httpStatusCode":200,\n  "status":"OK",\n  "message":"Key \'bar\' deleted from the namespace \'foo."\n}\n')),(0,s.kt)("h3",{id:"delete-namespace"},"Delete namespace"),(0,s.kt)("p",null,"Delete all keys in the given namespace"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"DELETE /api/userDataStore/<namespace>\n")),(0,s.kt)("p",null,"Example request:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE -u admin:district "dev.hrhis.dhis2udsm.org/api/userDataStore/foo"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "httpStatus":"OK",\n  "httpStatusCode":200,\n  "status":"OK",\n  "message":"All keys from namespace \'foo\' deleted."\n}\n')))}i.isMDXComponent=!0}}]);
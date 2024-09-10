import{R as React,j as jsxRuntimeExports,W as Button,aa as Popper,ab as Grow,a1 as Paper,ac as ClickAwayListener,ad as MenuList,M as MenuItem,r as reactExports,B as Box,ae as Chip,I as IconButton,a8 as useParams,X as useLoaderData,H as useMatches,a0 as useSubmit,O as useNavigation,h as invariant,t as useSearchParams,a9 as useLocalStorage,Z as Outlet,T as Typography,af as Table,ag as TableHead,ah as TableRow,ai as TableCell,aj as TableSortLabel,ak as TableBody,v as dayjs,N as Link,a3 as Tooltip,al as DeleteIcon,G as Grid,am as Autocomplete,a7 as TextField,F as FormControlLabel,n as Switch}from"./vendor-COAUpDWz.js";import{r as requireCreateSvgIcon,i as interopRequireDefaultExports}from"./createSvgIcon-63W_9W2b.js";import{d as default_1$1}from"./ContentCopy-CTB-bCQn.js";const options=[{title:"Download HTML",format:"html"},{title:"Download JSON",format:"json"}];function DownloadButton(e){const[t,n]=React.useState(!1),s=React.useRef(null),i=(l,d)=>{window.open(`${l}?report_format=${d}`,"_blank"),n(!1)},a=()=>{n(l=>!l)},m=l=>{var d;(d=s.current)!=null&&d.contains(l.target)||n(!1)};return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Button,{disabled:e.disabled,variant:e.variant,ref:s,color:"primary","aria-controls":t?"split-button-menu":void 0,"aria-expanded":t?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:a,children:"Download"}),jsxRuntimeExports.jsx(Popper,{open:t,anchorEl:s.current,transition:!0,children:({TransitionProps:l,placement:d})=>jsxRuntimeExports.jsx(Grow,{...l,style:{transformOrigin:d==="bottom"?"center top":"center bottom"},children:jsxRuntimeExports.jsx(Paper,{children:jsxRuntimeExports.jsx(ClickAwayListener,{onClickAway:m,children:jsxRuntimeExports.jsx(MenuList,{id:"split-button-menu",children:options.map(x=>jsxRuntimeExports.jsx(MenuItem,{onClick:()=>i(e.downloadLink,x.format),children:x.title},x.format))})})})})})]})}var CloseRounded={},_interopRequireDefault=interopRequireDefaultExports;Object.defineProperty(CloseRounded,"__esModule",{value:!0});var default_1=CloseRounded.default=void 0,_createSvgIcon=_interopRequireDefault(requireCreateSvgIcon()),_jsxRuntime=jsxRuntimeExports,_default=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"}),"CloseRounded");default_1=CloseRounded.default=_default;const HidedTags=({onClick:e,tags:t,limitTags:n=2})=>{const[s,i]=reactExports.useState(!1);return jsxRuntimeExports.jsxs(Box,{display:"flex",alignContent:"center",flexWrap:"wrap",children:[t.slice(0,n).map(a=>jsxRuntimeExports.jsx(Chip,{onClick:()=>e(a),label:a,style:{margin:3}},a)),s&&t.slice(n).map(a=>jsxRuntimeExports.jsx(Chip,{onClick:()=>e(a),label:a,style:{margin:3}},a)),!s&&t.length>n&&jsxRuntimeExports.jsx(Chip,{variant:"outlined",label:`+${t.length-n}`,style:{margin:3,borderColor:"grey"},onClick:()=>i(!0)},"+N"),t.length>0&&s&&jsxRuntimeExports.jsx(IconButton,{style:{margin:3},onClick:()=>i(!1),children:jsxRuntimeExports.jsx(default_1,{fontSize:"small"})})]})},TextWithCopyIcon=({showText:e,copyText:t})=>jsxRuntimeExports.jsxs(Box,{children:[e,jsxRuntimeExports.jsx(IconButton,{size:"small",style:{marginLeft:10},onClick:()=>navigator.clipboard.writeText(t),children:jsxRuntimeExports.jsx(default_1$1,{fontSize:"small"})})]});function isObject(e){return Object.prototype.toString.call(e)==="[object Object]"}function objectSize(e){return Array.isArray(e)?e.length:isObject(e)?Object.keys(e).length:0}function stringifyForCopying(e,t){if(typeof e=="string")return e;try{return JSON.stringify(e,(n,s)=>{switch(typeof s){case"bigint":return String(s)+"n";case"number":case"boolean":case"object":case"string":return s;default:return String(s)}},t)}catch(n){return`${n.name}: ${n.message}`||"JSON.stringify failed"}}function isCollapsed(e,t,n,s,i,a){if(a&&a.collapsed!==void 0)return!!a.collapsed;if(typeof s=="boolean")return s;if(typeof s=="number"&&t>s)return!0;const m=objectSize(e);if(typeof s=="function"){const l=safeCall(s,[{node:e,depth:t,indexOrName:n,size:m}]);if(typeof l=="boolean")return l}return!!(Array.isArray(e)&&m>i||isObject(e)&&m>i)}function ifDisplay(e,t,n){return typeof e=="boolean"?e:!!(typeof e=="number"&&t>e||e==="collapsed"&&n||e==="expanded"&&!n)}function safeCall(e,t){try{return e(...t)}catch(n){reportError(n)}}function editableAdd(e){if(e===!0||isObject(e)&&e.add===!0)return!0}function editableEdit(e){if(e===!0||isObject(e)&&e.edit===!0)return!0}function editableDelete(e){if(e===!0||isObject(e)&&e.delete===!0)return!0}function isReactComponent(e){return typeof e=="function"}function customAdd(e){return!e||e.add===void 0||!!e.add}function customEdit(e){return!e||e.edit===void 0||!!e.edit}function customDelete(e){return!e||e.delete===void 0||!!e.delete}function customCopy(e){return!e||e.enableClipboard===void 0||!!e.enableClipboard}function resolveEvalFailedNewValue(e,t){return e==="string"?t.trim().replace(/^\"([\s\S]+?)\"$/,"$1"):t}var _path$7;function _extends$7(){return _extends$7=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_extends$7.apply(this,arguments)}var SvgAngleDown=function(t){return reactExports.createElement("svg",_extends$7({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},t),_path$7||(_path$7=reactExports.createElement("path",{fill:"currentColor",d:"M12.473 5.806a.666.666 0 0 0-.946 0L8.473 8.86a.667.667 0 0 1-.946 0L4.473 5.806a.667.667 0 1 0-.946.94l3.06 3.06a2 2 0 0 0 2.826 0l3.06-3.06a.667.667 0 0 0 0-.94Z"})))},_path$6;function _extends$6(){return _extends$6=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_extends$6.apply(this,arguments)}var SvgCopy=function(t){return reactExports.createElement("svg",_extends$6({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),_path$6||(_path$6=reactExports.createElement("path",{fill:"currentColor",d:"M17.542 2.5h-4.75a3.963 3.963 0 0 0-3.959 3.958v4.75a3.963 3.963 0 0 0 3.959 3.959h4.75a3.963 3.963 0 0 0 3.958-3.959v-4.75A3.963 3.963 0 0 0 17.542 2.5Zm2.375 8.708a2.378 2.378 0 0 1-2.375 2.375h-4.75a2.378 2.378 0 0 1-2.375-2.375v-4.75a2.378 2.378 0 0 1 2.375-2.375h4.75a2.378 2.378 0 0 1 2.375 2.375v4.75Zm-4.75 6.334a3.963 3.963 0 0 1-3.959 3.958h-4.75A3.963 3.963 0 0 1 2.5 17.542v-4.75a3.963 3.963 0 0 1 3.958-3.959.791.791 0 1 1 0 1.584 2.378 2.378 0 0 0-2.375 2.375v4.75a2.378 2.378 0 0 0 2.375 2.375h4.75a2.378 2.378 0 0 0 2.375-2.375.792.792 0 1 1 1.584 0Z"})))},_path$5,_path2$4;function _extends$5(){return _extends$5=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_extends$5.apply(this,arguments)}var SvgCopied=function(t){return reactExports.createElement("svg",_extends$5({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),_path$5||(_path$5=reactExports.createElement("path",{fill:"currentColor",d:"M17.25 3H6.75A3.755 3.755 0 0 0 3 6.75v10.5A3.754 3.754 0 0 0 6.75 21h10.5A3.754 3.754 0 0 0 21 17.25V6.75A3.755 3.755 0 0 0 17.25 3Zm2.25 14.25a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5Z"})),_path2$4||(_path2$4=reactExports.createElement("path",{fill:"#14C786",d:"M10.312 14.45 7.83 11.906a.625.625 0 0 0-.896 0 .659.659 0 0 0 0 .918l2.481 2.546a1.264 1.264 0 0 0 .896.381 1.237 1.237 0 0 0 .895-.38l5.858-6.011a.658.658 0 0 0 0-.919.625.625 0 0 0-.896 0l-5.857 6.01Z"})))};function CopyButton({node:e}){const[t,n]=reactExports.useState(!1);return t?jsxRuntimeExports.jsx(SvgCopied,{className:"json-view--copy",style:{display:"inline-block"}}):jsxRuntimeExports.jsx(SvgCopy,{onClick:s=>{const i=stringifyForCopying(e);s.stopPropagation(),navigator.clipboard.writeText(i),n(!0),setTimeout(()=>n(!1),3e3)},className:"json-view--copy"})}function NameValue({indexOrName:e,value:t,depth:n,parent:s,deleteHandle:i,editHandle:a}){return jsxRuntimeExports.jsxs("div",Object.assign({className:"json-view--pair"},{children:[jsxRuntimeExports.jsx("span",Object.assign({className:typeof e=="number"?"json-view--index":"json-view--property"},{children:e})),":"," ",jsxRuntimeExports.jsx(JsonNode,{node:t,depth:n+1,deleteHandle:i,editHandle:a,parent:s,indexOrName:e})]}))}var _path$4,_path2$3;function _extends$4(){return _extends$4=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_extends$4.apply(this,arguments)}var SvgTrash=function(t){return reactExports.createElement("svg",_extends$4({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),_path$4||(_path$4=reactExports.createElement("path",{fill:"currentColor",d:"M18.75 6h-2.325a3.757 3.757 0 0 0-3.675-3h-1.5a3.757 3.757 0 0 0-3.675 3H5.25a.75.75 0 0 0 0 1.5H6v9.75A3.754 3.754 0 0 0 9.75 21h4.5A3.754 3.754 0 0 0 18 17.25V7.5h.75a.75.75 0 1 0 0-1.5Zm-7.5-1.5h1.5A2.255 2.255 0 0 1 14.872 6H9.128a2.255 2.255 0 0 1 2.122-1.5Zm5.25 12.75a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.25 2.25 0 0 1-2.25-2.25V7.5h9v9.75Z"})),_path2$3||(_path2$3=reactExports.createElement("path",{fill:"#DA0000",d:"M10.5 16.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 1 0-1.5 0v4.5a.75.75 0 0 0 .75.75ZM13.5 16.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 1 0-1.5 0v4.5a.75.75 0 0 0 .75.75Z"})))},_path$3,_path2$2;function _extends$3(){return _extends$3=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_extends$3.apply(this,arguments)}var SvgAddSquare=function(t){return reactExports.createElement("svg",_extends$3({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),_path$3||(_path$3=reactExports.createElement("path",{fill:"currentColor",d:"M21 6.75v10.5A3.754 3.754 0 0 1 17.25 21H6.75A3.754 3.754 0 0 1 3 17.25V6.75A3.754 3.754 0 0 1 6.75 3h10.5A3.754 3.754 0 0 1 21 6.75Zm-1.5 0c0-1.24-1.01-2.25-2.25-2.25H6.75C5.51 4.5 4.5 5.51 4.5 6.75v10.5c0 1.24 1.01 2.25 2.25 2.25h10.5c1.24 0 2.25-1.01 2.25-2.25V6.75Z"})),_path2$2||(_path2$2=reactExports.createElement("path",{fill:"#14C786",d:"M15 12.75a.75.75 0 1 0 0-1.5h-2.25V9a.75.75 0 1 0-1.5 0v2.25H9a.75.75 0 1 0 0 1.5h2.25V15a.75.75 0 1 0 1.5 0v-2.25H15Z"})))},_path$2,_path2$1;function _extends$2(){return _extends$2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_extends$2.apply(this,arguments)}var SvgDone=function(t){return reactExports.createElement("svg",_extends$2({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),_path$2||(_path$2=reactExports.createElement("path",{fill:"currentColor",d:"M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm0 16.5a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Z"})),_path2$1||(_path2$1=reactExports.createElement("path",{fill:"#14C786",d:"m10.85 13.96-1.986-2.036a.5.5 0 0 0-.716 0 .527.527 0 0 0 0 .735l1.985 2.036a1.01 1.01 0 0 0 .717.305.99.99 0 0 0 .716-.305l4.686-4.808a.526.526 0 0 0 0-.735.5.5 0 0 0-.716 0l-4.687 4.809Z"})))},_path$1,_path2;function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_extends$1.apply(this,arguments)}var SvgCancel=function(t){return reactExports.createElement("svg",_extends$1({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),_path$1||(_path$1=reactExports.createElement("path",{fill:"#DA0000",d:"M15 9a.75.75 0 0 0-1.06 0L12 10.94 10.06 9A.75.75 0 0 0 9 10.06L10.94 12 9 13.94A.75.75 0 0 0 10.06 15L12 13.06 13.94 15A.75.75 0 0 0 15 13.94L13.06 12 15 10.06A.75.75 0 0 0 15 9Z"})),_path2||(_path2=reactExports.createElement("path",{fill:"currentColor",d:"M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm0 16.5a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Z"})))};function ObjectNode({node:e,depth:t,indexOrName:n,deleteHandle:s,customOptions:i}){const{collapsed:a,enableClipboard:m,collapseObjectsAfterLength:l,editable:d,onDelete:x,src:u,onAdd:g,onEdit:h,onChange:c,forceUpdate:R,displaySize:v}=reactExports.useContext(JsonViewContext),E=isObject(e),[j,b]=reactExports.useState(isCollapsed(e,t,n,a,l,i));reactExports.useEffect(()=>{b(isCollapsed(e,t,n,a,l,i))},[a,l]);const O=reactExports.useCallback((o,p,k)=>{Array.isArray(e)?e[+o]=p:e&&(e[o]=p),h&&h({newValue:p,oldValue:k,depth:t,src:u,indexOrName:o,parentType:E?"object":"array"}),c&&c({type:"edit",depth:t,src:u,indexOrName:o,parentType:E?"object":"array"}),R()},[e,h,c,R]),C=o=>{Array.isArray(e)?e.splice(+o,1):e&&delete e[o],R()},[N,w]=reactExports.useState(!1),r=()=>{w(!1),s&&s(n),x&&x({value:e,depth:t,src:u,indexOrName:n,parentType:E?"object":"array"}),c&&c({type:"delete",depth:t,src:u,indexOrName:n,parentType:E?"object":"array"})},[f,T]=reactExports.useState(!1),y=reactExports.useRef(null),S=()=>{var o;if(E){const p=(o=y.current)===null||o===void 0?void 0:o.value;p&&(e[p]=null,y.current&&(y.current.value=""),T(!1),g&&g({indexOrName:p,depth:t,src:u,parentType:"object"}),c&&c({type:"add",indexOrName:p,depth:t,src:u,parentType:"object"}))}else if(Array.isArray(e)){const p=e;p.push(null),g&&g({indexOrName:p.length-1,depth:t,src:u,parentType:"array"}),c&&c({type:"add",indexOrName:p.length-1,depth:t,src:u,parentType:"array"})}R()},D=o=>{o.key==="Enter"?(o.preventDefault(),S()):o.key==="Escape"&&A()},_=N||f,A=()=>{w(!1),T(!1)},$=jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[!j&&!_&&jsxRuntimeExports.jsxs("span",Object.assign({onClick:()=>b(!0)},{children:[ifDisplay(v,t,j)&&jsxRuntimeExports.jsxs("span",Object.assign({className:"jv-size"},{children:[objectSize(e)," Items"]})),jsxRuntimeExports.jsx(SvgAngleDown,{className:"jv-chevron"})]})),f&&E&&jsxRuntimeExports.jsx("input",{className:"json-view--input",placeholder:"property",ref:y,onKeyDown:D}),_&&jsxRuntimeExports.jsx(SvgDone,{className:"json-view--edit",style:{display:"inline-block"},onClick:f?S:r}),_&&jsxRuntimeExports.jsx(SvgCancel,{className:"json-view--edit",style:{display:"inline-block"},onClick:A}),!j&&!_&&m&&customCopy(i)&&jsxRuntimeExports.jsx(CopyButton,{node:e}),!j&&!_&&editableAdd(d)&&customAdd(i)&&jsxRuntimeExports.jsx(SvgAddSquare,{className:"json-view--edit",onClick:()=>{E?(T(!0),setTimeout(()=>{var o;return(o=y.current)===null||o===void 0?void 0:o.focus()})):S()}}),!j&&!_&&editableDelete(d)&&customDelete(i)&&s&&jsxRuntimeExports.jsx(SvgTrash,{className:"json-view--edit",onClick:()=>w(!0)})]});return Array.isArray(e)?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("span",{children:"["}),$,j?jsxRuntimeExports.jsx("button",Object.assign({onClick:()=>b(!1),className:"jv-button"},{children:"..."})):jsxRuntimeExports.jsx("div",Object.assign({className:"jv-indent"},{children:e.map((o,p)=>jsxRuntimeExports.jsx(NameValue,{indexOrName:p,value:o,depth:t,parent:e,deleteHandle:C,editHandle:O},String(n)+String(p)))})),jsxRuntimeExports.jsx("span",{children:"]"}),j&&ifDisplay(v,t,j)&&jsxRuntimeExports.jsxs("span",Object.assign({onClick:()=>b(!1),className:"jv-size"},{children:[objectSize(e)," Items"]}))]}):E?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("span",{children:"{"}),$,j?jsxRuntimeExports.jsx("button",Object.assign({onClick:()=>b(!1),className:"jv-button"},{children:"..."})):jsxRuntimeExports.jsx("div",Object.assign({className:"jv-indent"},{children:Object.entries(e).map(([o,p])=>jsxRuntimeExports.jsx(NameValue,{indexOrName:o,value:p,depth:t,parent:e,deleteHandle:C,editHandle:O},String(n)+String(o)))})),jsxRuntimeExports.jsx("span",{children:"}"}),j&&ifDisplay(v,t,j)&&jsxRuntimeExports.jsxs("span",Object.assign({onClick:()=>b(!1),className:"jv-size"},{children:[objectSize(e)," Items"]}))]}):null}const LongString=React.forwardRef(({str:e,className:t,ctrlClick:n},s)=>{let{collapseStringMode:i,collapseStringsAfterLength:a}=reactExports.useContext(JsonViewContext);const[m,l]=reactExports.useState(!0);a=a>0?a:0;const d=e.replace(/\s+/g," "),x=u=>{(u.ctrlKey||u.metaKey)&&n?n(u):l(!m)};if(e.length<=a)return jsxRuntimeExports.jsxs("span",Object.assign({className:t,onClick:n},{children:['"',e,'"']}));if(i==="address")return e.length<=10?jsxRuntimeExports.jsxs("span",Object.assign({className:t,onClick:n},{children:['"',e,'"']})):jsxRuntimeExports.jsxs("span",Object.assign({onClick:x,className:t+" cursor-pointer"},{children:['"',m?d.slice(0,6)+"..."+d.slice(-4):e,'"']}));if(i==="directly")return jsxRuntimeExports.jsxs("span",Object.assign({onClick:x,className:t+" cursor-pointer"},{children:['"',m?d.slice(0,a)+"...":e,'"']}));if(i==="word"){let u=a,g=a+1,h=d,c=1;for(;;){if(/\W/.test(e[u])){h=e.slice(0,u);break}if(/\W/.test(e[g])){h=e.slice(0,g);break}if(c===6){h=e.slice(0,a);break}c++,u--,g++}return jsxRuntimeExports.jsxs("span",Object.assign({onClick:x,className:t+" cursor-pointer"},{children:['"',m?h+"...":e,'"']}))}return jsxRuntimeExports.jsxs("span",Object.assign({className:t},{children:['"',e,'"']}))});var _path;function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_extends.apply(this,arguments)}var SvgEdit=function(t){return reactExports.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),_path||(_path=reactExports.createElement("path",{fill:"currentColor",d:"M17.25 3H6.75A3.754 3.754 0 0 0 3 6.75v10.5A3.754 3.754 0 0 0 6.75 21h10.5A3.754 3.754 0 0 0 21 17.25V6.75A3.754 3.754 0 0 0 17.25 3Zm2.25 14.25c0 1.24-1.01 2.25-2.25 2.25H6.75c-1.24 0-2.25-1.01-2.25-2.25V6.75c0-1.24 1.01-2.25 2.25-2.25h10.5c1.24 0 2.25 1.01 2.25 2.25v10.5Zm-6.09-9.466-5.031 5.03a2.981 2.981 0 0 0-.879 2.121v1.19c0 .415.336.75.75.75h1.19c.8 0 1.554-.312 2.12-.879l5.03-5.03a2.252 2.252 0 0 0 0-3.182c-.85-.85-2.331-.85-3.18 0Zm-2.91 7.151c-.28.28-.666.44-1.06.44H9v-.44c0-.4.156-.777.44-1.06l3.187-3.188 1.06 1.061-3.187 3.188Zm5.03-5.03-.782.783-1.06-1.061.782-.782a.766.766 0 0 1 1.06 0 .75.75 0 0 1 0 1.06Z"})))};function JsonNode({node,depth,deleteHandle:_deleteHandle,indexOrName,parent,editHandle}){const{collapseStringsAfterLength,enableClipboard,editable,src,onDelete,onChange,customizeNode}=reactExports.useContext(JsonViewContext);let customReturn;if(typeof customizeNode=="function"&&(customReturn=safeCall(customizeNode,[{node,depth,indexOrName}])),customReturn){if(reactExports.isValidElement(customReturn))return customReturn;if(isReactComponent(customReturn)){const e=customReturn;return jsxRuntimeExports.jsx(e,{node,depth,indexOrName})}}if(Array.isArray(node)||isObject(node))return jsxRuntimeExports.jsx(ObjectNode,{node,depth,indexOrName,deleteHandle:_deleteHandle,customOptions:typeof customReturn=="object"?customReturn:void 0});{const type=typeof node,[editing,setEditing]=reactExports.useState(!1),[deleting,setDeleting]=reactExports.useState(!1),valueRef=reactExports.useRef(null),edit=()=>{setEditing(!0),setTimeout(()=>{var e,t;(e=window.getSelection())===null||e===void 0||e.selectAllChildren(valueRef.current),(t=valueRef.current)===null||t===void 0||t.focus()})},done=reactExports.useCallback(()=>{const newValue=valueRef.current.innerText;try{const evalValue=eval(newValue);editHandle&&editHandle(indexOrName,evalValue,node)}catch(e){const t=resolveEvalFailedNewValue(type,newValue);editHandle&&editHandle(indexOrName,t,node)}setEditing(!1)},[editHandle]),cancel=()=>{setEditing(!1),setDeleting(!1)},deleteHandle=()=>{setDeleting(!1),_deleteHandle&&_deleteHandle(indexOrName),onDelete&&onDelete({value:node,depth,src,indexOrName,parentType:Array.isArray(parent)?"array":"object"}),onChange&&onChange({depth,src,indexOrName,parentType:Array.isArray(parent)?"array":"object",type:"delete"})},handleKeyDown=reactExports.useCallback(e=>{e.key==="Enter"?(e.preventDefault(),done()):e.key==="Escape"&&cancel()},[done]),isEditing=editing||deleting,ctrlClick=!isEditing&&editableEdit(editable)&&customEdit(customReturn)&&editHandle?e=>{(e.ctrlKey||e.metaKey)&&edit()}:void 0,Icons=jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[isEditing&&jsxRuntimeExports.jsx(SvgDone,{className:"json-view--edit",style:{display:"inline-block"},onClick:deleting?deleteHandle:done}),isEditing&&jsxRuntimeExports.jsx(SvgCancel,{className:"json-view--edit",style:{display:"inline-block"},onClick:cancel}),!isEditing&&enableClipboard&&customCopy(customReturn)&&jsxRuntimeExports.jsx(CopyButton,{node}),!isEditing&&editableEdit(editable)&&customEdit(customReturn)&&editHandle&&jsxRuntimeExports.jsx(SvgEdit,{className:"json-view--edit",onClick:edit}),!isEditing&&editableDelete(editable)&&customDelete(customReturn)&&_deleteHandle&&jsxRuntimeExports.jsx(SvgTrash,{className:"json-view--edit",onClick:()=>setDeleting(!0)})]});let className="json-view--string";switch(typeof(customReturn==null?void 0:customReturn.className)=="string"&&(className+=" "+customReturn.className),type){case"number":case"bigint":className="json-view--number";break;case"boolean":className="json-view--boolean";break;case"object":className="json-view--null";break}deleting&&(className+=" json-view--deleting");let displayValue=String(node);type==="bigint"&&(displayValue+="n");const EditingElement=reactExports.useMemo(()=>jsxRuntimeExports.jsx("span",{contentEditable:!0,className,dangerouslySetInnerHTML:{__html:type==="string"?`"${displayValue}"`:displayValue},ref:valueRef,onKeyDown:handleKeyDown}),[displayValue,type,handleKeyDown]);return type==="string"?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[editing?EditingElement:node.length>collapseStringsAfterLength?jsxRuntimeExports.jsx(LongString,{str:node,ref:valueRef,className,ctrlClick}):jsxRuntimeExports.jsxs("span",Object.assign({className,onClick:ctrlClick},{children:['"',displayValue,'"']})),Icons]}):jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[editing?EditingElement:jsxRuntimeExports.jsx("span",Object.assign({className,onClick:ctrlClick},{children:displayValue})),Icons]})}}const JsonViewContext=reactExports.createContext({src:void 0,collapseStringsAfterLength:99,collapseStringMode:"directly",collapseObjectsAfterLength:20,collapsed:!1,enableClipboard:!0,editable:!1,onEdit:void 0,onDelete:void 0,onAdd:void 0,onChange:void 0,forceUpdate:()=>{},customizeNode:void 0,displaySize:void 0});function JsonView({src:e,collapseStringsAfterLength:t=99,collapseStringMode:n="directly",collapseObjectsAfterLength:s=99,collapsed:i,enableClipboard:a=!0,editable:m=!1,onEdit:l,onDelete:d,onAdd:x,onChange:u,dark:g=!1,theme:h="default",customizeNode:c,displaySize:R}){const[v,E]=reactExports.useState(0),j=reactExports.useCallback(()=>E(b=>++b),[]);return jsxRuntimeExports.jsx(JsonViewContext.Provider,Object.assign({value:{src:e,collapseStringsAfterLength:t,collapseStringMode:n,collapseObjectsAfterLength:s,collapsed:i,enableClipboard:a,editable:m,onEdit:l,onDelete:d,onAdd:x,onChange:u,forceUpdate:j,customizeNode:c,displaySize:R}},{children:jsxRuntimeExports.jsx("code",Object.assign({className:"json-view"+(g?" dark":"")+(h&&h!=="default"?" json-view_"+h:"")},{children:jsxRuntimeExports.jsx(JsonNode,{node:e,depth:1})}))}))}function useUpdateQueryStringValueWithoutNavigation(e,t){reactExports.useEffect(()=>{const n=new URLSearchParams(window.location.search),s=n.get(e)??"";if(t===s)return;t?n.set(e,t):n.delete(e);const i=[window.location.pathname,n.toString()].filter(Boolean).join("?");window.history.replaceState(null,"",i)},[e,t])}const shouldRevalidate=()=>!0,handle={crumb:(e,{pathname:t})=>({to:t,linkText:t.split("/").reverse()[0]==="reports"?"Reports":"Test Suites"})},metadataToOneString=e=>Object.values(e).map(t=>Array.isArray(t)?t.join(" "):typeof t=="object"?metadataToOneString(t):t).join(" "),SnapshotsListTemplate=({type:e,slots:t})=>{const{projectId:n}=useParams(),s=useLoaderData(),i=useMatches(),a=useSubmit(),l=useNavigation().state!=="idle";invariant(n);const[d]=useSearchParams(),[x,u]=reactExports.useState("desc"),[g,h]=useLocalStorage("show-full-json-metadata",!1),[c,R]=reactExports.useState(()=>{var r;return((r=d.get("tags"))==null?void 0:r.split(","))||[]}),[v,E]=reactExports.useState(()=>d.get("metadata-query")||"");useUpdateQueryStringValueWithoutNavigation("tags",c.join(",")),useUpdateQueryStringValueWithoutNavigation("metadata-query",String(v));const j=i.find(({handle:r})=>{var f;return((f=r==null?void 0:r.hide)==null?void 0:f.snapshotList)===!0}),b=reactExports.useMemo(()=>Array.from(new Set(s.flatMap(({tags:r})=>r))),[s]),O=reactExports.useMemo(()=>s.filter(({tags:r})=>c.every(f=>r.includes(f))),[s,c]),C=reactExports.useMemo(()=>O.filter(({metadata:r})=>v===""?!0:metadataToOneString(r).includes(v)),[O,v]),N=reactExports.useMemo(()=>x===void 0?C:C.sort((r,f)=>{const[T,y]=[Date.parse(r.timestamp),Date.parse(f.timestamp)],S=T-y;return x==="desc"?-S:x==="asc"?S:0}),[C,x]);if(j)return jsxRuntimeExports.jsx(Outlet,{});const w=jsxRuntimeExports.jsx(Box,{sx:{padding:2},children:jsxRuntimeExports.jsxs(Grid,{container:!0,gap:2,alignItems:"flex-end",justifyContent:"space-around",children:[jsxRuntimeExports.jsx(Grid,{item:!0,xs:12,md:4,children:jsxRuntimeExports.jsx(Autocomplete,{multiple:!0,limitTags:2,value:c,onChange:(r,f)=>R(f),options:b,renderInput:r=>jsxRuntimeExports.jsx(TextField,{...r,variant:"standard",label:"Filter by Tags"})})}),jsxRuntimeExports.jsx(Grid,{item:!0,xs:12,md:7,children:jsxRuntimeExports.jsxs(Box,{display:"flex",alignItems:"flex-end",gap:2,children:[jsxRuntimeExports.jsx(TextField,{fullWidth:!0,value:v,onChange:r=>E(r.target.value),variant:"standard",label:"Search in Metadata"}),jsxRuntimeExports.jsx(Box,{minWidth:220,display:"flex",justifyContent:"center",children:jsxRuntimeExports.jsx(FormControlLabel,{control:jsxRuntimeExports.jsx(Switch,{checked:g,onChange:r=>h(r.target.checked)}),label:"Hide Metadata"})}),jsxRuntimeExports.jsx(Box,{display:"flex",justifyContent:"flex-end",children:jsxRuntimeExports.jsxs(Button,{sx:{minWidth:160},variant:"outlined",onClick:()=>a({action:"reload-snapshots"},{method:"post",replace:!0,encType:"application/json"}),color:"primary",disabled:l,children:["refresh ",e]})})]})})]})});return s.length===0?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[w,jsxRuntimeExports.jsxs(Typography,{my:3,variant:"h4",align:"center",children:["You don't have any ",e," yet."]})]}):jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[w,jsxRuntimeExports.jsxs(Table,{children:[jsxRuntimeExports.jsxs(TableHead,{children:[jsxRuntimeExports.jsxs(TableRow,{children:[jsxRuntimeExports.jsx(TableCell,{children:e==="reports"?"Report ID":e==="test suites"?"Test Suite ID":"indefined"}),jsxRuntimeExports.jsx(TableCell,{children:"Tags"}),jsxRuntimeExports.jsx(TableCell,{children:"Metadata"}),jsxRuntimeExports.jsx(TableCell,{children:jsxRuntimeExports.jsx(TableSortLabel,{active:!!x,direction:x,onClick:()=>{u(r=>{if(r===void 0)return"desc";if(r==="desc")return"asc"})},children:"Timestamp"})}),jsxRuntimeExports.jsx(TableCell,{align:"center",children:"Actions"})]}),jsxRuntimeExports.jsx(TableRow,{})]}),jsxRuntimeExports.jsx(TableBody,{children:N.map(r=>jsxRuntimeExports.jsxs(TableRow,{children:[jsxRuntimeExports.jsx(TableCell,{children:jsxRuntimeExports.jsx(TextWithCopyIcon,{showText:r.id,copyText:r.id})}),jsxRuntimeExports.jsx(TableCell,{children:jsxRuntimeExports.jsx(Box,{maxWidth:250,children:jsxRuntimeExports.jsx(HidedTags,{onClick:f=>{c.includes(f)||R([...c,f])},tags:r.tags})})}),jsxRuntimeExports.jsx(TableCell,{children:jsxRuntimeExports.jsx(JsonView,{collapsed:g,src:r.metadata,theme:"atom",enableClipboard:!1})}),jsxRuntimeExports.jsx(TableCell,{children:jsxRuntimeExports.jsx(Typography,{variant:"body2",children:dayjs(r.timestamp).locale("en-gb").format("llll")})}),jsxRuntimeExports.jsx(TableCell,{children:jsxRuntimeExports.jsxs(Box,{display:"flex",justifyContent:"center",gap:1,children:[t!=null&&t.ViewButton?jsxRuntimeExports.jsx(t.ViewButton,{snapshotId:r.id,projectId:n}):jsxRuntimeExports.jsx(Button,{disabled:l,component:Link,to:`${r.id}`,children:"View"}),jsxRuntimeExports.jsx(DownloadButton,{variant:(t==null?void 0:t.donwloadButtonVariant)||"outlined",disabled:l,downloadLink:`/api/projects/${n}/${r.id}/download`}),(t==null?void 0:t.additionalSnapshotActions)&&jsxRuntimeExports.jsx(t.additionalSnapshotActions,{snapshotId:r.id,projectId:n}),jsxRuntimeExports.jsx(Box,{children:jsxRuntimeExports.jsx(Tooltip,{title:"delete snapshot",placement:"top",children:jsxRuntimeExports.jsx(IconButton,{onClick:()=>{confirm("Are you sure?")===!0&&a({action:"delete-snapshot",snapshotId:r.id},{method:"post",replace:!0,encType:"application/json"})},color:"primary",disabled:l,children:jsxRuntimeExports.jsx(DeleteIcon,{})})})})]})})]},`r-${r.id}`))})]})]})};export{SnapshotsListTemplate,handle,shouldRevalidate};

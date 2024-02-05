!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");let hasProto=(e,t,a)=>{var r;return!!a(e,t.prototype)||(null===(r=e.constructor)||void 0===r?void 0:r.name)===t.name},typeOf=e=>{let t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&hasProto(e,String,(e,t)=>t.isPrototypeOf(e))?"string":t},isType=e=>t=>typeOf(t)===e,t=isType("string"),a=isType("object"),r=isType("array"),isNullable=e=>null==e,isNonNullable=e=>!isNullable(e);let Optional=class Optional{constructor(e,t){this.tag=e,this.value=t}static some(e){return new Optional(!0,e)}static none(){return Optional.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?Optional.some(e(this.value)):Optional.none()}bind(e){return this.tag?e(this.value):Optional.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:Optional.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw Error(null!=e?e:"Called getOrDie on None")}static from(e){return isNonNullable(e)?Optional.some(e):Optional.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}};Optional.singletonNone=new Optional(!1);let l=Array.prototype.push,each$1=(e,t)=>{for(let a=0,r=e.length;a<r;a++){let r=e[a];t(r,a)}},flatten=e=>{let t=[];for(let a=0,o=e.length;a<o;++a){if(!r(e[a]))throw Error("Arr.flatten item "+a+" was not an array, input: "+e);l.apply(t,e[a])}return t},Cell=e=>{let t=e;return{get:()=>t,set:e=>{t=e}}},o=Object.keys,i=Object.hasOwnProperty,each=(e,t)=>{let a=o(e);for(let r=0,l=a.length;r<l;r++){let l=a[r],o=e[l];t(o,l)}},get$1=(e,t)=>has(e,t)?Optional.from(e[t]):Optional.none(),has=(e,t)=>i.call(e,t),option=e=>t=>t.options.get(e),register$2=e=>{let t=e.options.register;t("audio_template_callback",{processor:"function"}),t("video_template_callback",{processor:"function"}),t("iframe_template_callback",{processor:"function"}),t("media_live_embeds",{processor:"boolean",default:!0}),t("media_filter_html",{processor:"boolean",default:!0}),t("media_url_resolver",{processor:"function"}),t("media_alt_source",{processor:"boolean",default:!0}),t("media_poster",{processor:"boolean",default:!0}),t("media_dimensions",{processor:"boolean",default:!0})},s=option("audio_template_callback"),n=option("video_template_callback"),m=option("iframe_template_callback"),c=option("media_live_embeds"),d=option("media_filter_html"),u=option("media_url_resolver"),h=option("media_alt_source"),p=option("media_poster"),g=option("media_dimensions");var b=tinymce.util.Tools.resolve("tinymce.util.Tools"),w=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),f=tinymce.util.Tools.resolve("tinymce.html.DomParser");let v=w.DOM,trimPx=e=>e.replace(/px$/,""),getEphoxEmbedData=e=>{let t=e.attr("style"),a=t?v.parseStyle(t):{};return{type:"ephox-embed-iri",source:e.attr("data-ephox-embed-iri"),altsource:"",poster:"",width:get$1(a,"max-width").map(trimPx).getOr(""),height:get$1(a,"max-height").map(trimPx).getOr("")}},htmlToData=(e,t)=>{let a={},r=f({validate:!1,forced_root_block:!1},t),l=r.parse(e);for(let e=l;e;e=e.walk())if(1===e.type){let t=e.name;if(e.attr("data-ephox-embed-iri")){a=getEphoxEmbedData(e);break}a.source||"param"!==t||(a.source=e.attr("movie")),("iframe"===t||"object"===t||"embed"===t||"video"===t||"audio"===t)&&(a.type||(a.type=t),a=b.extend(e.attributes.map,a)),"source"!==t||(a.source?a.altsource||(a.altsource=e.attr("src")):a.source=e.attr("src")),"img"!==t||a.poster||(a.poster=e.attr("src"))}return a.source=a.source||a.src||"",a.altsource=a.altsource||"",a.poster=a.poster||"",a},guess=e=>{var t;let a=null!==(t=e.toLowerCase().split(".").pop())&&void 0!==t?t:"";return get$1({mp3:"audio/mpeg",m4a:"audio/x-m4a",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"},a).getOr("")};var y=tinymce.util.Tools.resolve("tinymce.html.Node"),x=tinymce.util.Tools.resolve("tinymce.html.Serializer");let Parser=(e,t={})=>f({forced_root_block:!1,validate:!1,allow_conditional_comments:!0,...t},e),$=w.DOM,addPx=e=>/^[0-9.]+$/.test(e)?e+"px":e,updateEphoxEmbed=(e,t)=>{let a=t.attr("style"),r=a?$.parseStyle(a):{};isNonNullable(e.width)&&(r["max-width"]=addPx(e.width)),isNonNullable(e.height)&&(r["max-height"]=addPx(e.height)),t.attr("style",$.serializeStyle(r))},E=["source","altsource"],updateHtml=(e,t,a,r)=>{let l=0,o=0,i=Parser(r);i.addNodeFilter("source",e=>l=e.length);let s=i.parse(e);for(let e=s;e;e=e.walk())if(1===e.type){let r=e.name;if(e.attr("data-ephox-embed-iri")){updateEphoxEmbed(t,e);break}switch(r){case"video":case"object":case"embed":case"img":case"iframe":void 0!==t.height&&void 0!==t.width&&(e.attr("width",t.width),e.attr("height",t.height))}if(a)switch(r){case"video":e.attr("poster",t.poster),e.attr("src",null);for(let a=l;a<2;a++)if(t[E[a]]){let r=new y("source",1);r.attr("src",t[E[a]]),r.attr("type",t[E[a]+"mime"]||null),e.append(r)}break;case"iframe":e.attr("src",t.source);break;case"object":let i=e.getAll("img").length>0;if(t.poster&&!i){e.attr("src",t.poster);let a=new y("img",1);a.attr("src",t.poster),a.attr("width",t.width),a.attr("height",t.height),e.append(a)}break;case"source":if(o<2&&(e.attr("src",t[E[o]]),e.attr("type",t[E[o]+"mime"]||null),!t[E[o]])){e.remove();continue}o++;break;case"img":t.poster||e.remove()}}return x({},r).serialize(s)},N=[{regex:/youtu\.be\/([\w\-_\?&=.]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$2?$4",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)\?h=(\w+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$1?h=$2&title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)\?h=(\w+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$2?h=$3&title=0&amp;byline=0",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$2?title=0&amp;byline=0",allowFullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0},{regex:/dai\.ly\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0}],getProtocol=e=>{let t=e.match(/^(https?:\/\/|www\.)(.+)$/i);return t&&t.length>1?"www."===t[1]?"https://":t[1]:"https://"},getUrl=(e,t)=>{let a=getProtocol(t),r=e.regex.exec(t),l=a+e.url;if(isNonNullable(r))for(let e=0;e<r.length;e++)l=l.replace("$"+e,()=>r[e]?r[e]:"");return l.replace(/\?$/,"")},matchPattern=e=>{let t=N.filter(t=>t.regex.test(e));return t.length>0?b.extend({},t[0],{url:getUrl(t[0],e)}):null},getIframeHtml=(e,t)=>{if(t)return t(e);{let t=e.allowfullscreen?' allowFullscreen="1"':"";return'<iframe src="'+e.source+'" width="'+e.width+'" height="'+e.height+'"'+t+"></iframe>"}},getFlashHtml=e=>{let t='<object data="'+e.source+'" width="'+e.width+'" height="'+e.height+'" type="application/x-shockwave-flash">';return e.poster&&(t+='<img src="'+e.poster+'" width="'+e.width+'" height="'+e.height+'" />'),t+="</object>"},getAudioHtml=(e,t)=>t?t(e):'<audio controls="controls" src="'+e.source+'">'+(e.altsource?'\n<source src="'+e.altsource+'"'+(e.altsourcemime?' type="'+e.altsourcemime+'"':"")+" />\n":"")+"</audio>",getVideoHtml=(e,t)=>t?t(e):'<video width="'+e.width+'" height="'+e.height+'"'+(e.poster?' poster="'+e.poster+'"':"")+' controls="controls">\n<source src="'+e.source+'"'+(e.sourcemime?' type="'+e.sourcemime+'"':"")+" />\n"+(e.altsource?'<source src="'+e.altsource+'"'+(e.altsourcemime?' type="'+e.altsourcemime+'"':"")+" />\n":"")+"</video>",dataToHtml=(e,t)=>{var a;let r=b.extend({},t);if(!r.source&&(b.extend(r,htmlToData(null!==(a=r.embed)&&void 0!==a?a:"",e.schema)),!r.source))return"";r.altsource||(r.altsource=""),r.poster||(r.poster=""),r.source=e.convertURL(r.source,"source"),r.altsource=e.convertURL(r.altsource,"source"),r.sourcemime=guess(r.source),r.altsourcemime=guess(r.altsource),r.poster=e.convertURL(r.poster,"poster");let l=matchPattern(r.source);if(l&&(r.source=l.url,r.type=l.type,r.allowfullscreen=l.allowFullscreen,r.width=r.width||String(l.w),r.height=r.height||String(l.h)),r.embed)return updateHtml(r.embed,r,!0,e.schema);{let t=s(e),a=n(e),l=m(e);return(r.width=r.width||"300",r.height=r.height||"150",b.each(r,(t,a)=>{r[a]=e.dom.encode(""+t)}),"iframe"===r.type)?getIframeHtml(r,l):"application/x-shockwave-flash"===r.sourcemime?getFlashHtml(r):-1!==r.sourcemime.indexOf("audio")?getAudioHtml(r,t):getVideoHtml(r,a)}},isMediaElement=e=>e.hasAttribute("data-mce-object")||e.hasAttribute("data-ephox-embed-iri"),setup$2=e=>{e.on("click keyup touchend",()=>{let t=e.selection.getNode();t&&e.dom.hasClass(t,"mce-preview-object")&&e.dom.getAttrib(t,"data-mce-selected")&&t.setAttribute("data-mce-selected","2")}),e.on("ObjectResized",t=>{let a=t.target;if(a.getAttribute("data-mce-object")){let r=a.getAttribute("data-mce-html");r&&(r=unescape(r),a.setAttribute("data-mce-html",escape(updateHtml(r,{width:String(t.width),height:String(t.height)},!1,e.schema))))}})},D={},embedPromise=(e,t,a)=>new Promise((r,l)=>{let wrappedResolve=a=>(a.html&&(D[e.source]=a),r({url:e.source,html:a.html?a.html:t(e)}));D[e.source]?wrappedResolve(D[e.source]):a({url:e.source},wrappedResolve,l)}),defaultPromise=(e,t)=>Promise.resolve({html:t(e),url:e.source}),loadedData=e=>t=>dataToHtml(e,t),getEmbedHtml=(e,t)=>{let a=u(e);return a?embedPromise(t,loadedData(e),a):defaultPromise(t,loadedData(e))},isCached=e=>has(D,e),extractMeta=(e,t)=>get$1(t,e).bind(e=>get$1(e,"meta")),getValue=(e,t,r)=>l=>{let getFromData=()=>get$1(e,l),getFromMetaData=()=>get$1(t,l),getNonEmptyValue=e=>get$1(e,"value").bind(e=>e.length>0?Optional.some(e):Optional.none());return{[l]:(l===r?getFromData().bind(e=>a(e)?getNonEmptyValue(e).orThunk(getFromMetaData):getFromMetaData().orThunk(()=>Optional.from(e))):getFromMetaData().orThunk(()=>getFromData().bind(e=>a(e)?getNonEmptyValue(e):Optional.from(e)))).getOr("")}},getDimensions=(e,t)=>{let a={};return get$1(e,"dimensions").each(e=>{each$1(["width","height"],r=>{get$1(t,r).orThunk(()=>get$1(e,r)).each(e=>a[r]=e)})}),a},unwrap=(e,t)=>{let a=t&&"dimensions"!==t?extractMeta(t,e).getOr({}):{},r=getValue(e,a,t);return{...r("source"),...r("altsource"),...r("poster"),...r("embed"),...getDimensions(e,a)}},wrap=e=>{let t={...e,source:{value:get$1(e,"source").getOr("")},altsource:{value:get$1(e,"altsource").getOr("")},poster:{value:get$1(e,"poster").getOr("")}};return each$1(["width","height"],a=>{get$1(e,a).each(e=>{let r=t.dimensions||{};r[a]=e,t.dimensions=r})}),t},handleError=e=>t=>{let a=t&&t.msg?"Media embed handler error: "+t.msg:"Media embed handler threw unknown error.";e.notificationManager.open({type:"error",text:a})},getEditorData=e=>{let t=e.selection.getNode(),a=isMediaElement(t)?e.serializer.serialize(t,{selection:!0}):"",r=htmlToData(a,e.schema),l=(()=>{if(!isEmbedIframe(r.source,r.type))return{};{let a=e.dom.getRect(t);return{width:a.w.toString().replace(/px$/,""),height:a.h.toString().replace(/px$/,"")}}})();return{embed:a,...r,...l}},addEmbedHtml=(e,a)=>r=>{if(t(r.url)&&r.url.trim().length>0){let t=r.html,l=htmlToData(t,a.schema),o={...l,source:r.url,embed:t};e.setData(wrap(o))}},selectPlaceholder=(e,t)=>{let a=e.dom.select("*[data-mce-object]");for(let e=0;e<t.length;e++)for(let r=a.length-1;r>=0;r--)t[e]===a[r]&&a.splice(r,1);e.selection.select(a[0])},handleInsert=(e,t)=>{let a=e.dom.select("*[data-mce-object]");e.insertContent(t),selectPlaceholder(e,a),e.nodeChanged()},isEmbedIframe=(e,t)=>isNonNullable(t)&&"ephox-embed-iri"===t&&isNonNullable(matchPattern(e)),shouldInsertAsNewIframe=(e,t)=>(e.width!==t.width||e.height!==t.height)&&isEmbedIframe(t.source,e.type),submitForm=(e,t,a)=>{var r;t.embed=shouldInsertAsNewIframe(e,t)&&g(a)?dataToHtml(a,{...t,embed:""}):updateHtml(null!==(r=t.embed)&&void 0!==r?r:"",t,!1,a.schema),t.embed&&(e.source===t.source||isCached(t.source))?handleInsert(a,t.embed):getEmbedHtml(a,t).then(e=>{handleInsert(a,e.html)}).catch(handleError(a))},showDialog=e=>{let t=getEditorData(e),a=Cell(t),r=wrap(t),handleSource=(t,a)=>{let r=unwrap(a.getData(),"source");t.source!==r.source&&(addEmbedHtml(n,e)({url:r.source,html:""}),getEmbedHtml(e,r).then(addEmbedHtml(n,e)).catch(handleError(e)))},handleEmbed=t=>{var a;let r=unwrap(t.getData()),l=htmlToData(null!==(a=r.embed)&&void 0!==a?a:"",e.schema);t.setData(wrap(l))},handleUpdate=(t,a,r)=>{let l=unwrap(t.getData(),a),o=shouldInsertAsNewIframe(r,l)&&g(e)?{...l,embed:""}:l,i=dataToHtml(e,o);t.setData(wrap({...o,embed:i}))},l=g(e)?[{type:"sizeinput",name:"dimensions",label:"Constrain proportions",constrain:!0}]:[],o={title:"General",name:"general",items:flatten([[{name:"source",type:"urlinput",filetype:"media",label:"Source",picker_text:"Browse files"}],l])},i=[];h(e)&&i.push({name:"altsource",type:"urlinput",filetype:"media",label:"Alternative source URL"}),p(e)&&i.push({name:"poster",type:"urlinput",filetype:"image",label:"Media poster (Image URL)"});let s=[o,{title:"Embed",items:[{type:"textarea",name:"embed",label:"Paste your embed code below:"}]}];i.length>0&&s.push({title:"Advanced",name:"advanced",items:i});let n=e.windowManager.open({title:"Insert/Edit Media",size:"normal",body:{type:"tabpanel",tabs:s},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:t=>{let r=unwrap(t.getData());submitForm(a.get(),r,e),t.close()},onChange:(e,t)=>{switch(t.name){case"source":handleSource(a.get(),e);break;case"embed":handleEmbed(e);break;case"dimensions":case"altsource":case"poster":handleUpdate(e,t.name,a.get())}a.set(unwrap(e.getData()))},initialData:r})},get=e=>({showDialog:()=>{showDialog(e)}}),register$1=e=>{e.addCommand("mceMedia",()=>{showDialog(e)})},checkRange=(e,t,a)=>""===t||e.length>=t.length&&e.substr(a,a+t.length)===t,startsWith=(e,t)=>checkRange(e,t,0);var O=tinymce.util.Tools.resolve("tinymce.Env");let isLiveEmbedNode=e=>{let t=e.name;return"iframe"===t||"video"===t||"audio"===t},getDimension=(e,t,a,r=null)=>{let l=e.attr(a);return isNonNullable(l)?l:has(t,a)?null:r},setDimensions=(e,t,a)=>{let r="img"===t.name||"video"===e.name,l="audio"===e.name?"30":"150",o=r?l:null;t.attr({width:getDimension(e,a,"width",r?"300":null),height:getDimension(e,a,"height",o)})},appendNodeContent=(e,t,a,r)=>{let l=Parser(e.schema).parse(r,{context:t});for(;l.firstChild;)a.append(l.firstChild)},createPlaceholderNode=(e,t)=>{let a=t.name,r=new y("img",1);return retainAttributesAndInnerHtml(e,t,r),setDimensions(t,r,{}),r.attr({style:t.attr("style"),src:O.transparentSrc,"data-mce-object":a,class:"mce-object mce-object-"+a}),r},createPreviewNode=(e,t)=>{var a;let r=t.name,l=new y("span",1);l.attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":r,class:"mce-preview-object mce-object-"+r}),retainAttributesAndInnerHtml(e,t,l);let o=e.dom.parseStyle(null!==(a=t.attr("style"))&&void 0!==a?a:""),i=new y(r,1);if(setDimensions(t,i,o),i.attr({src:t.attr("src"),style:t.attr("style"),class:t.attr("class")}),"iframe"===r)i.attr({allowfullscreen:t.attr("allowfullscreen"),frameborder:"0",sandbox:t.attr("sandbox")});else{each$1(["controls","crossorigin","currentTime","loop","muted","poster","preload"],e=>{i.attr(e,t.attr(e))});let a=l.attr("data-mce-html");isNonNullable(a)&&appendNodeContent(e,r,i,unescape(a))}let s=new y("span",1);return s.attr("class","mce-shim"),l.append(i),l.append(s),l},retainAttributesAndInnerHtml=(e,t,a)=>{var r;let l=null!==(r=t.attributes)&&void 0!==r?r:[],o=l.length;for(;o--;){let t=l[o].name,r=l[o].value;"width"===t||"height"===t||"style"===t||startsWith(t,"data-mce-")||(("data"===t||"src"===t)&&(r=e.convertURL(r,t)),a.attr("data-mce-p-"+t,r))}let i=x({inner:!0},e.schema),s=new y("div",1);each$1(t.children(),e=>s.append(e));let n=i.serialize(s);n&&(a.attr("data-mce-html",escape(n)),a.empty())},isPageEmbedWrapper=e=>{let a=e.attr("class");return t(a)&&/\btiny-pageembed\b/.test(a)},isWithinEmbedWrapper=e=>{let t=e;for(;t=t.parent;)if(t.attr("data-ephox-embed-iri")||isPageEmbedWrapper(t))return!0;return!1},placeHolderConverter=e=>t=>{let a,r=t.length;for(;r--;)!(!(a=t[r]).parent||a.parent.attr("data-mce-object"))&&(isLiveEmbedNode(a)&&c(e)?isWithinEmbedWrapper(a)||a.replace(createPreviewNode(e,a)):isWithinEmbedWrapper(a)||a.replace(createPlaceholderNode(e,a)))},parseAndSanitize=(e,t,a)=>{let r=e.options.get,l=r("xss_sanitization"),o=d(e);return Parser(e.schema,{sanitize:l,validate:o}).parse(a,{context:t})},setup$1=e=>{e.on("PreInit",()=>{let{schema:t,serializer:a,parser:r}=e,l=t.getBoolAttrs();each$1("webkitallowfullscreen mozallowfullscreen".split(" "),e=>{l[e]={}}),each({embed:["wmode"]},(e,a)=>{let r=t.getElementRule(a);r&&each$1(e,e=>{r.attributes[e]={},r.attributesOrder.push(e)})}),r.addNodeFilter("iframe,video,audio,object,embed",placeHolderConverter(e)),a.addAttributeFilter("data-mce-object",(t,a)=>{var r;let l=t.length;for(;l--;){let o=t[l];if(!o.parent)continue;let i=o.attr(a),s=new y(i,1);if("audio"!==i){let e=o.attr("class");e&&-1!==e.indexOf("mce-preview-object")&&o.firstChild?s.attr({width:o.firstChild.attr("width"),height:o.firstChild.attr("height")}):s.attr({width:o.attr("width"),height:o.attr("height")})}s.attr({style:o.attr("style")});let n=null!==(r=o.attributes)&&void 0!==r?r:[],m=n.length;for(;m--;){let e=n[m].name;0===e.indexOf("data-mce-p-")&&s.attr(e.substr(11),n[m].value)}let c=o.attr("data-mce-html");if(c){let t=parseAndSanitize(e,i,unescape(c));each$1(t.children(),e=>s.append(e))}o.replace(s)}})}),e.on("SetContent",()=>{let t=e.dom;each$1(t.select("span.mce-preview-object"),e=>{0===t.select("span.mce-shim",e).length&&t.add(e,"span",{class:"mce-shim"})})})},setup=e=>{e.on("ResolveName",e=>{let t;1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)})},onSetupEditable=e=>t=>{let nodeChanged=()=>{t.setEnabled(e.selection.isEditable())};return e.on("NodeChange",nodeChanged),nodeChanged(),()=>{e.off("NodeChange",nodeChanged)}},register=e=>{let onAction=()=>e.execCommand("mceMedia");e.ui.registry.addToggleButton("media",{tooltip:"Insert/edit media",icon:"embed",onAction,onSetup:t=>{let a=e.selection;t.setActive(isMediaElement(a.getNode()));let r=a.selectorChangedWithUnbind("img[data-mce-object],span[data-mce-object],div[data-ephox-embed-iri]",t.setActive).unbind,l=onSetupEditable(e)(t);return()=>{r(),l()}}}),e.ui.registry.addMenuItem("media",{icon:"embed",text:"Media...",onAction,onSetup:onSetupEditable(e)})};e.add("media",e=>(register$2(e),register$1(e),register(e),setup(e),setup$1(e),setup$2(e),get(e)))}();
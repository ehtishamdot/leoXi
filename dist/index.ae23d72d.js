function t(t,e,i,r){Object.defineProperty(t,e,{get:i,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},n=e.parcelRequire7e89;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequire7e89=n),n.register("ac0VL",(function(t,e){var i=function(t){var e,i=Object.prototype,r=i.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function h(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,i){return t[e]=i}}function u(t,e,i,r){var n=e&&e.prototype instanceof g?e:g,s=Object.create(n.prototype),o=new A(r||[]);return s._invoke=function(t,e,i){var r=c;return function(n,s){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===n)throw s;return R()}for(i.method=n,i.arg=s;;){var o=i.delegate;if(o){var a=k(o,i);if(a){if(a===m)continue;return a}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===c)throw r=p,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=d;var h=l(t,e,i);if("normal"===h.type){if(r=i.done?p:f,h.arg===m)continue;return{value:h.arg,done:i.done}}"throw"===h.type&&(r=p,i.method="throw",i.arg=h.arg)}}}(t,i,o),s}function l(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var c="suspendedStart",f="suspendedYield",d="executing",p="completed",m={};function g(){}function y(){}function v(){}var b={};h(b,s,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(x([])));_&&_!==i&&r.call(_,s)&&(b=_);var M=v.prototype=g.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function i(n,s,o,a){var h=l(t[n],t,s);if("throw"!==h.type){var u=h.arg,c=u.value;return c&&"object"==typeof c&&r.call(c,"__await")?e.resolve(c.__await).then((function(t){i("next",t,o,a)}),(function(t){i("throw",t,o,a)})):e.resolve(c).then((function(t){u.value=t,o(u)}),(function(t){return i("throw",t,o,a)}))}a(h.arg)}var n;this._invoke=function(t,r){function s(){return new e((function(e,n){i(t,r,e,n)}))}return n=n?n.then(s,s):s()}}function k(t,i){var r=t.iterator[i.method];if(r===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,k(t,i),"throw"===i.method))return m;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=l(r,t.iterator,i.arg);if("throw"===n.type)return i.method="throw",i.arg=n.arg,i.delegate=null,m;var s=n.arg;return s?s.done?(i[t.resultName]=s.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,m):s:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function x(t){if(t){var i=t[s];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function i(){for(;++n<t.length;)if(r.call(t,n))return i.value=t[n],i.done=!1,i;return i.value=e,i.done=!0,i};return o.next=o}}return{next:R}}function R(){return{value:e,done:!0}}return y.prototype=v,h(M,"constructor",v),h(v,"constructor",y),y.displayName=h(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,h(t,a,"GeneratorFunction")),t.prototype=Object.create(M),t},t.awrap=function(t){return{__await:t}},S(E.prototype),h(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,i,r,n,s){void 0===s&&(s=Promise);var o=new E(u(e,i,r,n),s);return t.isGeneratorFunction(i)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},S(M),h(M,a,"Generator"),h(M,s,(function(){return this})),h(M,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var r=e.pop();if(r in t)return i.value=r,i.done=!1,i}return i.done=!0,i}},t.values=x,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var i in this)"t"===i.charAt(0)&&r.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function n(r,n){return a.type="throw",a.arg=t,i.next=r,n&&(i.method="next",i.arg=e),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var h=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(h&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(h){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),I(i),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var n=r.arg;I(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,r){return this.delegate={iterator:x(t),resultName:i,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}})),n.register("f1vV5",(function(e,i){t(e.exports,"getDoc",(()=>Mo)),t(e.exports,"deleteDoc",(()=>Io)),t(e.exports,"getDocs",(()=>Eo)),t(e.exports,"collection",(()=>Ps)),t(e.exports,"doc",(()=>Ls)),t(e.exports,"getFirestore",(()=>Bs)),t(e.exports,"setDoc",(()=>ko)),t(e.exports,"addDoc",(()=>Ao)),t(e.exports,"updateDoc",(()=>To));var r=n("kVAWG"),s=n("181Xw"),o=n("aa1lO"),a=n("15Gf9"),h=n("bbJw6");n("2px04");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c=new o.Logger("@firebase/firestore");function f(){return c.logLevel}function d(t,...e){if(c.logLevel<=o.LogLevel.DEBUG){const i=e.map(g);c.debug(`Firestore (${l}): ${t}`,...i)}}function p(t,...e){if(c.logLevel<=o.LogLevel.ERROR){const i=e.map(g);c.error(`Firestore (${l}): ${t}`,...i)}}function m(t,...e){if(c.logLevel<=o.LogLevel.WARN){const i=e.map(g);c.warn(`Firestore (${l}): ${t}`,...i)}}function g(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(u.UNAUTHENTICATED)))}shutdown(){}}class k{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const r=t=>this.i!==i?(i=this.i,e(t)):Promise.resolve();let n=new M;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new M,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=n;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{d("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(d("FirebaseCredentialsProvider","Auth not yet detected"),n.resolve(),n=new M)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(d("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class T{constructor(t,e,i){this.h=t,this.l=e,this.m=i,this.type="FirstParty",this.user=u.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class I{constructor(t,e,i){this.h=t,this.l=e,this.m=i}getToken(){return Promise.resolve(new T(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(u.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let e=0;e<t;e++)i[e]=Math.floor(256*Math.random());return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A.T=-1;class R{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=x(40);for(let n=0;n<r.length;++n)i.length<20&&r[n]<e&&(i+=t.charAt(r[n]%t.length))}return i}}function C(t,e){return t<e?-1:t>e?1:0}function N(t,e,i){return t.length===e.length&&t.every(((t,r)=>i(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new _(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new _(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new _(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new P(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new P(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){let e=0;for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&e++;return e}function O(t,e){for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&e(i,t[i])}function B(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e,i){void 0===e?e=0:e>t.length&&y(),void 0===i?i=t.length-e:i>t.length-e&&y(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return 0===j.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof j?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let r=0;r<i;r++){const i=t.get(r),n=e.get(r);if(i<n)return-1;if(i>n)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class q extends j{construct(t,e,i){return new q(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new _(w.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((t=>t.length>0)))}return new q(e)}static emptyPath(){return new q([])}}const U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class F extends j{construct(t,e,i){return new F(t,e,i)}static isValidIdentifier(t){return U.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),F.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new F(["__name__"])}static fromServerFormat(t){const e=[];let i="",r=0;const n=()=>{if(0===i.length)throw new _(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new _(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new _(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(i+=e,r++):(n(),r++)}if(n(),s)throw new _(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new F(e)}static emptyPath(){return new F([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.fields=t,t.sort(F.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return N(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new z(e)}static fromUint8Array(t){const e=function(t){let e="";for(let i=0;i<t.length;++i)e+=String.fromCharCode(t[i]);return e}(t);return new z(e)}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}z.EMPTY_BYTE_STRING=new z("");const H=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function W(t){if(v(!!t),"string"==typeof t){let e=0;const i=H.exec(t);if(v(!!i),i[1]){let t=i[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:K(t.seconds),nanos:K(t.nanos)}}function K(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function G(t){return"string"==typeof t?z.fromBase64String(t):z.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){var e,i;return"server_timestamp"===(null===(i=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===i?void 0:i.stringValue)}function Z(t){const e=t.mapValue.fields.__previous_value__;return $(e)?Z(e):e}function J(t){const e=W(t.mapValue.fields.__local_write_time__.timestampValue);return new P(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return null==t}function X(t){return 0===t&&1/t==-1/0}function Q(t){return"number"==typeof t&&Number.isInteger(t)&&!X(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(q.fromString(t))}static fromName(t){return new tt(q.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===q.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new q(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$(t)?4:10:y()}function it(t,e){const i=et(t);if(i!==et(e))return!1;switch(i){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return J(t).isEqual(J(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const i=W(t.timestampValue),r=W(e.timestampValue);return i.seconds===r.seconds&&i.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,G(t.bytesValue).isEqual(G(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return K(t.geoPointValue.latitude)===K(e.geoPointValue.latitude)&&K(t.geoPointValue.longitude)===K(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return K(t.integerValue)===K(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const i=K(t.doubleValue),r=K(e.doubleValue);return i===r?X(i)===X(r):isNaN(i)&&isNaN(r)}return!1}(t,e);case 9:return N(t.arrayValue.values||[],e.arrayValue.values||[],it);case 10:return function(t,e){const i=t.mapValue.fields||{},r=e.mapValue.fields||{};if(D(i)!==D(r))return!1;for(const t in i)if(i.hasOwnProperty(t)&&(void 0===r[t]||!it(i[t],r[t])))return!1;return!0}(t,e);default:return y()}var r}function rt(t,e){return void 0!==(t.values||[]).find((t=>it(t,e)))}function nt(t,e){const i=et(t),r=et(e);if(i!==r)return C(i,r);switch(i){case 0:return 0;case 1:return C(t.booleanValue,e.booleanValue);case 2:return function(t,e){const i=K(t.integerValue||t.doubleValue),r=K(e.integerValue||e.doubleValue);return i<r?-1:i>r?1:i===r?0:isNaN(i)?isNaN(r)?0:-1:1}(t,e);case 3:return st(t.timestampValue,e.timestampValue);case 4:return st(J(t),J(e));case 5:return C(t.stringValue,e.stringValue);case 6:return function(t,e){const i=G(t),r=G(e);return i.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const i=t.split("/"),r=e.split("/");for(let t=0;t<i.length&&t<r.length;t++){const e=C(i[t],r[t]);if(0!==e)return e}return C(i.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const i=C(K(t.latitude),K(e.latitude));return 0!==i?i:C(K(t.longitude),K(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const i=t.values||[],r=e.values||[];for(let t=0;t<i.length&&t<r.length;++t){const e=nt(i[t],r[t]);if(e)return e}return C(i.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const i=t.fields||{},r=Object.keys(i),n=e.fields||{},s=Object.keys(n);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=C(r[t],s[t]);if(0!==e)return e;const o=nt(i[r[t]],n[s[t]]);if(0!==o)return o}return C(r.length,s.length)}(t.mapValue,e.mapValue);default:throw y()}}function st(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return C(t,e);const i=W(t),r=W(e),n=C(i.seconds,r.seconds);return 0!==n?n:C(i.nanos,r.nanos)}function ot(t){return at(t)}function at(t){var e,i;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=W(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?G(t.bytesValue).toBase64():"referenceValue"in t?(i=t.referenceValue,tt.fromName(i).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",i=!0;for(const r of t.values||[])i?i=!1:e+=",",e+=at(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const n of e)r?r=!1:i+=",",i+=`${n}:${at(t.fields[n])}`;return i+"}"}(t.mapValue):y()}function ht(t){return!!t&&"integerValue"in t}function ut(t){return!!t&&"arrayValue"in t}function lt(t){return!!t&&"nullValue"in t}function ct(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ft(t){return!!t&&"mapValue"in t}function dt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return O(t.mapValue.fields,((t,i)=>e.mapValue.fields[t]=dt(i))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(t.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=dt(t.arrayValue.values[i]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.value=t}static empty(){return new pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!ft(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=dt(e)}setAll(t){let e=F.emptyPath(),i={},r=[];t.forEach(((t,n)=>{if(!e.isImmediateParentOf(n)){const t=this.getFieldsMap(e);this.applyChanges(t,i,r),i={},r=[],e=n.popLast()}t?i[n.lastSegment()]=dt(t):r.push(n.lastSegment())}));const n=this.getFieldsMap(e);this.applyChanges(n,i,r)}delete(t){const e=this.field(t.popLast());ft(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return it(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=e.mapValue.fields[t.get(i)];ft(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,i){O(e,((e,i)=>t[e]=i));for(const e of i)delete t[e]}clone(){return new pt(dt(this.value))}}function mt(t){const e=[];return O(t.fields,((t,i)=>{const r=new F([t]);if(ft(i)){const t=mt(i.mapValue).fields;if(0===t.length)e.push(r);else for(const i of t)e.push(r.child(i))}else e.push(r)})),new V(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gt{constructor(t,e,i,r,n){this.key=t,this.documentType=e,this.version=i,this.data=r,this.documentState=n}static newInvalidDocument(t){return new gt(t,0,L.min(),pt.empty(),0)}static newFoundDocument(t,e,i){return new gt(t,1,e,i,0)}static newNoDocument(t,e){return new gt(t,2,e,pt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,pt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new gt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e=null,i=[],r=[],n=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=r,this.limit=n,this.startAt=s,this.endAt=o,this.A=null}}function vt(t,e=null,i=[],r=[],n=null,s=null,o=null){return new yt(t,e,i,r,n,s,o)}function bt(t){const e=b(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+ot(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Y(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Nt(e.startAt)),e.endAt&&(t+="|ub:",t+=Nt(e.endAt)),e.A=t}return e.A}function wt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(i=t.orderBy[n],r=e.orderBy[n],i.dir!==r.dir||!i.field.isEqual(r.field))return!1;var i,r,n,s;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!it(n.value,s.value))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dt(t.startAt,e.startAt)&&Dt(t.endAt,e.endAt)}function _t(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Mt extends class{}{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,i):new St(t,e,i):"array-contains"===e?new It(t,i):"in"===e?new At(t,i):"not-in"===e?new xt(t,i):"array-contains-any"===e?new Rt(t,i):new Mt(t,e,i)}static R(t,e,i){return"in"===e?new Et(t,i):new kt(t,i)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(nt(e,this.value)):null!==e&&et(this.value)===et(e)&&this.P(nt(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class St extends Mt{constructor(t,e,i){super(t,e,i),this.key=tt.fromName(i.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.P(e)}}class Et extends Mt{constructor(t,e){super(t,"in",e),this.keys=Tt("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class kt extends Mt{constructor(t,e){super(t,"not-in",e),this.keys=Tt("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Tt(t,e){var i;return((null===(i=e.arrayValue)||void 0===i?void 0:i.values)||[]).map((t=>tt.fromName(t.referenceValue)))}class It extends Mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ut(e)&&rt(e.arrayValue,this.value)}}class At extends Mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&rt(this.value.arrayValue,e)}}class xt extends Mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(rt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!rt(this.value.arrayValue,e)}}class Rt extends Mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ut(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>rt(this.value.arrayValue,t)))}}class Ct{constructor(t,e){this.position=t,this.before=e}}function Nt(t){return`${t.before?"b":"a"}:${t.position.map((t=>ot(t))).join(",")}`}class Pt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Lt(t,e,i){let r=0;for(let n=0;n<t.position.length;n++){const s=e[n],o=t.position[n];if(r=s.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),i.key):nt(o,i.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Dt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let i=0;i<t.position.length;i++)if(!it(t.position[i],e.position[i]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e=null,i=[],r=[],n=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=r,this.limit=n,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Bt(t,e,i,r,n,s,o,a){return new Ot(t,e,i,r,n,s,o,a)}function jt(t){return new Ot(t)}function qt(t){return!Y(t.limit)&&"F"===t.limitType}function Ut(t){return!Y(t.limit)&&"L"===t.limitType}function Ft(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vt(t){for(const e of t.filters)if(e.v())return e.field;return null}function zt(t){return null!==t.collectionGroup}function Ht(t){const e=b(t);if(null===e.V){e.V=[];const t=Vt(e),i=Ft(e);if(null!==t&&null===i)t.isKeyField()||e.V.push(new Pt(t)),e.V.push(new Pt(F.keyField(),"asc"));else{let t=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Pt(F.keyField(),t))}}}return e.V}function Wt(t){const e=b(t);if(!e.S)if("F"===e.limitType)e.S=vt(e.path,e.collectionGroup,Ht(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ht(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Pt(i.field,e))}const i=e.endAt?new Ct(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Ct(e.startAt.position,!e.startAt.before):null;e.S=vt(e.path,e.collectionGroup,t,e.filters,e.limit,i,r)}return e.S}function Kt(t,e,i){return new Ot(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,i,t.startAt,t.endAt)}function Gt(t,e){return wt(Wt(t),Wt(e))&&t.limitType===e.limitType}function $t(t){return`${bt(Wt(t))}|lt:${t.limitType}`}function Zt(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${ot(e.value)}`})).join(", ")}]`),Y(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: "+Nt(t.startAt)),t.endAt&&(e+=", endAt: "+Nt(t.endAt)),`Target(${e})`}(Wt(t))}; limitType=${t.limitType})`}function Jt(t,e){return e.isFoundDocument()&&function(t,e){const i=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):tt.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(t,e)&&function(t,e){for(const i of t.explicitOrderBy)if(!i.field.isKeyField()&&null===e.data.field(i.field))return!1;return!0}(t,e)&&function(t,e){for(const i of t.filters)if(!i.matches(e))return!1;return!0}(t,e)&&(r=e,!((i=t).startAt&&!Lt(i.startAt,Ht(i),r)||i.endAt&&Lt(i.endAt,Ht(i),r)));var i,r}function Yt(t){return(e,i)=>{let r=!1;for(const n of Ht(t)){const t=Xt(n,e,i);if(0!==t)return t;r=r||n.field.isKeyField()}return 0}}function Xt(t,e,i){const r=t.field.isKeyField()?tt.comparator(e.key,i.key):function(t,e,i){const r=e.data.field(t),n=i.data.field(t);return null!==r&&null!==n?nt(r,n):y()}(t.field,e,i);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:X(e)?"-0":e}}function te(t){return{integerValue:""+t}}function ee(t,e){return Q(e)?te(e):Qt(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this._=void 0}}function re(t,e){var i,r;return t instanceof ue?ht(i=e)||(r=i)&&"doubleValue"in r?e:{integerValue:0}:null}class ne extends ie{}class se extends ie{constructor(t){super(),this.elements=t}}function oe(t,e){const i=ce(e);for(const e of t.elements)i.some((t=>it(t,e)))||i.push(e);return{arrayValue:{values:i}}}class ae extends ie{constructor(t){super(),this.elements=t}}function he(t,e){let i=ce(e);for(const e of t.elements)i=i.filter((t=>!it(t,e)));return{arrayValue:{values:i}}}class ue extends ie{constructor(t,e){super(),this.N=t,this.C=e}}function le(t){return K(t.integerValue||t.doubleValue)}function ce(t){return ut(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.version=t,this.transformResults=e}}class de{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new de}static exists(t){return new de(void 0,t)}static updateTime(t){return new de(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function pe(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class me{}function ge(t,e,i){var r;t instanceof we?function(t,e,i){if(!pe(t.precondition,e))return;const r=t.value.clone(),n=Ee(t.fieldTransforms,i,e);r.setAll(n),e.convertToFoundDocument(be(e),r).setHasLocalMutations()}(t,e,i):t instanceof _e?function(t,e,i){if(!pe(t.precondition,e))return;const r=Ee(t.fieldTransforms,i,e),n=e.data;n.setAll(Me(t)),n.setAll(r),e.convertToFoundDocument(be(e),n).setHasLocalMutations()}(t,e,i):(r=e,pe(t.precondition,r)&&r.convertToNoDocument(L.min()))}function ye(t,e){let i=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),n=re(r.transform,t||null);null!=n&&(null==i&&(i=pt.empty()),i.set(r.field,n))}return i||null}function ve(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(i=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===i&&void 0===r||i&&r&&N(i,r,((t,e)=>{return r=e,(i=t).field.isEqual(r.field)&&(n=i.transform,s=r.transform,n instanceof se&&s instanceof se||n instanceof ae&&s instanceof ae?N(n.elements,s.elements,it):n instanceof ue&&s instanceof ue?it(n.C,s.C):n instanceof ne&&s instanceof ne);var i,r,n,s}))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var i,r}function be(t){return t.isFoundDocument()?t.version:L.min()}class we extends me{constructor(t,e,i,r=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=r,this.type=0}}class _e extends me{constructor(t,e,i,r,n=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=r,this.fieldTransforms=n,this.type=1}}function Me(t){const e=new Map;return t.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const r=t.data.field(i);e.set(i,r)}})),e}function Se(t,e,i){const r=new Map;v(t.length===i.length);for(let a=0;a<i.length;a++){const h=t[a],u=h.transform,l=e.data.field(h.field);r.set(h.field,(n=u,s=l,o=i[a],n instanceof se?oe(n,s):n instanceof ae?he(n,s):o))}var n,s,o;return r}function Ee(t,e,i){const r=new Map;for(const a of t){const t=a.transform,h=i.data.field(a.field);r.set(a.field,(s=h,o=e,(n=t)instanceof ne?function(t,e){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(i.fields.__previous_value__=e),{mapValue:i}}(o,s):n instanceof se?oe(n,s):n instanceof ae?he(n,s):function(t,e){const i=re(t,e),r=le(i)+le(t.C);return ht(i)&&ht(t.C)?te(r):Qt(t.N,r)}(n,s)))}var n,s,o;return r}class ke extends me{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Te extends me{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,xe;function Re(t){switch(t){default:return y();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Ce(t){if(void 0===t)return p("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ae.OK:return w.OK;case Ae.CANCELLED:return w.CANCELLED;case Ae.UNKNOWN:return w.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return w.INTERNAL;case Ae.UNAVAILABLE:return w.UNAVAILABLE;case Ae.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ae.NOT_FOUND:return w.NOT_FOUND;case Ae.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ae.ABORTED:return w.ABORTED;case Ae.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ae.DATA_LOSS:return w.DATA_LOSS;default:return y()}}(xe=Ae||(Ae={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{constructor(t,e){this.comparator=t,this.root=e||Le.EMPTY}insert(t,e){return new Ne(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(t){return new Ne(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Le.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(0===r)return e+i.left.size;r<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pe(this.root,t,this.comparator,!0)}}class Pe{constructor(t,e,i,r){this.isReverse=r,this.nodeStack=[];let n=1;for(;!t.isEmpty();)if(n=e?i(t.key,e):1,r&&(n*=-1),n<0)t=this.isReverse?t.left:t.right;else{if(0===n){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Le{constructor(t,e,i,r,n){this.key=t,this.value=e,this.color=null!=i?i:Le.RED,this.left=null!=r?r:Le.EMPTY,this.right=null!=n?n:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,r,n){return new Le(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=r?r:this.left,null!=n?n:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let r=this;const n=i(t,r.key);return r=n<0?r.copy(null,null,null,r.left.insert(t,e,i),null):0===n?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Le.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1,Le.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,i,r,n){return this}insert(t,e,i){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(t){this.comparator=t,this.data=new Ne(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Oe(this.data.getIterator())}getIteratorFrom(t){return new Oe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof De))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=i.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new De(this.comparator);return e.data=t,e}}class Oe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=new Ne(tt.comparator);function je(){return Be}const qe=new Ne(tt.comparator);function Ue(){return qe}const Fe=new Ne(tt.comparator);function Ve(){return Fe}const ze=new De(tt.comparator);function He(...t){let e=ze;for(const i of t)e=e.add(i);return e}const We=new De(C);function Ke(){return We}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,e,i,r,n){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=n}static createSynthesizedRemoteEventForCurrentChange(t,e){const i=new Map;return i.set(t,$e.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ge(L.min(),i,Ke(),je(),He())}}class $e{constructor(t,e,i,r,n){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=n}static createSynthesizedTargetChangeForCurrentChange(t,e){return new $e(z.EMPTY_BYTE_STRING,e,He(),He(),He())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,e,i,r){this.k=t,this.removedTargetIds=e,this.key=i,this.$=r}}class Je{constructor(t,e){this.targetId=t,this.O=e}}class Ye{constructor(t,e,i=z.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=r}}class Xe{constructor(){this.F=0,this.M=ei(),this.L=z.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=He(),e=He(),i=He();return this.M.forEach(((r,n)=>{switch(n){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:i=i.add(r);break;default:y()}})),new $e(this.L,this.B,t,e,i)}G(){this.U=!1,this.M=ei()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Qe{constructor(t){this.tt=t,this.et=new Map,this.nt=je(),this.st=ti(),this.it=new De(C)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,(e=>{const i=this.ut(e);switch(t.state){case 0:this.ht(e)&&i.j(t.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(t.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(e);break;case 3:this.ht(e)&&(i.Z(),i.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),i.j(t.resumeToken));break;default:y()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach(((t,i)=>{this.ht(i)&&e(i)}))}ft(t){const e=t.targetId,i=t.O.count,r=this.dt(e);if(r){const t=r.target;if(_t(t))if(0===i){const i=new tt(t.path);this.at(e,i,gt.newNoDocument(i,L.min()))}else v(1===i);else this.wt(e)!==i&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach(((i,r)=>{const n=this.dt(r);if(n){if(i.current&&_t(n.target)){const e=new tt(n.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,gt.newNoDocument(e,t))}i.K&&(e.set(r,i.W()),i.G())}}));let i=He();this.st.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(i=i.add(t))}));const r=new Ge(t,e,this.it,this.nt,i);return this.nt=je(),this.st=ti(),this.it=new De(C),r}ot(t,e){if(!this.ht(t))return;const i=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,i),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,i){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),i&&(this.nt=this.nt.insert(e,i))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new Xe,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new De(C),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||d("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new Xe),this.tt.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function ti(){return new Ne(tt.comparator)}function ei(){return new Ne(tt.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={asc:"ASCENDING",desc:"DESCENDING"},ri={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class ni{constructor(t,e){this.databaseId=t,this.D=e}}function si(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oi(t,e){return t.D?e.toBase64():e.toUint8Array()}function ai(t,e){return si(t,e.toTimestamp())}function hi(t){return v(!!t),L.fromTimestamp(function(t){const e=W(t);return new P(e.seconds,e.nanos)}(t))}function ui(t,e){return(i=t,new q(["projects",i.projectId,"databases",i.database])).child("documents").child(e).canonicalString();var i}function li(t){const e=q.fromString(t);return v(Ni(e)),e}function ci(t,e){return ui(t.databaseId,e.path)}function fi(t,e){const i=li(e);if(i.get(1)!==t.databaseId.projectId)throw new _(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+t.databaseId.projectId);if(i.get(3)!==t.databaseId.database)throw new _(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+t.databaseId.database);return new tt(gi(i))}function di(t,e){return ui(t.databaseId,e)}function pi(t){const e=li(t);return 4===e.length?q.emptyPath():gi(e)}function mi(t){return new q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gi(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function yi(t,e,i){return{name:ci(t,e),fields:i.value.mapValue.fields}}function vi(t,e){let i;if(e instanceof we)i={update:yi(t,e.key,e.value)};else if(e instanceof ke)i={delete:ci(t,e.key)};else if(e instanceof _e)i={update:yi(t,e.key,e.data),updateMask:Ci(e.fieldMask)};else{if(!(e instanceof Te))return y();i={verify:ci(t,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const i=e.transform;if(i instanceof ne)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(i instanceof se)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:i.elements}};if(i instanceof ae)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:i.elements}};if(i instanceof ue)return{fieldPath:e.field.canonicalString(),increment:i.C};throw y()}(0,t)))),e.precondition.isNone||(i.currentDocument=(r=t,void 0!==(n=e.precondition).updateTime?{updateTime:ai(r,n.updateTime)}:void 0!==n.exists?{exists:n.exists}:y())),i;var r,n}function bi(t,e){return{documents:[di(t,e.path)]}}function wi(t,e){const i={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(i.parent=di(t,r),i.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i.parent=di(t,r.popLast()),i.structuredQuery.from=[{collectionId:r.lastSegment()}]);const n=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(ct(t.value))return{unaryFilter:{field:Ii(t.field),op:"IS_NAN"}};if(lt(t.value))return{unaryFilter:{field:Ii(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ct(t.value))return{unaryFilter:{field:Ii(t.field),op:"IS_NOT_NAN"}};if(lt(t.value))return{unaryFilter:{field:Ii(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ii(t.field),op:Ti(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);n&&(i.structuredQuery.where=n);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Ii((e=t).field),direction:ki(e.dir)};var e}))}(e.orderBy);s&&(i.structuredQuery.orderBy=s);const o=(a=t,h=e.limit,a.D||Y(h)?h:{value:h});var a,h;return null!==o&&(i.structuredQuery.limit=o),e.startAt&&(i.structuredQuery.startAt=Si(e.startAt)),e.endAt&&(i.structuredQuery.endAt=Si(e.endAt)),i}function _i(t){let e=pi(t.parent);const i=t.structuredQuery,r=i.from?i.from.length:0;let n=null;if(r>0){v(1===r);const t=i.from[0];t.allDescendants?n=t.collectionId:e=e.child(t.collectionId)}let s=[];i.where&&(s=Mi(i.where));let o=[];i.orderBy&&(o=i.orderBy.map((t=>{return new Pt(Ai((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;i.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Y(e)?null:e}(i.limit));let h=null;i.startAt&&(h=Ei(i.startAt));let u=null;return i.endAt&&(u=Ei(i.endAt)),Bt(e,n,o,s,a,"F",h,u)}function Mi(t){return t?void 0!==t.unaryFilter?[Ri(t)]:void 0!==t.fieldFilter?[xi(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Mi(t))).reduce(((t,e)=>t.concat(e))):y():[]}function Si(t){return{before:t.before,values:t.position}}function Ei(t){const e=!!t.before,i=t.values||[];return new Ct(i,e)}function ki(t){return ii[t]}function Ti(t){return ri[t]}function Ii(t){return{fieldPath:t.canonicalString()}}function Ai(t){return F.fromServerFormat(t.fieldPath)}function xi(t){return Mt.create(Ai(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ri(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ai(t.unaryFilter.field);return Mt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const i=Ai(t.unaryFilter.field);return Mt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ai(t.unaryFilter.field);return Mt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const n=Ai(t.unaryFilter.field);return Mt.create(n,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Ci(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ni(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){let e="";for(let i=0;i<t.length;i++)e.length>0&&(e=Di(e)),e=Li(t.get(i),e);return Di(e)}function Li(t,e){let i=e;const r=t.length;for(let e=0;e<r;e++){const r=t.charAt(e);switch(r){case"\0":i+="";break;case"":i+="";break;default:i+=r}}return i}function Di(t){return t+""}class Oi{constructor(t,e,i){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=i}}Oi.store="owner",Oi.key="owner";class Bi{constructor(t,e,i){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=i}}Bi.store="mutationQueues",Bi.keyPath="userId";class ji{constructor(t,e,i,r,n){this.userId=t,this.batchId=e,this.localWriteTimeMs=i,this.baseMutations=r,this.mutations=n}}ji.store="mutations",ji.keyPath="batchId",ji.userMutationsIndex="userMutationsIndex",ji.userMutationsKeyPath=["userId","batchId"];class qi{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Pi(e)]}static key(t,e,i){return[t,Pi(e),i]}}qi.store="documentMutations",qi.PLACEHOLDER=new qi;class Ui{constructor(t,e,i,r,n,s){this.unknownDocument=t,this.noDocument=e,this.document=i,this.hasCommittedMutations=r,this.readTime=n,this.parentPath=s}}Ui.store="remoteDocuments",Ui.readTimeIndex="readTimeIndex",Ui.readTimeIndexPath="readTime",Ui.collectionReadTimeIndex="collectionReadTimeIndex",Ui.collectionReadTimeIndexPath=["parentPath","readTime"];class Fi{constructor(t){this.byteSize=t}}Fi.store="remoteDocumentGlobal",Fi.key="remoteDocumentGlobalKey";class Vi{constructor(t,e,i,r,n,s,o){this.targetId=t,this.canonicalId=e,this.readTime=i,this.resumeToken=r,this.lastListenSequenceNumber=n,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Vi.store="targets",Vi.keyPath="targetId",Vi.queryTargetsIndexName="queryTargetsIndex",Vi.queryTargetsKeyPath=["canonicalId","targetId"];class zi{constructor(t,e,i){this.targetId=t,this.path=e,this.sequenceNumber=i}}zi.store="targetDocuments",zi.keyPath=["targetId","path"],zi.documentTargetsIndex="documentTargetsIndex",zi.documentTargetsKeyPath=["path","targetId"];class Hi{constructor(t,e,i,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=i,this.targetCount=r}}Hi.key="targetGlobalKey",Hi.store="targetGlobal";class Wi{constructor(t,e){this.collectionId=t,this.parent=e}}Wi.store="collectionParents",Wi.keyPath=["collectionId","parent"];class Ki{constructor(t,e,i,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=i,this.inForeground=r}}Ki.store="clientMetadata",Ki.keyPath="clientId";class Gi{constructor(t,e,i){this.bundleId=t,this.createTime=e,this.version=i}}Gi.store="bundles",Gi.keyPath="bundleId";class $i{constructor(t,e,i){this.name=t,this.readTime=e,this.bundledQuery=i}}$i.store="namedQueries",$i.keyPath="name";Bi.store,ji.store,qi.store,Ui.store,Vi.store,Oi.store,Hi.store,zi.store,Ki.store,Fi.store,Wi.store,Gi.store,$i.store;const Zi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ji{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Yi(((i,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(i,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(i,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Yi?e:Yi.resolve(e)}catch(t){return Yi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Yi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Yi.reject(e)}static resolve(t){return new Yi(((e,i)=>{e(t)}))}static reject(t){return new Yi(((e,i)=>{i(t)}))}static waitFor(t){return new Yi(((e,i)=>{let r=0,n=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++n,s&&n===r&&e()}),(t=>i(t)))})),s=!0,n===r&&e()}))}static or(t){let e=Yi.resolve(!1);for(const i of t)e=e.next((t=>t?Yi.resolve(t):i()));return e}static forEach(t,e){const i=[];return t.forEach(((t,r)=>{i.push(e.call(this,t,r))})),this.waitFor(i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi{constructor(t,e,i,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const a=this.mutations[e];a.key.isEqual(t.key)&&(r=a,n=t,s=i[e],o=void 0,r instanceof we?function(t,e,i){const r=t.value.clone(),n=Se(t.fieldTransforms,e,i.transformResults);r.setAll(n),e.convertToFoundDocument(i.version,r).setHasCommittedMutations()}(r,n,s):r instanceof _e?function(t,e,i){if(!pe(t.precondition,e))return void e.convertToUnknownDocument(i.version);const r=Se(t.fieldTransforms,e,i.transformResults),n=e.data;n.setAll(Me(t)),n.setAll(r),e.convertToFoundDocument(i.version,n).setHasCommittedMutations()}(r,n,s):(o=s,n.convertToNoDocument(o.version).setHasCommittedMutations()))}var r,n,s,o}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&ge(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&ge(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const i=t.get(e.key),r=i;this.applyToLocalView(r),i.isValidDocument()||r.convertToNoDocument(L.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),He())}isEqual(t){return this.batchId===t.batchId&&N(this.mutations,t.mutations,((t,e)=>ve(t,e)))&&N(this.baseMutations,t.baseMutations,((t,e)=>ve(t,e)))}}class tr{constructor(t,e,i,r){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=r}static from(t,e,i){v(t.mutations.length===i.length);let r=Ve();const n=t.mutations;for(let t=0;t<n.length;t++)r=r.insert(n[t].key,i[t].version);return new tr(t,e,i,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e,i,r,n=L.min(),s=L.min(),o=z.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=n,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new er(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t){this.Wt=t}}function rr(t){const e=_i({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Kt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(){this.Gt=new sr}addToCollectionParentIndex(t,e){return this.Gt.add(e),Yi.resolve()}getCollectionParents(t,e){return Yi.resolve(this.Gt.getEntries(e))}}class sr{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e]||new De(q.comparator),n=!r.has(i);return this.index[e]=r.add(i),n}has(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e];return r&&r.has(i)}getEntries(t){return(this.index[t]||new De(q.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}static withCacheSize(t){return new or(t,or.DEFAULT_COLLECTION_PERCENTILE,or.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or.DEFAULT_COLLECTION_PERCENTILE=10,or.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,or.DEFAULT=new or(41943040,or.DEFAULT_COLLECTION_PERCENTILE,or.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),or.DISABLED=new or(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new ar(0)}static ie(){return new ar(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function hr(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==Zi)throw t;d("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(void 0!==i)for(const[e,r]of i)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const i=this.mapKeyFn(t),r=this.inner[i];if(void 0!==r){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e])}else this.inner[i]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(void 0===i)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return 1===i.length?delete this.inner[e]:i.splice(r,1),!0;return!1}forEach(t){O(this.inner,((e,i)=>{for(const[e,r]of i)t(e,r)}))}isEmpty(){return B(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.changes=new ur((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:L.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:gt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return void 0!==i?Yi.resolve(i.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cr{constructor(t,e,i){this.He=t,this.In=e,this.Ht=i}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next((i=>this.Rn(t,e,i)))}Rn(t,e,i){return this.He.getEntry(t,e).next((t=>{for(const e of i)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,i)=>{for(const t of e)t.applyToLocalView(i)}))}Pn(t,e){return this.He.getEntries(t,e).next((e=>this.vn(t,e).next((()=>e))))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,i){return r=e,tt.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Vn(t,e.path):zt(e)?this.Sn(t,e,i):this.Dn(t,e,i);var r}Vn(t,e){return this.An(t,new tt(e)).next((t=>{let e=Ue();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Sn(t,e,i){const r=e.collectionGroup;let n=Ue();return this.Ht.getCollectionParents(t,r).next((s=>Yi.forEach(s,(s=>{const o=(a=e,h=s.child(r),new Ot(h,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,h;return this.Dn(t,o,i).next((t=>{t.forEach(((t,e)=>{n=n.insert(t,e)}))}))})).next((()=>n))))}Dn(t,e,i){let r,n;return this.He.getDocumentsMatchingQuery(t,e,i).next((i=>(r=i,this.In.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(n=e,this.Cn(t,n,r).next((t=>{r=t;for(const t of n)for(const e of t.mutations){const i=e.key;let n=r.get(i);null==n&&(n=gt.newInvalidDocument(i),r=r.insert(i,n)),ge(e,n,t.localWriteTime),n.isFoundDocument()||(r=r.remove(i))}}))))).next((()=>(r.forEach(((t,i)=>{Jt(e,i)||(r=r.remove(t))})),r)))}Cn(t,e,i){let r=He();for(const t of e)for(const e of t.mutations)e instanceof _e&&null===i.get(e.key)&&(r=r.add(e.key));let n=i;return this.He.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(n=n.insert(t,e))})),n)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e,i,r){this.targetId=t,this.fromCache=e,this.Nn=i,this.xn=r}static kn(t,e){let i=He(),r=He();for(const t of e.docChanges)switch(t.type){case 0:i=i.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new fr(t,e.fromCache,i,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,i,r){return 0===(n=e).filters.length&&null===n.limit&&null==n.startAt&&null==n.endAt&&(0===n.explicitOrderBy.length||1===n.explicitOrderBy.length&&n.explicitOrderBy[0].field.isKeyField())||i.isEqual(L.min())?this.Fn(t,e):this.On.Pn(t,r).next((n=>{const s=this.Mn(e,n);return(qt(e)||Ut(e))&&this.Ln(e.limitType,s,r,i)?this.Fn(t,e):(f()<=o.LogLevel.DEBUG&&d("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zt(e)),this.On.getDocumentsMatchingQuery(t,e,i).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var n}Mn(t,e){let i=new De(Yt(t));return e.forEach(((e,r)=>{Jt(t,r)&&(i=i.add(r))})),i}Ln(t,e,i,r){if(i.size!==e.size)return!0;const n="F"===t?e.last():e.first();return!!n&&(n.hasPendingWrites||n.version.compareTo(r)>0)}Fn(t,e){return f()<=o.LogLevel.DEBUG&&d("QueryEngine","Using full collection scan to execute query:",Zt(e)),this.On.getDocumentsMatchingQuery(t,e,L.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,i,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new Ne(C),this.qn=new ur((t=>bt(t)),wt),this.Kn=L.min(),this.In=t.getMutationQueue(i),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new cr(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Un)))}}function mr(t,e,i,r){return new pr(t,e,i,r)}async function gr(t,e){const i=b(t);let r=i.In,n=i.Qn;const s=await i.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return i.In.getAllMutationBatches(t).next((o=>(s=o,r=i.persistence.getMutationQueue(e),n=new cr(i.jn,r,i.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=He();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.Pn(t,o).next((t=>({Wn:t,removedBatchIds:i,addedBatchIds:r})))}))}));return i.In=r,i.Qn=n,i.Bn.$n(i.Qn),s}function yr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ze.getLastRemoteSnapshotVersion(t)))}function vr(t,e,i,r,n){let s=He();return i.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=je();return i.forEach(((i,o)=>{const a=t.get(i),h=(null==n?void 0:n.get(i))||r;o.isNoDocument()&&o.version.isEqual(L.min())?(e.removeEntry(i,h),s=s.insert(i,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,h),s=s.insert(i,o)):d("LocalStore","Ignoring outdated watch update for ",i,". Current version:",a.version," Watch version:",o.version)})),s}))}function br(t,e){const i=b(t);return i.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),i.In.getNextMutationBatchAfterBatchId(t,e))))}function wr(t,e){const i=b(t);return i.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return i.ze.getTargetData(t,e).next((n=>n?(r=n,Yi.resolve(r)):i.ze.allocateTargetId(t).next((n=>(r=new er(e,n,0,t.currentSequenceNumber),i.ze.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=i.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(i.Un=i.Un.insert(t.targetId,t),i.qn.set(e,t.targetId)),t}))}async function _r(t,e,i){const r=b(t),n=r.Un.get(e),s=i?"readwrite":"readwrite-primary";try{i||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,n)))}catch(t){if(!Xi(t))throw t;d("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(n.target)}function Mr(t,e,i){const r=b(t);let n=L.min(),s=He();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,i){const r=b(t),n=r.qn.get(i);return void 0!==n?Yi.resolve(r.Un.get(n)):r.ze.getTargetData(e,i)}(r,t,Wt(e)).next((e=>{if(e)return n=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Bn.getDocumentsMatchingQuery(t,e,i?n:L.min(),i?s:He()))).next((t=>({documents:t,Gn:s})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sr{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Yi.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var i;return this.Yn.set(e.id,{id:(i=e).id,version:i.version,createTime:hi(i.createTime)}),Yi.resolve()}getNamedQuery(t,e){return Yi.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,{name:(i=e).name,query:rr(i.bundledQuery),readTime:hi(i.readTime)}),Yi.resolve();var i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.Zn=new De(kr.ts),this.es=new De(kr.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const i=new kr(t,e);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new kr(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}cs(t){const e=new tt(new q([])),i=new kr(e,t),r=new kr(e,t+1),n=[];return this.es.forEachInRange([i,r],(t=>{this.rs(t),n.push(t.key)})),n}us(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new tt(new q([])),i=new kr(e,t),r=new kr(e,t+1);let n=He();return this.es.forEachInRange([i,r],(t=>{n=n.add(t.key)})),n}containsKey(t){const e=new kr(t,0),i=this.Zn.firstAfterOrEqual(e);return null!==i&&t.isEqual(i.key)}}class kr{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return tt.comparator(t.key,e.key)||C(t.ls,e.ls)}static ns(t,e){return C(t.ls,e.ls)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new De(kr.ts)}checkEmpty(t){return Yi.resolve(0===this.In.length)}addMutationBatch(t,e,i,r){const n=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Qi(n,e,i,r);this.In.push(s);for(const e of r)this.ds=this.ds.add(new kr(e.key,n)),this.Ht.addToCollectionParentIndex(t,e.key.path.popLast());return Yi.resolve(s)}lookupMutationBatch(t,e){return Yi.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,r=this._s(i),n=r<0?0:r;return Yi.resolve(this.In.length>n?this.In[n]:null)}getHighestUnacknowledgedBatchId(){return Yi.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Yi.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new kr(e,0),r=new kr(e,Number.POSITIVE_INFINITY),n=[];return this.ds.forEachInRange([i,r],(t=>{const e=this.ws(t.ls);n.push(e)})),Yi.resolve(n)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new De(C);return e.forEach((t=>{const e=new kr(t,0),r=new kr(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{i=i.add(t.ls)}))})),Yi.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,r=i.length+1;let n=i;tt.isDocumentKey(n)||(n=n.child(""));const s=new kr(new tt(n),0);let o=new De(C);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!i.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),Yi.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const i=this.ws(t);null!==i&&e.push(i)})),e}removeMutationBatch(t,e){v(0===this.ys(e.batchId,"removed")),this.In.shift();let i=this.ds;return Yi.forEach(e.mutations,(r=>{const n=new kr(r.key,e.batchId);return i=i.delete(n),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=i}))}te(t){}containsKey(t,e){const i=new kr(e,0),r=this.ds.firstAfterOrEqual(i);return Yi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,Yi.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Ne(tt.comparator),this.size=0}addEntry(t,e,i){const r=e.key,n=this.docs.get(r),s=n?n.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:i}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return Yi.resolve(i?i.document.clone():gt.newInvalidDocument(e))}getEntries(t,e){let i=je();return e.forEach((t=>{const e=this.docs.get(t);i=i.insert(t,e?e.document.clone():gt.newInvalidDocument(t))})),Yi.resolve(i)}getDocumentsMatchingQuery(t,e,i){let r=je();const n=new tt(e.path.child("")),s=this.docs.getIteratorFrom(n);for(;s.hasNext();){const{key:t,value:{document:n,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(i)<=0||Jt(e,n)&&(r=r.insert(n.key,n.clone()))}return Yi.resolve(r)}Es(t,e){return Yi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ar(this)}getSize(t){return Yi.resolve(this.size)}}class Ar extends lr{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach(((i,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(i))):this.Se.removeEntry(i)})),Yi.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.persistence=t,this.Ts=new ur((t=>bt(t)),wt),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Is=0,this.As=new Er,this.targetCount=0,this.Rs=ar.se()}forEachTarget(t,e){return this.Ts.forEach(((t,i)=>e(i))),Yi.resolve()}getLastRemoteSnapshotVersion(t){return Yi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Yi.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Yi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Is&&(this.Is=e),Yi.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new ar(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Yi.resolve()}updateTargetData(t,e){return this.ae(e),Yi.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Yi.resolve()}removeTargets(t,e,i){let r=0;const n=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===i.get(o.targetId)&&(this.Ts.delete(s),n.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Yi.waitFor(n).next((()=>r))}getTargetCount(t){return Yi.resolve(this.targetCount)}getTargetData(t,e){const i=this.Ts.get(e)||null;return Yi.resolve(i)}addMatchingKeys(t,e,i){return this.As.ss(e,i),Yi.resolve()}removeMatchingKeys(t,e,i){this.As.os(e,i);const r=this.persistence.referenceDelegate,n=[];return r&&e.forEach((e=>{n.push(r.markPotentiallyOrphaned(t,e))})),Yi.waitFor(n)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Yi.resolve()}getMatchingKeysForTargetId(t,e){const i=this.As.hs(e);return Yi.resolve(i)}containsKey(t,e){return Yi.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e){var i,r;this.bs={},this.Le=new A(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new xr(this),this.Ht=new nr,this.He=(i=this.Ht,r=t=>this.referenceDelegate.Ps(t),new Ir(i,r)),this.N=new ir(e),this.Je=new Sr(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Tr(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,i){d("MemoryPersistence","Starting transaction:",t);const r=new Cr(this.Le.next());return this.referenceDelegate.vs(),i(r).next((t=>this.referenceDelegate.Vs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ss(t,e){return Yi.or(Object.values(this.bs).map((i=>()=>i.containsKey(t,e))))}}class Cr extends Ji{constructor(t){super(),this.currentSequenceNumber=t}}class Nr{constructor(t){this.persistence=t,this.Ds=new Er,this.Cs=null}static Ns(t){return new Nr(t)}get xs(){if(this.Cs)return this.Cs;throw y()}addReference(t,e,i){return this.Ds.addReference(i,e),this.xs.delete(i.toString()),Yi.resolve()}removeReference(t,e,i){return this.Ds.removeReference(i,e),this.xs.add(i.toString()),Yi.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Yi.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach((t=>this.xs.add(t.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>i.removeTargetData(t,e)))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Yi.forEach(this.xs,(i=>{const r=tt.fromPath(i);return this.ks(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Cs=null,e.apply(t))))}updateLimboDocument(t,e){return this.ks(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}Ps(t){return 0}ks(t,e){return Yi.or([()=>Yi.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.activeTargetIds=Ke()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Lr{constructor(){this.yi=new Pr,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,i){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new Pr,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,i,r){const n=this.Bi(t,e);d("RestConnection","Sending: ",n,i);const s={};return this.Ui(s,r),this.qi(t,n,s,i).then((t=>(d("RestConnection","Received: ",t),t)),(e=>{throw m("RestConnection",`${t} failed with error: `,e,"url: ",n,"request:",i),e}))}Ki(t,e,i,r){return this.Li(t,e,i,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const i in e.authHeaders)e.authHeaders.hasOwnProperty(i)&&(t[i]=e.authHeaders[i])}Bi(t,e){const i=Br[t];return`${this.Fi}/v1/${e}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,i,r){return new Promise(((n,s)=>{const o=new h.XhrIo;o.listenOnce(h.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case h.ErrorCode.NO_ERROR:const e=o.getResponseJson();d("Connection","XHR received:",JSON.stringify(e)),n(e);break;case h.ErrorCode.TIMEOUT:d("Connection",'RPC "'+t+'" timed out'),s(new _(w.DEADLINE_EXCEEDED,"Request time out"));break;case h.ErrorCode.HTTP_ERROR:const i=o.getStatus();if(d("Connection",'RPC "'+t+'" failed with status:',i,"response text:",o.getResponseText()),i>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);s(new _(e,t.message))}else s(new _(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new _(w.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{d("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,i,15)}))}ji(t,e){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=h.createWebChannelTransport(),n=h.getStatEventTarget(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new h.FetchXmlHttpFactory({})),this.Ui(s.initMessageHeaders,e),a.isMobileCordova()||a.isReactNative()||a.isElectron()||a.isIE()||a.isUWP()||a.isBrowserExtension()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=i.join("");d("Connection","Creating WebChannel: "+o,s);const u=r.createWebChannel(o,s);let l=!1,c=!1;const f=new jr({vi:t=>{c?d("Connection","Not sending because WebChannel is closed:",t):(l||(d("Connection","Opening WebChannel transport."),u.open(),l=!0),d("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),p=(t,e,i)=>{t.listen(e,(t=>{try{i(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,h.WebChannel.EventType.OPEN,(()=>{c||d("Connection","WebChannel transport opened.")})),p(u,h.WebChannel.EventType.CLOSE,(()=>{c||(c=!0,d("Connection","WebChannel transport closed"),f.$i())})),p(u,h.WebChannel.EventType.ERROR,(t=>{c||(c=!0,m("Connection","WebChannel transport errored:",t),f.$i(new _(w.UNAVAILABLE,"The operation could not be completed")))})),p(u,h.WebChannel.EventType.MESSAGE,(t=>{var e;if(!c){const i=t.data[0];v(!!i);const r=i,n=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(n){d("Connection","WebChannel received error:",n);const t=n.status;let e=function(t){const e=Ae[t];if(void 0!==e)return Ce(e)}(t),i=n.message;void 0===e&&(e=w.INTERNAL,i="Unknown error status: "+t+" with message "+n.message),c=!0,f.$i(new _(e,i)),u.close()}else d("Connection","WebChannel received:",i),f.Oi(i)}})),p(n,h.Event.STAT_EVENT,(t=>{t.stat===h.Stat.PROXY?d("Connection","Detected buffering proxy"):t.stat===h.Stat.NOPROXY&&d("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.ki()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){return new ni(t,!0)}class Vr{constructor(t,e,i=1e3,r=1.5,n=6e4){this.Oe=t,this.timerId=e,this.Qi=i,this.Wi=r,this.Gi=n,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-i);r>0&&d("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),t()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,e,i,r,n,s){this.Oe=t,this.er=i,this.nr=r,this.credentialsProvider=n,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Vr(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===w.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then((t=>{this.sr===e&&this.yr(t)}),(e=>{t((()=>{const t=new _(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)}))}))}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si((()=>{e((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((t=>{e((()=>this.pr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(t){return d("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget((()=>this.sr===t?e():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Hr extends zr{constructor(t,e,i,r,n){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,i,n),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=function(t,e){let i;if("targetChange"in e){e.targetChange;const n="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:y(),s=e.targetChange.targetIds||[],o=function(t,e){return t.D?(v(void 0===e||"string"==typeof e),z.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),z.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,h=a&&function(t){const e=void 0===t.code?w.UNKNOWN:Ce(t.code);return new _(e,t.message||"")}(a);i=new Ye(n,s,o,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const n=fi(t,r.document.name),s=hi(r.document.updateTime),o=new pt({mapValue:{fields:r.document.fields}}),a=gt.newFoundDocument(n,s,o),h=r.targetIds||[],u=r.removedTargetIds||[];i=new Ze(h,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const n=fi(t,r.document),s=r.readTime?hi(r.readTime):L.min(),o=gt.newNoDocument(n,s),a=r.removedTargetIds||[];i=new Ze([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const n=fi(t,r.document),s=r.removedTargetIds||[];i=new Ze([],s,n,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,n=new Ie(r),s=t.targetId;i=new Je(s,n)}}var r;return i}(this.N,t),i=function(t){if(!("targetChange"in t))return L.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?L.min():e.readTime?hi(e.readTime):L.min()}(t);return this.listener.Tr(e,i)}Ir(t){const e={};e.database=mi(this.N),e.addTarget=function(t,e){let i;const r=e.target;return i=_t(r)?{documents:bi(t,r)}:{query:wi(t,r)},i.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?i.resumeToken=oi(t,e.resumeToken):e.snapshotVersion.compareTo(L.min())>0&&(i.readTime=si(t,e.snapshotVersion.toTimestamp())),i}(this.N,t);const i=function(t,e){const i=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==i?null:{"goog-listen-tags":i}}(this.N,t);i&&(e.labels=i),this.wr(e)}Ar(t){const e={};e.database=mi(this.N),e.removeTarget=t,this.wr(e)}}class Wr extends zr{constructor(t,e,i,r,n){super(t,"write_stream_connection_backoff","write_stream_idle",e,i,n),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const r=(e=t.writeResults,i=t.commitTime,e&&e.length>0?(v(void 0!==i),e.map((t=>function(t,e){let i=t.updateTime?hi(t.updateTime):hi(e);return i.isEqual(L.min())&&(i=hi(e)),new fe(i,t.transformResults||[])}(t,i)))):[]),n=hi(t.commitTime);return this.listener.vr(n,r)}var e,i;return v(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=mi(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>vi(this.N,t)))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends class{}{constructor(t,e,i){super(),this.credentials=t,this.nr=e,this.N=i,this.Dr=!1}Cr(){if(this.Dr)throw new _(w.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,i){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(t,e,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new _(w.UNKNOWN,t.toString())}))}Ki(t,e,i){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(t,e,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new _(w.UNKNOWN,t.toString())}))}terminate(){this.Dr=!0}}class Gr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(p(e),this.$r=!1):d("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e,i,r,n){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=n,this.Qr.Ei((t=>{i.enqueueAndForget((async()=>{nn(this)&&(d("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.Kr.add(4),await Jr(e),e.Wr.set("Unknown"),e.Kr.delete(4),await Zr(e)}(this))}))})),this.Wr=new Gr(i,r)}}async function Zr(t){if(nn(t))for(const e of t.jr)await e(!0)}async function Jr(t){for(const e of t.jr)await e(!1)}function Yr(t,e){const i=b(t);i.qr.has(e.targetId)||(i.qr.set(e.targetId,e),rn(i)?en(i):_n(i).cr()&&Qr(i,e))}function Xr(t,e){const i=b(t),r=_n(i);i.qr.delete(e),r.cr()&&tn(i,e),0===i.qr.size&&(r.cr()?r.lr():nn(i)&&i.Wr.set("Unknown"))}function Qr(t,e){t.Gr.Y(e.targetId),_n(t).Ir(e)}function tn(t,e){t.Gr.Y(e),_n(t).Ar(e)}function en(t){t.Gr=new Qe({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),_n(t).start(),t.Wr.Or()}function rn(t){return nn(t)&&!_n(t).ar()&&t.qr.size>0}function nn(t){return 0===b(t).Kr.size}function sn(t){t.Gr=void 0}async function on(t){t.qr.forEach(((e,i)=>{Qr(t,e)}))}async function an(t,e){sn(t),rn(t)?(t.Wr.Lr(e),en(t)):t.Wr.set("Unknown")}async function hn(t,e,i){if(t.Wr.set("Online"),e instanceof Ye&&2===e.state&&e.cause)try{await async function(t,e){const i=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,i),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(i){d("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await un(t,i)}else if(e instanceof Ze?t.Gr.rt(e):e instanceof Je?t.Gr.ft(e):t.Gr.ct(e),!i.isEqual(L.min()))try{const e=await yr(t.localStore);i.compareTo(e)>=0&&await function(t,e){const i=t.Gr._t(e);return i.targetChanges.forEach(((i,r)=>{if(i.resumeToken.approximateByteSize()>0){const n=t.qr.get(r);n&&t.qr.set(r,n.withResumeToken(i.resumeToken,e))}})),i.targetMismatches.forEach((e=>{const i=t.qr.get(e);if(!i)return;t.qr.set(e,i.withResumeToken(z.EMPTY_BYTE_STRING,i.snapshotVersion)),tn(t,e);const r=new er(i.target,e,1,i.sequenceNumber);Qr(t,r)})),t.remoteSyncer.applyRemoteEvent(i)}(t,i)}catch(e){d("RemoteStore","Failed to raise snapshot:",e),await un(t,e)}}async function un(t,e,i){if(!Xi(e))throw e;t.Kr.add(1),await Jr(t),t.Wr.set("Offline"),i||(i=()=>yr(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{d("RemoteStore","Retrying IndexedDB access"),await i(),t.Kr.delete(1),await Zr(t)}))}function ln(t,e){return e().catch((i=>un(t,i,e)))}async function cn(t){const e=b(t),i=Mn(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;fn(e);)try{const t=await br(e.localStore,r);if(null===t){0===e.Ur.length&&i.lr();break}r=t.batchId,dn(e,t)}catch(t){await un(e,t)}pn(e)&&mn(e)}function fn(t){return nn(t)&&t.Ur.length<10}function dn(t,e){t.Ur.push(e);const i=Mn(t);i.cr()&&i.br&&i.Pr(e.mutations)}function pn(t){return nn(t)&&!Mn(t).ar()&&t.Ur.length>0}function mn(t){Mn(t).start()}async function gn(t){Mn(t).Sr()}async function yn(t){const e=Mn(t);for(const i of t.Ur)e.Pr(i.mutations)}async function vn(t,e,i){const r=t.Ur.shift(),n=tr.from(r,e,i);await ln(t,(()=>t.remoteSyncer.applySuccessfulWrite(n))),await cn(t)}async function bn(t,e){e&&Mn(t).br&&await async function(t,e){if(Re(i=e.code)&&i!==w.ABORTED){const i=t.Ur.shift();Mn(t).hr(),await ln(t,(()=>t.remoteSyncer.rejectFailedWrite(i.batchId,e))),await cn(t)}var i}(t,e),pn(t)&&mn(t)}async function wn(t,e){const i=b(t);e?(i.Kr.delete(2),await Zr(i)):e||(i.Kr.add(2),await Jr(i),i.Wr.set("Unknown"))}function _n(t){return t.zr||(t.zr=function(t,e,i){const r=b(t);return r.Cr(),new Hr(e,r.nr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:on.bind(null,t),Ci:an.bind(null,t),Tr:hn.bind(null,t)}),t.jr.push((async e=>{e?(t.zr.hr(),rn(t)?en(t):t.Wr.set("Unknown")):(await t.zr.stop(),sn(t))}))),t.zr}function Mn(t){return t.Hr||(t.Hr=function(t,e,i){const r=b(t);return r.Cr(),new Wr(e,r.nr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:gn.bind(null,t),Ci:bn.bind(null,t),Vr:yn.bind(null,t),vr:vn.bind(null,t)}),t.jr.push((async e=>{e?(t.Hr.hr(),await cn(t)):(await t.Hr.stop(),t.Ur.length>0&&(d("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))}))),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Sn{constructor(t,e,i,r,n){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=r,this.removalCallback=n,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,i,r,n){const s=Date.now()+i,o=new Sn(t,e,s,r,n);return o.start(i),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function En(t,e){if(p("AsyncQueue",`${e}: ${t}`),Xi(t))return new _(w.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t){this.comparator=t?(e,i)=>t(e,i)||tt.comparator(e.key,i.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=Ue(),this.sortedSet=new Ne(this.comparator)}static emptySet(t){return new kn(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,i)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof kn))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=i.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const i=new kn;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.Jr=new Ne(tt.comparator)}track(t){const e=t.doc.key,i=this.Jr.get(e);i?0!==t.type&&3===i.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==i.type?this.Jr=this.Jr.insert(e,{type:i.type,doc:t.doc}):2===t.type&&2===i.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===i.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===i.type?this.Jr=this.Jr.remove(e):1===t.type&&2===i.type?this.Jr=this.Jr.insert(e,{type:1,doc:i.doc}):0===t.type&&1===i.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):y():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal(((e,i)=>{t.push(i)})),t}}class In{constructor(t,e,i,r,n,s,o,a){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=n,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,i,r){const n=[];return e.forEach((t=>{n.push({type:0,doc:t})})),new In(t,e,kn.emptySet(e),n,i,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Gt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==i[t].type||!e[t].doc.isEqual(i[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.Xr=void 0,this.listeners=[]}}class xn{constructor(){this.queries=new ur((t=>$t(t)),Gt),this.onlineState="Unknown",this.Zr=new Set}}async function Rn(t,e){const i=b(t),r=e.query;let n=!1,s=i.queries.get(r);if(s||(n=!0,s=new An),n)try{s.Xr=await i.onListen(r)}catch(t){const i=En(t,`Initialization of query '${Zt(e.query)}' failed`);return void e.onError(i)}i.queries.set(r,s),s.listeners.push(e),e.eo(i.onlineState),s.Xr&&e.no(s.Xr)&&Ln(i)}async function Cn(t,e){const i=b(t),r=e.query;let n=!1;const s=i.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),n=0===s.listeners.length)}if(n)return i.queries.delete(r),i.onUnlisten(r)}function Nn(t,e){const i=b(t);let r=!1;for(const t of e){const e=t.query,n=i.queries.get(e);if(n){for(const e of n.listeners)e.no(t)&&(r=!0);n.Xr=t}}r&&Ln(i)}function Pn(t,e,i){const r=b(t),n=r.queries.get(e);if(n)for(const t of n.listeners)t.onError(i);r.queries.delete(e)}function Ln(t){t.Zr.forEach((t=>{t.next()}))}class Dn{constructor(t,e,i){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=i||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const i of t.docChanges)3!==i.type&&e.push(i);t=new In(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const i="Offline"!==e;return!(this.options.uo&&i||t.docs.isEmpty()&&"Offline"!==e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=In.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On{constructor(t){this.key=t}}class Bn{constructor(t){this.key=t}}class jn{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=He(),this.mutatedKeys=He(),this.po=Yt(t),this.Eo=new kn(this.po)}get To(){return this._o}Io(t,e){const i=e?e.Ao:new Tn,r=e?e.Eo:this.Eo;let n=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=qt(this.query)&&r.size===this.query.limit?r.last():null,h=Ut(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Jt(this.query,e)?e:null,c=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?c!==f&&(i.track({type:3,doc:l}),d=!0):this.Ro(u,l)||(i.track({type:2,doc:l}),d=!0,(a&&this.po(l,a)>0||h&&this.po(l,h)<0)&&(o=!0)):!u&&l?(i.track({type:0,doc:l}),d=!0):u&&!l&&(i.track({type:1,doc:u}),d=!0,(a||h)&&(o=!0)),d&&(l?(s=s.add(l),n=f?n.add(t):n.delete(t)):(s=s.delete(t),n=n.delete(t)))})),qt(this.query)||Ut(this.query))for(;s.size>this.query.limit;){const t=qt(this.query)?s.last():s.first();s=s.delete(t.key),n=n.delete(t.key),i.track({type:1,doc:t})}return{Eo:s,Ao:i,Ln:o,mutatedKeys:n}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const n=t.Ao.Yr();n.sort(((t,e)=>function(t,e){const i=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return i(t)-i(e)}(t.type,e.type)||this.po(t.doc,e.doc))),this.bo(i);const s=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==n.length||a?{snapshot:new In(this.query,t.Eo,r,n,t.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Tn,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach((t=>this._o=this._o.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this._o=this._o.delete(t))),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=He(),this.Eo.forEach((t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))}));const e=[];return t.forEach((t=>{this.yo.has(t)||e.push(new Bn(t))})),this.yo.forEach((i=>{t.has(i)||e.push(new On(i))})),e}So(t){this._o=t.Gn,this.yo=He();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return In.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class qn{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class Un{constructor(t){this.key=t,this.Co=!1}}class Fn{constructor(t,e,i,r,n,s){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=r,this.currentUser=n,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new ur((t=>$t(t)),Gt),this.ko=new Map,this.$o=new Set,this.Oo=new Ne(tt.comparator),this.Fo=new Map,this.Mo=new Er,this.Lo={},this.Bo=new Map,this.Uo=ar.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Vn(t,e){const i=os(t);let r,n;const s=i.xo.get(e);if(s)r=s.targetId,i.sharedClientState.addLocalQueryTarget(r),n=s.view.Do();else{const t=await wr(i.localStore,Wt(e)),s=i.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,n=await zn(i,e,r,"current"===s),i.isPrimaryClient&&Yr(i.remoteStore,t)}return n}async function zn(t,e,i,r){t.Ko=(e,i,r)=>async function(t,e,i,r){let n=e.view.Io(i);n.Ln&&(n=await Mr(t.localStore,e.query,!1).then((({documents:t})=>e.view.Io(t,n))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(n,t.isPrimaryClient,s);return ts(t,e.targetId,o.vo),o.snapshot}(t,e,i,r);const n=await Mr(t.localStore,e,!0),s=new jn(e,n.Gn),o=s.Io(n.documents),a=$e.createSynthesizedTargetChangeForCurrentChange(i,r&&"Offline"!==t.onlineState),h=s.applyChanges(o,t.isPrimaryClient,a);ts(t,i,h.vo);const u=new qn(e,i,s);return t.xo.set(e,u),t.ko.has(i)?t.ko.get(i).push(e):t.ko.set(i,[e]),h.snapshot}async function Hn(t,e){const i=b(t),r=i.xo.get(e),n=i.ko.get(r.targetId);if(n.length>1)return i.ko.set(r.targetId,n.filter((t=>!Gt(t,e)))),void i.xo.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await _r(i.localStore,r.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(r.targetId),Xr(i.remoteStore,r.targetId),Xn(i,r.targetId)})).catch(hr)):(Xn(i,r.targetId),await _r(i.localStore,r.targetId,!0))}async function Wn(t,e){const i=b(t);try{const t=await function(t,e){const i=b(t),r=e.snapshotVersion;let n=i.Un;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=i.jn.newChangeBuffer({trackRemovals:!0});n=i.Un;const o=[];e.targetChanges.forEach(((e,s)=>{const a=n.get(s);if(!a)return;o.push(i.ze.removeMatchingKeys(t,e.removedDocuments,s).next((()=>i.ze.addMatchingKeys(t,e.addedDocuments,s))));const h=e.resumeToken;if(h.approximateByteSize()>0){const f=a.withResumeToken(h,r).withSequenceNumber(t.currentSequenceNumber);n=n.insert(s,f),u=a,c=e,v((l=f).resumeToken.approximateByteSize()>0),(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0)&&o.push(i.ze.updateTargetData(t,f))}var u,l,c}));let a=je();if(e.documentUpdates.forEach(((r,n)=>{e.resolvedLimboDocuments.has(r)&&o.push(i.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(vr(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(L.min())){const e=i.ze.getLastRemoteSnapshotVersion(t).next((e=>i.ze.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Yi.waitFor(o).next((()=>s.apply(t))).next((()=>i.Qn.vn(t,a))).next((()=>a))})).then((t=>(i.Un=n,t)))}(i.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=i.Fo.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?v(r.Co):t.removedDocuments.size>0&&(v(r.Co),r.Co=!1))})),await rs(i,t,e)}catch(t){await hr(t)}}function Kn(t,e,i){const r=b(t);if(r.isPrimaryClient&&0===i||!r.isPrimaryClient&&1===i){const t=[];r.xo.forEach(((i,r)=>{const n=r.view.eo(e);n.snapshot&&t.push(n.snapshot)})),function(t,e){const i=b(t);i.onlineState=e;let r=!1;i.queries.forEach(((t,i)=>{for(const t of i.listeners)t.eo(e)&&(r=!0)})),r&&Ln(i)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gn(t,e,i){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",i);const n=r.Fo.get(e),s=n&&n.key;if(s){let t=new Ne(tt.comparator);t=t.insert(s,gt.newNoDocument(s,L.min()));const i=He().add(s),n=new Ge(L.min(),new Map,new De(C),t,i);await Wn(r,n),r.Oo=r.Oo.remove(s),r.Fo.delete(e),is(r)}else await _r(r.localStore,e,!1).then((()=>Xn(r,e,i))).catch(hr)}async function $n(t,e){const i=b(t),r=e.batch.batchId;try{const t=await function(t,e){const i=b(t);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),n=i.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,i,r){const n=i.batch,s=n.keys();let o=Yi.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=i.docVersions.get(t);v(null!==s),e.version.compareTo(s)<0&&(n.applyToRemoteDocument(e,i),e.isValidDocument()&&r.addEntry(e,i.commitVersion))}))})),o.next((()=>t.In.removeMutationBatch(e,n)))}(i,t,e,n).next((()=>n.apply(t))).next((()=>i.In.performConsistencyCheck(t))).next((()=>i.Qn.Pn(t,r)))}))}(i.localStore,e);Yn(i,r,null),Jn(i,r),i.sharedClientState.updateMutationState(r,"acknowledged"),await rs(i,t)}catch(t){await hr(t)}}async function Zn(t,e,i){const r=b(t);try{const t=await function(t,e){const i=b(t);return i.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return i.In.lookupMutationBatch(t,e).next((e=>(v(null!==e),r=e.keys(),i.In.removeMutationBatch(t,e)))).next((()=>i.In.performConsistencyCheck(t))).next((()=>i.Qn.Pn(t,r)))}))}(r.localStore,e);Yn(r,e,i),Jn(r,e),r.sharedClientState.updateMutationState(e,"rejected",i),await rs(r,t)}catch(t){await hr(t)}}function Jn(t,e){(t.Bo.get(e)||[]).forEach((t=>{t.resolve()})),t.Bo.delete(e)}function Yn(t,e,i){const r=b(t);let n=r.Lo[r.currentUser.toKey()];if(n){const t=n.get(e);t&&(i?t.reject(i):t.resolve(),n=n.remove(e)),r.Lo[r.currentUser.toKey()]=n}}function Xn(t,e,i=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),i&&t.No.jo(r,i);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach((e=>{t.Mo.containsKey(e)||Qn(t,e)}))}function Qn(t,e){t.$o.delete(e.path.canonicalString());const i=t.Oo.get(e);null!==i&&(Xr(t.remoteStore,i),t.Oo=t.Oo.remove(e),t.Fo.delete(i),is(t))}function ts(t,e,i){for(const r of i)r instanceof On?(t.Mo.addReference(r.key,e),es(t,r)):r instanceof Bn?(d("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||Qn(t,r.key)):y()}function es(t,e){const i=e.key,r=i.path.canonicalString();t.Oo.get(i)||t.$o.has(r)||(d("SyncEngine","New document in limbo: "+i),t.$o.add(r),is(t))}function is(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const i=new tt(q.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Un(i)),t.Oo=t.Oo.insert(i,r),Yr(t.remoteStore,new er(Wt(jt(i.path)),r,2,A.T))}}async function rs(t,e,i){const r=b(t),n=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((t,a)=>{o.push(r.Ko(a,e,i).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),n.push(t);const e=fr.kn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.No.Tr(n),await async function(t,e){const i=b(t);try{await i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Yi.forEach(e,(e=>Yi.forEach(e.Nn,(r=>i.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Yi.forEach(e.xn,(r=>i.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Xi(t))throw t;d("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=i.Un.get(e),r=t.snapshotVersion,n=t.withLastLimboFreeSnapshotVersion(r);i.Un=i.Un.insert(e,n)}}}(r.localStore,s))}async function ns(t,e){const i=b(t);if(!i.currentUser.isEqual(e)){d("SyncEngine","User change. New user:",e.toKey());const t=await gr(i.localStore,e);i.currentUser=e,(r=i).Bo.forEach((t=>{t.forEach((t=>{t.reject(new _(w.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Bo.clear(),i.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await rs(i,t.Wn)}var r}function ss(t,e){const i=b(t),r=i.Fo.get(e);if(r&&r.Co)return He().add(r.key);{let t=He();const r=i.ko.get(e);if(!r)return t;for(const e of r){const r=i.xo.get(e);t=t.unionWith(r.view.To)}return t}}function os(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wn.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ss.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gn.bind(null,e),e.No.Tr=Nn.bind(null,e.eventManager),e.No.jo=Pn.bind(null,e.eventManager),e}function as(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$n.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Zn.bind(null,e),e}class hs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Fr(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return mr(this.persistence,new dr,t.initialUser,this.N)}Go(t){return new Rr(Nr.Ns,this.N)}Wo(t){return new Lr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class us{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Kn(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ns.bind(null,this.syncEngine),await wn(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new xn}createDatastore(t){const e=Fr(t.databaseInfo.databaseId),i=(r=t.databaseInfo,new qr(r));var r,n;return n=t.credentials,new Kr(n,i,e)}createRemoteStore(t){var e,i,r,n,s;return e=this.localStore,i=this.datastore,r=t.asyncQueue,n=t=>Kn(this.syncEngine,t,0),s=Or.bt()?new Or:new Dr,new $r(e,i,r,n,s)}createSyncEngine(t,e){return function(t,e,i,r,n,s,o){const a=new Fn(t,e,i,r,n,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);d("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await Jr(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ls{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cs{constructor(t,e,i){this.credentials=t,this.asyncQueue=e,this.databaseInfo=i,this.user=u.UNAUTHENTICATED,this.clientId=R.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async t=>{d("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new M;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const i=En(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function fs(t,e){t.asyncQueue.verifyOperationInProgress(),d("FirestoreClient","Initializing OfflineComponentProvider");const i=await t.getConfiguration();await e.initialize(i);let r=i.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await gr(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function ds(t,e){t.asyncQueue.verifyOperationInProgress();const i=await ps(t);d("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(i,r),t.setCredentialChangeListener((t=>async function(t,e){const i=b(t);i.asyncQueue.verifyOperationInProgress(),d("RemoteStore","RemoteStore received new credentials");const r=nn(i);i.Kr.add(3),await Jr(i),r&&i.Wr.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.Kr.delete(3),await Zr(i)}(e.remoteStore,t))),t.onlineComponents=e}async function ps(t){return t.offlineComponents||(d("FirestoreClient","Using default OfflineComponentProvider"),await fs(t,new hs)),t.offlineComponents}async function ms(t){return t.onlineComponents||(d("FirestoreClient","Using default OnlineComponentProvider"),await ds(t,new us)),t.onlineComponents}function gs(t){return ms(t).then((t=>t.syncEngine))}async function ys(t){const e=await ms(t),i=e.eventManager;return i.onListen=Vn.bind(null,e.syncEngine),i.onUnlisten=Hn.bind(null,e.syncEngine),i}function vs(t,e,i={}){const r=new M;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,i,r,n){const s=new ls({next:s=>{e.enqueueAndForget((()=>Cn(t,o)));const a=s.docs.has(i);!a&&s.fromCache?n.reject(new _(w.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?n.reject(new _(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):n.resolve(s)},error:t=>n.reject(t)}),o=new Dn(jt(i.path),s,{includeMetadataChanges:!0,uo:!0});return Rn(t,o)}(await ys(t),t.asyncQueue,e,i,r))),r.promise}function bs(t,e,i={}){const r=new M;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,i,r,n){const s=new ls({next:i=>{e.enqueueAndForget((()=>Cn(t,o))),i.fromCache&&"server"===r.source?n.reject(new _(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):n.resolve(i)},error:t=>n.reject(t)}),o=new Dn(i,s,{includeMetadataChanges:!0,uo:!0});return Rn(t,o)}(await ys(t),t.asyncQueue,e,i,r))),r.promise}class ws{constructor(t,e,i,r,n,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=r,this.ssl=n,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class _s{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof _s&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t,e,i){if(!i)throw new _(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Es(t){if(!tt.isDocumentKey(t))throw new _(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ks(t){if(tt.isDocumentKey(t))throw new _(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ts(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const i=(e=t).constructor?e.constructor.name:null;return i?`a custom ${i} object`:"an object"}}var e;return"function"==typeof t?"a function":y()}function Is(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Ts(t);throw new _(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new _(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new _(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,i,r){if(!0===e&&!0===r)throw new _(w.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new As({}),this._settingsFrozen=!1,t instanceof _s?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new _(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(t.options.projectId)}(t))}get app(){if(!this._app)throw new _(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new _(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new As(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new E;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new I(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new _(w.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ms.get(t);e&&(d("ComponentProvider","Removing Datastore"),Ms.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rs(this.firestore,t,this._key)}}class Cs{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Cs(this.firestore,t,this._query)}}class Ns extends Cs{constructor(t,e,i){super(t,e,jt(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rs(this.firestore,null,new tt(t))}withConverter(t){return new Ns(this.firestore,t,this._path)}}function Ps(t,e,...i){if(t=a.getModularInstance(t),Ss("collection","path",e),t instanceof xs){const r=q.fromString(e,...i);return ks(r),new Ns(t,null,r)}{if(!(t instanceof Rs||t instanceof Ns))throw new _(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(q.fromString(e,...i));return ks(r),new Ns(t.firestore,null,r)}}function Ls(t,e,...i){if(t=a.getModularInstance(t),1===arguments.length&&(e=R.I()),Ss("doc","path",e),t instanceof xs){const r=q.fromString(e,...i);return Es(r),new Rs(t,null,new tt(r))}{if(!(t instanceof Rs||t instanceof Ns))throw new _(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(q.fromString(e,...i));return Es(r),new Rs(t.firestore,t instanceof Ns?t.converter:null,new tt(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ds{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Vr(this,"async_queue_retry"),this.Ea=()=>{const t=Ur();t&&d("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=Ur();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=Ur();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise((()=>{}));const e=new M;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.da.push(t),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!Xi(t))throw t;d("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(t){const e=this.fa.then((()=>(this.ga=!0,t().catch((t=>{throw this.ma=t,this.ga=!1,p("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.ga=!1,t))))));return this.fa=e,e}enqueueAfterDelay(t,e,i){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=Sn.createAndSchedule(this,t,e,i,(t=>this.Ra(t)));return this._a.push(r),r}Ta(){this.ma&&y()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then((()=>{this._a.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()}))}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class Os extends xs{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Ds,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||qs(this),this._firestoreClient.terminate()}}function Bs(t=r.getApp()){return r._getProvider(t,"firestore").getImmediate()}function js(t){return t._firestoreClient||qs(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qs(t){var e;const i=t._freezeSettings(),r=(n=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new ws(n,s,o,(a=i).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var n,s,o,a;t._firestoreClient=new cs(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new _(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new F(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fs(z.fromBase64String(t))}catch(t){throw new _(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Fs(z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new _(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new _(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=/^__.*__$/;class Ws{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return null!==this.fieldMask?new _e(t,this.data,this.fieldMask,e,this.fieldTransforms):new we(t,this.data,e,this.fieldTransforms)}}class Ks{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new _e(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Gs(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class $s{constructor(t,e,i,r,n,s){this.settings=t,this.databaseId=e,this.N=i,this.ignoreUndefinedProperties=r,void 0===n&&this.Sa(),this.fieldTransforms=n||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new $s(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const i=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:i,xa:!1});return r.ka(t),r}$a(t){var e;const i=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:i,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return ho(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(Gs(this.Da)&&Hs.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class Zs{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=i||Fr(t)}Ba(t,e,i,r=!1){return new $s({Da:t,methodName:e,La:i,path:F.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Js(t){const e=t._freezeSettings(),i=Fr(t._databaseId);return new Zs(t._databaseId,!!e.ignoreUndefinedProperties,i)}function Ys(t,e,i,r,n,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,i,n);no("Data must be an object, but it was:",o,r);const a=io(r,o);let h,u;if(s.merge)h=new V(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const n=so(e,r,i);if(!o.contains(n))throw new _(w.INVALID_ARGUMENT,`Field '${n}' is specified in your field mask but missing from your input data.`);uo(t,n)||t.push(n)}h=new V(t),u=o.fieldTransforms.filter((t=>h.covers(t.field)))}else h=null,u=o.fieldTransforms;return new Ws(new pt(a),h,u)}class Xs extends Vs{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(`${this._methodName}() can only appear at the top level of your update data`):t.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Xs}}function Qs(t,e,i,r){const n=t.Ba(1,e,i);no("Data must be an object, but it was:",n,r);const s=[],o=pt.empty();O(r,((t,r)=>{const h=ao(e,t,i);r=a.getModularInstance(r);const u=n.$a(h);if(r instanceof Xs)s.push(h);else{const t=eo(r,u);null!=t&&(s.push(h),o.set(h,t))}}));const h=new V(s);return new Ks(o,h,n.fieldTransforms)}function to(t,e,i,r,n,s){const o=t.Ba(1,e,i),h=[so(e,r,i)],u=[n];if(s.length%2!=0)throw new _(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)h.push(so(e,s[t])),u.push(s[t+1]);const l=[],c=pt.empty();for(let t=h.length-1;t>=0;--t)if(!uo(l,h[t])){const e=h[t];let i=u[t];i=a.getModularInstance(i);const r=o.$a(e);if(i instanceof Xs)l.push(e);else{const t=eo(i,r);null!=t&&(l.push(e),c.set(e,t))}}const f=new V(l);return new Ks(c,f,o.fieldTransforms)}function eo(t,e){if(ro(t=a.getModularInstance(t)))return no("Unsupported field value:",e,t),io(t,e);if(t instanceof Vs)return function(t,e){if(!Gs(e.Da))throw e.Fa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Fa(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(e);i&&e.fieldTransforms.push(i)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const i=[];let r=0;for(const n of t){let t=eo(n,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),i.push(t),r++}return{arrayValue:{values:i}}}(t,e)}return function(t,e){if(null===(t=a.getModularInstance(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ee(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const i=P.fromDate(t);return{timestampValue:si(e.N,i)}}if(t instanceof P){const i=new P(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:si(e.N,i)}}if(t instanceof zs)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Fs)return{bytesValue:oi(e.N,t._byteString)};if(t instanceof Rs){const i=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ui(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa(`Unsupported field value: ${Ts(t)}`)}(t,e)}function io(t,e){const i={};return B(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):O(t,((t,r)=>{const n=eo(r,e.Na(t));null!=n&&(i[t]=n)})),{mapValue:{fields:i}}}function ro(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof P||t instanceof zs||t instanceof Fs||t instanceof Rs||t instanceof Vs)}function no(t,e,i){if(!ro(i)||("object"!=typeof(r=i)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Ts(i);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}var r}function so(t,e,i){if((e=a.getModularInstance(e))instanceof Us)return e._internalPath;if("string"==typeof e)return ao(t,e);throw ho("Field path arguments must be of type string or FieldPath.",t,!1,void 0,i)}const oo=new RegExp("[~\\*/\\[\\]]");function ao(t,e,i){if(e.search(oo)>=0)throw ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,i);try{return new Us(...e.split("."))._internalPath}catch(r){throw ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,i)}}function ho(t,e,i,r,n){const s=r&&!r.isEmpty(),o=void 0!==n;let a=`Function ${e}() called with invalid data`;i&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(s||o)&&(h+=" (found",s&&(h+=` in field ${r}`),o&&(h+=` in document ${n}`),h+=")"),new _(w.INVALID_ARGUMENT,a+t+h)}function uo(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,e,i,r,n){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=r,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new Rs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new co(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(fo("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class co extends lo{data(){return super.data()}}function fo(t,e){return"string"==typeof e?ao(t,e):e instanceof Us?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mo extends lo{constructor(t,e,i,r,n,s){super(t,e,i,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=n}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(fo("DocumentSnapshot.get",t));if(null!==i)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class go extends mo{data(t={}){return super.data(t)}}class yo{constructor(t,e,i,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new po(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((i=>{t.call(e,new go(this._firestore,this._userDataWriter,i.key,i,new po(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new _(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((i=>({type:"added",doc:new go(t._firestore,t._userDataWriter,i.doc.key,i.doc,new po(t._snapshot.mutatedKeys.has(i.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let i=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new go(t._firestore,t._userDataWriter,e.doc.key,e.doc,new po(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let n=-1,s=-1;return 0!==e.type&&(n=i.indexOf(e.doc.key),i=i.delete(e.doc.key)),1!==e.type&&(i=i.add(e.doc),s=i.indexOf(e.doc.key)),{type:vo(e.type),doc:r,oldIndex:n,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function vo(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bo(t){if(Ut(t)&&0===t.explicitOrderBy.length)throw new _(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wo{convertValue(t,e="none"){switch(et(t)){case 0:return null;case 1:return t.booleanValue;case 2:return K(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(G(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const i={};return O(t.fields,((t,r)=>{i[t]=this.convertValue(r,e)})),i}convertGeoPoint(t){return new zs(K(t.latitude),K(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Z(t);return null==i?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(J(t));default:return null}}convertTimestamp(t){const e=W(t);return new P(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=q.fromString(t);v(Ni(i));const r=new _s(i.get(1),i.get(3)),n=new tt(i.popFirst(5));return r.isEqual(e)||p(`Document ${n} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e,i){let r;return r=t?i&&(i.merge||i.mergeFields)?t.toFirestore(e,i):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mo(t){t=Is(t,Rs);const e=Is(t.firestore,Os);return vs(js(e),t._key).then((i=>Ro(e,t,i)))}class So extends wo{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fs(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rs(this.firestore,null,e)}}function Eo(t){t=Is(t,Cs);const e=Is(t.firestore,Os),i=js(e),r=new So(e);return bo(t._query),bs(i,t._query).then((i=>new yo(e,r,t,i)))}function ko(t,e,i){t=Is(t,Rs);const r=Is(t.firestore,Os),n=_o(t.converter,e,i);return xo(r,[Ys(Js(r),"setDoc",t._key,n,null!==t.converter,i).toMutation(t._key,de.none())])}function To(t,e,i,...r){t=Is(t,Rs);const n=Is(t.firestore,Os),s=Js(n);let o;return o="string"==typeof(e=a.getModularInstance(e))||e instanceof Us?to(s,"updateDoc",t._key,e,i,r):Qs(s,"updateDoc",t._key,e),xo(n,[o.toMutation(t._key,de.exists(!0))])}function Io(t){return xo(Is(t.firestore,Os),[new ke(t._key,de.none())])}function Ao(t,e){const i=Is(t.firestore,Os),r=Ls(t),n=_o(t.converter,e);return xo(i,[Ys(Js(t.firestore),"addDoc",r._key,n,null!==t.converter,{}).toMutation(r._key,de.exists(!1))]).then((()=>r))}function xo(t,e){return function(t,e){const i=new M;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,i){const r=as(t);try{const t=await function(t,e){const i=b(t),r=P.now(),n=e.reduce(((t,e)=>t.add(e.key)),He());let s;return i.persistence.runTransaction("Locally write mutations","readwrite",(t=>i.Qn.Pn(t,n).next((n=>{s=n;const o=[];for(const t of e){const e=ye(t,s.get(t.key));null!=e&&o.push(new _e(t.key,e,mt(e.value.mapValue),de.exists(!0)))}return i.In.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,i){let r=t.Lo[t.currentUser.toKey()];r||(r=new Ne(C)),r=r.insert(e,i),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,i),await rs(r,t.changes),await cn(r.remoteStore)}catch(t){const e=En(t,"Failed to persist write");i.reject(e)}}(await gs(t),e,i))),i.promise}(js(t),e)}function Ro(t,e,i){const r=i.docs.get(e._key),n=new So(t);return new mo(t,n,e._key,r,new po(i.hasPendingWrites,i.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Co;Co=r.SDK_VERSION,l=Co,r._registerComponent(new s.Component("firestore",((t,{options:e})=>{const i=t.getProvider("app").getImmediate(),r=new Os(i,new k(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r}),"PUBLIC")),r.registerVersion("@firebase/firestore","3.1.0",undefined)})),n.register("kVAWG",(function(e,i){t(e.exports,"registerVersion",(()=>E)),t(e.exports,"_registerComponent",(()=>m)),t(e.exports,"SDK_VERSION",(()=>_)),t(e.exports,"initializeApp",(()=>M)),t(e.exports,"getApp",(()=>S)),t(e.exports,"_getProvider",(()=>g)),t(e.exports,"_removeServiceInstance",(()=>y));var r=n("181Xw"),s=n("aa1lO"),o=n("15Gf9");o=n("15Gf9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const h="@firebase/app",u=new s.Logger("@firebase/app"),l="[DEFAULT]",c={[h]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,d=new Map;function p(t,e){try{t.container.addComponent(e)}catch(i){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function m(t){const e=t.name;if(d.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;d.set(e,t);for(const e of f.values())p(e,t);return!0}function g(t,e){return t.container.getProvider(e)}function y(t,e,i="[DEFAULT]"){g(t,e).clearInstance(i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},b=new o.ErrorFactory("app","Firebase",v);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new r.Component("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _="9.1.2";function M(t,e={}){if("object"!=typeof e){e={name:e}}const i=Object.assign({name:l,automaticDataCollectionEnabled:!1},e),n=i.name;if("string"!=typeof n||!n)throw b.create("bad-app-name",{appName:String(n)});const s=f.get(n);if(s){if(o.deepEqual(t,s.options)&&o.deepEqual(i,s.config))return s;throw b.create("duplicate-app",{appName:n})}const a=new r.ComponentContainer(n);for(const t of d.values())a.addComponent(t);const h=new w(t,i,a);return f.set(n,h),h}function S(t="[DEFAULT]"){const e=f.get(t);if(!e)throw b.create("no-app",{appName:t});return e}function E(t,e,i){var n;let s=null!==(n=c[t])&&void 0!==n?n:t;i&&(s+=`-${i}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}m(new r.Component(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var k;m(new r.Component("platform-logger",(t=>new a(t)),"PRIVATE")),E(h,"0.7.3",k),E("fire-js","")})),n.register("181Xw",(function(e,i){t(e.exports,"Component",(()=>o)),t(e.exports,"ComponentContainer",(()=>u));var r=n("bhppX"),s=n("15Gf9"),o=function(){function t(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),a="[DEFAULT]",h=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var i=new s.Deferred;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&i.resolve(r)}catch(t){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,i=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(t){if(r)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,i;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:a})}catch(t){}try{for(var n=r.__values(this.instancesDeferred.entries()),s=n.next();!s.done;s=n.next()){var o=r.__read(s.value,2),h=o[0],u=o[1],l=this.normalizeInstanceIdentifier(h);try{var c=this.getOrInitializeService({instanceIdentifier:l});u.resolve(c)}catch(t){}}}catch(t){e={error:t}}finally{try{s&&!s.done&&(i=n.return)&&i.call(n)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=a),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(r.__spreadArray(r.__spreadArray([],r.__read(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),r.__read(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=a),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=a),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,i;void 0===t&&(t={});var n=t.options,s=void 0===n?{}:n,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var h=r.__values(this.instancesDeferred.entries()),u=h.next();!u.done;u=h.next()){var l=r.__read(u.value,2),c=l[0],f=l[1];o===this.normalizeInstanceIdentifier(c)&&f.resolve(a)}}catch(t){e={error:t}}finally{try{u&&!u.done&&(i=h.return)&&i.call(h)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var i,r=this.normalizeInstanceIdentifier(e),n=null!==(i=this.onInitCallbacks.get(r))&&void 0!==i?i:new Set;n.add(t),this.onInitCallbacks.set(r,n);var s=this.instances.get(r);return s&&t(s,r),function(){n.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var i,n,s=this.onInitCallbacks.get(e);if(s)try{for(var o=r.__values(s),a=o.next();!a.done;a=o.next()){var h=a.value;try{h(t,e)}catch(t){}}}catch(t){i={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}},t.prototype.getOrInitializeService=function(t){var e,i=t.instanceIdentifier,r=t.options,n=void 0===r?{}:r,s=this.instances.get(i);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=i,e===a?void 0:e),options:n}),this.instances.set(i,s),this.instancesOptions.set(i,n),this.invokeOnInitCallbacks(s,i),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,i,s)}catch(t){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=a),this.component?this.component.multipleInstances?t:a:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();var u=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new h(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()})),n.register("bhppX",(function(e,i){t(e.exports,"__rest",(()=>r)),t(e.exports,"__read",(()=>a)),t(e.exports,"__awaiter",(()=>n)),t(e.exports,"__generator",(()=>s)),t(e.exports,"__values",(()=>o)),t(e.exports,"__spreadArray",(()=>h));function r(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(i[r[n]]=t[r[n]])}return i}function n(t,e,i,r){return new(i||(i=Promise))((function(n,s){function o(t){try{h(r.next(t))}catch(t){s(t)}}function a(t){try{h(r.throw(t))}catch(t){s(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}h((r=r.apply(t,e||[])).next())}))}function s(t,e){var i,r,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};function a(s){return function(a){return function(s){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],r=0}finally{i=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s}Object.create;function o(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],r=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var r,n,s=i.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(t){n={error:t}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}return o}function h(t,e,i){if(i||2===arguments.length)for(var r,n=0,s=e.length;n<s;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))}Object.create})),n.register("15Gf9",(function(i,r){t(i.exports,"createSubscribe",(()=>$)),t(i.exports,"Deferred",(()=>g)),t(i.exports,"base64",(()=>l)),t(i.exports,"calculateBackoffMillis",(()=>tt)),t(i.exports,"isIndexedDBAvailable",(()=>I)),t(i.exports,"deepCopy",(()=>p)),t(i.exports,"isValidFormat",(()=>O)),t(i.exports,"Sha1",(()=>G)),t(i.exports,"stringToByteArray",(()=>X)),t(i.exports,"areCookiesEnabled",(()=>x)),t(i.exports,"getUA",(()=>v)),t(i.exports,"isSafari",(()=>T)),t(i.exports,"querystringDecode",(()=>W)),t(i.exports,"isMobileCordova",(()=>b)),t(i.exports,"stringify",(()=>L)),t(i.exports,"FirebaseError",(()=>R)),t(i.exports,"isEmpty",(()=>U)),t(i.exports,"ErrorFactory",(()=>C)),t(i.exports,"isAdmin",(()=>B)),t(i.exports,"safeGet",(()=>q)),t(i.exports,"isReactNative",(()=>_)),t(i.exports,"jsonEval",(()=>P)),t(i.exports,"base64Encode",(()=>c)),t(i.exports,"isIE",(()=>S)),t(i.exports,"stringLength",(()=>Q)),t(i.exports,"isNodeSdk",(()=>k)),t(i.exports,"createMockUserToken",(()=>y)),t(i.exports,"extractQuerystring",(()=>K)),t(i.exports,"getModularInstance",(()=>et)),t(i.exports,"assertionError",(()=>h)),t(i.exports,"map",(()=>F)),t(i.exports,"isElectron",(()=>M)),t(i.exports,"isBrowserExtension",(()=>w)),t(i.exports,"querystring",(()=>H)),t(i.exports,"errorPrefix",(()=>Y)),t(i.exports,"deepEqual",(()=>V)),t(i.exports,"contains",(()=>j)),t(i.exports,"validateIndexedDBOpenable",(()=>A)),t(i.exports,"assert",(()=>a)),t(i.exports,"base64Decode",(()=>d)),t(i.exports,"isUWP",(()=>E));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=!1,s=!1,o="${JSCORE_VERSION}",a=function(t,e){if(!t)throw h(e)},h=function(t){return new Error("Firebase Database ("+o+") INTERNAL ASSERT FAILED: "+t)},u=function(t){const e=[];let i=0;for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);n<128?e[i++]=n:n<2048?(e[i++]=n>>6|192,e[i++]=63&n|128):55296==(64512&n)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(n=65536+((1023&n)<<10)+(1023&t.charCodeAt(++r)),e[i++]=n>>18|240,e[i++]=n>>12&63|128,e[i++]=n>>6&63|128,e[i++]=63&n|128):(e[i++]=n>>12|224,e[i++]=n>>6&63|128,e[i++]=63&n|128)}return e},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const n=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0,u=n>>2,l=(3&n)<<4|o>>4;let c=(15&o)<<2|h>>6,f=63&h;a||(f=64,s||(c=64)),r.push(i[u],i[l],i[c],i[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let i=0,r=0;for(;i<t.length;){const n=t[i++];if(n<128)e[r++]=String.fromCharCode(n);else if(n>191&&n<224){const s=t[i++];e[r++]=String.fromCharCode((31&n)<<6|63&s)}else if(n>239&&n<365){const s=((7&n)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[i++],o=t[i++];e[r++]=String.fromCharCode((15&n)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const n=i[t.charAt(e++)],s=e<t.length?i[t.charAt(e)]:0;++e;const o=e<t.length?i[t.charAt(e)]:64;++e;const a=e<t.length?i[t.charAt(e)]:64;if(++e,null==n||null==s||null==o||null==a)throw Error();const h=n<<2|s>>4;if(r.push(h),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},c=function(t){const e=u(t);return l.encodeByteArray(e,!0)},f=function(t){return c(t).replace(/\./g,"")},d=function(t){try{return l.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(t){return m(void 0,t)}function m(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const i in e)e.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=m(t[i],e[i]));return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,i))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i=e||"demo-project",r=t.iat||0,n=t.sub||t.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},t);return[f(JSON.stringify({alg:"none",type:"JWT"})),f(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function b(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function w(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function _(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function M(){return v().indexOf("Electron/")>=0}function S(){const t=v();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function E(){return v().indexOf("MSAppHost/")>=0}function k(){return!0===n||!0===s}function T(){return!function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function I(){return"object"==typeof indexedDB}function A(){return new Promise(((t,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(r);n.onsuccess=()=>{n.result.close(),i||self.indexedDB.deleteDatabase(r),t(!0)},n.onupgradeneeded=()=>{i=!1},n.onerror=()=>{var t;e((null===(t=n.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}function x(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}class R extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},r=`${this.service}/${t}`,n=this.errors[t],s=n?function(t,e){return t.replace(N,((t,i)=>{const r=e[i];return null!=r?String(r):`<${i}?>`}))}(n,i):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new R(r,o,i)}}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return JSON.parse(t)}function L(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t){let e={},i={},r={},n="";try{const s=t.split(".");e=P(d(s[0])||""),i=P(d(s[1])||""),n=s[2],r=i.d||{},delete i.d}catch(t){}return{header:e,claims:i,data:r,signature:n}},O=function(t){const e=D(t).claims;return!!e&&"object"==typeof e&&e.hasOwnProperty("iat")},B=function(t){const e=D(t).claims;return"object"==typeof e&&!0===e.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function q(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function U(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function F(t,e,i){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=e.call(i,t[n],n,t));return r}function V(t,e){if(t===e)return!0;const i=Object.keys(t),r=Object.keys(e);for(const n of i){if(!r.includes(n))return!1;const i=t[n],s=e[n];if(z(i)&&z(s)){if(!V(i,s))return!1}else if(i!==s)return!1}for(const t of r)if(!i.includes(t))return!1;return!0}function z(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){const e=[];for(const[i,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function W(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[i,r]=t.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}})),e}function K(t){const e=t.indexOf("?");if(!e)return"";const i=t.indexOf("#",e);return t.substring(e,i>0?i:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const i=this.W_;if("string"==typeof t)for(let r=0;r<16;r++)i[r]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let r=0;r<16;r++)i[r]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let t=16;t<80;t++){const e=i[t-3]^i[t-8]^i[t-14]^i[t-16];i[t]=4294967295&(e<<1|e>>>31)}let r,n,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],h=this.chain_[3],u=this.chain_[4];for(let t=0;t<80;t++){t<40?t<20?(r=h^o&(a^h),n=1518500249):(r=o^a^h,n=1859775393):t<60?(r=o&a|h&(o|a),n=2400959708):(r=o^a^h,n=3395469782);const e=(s<<5|s>>>27)+r+u+n+i[t]&4294967295;u=h,h=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const i=e-this.blockSize;let r=0;const n=this.buf_;let s=this.inbuf_;for(;r<e;){if(0===s)for(;r<=i;)this.compress_(t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(n[s]=t.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(n),s=0;break}}else for(;r<e;)if(n[s]=t[r],++s,++r,s===this.blockSize){this.compress_(n),s=0;break}}this.inbuf_=s,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let t=this.blockSize-1;t>=56;t--)this.buf_[t]=255&e,e/=256;this.compress_(this.buf_);let i=0;for(let e=0;e<5;e++)for(let r=24;r>=0;r-=8)t[i]=this.chain_[e]>>r&255,++i;return t}}function $(t,e){const i=new Z(t,e);return i.subscribe.bind(i)}class Z{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,i){let r;if(void 0===t&&void 0===e&&void 0===i)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const i of e)if(i in t&&"function"==typeof t[i])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:i},void 0===r.next&&(r.next=J),void 0===r.error&&(r.error=J),void 0===r.complete&&(r.complete=J);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),n}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function J(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X=function(t){const e=[];let i=0;for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);if(n>=55296&&n<=56319){const e=n-55296;r++,a(r<t.length,"Surrogate pair missing trail surrogate.");n=65536+(e<<10)+(t.charCodeAt(r)-56320)}n<128?e[i++]=n:n<2048?(e[i++]=n>>6|192,e[i++]=63&n|128):n<65536?(e[i++]=n>>12|224,e[i++]=n>>6&63|128,e[i++]=63&n|128):(e[i++]=n>>18|240,e[i++]=n>>12&63|128,e[i++]=n>>6&63|128,e[i++]=63&n|128)}return e},Q=function(t){let e=0;for(let i=0;i<t.length;i++){const r=t.charCodeAt(i);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,i++):e+=3}return e};function tt(t,e=1e3,i=2){const r=e*Math.pow(i,t),n=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function et(t){return t&&t._delegate?t._delegate:t}})),n.register("aa1lO",(function(e,i){t(e.exports,"setLogLevel",(()=>c)),t(e.exports,"LogLevel",(()=>n)),t(e.exports,"setUserLogHandler",(()=>f)),t(e.exports,"Logger",(()=>l));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var n,s;(s=n||(n={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,h={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(t,e,...i)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),n=h[e];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[n](`[${r}]  ${t.name}:`,...i)};class l{constructor(t){this.name=t,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in n))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...t),this._logHandler(this,n.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...t),this._logHandler(this,n.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,n.INFO,...t),this._logHandler(this,n.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,n.WARN,...t),this._logHandler(this,n.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...t),this._logHandler(this,n.ERROR,...t)}}function c(t){r.forEach((e=>{e.setLogLevel(t)}))}function f(t,e){for(const i of r){let r=null;e&&e.level&&(r=o[e.level]),i.userLogHandler=null===t?null:(e,i,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");i>=(null!=r?r:e.logLevel)&&t({level:n[i].toLowerCase(),message:o,args:s,type:e.name})}}}})),n.register("bbJw6",(function(i,r){t(i.exports,"Event",(()=>cr)),t(i.exports,"FetchXmlHttpFactory",(()=>dr)),t(i.exports,"getStatEventTarget",(()=>hr)),t(i.exports,"EventType",(()=>lr)),t(i.exports,"createWebChannelTransport",(()=>ar)),t(i.exports,"Stat",(()=>fr)),t(i.exports,"WebChannel",(()=>pr)),t(i.exports,"ErrorCode",(()=>ur)),t(i.exports,"XhrIo",(()=>mr));var n,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o={},a=a||{},h=s||self;function u(){}function l(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function c(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,i){return t.call.apply(t.bind,arguments)}function m(t,e,i){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function g(t,e,i){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m).apply(null,arguments)}function y(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var e=i.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function i(){}i.prototype=e.prototype,t.Z=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.Vb=function(t,i,r){for(var n=Array(arguments.length-2),s=2;s<arguments.length;s++)n[s-2]=arguments[s];return e.prototype[i].apply(t,n)}}function b(){this.s=this.s,this.o=this.o}var w={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}(this);delete w[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===e)return i;return-1},M=Array.prototype.forEach?function(t,e,i){Array.prototype.forEach.call(t,e,i)}:function(t,e,i){const r=t.length,n="string"==typeof t?t.split(""):t;for(let s=0;s<r;s++)s in n&&e.call(i,n[s],s,t)};function S(t){return Array.prototype.concat.apply([],arguments)}function E(t){const e=t.length;if(0<e){const i=Array(e);for(let r=0;r<e;r++)i[r]=t[r];return i}return[]}function k(t){return/^[\s\xa0]*$/.test(t)}var T,I=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function A(t,e){return-1!=t.indexOf(e)}function x(t,e){return t<e?-1:t>e?1:0}t:{var R=h.navigator;if(R){var C=R.userAgent;if(C){T=C;break t}}T=""}function N(t,e,i){for(const r in t)e.call(i,t[r],r,t)}function P(t){const e={};for(const i in t)e[i]=t[i];return e}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(t,e){let i,r;for(let e=1;e<arguments.length;e++){for(i in r=arguments[e],r)t[i]=r[i];for(let e=0;e<L.length;e++)i=L[e],Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}}function O(t){return O[" "](t),t}O[" "]=u;var B,j,q=A(T,"Opera"),U=A(T,"Trident")||A(T,"MSIE"),F=A(T,"Edge"),V=F||U,z=A(T,"Gecko")&&!(A(T.toLowerCase(),"webkit")&&!A(T,"Edge"))&&!(A(T,"Trident")||A(T,"MSIE"))&&!A(T,"Edge"),H=A(T.toLowerCase(),"webkit")&&!A(T,"Edge");function W(){var t=h.document;return t?t.documentMode:void 0}t:{var K="",G=(j=T,z?/rv:([^\);]+)(\)|;)/.exec(j):F?/Edge\/([\d\.]+)/.exec(j):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(j):H?/WebKit\/(\S+)/.exec(j):q?/(?:Version)[ \/]?(\S+)/.exec(j):void 0);if(G&&(K=G?G[1]:""),U){var $=W();if(null!=$&&$>parseFloat(K)){B=String($);break t}}B=K}var Z,J={};function Y(){return function(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=I(String(B)).split("."),i=I("9").split("."),r=Math.max(e.length,i.length);for(let o=0;0==t&&o<r;o++){var n=e[o]||"",s=i[o]||"";do{if(n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==n[0].length&&0==s[0].length)break;t=x(0==n[1].length?0:parseInt(n[1],10),0==s[1].length?0:parseInt(s[1],10))||x(0==n[2].length,0==s[2].length)||x(n[2],s[2]),n=n[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&U){var X=W();Z=X||(parseInt(B,10)||void 0)}else Z=void 0;var Q=Z,tt=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",u,e),h.removeEventListener("test",u,e)}catch(t){}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(z){t:{try{O(e.nodeName);var n=!0;break t}catch(t){}n=!1}n||(e=null)}}else"mouseover"==i?e=t.fromElement:"mouseout"==i&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:rt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}et.prototype.h=function(){this.defaultPrevented=!0},v(it,et);var rt={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),st=0;function ot(t,e,i,r,n){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!r,this.ia=n,this.key=++st,this.ca=this.fa=!1}function at(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ht(t){this.src=t,this.g={},this.h=0}function ut(t,e){var i=e.type;if(i in t.g){var r,n=t.g[i],s=_(n,e);(r=0<=s)&&Array.prototype.splice.call(n,s,1),r&&(at(e),0==t.g[i].length&&(delete t.g[i],t.h--))}}function lt(t,e,i,r){for(var n=0;n<t.length;++n){var s=t[n];if(!s.ca&&s.listener==e&&s.capture==!!i&&s.ia==r)return n}return-1}ht.prototype.add=function(t,e,i,r,n){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=lt(t,e,r,n);return-1<o?(e=t[o],i||(e.fa=!1)):((e=new ot(e,this.src,s,!!r,n)).fa=i,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ft={};function dt(t,e,i,r,n){if(r&&r.once)return mt(t,e,i,r,n);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],i,r,n);return null}return i=Mt(i),t&&t[nt]?t.N(e,i,c(r)?!!r.capture:!!r,n):pt(t,e,i,!1,r,n)}function pt(t,e,i,r,n,s){if(!e)throw Error("Invalid event type");var o=c(n)?!!n.capture:!!n,a=wt(t);if(a||(t[ct]=a=new ht(t)),(i=a.add(e,i,r,o,s)).proxy)return i;if(r=function(){function t(i){return e.call(t.src,t.listener,i)}var e=bt;return t}(),i.proxy=r,r.src=t,r.listener=i,t.addEventListener)tt||(n=o),void 0===n&&(n=!1),t.addEventListener(e.toString(),r,n);else if(t.attachEvent)t.attachEvent(vt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return i}function mt(t,e,i,r,n){if(Array.isArray(e)){for(var s=0;s<e.length;s++)mt(t,e[s],i,r,n);return null}return i=Mt(i),t&&t[nt]?t.O(e,i,c(r)?!!r.capture:!!r,n):pt(t,e,i,!0,r,n)}function gt(t,e,i,r,n){if(Array.isArray(e))for(var s=0;s<e.length;s++)gt(t,e[s],i,r,n);else r=c(r)?!!r.capture:!!r,i=Mt(i),t&&t[nt]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(i=lt(s=t.g[e],i,r,n))&&(at(s[i]),Array.prototype.splice.call(s,i,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=wt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lt(e,i,r,n)),(i=-1<t?e[t]:null)&&yt(i))}function yt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[nt])ut(e.i,t);else{var i=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(i,r,t.capture):e.detachEvent?e.detachEvent(vt(i),r):e.addListener&&e.removeListener&&e.removeListener(r),(i=wt(e))?(ut(i,t),0==i.h&&(i.src=null,e[ct]=null)):at(t)}}}function vt(t){return t in ft?ft[t]:ft[t]="on"+t}function bt(t,e){if(t.ca)t=!0;else{e=new it(e,this);var i=t.listener,r=t.ia||t.src;t.fa&&yt(t),t=i.call(r,e)}return t}function wt(t){return(t=t[ct])instanceof ht?t:null}var _t="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mt(t){return"function"==typeof t?t:(t[_t]||(t[_t]=function(e){return t.handleEvent(e)}),t[_t])}function St(){b.call(this),this.i=new ht(this),this.P=this,this.I=null}function Et(t,e){var i,r=t.I;if(r)for(i=[];r;r=r.I)i.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var n=e;D(e=new et(r,t),n)}if(n=!0,i)for(var s=i.length-1;0<=s;s--){var o=e.g=i[s];n=kt(o,r,!0,e)&&n}if(n=kt(o=e.g=t,r,!0,e)&&n,n=kt(o,r,!1,e)&&n,i)for(s=0;s<i.length;s++)n=kt(o=e.g=i[s],r,!1,e)&&n}function kt(t,e,i,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var n=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==i){var a=o.listener,h=o.ia||o.src;o.fa&&ut(t.i,o),n=!1!==a.call(h,r)&&n}}return n&&!r.defaultPrevented}v(St,b),St.prototype[nt]=!0,St.prototype.removeEventListener=function(t,e,i,r){gt(this,t,e,i,r)},St.prototype.M=function(){if(St.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var i=e.g[t],r=0;r<i.length;r++)at(i[r]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,i,r){return this.i.add(String(t),e,!1,i,r)},St.prototype.O=function(t,e,i,r){return this.i.add(String(t),e,!0,i,r)};var Tt=h.JSON.stringify;function It(){var t=Lt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var At,xt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Rt),(t=>t.reset()));class Rt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ct(t){h.setTimeout((()=>{throw t}),0)}function Nt(t,e){At||function(){var t=h.Promise.resolve(void 0);At=function(){t.then(Dt)}}(),Pt||(At(),Pt=!0),Lt.add(t,e)}var Pt=!1,Lt=new class{constructor(){this.h=this.g=null}add(t,e){const i=xt.get();i.set(t,e),this.h?this.h.next=i:this.g=i,this.h=i}};function Dt(){for(var t;t=It();){try{t.h.call(t.g)}catch(t){Ct(t)}var e=xt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pt=!1}function Ot(t,e){St.call(this),this.h=t||1,this.g=e||h,this.j=g(this.kb,this),this.l=Date.now()}function Bt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function jt(t,e,i){if("function"==typeof t)i&&(t=g(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function qt(t){t.g=jt((()=>{t.g=null,t.i&&(t.i=!1,qt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Ot,St),(n=Ot.prototype).da=!1,n.S=null,n.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Et(this,"tick"),this.da&&(Bt(this),this.start()))}},n.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},n.M=function(){Ot.Z.M.call(this),Bt(this),delete this.g};class Ut extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:qt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ft(t){b.call(this),this.h=t,this.g={}}v(Ft,b);var Vt=[];function zt(t,e,i,r){Array.isArray(i)||(i&&(Vt[0]=i.toString()),i=Vt);for(var n=0;n<i.length;n++){var s=dt(e,i[n],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ht(t){N(t.g,(function(t,e){this.g.hasOwnProperty(e)&&yt(t)}),t),t.g={}}function Wt(){this.g=!0}function Kt(t,e,i,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var r=i[t];if(!(2>r.length)){var n=r[1];if(Array.isArray(n)&&!(1>n.length)){var s=n[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<n.length;o++)n[o]=""}}}return Tt(i)}catch(t){return e}}(t,i)+(r?" "+r:"")}))}Ft.prototype.M=function(){Ft.Z.M.call(this),Ht(this)},Ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Wt.prototype.Aa=function(){this.g=!1},Wt.prototype.info=function(){};var Gt={},$t=null;function Zt(){return $t=$t||new St}function Jt(t){et.call(this,Gt.Ma,t)}function Yt(t){const e=Zt();Et(e,new Jt(e,t))}function Xt(t,e){et.call(this,Gt.STAT_EVENT,t),this.stat=e}function Qt(t){const e=Zt();Et(e,new Xt(e,t))}function te(t,e){et.call(this,Gt.Na,t),this.size=e}function ee(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}Gt.Ma="serverreachability",v(Jt,et),Gt.STAT_EVENT="statevent",v(Xt,et),Gt.Na="timingevent",v(te,et);var ie={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},re={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ne(){}function se(t){return t.h||(t.h=t.i())}function oe(){}ne.prototype.h=null;var ae,he={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ue(){et.call(this,"d")}function le(){et.call(this,"c")}function ce(){}function fe(t,e,i,r){this.l=t,this.j=e,this.m=i,this.X=r||1,this.V=new Ft(this),this.P=pe,t=V?125:void 0,this.W=new Ot(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new de}function de(){this.i=null,this.g="",this.h=!1}v(ue,et),v(le,et),v(ce,ne),ce.prototype.g=function(){return new XMLHttpRequest},ce.prototype.i=function(){return{}},ae=new ce;var pe=45e3,me={},ge={};function ye(t,e,i){t.K=1,t.v=Ue(Le(e)),t.s=i,t.U=!0,ve(t,null)}function ve(t,e){t.F=Date.now(),Me(t),t.A=Le(t.v);var i=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Qe(i.h,"t",r),t.C=0,i=t.l.H,t.h=new de,t.g=tr(t.l,i?e:null,!t.s),0<t.O&&(t.L=new Ut(g(t.Ia,t,t.g),t.O)),zt(t.V,t.g,"readystatechange",t.gb),e=t.H?P(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Yt(1),function(t,e,i,r,n,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var u=a[h].split("=");if(1<u.length){var l=u[0];u=u[1];var c=l.split("_");o=2<=c.length&&"type"==c[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+n+"]: "+e+"\n"+i+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function be(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function we(t,e,i){let r,n=!0;for(;!t.I&&t.C<i.length;){if(r=_e(t,i),r==ge){4==e&&(t.o=4,Qt(14),n=!1),Kt(t.j,t.m,null,"[Incomplete Response]");break}if(r==me){t.o=4,Qt(15),Kt(t.j,t.m,i,"[Invalid Chunk]"),n=!1;break}Kt(t.j,t.m,r,null),Ie(t,r)}be(t)&&r!=ge&&r!=me&&(t.h.g="",t.C=0),4!=e||0!=i.length||t.h.h||(t.o=1,Qt(16),n=!1),t.i=t.i&&n,n?0<i.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+i.length),Ki(e),e.L=!0,Qt(11))):(Kt(t.j,t.m,i,"[Invalid Chunked Response]"),Te(t),ke(t))}function _e(t,e){var i=t.C,r=e.indexOf("\n",i);return-1==r?ge:(i=Number(e.substring(i,r)),isNaN(i)?me:(r+=1)+i>e.length?ge:(e=e.substr(r,i),t.C=r+i,e))}function Me(t){t.Y=Date.now()+t.P,Se(t,t.P)}function Se(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ee(g(t.eb,t),e)}function Ee(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function ke(t){0==t.l.G||t.I||Zi(t.l,t)}function Te(t){Ee(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.W),Ht(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ie(t,e){try{var i=t.l;if(0!=i.G&&(i.g==t||oi(i.i,t)))if(i.I=t.N,!t.J&&oi(i.i,t)&&3==i.G){try{var r=i.Ca.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var n=r;if(0==n[0])t:if(i.u)i.ta=n[1],0<i.ta-i.U&&37500>n[2]&&i.N&&0==i.A&&!i.v&&(i.v=ee(g(i.ab,i),6e3));else{if(i.g){if(!(i.g.F+3e3<t.F))break t;$i(i),Bi(i)}Wi(i),Qt(18)}if(1>=si(i.i)&&i.ka){try{i.ka()}catch(t){}i.ka=void 0}}else Yi(i,11)}else if((t.J||i.g==t)&&$i(i),!k(e))for(n=i.Ca.g.parse(e),e=0;e<n.length;e++){let u=n[e];if(i.U=u[0],u=u[1],2==i.G)if("c"==u[0]){i.J=u[1],i.la=u[2];const e=u[3];null!=e&&(i.ma=e,i.h.info("VER="+i.ma));const n=u[4];null!=n&&(i.za=n,i.h.info("SVER="+i.za));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,i.K=r,i.h.info("backChannelRequestTimeoutMs_="+r)),r=i;const c=t.g;if(c){const t=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(A(t,"spdy")||A(t,"quic")||A(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ai(s,s.h),s.h=null))}if(r.D){const t=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,qe(r.F,r.D,t))}}i.G=3,i.j&&i.j.xa(),i.$&&(i.O=Date.now()-t.F,i.h.info("Handshake RTT: "+i.O+"ms"));var o=t;if((r=i).oa=Qi(r,r.H?r.la:null,r.W),o.J){hi(r.i,o);var a=o,h=r.K;h&&a.setTimeout(h),a.B&&(Ee(a),Me(a)),r.g=o}else Hi(r);0<i.l.length&&Ui(i)}else"stop"!=u[0]&&"close"!=u[0]||Yi(i,7);else 3==i.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Yi(i,7):Oi(i):"noop"!=u[0]&&i.j&&i.j.wa(u),i.A=0)}Yt(4)}catch(t){}}function Ae(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"==typeof t)M(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var i=t.T();else if(t.R&&"function"==typeof t.R)i=void 0;else if(l(t)||"string"==typeof t){i=[];for(var r=t.length,n=0;n<r;n++)i.push(n)}else for(n in i=[],r=0,t)i[r++]=n;r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(l(t)){for(var e=[],i=t.length,r=0;r<i;r++)e.push(t[r]);return e}for(r in e=[],i=0,t)e[i++]=t[r];return e}(t),n=r.length;for(var s=0;s<n;s++)e.call(void 0,r[s],i&&i[s],t)}}function xe(t,e){this.h={},this.g=[],this.i=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var r=0;r<i;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof xe)for(i=t.T(),r=0;r<i.length;r++)this.set(i[r],t.get(i[r]));else for(r in t)this.set(r,t[r])}function Re(t){if(t.i!=t.g.length){for(var e=0,i=0;e<t.g.length;){var r=t.g[e];Ce(t.h,r)&&(t.g[i++]=r),e++}t.g.length=i}if(t.i!=t.g.length){var n={};for(i=e=0;e<t.g.length;)Ce(n,r=t.g[e])||(t.g[i++]=r,n[r]=1),e++;t.g.length=i}}function Ce(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(n=fe.prototype).setTimeout=function(t){this.P=t},n.gb=function(t){t=t.target;const e=this.L;e&&3==Ci(t)?e.l():this.Ia(t)},n.Ia=function(t){try{if(t==this.g)t:{const c=Ci(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>c)&&(3!=c||V||this.g&&(this.h.h||this.g.ga()||Ni(this.g)))){this.I||4!=c||7==e||Yt(8==e||0>=f?3:2),Ee(this);var i=this.g.ba();this.N=i;e:if(be(this)){var r=Ni(this.g);t="";var n=r.length,s=4==Ci(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Te(this),ke(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<n;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==n-1});r.splice(0,n),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==i,function(t,e,i,r,n,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+n+"]: "+e+"\n"+i+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,c,i),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(a)){var l=a;break e}}l=null}if(!(i=l)){this.i=!1,this.o=3,Qt(12),Te(this),ke(this);break t}Kt(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ie(this,i)}this.U?(we(this,c,o),V&&this.i&&3==c&&(zt(this.V,this.W,"tick",this.fb),this.W.start())):(Kt(this.j,this.m,o,null),Ie(this,o)),4==c&&Te(this),this.i&&!this.I&&(4==c?Zi(this.l,this):(this.i=!1,Me(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.o=3,Qt(12)):(this.o=0,Qt(13)),Te(this),ke(this)}}}catch(t){}},n.fb=function(){if(this.g){var t=Ci(this.g),e=this.g.ga();this.C<e.length&&(Ee(this),we(this,t,e),this.i&&4!=t&&Me(this))}},n.cancel=function(){this.I=!0,Te(this)},n.eb=function(){this.B=null;const t=Date.now();var e,i;0<=t-this.Y?(e=this.j,i=this.A,e.info((function(){return"TIMEOUT: "+i})),2!=this.K&&(Yt(3),Qt(17)),Te(this),this.o=2,ke(this)):Se(this,this.Y-t)},(n=xe.prototype).R=function(){Re(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},n.T=function(){return Re(this),this.g.concat()},n.get=function(t,e){return Ce(this.h,t)?this.h[t]:e},n.set=function(t,e){Ce(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},n.forEach=function(t,e){for(var i=this.T(),r=0;r<i.length;r++){var n=i[r],s=this.get(n);t.call(e,s,n,this)}};var Ne=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Pe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Pe){this.g=void 0!==e?e:t.g,De(this,t.j),this.s=t.s,Oe(this,t.i),Be(this,t.m),this.l=t.l,e=t.h;var i=new Ze;i.i=e.i,e.g&&(i.g=new xe(e.g),i.h=e.h),je(this,i),this.o=t.o}else t&&(i=String(t).match(Ne))?(this.g=!!e,De(this,i[1]||"",!0),this.s=Fe(i[2]||""),Oe(this,i[3]||"",!0),Be(this,i[4]),this.l=Fe(i[5]||"",!0),je(this,i[6]||"",!0),this.o=Fe(i[7]||"")):(this.g=!!e,this.h=new Ze(null,this.g))}function Le(t){return new Pe(t)}function De(t,e,i){t.j=i?Fe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oe(t,e,i){t.i=i?Fe(e,!0):e}function Be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function je(t,e,i){e instanceof Ze?(t.h=e,function(t,e){e&&!t.j&&(Je(t),t.i=null,t.g.forEach((function(t,e){var i=e.toLowerCase();e!=i&&(Ye(this,e),Qe(this,i,t))}),t)),t.j=e}(t.h,t.g)):(i||(e=Ve(e,Ge)),t.h=new Ze(e,t.g))}function qe(t,e,i){t.h.set(e,i)}function Ue(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ve(t,e,i){return"string"==typeof t?(t=encodeURI(t).replace(e,ze),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ze(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Pe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ve(e,He,!0),":");var i=this.i;return(i||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ve(e,He,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&t.push(":",String(i))),(i=this.l)&&(this.i&&"/"!=i.charAt(0)&&t.push("/"),t.push(Ve(i,"/"==i.charAt(0)?Ke:We,!0))),(i=this.h.toString())&&t.push("?",i),(i=this.o)&&t.push("#",Ve(i,$e)),t.join("")};var He=/[#\/\?@]/g,We=/[#\?:]/g,Ke=/[#\?]/g,Ge=/[#\?@]/g,$e=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Je(t){t.g||(t.g=new xe,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var r=t[i].indexOf("="),n=null;if(0<=r){var s=t[i].substring(0,r);n=t[i].substring(r+1)}else s=t[i];e(s,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}(t.i,(function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)})))}function Ye(t,e){Je(t),e=ti(t,e),Ce(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Ce((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Re(t)))}function Xe(t,e){return Je(t),e=ti(t,e),Ce(t.g.h,e)}function Qe(t,e,i){Ye(t,e),0<i.length&&(t.i=null,t.g.set(ti(t,e),E(i)),t.h+=i.length)}function ti(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(n=Ze.prototype).add=function(t,e){Je(this),this.i=null,t=ti(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this},n.forEach=function(t,e){Je(this),this.g.forEach((function(i,r){M(i,(function(i){t.call(e,i,r,this)}),this)}),this)},n.T=function(){Je(this);for(var t=this.g.R(),e=this.g.T(),i=[],r=0;r<e.length;r++)for(var n=t[r],s=0;s<n.length;s++)i.push(e[r]);return i},n.R=function(t){Je(this);var e=[];if("string"==typeof t)Xe(this,t)&&(e=S(e,this.g.get(ti(this,t))));else{t=this.g.R();for(var i=0;i<t.length;i++)e=S(e,t[i])}return e},n.set=function(t,e){return Je(this),this.i=null,Xe(this,t=ti(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},n.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),i=0;i<e.length;i++){var r=e[i],n=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=n;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function ei(t){this.l=t||ri,h.PerformanceNavigationTiming?t=0<(t=h.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ii,ri=10;function ni(t){return!!t.h||!!t.g&&t.g.size>=t.j}function si(t){return t.h?1:t.g?t.g.size:0}function oi(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ai(t,e){t.g?t.g.add(e):t.h=e}function hi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ui(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const i of t.g.values())e=e.concat(i.D);return e}return E(t.i)}function li(){}function ci(){this.g=new li}function fi(t,e,i){const r=i||"";try{Ae(t,(function(t,i){let n=t;c(t)&&(n=Tt(t)),e.push(r+i+"="+encodeURIComponent(n))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function di(t,e,i,r,n){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,n(r)}catch(t){}}function pi(t){this.l=t.$b||null,this.j=t.ib||!1}function mi(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ei.prototype.cancel=function(){if(this.i=ui(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},li.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},li.prototype.parse=function(t){return h.JSON.parse(t,void 0)},v(pi,ne),pi.prototype.g=function(){return new mi(this.l,this.j)},pi.prototype.i=(ii={},function(){return ii}),v(mi,St);var gi=0;function yi(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function vi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bi(t)}function bi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(n=mi.prototype).open=function(t,e){if(this.readyState!=gi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bi(this)},n.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},n.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vi(this)),this.readyState=gi},n.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yi(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},n.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vi(this):bi(this),3==this.readyState&&yi(this)}},n.Ua=function(t){this.g&&(this.response=this.responseText=t,vi(this))},n.Ta=function(t){this.g&&(this.response=t,vi(this))},n.ha=function(){this.g&&vi(this)},n.setRequestHeader=function(t,e){this.v.append(t,e)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join("\r\n")},Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var wi=h.JSON.parse;function _i(t){St.call(this),this.headers=new xe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Mi,this.K=this.L=!1}v(_i,St);var Mi="",Si=/^https?$/i,Ei=["POST","PUT"];function ki(t){return"content-type"==t.toLowerCase()}function Ti(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ii(t),xi(t)}function Ii(t){t.D||(t.D=!0,Et(t,"complete"),Et(t,"error"))}function Ai(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=Ci(t)||2!=t.ba()))if(t.v&&4==Ci(t))jt(t.Fa,0,t);else if(Et(t,"readystatechange"),4==Ci(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var r;if(r=0===a){var n=String(t.H).match(Ne)[1]||null;if(!n&&h.self&&h.self.location){var s=h.self.location.protocol;n=s.substr(0,s.length-1)}r=!Si.test(n?n.toLowerCase():"")}i=r}if(i)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<Ci(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Ii(t)}}finally{xi(t)}}}function xi(t,e){if(t.g){Ri(t);const i=t.g,r=t.C[0]?u:null;t.g=null,t.C=null,e||Et(t,"ready");try{i.onreadystatechange=r}catch(t){}}}function Ri(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Ci(t){return t.g?t.g.readyState:0}function Ni(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Mi:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Pi(t,e,i){t:{for(r in i){var r=!1;break t}r=!0}r||(i=function(t){let e="";return N(t,(function(t,i){e+=i,e+=":",e+=t,e+="\r\n"})),e}(i),"string"==typeof t?null!=i&&encodeURIComponent(String(i)):qe(t,e,i))}function Li(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function Di(t){this.za=0,this.l=[],this.h=new Wt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Li("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Li("baseRetryDelayMs",5e3,t),this.$a=Li("retryDelaySeedMs",1e4,t),this.Ya=Li("forwardChannelMaxRetries",2,t),this.ra=Li("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ei(t&&t.concurrentRequestLimit),this.Ca=new ci,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Oi(t){if(ji(t),3==t.G){var e=t.V++,i=Le(t.F);qe(i,"SID",t.J),qe(i,"RID",e),qe(i,"TYPE","terminate"),Vi(t,i),(e=new fe(t,t.h,e,void 0)).K=2,e.v=Ue(Le(i)),i=!1,h.navigator&&h.navigator.sendBeacon&&(i=h.navigator.sendBeacon(e.v.toString(),"")),!i&&h.Image&&((new Image).src=e.v,i=!0),i||(e.g=tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Me(e)}Xi(t)}function Bi(t){t.g&&(Ki(t),t.g.cancel(),t.g=null)}function ji(t){Bi(t),t.u&&(h.clearTimeout(t.u),t.u=null),$i(t),t.i.cancel(),t.m&&("number"==typeof t.m&&h.clearTimeout(t.m),t.m=null)}function qi(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Ui(t)}function Ui(t){ni(t.i)||t.m||(t.m=!0,Nt(t.Ha,t),t.C=0)}function Fi(t,e){var i;i=e?e.m:t.V++;const r=Le(t.F);qe(r,"SID",t.J),qe(r,"RID",i),qe(r,"AID",t.U),Vi(t,r),t.o&&t.s&&Pi(r,t.o,t.s),i=new fe(t,t.h,i,t.C+1),null===t.o&&(i.H=t.s),e&&(t.l=e.D.concat(t.l)),e=zi(t,i,1e3),i.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ai(t.i,i),ye(i,r,e)}function Vi(t,e){t.j&&Ae({},(function(t,i){qe(e,i,t)}))}function zi(t,e,i){i=Math.min(t.l.length,i);var r=t.j?g(t.j.Oa,t.j,t):null;t:{var n=t.l;let e=-1;for(;;){const t=["count="+i];-1==e?0<i?(e=n[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<i;o++){let i=n[o].h;const a=n[o].g;if(i-=e,0>i)e=Math.max(0,n[o].h-100),s=!1;else try{fi(a,t,"req"+i+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,i),e.D=t,r}function Hi(t){t.g||t.u||(t.Y=1,Nt(t.Ga,t),t.A=0)}function Wi(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ee(g(t.Ga,t),Ji(t,t.A)),t.A++,!0)}function Ki(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function Gi(t){t.g=new fe(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Le(t.oa);qe(e,"RID","rpc"),qe(e,"SID",t.J),qe(e,"CI",t.N?"0":"1"),qe(e,"AID",t.U),Vi(t,e),qe(e,"TYPE","xmlhttp"),t.o&&t.s&&Pi(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var i=t.g;t=t.la,i.K=1,i.v=Ue(Le(e)),i.s=null,i.U=!0,ve(i,t)}function $i(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function Zi(t,e){var i=null;if(t.g==e){$i(t),Ki(t),t.g=null;var r=2}else{if(!oi(t.i,e))return;i=e.D,hi(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){i=e.s?e.s.length:0,e=Date.now()-e.F;var n=t.C;Et(r=Zt(),new te(r,i,e,n)),Ui(t)}else Hi(t);else if(3==(n=e.o)||0==n&&0<t.I||!(1==r&&function(t,e){return!(si(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=ee(g(t.Ha,t,e),Ji(t,t.C)),t.C++,0)))}(t,e)||2==r&&Wi(t)))switch(i&&0<i.length&&(e=t.i,e.i=e.i.concat(i)),n){case 1:Yi(t,5);break;case 4:Yi(t,10);break;case 3:Yi(t,6);break;default:Yi(t,2)}}function Ji(t,e){let i=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(i*=2),i*e}function Yi(t,e){if(t.h.info("Error code "+e),2==e){var i=null;t.j&&(i=null);var r=g(t.jb,t);i||(i=new Pe("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||De(i,"https"),Ue(i)),function(t,e){const i=new Wt;if(h.Image){const r=new Image;r.onload=y(di,i,r,"TestLoadImage: loaded",!0,e),r.onerror=y(di,i,r,"TestLoadImage: error",!1,e),r.onabort=y(di,i,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(di,i,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(i.toString(),r)}else Qt(2);t.G=0,t.j&&t.j.va(e),Xi(t),ji(t)}function Xi(t){t.G=0,t.I=-1,t.j&&(0==ui(t.i).length&&0==t.l.length||(t.i.i.length=0,E(t.l),t.l.length=0),t.j.ua())}function Qi(t,e,i){let r=(n=i)instanceof Pe?Le(n):new Pe(n,void 0);var n;if(""!=r.i)e&&Oe(r,e+"."+r.i),Be(r,r.m);else{const t=h.location;r=function(t,e,i,r){var n=new Pe(null,void 0);return t&&De(n,t),e&&Oe(n,e),i&&Be(n,i),r&&(n.l=r),n}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,i)}return t.aa&&N(t.aa,(function(t,e){qe(r,e,t)})),e=t.D,i=t.sa,e&&i&&qe(r,e,i),qe(r,"VER",t.ma),Vi(t,r),r}function tr(t,e,i){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=i&&t.Ba&&!t.qa?new _i(new pi({ib:!0})):new _i(t.qa)).L=t.H,e}function er(){}function ir(){if(U&&!(10<=Number(Q)))throw Error("Environmental error: no available transport.")}function rr(t,e){St.call(this),this.g=new Di(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!k(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!k(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new or(this)}function nr(t){ue.call(this);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function sr(){le.call(this),this.status=1}function or(t){this.g=t}(n=_i.prototype).ea=function(t,e,i,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ae.g(),this.C=this.u?se(this.u):se(ae),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ti(this,t)}t=i||"";const n=new xe(this.headers);r&&Ae(r,(function(t,e){n.set(e,t)})),r=function(t){t:{var e=ki;const i=t.length,r="string"==typeof t?t.split(""):t;for(let n=0;n<i;n++)if(n in r&&e.call(void 0,r[n],n,t)){e=n;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(n.T()),i=h.FormData&&t instanceof h.FormData,!(0<=_(Ei,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ri(this),0<this.B&&((this.K=function(t){return U&&Y()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=jt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ti(this,t)}},n.pa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},n.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),xi(this))},n.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xi(this,!0)),_i.Z.M.call(this)},n.Fa=function(){this.s||(this.F||this.v||this.l?Ai(this):this.cb())},n.cb=function(){Ai(this)},n.ba=function(){try{return 2<Ci(this)?this.g.status:-1}catch(t){return-1}},n.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},n.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),wi(e)}},n.Da=function(){return this.m},n.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(n=Di.prototype).ma=8,n.G=1,n.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},n.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const n=new fe(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=P(s),D(s,this.P)):s=this.P),null===this.o&&(n.H=s),this.ja)t:{for(var e=0,i=0;i<this.l.length;i++){var r=this.l[i];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=i;break t}if(4096===e||i===this.l.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=zi(this,n,e),qe(i=Le(this.F),"RID",t),qe(i,"CVER",22),this.D&&qe(i,"X-HTTP-Session-Id",this.D),Vi(this,i),this.o&&s&&Pi(i,this.o,s),ai(this.i,n),this.Ra&&qe(i,"TYPE","init"),this.ja?(qe(i,"$req",e),qe(i,"SID","null"),n.$=!0,ye(n,i,null)):ye(n,i,e),this.G=2}}else 3==this.G&&(t?Fi(this,t):0==this.l.length||ni(this.i)||Fi(this))},n.Ga=function(){if(this.u=null,Gi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ee(g(this.bb,this),t)}},n.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Qt(10),Bi(this),Gi(this))},n.ab=function(){null!=this.v&&(this.v=null,Bi(this),Wi(this),Qt(19))},n.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Qt(2)):(this.h.info("Failed to ping google.com"),Qt(1))},(n=er.prototype).xa=function(){},n.wa=function(){},n.va=function(){},n.ua=function(){},n.Oa=function(){},ir.prototype.g=function(t,e){return new rr(t,e)},v(rr,St),rr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,i=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Nt(g(t.hb,t,e))),Qt(0),t.W=e,t.aa=i||{},t.N=t.X,t.F=Qi(t,null,t.W),Ui(t)},rr.prototype.close=function(){Oi(this.g)},rr.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,qi(this.g,e)}else this.v?((e={}).__data__=Tt(t),qi(this.g,e)):qi(this.g,t)},rr.prototype.M=function(){this.g.j=null,delete this.j,Oi(this.g),delete this.g,rr.Z.M.call(this)},v(nr,ue),v(sr,le),v(or,er),or.prototype.xa=function(){Et(this.g,"a")},or.prototype.wa=function(t){Et(this.g,new nr(t))},or.prototype.va=function(t){Et(this.g,new sr(t))},or.prototype.ua=function(){Et(this.g,"b")},ir.prototype.createWebChannel=ir.prototype.g,rr.prototype.send=rr.prototype.u,rr.prototype.open=rr.prototype.m,rr.prototype.close=rr.prototype.close,ie.NO_ERROR=0,ie.TIMEOUT=8,ie.HTTP_ERROR=6,re.COMPLETE="complete",oe.EventType=he,he.OPEN="a",he.CLOSE="b",he.ERROR="c",he.MESSAGE="d",St.prototype.listen=St.prototype.N,_i.prototype.listenOnce=_i.prototype.O,_i.prototype.getLastError=_i.prototype.La,_i.prototype.getLastErrorCode=_i.prototype.Da,_i.prototype.getStatus=_i.prototype.ba,_i.prototype.getResponseJson=_i.prototype.Qa,_i.prototype.getResponseText=_i.prototype.ga,_i.prototype.send=_i.prototype.ea;var ar=o.createWebChannelTransport=function(){return new ir},hr=o.getStatEventTarget=function(){return Zt()},ur=o.ErrorCode=ie,lr=o.EventType=re,cr=o.Event=Gt,fr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},dr=o.FetchXmlHttpFactory=pi,pr=o.WebChannel=oe,mr=o.XhrIo=_i})),n.register("2px04",(function(t,e){var i,r,n=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(i===setTimeout)return setTimeout(t,0);if((i===s||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:s}catch(t){i=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var h,u=[],l=!1,c=-1;function f(){l&&h&&(l=!1,h.length?u=h.concat(u):c=-1,u.length&&d())}function d(){if(!l){var t=a(f);l=!0;for(var e=u.length;e;){for(h=u,u=[];++c<e;)h&&h[c].run();c=-1,e=u.length}h=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];u.push(new p(t,e)),1!==u.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=m,n.addListener=m,n.once=m,n.off=m,n.removeListener=m,n.removeAllListeners=m,n.emit=m,n.prependListener=m,n.prependOnceListener=m,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}})),n.register("fLfgL",(function(e,i){t(e.exports,"db",(()=>c)),t(e.exports,"provider",(()=>d)),t(e.exports,"database",(()=>f)),t(e.exports,"auth",(()=>l)),t(e.exports,"signInWithPopup",(()=>n("wEerJ").c)),t(e.exports,"signOut",(()=>n("wEerJ").x)),t(e.exports,"onAuthStateChanged",(()=>n("wEerJ").t)),t(e.exports,"collection",(()=>n("f1vV5").collection)),t(e.exports,"addDoc",(()=>n("f1vV5").addDoc)),t(e.exports,"setDoc",(()=>n("f1vV5").setDoc)),t(e.exports,"doc",(()=>n("f1vV5").doc)),t(e.exports,"getDocs",(()=>n("f1vV5").getDocs)),t(e.exports,"updateDoc",(()=>n("f1vV5").updateDoc)),t(e.exports,"deleteDoc",(()=>n("f1vV5").deleteDoc)),t(e.exports,"ref",(()=>n("4cEA8").ref)),t(e.exports,"set",(()=>n("4cEA8").set)),t(e.exports,"child",(()=>n("4cEA8").child)),t(e.exports,"update",(()=>n("4cEA8").update)),t(e.exports,"remove",(()=>n("4cEA8").remove)),t(e.exports,"get",(()=>n("4cEA8").get)),t(e.exports,"getDoc",(()=>n("f1vV5").getDoc)),n("j1HNW");var r=n("kVAWG");n("avCtq");var s=n("h6spF");n("6k2Gr");var o=n("f1vV5");n("j1HNW");r=n("kVAWG");n("6VvtN");var a=n("4cEA8");n("58lYo");var h=n("wEerJ");n("6VvtN");a=n("4cEA8");const u=r.initializeApp({apiKey:"AIzaSyBKayAlMLGl1ZGSDeQS5ctYu4WZLTp4xoo",authDomain:"leoxi-c5242.firebaseapp.com",projectId:"leoxi-c5242",storageBucket:"leoxi-c5242.appspot.com",messagingSenderId:"898565041070",appId:"1:898565041070:web:4f65a22bd92cb48177363f",measurementId:"G-J4KFEPQF1N"}),l=(s.getAnalytics(u),h.n()),c=o.getFirestore(),f=a.getDatabase();let d=new h.N})),n.register("j1HNW",(function(e,i){t(e.exports,"initializeApp",(()=>n("kVAWG").initializeApp)),t(e.exports,"registerVersion",(()=>n("kVAWG").registerVersion));n("kVAWG");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n("kVAWG").registerVersion("firebase","9.1.2","app")})),n.register("avCtq",(function(e,i){t(e.exports,"getAnalytics",(()=>n("h6spF").getAnalytics)),n("h6spF")})),n.register("h6spF",(function(e,i){t(e.exports,"getAnalytics",(()=>C));var r=n("kVAWG"),s=n("aa1lO"),o=n("15Gf9"),a=n("181Xw");n("9zyVv");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h="analytics",u="https://www.googletagmanager.com/gtag/js",l=new s.Logger("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function f(t,e,i,r){return async function(n,s,o){try{"event"===n?await async function(t,e,i,r,n){try{let s=[];if(n&&n.send_to){let t=n.send_to;Array.isArray(t)||(t=[t]);const r=await c(i);for(const i of t){const t=r.find((t=>t.measurementId===i)),n=t&&e[t.appId];if(!n){s=[];break}s.push(n)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",r,n||{})}catch(t){l.error(t)}}(t,e,i,s,o):"config"===n?await async function(t,e,i,r,n,s){const o=r[n];try{if(o)await e[o];else{const t=(await c(i)).find((t=>t.measurementId===n));t&&await e[t.appId]}}catch(t){l.error(t)}t("config",n,s)}(t,e,i,r,s,o):t("set",s)}catch(t){l.error(t)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const d={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},p=new o.ErrorFactory("analytics","Analytics",d);const m=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function g(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function y(t,e=m,i){const{appId:r,apiKey:n,measurementId:s}=t.options;if(!r)throw p.create("no-app-id");if(!n){if(s)return{measurementId:s,appId:r};throw p.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new b;return setTimeout((async()=>{a.abort()}),void 0!==i?i:6e4),v({appId:r,apiKey:n,measurementId:s},o,a,e)}async function v(t,{throttleEndTimeMillis:e,backoffCount:i},r,n=m){const{appId:s,measurementId:a}=t;try{await function(t,e){return new Promise(((i,r)=>{const n=Math.max(e-Date.now(),0),s=setTimeout(i,n);t.addEventListener((()=>{clearTimeout(s),r(p.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(r,e)}catch(t){if(a)return l.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:a};throw t}try{const e=await async function(t){var e;const{appId:i,apiKey:r}=t,n={method:"GET",headers:g(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",i),o=await fetch(s,n);if(200!==o.status&&304!==o.status){let t="";try{const i=await o.json();(null===(e=i.error)||void 0===e?void 0:e.message)&&(t=i.error.message)}catch(t){}throw p.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return n.deleteThrottleMetadata(s),e}catch(e){if(!function(t){if(!(t instanceof o.FirebaseError&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(n.deleteThrottleMetadata(s),a)return l.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:a};throw e}const h=503===Number(e.customData.httpStatus)?o.calculateBackoffMillis(i,n.intervalMillis,30):o.calculateBackoffMillis(i,n.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:i+1};return n.setThrottleMetadata(s,u),l.debug(`Calling attemptFetch again in ${h} millis`),v(t,u,r,n)}}class b{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w(t,e,i,r,n,s,a){var h;const c=y(t);c.then((e=>{i[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&l.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>l.error(t))),e.push(c);const f=async function(){if(!o.isIndexedDBAvailable())return l.warn(p.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await o.validateIndexedDBOpenable()}catch(t){return l.warn(p.create("indexeddb-unavailable",{errorInfo:t}).message),!1}return!0}().then((t=>t?r.getId():void 0)),[d,m]=await Promise.all([c,f]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(u))return e;return null})()||function(t,e){const i=document.createElement("script");i.src=`${u}?l=${t}&id=${e}`,i.async=!0,document.head.appendChild(i)}(s,d.measurementId),n("js",new Date);const g=null!==(h=null==a?void 0:a.config)&&void 0!==h?h:{};return g.origin="firebase",g.update=!0,null!=m&&(g.firebase_id=m),n("config",d.measurementId,g),d.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t){this.app=t}_delete(){return delete M[this.app.options.appId],Promise.resolve()}}let M={},S=[];const E={};let k,T,I="dataLayer",A="gtag",x=!1;function R(t,e,i){!function(){const t=[];if(o.isBrowserExtension()&&t.push("This is a browser extension environment."),o.areCookiesEnabled()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),i=p.create("invalid-analytics-context",{errorInfo:e});l.warn(i.message)}}();const r=t.options.appId;if(!r)throw p.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw p.create("no-api-key");l.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=M[r])throw p.create("already-exists",{id:r});if(!x){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(I);const{wrappedGtag:t,gtagCore:e}=function(t,e,i,r,n){let s=function(...t){window[r].push(arguments)};return window[n]&&"function"==typeof window[n]&&(s=window[n]),window[n]=f(s,t,e,i),{gtagCore:s,wrappedGtag:window[n]}}(M,S,E,I,A);T=t,k=e,x=!0}M[r]=w(t,S,E,e,k,I,i);return new _(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t=r.getApp()){t=o.getModularInstance(t);const e=r._getProvider(t,h);return e.isInitialized()?e.getImmediate():function(t,e={}){const i=r._getProvider(t,h);if(i.isInitialized()){const t=i.getImmediate();if(o.deepEqual(e,i.getOptions()))return t;throw p.create("already-initialized")}return i.initialize({options:e})}(t)}function N(t,e,i,r){t=o.getModularInstance(t),async function(t,e,i,r,n){if(n&&n.global)t("event",i,r);else{const n=await e;t("event",i,Object.assign(Object.assign({},r),{send_to:n}))}}(T,M[t.app.options.appId],e,i,r).catch((t=>l.error(t)))}r._registerComponent(new a.Component(h,((t,{options:e})=>R(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),r._registerComponent(new a.Component("analytics-internal",(function(t){try{const e=t.getProvider(h).getImmediate();return{logEvent:(t,i,r)=>N(e,t,i,r)}}catch(t){throw p.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),r.registerVersion("@firebase/analytics","0.7.1")})),n.register("9zyVv",(function(t,e){var i=n("kVAWG"),r=n("181Xw"),s=n("15Gf9"),o=n("4Q0M1");const a="0.5.1",h=1e4,u="w:0.5.1",l="FIS_v2",c=36e5,f={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},d=new s.ErrorFactory("installations","Installations",f);function p(t){return t instanceof s.FirebaseError&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function g(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function y(t,e){const i=(await e.json()).error;return d.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function v({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function b(t,{refreshToken:e}){const i=v(t);return i.append("Authorization",function(t){return`FIS_v2 ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),i}async function w(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const M=/^[cdef][\w-]{21}$/;function S(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return M.test(e)?e:""}catch(t){return""}}function E(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function T(t,e){const i=E(t);I(i,e),function(t,e){const i=x();i&&i.postMessage({key:t,fid:e});R()}(i,e)}function I(t,e){const i=k.get(t);if(i)for(const t of i)t(e)}let A=null;function x(){return!A&&"BroadcastChannel"in self&&(A=new BroadcastChannel("[Firebase] FID Change"),A.onmessage=t=>{I(t.data.key,t.data.fid)}),A}function R(){0===k.size&&A&&(A.close(),A=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="firebase-installations-store";let N=null;function P(){return N||(N=o.openDb("firebase-installations-database",1,(t=>{if(0===t.oldVersion)t.createObjectStore(C)}))),N}async function L(t,e){const i=E(t),r=(await P()).transaction(C,"readwrite"),n=r.objectStore(C),s=await n.get(i);return await n.put(e,i),await r.complete,s&&s.fid===e.fid||T(t,e.fid),e}async function D(t){const e=E(t),i=(await P()).transaction(C,"readwrite");await i.objectStore(C).delete(e),await i.complete}async function O(t,e){const i=E(t),r=(await P()).transaction(C,"readwrite"),n=r.objectStore(C),s=await n.get(i),o=e(s);return void 0===o?await n.delete(i):await n.put(o,i),await r.complete,!o||s&&s.fid===o.fid||T(t,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t){let e;const i=await O(t,(i=>{const r=function(t){return U(t||{fid:S(),registrationStatus:0})}(i),n=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(d.create("app-offline"))}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(t,e){try{const i=await async function(t,{fid:e}){const i=m(t),r=v(t),n={fid:e,authVersion:l,appId:t.appId,sdkVersion:u},s={method:"POST",headers:r,body:JSON.stringify(n)},o=await w((()=>fetch(i,s)));if(o.ok){const t=await o.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:g(t.authToken)}}throw await y("Create Installation",o)}(t,e);return L(t,i)}catch(i){throw p(i)&&409===i.customData.serverCode?await D(t):await L(t,{fid:e.fid,registrationStatus:0}),i}}(t,i);return{installationEntry:i,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:j(t)}:{installationEntry:e}}(t,r);return e=n.registrationPromise,n.installationEntry}));return""===i.fid?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}async function j(t){let e=await q(t);for(;1===e.registrationStatus;)await _(100),e=await q(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:i}=await B(t);return i||e}return e}function q(t){return O(t,(t=>{if(!t)throw d.create("installation-not-found");return U(t)}))}function U(t){return 1===(e=t).registrationStatus&&e.registrationTime+h<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function F({appConfig:t,platformLoggerProvider:e},i){const r=function(t,{fid:e}){return`${m(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,i),n=b(t,i),s=e.getImmediate({optional:!0});s&&n.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:u}},a={method:"POST",headers:n,body:JSON.stringify(o)},h=await w((()=>fetch(r,a)));if(h.ok){return g(await h.json())}throw await y("Generate Auth Token",h)}async function V(t,e=!1){let i;const r=await O(t.appConfig,(r=>{if(!H(r))throw d.create("not-registered");const n=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+c}(t)}(n))return r;if(1===n.requestStatus)return i=async function(t,e){let i=await z(t.appConfig);for(;1===i.authToken.requestStatus;)await _(100),i=await z(t.appConfig);const r=i.authToken;return 0===r.requestStatus?V(t,e):r}(t,e),r;{if(!navigator.onLine)throw d.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return i=async function(t,e){try{const i=await F(t,e),r=Object.assign(Object.assign({},e),{authToken:i});return await L(t.appConfig,r),i}catch(i){if(!p(i)||401!==i.customData.serverCode&&404!==i.customData.serverCode){const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await L(t.appConfig,i)}else await D(t.appConfig);throw i}}(t,e),e}}));return i?await i:r.authToken}function z(t){return O(t,(t=>{if(!H(t))throw d.create("not-registered");const e=t.authToken;return 1===(i=e).requestStatus&&i.requestTime+h<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var i;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function H(t){return void 0!==t&&2===t.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function W(t,e=!1){const i=t;await async function(t){const{registrationPromise:e}=await B(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i.appConfig);return(await V(i,e)).token}function K(t){return d.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="installations",$=t=>{const e=t.getProvider("app").getImmediate(),r=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){if(!t||!t.options)throw K("App Configuration");if(!t.name)throw K("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!t.options[i])throw K(i);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:r,platformLoggerProvider:i._getProvider(e,"platform-logger"),_delete:()=>Promise.resolve()}},Z=t=>{const e=t.getProvider("app").getImmediate(),r=i._getProvider(e,G).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:i,registrationPromise:r}=await B(e.appConfig);return r?r.catch(console.error):V(e).catch(console.error),i.fid}(r),getToken:t=>W(r,t)}};i._registerComponent(new r.Component(G,$,"PUBLIC")),i._registerComponent(new r.Component("installations-internal",Z,"PRIVATE")),i.registerVersion("@firebase/installations",a)})),n.register("4Q0M1",(function(t,e){!function(e,i){"object"==typeof t.exports?i(t.exports):"function"==typeof define&&define.amd?define(["exports"],i):i((e=e||self).idb={})}(t.exports,(function(t){function e(t){return Array.prototype.slice.call(t)}function i(t){return new Promise((function(e,i){t.onsuccess=function(){e(t.result)},t.onerror=function(){i(t.error)}}))}function r(t,e,r){var n,s=new Promise((function(s,o){i(n=t[e].apply(t,r)).then(s,o)}));return s.request=n,s}function n(t,e,i){var n=r(t,e,i);return n.then((function(t){if(t)return new l(t,n.request)}))}function s(t,e,i){i.forEach((function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(t){this[e][i]=t}})}))}function o(t,e,i,n){n.forEach((function(n){n in i.prototype&&(t.prototype[n]=function(){return r(this[e],n,arguments)})}))}function a(t,e,i,r){r.forEach((function(r){r in i.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})}))}function h(t,e,i,r){r.forEach((function(r){r in i.prototype&&(t.prototype[r]=function(){return n(this[e],r,arguments)})}))}function u(t){this._index=t}function l(t,e){this._cursor=t,this._request=e}function c(t){this._store=t}function f(t){this._tx=t,this.complete=new Promise((function(e,i){t.oncomplete=function(){e()},t.onerror=function(){i(t.error)},t.onabort=function(){i(t.error)}}))}function d(t,e,i){this._db=t,this.oldVersion=e,this.transaction=new f(i)}function p(t){this._db=t}s(u,"_index",["name","keyPath","multiEntry","unique"]),o(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),h(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(l,"_cursor",["direction","key","primaryKey","value"]),o(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(l.prototype[t]=function(){var e=this,r=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,r),i(e._request).then((function(t){if(t)return new l(t,e._request)}))}))})})),c.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},c.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},s(c,"_store",["name","keyPath","indexNames","autoIncrement"]),o(c,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),h(c,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(c,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new c(this._tx.objectStore.apply(this._tx,arguments))},s(f,"_tx",["objectStoreNames","mode"]),a(f,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new c(this._db.createObjectStore.apply(this._db,arguments))},s(d,"_db",["name","version","objectStoreNames"]),a(d,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[c,u].forEach((function(i){t in i.prototype&&(i.prototype[t.replace("open","iterate")]=function(){var i=e(arguments),r=i[i.length-1],n=this._store||this._index,s=n[t].apply(n,i.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[u,c].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var i=this,r=[];return new Promise((function(n){i.iterateCursor(t,(function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():n(r)):n(r)}))}))})})),t.openDb=function(t,e,i){var n=r(indexedDB,"open",[t,e]),s=n.request;return s&&(s.onupgradeneeded=function(t){i&&i(new d(s.result,t.oldVersion,s.transaction))}),n.then((function(t){return new p(t)}))},t.deleteDb=function(t){return r(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{value:!0})}))})),n.register("6k2Gr",(function(e,i){t(e.exports,"getFirestore",(()=>n("f1vV5").getFirestore)),t(e.exports,"getDocs",(()=>n("f1vV5").getDocs)),t(e.exports,"collection",(()=>n("f1vV5").collection)),t(e.exports,"addDoc",(()=>n("f1vV5").addDoc)),t(e.exports,"setDoc",(()=>n("f1vV5").setDoc)),t(e.exports,"doc",(()=>n("f1vV5").doc)),t(e.exports,"updateDoc",(()=>n("f1vV5").updateDoc)),t(e.exports,"deleteDoc",(()=>n("f1vV5").deleteDoc)),t(e.exports,"getDoc",(()=>n("f1vV5").getDoc)),n("f1vV5")})),n.register("6VvtN",(function(e,i){t(e.exports,"getDatabase",(()=>n("4cEA8").getDatabase)),t(e.exports,"ref",(()=>n("4cEA8").ref)),t(e.exports,"set",(()=>n("4cEA8").set)),t(e.exports,"child",(()=>n("4cEA8").child)),t(e.exports,"update",(()=>n("4cEA8").update)),t(e.exports,"remove",(()=>n("4cEA8").remove)),t(e.exports,"get",(()=>n("4cEA8").get)),n("4cEA8")})),n.register("4cEA8",(function(e,i){t(e.exports,"update",(()=>on)),t(e.exports,"ref",(()=>en)),t(e.exports,"remove",(()=>nn)),t(e.exports,"get",(()=>an)),t(e.exports,"set",(()=>sn)),t(e.exports,"getDatabase",(()=>fn)),t(e.exports,"child",(()=>rn));var r=n("kVAWG"),s=n("181Xw"),o=n("15Gf9"),a=n("aa1lO"),h=n("2px04");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),o.stringify(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:o.jsonEval(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return o.contains(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new l(e)}}catch(t){}return new c},d=f("localStorage"),p=f("sessionStorage"),m=new a.Logger("@firebase/database"),g=function(){let t=1;return function(){return t++}}(),y=function(t){const e=o.stringToByteArray(t),i=new o.Sha1;i.update(e);const r=i.digest();return o.base64.encodeByteArray(r)},v=function(...t){let e="";for(let i=0;i<t.length;i++){const r=t[i];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?e+=v.apply(null,r):e+="object"==typeof r?o.stringify(r):r,e+=" "}return e};let b=null,w=!0;const _=function(t,e){o.assert(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(m.logLevel=a.LogLevel.VERBOSE,b=m.log.bind(m),e&&p.set("logging_enabled",!0)):"function"==typeof t?b=t:(b=null,p.remove("logging_enabled"))},M=function(...t){if(!0===w&&(w=!1,null===b&&!0===p.get("logging_enabled")&&_(!0)),b){const e=v.apply(null,t);b(e)}},S=function(t){return function(...e){M(t,...e)}},E=function(...t){const e="FIREBASE INTERNAL ERROR: "+v(...t);m.error(e)},k=function(...t){const e=`FIREBASE FATAL ERROR: ${v(...t)}`;throw m.error(e),new Error(e)},T=function(...t){const e="FIREBASE WARNING: "+v(...t);m.warn(e)},I=function(t){return"number"==typeof t&&(t!=t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},A="[MIN_NAME]",x="[MAX_NAME]",R=function(t,e){if(t===e)return 0;if(t===A||e===x)return-1;if(e===A||t===x)return 1;{const i=U(t),r=U(e);return null!==i?null!==r?i-r==0?t.length-e.length:i-r:-1:null!==r?1:t<e?-1:1}},C=function(t,e){return t===e?0:t<e?-1:1},N=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+o.stringify(e))},P=function(t){if("object"!=typeof t||null===t)return o.stringify(t);const e=[];for(const i in t)e.push(i);e.sort();let i="{";for(let r=0;r<e.length;r++)0!==r&&(i+=","),i+=o.stringify(e[r]),i+=":",i+=P(t[e[r]]);return i+="}",i},L=function(t,e){const i=t.length;if(i<=e)return[t];const r=[];for(let n=0;n<i;n+=e)n+e>i?r.push(t.substring(n,i)):r.push(t.substring(n,n+e));return r};function D(t,e){for(const i in t)t.hasOwnProperty(i)&&e(i,t[i])}const O=function(t){o.assert(!I(t),"Invalid JSON number");const e=1023;let i,r,n,s,a;0===t?(r=0,n=0,i=1/t==-1/0?1:0):(i=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(t)/Math.LN2),e),r=s+e,n=Math.round(t*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,n=Math.round(t/Math.pow(2,-1074))));const h=[];for(a=52;a;a-=1)h.push(n%2?1:0),n=Math.floor(n/2);for(a=11;a;a-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(i?1:0),h.reverse();const u=h.join("");let l="";for(a=0;a<64;a+=8){let t=parseInt(u.substr(a,8),2).toString(16);1===t.length&&(t="0"+t),l+=t}return l.toLowerCase()};const B=new RegExp("^-?(0*)\\d{1,10}$"),j=-2147483648,q=2147483647,U=function(t){if(B.test(t)){const e=Number(t);if(e>=j&&e<=q)return e}return null},F=function(t){try{t()}catch(t){setTimeout((()=>{const e=t.stack||"";throw T("Exception was thrown by user callback.",e),t}),Math.floor(0))}},V=function(t,e){const i=setTimeout(t,e);return"object"==typeof i&&i.unref&&i.unref(),i};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null==e?void 0:e.getImmediate({optional:!0}),this.appCheck||null==e||e.get().then((t=>this.appCheck=t))}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,i)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,i):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){T(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t,e,i){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((t=>this.auth_=t))}getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(M("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,i)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,i):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',T(t)}}class W{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}W.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K="5",G=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$="websocket",Z="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(t,e,i,r,n=!1,s="",o=!1){this.secure=e,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=n,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=d.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&d.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function Y(t,e,i){let r;if(o.assert("string"==typeof e,"typeof type must == string"),o.assert("object"==typeof i,"typeof params must == object"),e===$)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==Z)throw new Error("Unknown connection type: "+e);r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}(function(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams})(t)&&(i.ns=t.namespace);const n=[];return D(i,((t,e)=>{n.push(t+"="+e)})),r+n.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(){this.counters_={}}incrementCounter(t,e=1){o.contains(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return o.deepCopy(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={},tt={};function et(t){const e=t.toString();return Q[e]||(Q[e]=new X),Q[e]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){for(this.pendingResponses[t]=e;this.pendingResponses[this.currentResponseNum];){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&F((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="start";class nt{constructor(t,e,i,r,n,s,o){this.connId=t,this.repoInfo=e,this.applicationId=i,this.appCheckToken=r,this.authToken=n,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=S(t),this.stats_=et(e),this.urlFn=t=>(this.appCheckToken&&(t.ac=this.appCheckToken),Y(e,Z,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new it(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(t){if(o.isNodeSdk()||"complete"===document.readyState)t();else{let e=!1;const i=function(){document.body?e||(e=!0,t()):setTimeout(i,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&i()})),window.attachEvent("onload",i))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new st(((...t)=>{const[e,i,r,n,s]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===rt)this.id=i,this.password=r;else{if("close"!==e)throw new Error("Unrecognized command received: "+e);i?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(i,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,i]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,i)}),(()=>{this.onClosed_()}),this.urlFn);const t={start:"t"};t.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=this.scriptTagHolder.uniqueCallbackIdentifier),t.v=K,this.transportSessionId&&(t.s=this.transportSessionId),this.lastSessionId&&(t.ls=this.lastSessionId),this.applicationId&&(t.p=this.applicationId),this.appCheckToken&&(t.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&G.test(location.hostname)&&(t.r="f");const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nt.forceAllow_=!0}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){return!o.isNodeSdk()&&(!!nt.forceAllow_||!(nt.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=o.stringify(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const i=o.base64Encode(e),r=L(i,1840);for(let t=0;t<r.length;t++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[t]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if(o.isNodeSdk())return;this.myDisconnFrame=document.createElement("iframe");const i={dframe:"t"};i.id=t,i.pw=e,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=o.stringify(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class st{constructor(t,e,i,r){if(this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,o.isNodeSdk())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=g(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=e,this.myIFrame=st.createIFrame_();let i="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){i='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(t){M("frame writing exception"),t.stack&&M(t.stack),M(t)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||M("No IE domain setting required")}catch(e){const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial;let e=this.urlFn(t),i="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+i.length<=1870))break;{const t=this.pendingSegs.shift();i=i+"&seg"+r+"="+t.seg+"&ts"+r+"="+t.ts+"&d"+r+"="+t.d,r++}}return e+=i,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,i){this.pendingSegs.push({seg:t,ts:e,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const i=()=>{this.outstandingRequests.delete(e),this.newRequest_()},r=setTimeout(i,Math.floor(25e3));this.addTag(t,(()=>{clearTimeout(r),i()}))}addTag(t,e){o.isNodeSdk()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const t=i.readyState;t&&"loaded"!==t&&"complete"!==t||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),e())},i.onerror=()=>{M("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(t){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ot=null;"undefined"!=typeof MozWebSocket?ot=MozWebSocket:"undefined"!=typeof WebSocket&&(ot=WebSocket);class at{constructor(t,e,i,r,n,s,o){this.connId=t,this.applicationId=i,this.appCheckToken=r,this.authToken=n,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=S(this.connId),this.stats_=et(e),this.connURL=at.connectionURL_(e,s,o,r),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,i,r){const n={};return n.v=K,!o.isNodeSdk()&&"undefined"!=typeof location&&location.hostname&&G.test(location.hostname)&&(n.r="f"),e&&(n.s=e),i&&(n.ls=i),r&&(n.ac=r),Y(t,$,n)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,d.set("previous_websocket_failure",!0);try{if(o.isNodeSdk()){const t=this.nodeAdmin?"AdminNode":"Node",e={headers:{"User-Agent":`Firebase/5/${u}/${h.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i={},r=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy;r&&(e.proxy={origin:r}),this.mySock=new ot(this.connURL,[],e)}else{const t={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new ot(this.connURL,[],t)}}catch(t){this.log_("Error instantiating WebSocket.");const e=t.message||t.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(e);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&null!==ot&&!at.forceDisallow_}static previouslyFailed(){return d.isInMemoryStorage||!0===d.get("previous_websocket_failure")}markConnectionHealthy(){d.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=o.jsonEval(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(o.assert(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=o.stringify(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const i=L(e,16384);i.length>1&&this.sendString_(String(i.length));for(let t=0;t<i.length;t++)this.sendString_(i[t])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2,at.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[nt,at]}initTransports_(t){const e=at&&at.isAvailable();let i=e&&!at.previouslyFailed();if(t.webSocketOnly&&(e||T("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[at];else{const t=this.transports_=[];for(const e of ht.ALL_TRANSPORTS)e&&e.isAvailable()&&t.push(e)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e,i,r,n,s,o,a,h,u){this.id=t,this.repoInfo_=e,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=n,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=h,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=S("c:"+this.id+":"),this.transportManager_=new ht(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,i)}),Math.floor(0));const r=t.healthyTimeout||0;r>0&&(this.healthyTimeout_=V((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if("t"in t){const e=t.t;"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=N("t",t),i=N("d",t);if("c"===e)this.onSecondaryControl_(i);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(i)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=N("t",t),i=N("d",t);"c"===e?this.onControl_(i):"d"===e&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=N("t",t);if("d"in t){const i=t.d;if("h"===e)this.onHandshake_(i);else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(i):"r"===e?this.onReset_(i):"e"===e?E("Server Error: "+i):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):E("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,i=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),K!==i&&T("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,i),V((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):V((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(d.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{put(t,e,i,r){}merge(t,e,i,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,i){}onDisconnectMerge(t,e,i){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.allowedEvents_=t,this.listeners_={},o.assert(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let t=0;t<i.length;t++)i[t].callback.apply(i[t].context,e)}}on(t,e,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:i});const r=this.getInitialEvent(t);r&&e.apply(i,r)}off(t,e,i){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let t=0;t<r.length;t++)if(r[t].callback===e&&(!i||i===r[t].context))return void r.splice(t,1)}validateEventType_(t){o.assert(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ct{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||o.isMobileCordova()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ft}getInitialEvent(t){return o.assert("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function pt(){return new dt("")}function mt(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gt(t){return t.pieces_.length-t.pieceNum_}function yt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new dt(t.pieces_,e)}function vt(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bt(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wt(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let i=t.pieceNum_;i<t.pieces_.length-1;i++)e.push(t.pieces_[i]);return new dt(e,0)}function _t(t,e){const i=[];for(let e=t.pieceNum_;e<t.pieces_.length;e++)i.push(t.pieces_[e]);if(e instanceof dt)for(let t=e.pieceNum_;t<e.pieces_.length;t++)i.push(e.pieces_[t]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&i.push(t[e])}return new dt(i,0)}function Mt(t){return t.pieceNum_>=t.pieces_.length}function St(t,e){const i=mt(t),r=mt(e);if(null===i)return e;if(i===r)return St(yt(t),yt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Et(t,e){const i=bt(t,0),r=bt(e,0);for(let t=0;t<i.length&&t<r.length;t++){const e=R(i[t],r[t]);if(0!==e)return e}return i.length===r.length?0:i.length<r.length?-1:1}function kt(t,e){if(gt(t)!==gt(e))return!1;for(let i=t.pieceNum_,r=e.pieceNum_;i<=t.pieces_.length;i++,r++)if(t.pieces_[i]!==e.pieces_[r])return!1;return!0}function Tt(t,e){let i=t.pieceNum_,r=e.pieceNum_;if(gt(t)>gt(e))return!1;for(;i<t.pieces_.length;){if(t.pieces_[i]!==e.pieces_[r])return!1;++i,++r}return!0}class It{constructor(t,e){this.errorPrefix_=e,this.parts_=bt(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=o.stringLength(this.parts_[t]);At(this)}}function At(t){if(t.byteLength_>768)throw new Error(t.errorPrefix_+"has a key path longer than 768 bytes ("+t.byteLength_+").");if(t.parts_.length>32)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+xt(t))}function xt(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends ct{constructor(){let t,e;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",t="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}static getInstance(){return new Rt}getInitialEvent(t){return o.assert("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=1e3;class Nt extends lt{constructor(t,e,i,r,n,s,a,h){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=h,this.id=Nt.nextPersistentConnectionId_++,this.log_=S("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ct,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h&&!o.isNodeSdk())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rt.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&ft.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,i){const r=++this.requestNumber_,n={r:r,a:t,b:e};this.log_(o.stringify(n)),o.assert(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(n),i&&(this.requestCBHash_[r]=i)}get(t){this.initConnection_();const e=new o.Deferred,i={p:t._path.toString(),q:t._queryObject},r={action:"g",request:i,onComplete:t=>{const r=t.d;"ok"===t.s?(this.onDataUpdate_(i.p,r,!1,null),e.resolve(r)):e.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const n=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const t=this.outstandingGets_[n];void 0!==t&&r===t&&(delete this.outstandingGets_[n],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+n+" timed out on connection"),e.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(n),e.promise}listen(t,e,i,r){this.initConnection_();const n=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+n),this.listens.has(s)||this.listens.set(s,new Map),o.assert(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),o.assert(!this.listens.get(s).has(n),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:e,query:t,tag:i};this.listens.get(s).set(n,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(i)}))}sendListen_(t){const e=t.query,i=e._path.toString(),r=e._queryIdentifier;this.log_("Listen on "+i+" for "+r);const n={p:i};t.tag&&(n.q=e._queryObject,n.t=t.tag),n.h=t.hashFn(),this.sendRequest("q",n,(n=>{const s=n.d,o=n.s;Nt.warnOnListenWarnings_(s,e);(this.listens.get(i)&&this.listens.get(i).get(r))===t&&(this.log_("listen response",n),"ok"!==o&&this.removeListen_(i,r),t.onComplete&&t.onComplete(o,s))}))}static warnOnListenWarnings_(t,e){if(t&&"object"==typeof t&&o.contains(t,"w")){const i=o.safeGet(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',i=e._path.toString();T(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&40===t.length||o.isAdmin(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=o.isValidFormat(t)?"auth":"gauth",i={cred:t};null===this.authOverride_?i.noauth=!0:"object"==typeof this.authOverride_&&(i.authvar=this.authOverride_),this.sendRequest(e,i,(e=>{const i=e.s,r=e.d||"error";this.authToken_===t&&("ok"===i?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t.s,i=t.d||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,i)}))}unlisten(t,e){const i=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),o.assert(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,t._queryObject,e)}sendUnlisten_(t,e,i,r){this.log_("Unlisten on "+t+" for "+e);const n={p:t};r&&(n.q=i,n.t=r),this.sendRequest("n",n)}onDisconnectPut(t,e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:i})}onDisconnectMerge(t,e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:i})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,i,r){const n={p:e,d:i};this.log_("onDisconnect "+t,n),this.sendRequest(t,n,(t=>{r&&setTimeout((()=>{r(t.s,t.d)}),Math.floor(0))}))}put(t,e,i,r){this.putInternal("p",t,e,i,r)}merge(t,e,i,r){this.putInternal("m",t,e,i,r)}putInternal(t,e,i,r,n){this.initConnection_();const s={p:e,d:i};void 0!==n&&(s.h=n),this.outstandingPuts_.push({action:t,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,i,(i=>{this.log_(e+" response",i),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{if("ok"!==t.s){const e=t.d;this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+o.stringify(t));const e=t.r,i=this.requestCBHash_[e];i&&(delete this.requestCBHash_[e],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"apc"===t?this.onAppCheckRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):E("Unrecognized action received from server: "+o.stringify(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){o.assert(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Ct),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Nt.nextConnectionId_++,n=this.lastSessionId;let s=!1,a=null;const h=function(){a?a.close():(s=!0,i())},u=function(t){o.assert(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:h,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?M("getToken() completed but was canceled"):(M("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=h&&h.token,a=new ut(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,i,(t=>{T(t+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),n))}catch(t){this.log_("Failed to get token: "+t),s||(this.repoInfo_.nodeAdmin&&T(t),h())}}}interrupt(t){M("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){M("Resuming connection for reason: "+t),delete this.interruptReasons_[t],o.isEmpty(this.interruptReasons_)&&(this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let i;i=e?e.map((t=>P(t))).join("$"):"default";const r=this.removeListen_(t,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,e){const i=new dt(t).toString();let r;if(this.listens.has(i)){const t=this.listens.get(i);r=t.get(e),t.delete(e),0===t.size&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(t,e){M("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){M("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";o.isNodeSdk()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+u.replace(/\./g,"-")]=1,o.isMobileCordova()?t["framework.cordova"]=1:o.isReactNative()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=ft.getInstance().currentlyOnline();return o.isEmpty(this.interruptReasons_)&&t}}Nt.nextPersistentConnectionId_=0,Nt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Pt(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const i=new Pt(A,t),r=new Pt(A,e);return 0!==this.compare(i,r)}minPost(){return Pt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dt;class Ot extends Lt{static get __EMPTY_NODE(){return Dt}static set __EMPTY_NODE(t){Dt=t}compare(t,e){return R(t.name,e.name)}isDefinedOn(t){throw o.assertionError("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Pt.MIN}maxPost(){return new Pt(x,Dt)}makePost(t,e){return o.assert("string"==typeof t,"KeyIndex indexValue must always be a string."),new Pt(t,Dt)}toString(){return".key"}}const Bt=new Ot;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e,i,r,n=null){this.isReverse_=r,this.resultGenerator_=n,this.nodeStack_=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,r&&(s*=-1),s<0)t=this.isReverse_?t.left:t.right;else{if(0===s){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class qt{constructor(t,e,i,r,n){this.key=t,this.value=e,this.color=null!=i?i:qt.RED,this.left=null!=r?r:Ut.EMPTY_NODE,this.right=null!=n?n:Ut.EMPTY_NODE}copy(t,e,i,r,n){return new qt(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=r?r:this.left,null!=n?n:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let r=this;const n=i(t,r.key);return r=n<0?r.copy(null,null,null,r.left.insert(t,e,i),null):0===n?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ut.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let i,r;if(i=this,e(t,i.key)<0)i.left.isEmpty()||i.left.isRed_()||i.left.left.isRed_()||(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),i.right.isEmpty()||i.right.isRed_()||i.right.left.isRed_()||(i=i.moveRedRight_()),0===e(t,i.key)){if(i.right.isEmpty())return Ut.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}qt.RED=!0,qt.BLACK=!1;class Ut{constructor(t,e=Ut.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new Ut(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,qt.BLACK,null,null))}remove(t){return new Ut(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,qt.BLACK,null,null))}get(t){let e,i=this.root_;for(;!i.isEmpty();){if(e=this.comparator_(t,i.key),0===e)return i.value;e<0?i=i.left:e>0&&(i=i.right)}return null}getPredecessorKey(t){let e,i=this.root_,r=null;for(;!i.isEmpty();){if(e=this.comparator_(t,i.key),0===e){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}e<0?i=i.left:e>0&&(r=i,i=i.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new jt(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new jt(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new jt(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new jt(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ft(t,e){return R(t.name,e.name)}function Vt(t,e){return R(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt;Ut.EMPTY_NODE=new class{copy(t,e,i,r,n){return this}insert(t,e,i){return new qt(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Ht=function(t){return"number"==typeof t?"number:"+O(t):"string:"+t},Wt=function(t){if(t.isLeafNode()){const e=t.val();o.assert("string"==typeof e||"number"==typeof e||"object"==typeof e&&o.contains(e,".sv"),"Priority must be a string or number.")}else o.assert(t===zt||t.isEmpty(),"priority of unexpected type.");o.assert(t===zt||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Kt,Gt,$t;class Zt{constructor(t,e=Zt.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,o.assert(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Wt(this.priorityNode_)}static set __childrenNodeConstructor(t){Kt=t}static get __childrenNodeConstructor(){return Kt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Zt(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:Zt.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Mt(t)?this:".priority"===mt(t)?this.priorityNode_:Zt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:Zt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const i=mt(t);return null===i?e:e.isEmpty()&&".priority"!==i?this:(o.assert(".priority"!==i||1===gt(t),".priority must be the last token in a path"),this.updateImmediateChild(i,Zt.__childrenNodeConstructor.EMPTY_NODE.updateChild(yt(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Ht(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?O(this.value_):this.value_,this.lazyHash_=y(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Zt.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Zt.__childrenNodeConstructor?-1:(o.assert(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,i=typeof this.value_,r=Zt.VALUE_TYPE_ORDER.indexOf(e),n=Zt.VALUE_TYPE_ORDER.indexOf(i);return o.assert(r>=0,"Unknown leaf type: "+e),o.assert(n>=0,"Unknown leaf type: "+i),r===n?"object"===i?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:n-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}Zt.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Jt=new class extends Lt{compare(t,e){const i=t.node.getPriority(),r=e.node.getPriority(),n=i.compareTo(r);return 0===n?R(t.name,e.name):n}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Pt.MIN}maxPost(){return new Pt(x,new Zt("[PRIORITY-POST]",$t))}makePost(t,e){const i=Gt(t);return new Pt(e,new Zt("[PRIORITY-POST]",i))}toString(){return".priority"}},Yt=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){var e;this.count=(e=t+1,parseInt(Math.log(e)/Yt,10)),this.current_=this.count-1;const i=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Qt=function(t,e,i,r){t.sort(e);const n=function(e,r){const s=r-e;let o,a;if(0===s)return null;if(1===s)return o=t[e],a=i?i(o):o,new qt(a,o.node,qt.BLACK,null,null);{const h=parseInt(s/2,10)+e,u=n(e,h),l=n(h+1,r);return o=t[h],a=i?i(o):o,new qt(a,o.node,qt.BLACK,u,l)}},s=function(e){let r=null,s=null,o=t.length;const a=function(e,r){const s=o-e,a=o;o-=e;const u=n(s+1,a),l=t[s],c=i?i(l):l;h(new qt(c,l.node,r,null,u))},h=function(t){r?(r.left=t,r=t):(s=t,r=t)};for(let t=0;t<e.count;++t){const i=e.nextBitIsOne(),r=Math.pow(2,e.count-(t+1));i?a(r,qt.BLACK):(a(r,qt.BLACK),a(r,qt.RED))}return s}(new Xt(t.length));return new Ut(r||e,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let te;const ee={};class ie{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return o.assert(ee&&Jt,"ChildrenNode.ts has not been loaded"),te=te||new ie({".priority":ee},{".priority":Jt}),te}get(t){const e=o.safeGet(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof Ut?e:null}hasIndex(t){return o.contains(this.indexSet_,t.toString())}addIndex(t,e){o.assert(t!==Bt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const n=e.getIterator(Pt.Wrap);let s,a=n.getNext();for(;a;)r=r||t.isDefinedOn(a.node),i.push(a),a=n.getNext();s=r?Qt(i,t.getCompare()):ee;const h=t.toString(),u=Object.assign({},this.indexSet_);u[h]=t;const l=Object.assign({},this.indexes_);return l[h]=s,new ie(l,u)}addToIndexes(t,e){const i=o.map(this.indexes_,((i,r)=>{const n=o.safeGet(this.indexSet_,r);if(o.assert(n,"Missing index implementation for "+r),i===ee){if(n.isDefinedOn(t.node)){const i=[],r=e.getIterator(Pt.Wrap);let s=r.getNext();for(;s;)s.name!==t.name&&i.push(s),s=r.getNext();return i.push(t),Qt(i,n.getCompare())}return ee}{const r=e.get(t.name);let n=i;return r&&(n=n.remove(new Pt(t.name,r))),n.insert(t,t.node)}}));return new ie(i,this.indexSet_)}removeFromIndexes(t,e){const i=o.map(this.indexes_,(i=>{if(i===ee)return i;{const r=e.get(t.name);return r?i.remove(new Pt(t.name,r)):i}}));return new ie(i,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let re;class ne{constructor(t,e,i){this.children_=t,this.priorityNode_=e,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Wt(this.priorityNode_),this.children_.isEmpty()&&o.assert(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return re||(re=new ne(new Ut(Vt),null,ie.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||re}updatePriority(t){return this.children_.isEmpty()?this:new ne(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?re:e}}getChild(t){const e=mt(t);return null===e?this:this.getImmediateChild(e).getChild(yt(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if(o.assert(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const i=new Pt(t,e);let r,n;e.isEmpty()?(r=this.children_.remove(t),n=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(t,e),n=this.indexMap_.addToIndexes(i,this.children_));const s=r.isEmpty()?re:this.priorityNode_;return new ne(r,s,n)}}updateChild(t,e){const i=mt(t);if(null===i)return e;{o.assert(".priority"!==mt(t)||1===gt(t),".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(yt(t),e);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let i=0,r=0,n=!0;if(this.forEachChild(Jt,((s,o)=>{e[s]=o.val(t),i++,n&&ne.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):n=!1})),!t&&n&&r<2*i){const t=[];for(const i in e)t[i]=e[i];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Ht(this.getPriority().val())+":"),this.forEachChild(Jt,((e,i)=>{const r=i.hash();""!==r&&(t+=":"+e+":"+r)})),this.lazyHash_=""===t?"":y(t)}return this.lazyHash_}getPredecessorChildName(t,e,i){const r=this.resolveIndex_(i);if(r){const i=r.getPredecessorKey(new Pt(t,e));return i?i.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Pt(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Pt(e,this.children_.get(e)):null}forEachChild(t,e){const i=this.resolveIndex_(t);return i?i.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const i=this.resolveIndex_(e);if(i)return i.getIteratorFrom(t,(t=>t));{const i=this.children_.getIteratorFrom(t.name,Pt.Wrap);let r=i.peek();for(;null!=r&&e.compare(r,t)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const i=this.resolveIndex_(e);if(i)return i.getReverseIteratorFrom(t,(t=>t));{const i=this.children_.getReverseIteratorFrom(t.name,Pt.Wrap);let r=i.peek();for(;null!=r&&e.compare(r,t)>0;)i.getNext(),r=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===se?-1:0}withIndex(t){if(t===Bt||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new ne(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===Bt||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(Jt),i=e.getIterator(Jt);let r=t.getNext(),n=i.getNext();for(;r&&n;){if(r.name!==n.name||!r.node.equals(n.node))return!1;r=t.getNext(),n=i.getNext()}return null===r&&null===n}return!1}return!1}}resolveIndex_(t){return t===Bt?null:this.indexMap_.get(t.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const se=new class extends ne{constructor(){super(new Ut(Vt),ne.EMPTY_NODE,ie.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return ne.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Pt,{MIN:{value:new Pt(A,ne.EMPTY_NODE)},MAX:{value:new Pt(x,se)}}),Ot.__EMPTY_NODE=ne.EMPTY_NODE,Zt.__childrenNodeConstructor=ne,zt=se,function(t){$t=t}(se);function oe(t,e=null){if(null===t)return ne.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(e=t[".priority"]),o.assert(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){return new Zt(t,oe(e))}if(t instanceof Array){let i=ne.EMPTY_NODE;return D(t,((e,r)=>{if(o.contains(t,e)&&"."!==e.substring(0,1)){const t=oe(r);!t.isLeafNode()&&t.isEmpty()||(i=i.updateImmediateChild(e,t))}})),i.updatePriority(oe(e))}{const i=[];let r=!1;if(D(t,((t,e)=>{if("."!==t.substring(0,1)){const n=oe(e);n.isEmpty()||(r=r||!n.getPriority().isEmpty(),i.push(new Pt(t,n)))}})),0===i.length)return ne.EMPTY_NODE;const n=Qt(i,Ft,(t=>t.name),Vt);if(r){const t=Qt(i,Jt.getCompare());return new ne(n,oe(e),new ie({".priority":t},{".priority":Jt}))}return new ne(n,oe(e),ie.Default)}}!function(t){Gt=t}(oe);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ae extends Lt{constructor(t){super(),this.indexPath_=t,o.assert(!Mt(t)&&".priority"!==mt(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const i=this.extractChild(t.node),r=this.extractChild(e.node),n=i.compareTo(r);return 0===n?R(t.name,e.name):n}makePost(t,e){const i=oe(t),r=ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new Pt(e,r)}maxPost(){const t=ne.EMPTY_NODE.updateChild(this.indexPath_,se);return new Pt(x,t)}toString(){return bt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new class extends Lt{compare(t,e){const i=t.node.compareTo(e.node);return 0===i?R(t.name,e.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Pt.MIN}maxPost(){return Pt.MAX}makePost(t,e){const i=oe(t);return new Pt(e,i)}toString(){return".value"}},ue="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(){let t=0;const e=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(t){return{type:"value",snapshotNode:t}}function ce(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fe(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function de(t,e,i){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(t){this.index_=t}updateChild(t,e,i,r,n,s){o.assert(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(e);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()?t:(null!=s&&(i.isEmpty()?t.hasChild(e)?s.trackChildChange(fe(e,a)):o.assert(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(ce(e,i)):s.trackChildChange(de(e,i,a))),t.isLeafNode()&&i.isEmpty()?t:t.updateImmediateChild(e,i).withIndex(this.index_))}updateFullNode(t,e,i){return null!=i&&(t.isLeafNode()||t.forEachChild(Jt,((t,r)=>{e.hasChild(t)||i.trackChildChange(fe(t,r))})),e.isLeafNode()||e.forEachChild(Jt,((e,r)=>{if(t.hasChild(e)){const n=t.getImmediateChild(e);n.equals(r)||i.trackChildChange(de(e,r,n))}else i.trackChildChange(ce(e,r))}))),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?ne.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.indexedFilter_=new pe(t.getIndex()),this.index_=t.getIndex(),this.startPost_=me.getStartPost_(t),this.endPost_=me.getEndPost_(t)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}updateChild(t,e,i,r,n,s){return this.matches(new Pt(e,i))||(i=ne.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,i,r,n,s)}updateFullNode(t,e,i){e.isLeafNode()&&(e=ne.EMPTY_NODE);let r=e.withIndex(this.index_);r=r.updatePriority(ne.EMPTY_NODE);const n=this;return e.forEachChild(Jt,((t,e)=>{n.matches(new Pt(t,e))||(r=r.updateImmediateChild(t,ne.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(t,r,i)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.rangedFilter_=new me(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}updateChild(t,e,i,r,n,s){return this.rangedFilter_.matches(new Pt(e,i))||(i=ne.EMPTY_NODE),t.getImmediateChild(e).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,i,r,n,s):this.fullLimitUpdateChild_(t,e,i,n,s)}updateFullNode(t,e,i){let r;if(e.isLeafNode()||e.isEmpty())r=ne.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;r=ne.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let i=0;for(;t.hasNext()&&i<this.limit_;){const e=t.getNext();let n;if(n=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),e)<=0:this.index_.compare(e,this.rangedFilter_.getEndPost())<=0,!n)break;r=r.updateImmediateChild(e.name,e.node),i++}}else{let t,i,n,s;if(r=e.withIndex(this.index_),r=r.updatePriority(ne.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),t=this.rangedFilter_.getEndPost(),i=this.rangedFilter_.getStartPost();const e=this.index_.getCompare();n=(t,i)=>e(i,t)}else s=r.getIterator(this.index_),t=this.rangedFilter_.getStartPost(),i=this.rangedFilter_.getEndPost(),n=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const e=s.getNext();!a&&n(t,e)<=0&&(a=!0);a&&o<this.limit_&&n(e,i)<=0?o++:r=r.updateImmediateChild(e.name,ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,i)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,i,r,n){let s;if(this.reverse_){const t=this.index_.getCompare();s=(e,i)=>t(i,e)}else s=this.index_.getCompare();const a=t;o.assert(a.numChildren()===this.limit_,"");const h=new Pt(e,i),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(h);if(a.hasChild(e)){const t=a.getImmediateChild(e);let o=r.getChildAfterChild(this.index_,u,this.reverse_);for(;null!=o&&(o.name===e||a.hasChild(o.name));)o=r.getChildAfterChild(this.index_,o,this.reverse_);const c=null==o?1:s(o,h);if(l&&!i.isEmpty()&&c>=0)return null!=n&&n.trackChildChange(de(e,i,t)),a.updateImmediateChild(e,i);{null!=n&&n.trackChildChange(fe(e,t));const i=a.updateImmediateChild(e,ne.EMPTY_NODE);return null!=o&&this.rangedFilter_.matches(o)?(null!=n&&n.trackChildChange(ce(o.name,o.node)),i.updateImmediateChild(o.name,o.node)):i}}return i.isEmpty()?t:l&&s(u,h)>=0?(null!=n&&(n.trackChildChange(fe(u.name,u.node)),n.trackChildChange(ce(e,i))),a.updateImmediateChild(e,i).updateImmediateChild(u.name,ne.EMPTY_NODE)):t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Jt}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return o.assert(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return o.assert(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:A}hasEnd(){return this.endSet_}getIndexEndValue(){return o.assert(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return o.assert(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:x}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return o.assert(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Jt}copy(){const t=new ye;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function ve(t){const e={};if(t.isDefault())return e;let i;return t.index_===Jt?i="$priority":t.index_===he?i="$value":t.index_===Bt?i="$key":(o.assert(t.index_ instanceof ae,"Unrecognized index type!"),i=t.index_.toString()),e.orderBy=o.stringify(i),t.startSet_&&(e.startAt=o.stringify(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+o.stringify(t.indexStartName_))),t.endSet_&&(e.endAt=o.stringify(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+o.stringify(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function be(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let i=t.viewFrom_;""===i&&(i=t.isViewFromLeft()?"l":"r"),e.vf=i}return t.index_!==Jt&&(e.i=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends lt{constructor(t,e,i,r){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=S("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:(o.assert(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,i,r){const n=t._path.toString();this.log_("Listen called for "+n+" "+t._queryIdentifier);const s=we.getListenId_(t,i),a={};this.listens_[s]=a;const h=ve(t._queryParams);this.restRequest_(n+".json",h,((t,e)=>{let h=e;if(404===t&&(h=null,t=null),null===t&&this.onDataUpdate_(n,h,!1,i),o.safeGet(this.listens_,s)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",r(e,null)}}))}unlisten(t,e){const i=we.getListenId_(t,e);delete this.listens_[i]}get(t){const e=ve(t._queryParams),i=t._path.toString(),r=new o.Deferred;return this.restRequest_(i+".json",e,((t,e)=>{let n=e;404===t&&(n=null,t=null),null===t?(this.onDataUpdate_(i,n,!1,null),r.resolve(n)):r.reject(new Error(n))})),r.promise}refreshAuthToken(t){}restRequest_(t,e={},i){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,n])=>{r&&r.accessToken&&(e.auth=r.accessToken),n&&n.token&&(e.ac=n.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+o.querystring(e);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=o.jsonEval(a.responseText)}catch(t){T("Failed to parse JSON response for "+s+": "+a.responseText)}i(null,t)}else 401!==a.status&&404!==a.status&&T("Got unsuccessful REST response for "+s+" Status: "+a.status),i(a.status);i=null}},a.open("GET",s,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return{value:null,children:new Map}}function Se(t,e,i){if(Mt(e))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,i);else{const r=mt(e);t.children.has(r)||t.children.set(r,Me());Se(t.children.get(r),e=yt(e),i)}}function Ee(t,e,i){null!==t.value?i(e,t.value):function(t,e){t.children.forEach(((t,i)=>{e(i,t)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,((t,r)=>{Ee(r,new dt(e.toString()+"/"+t),i)}))}class ke{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&D(this.last_,((t,i)=>{e[t]=e[t]-i})),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new ke(t);const i=1e4+2e4*Math.random();V(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),e={};let i=!1;D(t,((t,r)=>{r>0&&o.contains(this.statsToReport_,t)&&(e[t]=r,i=!0)})),i&&this.server_.reportStats(e),V(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,Ae;function xe(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Ae=Ie||(Ie={}))[Ae.OVERWRITE=0]="OVERWRITE",Ae[Ae.MERGE=1]="MERGE",Ae[Ae.ACK_USER_WRITE=2]="ACK_USER_WRITE",Ae[Ae.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Re{constructor(t,e,i){this.path=t,this.affectedTree=e,this.revert=i,this.type=Ie.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(t){if(Mt(this.path)){if(null!=this.affectedTree.value)return o.assert(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new dt(t));return new Re(pt(),e,this.revert)}}return o.assert(mt(this.path)===t,"operationForChild called for unrelated child."),new Re(yt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce{constructor(t,e,i){this.source=t,this.path=e,this.snap=i,this.type=Ie.OVERWRITE}operationForChild(t){return Mt(this.path)?new Ce(this.source,pt(),this.snap.getImmediateChild(t)):new Ce(this.source,yt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e,i){this.source=t,this.path=e,this.children=i,this.type=Ie.MERGE}operationForChild(t){if(Mt(this.path)){const e=this.children.subtree(new dt(t));return e.isEmpty()?null:e.value?new Ce(this.source,pt(),e.value):new Ne(this.source,pt(),e)}return o.assert(mt(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ne(this.source,yt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e,i){this.node_=t,this.fullyInitialized_=e,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Mt(t))return this.isFullyInitialized()&&!this.filtered_;const e=mt(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function De(t,e,i,r,n,s){const a=r.filter((t=>t.type===i));a.sort(((e,i)=>function(t,e,i){if(null==e.childName||null==i.childName)throw o.assertionError("Should only compare child_ events.");const r=new Pt(e.childName,e.snapshotNode),n=new Pt(i.childName,i.snapshotNode);return t.index_.compare(r,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,i))),a.forEach((i=>{const r=function(t,e,i){return"value"===e.type||"child_removed"===e.type||(e.prevName=i.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}(t,i,s);n.forEach((n=>{n.respondsTo(i.type)&&e.push(n.createEvent(r,t.query_))}))}))}function Oe(t,e){return{eventCache:t,serverCache:e}}function Be(t,e,i,r){return Oe(new Pe(e,i,r),t.serverCache)}function je(t,e,i,r){return Oe(t.eventCache,new Pe(e,i,r))}function qe(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ue(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe;class Ve{constructor(t,e=(()=>(Fe||(Fe=new Ut(C)),Fe))()){this.value=t,this.children=e}static fromObject(t){let e=new Ve(null);return D(t,((t,i)=>{e=e.set(new dt(t),i)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:pt(),value:this.value};if(Mt(t))return null;{const i=mt(t),r=this.children.get(i);if(null!==r){const n=r.findRootMostMatchingPathAndValue(yt(t),e);if(null!=n){return{path:_t(new dt(i),n.path),value:n.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(Mt(t))return this;{const e=mt(t),i=this.children.get(e);return null!==i?i.subtree(yt(t)):new Ve(null)}}set(t,e){if(Mt(t))return new Ve(e,this.children);{const i=mt(t),r=(this.children.get(i)||new Ve(null)).set(yt(t),e),n=this.children.insert(i,r);return new Ve(this.value,n)}}remove(t){if(Mt(t))return this.children.isEmpty()?new Ve(null):new Ve(null,this.children);{const e=mt(t),i=this.children.get(e);if(i){const r=i.remove(yt(t));let n;return n=r.isEmpty()?this.children.remove(e):this.children.insert(e,r),null===this.value&&n.isEmpty()?new Ve(null):new Ve(this.value,n)}return this}}get(t){if(Mt(t))return this.value;{const e=mt(t),i=this.children.get(e);return i?i.get(yt(t)):null}}setTree(t,e){if(Mt(t))return e;{const i=mt(t),r=(this.children.get(i)||new Ve(null)).setTree(yt(t),e);let n;return n=r.isEmpty()?this.children.remove(i):this.children.insert(i,r),new Ve(this.value,n)}}fold(t){return this.fold_(pt(),t)}fold_(t,e){const i={};return this.children.inorderTraversal(((r,n)=>{i[r]=n.fold_(_t(t,r),e)})),e(t,this.value,i)}findOnPath(t,e){return this.findOnPath_(t,pt(),e)}findOnPath_(t,e,i){const r=!!this.value&&i(e,this.value);if(r)return r;if(Mt(t))return null;{const r=mt(t),n=this.children.get(r);return n?n.findOnPath_(yt(t),_t(e,r),i):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,pt(),e)}foreachOnPath_(t,e,i){if(Mt(t))return this;{this.value&&i(e,this.value);const r=mt(t),n=this.children.get(r);return n?n.foreachOnPath_(yt(t),_t(e,r),i):new Ve(null)}}foreach(t){this.foreach_(pt(),t)}foreach_(t,e){this.children.inorderTraversal(((i,r)=>{r.foreach_(_t(t,i),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,i)=>{i.value&&t(e,i.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t){this.writeTree_=t}static empty(){return new ze(new Ve(null))}}function He(t,e,i){if(Mt(e))return new ze(new Ve(i));{const r=t.writeTree_.findRootMostValueAndPath(e);if(null!=r){const n=r.path;let s=r.value;const o=St(n,e);return s=s.updateChild(o,i),new ze(t.writeTree_.set(n,s))}{const r=new Ve(i),n=t.writeTree_.setTree(e,r);return new ze(n)}}}function We(t,e,i){let r=t;return D(i,((t,i)=>{r=He(r,_t(e,t),i)})),r}function Ke(t,e){if(Mt(e))return ze.empty();{const i=t.writeTree_.setTree(e,new Ve(null));return new ze(i)}}function Ge(t,e){return null!=$e(t,e)}function $e(t,e){const i=t.writeTree_.findRootMostValueAndPath(e);return null!=i?t.writeTree_.get(i.path).getChild(St(i.path,e)):null}function Ze(t){const e=[],i=t.writeTree_.value;return null!=i?i.isLeafNode()||i.forEachChild(Jt,((t,i)=>{e.push(new Pt(t,i))})):t.writeTree_.children.inorderTraversal(((t,i)=>{null!=i.value&&e.push(new Pt(t,i.value))})),e}function Je(t,e){if(Mt(e))return t;{const i=$e(t,e);return new ze(null!=i?new Ve(i):t.writeTree_.subtree(e))}}function Ye(t){return t.writeTree_.isEmpty()}function Xe(t,e){return Qe(pt(),t.writeTree_,e)}function Qe(t,e,i){if(null!=e.value)return i.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal(((e,n)=>{".priority"===e?(o.assert(null!==n.value,"Priority writes must always be leaf nodes"),r=n.value):i=Qe(_t(t,e),n,i)})),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(_t(t,".priority"),r)),i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t,e){return di(e,t)}function ei(t,e){const i=t.allWrites.findIndex((t=>t.writeId===e));o.assert(i>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[i];t.allWrites.splice(i,1);let n=r.visible,s=!1,a=t.allWrites.length-1;for(;n&&a>=0;){const e=t.allWrites[a];e.visible&&(a>=i&&ii(e,r.path)?n=!1:Tt(r.path,e.path)&&(s=!0)),a--}if(n){if(s)return function(t){t.visibleWrites=ni(t.allWrites,ri,pt()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}(t),!0;if(r.snap)t.visibleWrites=Ke(t.visibleWrites,r.path);else{D(r.children,(e=>{t.visibleWrites=Ke(t.visibleWrites,_t(r.path,e))}))}return!0}return!1}function ii(t,e){if(t.snap)return Tt(t.path,e);for(const i in t.children)if(t.children.hasOwnProperty(i)&&Tt(_t(t.path,i),e))return!0;return!1}function ri(t){return t.visible}function ni(t,e,i){let r=ze.empty();for(let n=0;n<t.length;++n){const s=t[n];if(e(s)){const t=s.path;let e;if(s.snap)Tt(i,t)?(e=St(i,t),r=He(r,e,s.snap)):Tt(t,i)&&(e=St(t,i),r=He(r,pt(),s.snap.getChild(e)));else{if(!s.children)throw o.assertionError("WriteRecord should have .snap or .children");if(Tt(i,t))e=St(i,t),r=We(r,e,s.children);else if(Tt(t,i))if(e=St(t,i),Mt(e))r=We(r,pt(),s.children);else{const t=o.safeGet(s.children,mt(e));if(t){const i=t.getChild(yt(e));r=He(r,pt(),i)}}}}}return r}function si(t,e,i,r,n){if(r||n){const s=Je(t.visibleWrites,e);if(!n&&Ye(s))return i;if(n||null!=i||Ge(s,pt())){const s=function(t){return(t.visible||n)&&(!r||!~r.indexOf(t.writeId))&&(Tt(t.path,e)||Tt(e,t.path))};return Xe(ni(t.allWrites,s,e),i||ne.EMPTY_NODE)}return null}{const r=$e(t.visibleWrites,e);if(null!=r)return r;{const r=Je(t.visibleWrites,e);if(Ye(r))return i;if(null!=i||Ge(r,pt())){return Xe(r,i||ne.EMPTY_NODE)}return null}}}function oi(t,e,i,r){return si(t.writeTree,t.treePath,e,i,r)}function ai(t,e){return function(t,e,i){let r=ne.EMPTY_NODE;const n=$e(t.visibleWrites,e);if(n)return n.isLeafNode()||n.forEachChild(Jt,((t,e)=>{r=r.updateImmediateChild(t,e)})),r;if(i){const n=Je(t.visibleWrites,e);return i.forEachChild(Jt,((t,e)=>{const i=Xe(Je(n,new dt(t)),e);r=r.updateImmediateChild(t,i)})),Ze(n).forEach((t=>{r=r.updateImmediateChild(t.name,t.node)})),r}return Ze(Je(t.visibleWrites,e)).forEach((t=>{r=r.updateImmediateChild(t.name,t.node)})),r}(t.writeTree,t.treePath,e)}function hi(t,e,i,r){return function(t,e,i,r,n){o.assert(r||n,"Either existingEventSnap or existingServerSnap must exist");const s=_t(e,i);if(Ge(t.visibleWrites,s))return null;{const e=Je(t.visibleWrites,s);return Ye(e)?n.getChild(i):Xe(e,n.getChild(i))}}(t.writeTree,t.treePath,e,i,r)}function ui(t,e){return function(t,e){return $e(t.visibleWrites,e)}(t.writeTree,_t(t.treePath,e))}function li(t,e,i,r,n,s){return function(t,e,i,r,n,s,o){let a;const h=Je(t.visibleWrites,e),u=$e(h,pt());if(null!=u)a=u;else{if(null==i)return[];a=Xe(h,i)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),i=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let h=i.getNext();for(;h&&t.length<n;)0!==e(h,r)&&t.push(h),h=i.getNext();return t}}(t.writeTree,t.treePath,e,i,r,n,s)}function ci(t,e,i){return function(t,e,i,r){const n=_t(e,i),s=$e(t.visibleWrites,n);if(null!=s)return s;if(r.isCompleteForChild(i))return Xe(Je(t.visibleWrites,n),r.getNode().getImmediateChild(i));return null}(t.writeTree,t.treePath,e,i)}function fi(t,e){return di(_t(t.treePath,e),t.writeTree)}function di(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,i=t.childName;o.assert("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),o.assert(".priority"!==i,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const n=r.type;if("child_added"===e&&"child_removed"===n)this.changeMap.set(i,de(i,t.snapshotNode,r.snapshotNode));else if("child_removed"===e&&"child_added"===n)this.changeMap.delete(i);else if("child_removed"===e&&"child_changed"===n)this.changeMap.set(i,fe(i,r.oldSnap));else if("child_changed"===e&&"child_added"===n)this.changeMap.set(i,ce(i,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==n)throw o.assertionError("Illegal combination of changes: "+t+" occurred after "+r);this.changeMap.set(i,de(i,t.snapshotNode,r.oldSnap))}}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new class{getCompleteChild(t){return null}getChildAfterChild(t,e,i){return null}};class gi{constructor(t,e,i=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=i}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new Pe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ci(this.writes_,t,e)}}getChildAfterChild(t,e,i){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ue(this.viewCache_),n=li(this.writes_,r,e,1,i,t);return 0===n.length?null:n[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e,i,r,n){const s=new pi;let a,h;if(i.type===Ie.OVERWRITE){const u=i;u.source.fromUser?a=wi(t,e,u.path,u.snap,r,n,s):(o.assert(u.source.fromServer,"Unknown source."),h=u.source.tagged||e.serverCache.isFiltered()&&!Mt(u.path),a=bi(t,e,u.path,u.snap,r,n,h,s))}else if(i.type===Ie.MERGE){const u=i;u.source.fromUser?a=function(t,e,i,r,n,s,o){let a=e;return r.foreach(((r,h)=>{const u=_t(i,r);_i(e,mt(u))&&(a=wi(t,a,u,h,n,s,o))})),r.foreach(((r,h)=>{const u=_t(i,r);_i(e,mt(u))||(a=wi(t,a,u,h,n,s,o))})),a}(t,e,u.path,u.children,r,n,s):(o.assert(u.source.fromServer,"Unknown source."),h=u.source.tagged||e.serverCache.isFiltered(),a=Si(t,e,u.path,u.children,r,n,h,s))}else if(i.type===Ie.ACK_USER_WRITE){const h=i;a=h.revert?function(t,e,i,r,n,s){let a;if(null!=ui(r,i))return e;{const h=new gi(r,e,n),u=e.eventCache.getNode();let l;if(Mt(i)||".priority"===mt(i)){let i;if(e.serverCache.isFullyInitialized())i=oi(r,Ue(e));else{const t=e.serverCache.getNode();o.assert(t instanceof ne,"serverChildren would be complete if leaf node"),i=ai(r,t)}l=t.filter.updateFullNode(u,i,s)}else{const n=mt(i);let o=ci(r,n,e.serverCache);null==o&&e.serverCache.isCompleteForChild(n)&&(o=u.getImmediateChild(n)),l=null!=o?t.filter.updateChild(u,n,o,yt(i),h,s):e.eventCache.getNode().hasChild(n)?t.filter.updateChild(u,n,ne.EMPTY_NODE,yt(i),h,s):u,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=oi(r,Ue(e)),a.isLeafNode()&&(l=t.filter.updateFullNode(l,a,s)))}return a=e.serverCache.isFullyInitialized()||null!=ui(r,pt()),Be(e,l,a,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,h.path,r,n,s):function(t,e,i,r,n,s,o){if(null!=ui(n,i))return e;const a=e.serverCache.isFiltered(),h=e.serverCache;if(null!=r.value){if(Mt(i)&&h.isFullyInitialized()||h.isCompleteForPath(i))return bi(t,e,i,h.getNode().getChild(i),n,s,a,o);if(Mt(i)){let r=new Ve(null);return h.getNode().forEachChild(Bt,((t,e)=>{r=r.set(new dt(t),e)})),Si(t,e,i,r,n,s,a,o)}return e}{let u=new Ve(null);return r.foreach(((t,e)=>{const r=_t(i,t);h.isCompleteForPath(r)&&(u=u.set(t,h.getNode().getChild(r)))})),Si(t,e,i,u,n,s,a,o)}}(t,e,h.path,h.affectedTree,r,n,s)}else{if(i.type!==Ie.LISTEN_COMPLETE)throw o.assertionError("Unknown operation type: "+i.type);a=function(t,e,i,r,n){const s=e.serverCache,o=je(e,s.getNode(),s.isFullyInitialized()||Mt(i),s.isFiltered());return vi(t,o,i,r,mi,n)}(t,e,i.path,r,s)}const u=s.getChanges();return function(t,e,i){const r=e.eventCache;if(r.isFullyInitialized()){const n=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=qe(t);(i.length>0||!t.eventCache.isFullyInitialized()||n&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&i.push(le(qe(e)))}}(e,a,u),{viewCache:a,changes:u}}function vi(t,e,i,r,n,s){const a=e.eventCache;if(null!=ui(r,i))return e;{let h,u;if(Mt(i))if(o.assert(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const i=Ue(e),n=ai(r,i instanceof ne?i:ne.EMPTY_NODE);h=t.filter.updateFullNode(e.eventCache.getNode(),n,s)}else{const i=oi(r,Ue(e));h=t.filter.updateFullNode(e.eventCache.getNode(),i,s)}else{const l=mt(i);if(".priority"===l){o.assert(1===gt(i),"Can't have a priority with additional path components");const n=a.getNode();u=e.serverCache.getNode();const s=hi(r,i,n,u);h=null!=s?t.filter.updatePriority(n,s):a.getNode()}else{const o=yt(i);let c;if(a.isCompleteForChild(l)){u=e.serverCache.getNode();const t=hi(r,i,a.getNode(),u);c=null!=t?a.getNode().getImmediateChild(l).updateChild(o,t):a.getNode().getImmediateChild(l)}else c=ci(r,l,e.serverCache);h=null!=c?t.filter.updateChild(a.getNode(),l,c,o,n,s):a.getNode()}}return Be(e,h,a.isFullyInitialized()||Mt(i),t.filter.filtersNodes())}}function bi(t,e,i,r,n,s,o,a){const h=e.serverCache;let u;const l=o?t.filter:t.filter.getIndexedFilter();if(Mt(i))u=l.updateFullNode(h.getNode(),r,null);else if(l.filtersNodes()&&!h.isFiltered()){const t=h.getNode().updateChild(i,r);u=l.updateFullNode(h.getNode(),t,null)}else{const t=mt(i);if(!h.isCompleteForPath(i)&&gt(i)>1)return e;const n=yt(i),s=h.getNode().getImmediateChild(t).updateChild(n,r);u=".priority"===t?l.updatePriority(h.getNode(),s):l.updateChild(h.getNode(),t,s,n,mi,null)}const c=je(e,u,h.isFullyInitialized()||Mt(i),l.filtersNodes());return vi(t,c,i,n,new gi(n,c,s),a)}function wi(t,e,i,r,n,s,o){const a=e.eventCache;let h,u;const l=new gi(n,e,s);if(Mt(i))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),h=Be(e,u,!0,t.filter.filtersNodes());else{const n=mt(i);if(".priority"===n)u=t.filter.updatePriority(e.eventCache.getNode(),r),h=Be(e,u,a.isFullyInitialized(),a.isFiltered());else{const s=yt(i),u=a.getNode().getImmediateChild(n);let c;if(Mt(s))c=r;else{const t=l.getCompleteChild(n);c=null!=t?".priority"===vt(s)&&t.getChild(wt(s)).isEmpty()?t:t.updateChild(s,r):ne.EMPTY_NODE}if(u.equals(c))h=e;else{h=Be(e,t.filter.updateChild(a.getNode(),n,c,s,l,o),a.isFullyInitialized(),t.filter.filtersNodes())}}}return h}function _i(t,e){return t.eventCache.isCompleteForChild(e)}function Mi(t,e,i){return i.foreach(((t,i)=>{e=e.updateChild(t,i)})),e}function Si(t,e,i,r,n,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let h,u=e;h=Mt(i)?r:new Ve(null).setTree(i,r);const l=e.serverCache.getNode();return h.children.inorderTraversal(((i,r)=>{if(l.hasChild(i)){const h=Mi(0,e.serverCache.getNode().getImmediateChild(i),r);u=bi(t,u,new dt(i),h,n,s,o,a)}})),h.children.inorderTraversal(((i,r)=>{const h=!e.serverCache.isCompleteForChild(i)&&void 0===r.value;if(!l.hasChild(i)&&!h){const h=Mi(0,e.serverCache.getNode().getImmediateChild(i),r);u=bi(t,u,new dt(i),h,n,s,o,a)}})),u}class Ei{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new pe(i.getIndex()),n=(s=i).loadsAllData()?new pe(s.getIndex()):s.hasLimit()?new ge(s):new me(s);var s;this.processor_=function(t){return{filter:t}}(n);const o=e.serverCache,a=e.eventCache,h=r.updateFullNode(ne.EMPTY_NODE,o.getNode(),null),u=n.updateFullNode(ne.EMPTY_NODE,a.getNode(),null),l=new Pe(h,o.isFullyInitialized(),r.filtersNodes()),c=new Pe(u,a.isFullyInitialized(),n.filtersNodes());this.viewCache_=Oe(c,l),this.eventGenerator_=new Le(this.query_)}get query(){return this.query_}}function ki(t,e){const i=Ue(t.viewCache_);return i&&(t.query._queryParams.loadsAllData()||!Mt(e)&&!i.getImmediateChild(mt(e)).isEmpty())?i.getChild(e):null}function Ti(t,e,i,r){e.type===Ie.MERGE&&null!==e.source.queryId&&(o.assert(Ue(t.viewCache_),"We should always have a full cache before handling merges"),o.assert(qe(t.viewCache_),"Missing event cache, even though we have a server cache"));const n=t.viewCache_,s=yi(t.processor_,n,e,i,r);var a,h;return a=t.processor_,h=s.viewCache,o.assert(h.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),o.assert(h.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),o.assert(s.viewCache.serverCache.isFullyInitialized()||!n.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ii(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ii(t,e,i,r){const n=r?[r]:t.eventRegistrations_;return function(t,e,i,r){const n=[],s=[];return e.forEach((e=>{var i;"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&s.push((i=e.childName,{type:"child_moved",snapshotNode:e.snapshotNode,childName:i}))})),De(t,n,"child_removed",e,r,i),De(t,n,"child_added",e,r,i),De(t,n,"child_moved",s,r,i),De(t,n,"child_changed",e,r,i),De(t,n,"value",e,r,i),n}(t.eventGenerator_,e,i,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai,xi;class Ri{constructor(){this.views=new Map}}function Ci(t,e,i,r){const n=e.source.queryId;if(null!==n){const s=t.views.get(n);return o.assert(null!=s,"SyncTree gave us an op for an invalid query."),Ti(s,e,i,r)}{let n=[];for(const s of t.views.values())n=n.concat(Ti(s,e,i,r));return n}}function Ni(t,e,i,r,n){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let t=oi(i,n?r:null),s=!1;t?s=!0:r instanceof ne?(t=ai(i,r),s=!1):(t=ne.EMPTY_NODE,s=!1);const o=Oe(new Pe(t,s,!1),new Pe(r,n,!1));return new Ei(e,o)}return o}function Pi(t,e){let i=null;for(const r of t.views.values())i=i||ki(r,e);return i}class Li{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ve(null),this.pendingWriteTree_={visibleWrites:ze.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Di(t,e,i,r,n){return function(t,e,i,r,n){o.assert(r>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===n&&(n=!0),t.allWrites.push({path:e,snap:i,writeId:r,visible:n}),n&&(t.visibleWrites=He(t.visibleWrites,e,i)),t.lastWriteId=r}(t.pendingWriteTree_,e,i,r,n),n?Fi(t,new Ce({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},e,i)):[]}function Oi(t,e,i,r){!function(t,e,i,r){o.assert(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:i,writeId:r,visible:!0}),t.visibleWrites=We(t.visibleWrites,e,i),t.lastWriteId=r}(t.pendingWriteTree_,e,i,r);const n=Ve.fromObject(i);return Fi(t,new Ne({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},e,n))}function Bi(t,e,i=!1){const r=function(t,e){for(let i=0;i<t.allWrites.length;i++){const r=t.allWrites[i];if(r.writeId===e)return r}return null}(t.pendingWriteTree_,e);if(ei(t.pendingWriteTree_,e)){let e=new Ve(null);return null!=r.snap?e=e.set(pt(),!0):D(r.children,(t=>{e=e.set(new dt(t),!0)})),Fi(t,new Re(r.path,e,i))}return[]}function ji(t,e,i){return Fi(t,new Ce({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,i))}function qi(t,e,i){const r=t.pendingWriteTree_,n=t.syncPointTree_.findOnPath(e,((t,i)=>{const r=Pi(i,St(t,e));if(r)return r}));return si(r,e,n,i,!0)}function Ui(t,e){const i=e._path;let r=null;t.syncPointTree_.foreachOnPath(i,((t,e)=>{const n=St(t,i);r=r||Pi(e,n)}));let n=t.syncPointTree_.get(i);n?r=r||Pi(n,pt()):(n=new Ri,t.syncPointTree_=t.syncPointTree_.set(i,n));const s=null!=r,o=s?new Pe(r,!0,!1):null;return function(t){return qe(t.viewCache_)}(Ni(n,e,ti(t.pendingWriteTree_,e._path),s?o.getNode():ne.EMPTY_NODE,s))}function Fi(t,e){return Vi(e,t.syncPointTree_,null,ti(t.pendingWriteTree_,pt()))}function Vi(t,e,i,r){if(Mt(t.path))return zi(t,e,i,r);{const n=e.get(pt());null==i&&null!=n&&(i=Pi(n,pt()));let s=[];const o=mt(t.path),a=t.operationForChild(o),h=e.children.get(o);if(h&&a){const t=i?i.getImmediateChild(o):null,e=fi(r,o);s=s.concat(Vi(a,h,t,e))}return n&&(s=s.concat(Ci(n,t,r,i))),s}}function zi(t,e,i,r){const n=e.get(pt());null==i&&null!=n&&(i=Pi(n,pt()));let s=[];return e.children.inorderTraversal(((e,n)=>{const o=i?i.getImmediateChild(e):null,a=fi(r,e),h=t.operationForChild(e);h&&(s=s.concat(zi(h,n,o,a)))})),n&&(s=s.concat(Ci(n,t,r,i))),s}function Hi(t,e){return t.tagToQueryMap.get(e)}function Wi(t){const e=t.indexOf("$");return o.assert(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new dt(t.substr(0,e))}}function Ki(t,e,i){const r=t.syncPointTree_.get(e);o.assert(r,"Missing sync point for query tag that we're tracking");return Ci(r,i,ti(t.pendingWriteTree_,e),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gi{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new Gi(e)}node(){return this.node_}}class $i{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=_t(this.path_,t);return new $i(this.syncTree_,e)}node(){return qi(this.syncTree_,this.path_)}}const Zi=function(t,e,i){return t&&"object"==typeof t?(o.assert(".sv"in t,"Unexpected leaf node or priority contents"),"string"==typeof t[".sv"]?Ji(t[".sv"],e,i):"object"==typeof t[".sv"]?Yi(t[".sv"],e):void o.assert(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},Ji=function(t,e,i){if("timestamp"===t)return i.timestamp;o.assert(!1,"Unexpected server value: "+t)},Yi=function(t,e,i){t.hasOwnProperty("increment")||o.assert(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;"number"!=typeof r&&o.assert(!1,"Unexpected increment value: "+r);const n=e.node();if(o.assert(null!=n,"Expected ChildrenNode.EMPTY_NODE for nulls"),!n.isLeafNode())return r;const s=n.getValue();return"number"!=typeof s?r:s+r},Xi=function(t,e,i,r){return tr(e,new $i(i,t),r)},Qi=function(t,e,i){return tr(t,new Gi(e),i)};function tr(t,e,i){const r=t.getPriority().val(),n=Zi(r,e.getImmediateChild(".priority"),i);let s;if(t.isLeafNode()){const r=t,s=Zi(r.getValue(),e,i);return s!==r.getValue()||n!==r.getPriority().val()?new Zt(s,oe(n)):t}{const r=t;return s=r,n!==r.getPriority().val()&&(s=s.updatePriority(new Zt(n))),r.forEachChild(Jt,((t,r)=>{const n=tr(r,e.getImmediateChild(t),i);n!==r&&(s=s.updateImmediateChild(t,n))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t="",e=null,i={children:{},childCount:0}){this.name=t,this.parent=e,this.node=i}}function ir(t,e){let i=e instanceof dt?e:new dt(e),r=t,n=mt(i);for(;null!==n;){const t=o.safeGet(r.node.children,n)||{children:{},childCount:0};r=new er(n,r,t),i=yt(i),n=mt(i)}return r}function rr(t){return t.node.value}function nr(t,e){t.node.value=e,ur(t)}function sr(t){return t.node.childCount>0}function or(t,e){D(t.node.children,((i,r)=>{e(new er(i,t,r))}))}function ar(t,e,i,r){i&&!r&&e(t),or(t,(t=>{ar(t,e,!0,r)})),i&&r&&e(t)}function hr(t){return new dt(null===t.parent?t.name:hr(t.parent)+"/"+t.name)}function ur(t){null!==t.parent&&function(t,e,i){const r=function(t){return void 0===rr(t)&&!sr(t)}(i),n=o.contains(t.node.children,e);r&&n?(delete t.node.children[e],t.node.childCount--,ur(t)):r||n||(t.node.children[e]=i.node,t.node.childCount++,ur(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.parent,t.name,t)}const lr=/[\[\].#$\/\u0000-\u001F\u007F]/,cr=/[\[\].#$\u0000-\u001F\u007F]/,fr=10485760,dr=function(t){return"string"==typeof t&&0!==t.length&&!lr.test(t)},pr=function(t){return"string"==typeof t&&0!==t.length&&!cr.test(t)},mr=function(t){return null===t||"string"==typeof t||"number"==typeof t&&!I(t)||t&&"object"==typeof t&&o.contains(t,".sv")},gr=function(t,e,i,r){r&&void 0===e||yr(o.errorPrefix(t,"value"),e,i)},yr=function(t,e,i){const r=i instanceof dt?new It(i,t):i;if(void 0===e)throw new Error(t+"contains undefined "+xt(r));if("function"==typeof e)throw new Error(t+"contains a function "+xt(r)+" with contents = "+e.toString());if(I(e))throw new Error(t+"contains "+e.toString()+" "+xt(r));if("string"==typeof e&&e.length>3495253.3333333335&&o.stringLength(e)>fr)throw new Error(t+"contains a string greater than "+"10485760 utf8 bytes "+xt(r)+" ('"+e.substring(0,50)+"...')");if(e&&"object"==typeof e){let i=!1,n=!1;if(D(e,((e,s)=>{if(".value"===e)i=!0;else if(".priority"!==e&&".sv"!==e&&(n=!0,!dr(e)))throw new Error(t+" contains an invalid key ("+e+") "+xt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,h;h=e,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(h),a.byteLength_+=o.stringLength(h),At(a),yr(t,s,r),function(t){const e=t.parts_.pop();t.byteLength_-=o.stringLength(e),t.parts_.length>0&&(t.byteLength_-=1)}(r)})),i&&n)throw new Error(t+' contains ".value" child '+xt(r)+" in addition to actual children.")}},vr=function(t,e,i,r){if(r&&void 0===e)return;const n=o.errorPrefix(t,"values");if(!e||"object"!=typeof e||Array.isArray(e))throw new Error(n+" must be an object containing the children to replace.");const s=[];D(e,((t,e)=>{const r=new dt(t);if(yr(n,e,_t(i,r)),".priority"===vt(r)&&!mr(e))throw new Error(n+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),function(t,e){let i,r;for(i=0;i<e.length;i++){r=e[i];const n=bt(r);for(let e=0;e<n.length;e++)if(".priority"===n[e]&&e===n.length-1);else if(!dr(n[e]))throw new Error(t+"contains an invalid key ("+n[e]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}e.sort(Et);let n=null;for(i=0;i<e.length;i++){if(r=e[i],null!==n&&Tt(n,r))throw new Error(t+"contains a path "+n.toString()+" that is ancestor of another path "+r.toString());n=r}}(n,s)},br=function(t,e,i,r){if(!(r&&void 0===i||pr(i)))throw new Error(o.errorPrefix(t,e)+'was an invalid path = "'+i+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},wr=function(t,e){if(".info"===mt(e))throw new Error(t+" failed = Can't modify data under /.info/")},_r=function(t,e){const i=e.path.toString();if("string"!=typeof e.repoInfo.host||0===e.repoInfo.host.length||!dr(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==i.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pr(t)}(i))throw new Error(o.errorPrefix(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sr(t,e){let i=null;for(let r=0;r<e.length;r++){const n=e[r],s=n.getPath();null===i||kt(s,i.path)||(t.eventLists_.push(i),i=null),null===i&&(i={events:[],path:s}),i.events.push(n)}i&&t.eventLists_.push(i)}function Er(t,e,i){Sr(t,i),Tr(t,(t=>kt(t,e)))}function kr(t,e,i){Sr(t,i),Tr(t,(t=>Tt(t,e)||Tt(e,t)))}function Tr(t,e){t.recursionDepth_++;let i=!0;for(let r=0;r<t.eventLists_.length;r++){const n=t.eventLists_[r];if(n){e(n.path)?(Ir(t.eventLists_[r]),t.eventLists_[r]=null):i=!1}}i&&(t.eventLists_=[]),t.recursionDepth_--}function Ir(t){for(let e=0;e<t.events.length;e++){const i=t.events[e];if(null!==i){t.events[e]=null;const r=i.getEventRunner();b&&M("event: "+i.toString()),F(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="repo_interrupt";class xr{constructor(t,e,i,r){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Mr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Me(),this.transactionQueueTree_=new er,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Rr(t,e,i){if(t.stats_=et(t.repoInfo_),t.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)t.server_=new we(t.repoInfo_,((e,i,r,n)=>{Pr(t,e,i,r,n)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>Lr(t,!0)),0);else{if(null!=i){if("object"!=typeof i)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{o.stringify(i)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}t.persistentConnection_=new Nt(t.repoInfo_,e,((e,i,r,n)=>{Pr(t,e,i,r,n)}),(e=>{Lr(t,e)}),(e=>{!function(t,e){D(e,((e,i)=>{Dr(t,e,i)}))}(t,e)}),t.authTokenProvider_,t.appCheckProvider_,i),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=function(t,e){const i=t.toString();return tt[i]||(tt[i]=e()),tt[i]}(t.repoInfo_,(()=>new Te(t.stats_,t.server_))),t.infoData_=new _e,t.infoSyncTree_=new Li({startListening:(e,i,r,n)=>{let s=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(s=ji(t.infoSyncTree_,e._path,o),setTimeout((()=>{n("ok")}),0)),s},stopListening:()=>{}}),Dr(t,"connected",!1),t.serverSyncTree_=new Li({startListening:(e,i,r,n)=>(t.server_.listen(e,r,i,((i,r)=>{const s=n(i,r);kr(t.eventQueue_,e._path,s)})),[]),stopListening:(e,i)=>{t.server_.unlisten(e,i)}})}function Cr(t){const e=t.infoData_.getNode(new dt(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+e}function Nr(t){return(e=(e={timestamp:Cr(t)})||{}).timestamp=e.timestamp||(new Date).getTime(),e;var e}function Pr(t,e,i,r,n){t.dataUpdateCount++;const s=new dt(e);i=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,i):i;let a=[];if(n)if(r){const e=o.map(i,(t=>oe(t)));a=function(t,e,i,r){const n=Hi(t,r);if(n){const r=Wi(n),s=r.path,o=r.queryId,a=St(s,e),h=Ve.fromObject(i);return Ki(t,s,new Ne(xe(o),a,h))}return[]}(t.serverSyncTree_,s,e,n)}else{const e=oe(i);a=function(t,e,i,r){const n=Hi(t,r);if(null!=n){const r=Wi(n),s=r.path,o=r.queryId,a=St(s,e);return Ki(t,s,new Ce(xe(o),a,i))}return[]}(t.serverSyncTree_,s,e,n)}else if(r){const e=o.map(i,(t=>oe(t)));a=function(t,e,i){const r=Ve.fromObject(i);return Fi(t,new Ne({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,r))}(t.serverSyncTree_,s,e)}else{const e=oe(i);a=ji(t.serverSyncTree_,s,e)}let h=s;a.length>0&&(h=zr(t,s)),kr(t.eventQueue_,h,a)}function Lr(t,e){Dr(t,"connected",e),!1===e&&function(t){qr(t,"onDisconnectEvents");const e=Nr(t),i=Me();Ee(t.onDisconnect_,pt(),((r,n)=>{const s=Xi(r,n,t.serverSyncTree_,e);Se(i,r,s)}));let r=[];Ee(i,pt(),((e,i)=>{r=r.concat(ji(t.serverSyncTree_,e,i));const n=$r(t,e);zr(t,n)})),t.onDisconnect_=Me(),kr(t.eventQueue_,pt(),r)}(t)}function Dr(t,e,i){const r=new dt("/.info/"+e),n=oe(i);t.infoData_.updateSnapshot(r,n);const s=ji(t.infoSyncTree_,r,n);kr(t.eventQueue_,r,s)}function Or(t){return t.nextWriteId_++}function Br(t,e,i,r,n){qr(t,"set",{path:e.toString(),value:i,priority:r});const s=Nr(t),o=oe(i,r),a=qi(t.serverSyncTree_,e),h=Qi(o,a,s),u=Or(t),l=Di(t.serverSyncTree_,e,h,u,!0);Sr(t.eventQueue_,l),t.server_.put(e.toString(),o.val(!0),((i,r)=>{const s="ok"===i;s||T("set at "+e+" failed: "+i);const o=Bi(t.serverSyncTree_,u,!s);kr(t.eventQueue_,e,o),Ur(t,n,i,r)}));const c=$r(t,e);zr(t,c),kr(t.eventQueue_,c,[])}function jr(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ar)}function qr(t,...e){let i="";t.persistentConnection_&&(i=t.persistentConnection_.id+":"),M(i,...e)}function Ur(t,e,i,r){e&&F((()=>{if("ok"===i)e(null);else{const t=(i||"error").toUpperCase();let n=t;r&&(n+=": "+r);const s=new Error(n);s.code=t,e(s)}}))}function Fr(t,e,i){return qi(t.serverSyncTree_,e,i)||ne.EMPTY_NODE}function Vr(t,e=t.transactionQueueTree_){if(e||Gr(t,e),rr(e)){const i=Wr(t,e);o.assert(i.length>0,"Sending zero length transaction queue");i.every((t=>0===t.status))&&function(t,e,i){const r=i.map((t=>t.currentWriteId)),n=Fr(t,e,r);let s=n;const a=n.hash();for(let t=0;t<i.length;t++){const r=i[t];o.assert(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const n=St(e,r.path);s=s.updateChild(n,r.currentOutputSnapshotRaw)}const h=s.val(!0),u=e;t.server_.put(u.toString(),h,(r=>{qr(t,"transaction put response",{path:u.toString(),status:r});let n=[];if("ok"===r){const r=[];for(let e=0;e<i.length;e++)i[e].status=2,n=n.concat(Bi(t.serverSyncTree_,i[e].currentWriteId)),i[e].onComplete&&r.push((()=>i[e].onComplete(null,!0,i[e].currentOutputSnapshotResolved))),i[e].unwatcher();Gr(t,ir(t.transactionQueueTree_,e)),Vr(t,t.transactionQueueTree_),kr(t.eventQueue_,e,n);for(let t=0;t<r.length;t++)F(r[t])}else{if("datastale"===r)for(let t=0;t<i.length;t++)3===i[t].status?i[t].status=4:i[t].status=0;else{T("transaction at "+u.toString()+" failed: "+r);for(let t=0;t<i.length;t++)i[t].status=4,i[t].abortReason=r}zr(t,e)}}),a)}(t,hr(e),i)}else sr(e)&&or(e,(e=>{Vr(t,e)}))}function zr(t,e){const i=Hr(t,e),r=hr(i);return function(t,e,i){if(0===e.length)return;const r=[];let n=[];const s=e.filter((t=>0===t.status)).map((t=>t.currentWriteId));for(let h=0;h<e.length;h++){const u=e[h],l=St(i,u.path);let c,f=!1;if(o.assert(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)f=!0,c=u.abortReason,n=n.concat(Bi(t.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)f=!0,c="maxretry",n=n.concat(Bi(t.serverSyncTree_,u.currentWriteId,!0));else{const i=Fr(t,u.path,s);u.currentInputSnapshot=i;const r=e[h].update(i.val());if(void 0!==r){yr("transaction failed: Data returned ",r,u.path);let e=oe(r);"object"==typeof r&&null!=r&&o.contains(r,".priority")||(e=e.updatePriority(i.getPriority()));const a=u.currentWriteId,h=Nr(t),l=Qi(e,i,h);u.currentOutputSnapshotRaw=e,u.currentOutputSnapshotResolved=l,u.currentWriteId=Or(t),s.splice(s.indexOf(a),1),n=n.concat(Di(t.serverSyncTree_,u.path,l,u.currentWriteId,u.applyLocally)),n=n.concat(Bi(t.serverSyncTree_,a,!0))}else f=!0,c="nodata",n=n.concat(Bi(t.serverSyncTree_,u.currentWriteId,!0))}kr(t.eventQueue_,i,n),n=[],f&&(e[h].status=2,a=e[h].unwatcher,setTimeout(a,Math.floor(0)),e[h].onComplete&&("nodata"===c?r.push((()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot))):r.push((()=>e[h].onComplete(new Error(c),!1,null)))))}var a;Gr(t,t.transactionQueueTree_);for(let t=0;t<r.length;t++)F(r[t]);Vr(t,t.transactionQueueTree_)}(t,Wr(t,i),r),r}function Hr(t,e){let i,r=t.transactionQueueTree_;for(i=mt(e);null!==i&&void 0===rr(r);)r=ir(r,i),i=mt(e=yt(e));return r}function Wr(t,e){const i=[];return Kr(t,e,i),i.sort(((t,e)=>t.order-e.order)),i}function Kr(t,e,i){const r=rr(e);if(r)for(let t=0;t<r.length;t++)i.push(r[t]);or(e,(e=>{Kr(t,e,i)}))}function Gr(t,e){const i=rr(e);if(i){let t=0;for(let e=0;e<i.length;e++)2!==i[e].status&&(i[t]=i[e],t++);i.length=t,nr(e,i.length>0?i:void 0)}or(e,(e=>{Gr(t,e)}))}function $r(t,e){const i=hr(Hr(t,e)),r=ir(t.transactionQueueTree_,e);return function(t,e,i){let r=i?t:t.parent;for(;null!==r;){if(e(r))return!0;r=r.parent}}(r,(e=>{Zr(t,e)})),Zr(t,r),ar(r,(e=>{Zr(t,e)})),i}function Zr(t,e){const i=rr(e);if(i){const r=[];let n=[],s=-1;for(let e=0;e<i.length;e++)3===i[e].status||(1===i[e].status?(o.assert(s===e-1,"All SENT items should be at beginning of queue."),s=e,i[e].status=3,i[e].abortReason="set"):(o.assert(0===i[e].status,"Unexpected transaction status in abort"),i[e].unwatcher(),n=n.concat(Bi(t.serverSyncTree_,i[e].currentWriteId,!0)),i[e].onComplete&&r.push(i[e].onComplete.bind(null,new Error("set"),!1,null))));-1===s?nr(e,void 0):i.length=s+1,kr(t.eventQueue_,hr(e),n);for(let t=0;t<r.length;t++)F(r[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=function(t,e){const i=Yr(t),r=i.namespace;"firebase.com"===i.domain&&k(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===i.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&T("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const n="ws"===i.scheme||"wss"===i.scheme;return{repoInfo:new J(i.host,i.secure,r,e,n,"",r!==i.subdomain),path:new dt(i.pathString)}},Yr=function(t){let e="",i="",r="",n="",s="",o=!0,a="https",h=443;if("string"==typeof t){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let l=t.indexOf("/");-1===l&&(l=t.length);let c=t.indexOf("?");-1===c&&(c=t.length),e=t.substring(0,Math.min(l,c)),l<c&&(n=function(t){let e="";const i=t.split("/");for(let t=0;t<i.length;t++)if(i[t].length>0){let r=i[t];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(t){}e+="/"+r}return e}(t.substring(l,c)));const f=function(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const i of t.split("&")){if(0===i.length)continue;const r=i.split("=");2===r.length?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):T(`Invalid query segment '${i}' in query '${t}'`)}return e}(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o="https"===a||"wss"===a,h=parseInt(e.substring(u+1),10)):u=e.length;const d=e.slice(0,u);if("localhost"===d.toLowerCase())i="localhost";else if(d.split(".").length<=2)i=d;else{const t=e.indexOf(".");r=e.substring(0,t).toLowerCase(),i=e.substring(t+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:h,domain:i,subdomain:r,secure:o,scheme:a,pathString:n,namespace:s}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr{constructor(t,e,i,r){this._repo=t,this._path=e,this._queryParams=i,this._orderByCalled=r}get key(){return Mt(this._path)?null:vt(this._path)}get ref(){return new Qr(this._repo,this._path)}get _queryIdentifier(){const t=be(this._queryParams),e=P(t);return"{}"===e?"default":e}get _queryObject(){return be(this._queryParams)}isEqual(t){if(!((t=o.getModularInstance(t))instanceof Xr))return!1;const e=this._repo===t._repo,i=kt(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return e&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(t){let e="";for(let i=t.pieceNum_;i<t.pieces_.length;i++)""!==t.pieces_[i]&&(e+="/"+encodeURIComponent(String(t.pieces_[i])));return e||"/"}(this._path)}}class Qr extends Xr{constructor(t,e){super(t,e,new ye,!1)}get parent(){const t=wt(this._path);return null===t?null:new Qr(this._repo,t)}get root(){let t=this;for(;null!==t.parent;)t=t.parent;return t}}class tn{constructor(t,e,i){this._node=t,this.ref=e,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new dt(t),i=rn(this.ref,t);return new tn(this._node.getChild(e),i,Jt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((e,i)=>t(new tn(i,rn(this.ref,e),Jt))))}hasChild(t){const e=new dt(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function en(t,e){return(t=o.getModularInstance(t))._checkNotDeleted("ref"),void 0!==e?rn(t._root,e):t._root}function rn(t,e){var i,r,n,s;return null===mt((t=o.getModularInstance(t))._path)?(i="child",r="path",s=!1,(n=e)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),br(i,r,n,s)):br("child","path",e,!1),new Qr(t._repo,_t(t._path,e))}function nn(t){return wr("remove",t._path),sn(t,null)}function sn(t,e){t=o.getModularInstance(t),wr("set",t._path),gr("set",e,t._path,!1);const i=new o.Deferred;return Br(t._repo,t._path,e,null,i.wrapCallback((()=>{}))),i.promise}function on(t,e){vr("update",e,t._path,!1);const i=new o.Deferred;return function(t,e,i,r){qr(t,"update",{path:e.toString(),value:i});let n=!0;const s=Nr(t),o={};if(D(i,((i,r)=>{n=!1,o[i]=Xi(_t(e,i),oe(r),t.serverSyncTree_,s)})),n)M("update() called with empty data.  Don't do anything."),Ur(0,r,"ok",void 0);else{const n=Or(t),s=Oi(t.serverSyncTree_,e,o,n);Sr(t.eventQueue_,s),t.server_.merge(e.toString(),i,((i,s)=>{const o="ok"===i;o||T("update at "+e+" failed: "+i);const a=Bi(t.serverSyncTree_,n,!o),h=a.length>0?zr(t,e):e;kr(t.eventQueue_,h,a),Ur(0,r,i,s)})),D(i,(i=>{const r=$r(t,_t(e,i));zr(t,r)})),kr(t.eventQueue_,e,[])}}(t._repo,t._path,e,i.wrapCallback((()=>{}))),i.promise}function an(t){return function(t,e){const i=Ui(t.serverSyncTree_,e);return null!=i?Promise.resolve(i):t.server_.get(e).then((i=>{const r=oe(i).withIndex(e._queryParams.getIndex()),n=ji(t.serverSyncTree_,e._path,r);return Er(t.eventQueue_,e._path,n),Promise.resolve(r)}),(i=>(qr(t,"get for query "+o.stringify(e)+" failed: "+i),Promise.reject(new Error(i)))))}((t=o.getModularInstance(t))._repo,t).then((e=>new tn(e,new Qr(t._repo,t._path),t._queryParams.getIndex())))}!function(t){o.assert(!Ai,"__referenceConstructor has already been defined"),Ai=t}(Qr),function(t){o.assert(!xi,"__referenceConstructor has already been defined"),xi=t}(Qr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn={};let un=!1;function ln(t,e,i,r,n){let s=r||t.options.databaseURL;void 0===s&&(t.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),M("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,a,u=Jr(s,n),l=u.repoInfo;void 0!==h&&(a=h.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,u=Jr(s,n),l=u.repoInfo):o=!u.repoInfo.secure;const c=n&&o?new W(W.OWNER):new H(t.name,t.options,e);_r("Invalid Firebase Database URL",u),Mt(u.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const f=function(t,e,i,r){let n=hn[e.name];n||(n={},hn[e.name]=n);let s=n[t.toURLString()];s&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new xr(t,un,i,r),n[t.toURLString()]=s,s}(l,t,c,new z(t.name,i));return new cn(f,t)}class cn{constructor(t,e){this._repoInternal=t,this.app=e,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Rr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qr(this._repo,pt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(t,e){const i=hn[e];i&&i[t.key]===t||k(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jr(t),delete i[t.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&k("Cannot call "+t+" on a deleted database.")}}function fn(t=r.getApp(),e){return r._getProvider(t,"database").getImmediate({identifier:e})}Nt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Nt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dn,pn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn=r.SDK_VERSION,u=pn,r._registerComponent(new s.Component("database",((t,{instanceIdentifier:e})=>ln(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"),t.getProvider("app-check-internal"),e)),"PUBLIC").setMultipleInstances(!0)),r.registerVersion("@firebase/database","0.12.1",dn)})),n.register("58lYo",(function(e,i){t(e.exports,"GoogleAuthProvider",(()=>n("wEerJ").N)),t(e.exports,"getAuth",(()=>n("wEerJ").n)),t(e.exports,"signInWithPopup",(()=>n("wEerJ").c)),t(e.exports,"signOut",(()=>n("wEerJ").x)),t(e.exports,"onAuthStateChanged",(()=>n("wEerJ").t)),n("9b5Hb")})),n.register("9b5Hb",(function(e,i){t(e.exports,"GoogleAuthProvider",(()=>n("wEerJ").N)),t(e.exports,"getAuth",(()=>n("wEerJ").n)),t(e.exports,"onAuthStateChanged",(()=>n("wEerJ").t)),t(e.exports,"signInWithPopup",(()=>n("wEerJ").c)),t(e.exports,"signOut",(()=>n("wEerJ").x));n("wEerJ");n("15Gf9"),n("kVAWG"),n("aa1lO"),n("181Xw")})),n.register("wEerJ",(function(e,i){t(e.exports,"n",(()=>Ge)),t(e.exports,"c",(()=>ge)),t(e.exports,"t",(()=>Dt)),t(e.exports,"N",(()=>kt)),t(e.exports,"x",(()=>Ot));var r=n("15Gf9"),s=n("kVAWG"),o=n("bhppX"),a=n("aa1lO"),h=n("181Xw");function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=u,c=new r.ErrorFactory("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),f=new a.Logger("@firebase/auth");function d(t,...e){f.logLevel<=a.LogLevel.ERROR&&f.error(`Auth (${s.SDK_VERSION}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw v(t,...e)}function m(t,...e){return v(t,...e)}function g(t,e,i){const n=Object.assign(Object.assign({},l()),{[e]:i});return new r.ErrorFactory("auth","Firebase",n).create(e,{appName:t.name})}function y(t,e,i){if(!(e instanceof i))throw i.name!==e.constructor.name&&p(t,"argument-error"),g(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(t,...e){if("string"!=typeof t){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(i,...r)}return c.create(t,...e)}function b(t,e,...i){if(!t)throw v(e,...i)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function _(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=new Map;function S(t){_(t instanceof Function,"Expected a class definition");let e=M.get(t);return e?(_(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,M.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function k(){return"http:"===T()||"https:"===T()}function T(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(t,e){this.shortDelay=t,this.longDelay=e,_(e>t,"Short delay should be less than long delay!"),this.isMobile=r.isMobileCordova()||r.isReactNative()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(k()||r.isBrowserExtension()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){_(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},C=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,i,n,s={}){return L(t,s,(()=>{let s={},o={};n&&("GET"===e?o=n:s={body:JSON.stringify(n)});const a=r.querystring(Object.assign({key:t.config.apiKey},o)).slice(1),h=new(x.headers());return h.set("Content-Type","application/json"),h.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&h.set("X-Firebase-Locale",t.languageCode),x.fetch()(O(t,t.config.apiHost,i,a),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},s))}))}async function L(t,e,i){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},R),e);try{const e=new B(t),r=await Promise.race([i(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[i,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw j(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===i)throw j(t,"email-already-in-use",s);const a=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);p(t,a)}}catch(e){if(e instanceof r.FirebaseError)throw e;p(t,"network-request-failed")}}async function D(t,e,i,r,n={}){const s=await P(t,e,i,r,n);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{serverResponse:s}),s}function O(t,e,i,r){const n=`${e}${i}?${r}`;return t.config.emulator?A(t.config,n):`${t.config.apiScheme}://${n}`}class B{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(m(this.auth,"timeout"))),C.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,i){const r={appName:t.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const n=m(t,e,r);return n.customData._tokenResponse=i,n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){return 1e3*Number(t)}function F(t){const[e,i,n]=t.split(".");if(void 0===e||void 0===i||void 0===n)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=r.base64Decode(i);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(t){return d("Caught error parsing JWT payload as JSON",t),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function V(t,e,i=!1){if(i)return e;try{return await e}catch(e){throw e instanceof r.FirebaseError&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class z{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t){var e;const i=t.auth,r=await t.getIdToken(),n=await V(t,async function(t,e){return P(t,"POST","/v1/accounts:lookup",e)}(i,{idToken:r}));b(null==n?void 0:n.users.length,i,"internal-error");const s=n.users[0];t._notifyReloadListener(s);const a=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,i=o.__rest(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[];const h=(u=t.providerData,l=a,[...u.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var u,l;const c=t.isAnonymous,f=!(t.email&&s.passwordHash||(null==h?void 0:h.length)),d=!!c&&f,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:h,metadata:new H(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){b(t.idToken,"internal-error"),b(void 0!==t.idToken,"internal-error"),b(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=F(t);return b(e,"internal-error"),b(void 0!==e.exp,"internal-error"),b(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return b(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:n,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const i=await L(t,{},(()=>{const i=r.querystring({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:s}=t.config,o=O(t,n,"/v1/token",`key=${s}`);return x.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(t,e);this.updateTokensAndExpiration(i,n,Number(s))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(t,e){const{refreshToken:i,accessToken:r,expirationTime:n}=e,s=new K;return i&&(b("string"==typeof i,"internal-error",{appName:t}),s.refreshToken=i),r&&(b("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),n&&(b("number"==typeof n,"internal-error",{appName:t}),s.expirationTime=n),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new K,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e){b("string"==typeof t||void 0===t,"internal-error",{appName:e})}class ${constructor(t){var{uid:e,auth:i,stsTokenManager:r}=t,n=o.__rest(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.metadata=new H(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(t){const e=await V(this,this.stsTokenManager.getToken(this.auth,t));return b(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const i=r.getModularInstance(t),n=await i.getIdToken(e),s=F(n);b(s&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:n,authTime:q(U(s.auth_time)),issuedAtTime:q(U(s.iat)),expirationTime:q(U(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=r.getModularInstance(t);await W(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(b(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new $(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await W(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await V(this,async function(t,e){return P(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,r,n,s,o,a,h,u;const l=null!==(i=e.displayName)&&void 0!==i?i:void 0,c=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(n=e.phoneNumber)&&void 0!==n?n:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(h=e.createdAt)&&void 0!==h?h:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:M,stsTokenManager:S}=e;b(v&&S,t,"internal-error");const E=K.fromJSON(this.name,S);b("string"==typeof v,t,"internal-error"),G(l,t.name),G(c,t.name),b("boolean"==typeof w,t,"internal-error"),b("boolean"==typeof _,t,"internal-error"),G(f,t.name),G(d,t.name),G(p,t.name),G(m,t.name),G(g,t.name),G(y,t.name);const k=new $({uid:v,auth:t,email:c,emailVerified:w,displayName:l,isAnonymous:_,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return M&&Array.isArray(M)&&(k.providerData=M.map((t=>Object.assign({},t)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(t,e,i=!1){const r=new K;r.updateFromServerResponse(e);const n=new $({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await W(n),n}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Z.type="NONE";const J=Z;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,i){return`firebase:${t}:${e}:${i}`}class X{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:r,name:n}=this.auth;this.fullUserKey=Y(this.userKey,r.apiKey,n),this.fullPersistenceKey=Y("persistence",r.apiKey,n),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new X(S(J),t,i);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let n=r[0]||S(J);const s=Y(i,t.config.apiKey,t.name);let o=null;for(const i of e)try{const e=await i._get(s);if(e){const r=$._fromJSON(t,e);i!==n&&(o=r),n=i;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return n._shouldAllowMigration&&a.length?(n=a[0],o&&await n._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==n)try{await t._remove(s)}catch(t){}}))),new X(n,t,i)):new X(n,t,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(st(e))return"Blackberry";if(ot(e))return"Webos";if(et(e))return"Safari";if((e.includes("chrome/")||it(e))&&!e.includes("edge/"))return"Chrome";if(nt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(e);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function tt(t=r.getUA()){return/firefox\//i.test(t)}function et(t=r.getUA()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function it(t=r.getUA()){return/crios\//i.test(t)}function rt(t=r.getUA()){return/iemobile/i.test(t)}function nt(t=r.getUA()){return/android/i.test(t)}function st(t=r.getUA()){return/blackberry/i.test(t)}function ot(t=r.getUA()){return/webos/i.test(t)}function at(t=r.getUA()){return/iphone|ipad|ipod/i.test(t)}function ht(t=r.getUA()){return at(t)||nt(t)||ot(t)||st(t)||/windows phone/i.test(t)||rt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ut(t,e=[]){let i;switch(t){case"Browser":i=Q(r.getUA());break;case"Worker":i=`${Q(r.getUA())}-${t}`;break;default:i=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${s.SDK_VERSION}/${n}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ft(this),this.idTokenSubscription=new ft(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=S(e)),this._initializationPromise=this.queue((async()=>{var i;this._deleted||(this.persistenceManager=await X.create(this,t),this._deleted||((null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let i=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,n=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==n||!(null==s?void 0:s.user)||(i=s.user)}return i?i._redirectEventId?(b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await W(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?r.getModularInstance(t):null;return e&&b(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&b(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(S(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.ErrorFactory("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return null===t?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&S(t)||this._popupRedirectResolver;b(e,this,"argument-error"),this.redirectPersistenceManager=await X.create(this,[S(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,r){if(this._deleted)return()=>{};const n="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return b(s,this,"internal-error"),s.then((()=>n(this.currentUser))),"function"==typeof e?t.addObserver(e,i,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ut(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ct(t){return r.getModularInstance(t)}class ft{constructor(t){this.auth=t,this.observer=null,this.addObserver=r.createSubscribe((t=>this.observer=t))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends dt{constructor(t,e,i,r=null){super("password",i),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new mt(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new mt(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return D(t,"POST","/v1/accounts:signInWithPassword",N(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return pt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t,e){return D(t,"POST","/v1/accounts:signInWithIdp",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends dt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new yt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:i,signInMethod:r}=e,n=o.__rest(e,["providerId","signInMethod"]);if(!i||!r)return null;const s=new yt(i,r);return s.idToken=n.idToken||void 0,s.accessToken=n.accessToken||void 0,s.secret=n.secret,s.nonce=n.nonce,s.pendingToken=n.pendingToken||null,s}_getIdTokenResponse(t){return gt(t,this.buildRequest())}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,gt(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,gt(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=r.querystring(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends dt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new bt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new bt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return D(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const i=await D(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e));if(i.temporaryProof)throw j(t,"account-exists-with-different-credential",i);return i}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return D(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),vt)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:i,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:i,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:i,phoneNumber:r,temporaryProof:n}=t;return i||e||r||n?new bt({verificationId:e,verificationCode:i,phoneNumber:r,temporaryProof:n}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){var e,i,n,s,o,a;const h=r.querystringDecode(r.extractQuerystring(t)),u=null!==(e=h.apiKey)&&void 0!==e?e:null,l=null!==(i=h.oobCode)&&void 0!==i?i:null,c=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=h.mode)&&void 0!==n?n:null);b(u&&l&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=l,this.continueUrl=null!==(s=h.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=h.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=h.tenantId)&&void 0!==a?a:null}static parseLink(t){const e=function(t){const e=r.querystringDecode(r.extractQuerystring(t)).link,i=e?r.querystringDecode(r.extractQuerystring(e)).deep_link_id:null,n=r.querystringDecode(r.extractQuerystring(t)).deep_link_id;return(n?r.querystringDecode(r.extractQuerystring(n)).link:null)||n||i||e||t}(t);try{return new wt(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(){this.providerId=_t.PROVIDER_ID}static credential(t,e){return mt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const i=wt.parseLink(e);return b(i,"argument-error"),mt._fromEmailAndCode(t,i.code,i.tenantId)}}_t.PROVIDER_ID="password",_t.EMAIL_PASSWORD_SIGN_IN_METHOD="password",_t.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Mt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends St{constructor(){super("facebook.com")}static credential(t){return yt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch(t){return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com",Et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends St{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return yt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return kt.credential(e,i)}catch(t){return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com",kt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends St{constructor(){super("github.com")}static credential(t){return yt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Tt.credential(t.oauthAccessToken)}catch(t){return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com",Tt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends St{constructor(){super("twitter.com")}static credential(t,e){return yt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return It.credential(e,i)}catch(t){return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,r=!1){const n=await $._fromIdTokenResponse(t,i,r),s=xt(i);return new At({user:n,providerId:s,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const r=xt(i);return new At({user:t,providerId:r,_tokenResponse:i,operationType:e})}}function xt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt extends r.FirebaseError{constructor(t,e,i,r){var n;super(e.code,e.message),this.operationType=i,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Rt.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(n=t.tenantId)&&void 0!==n?n:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,i,r){return new Rt(t,e,i,r)}}function Ct(t,e,i,r){return("reauthenticate"===e?i._getReauthenticationResolver(t):i._getIdTokenResponse(t)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw Rt._fromErrorAndOperation(t,i,e,r);throw i}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(t,e,i=!1){const r=await V(t,e._linkToIdToken(t.auth,await t.getIdToken()),i);return At._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(t,e,i=!1){const{auth:r}=t,n="reauthenticate";try{const s=await V(t,Ct(r,n,e,t),i);b(s.idToken,r,"internal-error");const o=F(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),At._forOperation(t,n,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&p(r,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(t,e,i=!1){const r="signIn",n=await Ct(t,r,e),s=await At._fromIdTokenResponse(t,r,n);return i||await t._updateCurrentUser(s.user),s}function Dt(t,e,i,n){return r.getModularInstance(t).onAuthStateChanged(e,i,n)}function Ot(t){return r.getModularInstance(t).signOut()}new WeakMap;const Bt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Bt,"1"),this.storage.removeItem(Bt),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends jt{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=r.getUA();return et(t)||at(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=ht(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),r=this.localCache[e];i!==r&&t(e,r,i)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,i)=>{this.notifyListeners(t,i)}));const i=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(i);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!e)return}const n=()=>{const t=this.storage.getItem(i);(e||this.localCache[i]!==t)&&this.notifyListeners(i,t)},s=this.storage.getItem(i);r.isIE()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(n,10):n()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const t of Array.from(i))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}qt.type="LOCAL";const Ut=qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends jt{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ft.type="SESSION";const Vt=Ft;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const i=new zt(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:r,data:n}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,n))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ht(t="",e=10){let i="";for(let t=0;t<e;t++)i+=Math.floor(10*Math.random());return t+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt.receivers=[];class Wt{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let n,s;return new Promise(((o,a)=>{const h=Ht("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),i);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===h)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(u),clearTimeout(n),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:h,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(){return void 0!==Kt().WorkerGlobalScope&&"function"==typeof Kt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $t="firebaseLocalStorageDb",Zt="firebaseLocalStorage",Jt="fbase_key";class Yt{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Xt(t,e){return t.transaction([Zt],e?"readwrite":"readonly").objectStore(Zt)}function Qt(){const t=indexedDB.open($t,1);return new Promise(((e,i)=>{t.addEventListener("error",(()=>{i(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Zt,{keyPath:Jt})}catch(t){i(t)}})),t.addEventListener("success",(async()=>{const i=t.result;i.objectStoreNames.contains(Zt)?e(i):(i.close(),await function(){const t=indexedDB.deleteDatabase($t);return new Yt(t).toPromise()}(),e(await Qt()))}))}))}async function te(t,e,i){const r=Xt(t,!0).put({[Jt]:e,value:i});return new Yt(r).toPromise()}function ee(t,e){const i=Xt(t,!0).delete(e);return new Yt(i).toPromise()}class ie{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Qt()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zt._getInstance(Gt()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Wt(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(t=i[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=i[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qt();return await te(t,Bt,"1"),await ee(t,Bt),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((i=>te(i,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const i=Xt(t,!1).get(e),r=await new Yt(i).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ee(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Xt(t,!1).getAll();return new Yt(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],i=new Set;for(const{fbase_key:r,value:n}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(n)&&(this.notifyListeners(r,n),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!i.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const t of Array.from(i))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ie.type="LOCAL";const re=ie;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t){return new Promise(((e,i)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n,s;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=m("internal-error");e.customData=t,i(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==s?s:document).appendChild(r)}))}function se(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
se("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oe="recaptcha";async function ae(t,e,i){var r;const n=await i.verify();try{let a;if(b("string"==typeof n,t,"argument-error"),b(i.type===oe,t,"argument-error"),a="string"==typeof e?{phoneNumber:e}:e,"session"in a){const e=a.session;if("phoneNumber"in a){b("enroll"===e.type,t,"internal-error");return(await(s=t,o={idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:n}},P(s,"POST","/v2/accounts/mfaEnrollment:start",N(s,o)))).phoneSessionInfo.sessionInfo}{b("signin"===e.type,t,"internal-error");const i=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid;b(i,t,"missing-multi-factor-info");const s=await function(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",N(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:n}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",N(t,e))}(t,{phoneNumber:a.phoneNumber,recaptchaToken:n});return e}}finally{i._reset()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(t){this.providerId=he.PROVIDER_ID,this.auth=ct(t)}verifyPhoneNumber(t,e){return ae(this.auth,t,r.getModularInstance(e))}static credential(t,e){return bt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return he.credentialFromTaggedObject(e)}static credentialFromError(t){return he.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:i}=t;return e&&i?bt._fromTokenResponse(e,i):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(t,e){return e?S(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */he.PROVIDER_ID="phone",he.PHONE_SIGN_IN_METHOD="phone";class le extends dt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return gt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return gt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function ce(t){return Lt(t.auth,new le(t),t.bypassAuthState)}function fe(t){const{auth:e,user:i}=t;return b(i,e,"internal-error"),Pt(i,new le(t),t.bypassAuthState)}async function de(t){const{auth:e,user:i}=t;return b(i,e,"internal-error"),Nt(i,new le(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e,i,r,n=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:r,tenantId:n,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:i,tenantId:n||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ce;case"linkViaPopup":case"linkViaRedirect":return de;case"reauthViaPopup":case"reauthViaRedirect":return fe;default:p(this.auth,"internal-error")}}resolve(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new I(2e3,1e4);async function ge(t,e,i){const r=ct(t);y(t,e,Mt);const n=ue(r,i);return new ye(r,"signInViaPopup",e,n).executeNotNull()}class ye extends pe{constructor(t,e,i,r,n){super(t,e,r,n),this.provider=i,this.authWindow=null,this.pollId=null,ye.currentPopupAction&&ye.currentPopupAction.cancel(),ye.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return b(t,this.auth,"internal-error"),t}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const t=Ht();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ye.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;(null===(i=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,me.get())};t()}}ye.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve=new Map;class be extends pe{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=ve.get(this.auth._key());if(!t){try{const e=await async function(t,e){const i=_e(e),r="true"===await we(t)._get(i);return await we(t)._remove(i),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}ve.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function we(t){return S(t._redirectPersistence)}function _e(t){return Y("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(t,e,i=!1){const r=ct(t),n=ue(r,e),s=new be(r,n,i),o=await s.execute();return o&&!i&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}class Se{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ke(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!ke(t)){const r=(null===(i=t.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";e.onError(m(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ee(t))}saveEventToCache(t){this.cachedEventUids.add(Ee(t)),this.lastProcessedEventTime=Date.now()}}function Ee(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function ke({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Te=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ie=/^https?/;async function Ae(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return P(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(xe(t))return}catch(t){}p(t,"unauthorized-domain")}function xe(t){const e=E(),{protocol:i,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const n=new URL(t);return""===n.hostname&&""===r?"chrome-extension:"===i&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===i&&n.hostname===r}if(!Ie.test(i))return!1;if(Te.test(t))return r===t;const n=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new I(3e4,6e4);function Ce(){const t=Kt().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Ne=null;function Pe(t){return Ne=Ne||function(t){return new Promise(((e,i)=>{var r,n,s;function o(){Ce(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ce(),i(m(t,"network-request-failed"))},timeout:Re.get()})}if(null===(n=null===(r=Kt().gapi)||void 0===r?void 0:r.iframes)||void 0===n?void 0:n.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Kt().gapi)||void 0===s?void 0:s.load)){const e=se("iframefcb");return Kt()[e]=()=>{gapi.load?o():i(m(t,"network-request-failed"))},ne(`https://apis.google.com/js/api.js?onload=${e}`)}o()}})).catch((t=>{throw Ne=null,t}))}(t),Ne}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new I(5e3,15e3),De={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Oe=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Be(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const i=e.emulator?A(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,n={apiKey:e.apiKey,appName:t.name,v:s.SDK_VERSION},o=Oe.get(t.config.apiHost);o&&(n.eid=o);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${i}?${r.querystring(n).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const je={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class qe{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Ue(t,e,i,n=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let h="";const u=Object.assign(Object.assign({},je),{width:n.toString(),height:s.toString(),top:o,left:a}),l=r.getUA().toLowerCase();i&&(h=it(l)?"_blank":i),tt(l)&&(e=e||"http://localhost",u.scrollbars="yes");const c=Object.entries(u).reduce(((t,[e,i])=>`${t}${e}=${i},`),"");if(function(t=r.getUA()){var e;return at(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==h)return function(t,e){const i=document.createElement("a");i.href=t,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",h),new qe(null);const f=window.open(e||"",h,c);b(f,t,"popup-blocked");try{f.focus()}catch(t){}return new qe(f)}const Fe="emulator/auth/handler";function Ve(t,e,i,n,o,a){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const h={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:n,v:s.SDK_VERSION,eventId:o};if(e instanceof Mt){e.setDefaultLanguage(t.languageCode),h.providerId=e.providerId||"",r.isEmpty(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))h[t]=e}if(e instanceof St){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(h.scopes=t.join(","))}t.tenantId&&(h.tid=t.tenantId);const u=h;for(const t of Object.keys(u))void 0===u[t]&&delete u[t];return`${function({config:t}){return t.emulator?A(t,Fe):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${r.querystring(u).slice(1)}`}const ze="webStorageSupport";const He=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vt,this._completeRedirectFn=Me}async _openPopup(t,e,i,r){var n;_(null===(n=this.eventManagers[t._key()])||void 0===n?void 0:n.manager,"_initialize() not called before _openPopup()");return Ue(t,Ve(t,e,i,E(),r),Ht())}async _openRedirect(t,e,i,r){var n;return await this._originValidation(t),n=Ve(t,e,i,E(),r),Kt().location.href=n,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:i}=this.eventManagers[e];return t?Promise.resolve(t):(_(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i}async initAndGetManager(t){const e=await async function(t){const e=await Pe(t),i=Kt().gapi;return b(i,t,"internal-error"),e.open({where:document.body,url:Be(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:De,dontclear:!0},(e=>new Promise((async(i,r)=>{await e.restyle({setHideOnLeave:!1});const n=m(t,"network-request-failed"),s=Kt().setTimeout((()=>{r(n)}),Le.get());function o(){Kt().clearTimeout(s),i(e)}e.ping(o).then(o,(()=>{r(n)}))}))))}(t),i=new Se(t);return e.register("authEvent",(e=>{b(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:i.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(ze,{type:ze},(i=>{var r;const n=null===(r=null==i?void 0:i[0])||void 0===r?void 0:r.webStorageSupport;void 0!==n&&e(!!n),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ae(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ht()||et()||at()}};var We;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var i;t((null===(i=e)||void 0===i?void 0:i.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(t=s.getApp()){const e=s._getProvider(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const i=s._getProvider(t,"auth");if(i.isInitialized()){const t=i.getImmediate(),n=i.getOptions();if(r.deepEqual(n,null!=e?e:{}))return t;p(t,"already-initialized")}return i.initialize({options:e})}(t,{popupRedirectResolver:He,persistence:[re,Ut,Vt]})}We="Browser",s._registerComponent(new h.Component("auth",((t,{options:e})=>{const i=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:n}=i.options;return(t=>{b(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),b(!(null==n?void 0:n.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:n,clientPlatform:We,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ut(We)},s=new lt(t,i);return function(t,e){const i=(null==e?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(S);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,i)=>{t.getProvider("auth-internal").initialize()}))),s._registerComponent(new h.Component("auth-internal",(t=>{const e=ct(t.getProvider("auth").getImmediate());return new Ke(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),s.registerVersion("@firebase/auth","0.18.2",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(We))})),n.register("ieZbX",(function(e,i){t(e.exports,"setRT_FB",(()=>u)),t(e.exports,"decrypt",(()=>f)),t(e.exports,"updateRT_FB",(()=>o)),t(e.exports,"getRT_FB",(()=>h)),t(e.exports,"removeRT_FB",(()=>a)),t(e.exports,"encrypt",(()=>c)),n("ac0VL");var r=n("fLfgL"),s=n("4cEA8");n("f1vV5");const o=async(t,e)=>{await s.update(s.ref(r.database,t),e)},a=async t=>{await s.remove(s.ref(r.database,t))},h=async t=>{const e=s.ref(r.database);return await s.get(s.child(e,t))},u=async(t,e)=>{await s.set(s.ref(r.database,t),e)};var l=n("fLaEZ");function c(t,e){var i=l.createCipher("aes-256-cbc",t),r=i.update(e,"utf-8","hex");return r+=i.final("hex")}function f(t,e){var i=l.createDecipher("aes-256-cbc",t),r=i.update(e,"hex","utf-8");return r+=i.final("utf-8")}})),n.register("fLaEZ",(function(e,i){var r,s;t(e.exports,"createDecipher",(()=>r),(t=>r=t)),t(e.exports,"createCipher",(()=>s),(t=>s=t)),n("RtORQ"),n("4y8sq"),n("jO7LI");var o=n("jx40q"),a=Object.keys(o),h=["sha1","sha224","sha256","sha384","sha512","md5","rmd160"].concat(a);var u=n("acqrP");u.pbkdf2,u.pbkdf2Sync;var l=n("1xPbX");l.Cipher,s=l.createCipher,l.Cipheriv,l.createCipheriv,l.Decipher,r=l.createDecipher,l.Decipheriv,l.createDecipheriv,l.getCiphers,l.listCiphers;var c=n("bhHGW");c.DiffieHellmanGroup,c.createDiffieHellmanGroup,c.getDiffieHellman,c.createDiffieHellman,c.DiffieHellman;var f=n("4yzF0");f.createSign,f.Sign,f.createVerify,f.Verify,n("7HLBL");var d=n("iRpv8");d.publicEncrypt,d.privateEncrypt,d.publicDecrypt,d.privateDecrypt;var p=n("d8lrr");p.randomFill,p.randomFillSync})),n.register("RtORQ",(function(t,i){var r=n("2px04"),s=65536;var o=n("jbPPJ").Buffer,a=e.crypto||e.msCrypto;a&&a.getRandomValues?t.exports=function(t,e){if(t>4294967295)throw new RangeError("requested too many random bytes");var i=o.allocUnsafe(t);if(t>0)if(t>s)for(var n=0;n<t;n+=s)a.getRandomValues(i.slice(n,n+s));else a.getRandomValues(i);return"function"==typeof e?r.nextTick((function(){e(null,i)})):i}:t.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}})),n.register("jbPPJ",(function(t,e){var i=n("bqe6e"),r=i.Buffer;function s(t,e){for(var i in t)e[i]=t[i]}function o(t,e,i){return r(t,e,i)}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?t.exports=i:(s(i,t.exports),t.exports.Buffer=o),s(r,o),o.from=function(t,e,i){if("number"==typeof t)throw new TypeError("Argument must not be a number");return r(t,e,i)},o.alloc=function(t,e,i){if("number"!=typeof t)throw new TypeError("Argument must be a number");var n=r(t);return void 0!==e?"string"==typeof i?n.fill(e,i):n.fill(e):n.fill(0),n},o.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return r(t)},o.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return i.SlowBuffer(t)}})),n.register("bqe6e",(function(e,i){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var r,s,o,a;t(e.exports,"SlowBuffer",(()=>s),(t=>s=t)),t(e.exports,"INSPECT_MAX_BYTES",(()=>r),(t=>r=t)),t(e.exports,"kMaxLength",(()=>a),(t=>a=t)),t(e.exports,"Buffer",(()=>o),(t=>o=t));var h=n("agxh8"),u=n("5rgBs"),l="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;o=d,s=function(t){+t!=t&&(t=0);return d.alloc(+t)},r=50;var c=2147483647;function f(t){if(t>c)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,d.prototype),e}function d(t,e,i){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return g(t)}return p(t,e,i)}function p(t,e,i){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var i=0|w(t,e),r=f(i),n=r.write(t,e);n!==i&&(r=r.slice(0,n));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(K(t,Uint8Array)){var e=new Uint8Array(t);return v(e.buffer,e.byteOffset,e.byteLength)}return y(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(K(t,ArrayBuffer)||t&&K(t.buffer,ArrayBuffer))return v(t,e,i);if("undefined"!=typeof SharedArrayBuffer&&(K(t,SharedArrayBuffer)||t&&K(t.buffer,SharedArrayBuffer)))return v(t,e,i);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return d.from(r,e,i);var n=function(t){if(d.isBuffer(t)){var e=0|b(t.length),i=f(e);return 0===i.length||t.copy(i,0,0,e),i}if(void 0!==t.length)return"number"!=typeof t.length||G(t.length)?f(0):y(t);if("Buffer"===t.type&&Array.isArray(t.data))return y(t.data)}(t);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return d.from(t[Symbol.toPrimitive]("string"),e,i);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function m(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function g(t){return m(t),f(t<0?0:0|b(t))}function y(t){for(var e=t.length<0?0:0|b(t.length),i=f(e),r=0;r<e;r+=1)i[r]=255&t[r];return i}function v(t,e,i){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(i||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===e&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,e):new Uint8Array(t,e,i),Object.setPrototypeOf(r,d.prototype),r}function b(t){if(t>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|t}function w(t,e){if(d.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||K(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var i=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===i)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return H(t).length;default:if(n)return r?-1:z(t).length;e=(""+e).toLowerCase(),n=!0}}function _(t,e,i){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===i||i>this.length)&&(i=this.length),i<=0)return"";if((i>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return D(this,e,i);case"utf8":case"utf-8":return C(this,e,i);case"ascii":return P(this,e,i);case"latin1":case"binary":return L(this,e,i);case"base64":return R(this,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,e,i);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function M(t,e,i){var r=t[e];t[e]=t[i],t[i]=r}function S(t,e,i,r,n){if(0===t.length)return-1;if("string"==typeof i?(r=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),G(i=+i)&&(i=n?0:t.length-1),i<0&&(i=t.length+i),i>=t.length){if(n)return-1;i=t.length-1}else if(i<0){if(!n)return-1;i=0}if("string"==typeof e&&(e=d.from(e,r)),d.isBuffer(e))return 0===e.length?-1:E(t,e,i,r,n);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?n?Uint8Array.prototype.indexOf.call(t,e,i):Uint8Array.prototype.lastIndexOf.call(t,e,i):E(t,[e],i,r,n);throw new TypeError("val must be string, number or Buffer")}function E(t,e,i,r,n){var s,o=1,a=t.length,h=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,a/=2,h/=2,i/=2}function u(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(n){var l=-1;for(s=i;s<a;s++)if(u(t,s)===u(e,-1===l?0:s-l)){if(-1===l&&(l=s),s-l+1===h)return l*o}else-1!==l&&(s-=s-l),l=-1}else for(i+h>a&&(i=a-h),s=i;s>=0;s--){for(var c=!0,f=0;f<h;f++)if(u(t,s+f)!==u(e,f)){c=!1;break}if(c)return s}return-1}function k(t,e,i,r){i=Number(i)||0;var n=t.length-i;r?(r=Number(r))>n&&(r=n):r=n;var s=e.length;r>s/2&&(r=s/2);for(var o=0;o<r;++o){var a=parseInt(e.substr(2*o,2),16);if(G(a))return o;t[i+o]=a}return o}function T(t,e,i,r){return W(z(e,t.length-i),t,i,r)}function I(t,e,i,r){return W(function(t){for(var e=[],i=0;i<t.length;++i)e.push(255&t.charCodeAt(i));return e}(e),t,i,r)}function A(t,e,i,r){return W(H(e),t,i,r)}function x(t,e,i,r){return W(function(t,e){for(var i,r,n,s=[],o=0;o<t.length&&!((e-=2)<0);++o)r=(i=t.charCodeAt(o))>>8,n=i%256,s.push(n),s.push(r);return s}(e,t.length-i),t,i,r)}function R(t,e,i){return 0===e&&i===t.length?h.fromByteArray(t):h.fromByteArray(t.slice(e,i))}function C(t,e,i){i=Math.min(t.length,i);for(var r=[],n=e;n<i;){var s,o,a,h,u=t[n],l=null,c=u>239?4:u>223?3:u>191?2:1;if(n+c<=i)switch(c){case 1:u<128&&(l=u);break;case 2:128==(192&(s=t[n+1]))&&(h=(31&u)<<6|63&s)>127&&(l=h);break;case 3:s=t[n+1],o=t[n+2],128==(192&s)&&128==(192&o)&&(h=(15&u)<<12|(63&s)<<6|63&o)>2047&&(h<55296||h>57343)&&(l=h);break;case 4:s=t[n+1],o=t[n+2],a=t[n+3],128==(192&s)&&128==(192&o)&&128==(192&a)&&(h=(15&u)<<18|(63&s)<<12|(63&o)<<6|63&a)>65535&&h<1114112&&(l=h)}null===l?(l=65533,c=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),n+=c}return function(t){var e=t.length;if(e<=N)return String.fromCharCode.apply(String,t);var i="",r=0;for(;r<e;)i+=String.fromCharCode.apply(String,t.slice(r,r+=N));return i}(r)}a=c,d.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),d.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.buffer}}),Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.byteOffset}}),d.poolSize=8192,d.from=function(t,e,i){return p(t,e,i)},Object.setPrototypeOf(d.prototype,Uint8Array.prototype),Object.setPrototypeOf(d,Uint8Array),d.alloc=function(t,e,i){return function(t,e,i){return m(t),t<=0?f(t):void 0!==e?"string"==typeof i?f(t).fill(e,i):f(t).fill(e):f(t)}(t,e,i)},d.allocUnsafe=function(t){return g(t)},d.allocUnsafeSlow=function(t){return g(t)},d.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==d.prototype},d.compare=function(t,e){if(K(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),K(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(t)||!d.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var i=t.length,r=e.length,n=0,s=Math.min(i,r);n<s;++n)if(t[n]!==e[n]){i=t[n],r=e[n];break}return i<r?-1:r<i?1:0},d.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return d.alloc(0);var i;if(void 0===e)for(e=0,i=0;i<t.length;++i)e+=t[i].length;var r=d.allocUnsafe(e),n=0;for(i=0;i<t.length;++i){var s=t[i];if(K(s,Uint8Array))n+s.length>r.length?d.from(s).copy(r,n):Uint8Array.prototype.set.call(r,s,n);else{if(!d.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,n)}n+=s.length}return r},d.byteLength=w,d.prototype._isBuffer=!0,d.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)M(this,e,e+1);return this},d.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)M(this,e,e+3),M(this,e+1,e+2);return this},d.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)M(this,e,e+7),M(this,e+1,e+6),M(this,e+2,e+5),M(this,e+3,e+4);return this},d.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?C(this,0,t):_.apply(this,arguments)},d.prototype.toLocaleString=d.prototype.toString,d.prototype.equals=function(t){if(!d.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===d.compare(this,t)},d.prototype.inspect=function(){var t="",e=r;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},l&&(d.prototype[l]=d.prototype.inspect),d.prototype.compare=function(t,e,i,r,n){if(K(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===i&&(i=t?t.length:0),void 0===r&&(r=0),void 0===n&&(n=this.length),e<0||i>t.length||r<0||n>this.length)throw new RangeError("out of range index");if(r>=n&&e>=i)return 0;if(r>=n)return-1;if(e>=i)return 1;if(this===t)return 0;for(var s=(n>>>=0)-(r>>>=0),o=(i>>>=0)-(e>>>=0),a=Math.min(s,o),h=this.slice(r,n),u=t.slice(e,i),l=0;l<a;++l)if(h[l]!==u[l]){s=h[l],o=u[l];break}return s<o?-1:o<s?1:0},d.prototype.includes=function(t,e,i){return-1!==this.indexOf(t,e,i)},d.prototype.indexOf=function(t,e,i){return S(this,t,e,i,!0)},d.prototype.lastIndexOf=function(t,e,i){return S(this,t,e,i,!1)},d.prototype.write=function(t,e,i,r){if(void 0===e)r="utf8",i=this.length,e=0;else if(void 0===i&&"string"==typeof e)r=e,i=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(i)?(i>>>=0,void 0===r&&(r="utf8")):(r=i,i=void 0)}var n=this.length-e;if((void 0===i||i>n)&&(i=n),t.length>0&&(i<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return k(this,t,e,i);case"utf8":case"utf-8":return T(this,t,e,i);case"ascii":case"latin1":case"binary":return I(this,t,e,i);case"base64":return A(this,t,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,e,i);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var N=4096;function P(t,e,i){var r="";i=Math.min(t.length,i);for(var n=e;n<i;++n)r+=String.fromCharCode(127&t[n]);return r}function L(t,e,i){var r="";i=Math.min(t.length,i);for(var n=e;n<i;++n)r+=String.fromCharCode(t[n]);return r}function D(t,e,i){var r=t.length;(!e||e<0)&&(e=0),(!i||i<0||i>r)&&(i=r);for(var n="",s=e;s<i;++s)n+=$[t[s]];return n}function O(t,e,i){for(var r=t.slice(e,i),n="",s=0;s<r.length-1;s+=2)n+=String.fromCharCode(r[s]+256*r[s+1]);return n}function B(t,e,i){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>i)throw new RangeError("Trying to access beyond buffer length")}function j(t,e,i,r,n,s){if(!d.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<s)throw new RangeError('"value" argument is out of bounds');if(i+r>t.length)throw new RangeError("Index out of range")}function q(t,e,i,r,n,s){if(i+r>t.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function U(t,e,i,r,n){return e=+e,i>>>=0,n||q(t,0,i,4),u.write(t,e,i,r,23,4),i+4}function F(t,e,i,r,n){return e=+e,i>>>=0,n||q(t,0,i,8),u.write(t,e,i,r,52,8),i+8}d.prototype.slice=function(t,e){var i=this.length;(t=~~t)<0?(t+=i)<0&&(t=0):t>i&&(t=i),(e=void 0===e?i:~~e)<0?(e+=i)<0&&(e=0):e>i&&(e=i),e<t&&(e=t);var r=this.subarray(t,e);return Object.setPrototypeOf(r,d.prototype),r},d.prototype.readUintLE=d.prototype.readUIntLE=function(t,e,i){t>>>=0,e>>>=0,i||B(t,e,this.length);for(var r=this[t],n=1,s=0;++s<e&&(n*=256);)r+=this[t+s]*n;return r},d.prototype.readUintBE=d.prototype.readUIntBE=function(t,e,i){t>>>=0,e>>>=0,i||B(t,e,this.length);for(var r=this[t+--e],n=1;e>0&&(n*=256);)r+=this[t+--e]*n;return r},d.prototype.readUint8=d.prototype.readUInt8=function(t,e){return t>>>=0,e||B(t,1,this.length),this[t]},d.prototype.readUint16LE=d.prototype.readUInt16LE=function(t,e){return t>>>=0,e||B(t,2,this.length),this[t]|this[t+1]<<8},d.prototype.readUint16BE=d.prototype.readUInt16BE=function(t,e){return t>>>=0,e||B(t,2,this.length),this[t]<<8|this[t+1]},d.prototype.readUint32LE=d.prototype.readUInt32LE=function(t,e){return t>>>=0,e||B(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},d.prototype.readUint32BE=d.prototype.readUInt32BE=function(t,e){return t>>>=0,e||B(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},d.prototype.readIntLE=function(t,e,i){t>>>=0,e>>>=0,i||B(t,e,this.length);for(var r=this[t],n=1,s=0;++s<e&&(n*=256);)r+=this[t+s]*n;return r>=(n*=128)&&(r-=Math.pow(2,8*e)),r},d.prototype.readIntBE=function(t,e,i){t>>>=0,e>>>=0,i||B(t,e,this.length);for(var r=e,n=1,s=this[t+--r];r>0&&(n*=256);)s+=this[t+--r]*n;return s>=(n*=128)&&(s-=Math.pow(2,8*e)),s},d.prototype.readInt8=function(t,e){return t>>>=0,e||B(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},d.prototype.readInt16LE=function(t,e){t>>>=0,e||B(t,2,this.length);var i=this[t]|this[t+1]<<8;return 32768&i?4294901760|i:i},d.prototype.readInt16BE=function(t,e){t>>>=0,e||B(t,2,this.length);var i=this[t+1]|this[t]<<8;return 32768&i?4294901760|i:i},d.prototype.readInt32LE=function(t,e){return t>>>=0,e||B(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},d.prototype.readInt32BE=function(t,e){return t>>>=0,e||B(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},d.prototype.readFloatLE=function(t,e){return t>>>=0,e||B(t,4,this.length),u.read(this,t,!0,23,4)},d.prototype.readFloatBE=function(t,e){return t>>>=0,e||B(t,4,this.length),u.read(this,t,!1,23,4)},d.prototype.readDoubleLE=function(t,e){return t>>>=0,e||B(t,8,this.length),u.read(this,t,!0,52,8)},d.prototype.readDoubleBE=function(t,e){return t>>>=0,e||B(t,8,this.length),u.read(this,t,!1,52,8)},d.prototype.writeUintLE=d.prototype.writeUIntLE=function(t,e,i,r){(t=+t,e>>>=0,i>>>=0,r)||j(this,t,e,i,Math.pow(2,8*i)-1,0);var n=1,s=0;for(this[e]=255&t;++s<i&&(n*=256);)this[e+s]=t/n&255;return e+i},d.prototype.writeUintBE=d.prototype.writeUIntBE=function(t,e,i,r){(t=+t,e>>>=0,i>>>=0,r)||j(this,t,e,i,Math.pow(2,8*i)-1,0);var n=i-1,s=1;for(this[e+n]=255&t;--n>=0&&(s*=256);)this[e+n]=t/s&255;return e+i},d.prototype.writeUint8=d.prototype.writeUInt8=function(t,e,i){return t=+t,e>>>=0,i||j(this,t,e,1,255,0),this[e]=255&t,e+1},d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(t,e,i){return t=+t,e>>>=0,i||j(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(t,e,i){return t=+t,e>>>=0,i||j(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(t,e,i){return t=+t,e>>>=0,i||j(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(t,e,i){return t=+t,e>>>=0,i||j(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},d.prototype.writeIntLE=function(t,e,i,r){if(t=+t,e>>>=0,!r){var n=Math.pow(2,8*i-1);j(this,t,e,i,n-1,-n)}var s=0,o=1,a=0;for(this[e]=255&t;++s<i&&(o*=256);)t<0&&0===a&&0!==this[e+s-1]&&(a=1),this[e+s]=(t/o>>0)-a&255;return e+i},d.prototype.writeIntBE=function(t,e,i,r){if(t=+t,e>>>=0,!r){var n=Math.pow(2,8*i-1);j(this,t,e,i,n-1,-n)}var s=i-1,o=1,a=0;for(this[e+s]=255&t;--s>=0&&(o*=256);)t<0&&0===a&&0!==this[e+s+1]&&(a=1),this[e+s]=(t/o>>0)-a&255;return e+i},d.prototype.writeInt8=function(t,e,i){return t=+t,e>>>=0,i||j(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},d.prototype.writeInt16LE=function(t,e,i){return t=+t,e>>>=0,i||j(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},d.prototype.writeInt16BE=function(t,e,i){return t=+t,e>>>=0,i||j(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},d.prototype.writeInt32LE=function(t,e,i){return t=+t,e>>>=0,i||j(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},d.prototype.writeInt32BE=function(t,e,i){return t=+t,e>>>=0,i||j(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},d.prototype.writeFloatLE=function(t,e,i){return U(this,t,e,!0,i)},d.prototype.writeFloatBE=function(t,e,i){return U(this,t,e,!1,i)},d.prototype.writeDoubleLE=function(t,e,i){return F(this,t,e,!0,i)},d.prototype.writeDoubleBE=function(t,e,i){return F(this,t,e,!1,i)},d.prototype.copy=function(t,e,i,r){if(!d.isBuffer(t))throw new TypeError("argument should be a Buffer");if(i||(i=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<i&&(r=i),r===i)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-i&&(r=t.length-e+i);var n=r-i;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,i,r):Uint8Array.prototype.set.call(t,this.subarray(i,r),e),n},d.prototype.fill=function(t,e,i,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,i=this.length):"string"==typeof i&&(r=i,i=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!d.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){var n=t.charCodeAt(0);("utf8"===r&&n<128||"latin1"===r)&&(t=n)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<i)throw new RangeError("Out of range index");if(i<=e)return this;var s;if(e>>>=0,i=void 0===i?this.length:i>>>0,t||(t=0),"number"==typeof t)for(s=e;s<i;++s)this[s]=t;else{var o=d.isBuffer(t)?t:d.from(t,r),a=o.length;if(0===a)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(s=0;s<i-e;++s)this[s+e]=o[s%a]}return this};var V=/[^+/0-9A-Za-z-_]/g;function z(t,e){var i;e=e||1/0;for(var r=t.length,n=null,s=[],o=0;o<r;++o){if((i=t.charCodeAt(o))>55295&&i<57344){if(!n){if(i>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}n=i;continue}if(i<56320){(e-=3)>-1&&s.push(239,191,189),n=i;continue}i=65536+(n-55296<<10|i-56320)}else n&&(e-=3)>-1&&s.push(239,191,189);if(n=null,i<128){if((e-=1)<0)break;s.push(i)}else if(i<2048){if((e-=2)<0)break;s.push(i>>6|192,63&i|128)}else if(i<65536){if((e-=3)<0)break;s.push(i>>12|224,i>>6&63|128,63&i|128)}else{if(!(i<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}}return s}function H(t){return h.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(V,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function W(t,e,i,r){for(var n=0;n<r&&!(n+i>=e.length||n>=t.length);++n)e[n+i]=t[n];return n}function K(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function G(t){return t!=t}var $=function(){for(var t="0123456789abcdef",e=new Array(256),i=0;i<16;++i)for(var r=16*i,n=0;n<16;++n)e[r+n]=t[i]+t[n];return e}()})),n.register("agxh8",(function(e,i){var r,n;t(e.exports,"toByteArray",(()=>n),(t=>n=t)),t(e.exports,"fromByteArray",(()=>r),(t=>r=t)),n=function(t){var e,i,r=c(t),n=r[0],s=r[1],h=new a(function(t,e,i){return 3*(e+i)/4-i}(0,n,s)),u=0,l=s>0?n-4:n;for(i=0;i<l;i+=4)e=o[t.charCodeAt(i)]<<18|o[t.charCodeAt(i+1)]<<12|o[t.charCodeAt(i+2)]<<6|o[t.charCodeAt(i+3)],h[u++]=e>>16&255,h[u++]=e>>8&255,h[u++]=255&e;2===s&&(e=o[t.charCodeAt(i)]<<2|o[t.charCodeAt(i+1)]>>4,h[u++]=255&e);1===s&&(e=o[t.charCodeAt(i)]<<10|o[t.charCodeAt(i+1)]<<4|o[t.charCodeAt(i+2)]>>2,h[u++]=e>>8&255,h[u++]=255&e);return h},r=function(t){for(var e,i=t.length,r=i%3,n=[],o=16383,a=0,h=i-r;a<h;a+=o)n.push(f(t,a,a+o>h?h:a+o));1===r?(e=t[i-1],n.push(s[e>>2]+s[e<<4&63]+"==")):2===r&&(e=(t[i-2]<<8)+t[i-1],n.push(s[e>>10]+s[e>>4&63]+s[e<<2&63]+"="));return n.join("")};for(var s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,l=h.length;u<l;++u)s[u]=h[u],o[h.charCodeAt(u)]=u;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var i=t.indexOf("=");return-1===i&&(i=e),[i,i===e?0:4-i%4]}function f(t,e,i){for(var r,n,o=[],a=e;a<i;a+=3)r=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),o.push(s[(n=r)>>18&63]+s[n>>12&63]+s[n>>6&63]+s[63&n]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),n.register("5rgBs",(function(e,i){
//# sourceMappingURL=index.ae23d72d.js.map
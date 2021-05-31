(function(e){function t(t){for(var i,r,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},s={app:0},n=[];function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"039f":function(e,t,a){},"08a0":function(e,t,a){},1:function(e,t){},"21a7":function(e,t,a){"use strict";a("b5a2")},"21bb":function(e,t,a){"use strict";a("2dad")},2552:function(e,t,a){},"2c96":function(e,t,a){"use strict";a("2552")},"2dad":function(e,t,a){},"3b1f":function(e,t,a){},"3c46":function(e,t,a){"use strict";a("726d")},4224:function(e,t,a){},"47a6":function(e,t,a){"use strict";a("c16d")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=a("28dd"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("app-loading-status"),a("app-errors"),a("app-log-messages"),a("div",{attrs:{id:"app__nav"}},[a("app-text-link",{staticClass:"text-link--icon",attrs:{path:"/"}},[a("img",{attrs:{id:"app__icon",src:"/img/icon-flyrent.png",alt:"Flyrent"}})])],1),a("router-view")],1)},r=[],o=a("5530"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loading-status",class:{hidden:e.completed}},[a("div",{staticClass:"loading-status__messages"},[a("div",{staticClass:"loading-status__message"},[a("span",{staticClass:"loading-status__message--text"},[e._v("Caricamento veicoli")]),a("span",{staticClass:"loading-status__message--ok",class:{"loading-status__message--ok--green":e.vehiclesLoaded}})]),a("div",{staticClass:"loading-status__message"},[a("span",{staticClass:"loading-status__message--text"},[e._v("Caricamento clienti")]),a("span",{staticClass:"loading-status__message--ok",class:{"loading-status__message--ok--green":e.customersLoaded}})])])])},l=[],u=a("2f62"),d={computed:Object(o["a"])(Object(o["a"])({},Object(u["c"])(["vehiclesLoaded","customersLoaded"])),{},{completed:function(){var e=this.vehiclesLoaded&&this.customersLoaded;return e}})},m=d,p=(a("47a6"),a("2877")),f=Object(p["a"])(m,c,l,!1,null,null,null),h=f.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.errors.length>0?a("div",{staticClass:"errors"},[a("h1",{staticClass:"heading-primary"},[e._v("Errore")]),e._l(e.errors,(function(t){return a("app-error",{key:t.id,attrs:{error:t},on:{read:e.deleteError}})}))],2):e._e()},_=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"error",on:{click:e.markRead}},[e._v(" "+e._s(e.error.id)+" - "+e._s(e.error.msg)+" ")])},b=[],C={props:["error"],methods:{markRead:function(){this.$emit("read",this.error.id)}}},y=C,x=(a("ea0e"),Object(p["a"])(y,g,b,!1,null,null,null)),j=x.exports,O={computed:Object(o["a"])({},Object(u["c"])(["errors"])),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["removeError"])),{},{deleteError:function(e){this.removeError(e)}}),components:{appError:j}},k=O,E=(a("3c46"),Object(p["a"])(k,v,_,!1,null,null,null)),$=E.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.logmessages.length>0?a("div",{staticClass:"log-messages"},e._l(e.logmessages,(function(t){return a("app-log-message",{key:t.id,attrs:{msg:t},on:{read:e.deleteLogMessage}})})),1):e._e()},I=[],w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"log-message",on:{click:e.markRead}},[e._v(" "+e._s(e.msg.id)+") "+e._s(e.msg.msg)+" ")])},M=[],N={props:["msg"],methods:{markRead:function(){this.$emit("read",this.msg.id)}}},L=N,S=(a("a288"),Object(p["a"])(L,w,M,!1,null,null,null)),V=S.exports,T={computed:Object(o["a"])({},Object(u["c"])(["logmessages"])),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["removeLogMessage"])),{},{deleteLogMessage:function(e){this.removeLogMessage(e)}}),components:{appLogMessage:V}},q=T,z=(a("2c96"),Object(p["a"])(q,P,I,!1,null,null,null)),U=z.exports,F={methods:Object(o["a"])({},Object(u["b"])(["loadInitialData"])),created:function(){this.loadInitialData()},components:{appLoadingStatus:h,appErrors:$,appLogMessages:U}},H=F,R=(a("5c0b"),Object(p["a"])(H,n,r,!1,null,null,null)),D=R.exports,G=a("8c4f"),B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Pagina Principale")])]},proxy:!0}])},[a("div",{staticClass:"home-grid"},e._l(e.pages,(function(e){return a("app-card",{key:e.id,attrs:{data:e}})})),1)])},A=[],J={name:"PaginaPrincipale",computed:Object(o["a"])({},Object(u["c"])(["pages"]))},W=J,K=(a("21bb"),Object(p["a"])(W,B,A,!1,null,null,null)),Q=K.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Gestione anagrafica")])]},proxy:!0},{key:"actions",fn:function(){return[a("app-text-link",{attrs:{path:"/input_customer"}},[e._v("Aggiungi cliente")])]},proxy:!0}])},[a("app-list",[a("app-customer"),e._l(e.customers,(function(t){return a("app-customer",{key:t.id,attrs:{data:t},on:{clicked:e.customerClicked,delete:e.customerDelete}})}))],2)],1)},Y=[],Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-list-item",{attrs:{isHeader:e.isHeader},on:{click:function(t){return e.$emit("clicked",e.ext_data.id)}},scopedSlots:e._u([{key:"data",fn:function(){return[a("span",{staticClass:"customer__data"},[e._v(" "+e._s(e.ext_data.name)+" "+e._s(e.ext_data.surname)+" ")]),a("span",{staticClass:"customer__data"},[e._v(" "+e._s(e.ext_data.iva_cf)+" "+e._s(e.ext_data.iva)+" "+e._s(e.ext_data.cf)+" ")]),a("span",{staticClass:"customer__data"},[e._v(" "+e._s(e.ext_data.email)+" ")]),a("span",{staticClass:"customer__data"},[e._v(" "+e._s(e.ext_data.tel)+" ")])]},proxy:!0},{key:"actions",fn:function(){return[a("app-btn",{attrs:{className:"btn--flat"},on:{click:function(t){return e.$emit("delete",e.ext_data.id)}}},[e._v("×")])]},proxy:!0}])})},ee=[],te=(a("b0c0"),{props:["data"],data:function(){return{isHeader:!1,ext_data:this.$props.data}},created:function(){this.data||(this.ext_data={},this.ext_data.name="Cliente",this.ext_data.iva_cf="P.Iva/C.F.",this.ext_data.email="Email",this.ext_data.tel="Tel.",this.isHeader=!0)}}),ae=te,ie=(a("b8fa"),Object(p["a"])(ae,Z,ee,!1,null,null,null)),se=ie.exports,ne={computed:Object(o["a"])(Object(o["a"])({},Object(u["c"])(["customers"])),{},{customerHeader:function(){return{name:"Cliente",iva_cf:"P.Iva/C.F.",email:"Email",tel:"Tel."}}}),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["deleteCustomer","addCustomer","addError","addLogMessage"])),{},{customerClicked:function(e){this.$router.push("/registry/"+e)},customerDelete:function(e){var t=this;this.deleteCustomer(e).then((function(e){t.addLogMessage(e.msg)})).catch((function(e){t.addError(e.err)}))}}),components:{appCustomer:se}},re=ne,oe=Object(p["a"])(re,X,Y,!1,null,null,null),ce=oe.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Preventivi")])]},proxy:!0}])})},ue=[],de={},me=Object(p["a"])(de,le,ue,!1,null,null,null),pe=me.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Scoring")])]},proxy:!0}])})},he=[],ve={},_e=Object(p["a"])(ve,fe,he,!1,null,null,null),ge=_e.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Ordini in corso")])]},proxy:!0}])})},Ce=[],ye={},xe=Object(p["a"])(ye,be,Ce,!1,null,null,null),je=xe.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Gestione contratti")])]},proxy:!0}])})},ke=[],Ee={},$e=Object(p["a"])(Ee,Oe,ke,!1,null,null,null),Pe=$e.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Modulistica")])]},proxy:!0}])})},we=[],Me={},Ne=Object(p["a"])(Me,Ie,we,!1,null,null,null),Le=Ne.exports,Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Comunicazioni")])]},proxy:!0}])})},Ve=[],Te={},qe=Object(p["a"])(Te,Se,Ve,!1,null,null,null),ze=qe.exports,Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Note")])]},proxy:!0}])})},Fe=[],He={},Re=Object(p["a"])(He,Ue,Fe,!1,null,null,null),De=Re.exports,Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Gestione veicoli")])]},proxy:!0},{key:"actions",fn:function(){return[a("app-input-vehicle",{on:{save:e.vehicleSave}})]},proxy:!0}])},[a("app-list",[a("app-vehicle"),e._l(e.vehicles,(function(t){return a("app-vehicle",{key:t.id,attrs:{data:t},on:{clicked:e.vehicleClicked,delete:e.vehicleDelete}})}))],2)],1)},Be=[],Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-list-item",{attrs:{isHeader:e.isHeader},on:{click:function(t){return e.$emit("clicked",e.ext_data.id)}},scopedSlots:e._u([{key:"data",fn:function(){return[a("span",{staticClass:"vehicle__data--brand"},[e._v(" "+e._s(e.ext_data.brand)+" ")]),a("span",{staticClass:"vehicle__data--model"},[e._v(" "+e._s(e.ext_data.model)+" ")]),a("span",{staticClass:"vehicle__data--license-plate"},[e._v(" "+e._s(e.ext_data.license_plate)+" ")])]},proxy:!0},{key:"actions",fn:function(){return[a("app-btn",{attrs:{className:"btn--flat"},on:{click:function(t){return e.$emit("delete",e.ext_data.id)}}},[e._v("×")])]},proxy:!0}])})},Je=[],We={props:["data"],data:function(){return{isHeader:!1,ext_data:this.$props.data}},created:function(){this.data||(this.ext_data={},this.ext_data.brand="Marca",this.ext_data.model="Modello",this.ext_data.license_plate="Targa",this.isHeader=!0)}},Ke=We,Qe=(a("f5e5"),Object(p["a"])(Ke,Ae,Je,!1,null,null,null)),Xe=Qe.exports,Ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input"},[e.id?a("h2",{staticClass:"heading-secondary"},[e._v("Modifica Veicolo")]):a("h2",{staticClass:"heading-secondary"},[e._v("Nuovo Veicolo")]),a("app-form",{on:{submit:e.submit}},[a("div",{staticClass:"form__row"},[a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.brand,expression:"brand",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",id:"brand",placeholder:"Marca",required:""},domProps:{value:e.brand},on:{input:function(t){t.target.composing||(e.brand=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"brand"}},[e._v("Marca")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.model,expression:"model",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",id:"model",placeholder:"Modello",required:""},domProps:{value:e.model},on:{input:function(t){t.target.composing||(e.model=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"model"}},[e._v("Modello")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.license_plate,expression:"license_plate",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",id:"license_plate",placeholder:"Targa",required:""},domProps:{value:e.license_plate},on:{input:function(t){t.target.composing||(e.license_plate=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"license_plate"}},[e._v("Targa")])])]),a("div",{staticClass:"form__actions"},[a("app-btn",{staticClass:"btn--primary",attrs:{type:"submit"}},[e._v("Salva")]),e.id?a("app-text-link",{attrs:{path:"/vehicles"}},[e._v("Annulla")]):a("app-btn",{staticClass:"btn--secondary",attrs:{type:"reset"}},[e._v("Pulisci")])],1)])],1)},Ze=[],et={props:["id"],computed:Object(o["a"])({},Object(u["c"])(["vehicleById"])),data:function(){return{brand:"",model:"",license_plate:""}},methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["addLogMessage"])),{},{submit:function(){""!==this.brand&&""!==this.model&&""!==this.license_plate&&(this.$emit("save",{id:this.id,brand:this.brand,model:this.model,license_plate:this.license_plate}),this.brand=this.model=this.license_plate="",this.addLogMessage("Salvataggio in corso"))}}),created:function(){if(this.id){var e=this.vehicleById(this.id);this.brand=e.brand,this.model=e.model,this.license_plate=e.license_plate}}},tt=et,at=Object(p["a"])(tt,Ye,Ze,!1,null,null,null),it=at.exports,st={computed:Object(o["a"])({},Object(u["c"])(["vehicles"])),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["deleteVehicle","addVehicle","addError","addLogMessage"])),{},{vehicleClicked:function(e){this.$router.push("/vehicles/"+e)},vehicleDelete:function(e){var t=this;this.deleteVehicle(e).then((function(e){t.addLogMessage(e.msg)})).catch((function(e){t.addError(e.err)}))},vehicleSave:function(e){var t=this;this.addVehicle(e).then((function(e){t.addLogMessage(e.msg)})).catch((function(e){t.addError(e.err)}))}}),components:{appVehicle:Xe,appInputVehicle:it}},nt=st,rt=Object(p["a"])(nt,Ge,Be,!1,null,null,null),ot=rt.exports,ct=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Gestione anagrafica")])]},proxy:!0}])},[a("app-input-customer-private",{attrs:{id:e.$route.params.id},on:{save:e.customerSave}})],1)},lt=[],ut=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input input--private"},[e.id?a("h2",{staticClass:"heading-secondary"},[e._v("Modifica Cliente Privato")]):a("h2",{staticClass:"heading-secondary"},[e._v("Nuovo Cliente Privato")]),a("app-form",{on:{submit:e.submit}},[a("div",{staticClass:"form__row"},[a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",id:"name",placeholder:"Nome Referente",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"name"}},[e._v("Nome Referente")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.surname,expression:"surname",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",id:"surname",placeholder:"Cognome Referente",required:""},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"surname"}},[e._v("Cognome Referente")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.fiscal_code,expression:"fiscal_code",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",id:"fiscal_code",placeholder:"Codice Fiscale Referente",required:""},domProps:{value:e.fiscal_code},on:{input:function(t){t.target.composing||(e.fiscal_code=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"fiscal_code"}},[e._v("Codice Fiscale Referente")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.address,expression:"address",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",id:"address",placeholder:"Indirizzo Referente",required:""},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"address"}},[e._v("Indirizzo Referente")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.iva,expression:"iva",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",id:"iva",placeholder:"P.Iva",required:""},domProps:{value:e.iva},on:{input:function(t){t.target.composing||(e.iva=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"iva"}},[e._v("P.Iva")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"email",id:"email",placeholder:"Email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"email"}},[e._v("Email")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.tel,expression:"tel",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"tel",id:"tel",placeholder:"Tel.",required:""},domProps:{value:e.tel},on:{input:function(t){t.target.composing||(e.tel=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"tel"}},[e._v("Tel.")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.cell,expression:"cell",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"tel",id:"cell",placeholder:"Cell.",required:""},domProps:{value:e.cell},on:{input:function(t){t.target.composing||(e.cell=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"cell"}},[e._v("Cell.")])])]),a("div",{staticClass:"form__actions"},[a("app-btn",{staticClass:"btn--primary",attrs:{type:"submit"}},[e._v("Salva")]),e.id?a("app-text-link",{attrs:{path:"/registry"}},[e._v("Annulla")]):a("app-btn",{staticClass:"btn--secondary",attrs:{type:"reset"}},[e._v("Pulisci")])],1)])],1)},dt=[],mt={props:["id"],computed:Object(o["a"])({},Object(u["c"])(["customerById"])),data:function(){return{name:"",surname:"",fiscal_code:"",address:"",iva:"",email:"",tel:""}},methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["addLogMessage"])),{},{submit:function(){""!==this.name&&""!==this.surname&&""!==this.fiscal_code&&""!==this.address&&""!==this.iva&&""!==this.email&&""!==this.tel&&""!==this.cell&&(this.$emit("save",{id:this.id,name:this.name,surname:this.surname,fiscal_code:this.fiscal_code,address:this.address,iva:this.iva,email:this.email,tel:this.tel,cell:this.cell}),this.name=this.surname=this.fiscal_code=this.address=this.iva=this.email=this.tel=this.cell="",this.addLogMessage("Salvataggio in corso"))}}),created:function(){if(this.id){var e=this.customerById(this.id);this.name=e.name,this.surname=e.surname,this.fiscal_code=e.fiscal_code,this.address=e.address,this.iva=e.iva,this.email=e.email,this.tel=e.tel,this.cell=e.cell}}},pt=mt,ft=Object(p["a"])(pt,ut,dt,!1,null,null,null),ht=ft.exports,vt={components:{appInputCustomerPrivate:ht},methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["editCustomer","addError","addLogMessage"])),{},{customerSave:function(e){var t=this;this.editCustomer(e).then((function(e){t.addLogMessage(e.msg),t.$router.push("/registry")})).catch((function(e){t.addError(e.err),t.$router.push("/registry")}))}})},_t=vt,gt=Object(p["a"])(_t,ct,lt,!1,null,null,null),bt=gt.exports,Ct=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Gestione veicoli")])]},proxy:!0},{key:"actions",fn:function(){return[a("app-input-vehicle",{attrs:{id:e.$route.params.id},on:{save:e.vehicleSave}})]},proxy:!0}])})},yt=[],xt={components:{appInputVehicle:it},methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["editVehicle","addError","addLogMessage"])),{},{vehicleSave:function(e){var t=this;this.editVehicle(e).then((function(e){t.addLogMessage(e.msg),t.$router.push("/vehicles")})).catch((function(e){t.addError(e.err),t.$router.push("/vehicles")}))}})},jt=xt,Ot=Object(p["a"])(jt,Ct,yt,!1,null,null,null),kt=Ot.exports,Et=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"heading-primary"},[e._v("Tipo del nuovo cliente")])]},proxy:!0}])},[a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],staticClass:"btn-check",attrs:{type:"radio",name:"private",id:"private",value:"private",autocomplete:"off",checked:""},domProps:{checked:e._q(e.type,"private")},on:{change:function(t){e.type="private"}}}),a("label",{staticClass:"btn btn-outline-primary",attrs:{for:"private"}},[e._v("Privato")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],staticClass:"btn-check",attrs:{type:"radio",name:"company",id:"company",value:"company",autocomplete:"off"},domProps:{checked:e._q(e.type,"company")},on:{change:function(t){e.type="company"}}}),a("label",{staticClass:"btn btn-outline-primary",attrs:{for:"company"}},[e._v("Aziendale")])]),a("div",{staticClass:"input_customer"},[e.isPrivate?a("app-input-customer-private",{on:{save:e.customerSave}}):a("app-input-customer-company",{on:{save:e.customerSave}})],1)])},$t=[],Pt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input input--company"},[e.id?a("h2",{staticClass:"heading-secondary"},[e._v("Modifica Cliente Aziendale")]):a("h2",{staticClass:"heading-secondary"},[e._v("Nuovo Cliente Aziendale")]),a("app-form",{on:{submit:e.submit}},[a("div",{staticClass:"form__row"},[a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",id:"name",placeholder:"Cliente",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"name"}},[e._v("Cliente")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.cf,expression:"cf",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",id:"cf",placeholder:"C.F.",required:""},domProps:{value:e.cf},on:{input:function(t){t.target.composing||(e.cf=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"cf"}},[e._v("C.F.")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"email",id:"email",placeholder:"Email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"email"}},[e._v("Email")])]),a("div",{staticClass:"form__group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.tel,expression:"tel",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"tel",id:"tel",placeholder:"Tel.",required:""},domProps:{value:e.tel},on:{input:function(t){t.target.composing||(e.tel=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),a("label",{staticClass:"form__label",attrs:{for:"tel"}},[e._v("Tel.")])])]),a("div",{staticClass:"form__actions"},[a("app-btn",{staticClass:"btn--primary",attrs:{type:"submit"}},[e._v("Salva")]),e.id?a("app-text-link",{attrs:{path:"/registry"}},[e._v("Annulla")]):a("app-btn",{staticClass:"btn--secondary",attrs:{type:"reset"}},[e._v("Pulisci")])],1)])],1)},It=[],wt={props:["id"],computed:Object(o["a"])({},Object(u["c"])(["customerById"])),data:function(){return{name:"",cf:"",email:"",tel:""}},methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["addLogMessage"])),{},{submit:function(){""!==this.name&&""!==this.cf&&""!==this.email&&""!==this.tel&&(this.$emit("save",{id:this.id,name:this.name,cf:this.cf,email:this.email,tel:this.tel}),this.name=this.cf=this.email=this.tel="",this.addLogMessage("Salvataggio in corso"))}}),created:function(){if(this.id){var e=this.customerById(this.id);this.name=e.name,this.cf=e.cf,this.email=e.email,this.tel=e.tel}}},Mt=wt,Nt=Object(p["a"])(Mt,Pt,It,!1,null,null,null),Lt=Nt.exports,St={name:"InputCustomer",data:function(){return{type:"private"}},computed:Object(o["a"])(Object(o["a"])({},Object(u["c"])(["customers"])),{},{isPrivate:function(){return"private"===this.type}}),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["addCustomer","addError","addLogMessage"])),{},{customerSave:function(e){var t=this;this.addCustomer(e).then((function(e){t.addLogMessage(e.msg)})).catch((function(e){t.addError(e.err)}))}}),components:{appInputCustomerCompany:Lt,appInputCustomerPrivate:ht}},Vt=St,Tt=(a("6eed"),Object(p["a"])(Vt,Et,$t,!1,null,null,null)),qt=Tt.exports;i["a"].use(G["a"]);var zt=[{path:"/",name:"Home",component:Q},{path:"/registry",name:"Gestione Anagrafica",component:ce},{path:"/preventivi",name:"Preventivi",component:pe},{path:"/scoring",name:"Scoring",component:ge},{path:"/ordini",name:"Ordini In Corso",component:je},{path:"/contratti",name:"Gestione Contratti",component:Pe},{path:"/modulistica",name:"Modulistica",component:Le},{path:"/comunicazioni",name:"Comunicazioni",component:ze},{path:"/note",name:"Note",component:De},{path:"/vehicles",name:"Vehicles",component:ot},{path:"/registry/:id",name:"EditCustomer",component:bt},{path:"/vehicles/:id",name:"EditVehicle",component:kt},{path:"/input_customer",name:"InputCustomer",component:qt}],Ut=new G["a"]({mode:"history",base:"/",routes:zt}),Ft=Ut,Ht={pages:[{id:"1",name:"registry",title:"Gestione anagrafica",text:"In Work",path:"/registry"},{id:"2",name:"estimate",title:"Preventivi",text:"Empty",path:"/preventivi"},{id:"3",name:"scoring",title:"Scoring",text:"Empty",path:"/scoring"},{id:"4",name:"orders",title:"Ordini in corso",text:"Empty",path:"/ordini"},{id:"5",name:"contracts",title:"Gestione contratti",text:"Empty",path:"/contratti"},{id:"6",name:"forms",title:"Modulistica",text:"Empty",path:"/modulistica"},{id:"7",name:"comunications",title:"Comunicazioni",text:"Empty",path:"/comunicazioni"},{id:"8",name:"notes",title:"Note",text:"Empty",path:"/note"},{id:"9",name:"vehicles",title:"Gestione veicoli",text:"In Work (Testing)",path:"/vehicles"}]},Rt={pages:function(e){return e.pages}},Dt={state:Ht,getters:Rt},Gt=(a("4de4"),{nextId:1,errors:[]}),Bt={errors:function(e){return e.errors}},At={addError:function(e,t){e.errors.push(t),e.nextId++},removeError:function(e,t){e.errors=e.errors.filter((function(e){return e.id!==t}))}},Jt={addError:function(e,t){var a=Gt.nextId;e.commit("addError",{id:a,msg:t}),setTimeout((function(){return e.commit("removeError",a)}),5e3)},removeError:function(e,t){e.commit("removeError",t)}},Wt={state:Gt,getters:Bt,mutations:At,actions:Jt},Kt={nextId:1,messages:[]},Qt={logmessages:function(e){return e.messages}},Xt={addLogMessage:function(e,t){e.messages.push(t),e.nextId++},removeLogMessage:function(e,t){e.messages=e.messages.filter((function(e){return e.id!==t}))}},Yt={addLogMessage:function(e,t){var a=Kt.nextId;e.commit("addLogMessage",{id:a,msg:t}),setTimeout((function(){return e.commit("removeLogMessage",a)}),3e3)},removeLogMessage:function(e,t){e.commit("removeLogMessage",t)}},Zt={state:Kt,getters:Qt,mutations:Xt,actions:Yt},ea=a("15fd"),ta=(a("7db0"),a("c740"),a("a434"),a("d3b7"),a("3835")),aa=(a("4fad"),{loadData:function(e,t){e.commit("startLoading"),i["a"].http.get("https://crm-flyrent-default-rtdb.europe-west1.firebasedatabase.app/"+t+".json").then((function(e){return e.json()})).then((function(a){var i=[];if(a)for(var s=0,n=Object.entries(a);s<n.length;s++){var r=Object(ta["a"])(n[s],2),c=r[0],l=r[1];i.push(Object(o["a"])({id:c},l))}e.commit("set_"+t,i)})).catch((function(){e.commit("fail")}))},addItem:function(e,t){var a=t.collectionName,s=t.item;return new Promise((function(t,n){i["a"].http.post("https://crm-flyrent-default-rtdb.europe-west1.firebasedatabase.app/"+a+".json",s).then((function(e){return e.json()})).then((function(i){s.id=i.name,e.commit("addTo_"+a,s),t({ok:!0})})).catch((function(){n({ok:!1,err:"Impossibile aggiungere elemento alla collezione "+a})}))}))},deleteItem:function(e,t){var a=t.collectionName,s=t.itemId;return new Promise((function(t,n){i["a"].http.delete("https://crm-flyrent-default-rtdb.europe-west1.firebasedatabase.app/"+a+"/"+s+".json").then((function(e){return e.json()})).then((function(){e.commit("deleteFrom_"+a,s),t({ok:!0})})).catch((function(){n({ok:!1,err:"Impossibile eliminare elemento dalla collezione "+a})}))}))},editItem:function(e,t){var a=t.collectionName,s=t.id,n=Object(ea["a"])(t,["collectionName","id"]);return new Promise((function(t,r){i["a"].http.put("https://crm-flyrent-default-rtdb.europe-west1.firebasedatabase.app/"+a+"/"+s+".json",n).then((function(e){return e.json()})).then((function(){e.commit("editFrom_"+a,Object(o["a"])({id:s},n)),t({ok:!0})})).catch((function(){r({ok:!1,err:"Impossibile aggiornare elemento della collezione "+a})}))}))}}),ia={vehicles:[],loaded:!1},sa={vehicles:function(e){return e.vehicles},vehiclesLoaded:function(e){return e.loaded},vehicleById:function(e){return function(t){return e.vehicles.find((function(e){return e.id===t}))}}},na={startLoading:function(e){e.vehicles=[],e.loaded=!1},fail:function(e){e.vehicles=[],e.loaded=!1},set_vehicles:function(e,t){e.vehicles=t,e.loaded=!0},addTo_vehicles:function(e,t){e.vehicles.push(t)},editFrom_vehicles:function(e,t){var a=e.vehicles.findIndex((function(e){return e.id===t.id}));e.vehicles.splice(a,1,t)},deleteFrom_vehicles:function(e,t){e.vehicles=e.vehicles.filter((function(e){return e.id!==t}))}},ra={loadVehicles:function(e){aa.loadData(e,"vehicles")},addVehicle:function(e,t){return new Promise((function(a,i){aa.addItem(e,{collectionName:"vehicles",item:t}).then((function(e){return a(Object(o["a"])({msg:"Veicolo aggiunto"},e))})).catch((function(e){return i(e)}))}))},deleteVehicle:function(e,t){return new Promise((function(a,i){aa.deleteItem(e,{collectionName:"vehicles",itemId:t}).then((function(e){return a(Object(o["a"])({msg:"Veicolo rimosso"},e))})).catch((function(e){return i(e)}))}))},editVehicle:function(e,t){var a=t.id,i=Object(ea["a"])(t,["id"]);return new Promise((function(t,s){aa.editItem(e,Object(o["a"])({collectionName:"vehicles",id:a},i)).then((function(e){return t(Object(o["a"])({msg:"Veicolo aggiornato"},e))})).catch((function(e){return s(e)}))}))}},oa={state:ia,getters:sa,mutations:na,actions:ra},ca={customers:[],loaded:!1},la={customers:function(e){return e.customers},customersLoaded:function(e){return e.loaded},customerById:function(e){return function(t){return e.customers.find((function(e){return e.id===t}))}}},ua={startLoading:function(e){e.customers=[],e.loaded=!1},fail:function(e){e.customers=[],e.loaded=!1},set_customers:function(e,t){e.customers=t,e.loaded=!0},addTo_customers:function(e,t){e.customers.push(t)},editFrom_customers:function(e,t){var a=e.customers.findIndex((function(e){return e.id===t.id}));e.customers.splice(a,1,t)},deleteFrom_customers:function(e,t){e.customers=e.customers.filter((function(e){return e.id!==t}))}},da={loadCustomers:function(e){aa.loadData(e,"customers")},addCustomer:function(e,t){return new Promise((function(a,i){aa.addItem(e,{collectionName:"customers",item:t}).then((function(e){return a(Object(o["a"])({msg:"Cliente aggiunto"},e))})).catch((function(e){return i(e)}))}))},deleteCustomer:function(e,t){return new Promise((function(a,i){aa.deleteItem(e,{collectionName:"customers",itemId:t}).then((function(e){return a(Object(o["a"])({msg:"Cliente rimosso"},e))})).catch((function(e){return i(e)}))}))},editCustomer:function(e,t){var a=t.id,i=Object(ea["a"])(t,["id"]);return new Promise((function(t,s){aa.editItem(e,Object(o["a"])({collectionName:"customers",id:a},i)).then((function(e){return t(Object(o["a"])({msg:"Cliente aggiornato"},e))})).catch((function(e){return s(e)}))}))}},ma={state:ca,getters:la,mutations:ua,actions:da};i["a"].use(u["a"]);var pa=new u["a"].Store({state:{},mutations:{},actions:{loadInitialData:function(e){var t=e.dispatch;t("loadVehicles"),t("loadCustomers")}},modules:{pages:Dt,errors:Wt,logmessages:Zt,vehicles:oa,customers:ma}}),fa=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page",class:e.className},[a("header",{staticClass:"page__header"},[e._t("header")],2),a("section",{staticClass:"page__actions"},[e._t("actions")],2),a("main",{staticClass:"page__main"},[e._t("default")],2)])},ha=[],va={props:["className"]},_a=va,ga=(a("21a7"),Object(p["a"])(_a,fa,ha,!1,null,null,null)),ba=ga.exports,Ca=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"list"},[e._t("default")],2)},ya=[],xa={props:["className"]},ja=xa,Oa=(a("6acc"),Object(p["a"])(ja,Ca,ya,!1,null,null,null)),ka=Oa.exports,Ea=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"list-item",class:{"list-item--header":e.isHeader},on:{click:function(t){return e.$emit("click")}}},[a("span",{staticClass:"list-item__data"},[e._t("data")],2),a("span",{staticClass:"list-item__actions"},[e._t("actions")],2)])},$a=[],Pa={props:["isHeader"]},Ia=Pa,wa=(a("cf95"),Object(p["a"])(Ia,Ea,$a,!1,null,null,null)),Ma=wa.exports,Na=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card",class:e.className,on:{click:function(t){return e.$router.push(e.data.path)}}},[a("div",{staticClass:"card__header"},[a("img",{attrs:{src:"/img/icon-"+e.data.name+".png"}})]),a("div",{staticClass:"card__body"},[a("span",{staticClass:"card__body--title"},[e._v(e._s(e.data.title))]),e.data.text?a("span",{staticClass:"card__body--text"},[e._v(e._s(e.data.text))]):e._e()])])},La=[],Sa={props:["data","className"]},Va=Sa,Ta=(a("916e"),Object(p["a"])(Va,Na,La,!1,null,null,null)),qa=Ta.exports,za=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.$emit("submit")}}},[e._t("default")],2)},Ua=[],Fa=(a("e6b1"),{}),Ha=Object(p["a"])(Fa,za,Ua,!1,null,null,null),Ra=Ha.exports,Da=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"btn",class:e.className,on:{click:function(t){return t.stopPropagation(),e.$emit("click")}}},[e._t("default")],2)},Ga=[],Ba={props:["className"]},Aa=Ba,Ja=(a("7517"),Object(p["a"])(Aa,Da,Ga,!1,null,null,null)),Wa=Ja.exports,Ka=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-link",{staticClass:"text-link",class:e.className,attrs:{to:e.path}},[e._t("default")],2)},Qa=[],Xa={props:["path","className"]},Ya=Xa,Za=(a("bfa4"),Object(p["a"])(Ya,Ka,Qa,!1,null,null,null)),ei=Za.exports;i["a"].config.productionTip=!1,i["a"].use(s["a"]),i["a"].component("appPage",ba),i["a"].component("appList",ka),i["a"].component("appListItem",Ma),i["a"].component("appCard",qa),i["a"].component("appForm",Ra),i["a"].component("appBtn",Wa),i["a"].component("appTextLink",ei),new i["a"]({router:Ft,store:pa,render:function(e){return e(D)}}).$mount("#app")},"5b32":function(e,t,a){},"5c0b":function(e,t,a){"use strict";a("9c0c")},"6acc":function(e,t,a){"use strict";a("a9e2")},"6eed":function(e,t,a){"use strict";a("039f")},"726d":function(e,t,a){},7517:function(e,t,a){"use strict";a("bd03")},"900e":function(e,t,a){},"916e":function(e,t,a){"use strict";a("08a0")},"9c0c":function(e,t,a){},a288:function(e,t,a){"use strict";a("3b1f")},a9e2:function(e,t,a){},b5a2:function(e,t,a){},b8fa:function(e,t,a){"use strict";a("fc9b")},ba5e:function(e,t,a){},bd03:function(e,t,a){},bfa4:function(e,t,a){"use strict";a("f9fa")},c16d:function(e,t,a){},cf95:function(e,t,a){"use strict";a("5b32")},e6b1:function(e,t,a){"use strict";a("ba5e")},ea0e:function(e,t,a){"use strict";a("4224")},f5e5:function(e,t,a){"use strict";a("900e")},f9fa:function(e,t,a){},fc9b:function(e,t,a){}});
//# sourceMappingURL=app.dfa08819.js.map
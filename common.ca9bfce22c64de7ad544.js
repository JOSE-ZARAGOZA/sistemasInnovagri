(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Hd4Y:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var e=t("cxbk"),a=t("CcnG"),u=t("t/Na"),o=function(){function n(n){this.http=n}return n.prototype.addFinca=function(n){return this.http.post(e.a.urlAPI+"TblFincas",n)},n.prototype.getFincas=function(n){return this.http.post(e.a.urlAPI+"TblDatosContacto/consultaFincasCliente?idCliente="+n,{})},n.ngInjectableDef=a.T({factory:function(){return new n(a.X(u.c))},token:n,providedIn:"root"}),n}()},abRS:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return I});var e=t("CcnG"),a=t("xkgV"),u=t("Ip0R"),o=e.Oa({encapsulation:2,styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],data:{}});function r(n){return e.kb(0,[(n()(),e.Qa(0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(n,l,t){var a=!0;return"keyup.enter"===l&&(a=!1!==e.ab(n.parent.parent.parent,1).previous()&&a),"click"===l&&(a=!1!==e.ab(n.parent.parent.parent,1).previous()&&a),a},null,null)),(n()(),e.ib(1,null,[" "," "])),(n()(),e.Qa(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),e.ib(3,null,["",""]))],null,function(n,l){var t=l.component;n(l,0,0,t.previousLabel+" "+t.screenReaderPageLabel),n(l,1,0,t.previousLabel),n(l,3,0,t.screenReaderPageLabel)})}function i(n){return e.kb(0,[(n()(),e.Qa(0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),e.ib(1,null,[" "," "])),(n()(),e.Qa(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),e.ib(3,null,["",""]))],null,function(n,l){var t=l.component;n(l,1,0,t.previousLabel),n(l,3,0,t.screenReaderPageLabel)})}function c(n){return e.kb(0,[(n()(),e.Qa(0,0,null,null,4,"li",[["class","pagination-previous"]],[[2,"disabled",null]],null,null,null,null)),(n()(),e.Ha(16777216,null,null,1,null,r)),e.Pa(2,16384,null,0,u.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.Ha(16777216,null,null,1,null,i)),e.Pa(4,16384,null,0,u.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,1<e.ab(l.parent.parent,1).getCurrent()),n(l,4,0,e.ab(l.parent.parent,1).isFirstPage())},function(n,l){n(l,0,0,e.ab(l.parent.parent,1).isFirstPage())})}function p(n){return e.kb(0,[(n()(),e.Qa(0,0,null,null,4,"a",[["tabindex","0"]],null,[[null,"keyup.enter"],[null,"click"]],function(n,l,t){var a=!0;return"keyup.enter"===l&&(a=!1!==e.ab(n.parent.parent.parent,1).setCurrent(n.parent.context.$implicit.value)&&a),"click"===l&&(a=!1!==e.ab(n.parent.parent.parent,1).setCurrent(n.parent.context.$implicit.value)&&a),a},null,null)),(n()(),e.Qa(1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),e.ib(2,null,[""," "])),(n()(),e.Qa(3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.ib(4,null,["",""]))],null,function(n,l){n(l,2,0,l.component.screenReaderPageLabel),n(l,4,0,l.parent.context.$implicit.label)})}function s(n){return e.kb(0,[(n()(),e.Qa(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e.Qa(1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),e.ib(2,null,[""," "])),(n()(),e.Qa(3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.ib(4,null,["",""]))],null,function(n,l){n(l,2,0,l.component.screenReaderCurrentLabel),n(l,4,0,l.parent.context.$implicit.label)})}function g(n){return e.kb(0,[(n()(),e.Qa(0,0,null,null,4,"li",[],[[2,"current",null],[2,"ellipsis",null]],null,null,null,null)),(n()(),e.Ha(16777216,null,null,1,null,p)),e.Pa(2,16384,null,0,u.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.Ha(16777216,null,null,1,null,s)),e.Pa(4,16384,null,0,u.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,e.ab(l.parent.parent,1).getCurrent()!==l.context.$implicit.value),n(l,4,0,e.ab(l.parent.parent,1).getCurrent()===l.context.$implicit.value)},function(n,l){n(l,0,0,e.ab(l.parent.parent,1).getCurrent()===l.context.$implicit.value,"..."===l.context.$implicit.label)})}function d(n){return e.kb(0,[(n()(),e.Qa(0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(n,l,t){var a=!0;return"keyup.enter"===l&&(a=!1!==e.ab(n.parent.parent.parent,1).next()&&a),"click"===l&&(a=!1!==e.ab(n.parent.parent.parent,1).next()&&a),a},null,null)),(n()(),e.ib(1,null,[" "," "])),(n()(),e.Qa(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),e.ib(3,null,["",""]))],null,function(n,l){var t=l.component;n(l,0,0,t.nextLabel+" "+t.screenReaderPageLabel),n(l,1,0,t.nextLabel),n(l,3,0,t.screenReaderPageLabel)})}function f(n){return e.kb(0,[(n()(),e.Qa(0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),e.ib(1,null,[" "," "])),(n()(),e.Qa(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),e.ib(3,null,["",""]))],null,function(n,l){var t=l.component;n(l,1,0,t.nextLabel),n(l,3,0,t.screenReaderPageLabel)})}function b(n){return e.kb(0,[(n()(),e.Qa(0,0,null,null,4,"li",[["class","pagination-next"]],[[2,"disabled",null]],null,null,null,null)),(n()(),e.Ha(16777216,null,null,1,null,d)),e.Pa(2,16384,null,0,u.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.Ha(16777216,null,null,1,null,f)),e.Pa(4,16384,null,0,u.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,!e.ab(l.parent.parent,1).isLastPage()),n(l,4,0,e.ab(l.parent.parent,1).isLastPage())},function(n,l){n(l,0,0,e.ab(l.parent.parent,1).isLastPage())})}function h(n){return e.kb(0,[(n()(),e.Qa(0,0,null,null,8,"ul",[["class","ngx-pagination"],["role","navigation"]],[[1,"aria-label",0],[2,"responsive",null]],null,null,null,null)),(n()(),e.Ha(16777216,null,null,1,null,c)),e.Pa(2,16384,null,0,u.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.Qa(3,0,null,null,1,"li",[["class","small-screen"]],null,null,null,null,null)),(n()(),e.ib(4,null,[" "," / "," "])),(n()(),e.Ha(16777216,null,null,1,null,g)),e.Pa(6,278528,null,0,u.k,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Ha(16777216,null,null,1,null,b)),e.Pa(8,16384,null,0,u.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.directionLinks),n(l,6,0,e.ab(l.parent,1).pages),n(l,8,0,t.directionLinks)},function(n,l){var t=l.component;n(l,0,0,t.screenReaderPaginationLabel,t.responsive),n(l,4,0,e.ab(l.parent,1).getCurrent(),e.ab(l.parent,1).getLastPage())})}function I(n){return e.kb(2,[(n()(),e.Qa(0,0,null,null,3,"pagination-template",[],null,[[null,"pageChange"]],function(n,l,t){var e=!0;return"pageChange"===l&&(e=!1!==n.component.pageChange.emit(t)&&e),e},null,null)),e.Pa(1,737280,[["p",4]],0,a.d,[a.e,e.h],{id:[0,"id"],maxSize:[1,"maxSize"]},{pageChange:"pageChange"}),(n()(),e.Ha(16777216,null,null,1,null,h)),e.Pa(3,16384,null,0,u.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,t.id,t.maxSize),n(l,3,0,!(t.autoHide&&e.ab(l,1).pages.length<=1))},null)}},cxbk:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e={production:!0,urlAPI:"https://innovagricoreapi.azurewebsites.net/odata/"}},"d/uf":function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t("cxbk"),a=t("67Y/"),u=t("Ip0R"),o=t("CcnG"),r=t("t/Na"),i=function(){function n(n){this.http=n}return n.prototype.addMenu=function(n){return this.http.post(e.a.urlAPI+"CatMenuFormularios",n)},n.prototype.addSubMenu=function(n){return this.http.post(e.a.urlAPI+"CatSubmenuFormularios",n)},n.prototype.addIncidence=function(n){return this.http.post(e.a.urlAPI+"TblIncidencias",n)},n.prototype.getComponents=function(){return this.http.get(e.a.urlAPI+"CatComponentes")},n.prototype.getMenus=function(){return this.http.get(e.a.urlAPI+"CatMenuFormularios")},n.prototype.getSubmenus=function(){return this.http.get(e.a.urlAPI+"CatSubmenuFormularios")},n.prototype.getIncidences=function(){return this.http.get(e.a.urlAPI+"TblIncidencias")},n.prototype.getProtocolTypes=function(){return this.http.get(e.a.urlAPI+"CatTipoProtocolos")},n.prototype.addProtocol=function(n){return this.http.post(e.a.urlAPI+"TblFormularioProtocolos",n)},n.prototype.putIncidence=function(n){return this.http.put(e.a.urlAPI+"TblIncidencias/"+n.IdIncidencias,n)},n.prototype.getAsignaciones=function(){return this.http.get(e.a.urlAPI+"TblAsignaciones")},n.prototype.postAsignacion=function(n){return n.IdEncargado=Number(n.IdEncargado),n.IdMonitoreador=Number(n.IdMonitoreador),n.IdLoteNave=Number(n.IdLoteNave),n.IdFormularioProtocolo=Number(n.IdFormularioProtocolo),this.http.post(e.a.urlAPI+"TblAsignaciones",n)},n.prototype.putAsignacion=function(n){return delete n.IdLoteNaveNavigation,delete n.IdFormularioProtocoloNavigation,delete n.IdEncargadoNavigation,delete n.IdMonitoreadorNavigation,this.http.put(e.a.urlAPI+"TblAsignaciones/"+n.IdAsignacion,n)},n.prototype.getLotesNaves=function(){return this.http.get(e.a.urlAPI+"TblLoteNaves")},n.prototype.getLotesNavesPorFinca=function(n){return this.http.post(e.a.urlAPI+"TblDatosContacto/consultaLotesFincas?idFinca="+n,{})},n.prototype.getFormularioProtocolos=function(){return this.http.get(e.a.urlAPI+"TblFormularioProtocolos")},n.prototype.getMonitoring=function(n){return new u.d("en").transform(n.fecha,"yyyy-MM-dd"),this.http.post(e.a.urlAPI+"TblDatosContacto/consultaFitosanitarioMonitoreo_C?id_Cliente="+n.IdClientes+"&id_Finca="+n.IdFincas+"&fecha_inicio="+n.fechaIni+"&fecha_fin="+n.fechaFin+"&id_LoteNave="+n.IdLoteNaves,{}).pipe(Object(a.a)(function(n){return n}))},n.prototype.getMapIncidences=function(n,l,t,a,u){return this.http.post(e.a.urlAPI+"TblDatosContacto/consultaIncidenciasNaves?id_Cliente="+n+"&id_Finca="+l+"&id_LoteNave="+t+"&fecha_inicio="+a+"&fecha_fin="+u,{})},n.ngInjectableDef=o.T({factory:function(){return new n(o.X(r.c))},token:n,providedIn:"root"}),n}()},yHwA:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var e=t("AytR"),a=t("CcnG"),u=t("t/Na"),o=function(){function n(n){this.http=n}return n.prototype.addClient=function(n){return this.http.post(e.a.urlAPI+"/TblClientes",n)},n.prototype.getClients=function(){return this.http.get(e.a.urlAPI+"TblClientes")},n.prototype.saveClientLocally=function(n){var l=JSON.stringify(n);localStorage.setItem("currentClient",l)},n.prototype.getClientLocally=function(){return JSON.parse(localStorage.getItem("currentClient"))},n.ngInjectableDef=a.T({factory:function(){return new n(a.X(u.c))},token:n,providedIn:"root"}),n}()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{788:function(e,t,r){"use strict";r(33),r(18),r(21),r(44),r(45);var n=r(5),l=r(8);r(46),r(512);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"dropzone-file-upload",props:{options:{type:Object,default:function(){return{}}},value:[String,Object,Array],url:{type:String,default:"http://"},multiple:Boolean,previewClasses:[String,Object,Array]},model:{prop:"value",event:"change"},data:function(){return{currentFile:null,files:[],showList:!1}},methods:{initDropzone:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,l,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(15).then(r.t.bind(null,806,7));case 2:(n=(n=t.sent).default||n).autoDiscover=!1,l=e.multiple?e.$refs.previewMultiple:e.$refs.previewSingle,o=e,d=c(c({},e.options),{},{url:e.url,thumbnailWidth:null,thumbnailHeight:null,previewsContainer:l,previewTemplate:l.innerHTML,maxFiles:e.multiple?null:1,acceptedFiles:e.multiple?null:"image/*",init:function(){this.on("addedfile",(function(e){!o.multiple&&o.currentFile,o.currentFile=e}))}}),e.dropzone=new n(e.$el,d),l.innerHTML="",["drop","dragstart","dragend","dragenter","dragover","addedfile","removedfile","thumbnail","error","processing","uploadprogress","sending","success","complete","canceled","maxfilesreached","maxfilesexceeded","processingmultiple","sendingmultiple","successmultiple","completemultiple","canceledmultiple","totaluploadprogress","reset","queuecomplete"].forEach((function(t){e.dropzone.on(t,(function(data){if(e.$emit(t,data),"addedfile"===t)e.files.push(data),e.$emit("change",e.files);else if("removedfile"===t){var r=e.files.findIndex((function(e){return e.upload.uuid===data.upload.uuid}));-1!==r&&e.files.splice(r,1),e.$emit("change",e.files)}}))}));case 12:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.initDropzone();case 1:case"end":return t.stop()}}),t)})))()}},m=r(4),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dropzone mb-3 dz-clickable",class:[e.multiple?"dropzone-multiple":"dropzone-single"]},[r("div",{staticClass:"fallback"},[r("div",{staticClass:"custom-file"},[r("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"projectCoverUploads",multiple:e.multiple}}),e._v(" "),r("label",{staticClass:"custom-file-label",attrs:{for:"projectCoverUploads"}},[e._v("Choose file")])])]),e._v(" "),e.multiple?r("ul",{ref:"previewMultiple",staticClass:"dz-preview dz-preview-multiple list-group list-group-lg list-group-flush",class:e.previewClasses},[e._m(1)]):r("div",{ref:"previewSingle",staticClass:"dz-preview dz-preview-single",class:e.previewClasses},[e._m(0)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dz-preview-cover"},[t("img",{staticClass:"dz-preview-img",attrs:{"data-dz-thumbnail":""}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"list-group-item px-0"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-auto"},[r("div",{staticClass:"avatar"},[r("img",{staticClass:"avatar-img rounded",attrs:{"data-dz-thumbnail":""}})])]),e._v(" "),r("div",{staticClass:"col ml--3"},[r("h4",{staticClass:"mb-1",attrs:{"data-dz-name":""}},[e._v("...")]),e._v(" "),r("p",{staticClass:"small text-muted mb-0",attrs:{"data-dz-size":""}},[e._v("...")])]),e._v(" "),r("div",{staticClass:"col-auto"},[r("button",{staticClass:"btn btn-danger btn-sm",attrs:{"data-dz-remove":"true"}},[r("i",{staticClass:"fas fa-trash"})])])])])}],!1,null,null,null);t.a=component.exports},812:function(e,t,r){"use strict";r.r(t);r(33),r(18),r(21),r(44),r(45);var n,l=r(5),o=r(8),c=(r(46),r(22)),d=r(189),m=(r(27),r(80),r(786),r(787),r(63)),f=r(108),v=r(188),h=(r(0),r(788));function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={components:(n={},Object(l.a)(n,m.Table.name,m.Table),Object(l.a)(n,m.TableColumn.name,m.TableColumn),Object(l.a)(n,m.Dropdown.name,m.Dropdown),Object(l.a)(n,m.DropdownItem.name,m.DropdownItem),Object(l.a)(n,m.DropdownMenu.name,m.DropdownMenu),Object(l.a)(n,"Modal",f.a),Object(l.a)(n,"BaseAlert",v.a),Object(l.a)(n,"DropzoneFileUpload",h.a),n),created:function(){null!=this.selected&&(this.data.nama=this.selected.nama,this.data.fee=this.selected.fee,this.data.jabatan=this.selected.jabatan,this.data.pengalaman=this.selected.pengalaman,this.data.id=this.selected.id)},mounted:function(){this.$refs.dropzone.manuallyAddFile({size:600,name:"logo.jpg",type:"image/png/jpg/jpeg"},this.selected.data_user.avatar_link)},data:function(){return{data:{nama:"",fee:"",jabatan:"",pengalaman:"",id:""},dropOptions:{url:this.$axios.defaults.baseURL+"admin/upload",addRemoveLinks:!0,acceptedFiles:".jpeg",maxFiles:1,autoProcessQueue:!1,headers:{Authorization:this.$auth.strategy.$auth.$storage._state["_token.local"]},params:{id:""}}}},computed:j({},Object(c.d)("janji",{roles:function(e){return e.roles},errors:function(e){return e.errors},selected:function(e){return e.selected}})),methods:j(j(j({},Object(c.c)("janji",["SET_SELECTED"])),Object(c.b)("janji",["simpanDataDokter"])),{},{saveData:function(){var e=this;null==this.selected||null!=this.selected&&(this.dropOptions.params.id=this.selected.id_user,this.$refs.dropzone.processQueue(),this.simpanDataDokter(this.data).then((function(t){e.$notify({title:"Berhasil",message:"Data Berhasil Disimpan",type:"success"}),e.SET_SELECTED(void 0)})).catch((function(t){e.$notify({title:"Error",message:"Data Gagal Disimpan",type:"error"})})))}})},C=r(4),_=Object(C.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("base-input",{staticStyle:{width:"100%"},attrs:{label:"Nama"},model:{value:e.data.nama,callback:function(t){e.$set(e.data,"nama",t)},expression:"data.nama"}}),e._v(" "),e.errors.nama?r("h5",{staticClass:"text-danger"},[e._v(e._s(e.errors.nama[0]))]):e._e()],1),e._v(" "),r("div",{staticClass:"col-12"},[r("base-input",{staticStyle:{width:"100%"},attrs:{label:"Fee",type:"number"},model:{value:e.data.fee,callback:function(t){e.$set(e.data,"fee",t)},expression:"data.fee"}}),e._v(" "),e.errors.fee?r("h5",{staticClass:"text-danger"},[e._v(e._s(e.errors.fee[0]))]):e._e()],1),e._v(" "),r("div",{staticClass:"col-12"},[r("base-input",{staticStyle:{width:"100%"},attrs:{label:"Jabatan"},model:{value:e.data.jabatan,callback:function(t){e.$set(e.data,"jabatan",t)},expression:"data.jabatan"}}),e._v(" "),e.errors.jabatan?r("h5",{staticClass:"text-danger"},[e._v(e._s(e.errors.jabatan[0]))]):e._e()],1),e._v(" "),r("div",{staticClass:"col-12"},[r("base-input",{staticStyle:{width:"100%"},attrs:{label:"Pengalaman",type:"number"},model:{value:e.data.pengalaman,callback:function(t){e.$set(e.data,"pengalaman",t)},expression:"data.pengalaman"}}),e._v(" "),e.errors.pengalaman?r("h5",{staticClass:"text-danger"},[e._v(e._s(e.errors.pengalaman[0]))]):e._e()],1),e._v(" "),r("div",{staticClass:"col-4"},[r("base-input",{staticStyle:{width:"100%"},attrs:{label:"Foto Dokter"}},[r("vue2Dropzone",{ref:"dropzone",attrs:{id:"dropzone",options:e.dropOptions},on:{"vdropzone-removed-file":e.imageRemoved}})],1)],1),e._v(" "),r("div",{staticClass:"col-12"},[r("button",{staticClass:"btn btn-success float-right",on:{click:e.saveData}},[e._v("Simpan Data")])])])])])}),[],!1,null,null,null).exports;function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var z={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("users/getRoles");case 3:return t.abrupt("return");case 4:case"end":return t.stop()}}),t)})))()},components:{RouteBreadCrumb:d.a,FormDokter:_},methods:D(D(D({},Object(c.b)(["getAllDataTahunan","getAllDataBulanan","getMoreData"])),Object(c.c)(["SET_LOADING_PERCENT","SET_LOADING"])),{},{renderComponent:function(){var e=this;this.reRender=!1,this.$nextTick((function(){e.reRender=!0}))}}),mounted:function(){this.SET_LOADING(!1)}},P=Object(C.a)(z,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("base-header",{staticClass:"pb-6"},[r("div",{staticClass:"row align-items-center py-4"},[r("div",{staticClass:"col-lg-6 col-7"},[r("h6",{staticClass:"h2 d-inline-block mb-0"},[e._v("Edit Data Pengguna")]),e._v(" "),r("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}})])])]),e._v(" "),r("div",{staticClass:"container-fluid mt--6"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("form-dokter")],1)])])],1)}),[],!1,null,null,null);t.default=P.exports}}]);
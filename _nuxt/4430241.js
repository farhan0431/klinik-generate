(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{791:function(t,e,n){"use strict";var r=n(11),o=n(795),l=n(513),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);r(r.P+r.F*c,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},795:function(t,e,n){var r=n(49),o=n(514),l=n(65);t.exports=function(t,e,n,c){var d=String(l(t)),m=d.length,f=void 0===n?" ":String(n),h=r(e);if(h<=m||""==f)return d;var _=h-m,v=o.call(f,Math.ceil(_/f.length));return v.length>_&&(v=v.slice(0,_)),c?v+d:d+v}},804:function(t,e,n){"use strict";n(33),n(18),n(21),n(44),n(45);var r,o=n(5),l=(n(27),n(54),n(788),n(789),n(22)),c=n(64),d=n(108),m=n(188),f=(n(0),n(790)),h=n(794),_=n(817);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={components:(r={},Object(o.a)(r,c.Table.name,c.Table),Object(o.a)(r,c.TableColumn.name,c.TableColumn),Object(o.a)(r,c.Dropdown.name,c.Dropdown),Object(o.a)(r,c.DropdownItem.name,c.DropdownItem),Object(o.a)(r,c.DropdownMenu.name,c.DropdownMenu),Object(o.a)(r,"Modal",d.a),Object(o.a)(r,"BaseAlert",m.a),Object(o.a)(r,"DropzoneFileUpload",f.a),r),mounted:function(){var t=this;console.log(this.selected),console.log("---------"),setTimeout((function(){new _.a(h.a).load().then((function(e){t.initMap(e)}))}),1e3)},data:function(){return{data:{pemerintah:"",deskripsi_pemerintah:"",slogan:"",kantor_badan:"",inisial:"",provinsi:"",kota:"",alamat:""},status:{laporan_terkirim:!1,laporan_diterima:!1,ambulance:!1,pasien_perjalanan:!1,pasien_ditangani:!1},status_sekarang:0,laporan:{jenis_identitas:"",no_identitas:"",nama:"",jenis_kecelakaan:"",kondisi_korban:"",status:"",id_pembuat:"",lat:"",lng:"",kwitansi:"",perincian:""},dropOptions:{url:this.$axios.defaults.baseURL+"laporan/garansi",addRemoveLinks:!0,acceptedFiles:".pdf",maxFiles:1,autoProcessQueue:!1,headers:{Authorization:this.$auth.strategy.$auth.$storage._state["_token.local"]},params:{id:""}}}},computed:y(y({},Object(l.d)("settings",{errors:function(t){return t.errors},items:function(t){return t.items},provinsi_list:function(t){return t.provinsi},kota_list:function(t){return t.kota}})),Object(l.d)("janji",{selected:function(t){return t.selected},errors:function(t){return t.errors}})),methods:y(y({},Object(l.b)("laporan",["updateStatusLaporan","getData"])),{},{initMap:function(t){var map;map=document.getElementById("map-custom");var e={streetViewControl:!1,zoom:12,scrollwheel:!1,center:new t.maps.LatLng(-5.174615590326025,119.41586315131681),mapTypeId:t.maps.MapTypeId.ROADMAP,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#5e72e4"},{visibility:"on"}]}]};new t.maps.InfoWindow({content:'<div class="info-window-content"><h2>Argon Dashboard PRO</h2><p>A beautiful premium dashboard for Bootstrap 4.</p></div>'});map=new t.maps.Map(map,e);var n=new t.maps.DirectionsRenderer,r=new t.maps.DirectionsService,o=(new t.maps.LatLng(-5.17452561958578,119.415795968415),{origin:new t.maps.LatLng(this.selected.lat,this.selected.lng),destination:"RS. BHAYANGKARA MAKASSAR, Jl. Letnan Jenderal Jalan Andi Mappaodang, Jongaya, Kota Makassar, Sulawesi Selatan",travelMode:"DRIVING"});r.route(o,(function(t,e){"OK"==e?(n.setDirections(t),console.log(t),n.setMap(map)):(console.log(e),console.log(t))}))},updateStatus:function(t){this.status_sekarang=t,this.updateStatusLaporan({id:this.selected.id,status:t}),console.log(t)},openImage:function(){console.log(this.selected.gambar_link)},simpanFile:function(){var t=this;this.dropOptions.params.id=this.selected.id,this.$refs.dropzone.processQueue(),setTimeout((function(){t.getData()}),700)}}),watch:{status_sekarang:function(t){0==t?(this.status.laporan_terkirim=!0,this.status.laporan_diterima=!1,this.status.ambulance=!1,this.status.pasien_perjalanan=!1,this.status.pasien_ditangani=!1):1==t?(this.status.laporan_terkirim=!0,this.status.laporan_diterima=!0,this.status.ambulance=!1,this.status.pasien_perjalanan=!1,this.status.pasien_ditangani=!1):2==t?(this.status.laporan_terkirim=!0,this.status.laporan_diterima=!0,this.status.ambulance=!0,this.status.pasien_perjalanan=!1,this.status.pasien_ditangani=!1):3==t?(this.status.laporan_terkirim=!0,this.status.laporan_diterima=!0,this.status.ambulance=!0,this.status.pasien_perjalanan=!0,this.status.pasien_ditangani=!1):4==t&&(this.status.laporan_terkirim=!0,this.status.laporan_diterima=!0,this.status.ambulance=!0,this.status.pasien_perjalanan=!0,this.status.pasien_ditangani=!0),console.log(t)}}},w=n(4),component=Object(w.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"form-group row"},[n("div",{staticClass:"row col-6"},[n("label",{staticClass:"col-md-12 col-form-label form-control-label"},[t._v("Nama Pasien")]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("base-input",{attrs:{placeholder:"Nama",readonly:""},model:{value:t.selected.data_pasien.identitas[0].nama,callback:function(e){t.$set(t.selected.data_pasien.identitas[0],"nama",e)},expression:"selected.data_pasien.identitas[0].nama"}})],1)]),t._v(" "),n("div",{staticClass:"row col-6"},[n("label",{staticClass:"col-md-12 col-form-label form-control-label"},[t._v("Nama Dokter")]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("base-input",{attrs:{placeholder:"Nama",readonly:""},model:{value:t.selected.data_dokter.nama,callback:function(e){t.$set(t.selected.data_dokter,"nama",e)},expression:"selected.data_dokter.nama"}})],1)]),t._v(" "),n("div",{staticClass:"row col-6"},[n("label",{staticClass:"col-md-12 col-form-label form-control-label"},[t._v("Tanggal Janji")]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("base-input",{attrs:{placeholder:"Nama",readonly:""},model:{value:t.selected.tanggal_janji,callback:function(e){t.$set(t.selected,"tanggal_janji",e)},expression:"selected.tanggal_janji"}})],1)]),t._v(" "),n("div",{staticClass:"row col-6"},[n("label",{staticClass:"col-md-12 col-form-label form-control-label"},[t._v("Status")]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("base-input",{attrs:{placeholder:"Nama",readonly:""},model:{value:t.selected.status_teks,callback:function(e){t.$set(t.selected,"status_teks",e)},expression:"selected.status_teks"}})],1)]),t._v(" "),null!=t.selected.kartu_berobat?n("div",{staticClass:"row col-6"},[n("label",{staticClass:"col-md-12 col-form-label form-control-label"},[t._v("Biaya")]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("base-input",{attrs:{placeholder:"Biaya",readonly:""},model:{value:t.selected.kartu_berobat.biaya,callback:function(e){t.$set(t.selected.kartu_berobat,"biaya",e)},expression:"selected.kartu_berobat.biaya"}})],1)]):t._e(),t._v(" "),null!=t.selected.kartu_berobat&&null!=t.selected.kartu_berobat.bukti_transfer?n("div",{staticClass:"row col-12"},[n("label",{staticClass:"col-md-12 col-form-label form-control-label"},[t._v("Bukti Pembayaran")]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"container"},[n("img",{attrs:{src:t.selected.kartu_berobat.bukti_transfer.gambar_link,alt:"",height:"300"}})])])]):t._e()])])}),[],!1,null,null,null);e.a=component.exports},827:function(t,e,n){"use strict";n.r(e);n(33),n(18),n(21),n(44),n(45);var r,o=n(5),l=n(8),c=(n(46),n(22)),d=n(189),m=(n(27),n(791),n(54)),f=n.n(m),h=n(788),_=n.n(h),v=(n(789),n(64)),y=n(108),j=n(188),w=(n(0),n(804)),O=n(792),k=n(793);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(o.a)({components:(r={},Object(o.a)(r,v.Table.name,v.Table),Object(o.a)(r,v.TableColumn.name,v.TableColumn),Object(o.a)(r,v.Dropdown.name,v.Dropdown),Object(o.a)(r,v.DropdownItem.name,v.DropdownItem),Object(o.a)(r,v.DropdownMenu.name,v.DropdownMenu),Object(o.a)(r,"Modal",y.a),Object(o.a)(r,"BaseAlert",j.a),Object(o.a)(r,"DataLaporan",w.a),Object(o.a)(r,"KirimData",O.a),Object(o.a)(r,"NopolData",k.a),r),data:function(){return{reRender:!1,searchQuery:"",modals:{add:!1,classic:!1,nopol:!1},dates:{simple:new Date,range:"2019-04-19 to 2019-04-24"}}},mounted:function(){},watch:{"items.current_page":function(){this.SET_PAGE(this.items.current_page),this.getData({q:this.searchQuery})}},computed:D(D({},Object(c.d)("janji",{items:function(t){return t.janji},page:function(t){return t.page},errors:function(t){return t.errors},selected:function(t){return t.selected}})),Object(c.d)(["notif"])),methods:D(D(D(D({},Object(c.b)("janji",["getData","konfirResep"])),Object(c.c)(["SET_NOTIF","setNotif"])),Object(c.c)("janji",["SET_SELECTED","SET_PAGE","SET_ERRORS"])),{},{search:f.a.debounce((function(t){this.getData(this.searchQuery)}),500),delData:function(t){var e=this;_.a.fire({title:"Apakah anda yakin?",text:"Data akan terhapus dan tidak bisa dikembalikan ...",buttonsStyling:!1,customClass:{confirmButton:"btn btn-danger",cancelButton:"btn btn-success"},showDenyButton:!0,showCancelButton:!0,icon:"question"}).then((function(n){n.isConfirmed&&e.hapusData(t).then((function(t){_.a.fire({title:"Data berhasil dihapus!",buttonsStyling:!1,customClass:{confirmButton:"btn btn-success"},icon:"success"})}))}))},editData:function(data){this.SET_SELECTED(data),this.$router.push("/referensi/jenis-pajak/edit")},openInfo:function(data){this.SET_SELECTED(data),this.modals.classic=!0,this.renderComponent()},kirimData:function(data){this.modals.classic=!1,this.renderComponent()},zeroPad:function(t,e){return String(t).padStart(e,"0")},pembayaran:function(){var t=this;_.a.fire({title:"Apakah anda yakin?",text:"Data yang terkonfirmasi tidak bisa dikembalikan ...",buttonsStyling:!1,customClass:{confirmButton:"btn btn-danger",cancelButton:"btn btn-success"},showDenyButton:!0,showCancelButton:!0,icon:"question"}).then((function(e){e.isConfirmed&&t.konfirResep({id:t.selected.id}).then((function(e){"success"==e.status?(_.a.fire({title:"Data berhasil dikonfirmasi!",buttonsStyling:!1,customClass:{confirmButton:"btn btn-success"},icon:"success"}),t.modals.classic=!1):_.a.fire({title:"Data gagal dikonfirmasi!",buttonsStyling:!1,customClass:{confirmButton:"btn btn-success"},icon:"success"})}))}))},renderComponent:function(){var t=this;this.reRender=!1,this.$nextTick((function(){t.reRender=!0}))}})},"watch",{selected:function(t){console.log("asdasdas"),console.log(t)},"items.current_page":function(t){this.SET_PAGE(t),this.getData()},notif:function(){this.getData(),console.log("eee")}}),T=n(4),P=Object(T.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"border-0 card-header"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-4"},[n("base-input",{attrs:{"prepend-icon":"fas fa-search",placeholder:"Search..."},on:{input:t.search},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1)])]),t._v(" "),n("el-table",{staticClass:"table-responsive table-flush",attrs:{"header-row-class-name":"thead-light",data:t.items.data}},[n("el-table-column",{attrs:{label:"Nomor Antrian","min-width":"60px",prop:"nama",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-body"},[n("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(r.nomor_antrian))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Nomor RM","min-width":"60px",prop:"nama",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-body"},[n("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(t.zeroPad(r.id,3))+"_DFCC_"+t._s(r.created_at.split("-")[1])+"_"+t._s(r.created_at.split("-")[0][2]+r.created_at.split("-")[0][3]))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Nama Pasien","min-width":"61px",prop:"nama_pasien",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-body"},[n("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(r.data_pasien.identitas[0].nama))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Nama Dokter Yang Menangani","min-width":"75px",prop:"nama_dokter",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-body"},[n("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(r.data_dokter.nama))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Tanggal Janji","min-width":"60px",prop:"nama",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-body"},[n("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(r.tanggal_janji))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Status","min-width":"50px",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-body"},[n("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(r.status_teks))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"#","min-width":"50px",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-body"},[n("button",{staticClass:"btn btn-success btn-sm",attrs:{"data-id":r.id},on:{click:function(e){return t.openInfo(r)}}},[n("i",{staticClass:"ni ni-single-copy-04"})])])])]}}])})],1),t._v(" "),n("div",{staticClass:"card-footer py-4 d-flex justify-content-end"},[n("base-pagination",{attrs:{total:t.items.total},model:{value:t.items.current_page,callback:function(e){t.$set(t.items,"current_page",e)},expression:"items.current_page"}})],1),t._v(" "),n("modal",{attrs:{show:t.modals.classic,size:"xl"},on:{"update:show":function(e){return t.$set(t.modals,"classic",e)}}},[n("h6",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v("Informasi Data Janji/Konsultasi")]),t._v(" "),n("div",[t.reRender?n("data-laporan"):t._e()],1),t._v(" "),t.reRender?n("template",{slot:"footer"},[2==t.selected.status?n("base-button",{staticClass:"ml-auto",attrs:{type:"link"},on:{click:function(e){return t.pembayaran()}}},[t._v("Konfirmasi Pembayaran")]):t._e()],1):t._e()],2)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-8"},[n("h6",{staticClass:"h2 d-inline-block mb-0"},[t._v("Tabel Transaksi Janji/Konsultasi")])])}],!1,null,null,null).exports;function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("janji/getData");case 3:return e.abrupt("return");case 4:case"end":return e.stop()}}),e)})))()},components:{RouteBreadCrumb:d.a,ListDaftarLaporan:P},computed:x({},Object(c.d)(["loading","loadingPercent","typeData"])),methods:x(x({},Object(c.c)(["SET_LOADING_PERCENT","SET_LOADING"])),{},{renderComponent:function(){var t=this;this.reRender=!1,this.$nextTick((function(){t.reRender=!0}))}}),mounted:function(){this.SET_LOADING(!1)}},A=Object(T.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-header",{staticClass:"pb-6"},[n("div",{staticClass:"row align-items-center py-4"},[n("div",{staticClass:"col-lg-6 col-7"},[n("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}})])])]),t._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("list-daftar-laporan")],1)])])],1)}),[],!1,null,null,null);e.default=A.exports}}]);
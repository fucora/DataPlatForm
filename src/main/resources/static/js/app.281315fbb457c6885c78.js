webpackJsonp([1],{"0JkF":function(e,t,a){"use strict";var o=a("woOf"),n=a.n(o),r=a("XSGC"),l=a("P9l9");t.a={components:{DatasourceSave:r.a},data:function(){return{dataSourceTopForm:{inputKey:""},dataSourceTableLoading:!1,dataSourceTable:[]}},methods:{getDataSourceTableList:function(){var e=this,t={key:this.dataSourceTopForm.inputKey};this.dataSourceTableLoading=!0,a.i(l.g)(t).then(function(t){e.dataSourceTableLoading=!1,"0"===t.code?e.dataSourceTable=t.data:e.$message.error(t.msg)})},getDataSourceListBtn:function(){this.getDataSourceTableList()},dataSourceAddOpenBtn:function(){this.$refs.dialog.dataSourceDialog()},testDataSourceBtn:function(e,t){var o=this,r=n()({},t);this.dataSourceTableLoading=!0,a.i(l.h)(r).then(function(e){o.dataSourceTableLoading=!1,"0"===e.code?o.$message.success(e.msg):o.$message.error(e.msg)})},editDataSourceBtn:function(e,t){var a=n()({},t);this.$refs.dialog.dataSourceDialog(a)},deleteDataSourceBtn:function(e,t){var o=this;this.$confirm("确认删除吗？","提示",{}).then(function(){var e=n()({},t);o.dataSourceTableLoading=!0,a.i(l.i)(e).then(function(e){o.dataSourceTableLoading=!1,"0"===e.code?(o.$message.success(e.msg),o.getDataSourceTableList()):o.$message.error(e.msg)})}).catch(function(){})}},mounted:function(){this.getDataSourceTableList()}}},"6L+O":function(e,t,a){"use strict";var o=a("woOf"),n=a.n(o),r=a("P9l9");t.a={data:function(){return{driverType:[{value:"com.mysql.jdbc.Driver",label:"MySQL"},{value:"oracle.jdbc.driver.OracleDriver",label:"Oracle"},{value:"com.microsoft.sqlserver.jdbc.SQLServerDriver",label:"SQL Server"},{value:"com.microsoft.jdbc.sqlserver.SQLServerDriver",label:"SQL Server"}],datasourceDialogVisible:!1,testConLoading:!1,saveFormLoading:!1,dataSourceForm:{},is_center:!0}},methods:{dataSourceDialog:function(e){this.datasourceDialogVisible=!0,void 0!==e?(this.dataSourceForm=e,this.dataSourceForm.driverSelect=this.driverType):this.dataSourceForm={id:"",name:"",driver:"",driverSelect:this.driverType,ip:"",port:"",basename:"",parameter:"",url:"",username:"",password:""}},changeValue:function(){"com.mysql.jdbc.Driver"===this.dataSourceForm.driver?this.dataSourceForm.url="jdbc:mysql://"+this.dataSourceForm.ip+":"+this.dataSourceForm.port+"/"+this.dataSourceForm.basename:"oracle.jdbc.driver.OracleDriver"===this.dataSourceForm.driver?this.dataSourceForm.url="jdbc:oracle:thin:@"+this.dataSourceForm.ip+":"+this.dataSourceForm.port+":"+this.dataSourceForm.basename:"com.microsoft.sqlserver.jdbc.SQLServerDriver"!==this.dataSourceForm.driver&&"com.microsoft.jdbc.sqlserver.SQLServerDriver"!==this.dataSourceForm.driver||(this.dataSourceForm.url="jdbc:sqlserver://"+this.dataSourceForm.ip+":"+this.dataSourceForm.port+";DatabaseName="+this.dataSourceForm.basename)},testConBtn:function(){var e=this;this.changeValue(),this.testConLoading=!0;var t=n()({},this.dataSourceForm);t.driverSelect=t.driver,a.i(r.h)(t).then(function(t){e.testConLoading=!1,"0"===t.code?e.$message.success(t.msg):e.$message.error(t.msg)})},saveDataSourceBtn:function(){var e=this;this.changeValue(),this.$refs.dataSourceForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.saveFormLoading=!0;var t=n()({},e.dataSourceForm);t.driverSelect=t.driver,a.i(r.j)(t).then(function(t){e.saveFormLoading=!1,"0"===t.code?(e.$message.success(t.msg),e.datasourceDialogVisible=!1,e.$emit("reloadTable")):e.$message.error(t.msg)})}).catch(function(){})})}}}},"7Uro":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"datasource-list"}},[a("el-col",{attrs:{span:24}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.dataSourceTopForm,size:"medium"}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"数据源模糊搜索",clearable:""},model:{value:e.dataSourceTopForm.inputKey,callback:function(t){e.$set(e.dataSourceTopForm,"inputKey",t)},expression:"dataSourceTopForm.inputKey"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getDataSourceListBtn}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.dataSourceAddOpenBtn}},[e._v("新增")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataSourceTableLoading,expression:"dataSourceTableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataSourceTable,"max-height":"300",border:"",stripe:"",size:"small"}},[e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"数据源名称",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"url",label:"数据源地址"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.testDataSourceBtn(t.$index,t.row)}}},[e._v("测试")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.editDataSourceBtn(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.deleteDataSourceBtn(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("datasource-save",{ref:"dialog",on:{reloadTable:e.getDataSourceTableList}})],1)},n=[],r={render:o,staticRenderFns:n};t.a=r},"87pk":function(e,t){},"8M/T":function(e,t,a){"use strict";var o=a("mvHQ"),n=a.n(o),r=a("woOf"),l=a.n(r),i=a("P9l9");t.a={data:function(){return{is_center:!0,tableConfigDialogVisible:!1,saveFormLoading:!1,tableConfigForm:{},columnRelationFlag:!1,AddSetting:!0,addLock:!1,editLock:!1,datasource:[],defaulttypeSelect:[{name:"无默认值",value:"0"},{name:"强制默认",value:"2"}],initTableConfigDialog:{id:"",name:"",description:"",datato:"",tableto:"",datafrom:"",tablefrom:"",tablefroms:"",jointable:[],relation:[],tablenameto:[],tablenamefrom:[],columnto:[],columnfrom:[],synvalue:["update","insert","delete"],syntype:"",logflag:!1,errorflag:!1,whereto:"",wherefrom:"",tableConfigTabs:"first"}}},methods:{TableConfigDialog:function(e){this.tableConfigDialogVisible=!0,void 0!==e?(this.columnRelationFlag=!0,this.addLock=!0,this.editLock=!0,this.tableConfigForm=e,this.tableConfigForm.tableConfigTabs="first"):(this.columnRelationFlag=!1,this.addLock=!1,this.editLock=!1,this.tableConfigForm=this.initTableConfigDialog)},dataSourceChange:function(e,t){var o=this,n={id:e};a.i(i.d)(n).then(function(e){"0"===e.code?"datato"===t?o.tableConfigForm.tablenameto=e.data:"datafrom"===t&&(o.tableConfigForm.tablenamefrom=e.data):o.$message.error(e.msg)})},tableToChange:function(){var e=this,t={id:this.tableConfigForm.datato,name:this.tableConfigForm.tableto,type:"to"};a.i(i.e)(t).then(function(t){"0"===t.code?e.tableConfigForm.columnto=t.data:e.$message.error(t.msg)})},tableFromChange:function(){var e=this,t=[];t.push(this.tableConfigForm.tablefrom);for(var o=0;o<this.tableConfigForm.jointable.length;o++)if(""!==this.tableConfigForm.jointable[o].name&&null!==this.tableConfigForm.jointable[o].name){for(var n=!1,r=0;r<t.length;r++)t[r]===this.tableConfigForm.jointable[o].name&&(n=!0);n||t.push(this.tableConfigForm.jointable[o].name)}var l={id:this.tableConfigForm.datafrom,name:t.toString(),type:"from"};this.tableConfigForm.tablefroms=t.toString(),a.i(i.e)(l).then(function(t){"0"===t.code?e.tableConfigForm.columnfrom=t.data:e.$message.error(t.msg)})},tableConfigJoinBtn:function(){if(""===this.tableConfigForm.tablefrom||null===this.tableConfigForm.tablefrom||""===this.tableConfigForm.datafrom||null===this.tableConfigForm.datafrom)return void this.$message.error("未选择数据库或表时不能添加左连接");for(var e={name:"",on:"",dengyu:""},t=0;t<this.tableConfigForm.jointable.length;t++)if(this.tableConfigForm.jointable[t].name===e.name||this.tableConfigForm.jointable[t].on===e.on||this.tableConfigForm.jointable[t].dengyu===e.dengyu)return void this.$message.error("有左连接选项未全部确认时，不能添加新的左连接");this.tableConfigForm.jointable.push(e)},tableConfigResetBtn:function(){var e=this;this.$confirm("确认要重置左连接及列配置吗？","提示",{}).then(function(){e.tableConfigForm.relation=[],e.tableConfigForm.jointable=[],e.columnRelationFlag=!1,e.addLock=!1}).catch(function(){})},tableConfigConfirmBtn:function(){if(!this.addLock){this.addLock=!0,this.tableConfigForm.relation=[];for(var e=0;e<this.tableConfigForm.columnto.length;e++){var t={columnto:this.tableConfigForm.columnto[e].column_name,columnfrom:"",defaulttype:"0",defaultvalue:""};this.tableConfigForm.relation.push(t)}this.columnRelationFlag=!0}},cancelTableConfigBtn:function(){this.tableConfigDialogVisible=!1},saveTableConfigBtn:function(){var e=this;this.$refs.tableConfigForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.saveFormLoading=!0;var t=l()({},e.tableConfigForm);e.arrayToJson(t),a.i(i.f)(t).then(function(t){e.saveFormLoading=!1,"0"===t.code?(e.$message.success(t.msg),e.tableConfigDialogVisible=!1,e.$emit("reloadTable")):e.$message.error(t.msg)})}).catch(function(){})})},arrayToJson:function(e){e.jointable=n()(e.jointable),e.relation=n()(e.relation),e.tablenameto=n()(e.tablenameto),e.tablenamefrom=n()(e.tablenamefrom),e.columnto=n()(e.columnto),e.columnfrom=n()(e.columnfrom),e.synvalue=n()(e.synvalue)},datasourceInit:function(){var e=this,t={};a.i(i.g)(t).then(function(t){e.datasource=t.data}).catch(function(t){e.$message.error(t)})}},mounted:function(){this.datasourceInit()}}},AUzY:function(e,t){},BBP3:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"page-container"},[e._v("404 page not found")])},n=[],r={render:o,staticRenderFns:n};t.a=r},BxyT:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"page-container"},[e._v("该页面正在开发中")])},n=[],r={render:o,staticRenderFns:n};t.a=r},HXcY:function(e,t){},HXef:function(e,t,a){"use strict";function o(e){a("HXcY")}var n=a("dPB5"),r=a("Vkq4"),l=a("VU/8"),i=o,s=l(n.a,r.a,!1,i,"data-v-69b9eaf6",null);t.a=s.exports},HpNq:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"datasource-save"}},[a("el-dialog",{attrs:{title:"数据源",visible:e.datasourceDialogVisible,center:e.is_center,width:"60%","close-on-click-modal":!1},on:{"update:visible":function(t){e.datasourceDialogVisible=t}}},[a("el-form",{ref:"dataSourceForm",attrs:{model:e.dataSourceForm,"label-width":"80px",rules:e.dataSourceForm}},[e._e(),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{placeholder:"数据源别名"},model:{value:e.dataSourceForm.name,callback:function(t){e.$set(e.dataSourceForm,"name",t)},expression:"dataSourceForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"驱动"}},[a("el-select",{attrs:{placeholder:"请选择数据库类型",size:"large"},on:{change:e.changeValue},model:{value:e.dataSourceForm.driver,callback:function(t){e.$set(e.dataSourceForm,"driver",t)},expression:"dataSourceForm.driver"}},e._l(e.dataSourceForm.driverSelect,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),e._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.value))])])}))],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"IP"}},[a("el-input",{attrs:{placeholder:"数据库ip地址"},model:{value:e.dataSourceForm.ip,callback:function(t){e.$set(e.dataSourceForm,"ip",t)},expression:"dataSourceForm.ip"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"端口"}},[a("el-input",{attrs:{placeholder:"数据库端口号"},model:{value:e.dataSourceForm.port,callback:function(t){e.$set(e.dataSourceForm,"port",t)},expression:"dataSourceForm.port"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"库名称"}},[a("el-input",{attrs:{placeholder:"数据库库名"},model:{value:e.dataSourceForm.basename,callback:function(t){e.$set(e.dataSourceForm,"basename",t)},expression:"dataSourceForm.basename"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"参数"}},[a("el-input",{attrs:{placeholder:"数据库连接参数&分割"},model:{value:e.dataSourceForm.parameter,callback:function(t){e.$set(e.dataSourceForm,"parameter",t)},expression:"dataSourceForm.parameter"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.dataSourceForm.username,callback:function(t){e.$set(e.dataSourceForm,"username",t)},expression:"dataSourceForm.username"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{placeholder:"密码"},model:{value:e.dataSourceForm.password,callback:function(t){e.$set(e.dataSourceForm,"password",t)},expression:"dataSourceForm.password"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"连接地址"}},[a("el-input",{attrs:{placeholder:"实际连接地址",disabled:!0},model:{value:e.dataSourceForm.url,callback:function(t){e.$set(e.dataSourceForm,"url",t)},expression:"dataSourceForm.url"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",loading:e.testConLoading},on:{click:e.testConBtn}},[e._v("测试")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.saveFormLoading},on:{click:e.saveDataSourceBtn}},[e._v("保存")])],1)],1)],1)},n=[],r={render:o,staticRenderFns:n};t.a=r},KWv7:function(e,t,a){"use strict";var o=a("P7ry"),n=a("HXef"),r=a("c5Mg"),l=a("vMdo"),i=a("mTPD"),s=a("qQ6D"),c=[{path:"/login",component:o.a,name:"",hidden:!0},{path:"/404",component:r.a,name:"",hidden:!0},{path:"/",name:"数据同步",iconCls:"el-icon-refresh",component:n.a,children:[{path:"/datasource",name:"数据源",component:l.a},{path:"/table",name:"同步信息",component:i.a},{path:"/statistics",name:"同步统计",component:s.a}]},{path:"/",name:"定时任务",iconCls:"el-icon-time",component:n.a,children:[{path:"/quartz",name:"任务列表",component:s.a}]},{path:"/",name:"控制台",leaf:!0,iconCls:"el-icon-document",component:n.a,children:[{path:"/console",name:"控制台",component:s.a}]}];t.a=c},M93x:function(e,t,a){"use strict";function o(e){a("d2s6")}var n=a("xJD8"),r=a("NUZI"),l=a("VU/8"),i=o,s=l(n.a,r.a,!1,i,null,null);t.a=s.exports},MZLL:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"loginForm",staticClass:"demo-ruleForm login-container",attrs:{model:e.loginForm,rules:e.rules,"label-position":"right","label-width":"40px"}},[a("h3",{staticClass:"title"},[e._v("系统登录")]),e._v(" "),a("el-form-item",{attrs:{prop:"username",label:"账号"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"password",label:"密码"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{"label-width":"0px"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},on:{click:function(t){e.submitForm("loginForm")}}},[e._v("登录\n    ")])],1)],1)},n=[],r={render:o,staticRenderFns:n};t.a=r},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("7+uW"),n=a("M93x"),r=a("/ocq"),l=a("KWv7"),i=a("zL8q"),s=a.n(i),c=a("tvR6");a.n(c);o.default.use(s.a),o.default.use(r.a);var u=new r.a({mode:"history",routes:l.a});u.beforeEach(function(e,t,a){"/login"===e.path&&sessionStorage.removeItem("user"),JSON.parse(sessionStorage.getItem("user"))||"/login"===e.path?a():a({path:"/login"})}),o.default.config.productionTip=!1,new o.default({el:"#app",router:u,render:function(e){return e(n.a)},template:"<App/>",components:{App:n.a}})},NUZI:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],r={render:o,staticRenderFns:n};t.a=r},OkAl:function(e,t,a){"use strict";var o=a("woOf"),n=a.n(o),r=a("PMyr"),l=a("P9l9");t.a={components:{TableConfigSave:r.a},data:function(){return{tableTopForm:{inputKey:""},table:[],tableLoading:!1}},methods:{getTableConfigList:function(){var e=this,t={inputKey:this.inputKey};this.tableLoading=!0,a.i(l.a)(t).then(function(t){e.tableLoading=!1,"0"===t.code?(e.jsonToArray(t),e.table=t.data):e.$message.error(t.msg)})},getTableConfigListBtn:function(){this.getTableConfigList()},TableConfigAddBtn:function(){this.$refs.dialog.TableConfigDialog()},editTableConfigBtn:function(e,t){var a=n()({},t);this.$refs.dialog.TableConfigDialog(a)},testTableConfigBtn:function(e,t){var o=this;this.$confirm("对"+t.name+"进行同步测试？","提示",{}).then(function(){var e={id:t.id};o.tableLoading=!0,a.i(l.b)(e).then(function(e){o.tableLoading=!1,"0"===e.code?o.$message.success(e.msg):o.$message.error(e.msg),o.getTableConfigList()})}).catch(function(){o.tableLoading=!1})},deleteTableConfigBtn:function(e,t){var o=this;this.$confirm("确认删除吗？","提示",{}).then(function(){var e={id:t.id};o.tableLoading=!0,a.i(l.c)(e).then(function(e){o.tableLoading=!1,"0"===e.code?(o.$message.success(e.msg),o.getTableConfigList()):o.$message.error(e.msg)})}).catch(function(){})},jsonToArray:function(e){for(var t=0;t<e.data.length;t++)e.data[t].jointable=JSON.parse(e.data[t].jointable),e.data[t].relation=JSON.parse(e.data[t].relation),e.data[t].columnto=JSON.parse(e.data[t].columnto),e.data[t].columnfrom=JSON.parse(e.data[t].columnfrom),e.data[t].synvalue=JSON.parse(e.data[t].synvalue),"true"===e.data[t].logflag&&(e.data[t].logflag=!0),"true"===e.data[t].errorflag&&(e.data[t].errorflag=!0)}},mounted:function(){this.getTableConfigList()}}},P7ry:function(e,t,a){"use strict";function o(e){a("pz8U")}var n=a("QXXb"),r=a("MZLL"),l=a("VU/8"),i=o,s=l(n.a,r.a,!1,i,"data-v-80e1e148",null);t.a=s.exports},P9l9:function(e,t,a){"use strict";a.d(t,"k",function(){return n}),a.d(t,"g",function(){return r}),a.d(t,"h",function(){return l}),a.d(t,"j",function(){return i}),a.d(t,"i",function(){return s}),a.d(t,"a",function(){return c}),a.d(t,"d",function(){return u}),a.d(t,"e",function(){return m}),a.d(t,"f",function(){return d}),a.d(t,"c",function(){return f}),a.d(t,"b",function(){return b});var o=a("Y8t/"),n=function(e){return o.a.post("/login/user",e).then(function(e){return e})},r=function(e){return o.a.get("/datasource/list",e).then(function(e){return e})},l=function(e){return o.a.post("/datasource/test",e).then(function(e){return e})},i=function(e){return o.a.post("/datasource/save",e).then(function(e){return e})},s=function(e){return o.a.post("/datasource/delete",e).then(function(e){return e})},c=function(e){return o.a.get("/table/list",e).then(function(e){return e})},u=function(e){return o.a.get("/table/name",e).then(function(e){return e})},m=function(e){return o.a.get("/table/column",e).then(function(e){return e})},d=function(e){return o.a.post("/table/save",e).then(function(e){return e})},f=function(e){return o.a.post("/table/delete",e).then(function(e){return e})},b=function(e){return o.a.post("/table/test",e).then(function(e){return e})}},PMyr:function(e,t,a){"use strict";function o(e){a("87pk")}var n=a("8M/T"),r=a("hRMo"),l=a("VU/8"),i=o,s=l(n.a,r.a,!1,i,null,null);t.a=s.exports},QXXb:function(e,t,a){"use strict";var o=a("mvHQ"),n=a.n(o),r=a("P9l9");a("Y8t/");t.a={data:function(){return{logining:!1,loginForm:{username:"",password:""},rules:{username:[{validator:function(e,t,a){""===t?a(new Error("请输入用户")):a()},trigger:"blur"}],password:[{validator:function(e,t,a){""===t?a(new Error("请输入密码")):a()},trigger:"blur"}]},checked:!0}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.logining=!0;var o={code:t.loginForm.username,password:t.loginForm.password};a.i(r.k)(o).then(function(e){t.logining=!1,"0"===e.code?(t.$message.success("登录成功！"),sessionStorage.setItem("user",n()(o)),t.$router.push({path:"/datasource"})):t.$message.error(e.msg)})})}}}},Vkq4:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"container"},[a("el-col",{staticClass:"header",attrs:{span:24}},[a("el-col",{staticClass:"logo",attrs:{span:10}},[e._v("\n      Logo\n    ")]),e._v(" "),a("el-col",{staticClass:"user-info",attrs:{span:14}},[a("el-dropdown",{attrs:{trigger:"hover"}},[a("span",{staticClass:"el-dropdown-link user-info-inner"},[a("img",{attrs:{src:this.sysUserAvatar}}),e._v(" "+e._s(e.sysUserName)+"\n        ")]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("个人")]),e._v(" "),a("el-dropdown-item",[e._v("设置")]),e._v(" "),a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){e.logout(t)}}},[e._v("退出登录")])],1)],1)],1)],1),e._v(" "),a("el-col",{staticClass:"main",attrs:{span:24}},[a("el-col",{staticClass:"left",attrs:{span:10}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,router:"","unique-opened":"","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[e._l(e.$router.options.routes,function(t,o){return t.hidden?e._e():[t.leaf?e._e():a("el-submenu",{attrs:{index:o+""}},[a("template",{slot:"title"},[a("i",{class:t.iconCls}),e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return t.hidden?e._e():a("el-menu-item",{key:t.path,attrs:{index:t.path,route:t.path}},[e._v("\n              "+e._s(t.name)+"\n            ")])})],2),e._v(" "),t.leaf&&t.children.length>0?a("el-menu-item",{attrs:{index:t.children[0].path,route:t.children[0].path}},[a("i",{class:t.iconCls}),e._v(e._s(t.children[0].name)+"\n          ")]):e._e()]})],2)],1),e._v(" "),a("el-col",{staticClass:"right",attrs:{span:14}},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("strong",{staticClass:"title"},[e._v(e._s(e.$route.name))])]),e._v(" "),a("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)],1)},n=[],r={render:o,staticRenderFns:n};t.a=r},XSGC:function(e,t,a){"use strict";var o=a("6L+O"),n=a("HpNq"),r=a("VU/8"),l=r(o.a,n.a,!1,null,null,null);t.a=l.exports},"Y8t/":function(e,t,a){"use strict";function o(e){return!e||200!==e.status&&304!==e.status&&400!==e.status?{code:"404",msg:"网络异常"}:e.data}function n(e){return e.code,e}var r=a("//Fk"),l=a.n(r),i=a("mtWM"),s=a.n(i),c=a("mw3O"),u=a.n(c);s.a.interceptors.request.use(function(e){return e},function(e){return l.a.reject(e)}),s.a.interceptors.response.use(function(e){return e},function(e){return l.a.resolve(e.response)}),t.a={post:function(e,t){return s()({method:"post",baseURL:"/",url:e,data:u.a.stringify(t),timeout:1e4,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(e){return o(e)}).then(function(e){return n(e)})},get:function(e,t){return s()({method:"get",baseURL:"/",url:e,params:t,timeout:1e4,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(e){return o(e)}).then(function(e){return n(e)})}}},c5Mg:function(e,t,a){"use strict";function o(e){a("ebNn")}var n=a("BBP3"),r=a("VU/8"),l=o,i=r(null,n.a,!1,l,"data-v-7c8158d4",null);t.a=i.exports},d2s6:function(e,t){},dPB5:function(e,t,a){"use strict";var o=a("upGW"),n=a.n(o);t.a={data:function(){return{sysUserName:"",sysUserAvatar:"",DataSourceListForm:{inputKey:""}}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then(function(){sessionStorage.removeItem("user"),e.$router.push("/login")}).catch(function(){})}},mounted:function(){var e=sessionStorage.getItem("user");e&&(e=JSON.parse(e),this.sysUserName=e.name||"杨昌迪",this.sysUserAvatar=e.avatar||n.a)}}},ebNn:function(e,t){},hRMo:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"table-config-save"}},[a("el-dialog",{attrs:{visible:e.tableConfigDialogVisible,center:e.is_center,width:"70%",top:"10vh","close-on-click-modal":!1},on:{"update:visible":function(t){e.tableConfigDialogVisible=t}}},[a("el-form",{ref:"tableConfigForm",attrs:{model:e.tableConfigForm,"label-width":"80px",rules:e.tableConfigForm}},[a("el-tabs",{on:{"tab-click":function(e){}},model:{value:e.tableConfigForm.tableConfigTabs,callback:function(t){e.$set(e.tableConfigForm,"tableConfigTabs",t)},expression:"tableConfigForm.tableConfigTabs"}},[a("el-tab-pane",{attrs:{label:"常规配置",name:"first"}},[a("el-row",[e._e(),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{placeholder:"同步任务名称"},model:{value:e.tableConfigForm.name,callback:function(t){e.$set(e.tableConfigForm,"name",t)},expression:"tableConfigForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{placeholder:"同步任务描述"},model:{value:e.tableConfigForm.description,callback:function(t){e.$set(e.tableConfigForm,"description",t)},expression:"tableConfigForm.description"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"目标库"}},[a("el-select",{attrs:{placeholder:"同步任务目标数据库",size:"large",disabled:e.addLock,filterable:""},on:{change:function(t){e.dataSourceChange(e.tableConfigForm.datato,"datato")}},model:{value:e.tableConfigForm.datato,callback:function(t){e.$set(e.tableConfigForm,"datato",t)},expression:"tableConfigForm.datato"}},e._l(e.datasource,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"目标表"}},[a("el-select",{attrs:{placeholder:"同步任务目标表",size:"large",disabled:e.addLock,filterable:""},on:{change:e.tableToChange},model:{value:e.tableConfigForm.tableto,callback:function(t){e.$set(e.tableConfigForm,"tableto",t)},expression:"tableConfigForm.tableto"}},e._l(e.tableConfigForm.tablenameto,function(e){return a("el-option",{key:e.table_name,attrs:{label:e.table_name,value:e.table_name}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"来源库"}},[a("el-select",{attrs:{placeholder:"同步任务来源数据库",size:"large",disabled:e.addLock,filterable:""},on:{change:function(t){e.dataSourceChange(e.tableConfigForm.datafrom,"datafrom")}},model:{value:e.tableConfigForm.datafrom,callback:function(t){e.$set(e.tableConfigForm,"datafrom",t)},expression:"tableConfigForm.datafrom"}},e._l(e.datasource,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"来源表"}},[a("el-select",{attrs:{placeholder:"同步任务来源表",size:"large",disabled:e.addLock,filterable:""},on:{change:e.tableFromChange},model:{value:e.tableConfigForm.tablefrom,callback:function(t){e.$set(e.tableConfigForm,"tablefrom",t)},expression:"tableConfigForm.tablefrom"}},e._l(e.tableConfigForm.tablenamefrom,function(e){return a("el-option",{key:e.table_name,attrs:{label:e.table_name,value:e.table_name}})}))],1)],1),e._v(" "),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[a("el-button",{attrs:{type:"primary",disabled:e.addLock},on:{click:e.tableConfigJoinBtn}},[e._v("left join")]),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:e.editLock},on:{click:e.tableConfigResetBtn}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:e.editLock},on:{click:e.tableConfigConfirmBtn}},[e._v("确认")])],1)],1),e._v(" "),a("el-row",e._l(e.tableConfigForm.jointable,function(t){return a("el-col",{key:t.name,attrs:{span:24}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"left join"}},[a("el-select",{attrs:{placeholder:"连接表",size:"large",disabled:e.addLock,filterable:""},on:{change:e.tableFromChange},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"jointables.name"}},e._l(e.tableConfigForm.tablenamefrom,function(e){return a("el-option",{key:e.table_name,attrs:{label:e.table_name,value:e.table_name}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"on"}},[a("el-select",{attrs:{placeholder:"左表列",size:"large",disabled:e.addLock,filterable:""},model:{value:t.on,callback:function(a){e.$set(t,"on",a)},expression:"jointables.on"}},e._l(e.tableConfigForm.columnfrom,function(e){return a("el-option",{key:e.column_name,attrs:{label:e.column_name,value:e.column_name}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"="}},[a("el-select",{attrs:{placeholder:"右表列",size:"large",disabled:e.addLock,filterable:""},model:{value:t.dengyu,callback:function(a){e.$set(t,"dengyu",a)},expression:"jointables.dengyu"}},e._l(e.tableConfigForm.columnfrom,function(e){return a("el-option",{key:e.column_name,attrs:{label:e.column_name,value:e.column_name}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:6}})],1)})),e._v(" "),e._l(e.tableConfigForm.relation,function(t){return e.columnRelationFlag?a("el-row",{key:t.column},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"列"}},[a("el-input",{attrs:{disabled:"",value:t.columnto},model:{value:t.columnto,callback:function(a){e.$set(t,"columnto",a)},expression:"relations.columnto"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"匹配"}},[a("el-select",{attrs:{placeholder:"选择需要同步的列",size:"large",filterable:"",clearable:""},on:{change:function(e){}},model:{value:t.columnfrom,callback:function(a){e.$set(t,"columnfrom",a)},expression:"relations.columnfrom"}},e._l(e.tableConfigForm.columnfrom,function(e){return a("el-option",{key:e.column_name,attrs:{label:e.column_name,value:e.column_name}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"默认选项"}},[a("el-select",{attrs:{placeholder:"选择需要同步的列",size:"large",filterable:""},on:{change:function(e){}},model:{value:t.defaulttype,callback:function(a){e.$set(t,"defaulttype",a)},expression:"relations.defaulttype"}},e._l(e.defaulttypeSelect,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"默认值"}},[a("el-input",{attrs:{placeholder:"请输入默认值"},model:{value:t.defaultvalue,callback:function(a){e.$set(t,"defaultvalue",a)},expression:"relations.defaultvalue"}})],1)],1)],1):e._e()})],2),e._v(" "),a("el-tab-pane",{attrs:{label:"高级配置",name:"second"}},[a("el-row",[e.AddSetting?a("el-col",{attrs:{span:24}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"同步选项"}},[a("el-checkbox-group",{model:{value:e.tableConfigForm.synvalue,callback:function(t){e.$set(e.tableConfigForm,"synvalue",t)},expression:"tableConfigForm.synvalue"}},[a("el-checkbox",{attrs:{label:"update"}}),e._v(" "),a("el-checkbox",{attrs:{label:"insert"}}),e._v(" "),a("el-checkbox",{attrs:{label:"delete"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"开启日志"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.tableConfigForm.logflag,callback:function(t){e.$set(e.tableConfigForm,"logflag",t)},expression:"tableConfigForm.logflag"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"出错继续"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.tableConfigForm.errorflag,callback:function(t){e.$set(e.tableConfigForm,"errorflag",t)},expression:"tableConfigForm.errorflag"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"where"}},[a("el-input",{attrs:{placeholder:"目标表where值限定"},model:{value:e.tableConfigForm.whereto,callback:function(t){e.$set(e.tableConfigForm,"whereto",t)},expression:"tableConfigForm.whereto"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"where"}},[a("el-input",{attrs:{placeholder:"来源表where值限定"},model:{value:e.tableConfigForm.wherefrom,callback:function(t){e.$set(e.tableConfigForm,"wherefrom",t)},expression:"tableConfigForm.wherefrom"}})],1)],1)],1)],1):e._e()],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancelTableConfigBtn}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.saveFormLoading},on:{click:e.saveTableConfigBtn}},[e._v("保存")])],1)],1)],1)},n=[],r={render:o,staticRenderFns:n};t.a=r},mTPD:function(e,t,a){"use strict";function o(e){a("pgJj")}var n=a("OkAl"),r=a("pVAJ"),l=a("VU/8"),i=o,s=l(n.a,r.a,!1,i,null,null);t.a=s.exports},pVAJ:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"table-config-list"}},[a("el-col",{attrs:{span:24}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.tableTopForm,size:"medium"}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"同步模糊搜索",clearable:""},model:{value:e.tableTopForm.inputKey,callback:function(t){e.$set(e.tableTopForm,"inputKey",t)},expression:"tableTopForm.inputKey"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getTableConfigListBtn}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.TableConfigAddBtn}},[e._v("新增")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.table,border:"",stripe:"",size:"small"}},[e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"任务名称",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tableto",label:"目标表"}}),e._v(" "),a("el-table-column",{attrs:{prop:"lasttime",label:"上次同步时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"timecost",label:"上次同步耗时",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"synflag",label:"同步开关",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.testTableConfigBtn(t.$index,t.row)}}},[e._v("测试")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.editTableConfigBtn(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.deleteTableConfigBtn(t.$index,t.row)}}},[e._v("删除")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"synmsg",label:"同步信息"}})],1),e._v(" "),a("table-config-save",{ref:"dialog",on:{reloadTable:e.getTableConfigList}})],1)},n=[],r={render:o,staticRenderFns:n};t.a=r},pgJj:function(e,t){},pz8U:function(e,t){},qQ6D:function(e,t,a){"use strict";function o(e){a("AUzY")}var n=a("BxyT"),r=a("VU/8"),l=o,i=r(null,n.a,!1,l,"data-v-f4bd87e6",null);t.a=i.exports},tvR6:function(e,t){},upGW:function(e,t,a){e.exports=a.p+"static/img/yangchd.4a75d77.png"},vMdo:function(e,t,a){"use strict";var o=a("0JkF"),n=a("7Uro"),r=a("VU/8"),l=r(o.a,n.a,!1,null,null,null);t.a=l.exports},xJD8:function(e,t,a){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.281315fbb457c6885c78.js.map
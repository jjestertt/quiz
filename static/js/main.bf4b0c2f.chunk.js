(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{18:function(e,t,n){e.exports={Preloader:"Preloader_Preloader__hkvDg",inner:"Preloader_inner__3O2tq",one:"Preloader_one__3_8VF","cssload-rotate-one":"Preloader_cssload-rotate-one__2aB5T",two:"Preloader_two__22MmK","cssload-rotate-two":"Preloader_cssload-rotate-two__3YRrP",three:"Preloader_three__5M-0O","cssload-rotate-three":"Preloader_cssload-rotate-three__665J5"}},26:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__22aaR",open:"Drawer_open__EbHQ7",active:"Drawer_active__2aLCJ"}},31:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__1fJoi",open:"MenuToggle_open__33Jj8"}},34:function(e,t,n){e.exports={Button:"Button_Button__27nIK",error:"Button_error__2oC04",success:"Button_success__36jEY",primary:"Button_primary__27cMe"}},35:function(e,t,n){e.exports={Input:"Input_Input__QC66r",invalid:"Input_invalid__UdupQ"}},36:function(e,t,n){e.exports={Auth:"Auth_Auth__1wdql",authForm:"Auth_authForm__3RZ_u"}},37:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__2IG4x",QuizWrapper:"Quiz_QuizWrapper__2H7XH"}},38:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__1-bM-",Question:"ActiveQuiz_Question__2RJfg"}},39:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3XcvL",error:"AnswerItem_error__lqh-F",success:"AnswerItem_success__1Mprz"}},40:function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__2W6U8",error:"FinishedQuiz_error__2wW1G",success:"FinishedQuiz_success__1aq4d"}},51:function(e,t,n){e.exports={Layout:"Layout_Layout__2XCjj"}},52:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__36QFS"}},53:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__1k1kc"}},54:function(e,t,n){e.exports={Select:"Select_Select__2wesw"}},55:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__AE5Kf"}},57:function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__2D91W"}},64:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(24),i=n.n(s),c=n(19),o=n(49),u=n(3),l="quiz/FETCH_QUIZ_START",d="quiz/FETCH_QUIZ_SUCCESS",j="quiz/FETCH_QUIZ_BY_ID_SUCCESS",h="quiz/SET_QUIZ_ERROR",b="quiz/ANSWER_SET_STATE",p="quiz/FINISHED_QUIZ",v="quiz/NEXT_QUESTION",f="quiz/RESTART_QUIZ",m={error:null,isFetch:!1,quizes:[],results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{isFetch:!0});case d:return Object(u.a)(Object(u.a)({},e),{},{isFetch:!1,quizes:t.payload});case j:return Object(u.a)(Object(u.a)({},e),{},{isFetch:!1,quiz:t.payload});case h:return Object(u.a)(Object(u.a)({},e),{},{isFetch:!1,error:t.error});case b:return Object(u.a)(Object(u.a)({},e),{},{answerState:t.answerState});case p:return Object(u.a)(Object(u.a)({},e),{},{isFinished:!0});case v:return Object(u.a)(Object(u.a)({},e),{},{activeQuestion:e.activeQuestion+1});case f:return Object(u.a)(Object(u.a)({},e),{},{isFinished:!1,activeQuestion:0,answerState:null,results:[]});default:return e}},x=Object(c.combineReducers)({quiz:O}),_=(0,n(19).createStore)(x,Object(c.applyMiddleware)(o.a)),g=(n(64),n(4)),w=n(13),z=n(14),C=n(16),q=n(15),y=n(51),k=n.n(y),Q=n(31),S=n.n(Q),A=n(0),F=function(e){var t=[S.a.MenuToggle,"fa"];return e.isOpen?(t.push(S.a.open),t.push("fa-times")):t.push("fa-bars"),Object(A.jsx)("i",{className:t.join(" "),onClick:e.onToggle})},N=n(26),T=n.n(N),I=n(12),L=n(52),H=n.n(L),M=function(e){return Object(A.jsx)("div",{className:H.a.Backdrop,onClick:e.onClick})},E=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432",exact:!0},{to:"/quiz-creator",label:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1},{to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1}],R=function(e){Object(C.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(w.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).renderLinks=function(){return E.map((function(t,n){return Object(A.jsx)("li",{children:Object(A.jsx)(I.b,{exact:t.exact,to:t.to,activeClassName:T.a.active,onClick:e.props.onClick,children:t.label})},n)}))},e}return Object(z.a)(n,[{key:"render",value:function(){return Object(A.jsxs)(A.Fragment,{children:[this.props.isOpen&&Object(A.jsx)(M,{onClick:this.props.onClick}),Object(A.jsx)("nav",{className:T.a.Drawer+" "+(this.props.isOpen&&T.a.open),children:Object(A.jsx)("ul",{children:this.renderLinks()})})]})}}]),n}(a.a.Component),B=function(e){Object(C.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(w.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={menu:!1},e.menuToggleHandler=function(){e.setState({menu:!e.state.menu})},e.menuCloseHandler=function(){e.setState({menu:!1})},e}return Object(z.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("div",{className:k.a.Layout,children:[Object(A.jsx)(R,{isOpen:this.state.menu,onClick:this.menuCloseHandler}),Object(A.jsx)(F,{isOpen:this.state.menu,onToggle:this.menuToggleHandler}),Object(A.jsx)("main",{children:this.props.children})]})}}]),n}(a.a.Component),V=n(8),P=n.n(V),D=n(17),U=n(58),J=n(53),W=n.n(J),Z=n(34),X=n.n(Z),K=function(e){var t=[X.a.Button,X.a[e.type]];return Object(A.jsx)("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled,children:e.children})},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(u.a)(Object(u.a)({value:""},e),{},{validation:t,valid:!t,touched:!1})},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&n&&(n=""!==e.trim()),n},$=function(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t},ee=n(35),te=n.n(ee),ne=function(e){var t=e.type||"text",n=[te.a.Input],r=function(e){var t=e.touched,n=e.valid,r=e.shouldValidate;return!n&&r&&t};return r(e)&&n.push(te.a.invalid),Object(A.jsxs)("div",{className:n.join(" "),children:[Object(A.jsx)("label",{children:e.label}),Object(A.jsx)("input",{type:t,value:e.value,onChange:e.onChange}),r(e)&&Object(A.jsx)("span",{children:e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"})]})},re=n(54),ae=n.n(re),se=function(e){var t=e.label+Math.random();return Object(A.jsxs)("div",{className:ae.a.Select,children:[Object(A.jsx)("label",{htmlFor:t,children:e.label}),Object(A.jsx)("select",{id:t,value:e.value,onChange:e.onChange,children:e.options.map((function(e,t){return Object(A.jsx)("option",{value:e.value,children:e.text},t)}))})]})},ie=n(23),ce=n.n(ie),oe=ce.a.create({baseURL:"https://quiz-react-app-3094a-default-rtdb.firebaseio.com/"}),ue=function(e){return Y({label:"\u041e\u0442\u0432\u0435\u0442 ".concat(e),errorMessage:"\u0422\u0435\u043a\u0441\u0442 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})},le=function(){return{question:Y({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:ue(1),option2:ue(2),option3:ue(3),option4:ue(4)}},de=function(e){Object(C.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(w.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={rightAnswer:1,isFormValid:!1,quiz:[],formControls:le()},e.onChangeHandler=function(t,n){var r=Object(u.a)({},e.state.formControls),a=Object(u.a)({},r[n]);a.value=t,a.touched=!0,a.valid=G(a.value,a.validation),r[n]=a,e.setState({formControls:r,isFormValid:$(r)})},e.onSubmitHandler=function(e){e.preventDefault()},e.addQuestionHandler=function(t){t.preventDefault();var n=Object(U.a)(e.state.quiz),r=n.length+1,a=e.state.formControls,s=a.question,i=a.option1,c=a.option2,o=a.option3,u=a.option4;n.push({id:r,question:s.value,rightAnswer:+e.state.rightAnswer,answers:[{text:i.value,id:i.id},{text:c.value,id:c.id},{text:o.value,id:o.id},{text:u.value,id:u.id}]}),e.setState({quiz:n,rightAnswer:1,isFormValid:!1,formControls:le()})},e.createQuizHandler=function(){var t=Object(D.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,oe.post("quizes.json",e.state.quiz);case 4:e.setState({rightAnswer:1,isFormValid:!1,formControls:le(),quiz:[]}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),alert("\u041a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430");case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),e.renderFormControls=function(){return Object.keys(e.state.formControls).map((function(t,n){var r=e.state.formControls[t];return Object(A.jsxs)(a.a.Fragment,{children:[Object(A.jsx)(ne,{label:r.label,errorMessage:r.errorMessage,valid:r.valid,shouldValidate:!!r.validation,touched:r.touched,value:r.value,onChange:function(n){e.onChangeHandler(n.target.value,t)}}),0===n&&Object(A.jsx)("hr",{})]},n)}))},e.changeAnswerHandler=function(t){e.setState({rightAnswer:t.target.value})},e}return Object(z.a)(n,[{key:"render",value:function(){var e=Object(A.jsx)(se,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswer,onChange:this.changeAnswerHandler,options:[{value:1,text:1},{value:2,text:2},{value:3,text:3},{value:4,text:4}]});return Object(A.jsx)("div",{className:W.a.QuizCreator,children:Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{className:"mainTitle",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"}),Object(A.jsxs)("form",{onSubmit:this.onSubmitHandler,children:[this.renderFormControls(),e,Object(A.jsx)(K,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"}),Object(A.jsx)(K,{type:"success",onClick:this.createQuizHandler,disabled:0===this.state.quiz.length,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"}),Object(A.jsxs)("div",{children:["\u0412\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e ",this.state.quiz.length]})]})]})})}}]),n}(a.a.Component),je=n(11),he=n(55),be=n.n(he),pe=n(20),ve=function(){return{type:l}},fe=function(e){return{type:d,payload:e}},me=function(e){return{type:j,payload:e}},Oe=function(e){return{type:h,error:e}},xe=function(e){return{type:b,answerState:e}},_e=function(e){return function(t,n){var r=n().quiz;if(r.answerState){var a=Object.keys(r.answerState)[0];if("success"===r.answerState[a])return}var s=r.quiz[r.activeQuestion],i=r.results;if(s.rightAnswer===e){var c;i[s.id]||(i[s.id]="success"),t(xe((c={},Object(pe.a)(c,e,"success"),Object(pe.a)(c,"results",i),c)));var o=window.setTimeout((function(){t(xe(null)),l()?t({type:p}):t({type:v}),window.clearTimeout(o)}),1e3)}else{var u;i[s.id]="error",t(xe((u={},Object(pe.a)(u,e,"error"),Object(pe.a)(u,"results",i),u)))}var l=function(){return r.activeQuestion+1===r.quiz.length}}},ge=n(18),we=n.n(ge),ze=function(e){return Object(A.jsxs)("div",{className:we.a.Preloader,children:[Object(A.jsx)("div",{className:we.a.inner+" "+we.a.one}),Object(A.jsx)("div",{className:we.a.inner+" "+we.a.two}),Object(A.jsx)("div",{className:we.a.inner+" "+we.a.three})]})},Ce=function(e){var t=Object(je.b)(),n=Object(je.c)((function(e){return e.quiz.isFetch})),a=Object(je.c)((function(e){return e.quiz.quizes}));Object(r.useEffect)((function(){t(function(){var e=Object(D.a)(P.a.mark((function e(t){var n,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ve()),e.prev=1,e.next=4,oe.get("quizes.json");case 4:n=e.sent,r=Object.keys(n.data).map((function(e){return{id:e}})),t(fe(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(Oe(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[t]);return Object(A.jsx)("div",{className:be.a.QuizList,children:Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{className:"mainTitle",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"}),n?Object(A.jsx)(ze,{}):Object(A.jsx)("ul",{children:a?a.map((function(e,t){return Object(A.jsx)("li",{children:Object(A.jsxs)(I.b,{to:"/quiz/"+e.id,children:["\u0422\u0435\u0441\u0442 \u2116 ",t+1]})},t)})):Object(A.jsxs)("div",{style:{color:"white",textAlign:"center"},children:[Object(A.jsx)("h3",{style:{marginBottom:"0"},children:"\u0422\u0435\u0441\u0442\u043e\u0432 \u043d\u0435\u0442"}),Object(A.jsx)("h4",{style:{marginTop:"0"},children:"\u0411\u0443\u0434\u0443\u0442 \u043f\u043e\u0437\u0436\u0435"})]})})]})})},qe=n(36),ye=n.n(qe),ke=n(56),Qe=n.n(ke),Se=function(e){Object(C.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(w.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"",valid:!1,touched:!1,validation:{required:!0,email:!0,maxLength:25}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"",valid:!1,touched:!1,validation:{required:!0,minLength:6,maxLength:50}}}},e.submitHandler=function(e){e.preventDefault()},e.validateControl=function(e,t){if(!t)return!0;var n=!0;if(t.required){if(""===e.trim())return{isValid:!1,errorMessage:"\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"};n=!0}if(t.email){if(!Qe.a.email(e))return{isValid:!1,errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email"};n=!0}if(t.minLength){if(!(e.trim().length>=t.minLength))return{isValid:!1,errorMessage:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 ".concat(t.minLength," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")};n=!0}if(t.maxLength){if(!(e.trim().length<t.maxLength))return{isValid:!1,errorMessage:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 ".concat(t.maxLength," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")};n=!0}return{isValid:n}},e.onChangeHandler=function(t,n){var r=Object(u.a)({},e.state.formControls),a=Object(u.a)({},r[n]);a.value=t.target.value,a.touched=!0;var s=e.validateControl(a.value,a.validation);a.valid=s.isValid,a.errorMessage=s.errorMessage,r[n]=a;var i=!0;Object.keys(r).forEach((function(e){i=r[e].valid&&i})),e.setState({formControls:r,isFormValid:i})},e.inputRenderHandler=function(){return Object.keys(e.state.formControls).map((function(t,n){var r=e.state.formControls[t];return Object(A.jsx)(ne,{value:r.value,onChange:function(n){e.onChangeHandler(n,t)},type:r.type,label:r.label,errorMessage:r.errorMessage,valid:r.valid,touched:r.touched,shouldValidate:!!r.validation},t+n)}))},e.loginHandler=Object(D.a)(P.a.mark((function t(){var n,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:e.state.formControls.email.value,password:e.state.formControls.password.value,returnSecureToken:!0},t.prev=1,t.next=4,ce.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBw1voB5XeccAUeeQByIgJKRRhcjoNOR3I",n);case 4:r=t.sent,console.log(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.registerHandler=Object(D.a)(P.a.mark((function t(){var n,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:e.state.formControls.email.value,password:e.state.formControls.password.value,returnSecureToken:!0},t.prev=1,t.next=4,ce.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBw1voB5XeccAUeeQByIgJKRRhcjoNOR3I",n);case 4:r=t.sent,console.log(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e}return Object(z.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{className:ye.a.Auth,children:Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{className:"mainTitle",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(A.jsxs)("form",{className:ye.a.authForm,onSubmit:this.submitHandler,children:[this.inputRenderHandler(),Object(A.jsx)(K,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(A.jsx)(K,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})}}]),n}(a.a.Component),Ae=n(37),Fe=n.n(Ae),Ne=n(38),Te=n.n(Ne),Ie=n(57),Le=n.n(Ie),He=n(39),Me=n.n(He),Ee=function(e){var t=[Me.a.AnswerItem];return e.answerState&&t.push(Me.a[e.answerState]),Object(A.jsx)("li",{className:t.join(" "),onClick:function(){e.onAnswerClick(e.answer.id)},children:e.answer.text})},Re=function(e){return Object(A.jsx)("ul",{className:Le.a.AnswersList,children:e.answers.map((function(t,n){return Object(A.jsx)(Ee,{answer:t,onAnswerClick:e.onAnswerClick,answerState:e.answerState?e.answerState[t.id]:null},n)}))})},Be=Object(g.f)((function(e){return Object(A.jsxs)("div",{className:Te.a.ActiveQuiz,children:[Object(A.jsxs)("p",{className:Te.a.Question,children:[Object(A.jsxs)("span",{children:[Object(A.jsxs)("strong",{children:[e.questionNumber,"."]}),"\xa0 ",e.question]}),Object(A.jsxs)("small",{children:[e.questionNumber," \u0438\u0437 ",e.quizLengh]})]}),Object(A.jsx)(Re,{answers:e.answers,onAnswerClick:e.onAnswerClick,answerState:e.answerState})]})})),Ve=n(40),Pe=n.n(Ve),De=Object(g.f)((function(e){var t=Object.keys(e.results).filter((function(t){return"success"===e.results[t]}));return Object(r.useEffect)((function(){return e.onRestart})),Object(A.jsxs)("div",{className:Pe.a.FinishedQuiz,children:[Object(A.jsx)("ul",{children:e.quiz.map((function(t,n){var r=["fa","success"===e.results[t.id]?"fa fa-check":"fa fa-times",Pe.a[e.results[t.id]]];return Object(A.jsxs)("li",{children:[Object(A.jsx)("strong",{children:n+1}),"\xa0",t.question,Object(A.jsx)("i",{className:r.join(" ")})]},t.id)}))}),Object(A.jsxs)("p",{children:["\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t.length," \u0438\u0437 ",e.quizLengh]}),Object(A.jsxs)("div",{children:[Object(A.jsx)(K,{onClick:e.onRestart,type:"primary",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),Object(A.jsx)(K,{onClick:function(){e.history.push({pathname:"/"})},type:"success",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438\u0438 \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0442\u0435\u0441\u0442\u043e\u0432"})]})]})})),Ue=function(e){var t=Object(je.c)((function(e){return{results:e.quiz.results,isFinished:e.quiz.isFinished,activeQuestion:e.quiz.activeQuestion,answerState:e.quiz.answerState,quiz:e.quiz.quiz,isFetch:e.quiz.isFetch}})),n=Object(je.b)();return Object(r.useEffect)((function(){n(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=Object(D.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(ve()),t.prev=1,t.next=4,oe.get("quizes/".concat(e,".json"));case 4:r=t.sent,n(me(r.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(Oe(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(e.match.params.id))}),[n,e.match.params.id]),Object(A.jsx)("div",{className:Fe.a.Quiz,children:Object(A.jsxs)("div",{className:Fe.a.QuizWrapper,children:[Object(A.jsx)("h1",{className:"mainTitle",children:"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"}),t.isFetch||!t.quiz?Object(A.jsx)(ze,{}):Object(A.jsx)(A.Fragment,{children:t.isFinished?Object(A.jsx)(De,{quizLengh:t.quiz.length,quiz:t.quiz,results:t.results,onRestart:function(){n({type:f})}}):Object(A.jsx)(Be,{question:t.quiz[t.activeQuestion].question,answers:t.quiz[t.activeQuestion].answers,onAnswerClick:function(e){n(_e(e))},quizLengh:t.quiz.length,questionNumber:t.activeQuestion+1,answerState:t.answerState})})]})})};var Je=function(){return Object(A.jsx)(B,{children:Object(A.jsxs)(g.c,{children:[Object(A.jsx)(g.a,{path:"/auth",component:Se}),Object(A.jsx)(g.a,{path:"/quiz-creator",component:de}),Object(A.jsx)(g.a,{path:"/quiz/:id",component:Ue}),Object(A.jsx)(g.a,{exact:!0,path:"/",component:Ce})]})})},We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))},Ze=Object(A.jsx)(je.a,{store:_,children:Object(A.jsx)(I.a,{children:Object(A.jsx)(Je,{})})});i.a.render(Object(A.jsx)(a.a.StrictMode,{children:Ze}),document.getElementById("root")),We()}},[[89,1,2]]]);
//# sourceMappingURL=main.bf4b0c2f.chunk.js.map
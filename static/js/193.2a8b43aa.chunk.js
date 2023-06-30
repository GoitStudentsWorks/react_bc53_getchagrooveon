"use strict";(self.webpackChunkMoney_Guard_application=self.webpackChunkMoney_Guard_application||[]).push([[193],{6485:function(s,e,a){a.d(e,{B:function(){return n}});a(2791);var r=a(184),n=function(s){var e=s.className;return(0,r.jsx)("svg",{id:"icon_email",viewBox:"0 0 32 32",className:e,children:(0,r.jsx)("path",{fill:"#fff",opacity:"0.4",d:"M36 0h-32c-2.2 0-3.98 1.8-3.98 4l-0.020 24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM36 8l-16 10-16-10v-4l16 10 16-10v4z"})})}},5827:function(s,e,a){a.d(e,{_:function(){return n}});a(2791);var r=a(184),n=function(s){var e=s.className;return(0,r.jsx)("svg",{id:"icon_lock",viewBox:"0 0 32 32",className:e,children:(0,r.jsx)("path",{fill:"#fff",opacity:"0.4",d:"M21.333 10.667h-1.524v-3.048c0-4.206-3.413-7.619-7.619-7.619s-7.619 3.413-7.619 7.619v3.048h-1.524c-1.676 0-3.048 1.371-3.048 3.048v15.238c0 1.676 1.371 3.048 3.048 3.048h18.286c1.676 0 3.048-1.371 3.048-3.048v-15.238c0-1.676-1.371-3.048-3.048-3.048zM12.19 24.381c-1.676 0-3.048-1.371-3.048-3.048s1.371-3.048 3.048-3.048c1.676 0 3.048 1.371 3.048 3.048s-1.371 3.048-3.048 3.048zM16.914 10.667h-9.448v-3.048c0-2.606 2.118-4.724 4.724-4.724s4.724 2.118 4.724 4.724v3.048z"})})}},1193:function(s,e,a){a.r(e),a.d(e,{default:function(){return y}});var r=a(4925),n={container:"Registration_container__VhNVt",wrapper:"Registration_wrapper__SjUXv",screen:"Registration_screen__2QKm3",logo:"Registration_logo__VEhwj",title:"Registration_title__MJlCo",login__field:"Registration_login__field__sJKxS",password_srtength:"Registration_password_srtength__TMP1Z",icon_user:"Registration_icon_user__oKzzh",icon_lock:"Registration_icon_lock__Qo3OP",icon_email:"Registration_icon_email__moL3K",login__input:"Registration_login__input__e9f3x",login__submit:"Registration_login__submit__6Kq7Y",login__link:"Registration_login__link__hJlYA",error_message:"Registration_error_message__PtB1R",logoSvg:"Registration_logoSvg__rOTK8"},i=a(9434),o=a(8007),l=a(5705),t=a(1087),c=a(9414),_=a(572),d=(a(2791),a(184)),m=function(s){var e=s.className;return(0,d.jsx)("svg",{id:"icon_user",viewBox:"0 0 32 32",className:e,children:(0,d.jsx)("path",{fill:"#fff",opacity:"0.4",d:"M0 3.556v24.889c0 1.956 1.582 3.556 3.556 3.556h24.889c1.956 0 3.556-1.6 3.556-3.556v-24.889c0-1.956-1.6-3.556-3.556-3.556h-24.889c-1.973 0-3.556 1.6-3.556 3.556zM21.333 10.667c0 2.951-2.382 5.333-5.333 5.333s-5.333-2.382-5.333-5.333c0-2.951 2.382-5.333 5.333-5.333s5.333 2.382 5.333 5.333zM5.333 24.889c0-3.556 7.111-5.511 10.667-5.511s10.667 1.956 10.667 5.511v1.778h-21.333v-1.778z"})})},u=a(5827),h=a(6485),g="PasswordStrengthIndicator_indicator__xj-pg",p="PasswordStrengthIndicator_empty__OAPnY",v="PasswordStrengthIndicator_weak__GHfk3",w="PasswordStrengthIndicator_medium__BKSko",x="PasswordStrengthIndicator_strong__xD1JH",f="PasswordStrengthIndicator_super_strong__CpIy9",j=function(s){var e=s.password,a=function(){var s=e.length,a=/[A-Z]/.test(e),r=/[a-z]/.test(e),n=/[!@#$%^&*(),.?":{}|<>]/.test(e);return s>=8&&a&&r&&n?f:s>=8&&a&&r?x:s>=6&&(a||r)?w:s>0?v:p}();return(0,d.jsx)("div",{className:g,children:(0,d.jsx)("div",{className:a})})},N=["confirmPassword"],P=o.Ry({username:o.Z_().required("Please enter your name"),email:o.Z_().email("Invalid email address").required("Please enter your email"),password:o.Z_().required("Please enter your password").min(6,"Password must be at least 6 characters").max(12,"Password should be no longer than 12 characters"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match").required("Please confirm your password")}),y=function(){var s=(0,i.I0)(),e=(0,l.TA)({initialValues:{username:"",email:"",password:"",confirmPassword:""},validationSchema:P,onSubmit:function(e){e.confirmPassword;var a=(0,r.Z)(e,N);s((0,c.a$)(a))}});return(0,d.jsx)("section",{className:n.wrapper,children:(0,d.jsx)("div",{className:n.container,children:(0,d.jsx)("div",{className:n.screen,children:(0,d.jsxs)("div",{className:n.screen__content,children:[(0,d.jsx)(t.OL,{to:"/",className:n.logo,children:(0,d.jsx)(_.f,{className:n.logoSvg})}),(0,d.jsx)("h1",{className:n.title,children:"Money Guard"}),(0,d.jsxs)("form",{className:n.login,onSubmit:e.handleSubmit,children:[(0,d.jsxs)("div",{className:n.login__field,children:[(0,d.jsx)(h.B,{className:n.icon_email}),(0,d.jsx)("input",{type:"email",name:"email",placeholder:"E-mail",autoComplete:"username",className:n.login__input,onChange:e.handleChange,value:e.values.email})]}),e.touched.email&&e.errors.email?(0,d.jsx)("div",{className:n.error_message,children:e.errors.email}):null,(0,d.jsxs)("div",{className:n.login__field,children:[(0,d.jsx)("span",{className:n.user_icon__field,children:(0,d.jsx)(u._,{className:n.icon_lock})}),(0,d.jsx)("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"new-password",className:n.login__input,onChange:e.handleChange,value:e.values.password})]}),e.touched.password&&e.errors.password?(0,d.jsx)("div",{className:n.error_message,children:e.errors.password}):null,(0,d.jsxs)("div",{className:n.login__field,children:[(0,d.jsx)("span",{className:n.user_icon__field,children:(0,d.jsx)(u._,{className:n.icon_lock})}),(0,d.jsx)("input",{type:"password",name:"confirmPassword",placeholder:"Confirm password",autoComplete:"new-password",className:n.login__input,onChange:e.handleChange,value:e.values.confirmPassword})]}),(0,d.jsx)("div",{className:n.password_srtength,children:(0,d.jsx)(j,{password:e.values.password})}),(0,d.jsx)("div",{className:n.strong_passworg}),e.touched.confirmPassword&&e.errors.confirmPassword?(0,d.jsx)("div",{className:n.error_message,children:e.errors.confirmPassword}):null,(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:n.login__field,children:[(0,d.jsx)("span",{className:n.user_icon__field,children:(0,d.jsx)(m,{className:n.icon_user})}),(0,d.jsx)("input",{type:"text",name:"username",placeholder:"First name",autoComplete:"username",className:n.login__input,onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.username})]}),e.touched.username&&e.errors.username?(0,d.jsx)("div",{className:n.error_wrapper,children:(0,d.jsx)("div",{className:n.error_message,children:e.errors.username})}):null]}),(0,d.jsx)("button",{type:"submit",className:n.login__submit,children:(0,d.jsx)("span",{className:n.button__text,children:"Register"})}),(0,d.jsx)(t.rU,{to:"/login",children:(0,d.jsx)("div",{className:n.login__link,children:"Log in"})})]})]})})})})}}}]);
//# sourceMappingURL=193.2a8b43aa.chunk.js.map
import{d as c,r as t,u as q,b as B,i as C,o as p,c as w,e as s,w as f,k as P,f as k,h as S,g as v}from"./index-4c45d05b.js";import{I as m,_ as g}from"./Button.vue_vue_type_script_setup_true_lang-12dcff61.js";const j=["onSubmit"],E={key:0,class:"w-full flex justify-start items-start cursor-pointer underline"},F=c({__name:"RegisterForm",props:{userUpdate:{},update:{type:Boolean}},emits:["onUpdateProfile"],setup(I,{emit:x}){const o=I,V=t(!1),y=t(!1),b=t(!1),U=t(!1),u=t(""),n=t(""),r=t(""),d=t(""),N=q();B(()=>{var a,e,i,l;o.update&&(r.value=((a=o.userUpdate)==null?void 0:a.name)||"",u.value=((e=o.userUpdate)==null?void 0:e.email)||"",d.value=((i=o.userUpdate)==null?void 0:i.phone)||"",n.value=((l=o.userUpdate)==null?void 0:l.password)||"")});const R=()=>{const a={name:r.value,phone:d.value,email:u.value,password:n.value};if(localStorage.setItem("user",JSON.stringify(a)),o.update){x("onUpdateProfile",a);return}N.push("/")};return(a,e)=>{const i=C("RouterLink");return p(),w("form",{onSubmit:S(R,["prevent"]),class:"w-full flex flex-col items-center justify-center gap-6"},[s(m,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l),type:"text",label:"Введите имя",required:!0,onIsValid:e[1]||(e[1]=l=>y.value=l)},null,8,["modelValue"]),s(m,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=l=>d.value=l),type:"tel",label:"Введите номер телефона",required:!0,onIsValid:e[3]||(e[3]=l=>V.value=l)},null,8,["modelValue"]),s(m,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=l=>u.value=l),type:"email",label:"Введите email",required:!0,onIsValid:e[5]||(e[5]=l=>b.value=l)},null,8,["modelValue"]),s(m,{modelValue:n.value,"onUpdate:modelValue":e[6]||(e[6]=l=>n.value=l),type:"password",label:"Введите пароль",required:!0,onIsValid:e[7]||(e[7]=l=>U.value=l)},null,8,["modelValue"]),a.update?P("",!0):(p(),w("div",E,[s(i,{to:"/login"},{default:f(()=>[v("Уже есть аккаунт ?")]),_:1})])),a.update?(p(),k(g,{key:1,type:"submit"},{default:f(()=>[v(" Обновить ")]),_:1})):(p(),k(g,{key:2,type:"submit",disabled:!b.value||!U.value||!y.value||!V.value},{default:f(()=>[v(" Регистрироваться ")]),_:1},8,["disabled"]))],40,j)}}});export{F as _};

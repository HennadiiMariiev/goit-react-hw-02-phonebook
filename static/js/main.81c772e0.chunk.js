(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{22:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var a,r,o,c,i,s,l,d,f,m,b,u,p,h,g,j,x,O,w=t(0),C=t.n(w),y=t(5),v=t.n(y),k=(t(22),t(4)),z=t(11),S=t(12),I=t(17),A=t(16),F=t(2),N=t(3),q=N.a.form(a||(a=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n\n  margin-bottom: 1.5rem;\n"]))),H=N.a.h1(r||(r=Object(F.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  color: #2db57f;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n\n  text-shadow: 1px 1px 1px -2px rgba(0, 0, 0, 0.56);\n"]))),P=N.a.label(o||(o=Object(F.a)(["\n  text-transform: uppercase;\n  font-size: 1.25rem;\n  font-weight: 600;\n\n  color: #2db57f;\n\n  display: flex;\n  align-self: flex-end;\n  align-items: center;\n  justify-content: space-between;\n\n  &:not(:last-of-type) {\n    margin-bottom: 1rem;\n  }\n\n  &:last-of-type {\n    margin-bottom: 2rem;\n  }\n"]))),B=N.a.input(c||(c=Object(F.a)(["\n  margin-left: 0.75rem;\n  display: block;\n\n  min-width: 330px;\n  height: 2rem;\n  font-size: 1.25rem;\n  font-weight: 400;\n  padding: 0.5rem 0.5rem 0.25rem;\n\n  border: 0;\n  border-bottom: 1px solid #c15ae0;\n  color: #1f2120;\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;\n  }\n\n  &:focus {\n    outline-color: #c15ae0;\n  }\n"]))),L=N.a.button(i||(i=Object(F.a)(["\n  width: 250px;\n  align-self: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid #c15ae0;\n  border-radius: 0.5rem;\n\n  font-size: 1.5rem;\n\n  text-transform: uppercase;\n\n  color: #c15ae0;\n  background: transparent;\n  cursor: pointer;\n  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    transform: translateY(-0.15rem);\n    box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.56);\n  }\n"]))),R=t(1),J=function(n){var e=n.onNewContactAdd,t=n.onInputChange;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(H,{children:"Phonebook"}),Object(R.jsxs)(q,{onSubmit:function(n){n.preventDefault(),e(n)},children:[Object(R.jsxs)(P,{children:["Name",Object(R.jsx)(B,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Please, type contact name",required:!0,onChange:t})]}),Object(R.jsxs)(P,{children:["Number",Object(R.jsx)(B,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Please, type contact number",required:!0,onChange:t})]}),Object(R.jsx)(L,{type:"submit",children:"Add contact"})]})]})},T=N.a.h2(s||(s=Object(F.a)(["\n  color: #2db57f;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n"]))),Z=N.a.div(l||(l=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  width: 100%;\n\n  padding: 1rem 1.5rem;\n  background-color: #d6d6d6;\n"]))),D=N.a.button(d||(d=Object(F.a)(["\n  align-self: center;\n  padding: 0.25rem 0.75rem;\n  border: 1px solid #c15ae0;\n  border-radius: 0.5rem;\n\n  font-size: 0.75rem;\n\n  text-transform: uppercase;\n\n  color: #c15ae0;\n  background: #ffffff;\n  cursor: pointer;\n  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    transform: translateY(-0.1rem);\n    box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.56);\n  }\n"]))),E=N.a.ul(f||(f=Object(F.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  list-style: none;\n"]))),M=N.a.li(m||(m=Object(F.a)(["\n  width: 100%;\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n\n  background-color: #ffffff;\n\n  padding: 0.5rem 1rem;\n\n  &:not(:last-of-type) {\n    margin-bottom: 1rem;\n  }\n"]))),V=N.a.p(b||(b=Object(F.a)(["\n  font-size: 1rem;\n  font-weight: 600;\n\n  display: block;\n  min-width: 40%;\n"]))),Y=N.a.p(u||(u=Object(F.a)(["\n  font-size: 1rem;\n  font-weight: 600;\n  display: block;\n  min-width: 35%;\n  color: #2db57f;\n"]))),G=function(n){var e=n.contacts,t=n.deleteContact,a=e.map((function(n){var e=n.name,a=n.number,r=n.id;return Object(R.jsxs)(M,{children:[Object(R.jsx)(V,{children:e}),Object(R.jsx)(Y,{children:a}),Object(R.jsx)(D,{onClick:t,value:r,children:"Remove"})]},r)}));return Object(R.jsxs)(Z,{children:[Object(R.jsx)(T,{children:"Contacts"}),Object(R.jsx)(E,{children:a})]})},K=N.a.label(p||(p=Object(F.a)(["\n  text-transform: uppercase;\n  font-size: 1.25rem;\n  font-weight: 600;\n\n  color: #2db57f;\n\n  display: flex;\n  align-self: flex-end;\n  align-items: center;\n  justify-content: space-between;\n\n  &:not(:last-of-type) {\n    margin-bottom: 1rem;\n  }\n\n  &:last-of-type {\n    margin-bottom: 2rem;\n  }\n"]))),U=N.a.input(h||(h=Object(F.a)(["\n  margin-left: 0.75rem;\n  display: block;\n  min-width: 350px;\n  height: 2rem;\n  font-size: 1.25rem;\n  font-weight: 400;\n  padding: 0.5rem 0.5rem 0.25rem;\n\n  border: 0;\n  border-bottom: 1px solid #c15ae0;\n  color: #1f2120;\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;\n  }\n\n  &:focus {\n    outline-color: #c15ae0;\n  }\n\n  &:disabled {\n    border: 1px solid #e1e8e5;\n  }\n"]))),W=function(n){var e=n.onFilterChange,t=n.filter,a=n.disabled;return Object(R.jsx)("div",{children:Object(R.jsxs)(K,{children:["Search",Object(R.jsx)(U,{type:"text",name:"search",placeholder:"Please, type search name",value:t,onChange:e,disabled:a})]})})},$=N.a.label(g||(g=Object(F.a)(["\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: 600;\n\n  color: #2db57f;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-bottom: 1.5rem;\n"]))),Q=N.a.input(j||(j=Object(F.a)(["\n  margin-right: 0.5rem;\n  font-size: 1.5rem;\n"]))),X=function(n){var e=n.onHardCodedCheckboxChange;return Object(R.jsxs)($,{children:[Object(R.jsx)(Q,{type:"checkbox",name:"useHardCoded",onClick:e}),"Use hard-coded contacts"]})},_=t(7),nn=t(29),en=N.a.section(x||(x=Object(F.a)(["\n  background-color: #ffffff;\n  border: 1px solid #c15ae0;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 1.5rem;\n\n  width: 100%;\n\n  box-shadow: 7px 7px 15px -8px rgba(0, 0, 0, 0.56);\n"]))),tn=N.a.p(O||(O=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100%;\n\n  padding: 1rem 1.5rem;\n  color: #fafafa;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 1.5rem;\n\n  background-color: #d6d6d6;\n"]))),an=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"Bill Gates",number:"555-55-55"},{id:"id-6",name:"Ryan Reinolds",number:"757-13-20"},{id:"id-7",name:"Wes Borland",number:"111-22-33"}],rn=(t(26),function(n){Object(I.a)(t,n);var e=Object(A.a)(t);function t(n){var a;return Object(z.a)(this,t),(a=e.call(this,n)).isValidInput=function(n){return null!==n.target.value.match(n.target.pattern)||0===n.target.value.length},a.onInputChange=function(n){a.isValidInput(n)?n.target.style="background-color: transparent;":n.target.style="background-color: #f7d7d7;"},a.isNameInContacts=function(n){return 0!==a.state.contacts.filter((function(e){return e.name===n})).length},a.clearInputs=function(n){n.target.querySelector("[name='name']").value="",n.target.querySelector("[name='number']").value=""},a.addContact=function(n){var e=n.target.querySelector("[name='name']").value,t=n.target.querySelector("[name='number']").value;if(a.isNameInContacts(e)){!function(n){_.b.warn('There is an existing contact with name "'.concat(n,'"!'))}(e)}else{var r=Object(nn.a)();a.setState({contacts:[].concat(Object(k.a)(a.state.contacts),[{name:e,number:t,id:r}])});!function(n){_.b.success('New contact "'.concat(n,'" was added!'))}(e),a.clearInputs(n)}},a.deleteContact=function(n){var e=n.target.value;a.setState({filter:"",contacts:Object(k.a)(a.state.contacts.filter((function(n){return n.id!==e})))})},a.onFilterChange=function(n){a.setState({filter:n.target.value})},a.getHardCodedContacts=function(n){n.target.checked?a.setState({contacts:[].concat(Object(k.a)(a.state.contacts),Object(k.a)(an))}):a.setState({contacts:a.state.contacts.filter((function(n){return!an.includes(n)}))})},a.filterContacts=function(){if(""===a.state.filter)return a.state.contacts;var n=a.state.filter.toLowerCase();return a.state.contacts.filter((function(e){return e.name.toLowerCase().includes(n)}))},a.state={contacts:[],filter:""},a}return Object(S.a)(t,[{key:"render",value:function(){var n=this.filterContacts();return Object(R.jsxs)(en,{children:[Object(R.jsx)(J,{onNewContactAdd:this.addContact,onInputChange:this.onInputChange}),Object(R.jsx)(X,{onHardCodedCheckboxChange:this.getHardCodedContacts}),Object(R.jsx)(W,{onFilterChange:this.onFilterChange,value:this.state.filter,disabled:!this.state.contacts.length}),0===n.length?Object(R.jsx)(tn,{children:"No contacts..."}):Object(R.jsx)(G,{contacts:n,deleteContact:this.deleteContact}),Object(R.jsx)(_.a,{})]})}}]),t}(C.a.Component)),on=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),a(n),r(n),o(n),c(n)}))};v.a.render(Object(R.jsx)(C.a.StrictMode,{children:Object(R.jsx)(rn,{})}),document.getElementById("root")),on()}},[[27,1,2]]]);
//# sourceMappingURL=main.81c772e0.chunk.js.map
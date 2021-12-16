(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={addForm:"AddForm_addForm__kOtUI",form:"AddForm_form__22d7F",label:"AddForm_label__36PPu",input:"AddForm_input__PIxgA",button:"AddForm_button__3yjEJ"}},19:function(t,e,n){"use strict";n.r(e);var a=n(2),s=n.n(a),c=n(6),r=n.n(c),i=n(10),o=n(7),l=n(8),m=n(9),u=n(12),d=n(11),b=n(1),j=n.n(b),p=n(0),h=function(t){var e=t.input,n=t.submit,a=t.value;return Object(p.jsxs)("section",{className:j.a.addForm,children:[Object(p.jsxs)("form",{className:j.a.form,children:[Object(p.jsx)("label",{className:j.a.label,children:"Name:"}),Object(p.jsx)("input",{className:j.a.input,type:"text",name:"name",value:a.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:e})]}),Object(p.jsxs)("form",{className:j.a.form,children:[Object(p.jsx)("label",{className:j.a.label,children:"Tel:"}),Object(p.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:a.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:e})]}),Object(p.jsx)("button",{className:j.a.button,type:"submit",onClick:n,children:"Add contact"})]})},f=n(4),_=n.n(f),x=function(t){var e=t.filter,n=t.input;return Object(p.jsxs)("form",{className:_.a.form,children:[Object(p.jsx)("label",{className:_.a.label,children:"Find contact by name: "}),Object(p.jsx)("input",{className:_.a.input,type:"text",name:"filter",value:e,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})},O=n(3),C=n.n(O),N=function(t){var e=t.updatedContacts,n=t.deleteContact;return Object(p.jsx)("section",{className:C.a.contactList,children:Object(p.jsx)("ul",{className:C.a.list,children:e.map((function(t){return Object(p.jsxs)("li",{className:C.a.item,children:[Object(p.jsxs)("p",{className:C.a.name,children:[t.name,":"]}),Object(p.jsx)("p",{className:C.a.number,children:t.number}),Object(p.jsx)("button",{className:C.a.button,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})},A=n(13),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.inputChange=function(e){t.setState(Object(o.a)({},e.target.name,e.target.value))},t.submit=function(){if(t.state.contacts.find((function(e){return e.name===t.state.name})))alert("".concat(t.state.name," existing name"));else{var e={id:Object(A.a)(),name:t.state.name,number:t.state.number};t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}})),t.setState({name:"",number:""})}},t.updateContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(m.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(h,{submit:this.submit,input:this.inputChange,value:this.state}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(x,{filter:this.state.filter,input:this.inputChange}),Object(p.jsx)(N,{updatedContacts:this.updateContacts(),deleteContact:this.deleteContact})]})}}]),n}(a.Component),y=g;r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={contactList:"ContactList_contactList__1mUs4",list:"ContactList_list__1KdoH",item:"ContactList_item__1WU-h",name:"ContactList_name__3X1cc",number:"ContactList_number__Zos5S",button:"ContactList_button__2VUfj"}},4:function(t,e,n){t.exports={form:"Filter_form__1D5nS",label:"Filter_label__2X99N",input:"Filter_input__sy-yS"}}},[[19,1,2]]]);
//# sourceMappingURL=main.54cb98e9.chunk.js.map
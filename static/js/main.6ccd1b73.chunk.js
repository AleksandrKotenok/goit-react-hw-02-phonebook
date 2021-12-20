(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(10),r=n.n(c),i=n(12),o=n(4),l=n(5),u=n(7),m=n(6),d=n(11),b=n(2),h=n.n(b),j=n(0),p=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={name:"",number:""},t.inputChange=function(e){t.setState(Object(d.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.submit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("section",{className:h.a.addForm,children:Object(j.jsxs)("form",{className:h.a.form,onSubmit:this.onSubmit,children:[Object(j.jsx)("label",{className:h.a.label,children:"Name:"}),Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.inputChange}),Object(j.jsx)("label",{className:h.a.label,children:"Tel:"}),Object(j.jsx)("input",{className:h.a.input,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.inputChange}),Object(j.jsx)("button",{className:h.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),f=n(8),_=n.n(f),O=function(t){var e=t.filter,n=t.input;return Object(j.jsxs)("form",{className:_.a.form,children:[Object(j.jsx)("label",{className:_.a.label,children:"Find contact by name: "}),Object(j.jsx)("input",{className:_.a.input,type:"text",name:"filter",value:e,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})},C=n(3),x=n.n(C),g=function(t){var e=t.updatedContacts,n=t.deleteContact;return Object(j.jsx)("section",{className:x.a.contactList,children:Object(j.jsx)("ul",{className:x.a.list,children:e.map((function(t){return Object(j.jsxs)("li",{className:x.a.item,children:[Object(j.jsxs)("p",{className:x.a.name,children:[t.name,":"]}),Object(j.jsx)("p",{className:x.a.number,children:t.number}),Object(j.jsx)("button",{className:x.a.button,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})},v=n(13),y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.submit=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name===n})))alert("".concat(n," existing name"));else{var s={id:Object(v.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[s].concat(Object(i.a)(e))}}))}},t.updateContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterChange=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{submit:this.submit}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(O,{filter:this.state.filter,input:this.filterChange}),Object(j.jsx)(g,{updatedContacts:this.updateContacts(),deleteContact:this.deleteContact})]})}}]),n}(a.Component),A=y;r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={addForm:"AddForm_addForm__kOtUI",form:"AddForm_form__22d7F",label:"AddForm_label__36PPu",input:"AddForm_input__PIxgA",button:"AddForm_button__3yjEJ"}},3:function(t,e,n){t.exports={contactList:"ContactList_contactList__1mUs4",list:"ContactList_list__1KdoH",item:"ContactList_item__1WU-h",name:"ContactList_name__3X1cc",number:"ContactList_number__Zos5S",button:"ContactList_button__2VUfj"}},8:function(t,e,n){t.exports={form:"Filter_form__1D5nS",label:"Filter_label__2X99N",input:"Filter_input__sy-yS"}}},[[19,1,2]]]);
//# sourceMappingURL=main.6ccd1b73.chunk.js.map
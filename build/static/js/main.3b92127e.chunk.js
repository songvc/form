(this.webpackJsonpfincen=this.webpackJsonpfincen||[]).push([[0],{154:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a(0),r=a(53),i=a.n(r),u=(a(154),a(155),a(128)),o=a(129),s=a(135),c=a(134),d=a(131),x=a(10),v=a(76),b=a(36),h=a(19),j=a(58),m=(a(156),a(180)),g=a(182),O=a(183),f=a(178),p=a(176),y=a(179),C=a(164),N=a(35),S=a(177);function E(e){return!!/[a-zA-Z0-9_ ]/g.test(e)}function M(e){return!!/[a-zA-Z0-9_ ]/g.test(e)}function A(e){return!!/[a-zA-Z]/g.test(e)}function F(e){return!!/^(\d{5})?$/g.test(e)}function I(e,t){switch(e){case"firstName":return!!/[A-Za-z ,.'-]/g.test(t);case"lastName":case"middleName":return function(e){return!!/[A-Za-z ,.'-]/g.test(e)}(t);case"dob":return function(e){return!!/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/g.test(e)}(t);case"legalEntity":return function(e){return!!/[a-zA-Z0-9_ ]/g.test(e)}(t);case"legalEntityAddress":return E(t);case"legalEntityCity":return M(t);case"legalEntityState":return A(t);case"legalEntityZip":return F(t);case"address":return E(t);case"city":return M(t);case"state":return A(t);case"zip":return F(t);case"country":return function(e){return!!/[a-zA-Z ]/g.test(e)}(t);case"ssn":return function(e){return!!/\d{3}[-]?\d{2}[-]?\d{4}/g.test(e)}(t);case"ownership":return function(e){return!!/^([01])?([.]?\d{0,2})?$/g.test(e)}(t);case"role":return function(e){return!!/[a-zA-Z ]/g.test(e)}(t)}}var G=function(){for(var e=[],t=0;t<101;t++){var a=.01*t;e.push({text:a.toFixed(2),value:a.toFixed(2)})}return console.log("range",e),e}(),P=[{text:"Afghanistan",value:"AF"},{text:"\xc5land Islands",value:"AX"},{text:"Albania",value:"AL"},{text:"Algeria",value:"DZ"},{text:"American Samoa",value:"AS"},{text:"AndorrA",value:"AD"},{text:"Angola",value:"AO"},{text:"Anguilla",value:"AI"},{text:"Antarctica",value:"AQ"},{text:"Antigua and Barbuda",value:"AG"},{text:"Argentina",value:"AR"},{text:"Armenia",value:"AM"},{text:"Aruba",value:"AW"},{text:"Australia",value:"AU"},{text:"Austria",value:"AT"},{text:"Azerbaijan",value:"AZ"},{text:"Bahamas",value:"BS"},{text:"Bahrain",value:"BH"},{text:"Bangladesh",value:"BD"},{text:"Barbados",value:"BB"},{text:"Belarus",value:"BY"},{text:"Belgium",value:"BE"},{text:"Belize",value:"BZ"},{text:"Benin",value:"BJ"},{text:"Bermuda",value:"BM"},{text:"Bhutan",value:"BT"},{text:"Bolivia",value:"BO"},{text:"Bosnia and Herzegovina",value:"BA"},{text:"Botswana",value:"BW"},{text:"Bouvet Island",value:"BV"},{text:"Brazil",value:"BR"},{text:"British Indian Ocean Territory",value:"IO"},{text:"Brunei Darussalam",value:"BN"},{text:"Bulgaria",value:"BG"},{text:"Burkina Faso",value:"BF"},{text:"Burundi",value:"BI"},{text:"Cambodia",value:"KH"},{text:"Cameroon",value:"CM"},{text:"Canada",value:"CA"},{text:"Cape Verde",value:"CV"},{text:"Cayman Islands",value:"KY"},{text:"Central African Republic",value:"CF"},{text:"Chad",value:"TD"},{text:"Chile",value:"CL"},{text:"China",value:"CN"},{text:"Christmas Island",value:"CX"},{text:"Cocos (Keeling) Islands",value:"CC"},{text:"Colombia",value:"CO"},{text:"Comoros",value:"KM"},{text:"Congo",value:"CG"},{text:"Congo, The Democratic Republic of the",value:"CD"},{text:"Cook Islands",code:"CK"},{text:"Costa Rica",value:"CR"},{text:"Cote D'Ivoire",value:"CI"},{text:"Croatia",value:"HR"},{text:"Cuba",value:"CU"},{text:"Cyprus",value:"CY"},{text:"Czech Republic",value:"CZ"},{text:"Denmark",value:"DK"},{text:"Djibouti",value:"DJ"},{text:"Dominica",value:"DM"},{text:"Dominican Republic",value:"DO"},{text:"Ecuador",value:"EC"},{text:"Egypt",value:"EG"},{text:"El Salvador",value:"SV"},{text:"Equatorial Guinea",value:"GQ"},{text:"Eritrea",value:"ER"},{text:"Estonia",value:"EE"},{text:"Ethiopia",value:"ET"},{text:"Falkland Islands (Malvinas)",value:"FK"},{text:"Faroe Islands",value:"FO"},{text:"Fiji",value:"FJ"},{text:"Finland",value:"FI"},{text:"France",value:"FR"},{text:"French Guiana",value:"GF"},{text:"French Polynesia",value:"PF"},{text:"French Southern Territories",value:"TF"},{text:"Gabon",value:"GA"},{text:"Gambia",value:"GM"},{text:"Georgia",value:"GE"},{text:"Germany",value:"DE"},{text:"Ghana",value:"GH"},{text:"Gibraltar",value:"GI"},{text:"Greece",value:"GR"},{text:"Greenland",value:"GL"},{text:"Grenada",value:"GD"},{text:"Guadeloupe",value:"GP"},{text:"Guam",value:"GU"},{text:"Guatemala",value:"GT"},{text:"Guernsey",value:"GG"},{text:"Guinea",value:"GN"},{text:"Guinea-Bissau",value:"GW"},{text:"Guyana",value:"GY"},{text:"Haiti",value:"HT"},{text:"Heard Island and Mcdonald Islands",value:"HM"},{text:"Holy See (Vatican City State)",value:"VA"},{text:"Honduras",value:"HN"},{text:"Hong Kong",value:"HK"},{text:"Hungary",value:"HU"},{text:"Iceland",value:"IS"},{text:"India",value:"IN"},{text:"Indonesia",value:"ID"},{text:"Iran, Islamic Republic Of",value:"IR"},{text:"Iraq",value:"IQ"},{text:"Ireland",value:"IE"},{text:"Isle of Man",value:"IM"},{text:"Israel",value:"IL"},{text:"Italy",value:"IT"},{text:"Jamaica",value:"JM"},{text:"Japan",value:"JP"},{text:"Jersey",value:"JE"},{text:"Jordan",value:"JO"},{text:"Kazakhstan",value:"KZ"},{text:"Kenya",value:"KE"},{text:"Kiribati",value:"KI"},{text:"Korea, Democratic People'S Republic of",value:"KP"},{text:"Korea, Republic of",code:"KR"},{text:"Kuwait",value:"KW"},{text:"Kyrgyzstan",value:"KG"},{text:"Lao People'S Democratic Republic",value:"LA"},{text:"Latvia",code:"LV"},{text:"Lebanon",value:"LB"},{text:"Lesotho",value:"LS"},{text:"Liberia",value:"LR"},{text:"Libyan Arab Jamahiriya",value:"LY"},{text:"Liechtenstein",value:"LI"},{text:"Lithuania",value:"LT"},{text:"Luxembourg",value:"LU"},{text:"Macao",value:"MO"},{text:"Macedonia, The Former Yugoslav Republic of",value:"MK"},{text:"Madagascar",code:"MG"},{text:"Malawi",value:"MW"},{text:"Malaysia",value:"MY"},{text:"Maldives",value:"MV"},{text:"Mali",value:"ML"},{text:"Malta",value:"MT"},{text:"Marshall Islands",value:"MH"},{text:"Martinique",value:"MQ"},{text:"Mauritania",value:"MR"},{text:"Mauritius",value:"MU"},{text:"Mayotte",value:"YT"},{text:"Mexico",value:"MX"},{text:"Micronesia, Federated States of",value:"FM"},{text:"Moldova, Republic of",value:"MD"},{text:"Monaco",value:"MC"},{text:"Mongolia",value:"MN"},{text:"Montserrat",value:"MS"},{text:"Morocco",value:"MA"},{text:"Mozambique",value:"MZ"},{text:"Myanmar",value:"MM"},{text:"Namibia",value:"NA"},{text:"Nauru",value:"NR"},{text:"Nepal",value:"NP"},{text:"Netherlands",value:"NL"},{text:"Netherlands Antilles",value:"AN"},{text:"New Caledonia",value:"NC"},{text:"New Zealand",value:"NZ"},{text:"Nicaragua",value:"NI"},{text:"Niger",value:"NE"},{text:"Nigeria",value:"NG"},{text:"Niue",value:"NU"},{text:"Norfolk Island",value:"NF"},{text:"Northern Mariana Islands",value:"MP"},{text:"Norway",value:"NO"},{text:"Oman",value:"OM"},{text:"Pakistan",value:"PK"},{text:"Palau",value:"PW"},{text:"Palestinian Territory, Occupied",value:"PS"},{text:"Panama",value:"PA"},{text:"Papua New Guinea",value:"PG"},{text:"Paraguay",value:"PY"},{text:"Peru",value:"PE"},{text:"Philippines",value:"PH"},{text:"Pitcairn",value:"PN"},{text:"Poland",value:"PL"},{text:"Portugal",value:"PT"},{text:"Puerto Rico",value:"PR"},{text:"Qatar",value:"QA"},{text:"Reunion",value:"RE"},{text:"Romania",value:"RO"},{text:"Russian Federation",value:"RU"},{text:"RWANDA",value:"RW"},{text:"Saint Helena",value:"SH"},{text:"Saint Kitts and Nevis",value:"KN"},{text:"Saint Lucia",value:"LC"},{text:"Saint Pierre and Miquelon",value:"PM"},{text:"Saint Vincent and the Grenadines",value:"VC"},{text:"Samoa",value:"WS"},{text:"San Marino",value:"SM"},{text:"Sao Tome and Principe",value:"ST"},{text:"Saudi Arabia",value:"SA"},{text:"Senegal",value:"SN"},{text:"Serbia and Montenegro",value:"CS"},{text:"Seychelles",value:"SC"},{text:"Sierra Leone",value:"SL"},{text:"Singapore",value:"SG"},{text:"Slovakia",value:"SK"},{text:"Slovenia",value:"SI"},{text:"Solomon Islands",value:"SB"},{text:"Somalia",value:"SO"},{text:"South Africa",value:"ZA"},{text:"South Georgia and the South Sandwich Islands",value:"GS"},{text:"Spain",value:"ES"},{text:"Sri Lanka",value:"LK"},{text:"Sudan",value:"SD"},{text:"Suriname",value:"SR"},{text:"Svalbard and Jan Mayen",value:"SJ"},{text:"Swaziland",value:"SZ"},{text:"Sweden",value:"SE"},{text:"Switzerland",value:"CH"},{text:"Syrian Arab Republic",value:"SY"},{text:"Taiwan, Province of China",value:"TW"},{text:"Tajikistan",value:"TJ"},{text:"Tanzania, United Republic of",value:"TZ"},{text:"Thailand",value:"TH"},{text:"Timor-Leste",value:"TL"},{text:"Togo",value:"TG"},{text:"Tokelau",value:"TK"},{text:"Tonga",value:"TO"},{text:"Trinidad and Tobago",value:"TT"},{text:"Tunisia",value:"TN"},{text:"Turkey",value:"TR"},{text:"Turkmenistan",value:"TM"},{text:"Turks and Caicos Islands",value:"TC"},{text:"Tuvalu",value:"TV"},{text:"Uganda",value:"UG"},{text:"Ukraine",value:"UA"},{text:"United Arab Emirates",value:"AE"},{text:"United Kingdom",value:"GB"},{text:"United States",value:"US"},{text:"United States Minor Outlying Islands",value:"UM"},{text:"Uruguay",value:"UY"},{text:"Uzbekistan",value:"UZ"},{text:"Vanuatu",value:"VU"},{text:"Venezuela",value:"VE"},{text:"Viet Nam",value:"VN"},{text:"Virgin Islands, British",value:"VG"},{text:"Virgin Islands, U.S.",value:"VI"},{text:"Wallis and Futuna",value:"WF"},{text:"Western Sahara",value:"EH"},{text:"Yemen",value:"YE"},{text:"Zambia",value:"ZM"},{text:"Zimbabwe",value:"ZW"}],T=[{text:"Chief Executive Officer",value:"Chief Executive Officer"},{text:"Chief Financial Officer",value:"Chief Financial Officer"},{text:"Chief Operating Officer",value:"Chief Operating Officer"},{text:"Managing Member",value:"Managing Member"},{text:"General Partner",value:"General Partner"},{text:"President",value:"President"},{text:"Vice President",value:"Vice President"},{text:"Treasurer",value:"Treasurer"},{text:"Controller",value:"Controller"},{text:"Others",value:"Others"}],B=function(e){var t=e.index,a=e.deleteForm,n=e.handleFormChange,r=e.formError.filter((function(e){return e.index===t}))[0];return Object(l.jsx)(m.a.Row,{columns:1,children:Object(l.jsx)(m.a.Column,{children:Object(l.jsxs)(f.a,{children:[Object(l.jsxs)(f.a.Group,{widths:"equal",children:[Object(l.jsx)(f.a.Field,{id:t,required:!0,control:p.a,label:"First Name",type:"firstName",onChange:n,placeholder:"Last name",error:r.firstName}),Object(l.jsx)(f.a.Field,{id:t,required:!0,control:p.a,label:"Last Name",type:"lastName",onChange:n,placeholder:"First name",error:r.lastName}),Object(l.jsx)(f.a.Field,{id:t,required:!0,control:p.a,label:"Middle Name.",type:"middleName",onChange:n,placeholder:"Middle Name",error:r.middleName}),Object(l.jsx)(f.a.Field,{id:t,required:!0,control:p.a,label:"Date of Birth (mm/dd/yyyy)",type:"dob",onChange:n,placeholder:"Date of Birth",error:r.dob})]}),Object(l.jsxs)(f.a.Group,{widths:"equal",children:[Object(l.jsx)(f.a.Field,{id:t,required:!0,control:p.a,label:"Address",type:"address",onChange:n,placeholder:"Address",error:r.address}),Object(l.jsx)(f.a.Field,{id:t,required:!0,control:p.a,label:"City",type:"city",onChange:n,placeholder:"City",error:r.city}),Object(l.jsx)(f.a.Field,{id:t,required:!0,control:p.a,label:"State",type:"state",onChange:n,placeholder:"Last name",error:r.state}),Object(l.jsx)(f.a.Field,{id:t,required:!0,control:p.a,label:"ZIP/Postal Code",type:"zip",onChange:n,placeholder:"ZIP/Postal Code",error:r.zip})]}),Object(l.jsxs)(f.a.Group,{widths:"equal",children:[Object(l.jsx)(f.a.Field,{id:t,required:!0,control:S.a,label:"Country",type:"country",search:!0,options:P,onChange:n,placeholder:"First name",error:r.country}),Object(l.jsx)(f.a.Field,{id:t,required:!0,control:p.a,label:"SSN",type:"ssn",onChange:n,placeholder:"SSN",error:r.ssn}),Object(l.jsx)(f.a.Field,{id:t,required:!0,control:S.a,label:"Ownership Percentage (0.01 - 1.00)",type:"ownership",search:!0,options:G,onChange:n,placeholder:"Ownership Percentage",error:r.ownership}),Object(l.jsx)(f.a.Field,{id:t,required:!0,control:S.a,label:"Role",type:"role",search:!0,options:T,onChange:n,placeholder:"Role",error:r.role})]}),Object(l.jsx)(C.a,{id:t,negative:!0,onClick:function(e){a(t)},children:"Delete"})]})})})};var R=function(){var e=Object(n.useState)({firstName:"",lastName:"",middleName:"",legalEntity:"",legalEntityAddress:"",legalEntityCity:"",legalEntityState:"",legalEntityZip:""}),t=Object(j.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({firstName:!0,lastName:!0,middleName:!0,legalEntity:!0,legalEntityAddress:!0,legalEntityCity:!0,legalEntityState:!0,legalEntityZip:!0}),u=Object(j.a)(i,2),o=u[0],s=u[1],c=Object(n.useState)(1),d=Object(j.a)(c,2),x=d[0],S=d[1],E=Object(n.useState)([{index:0,firstName:"",lastName:"",middleName:"",dob:"",address:"",city:"",state:"",zip:"",country:"",ssn:"",ownership:"",role:""}]),M=Object(j.a)(E,2),A=M[0],F=M[1],G=Object(n.useState)([{index:0,firstName:!0,lastName:!0,middleName:!0,dob:!0,address:!0,city:!0,state:!0,zip:!0,country:!0,ssn:!0,ownership:!0,role:!0}]),P=Object(j.a)(G,2),T=P[0],R=P[1],L=Object(n.useState)(!1),w=Object(j.a)(L,2),Z=w[0],q=w[1],K=function(e,t){t.name;var a=t.type,l=t.value;console.log("handle change",l),I(a,l)?s((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({},a,!1))})):s((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({},a,"Please enter a valid field"))})),r((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({},a,l))}))};Object(n.useEffect)((function(){0===Object.values(o).map((function(e){return!!e})).reduce((function(e,t){return e+t}),0)&&0===T.reduce((function(e,t){return e+Object.values(t).map((function(e,t){return 0!==t&&!!e})).reduce((function(e,t){return e+t}),0)}),0)&&function(){var e=/controller/i;return!!A.map((function(t){return e.test(t.role)})).reduce((function(e,t){return e+t}),0)}()&&1===A.map((function(e){return e.ownership})).reduce((function(e,t){return e+parseFloat(t)}),0)?q(!0):q(!1)}),[o,T]);var z={deleteForm:function(e){F((function(t){return t.filter((function(t){return t.index!==e}))})),R((function(t){return t.filter((function(t){return t.index!==e}))}))},handleFormChange:function(e,t){t.name;var a=t.type,l=t.id,n=t.value;I(a,n)?R(Object(v.a)(T).map((function(e){return e.index===l?Object(h.a)(Object(h.a)({},e),{},Object(b.a)({},a,!1)):e}))):R(Object(v.a)(T).map((function(e){return e.index===l?Object(h.a)(Object(h.a)({},e),{},Object(b.a)({},a,"Please enter a valid field")):e}))),F(Object(v.a)(A).map((function(e){return e.index===l?Object(h.a)(Object(h.a)({},e),{},Object(b.a)({},a,n)):e})))},curr:x,setCurr:S,form:A,setForm:F,formError:T,setFormError:R};return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(m.a,{container:!0,children:[Object(l.jsx)(m.a.Row,{columns:1,children:Object(l.jsx)(m.a.Column,{})}),Object(l.jsx)(m.a.Row,{columns:1,children:Object(l.jsxs)(m.a.Column,{children:[Object(l.jsx)(g.a,{as:"h1",children:"CERTIFICATE OF BENEFICIAL OWNER"}),Object(l.jsxs)(O.a,{children:["The Information contained in this Certification is sought pursuant to ",Object(l.jsx)("b",{children:"Section 1020.230 of Title 31"})," of the United States Code of Federal Regulations. (31 CFR 1020.230 - Beneficial Ownership Requirements for legal entity customers)."]})]})}),Object(l.jsx)(m.a.Row,{columns:1,children:Object(l.jsxs)(m.a.Column,{children:[Object(l.jsx)(g.a,{as:"h3",children:"LEGAL ENTITY"}),Object(l.jsx)(O.a,{children:"Please enter the legal entity\u2019s basic information, including the account holder's name, address, date of birth and address information."})]})}),Object(l.jsx)(m.a.Row,{columns:1,children:Object(l.jsx)(m.a.Column,{children:Object(l.jsxs)(f.a,{children:[Object(l.jsxs)(f.a.Group,{widths:"equal",children:[Object(l.jsx)(f.a.Field,{required:!0,control:p.a,type:"firstName",onChange:K,value:a.firstName,label:"First Name",placeholder:"First name",error:o.firstName}),Object(l.jsx)(f.a.Field,{required:!0,control:p.a,type:"lastName",onChange:K,value:a.lastName,label:"Last Name",placeholder:"Last name",error:o.lastName}),Object(l.jsx)(f.a.Field,{required:!0,control:p.a,type:"middleName",onChange:K,value:a.middleName,label:"Middle Name",placeholder:"Middle Name",error:o.middleName})]}),Object(l.jsx)(f.a.Field,{required:!0,control:p.a,type:"legalEntity",onChange:K,value:a.legalEntity,label:"Legal Entity Name",placeholder:"Legal Entity Name",error:o.legalEntity}),Object(l.jsxs)(f.a.Group,{widths:"equal",children:[Object(l.jsx)(f.a.Field,{required:!0,control:p.a,type:"legalEntityAddress",onChange:K,value:a.legalEntityAddress,label:"Legal Entity Address",placeholder:"Legal Entity Address",error:o.legalEntityAddress}),Object(l.jsx)(f.a.Field,{required:!0,control:p.a,type:"legalEntityCity",onChange:K,value:a.legalEntityCity,label:"Legal Entity City",placeholder:"Legal Entity City",error:o.legalEntityCity}),Object(l.jsx)(f.a.Field,{required:!0,control:p.a,type:"legalEntityState",onChange:K,value:a.legalEntityState,label:"Legal Entity State",placeholder:"Legal Entity State",error:o.legalEntityState}),Object(l.jsx)(f.a.Field,{required:!0,control:p.a,type:"legalEntityZip",onChange:K,value:a.legalEntityZip,label:"ZIP/Postal Code",placeholder:"Legal Entity ZIP",error:o.legalEntityZip})]})]})})}),Object(l.jsx)(m.a.Row,{columns:1,children:Object(l.jsxs)(m.a.Column,{children:[Object(l.jsx)(g.a,{as:"h3",children:"BENEFICIAL OWNER"}),Object(l.jsxs)(O.a,{children:["Please enter the legal entity\u2019s ",Object(l.jsx)("b",{children:"beneficial owner(s)"}),", including their name, address, date of birth and social security number (or passport number or other similar information, in the case of Non-U.S. persons)."]}),Object(l.jsxs)(O.a,{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Beneficial owners"})," are:"]}),Object(l.jsxs)(y.a,{ordered:!0,children:[Object(l.jsxs)(y.a.Item,{children:["Each individual, if any, who owns, directly or indirectly, ",Object(l.jsx)("b",{children:"25 percent or more of the equity interests"})," of the legal entity customer (e.g., each natural person that owns 25 percent or more of the shares of a corporation; and"]}),Object(l.jsxs)(y.a.Item,{children:["An individual with significant responsibility for managing the legal entity customer ",Object(l.jsx)("b",{children:"(e.g., a Chief Executive Officer, Chief Financial Officer, Chief Operating Officer, Managing Member, General Partner, President, Vice President, or Treasurer)."})]})]})]}),Object(l.jsx)(O.a,{children:"Make sure at least one of the beneficial owner is a controller and the ownership percentage pertains to 1."})]})}),A.map((function(e,t){return Object(l.jsx)(B,Object(h.a)(Object(h.a)({index:e.index},e),z),t)})),Object(l.jsx)(m.a.Row,{columns:1,children:Object(l.jsx)(m.a.Column,{children:Object(l.jsxs)(C.a,{icon:!0,labelPosition:"right",onClick:function(){S(x+1),F((function(e){return[].concat(Object(v.a)(e),[{index:x,firstName:"",lastName:"",middleName:"",dob:"",address:"",city:"",state:"",zip:"",country:"",ssn:"",ownership:"",role:""}])})),R((function(e){return[].concat(Object(v.a)(e),[{index:x,firstName:!0,lastName:!0,middleName:!0,dob:!0,address:!0,city:!0,state:!0,zip:!0,country:!0,ssn:!0,ownership:!0,role:!0}])}))},disabled:A.length>5,children:["Add additional beneficial owner",Object(l.jsx)(N.a,{name:"plus"})]})})}),Object(l.jsx)(m.a.Row,{columns:1,children:Object(l.jsx)(m.a.Column,{children:Object(l.jsx)(C.a,{fluid:!0,type:"submit",disabled:!Z,onClick:function(){console.log("submitting legal",a),console.log("submitting form",A)},children:"Submit"})})})]})})},L=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(l.jsx)(d.a,{children:Object(l.jsx)(x.c,{children:Object(l.jsx)(x.a,{path:"/",exact:!0,component:R})})})}}]),a}(n.Component);i.a.render(Object(l.jsx)(L,{}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.3b92127e.chunk.js.map
(this["webpackJsonpgoit-react-hw-04-hooks-image-finder"]=this["webpackJsonpgoit-react-hw-04-hooks-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={galleryItem:"imageGaleryItem_galleryItem__2CGky",galleryItem_Img:"imageGaleryItem_galleryItem_Img__20sO_"}},11:function(e,t,a){e.exports={overlay:"modal_overlay__1s7gG",modal:"modal_modal__3KpYI"}},18:function(e,t,a){e.exports={gallery:"imageGallery_gallery__1lJtA"}},26:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(13),o=a.n(r),s=(a(26),a(12)),i=a(4),l=a(9),u=a.n(l),j=a(14),b=a(5),m=a.n(b),d=a(2);function h(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),n=a[0],r=a[1],o=function(){r("")};return Object(d.jsx)("header",{className:m.a.Searchbar,children:Object(d.jsxs)("form",{className:m.a.SearchForm,onSubmit:function(t){var a=e.onSubmit;t.preventDefault(),a(n),o()},children:[Object(d.jsx)("input",{className:m.a.SearchForm_input,type:"text",name:"name",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){r(e.currentTarget.value)},value:n}),Object(d.jsxs)("button",{className:m.a.SearchForm_button,type:"submit",children:[Object(d.jsx)(j.a,{style:{marginRight:8}}),Object(d.jsx)("span",{className:m.a.SearchForm_button_label,children:"Search"})]})]})})}function g(e){var t=e.message;return Object(d.jsx)("div",{role:"alert",children:Object(d.jsx)("p",{children:t})})}var p=a(15),f=a(16),O=a(21),_=a(20),x=a(17),v=a.n(x),y=function(e){Object(O.a)(a,e);var t=Object(_.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(v.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})}}]),a}(c.Component);var S=a(10),I=a.n(S);function k(e){var t=e.id,a=e.tags,c=e.smallImage,n=e.largeImage,r=e.onClickImg;return Object(d.jsx)("li",{className:I.a.galleryItem,children:Object(d.jsx)("img",{className:I.a.galleryItem_Img,src:c,alt:a,"data-source":n,onClick:function(){r(n)}})},t)}var w=a(18),F=a.n(w);function N(e){var t=e.pictures,a=e.toggleModal;return Object(c.useEffect)((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[t]),Object(d.jsx)("ul",{class:F.a.gallery,children:t.map((function(e){var t=e.id,c=e.tags,n=e.webformatURL,r=e.largeImageURL;return Object(d.jsx)(k,{smallImage:n,tags:c,largeImage:r,onClickImg:function(){a(r)}},t)}))})}var C=a(19);a(48);function E(e){var t=e.onClickLoad;return Object(d.jsxs)("button",{class:"button",type:"button",onClick:t,children:[Object(d.jsx)(C.a,{className:"icon"})," ",Object(d.jsx)("span",{children:"Load more"})]})}var M=a(11),L=a.n(M);function A(e){Object(c.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}));var t=function(t){"Escape"===t.code&&e.closeModal()},a=e.onToggleModal,n=e.image;return Object(d.jsx)("div",{className:L.a.overlay,onClick:a,tabIndex:"0",children:Object(d.jsx)("div",{className:L.a.modal,children:Object(d.jsx)("img",{src:n,alt:n.tags})})})}function G(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),o=Object(i.a)(r,2),l=o[0],j=o[1],b=Object(c.useState)(null),m=Object(i.a)(b,2),p=m[0],f=m[1],O=Object(c.useState)("idle"),_=Object(i.a)(O,2),x=_[0],v=_[1],S=Object(c.useState)(1),I=Object(i.a)(S,2),k=I[0],w=I[1],F=Object(c.useState)(""),C=Object(i.a)(F,2),M=C[0],L=C[1],G=Object(c.useState)(!1),K=Object(i.a)(G,2),T=K[0],J=K[1],R=Object(c.useCallback)((function(){var e,t;(e=a,t=k,fetch("".concat("https://pixabay.com/api/","?key=").concat("22969480-c3583c2b4b1ca4646f49ed52f","&q=").concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ".concat(e)))}))).then((function(e){j((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e.hits))})),v("resolved")})).catch((function(e){f(e),v("rejected")}))}),[a,k]);Object(c.useEffect)((function(){""!==a&&(v("pending"),R())}),[a,R,k]);var B=function(e){J(!T),L(e)};return Object(d.jsxs)("div",{className:u.a.App,children:[Object(d.jsx)(h,{onSubmit:function(e){if(!e)return alert("Nothing to search. Enter name, please.");w(1),j([]),n(e)}}),"idle"===x&&Object(d.jsx)("p",{children:"Input name of picture to search"}),"pending"===x&&Object(d.jsx)(y,{}),"rejected"===x&&Object(d.jsx)(g,{message:p.message}),"resolved"===x&&Object(d.jsxs)("div",{className:u.a.App,children:[Object(d.jsx)(N,{pictures:l,toggleModal:B}),Object(d.jsx)(E,{onClickLoad:function(){w(k+1)}})]}),T&&Object(d.jsx)(A,{onToggleModal:function(){B()},image:M,closeModal:function(){J(!1)}})]})}o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(G,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={SearchForm:"searchbar_SearchForm__2pHmK",SearchForm_button:"searchbar_SearchForm_button__2p4M2",SearchForm_button_label:"searchbar_SearchForm_button_label__2KycV",SearchForm_input:"searchbar_SearchForm_input__1wKtr",Searchbar:"searchbar_Searchbar__12Gia"}},9:function(e,t,a){e.exports={App:"App_App__3suYE"}}},[[49,1,2]]]);
//# sourceMappingURL=main.832691be.chunk.js.map
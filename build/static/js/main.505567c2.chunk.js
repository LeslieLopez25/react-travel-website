(this["webpackJsonpreact-travel-website"]=this["webpackJsonpreact-travel-website"]||[]).push([[0],[,,,,,,,,function(e,a,t){},,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/img-8.8a663070.jpg"},function(e,a,t){e.exports=t.p+"static/media/img-1.5b1f04e4.jpg"},function(e,a,t){e.exports=t.p+"static/media/img-2.ae7b8282.jpg"},function(e,a,t){e.exports=t.p+"static/media/img-3.c6a22969.jpg"},function(e,a,t){e.exports=t.p+"static/media/img-4.1f157bf6.jpg"},function(e,a,t){e.exports=t.p+"static/media/video-1.6709b3d0.mp4"},function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),r=t.n(c),s=t(12),i=(t(29),t(1)),m=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,s=m.includes(c)?c:m[0],u=o.includes(r)?r:o[0];return l.a.createElement(i.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))};t(35);var E=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!0),m=Object(s.a)(r,2),o=m[0],E=m[1],b=function(){return c(!1)},p=function(){window.innerWidth<=960?E(!1):E(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:b},"JOURNEY",l.a.createElement("i",{class:"fas fa-map-marked-alt"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/",className:"nav-links",onClick:b},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/services",className:"nav-links",onClick:b},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/products",className:"nav-links",onClick:b},"Products")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/sign-up",className:"nav-links-mobile",onClick:b},"Sign Up"))),o&&l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))};t(8),t(36);var b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(i.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))},p=t(18),d=t.n(p),f=t(19),v=t.n(f),g=t(20),N=t.n(g),h=t(21),k=t.n(h),_=t(22),S=t.n(_);var w=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Check out these EPIC Destinations!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:d.a,text:"Explore The Amazon Jungle And All Its Wonder",label:"Adventure",path:"/services"}),l.a.createElement(b,{src:v.a,text:"Travel Through The Isles Of Scilly",label:"Luxury",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:N.a,text:"Set Sail In The Pacific Ocean Visiting Uncharted Waters",label:"Mystery",path:"/services"}),l.a.createElement(b,{src:k.a,text:"Take A Step Into Ancient Japan and Visit Mt. Fuji ",label:"Venture",path:"/products"}),l.a.createElement(b,{src:S.a,text:"Explore The Beautiful Mountainside And Gorgeous Lake At Mt. Chephren in Canada",label:"Adrenaline",path:"/sign-up"})))))},y=(t(37),t(23)),C=t.n(y);var T=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:C.a,autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"ADVENTURE AWAITS"),l.a.createElement("p",null,"What are you waiting for?"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"GET STARTED"),l.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"WATCH TRAILER ",l.a.createElement("i",{className:"far fa-play-circle"}))))};var x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(T,null),l.a.createElement(w,null))},A=t(2);function I(){return l.a.createElement("h1",{className:"services"},"SERVICES")}function j(){return l.a.createElement("h1",{className:"products"},"PRODUCTS")}function O(){return l.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE")}t(38);var U=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join the adventure newsletter to receive our best vacation deals"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(i.b,{to:"/sign-up"},"How it works"),l.a.createElement(i.b,{to:"/"},"Testimonials"),l.a.createElement(i.b,{to:"/"},"Careers"),l.a.createElement(i.b,{to:"/"},"Investors"),l.a.createElement(i.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(i.b,{to:"/"},"Contact"),l.a.createElement(i.b,{to:"/"},"Support"),l.a.createElement(i.b,{to:"/"},"Destinations"),l.a.createElement(i.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(i.b,{to:"/"},"Submit Video"),l.a.createElement(i.b,{to:"/"},"Ambassadors"),l.a.createElement(i.b,{to:"/"},"Agency"),l.a.createElement(i.b,{to:"/"},"Influencer")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(i.b,{to:"/"},"Instagram"),l.a.createElement(i.b,{to:"/"},"Facebook"),l.a.createElement(i.b,{to:"/"},"Youtube"),l.a.createElement(i.b,{to:"/"},"Twitter")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(i.b,{to:"/",className:"social-logo"},"JOURNEY",l.a.createElement("i",{class:"fas fa-map-marked-alt"}))),l.a.createElement("small",{class:"website-rights"},"JOURNEY \xa9 ",(new Date).getFullYear()),l.a.createElement("div",{class:"social-icons"},l.a.createElement(i.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(i.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(i.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var R=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(E,null),l.a.createElement(A.c,null,l.a.createElement(A.a,{path:"/",exact:!0,component:x}),l.a.createElement(A.a,{path:"/services",component:I}),l.a.createElement(A.a,{path:"/products",component:j}),l.a.createElement(A.a,{path:"/sign-up",component:O})),l.a.createElement(U,null)))};r.a.render(l.a.createElement(R,null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.505567c2.chunk.js.map
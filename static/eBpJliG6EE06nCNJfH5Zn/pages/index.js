(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6dBa":function(t,a,n){"use strict";n.r(a);var e=n("MX0m"),s=n.n(e),r=n("q1tI"),i=n.n(r),o=n("8Kt/"),l=n.n(o),m=n("MbLX"),h=n("IujW"),d=n.n(h),f=i.a.createElement,u=n("DD9N").default;a.default=function(){return f("div",{className:"jsx-2391186365"},f(l.a,null,f("title",{className:"jsx-2391186365"},"Space View")),f(m.a,null),f("div",{className:"jsx-2391186365 text-outer"},f("div",{className:"jsx-2391186365 text-inner"},f(d.a,{source:u,escapeHtml:!1}))),f("div",{id:"crop",className:"jsx-2391186365"},f("img",{id:"bg",src:"https://cdn.star.nesdis.noaa.gov/GOES17/ABI/FD/GEOCOLOR/5424x5424.jpg",className:"jsx-2391186365"})),f(s.a,{id:"2391186365"},["body{background-color:black;overflow-x:hidden;}","#crop.jsx-2391186365{width:5424px;height:5375px;overflow:hidden;position:absolute;top:0;z-index:-1;-webkit-animation-name:moveIt-jsx-2391186365;animation-name:moveIt-jsx-2391186365;-webkit-animation-duration:1000s;animation-duration:1000s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}","@-webkit-keyframes moveIt-jsx-2391186365{0%{-webkit-transform:translateX(-70%) translateY(-10%);-ms-transform:translateX(-70%) translateY(-10%);transform:translateX(-70%) translateY(-10%);}25%{-webkit-transform:translateX(-0%) translateY(-10%);-ms-transform:translateX(-0%) translateY(-10%);transform:translateX(-0%) translateY(-10%);}50%{-webkit-transform:translateX(-60%) translateY(-80%);-ms-transform:translateX(-60%) translateY(-80%);transform:translateX(-60%) translateY(-80%);}75%{-webkit-transform:translateX(-0%) translateY(-50%);-ms-transform:translateX(-0%) translateY(-50%);transform:translateX(-0%) translateY(-50%);}100%{-webkit-transform:translateX(-70%) translateY(-10%);-ms-transform:translateX(-70%) translateY(-10%);transform:translateX(-70%) translateY(-10%);}}","@keyframes moveIt-jsx-2391186365{0%{-webkit-transform:translateX(-70%) translateY(-10%);-ms-transform:translateX(-70%) translateY(-10%);transform:translateX(-70%) translateY(-10%);}25%{-webkit-transform:translateX(-0%) translateY(-10%);-ms-transform:translateX(-0%) translateY(-10%);transform:translateX(-0%) translateY(-10%);}50%{-webkit-transform:translateX(-60%) translateY(-80%);-ms-transform:translateX(-60%) translateY(-80%);transform:translateX(-60%) translateY(-80%);}75%{-webkit-transform:translateX(-0%) translateY(-50%);-ms-transform:translateX(-0%) translateY(-50%);transform:translateX(-0%) translateY(-50%);}100%{-webkit-transform:translateX(-70%) translateY(-10%);-ms-transform:translateX(-70%) translateY(-10%);transform:translateX(-70%) translateY(-10%);}}"]))}},DD9N:function(t,a,n){"use strict";n.r(a),a.default='### Live space view with CSS\n\n##### May 23, 2020\n\nI\'ve been really enjoying the Android [live earth wallpaper](http://www.revimage.org/pixel-live-earth-wallpaper/) ever since it came out. Something about floating above our planet is just deeply beautiful and primordialy calming, for whatever reason.\n\nAs you can see in the background, we are weightless somewhere above the pacific ocean hemisphere. This image is live, so you should see either day or night, depending on when you loaded this page.  You can also reload the page to get a more up to date image. \n\nOK, lets see how to add this wonderful view using plain old CSS.  \n\nThe image is a 20-minute-ago snapshot from the [GEOS 17](https://en.wikipedia.org/wiki/GOES-17) satellite 22,200 mi above our planet.  This is a weather satellite with a geostational orbit, which means it only has one static view of earth.  The images are publically availible since 2018 at the [NOAA site](https://www.star.nesdis.noaa.gov/GOES/fulldisk.php?sat=G17). \n\nThere are quite a few cameras availible, but lets stick with the realistic [GeoColor](https://www.star.nesdis.noaa.gov/GOES/fulldisk_band.php?sat=G17&band=GEOCOLOR&length=12) photo. After choosing a resolution we can get the URL of the image.  \n\nThe image URLs have a mysterious timestamp text as part of their name. I spent a lot of time reverese engineering this date format so I could generate the latest image URL in javascript. However, I then stumbled upon an image that doesnt have any timestamps and simply refers to the latest view.    \n\n```\nhttps://cdn.star.nesdis.noaa.gov/GOES17/ABI/FD/GEOCOLOR/5424x5424.jpg\n```\n\nGreat, wish I knew that earlier. Oh well, lets load it up.\n\n```\n<img src="https://cdn.star.nesdis.noaa.gov/GOES17/ABI/FD/GEOCOLOR/5424x5424.jpg"></img>\n```\n\nCool, we are getting somewhere. There are two problems. First, there\'s a banner of text on the bottom that will savagely stop our illusion of being in space. Lets add a `div` around to get a crop effect.\n\n\n```\n<div id="crop">\n  <img src="https://cdn.star.nesdis.noaa.gov/GOES17/ABI/FD/GEOCOLOR/5424x5424.jpg"></img>\n</div>\n```\n \nAdd some css to set the height to be 49 pixels less than the image.\n\n```\n#crop {\n  width: 5424px;\n  height: 5375px;\n  overflow: hidden;\n}\n```\n\nNext lets add some movement, to simulate that sweet floating effect. There are several ways to do it.\nWe will want to use [CSS keyframes](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp) for sure. One way is not to use the `img` tag and apply the photo as a `div` background:\n\n```\n#crop {\n  animation-name: moveIt;\n  animation-duration: 1000s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  background-image: "https://cdn.star.nesdis.noaa.gov/GOES17/ABI/FD/GEOCOLOR/5424x5424.jpg";\n}\n\n@keyframes moveIt {\n  from {background-position: top right;}\n  to {background-position: top left;}\n}\n```\n\nOK, we are moving now, sort of.  The movement is nausiatingly jagged and your computer should get lava-hot pretty soon.  This is because using `background-position` causes the animation to be performed on the CPU. Lucky for us, we can trigger GPU processing by simply switching back to `img` and applying a `transform`:\n\n```\n#crop {\n  animation-name: moveIt;\n  animation-duration: 1000s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n\n@keyframes moveIt {\n  0% {\n    transform: translateX(-70%) translateY(-10%); \n  }\n  25% { \n     transform: translateX(-0%) translateY(-10%); \n  }\n  50% { \n     transform: translateX(-60%) translateY(-80%);   \n  }\n  75% { \n     transform: translateX(-0%) translateY(-50%); \n  }\n  100% {\n    transform: translateX(-70%) translateY(-10%); \n  }\n}\n\n```\n\nAh yes, much more satisfying.  '},RNiq:function(t,a,n){"use strict";n.r(a);var e=n("q1tI"),s=n.n(e),r=n("8Kt/"),i=n.n(r),o=(n("MbLX"),n("IujW"),n("6dBa")),l=s.a.createElement;a.default=function(){return l("div",null,l(i.a,null,l("title",null,"Satisfying Codes")),l(o.default,null))}},vlRD:function(t,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,0]]]);
"use strict";

history.scrollRestoration = "manual";
const title = document.querySelector('.title-container h1');
const subtitle = document.querySelector('.title-container h2');
title.innerHTML = '<span>' + title.innerHTML.split('').join('</span><span>') + '</span>';
subtitle.innerHTML = '<span>' + subtitle.innerHTML.split('').join('</span><span>') + '</span>';
title.style.display = '';
subtitle.style.display = ''; // dragElement(document.querySelector(".profile-image-container img"));

function dragElement(elmnt) {
  var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault(); // get the mouse cursor position at startup:

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault(); // calculate the new cursor position:

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY; // set the element's new position:

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const projects = [{
  folder: "growtheq",
  url: "https://growth-eq.co.uk",
  title: "Growth EQ",
  description: "WordPress site migrated from Wix.",
  tech: ["wordpress"],
  gallery: 6
}, {
  folder: "davidspearing",
  url: "https://www.davidspearing.com",
  title: "David Spearing",
  description: "WordPress site migrated from SquareSpace.",
  tech: ["wordpress"],
  gallery: 3
}, {
  folder: "samandmax",
  url: "https://samandmax.co.uk",
  title: "Sam and Max",
  description: "Django site with ReactJS frontend, Wagtail CMS, and SSO-integrated Discourse forum.",
  tech: ["django", "reactjs", "wagtail", "discourse"],
  gallery: 4
}, {
  folder: "millfieldlane",
  url: "https://millfieldlanedesigns.co.uk",
  title: "Millfield Lane",
  description: 'WooCommerce store developed in collaboration with designer <a href="https://www.cultstudios.co.uk">Cult Studios</a>.',
  tech: ["woocommerce", "wordpress"],
  gallery: 4
}, {
  folder: "theretreatsoham",
  url: "https://theretreatsoham.co.uk",
  title: "The Retreat Soham",
  description: 'WooCommerce store developed in collaboration with designer <a href="https://www.cultstudios.co.uk">Cult Studios</a>.',
  tech: ["woocommerce", "wordpress"],
  gallery: 4
}, {
  folder: "angliacaravans",
  url: "https://angliacaravansandaccessories.co.uk",
  title: "Anglia Caravans",
  description: 'WooCommerce store developed in collaboration with designer <a href="https://www.cultstudios.co.uk">Cult Studios</a>.',
  tech: ["woocommerce", "wordpress"],
  gallery: 5
}, {
  folder: "completekitchens",
  url: null,
  title: "Complete Kitchens Ely",
  description: 'Wordpress site developed in collaboration with designer <a href="https://www.cultstudios.co.uk">Cult Studios</a>.',
  tech: ["wordpress"],
  gallery: 4
}, {
  folder: "jrconstable",
  url: "https://jrconstable.com",
  title: "JR Constable Construction",
  description: 'Wordpress site developed in collaboration with designer <a href="https://www.cultstudios.co.uk">Cult Studios</a>.',
  tech: ["wordpress"],
  gallery: 3
}, {
  folder: "onestopheating",
  url: "https://onestopheatingandpropertymaintenance.com",
  title: "One Stop Heating & Property Maintenance",
  description: 'Wordpress site developed in collaboration with designer <a href="https://www.cultstudios.co.uk">Cult Studios</a>.',
  tech: ["wordpress"],
  gallery: 3
}, {
  folder: "queenbeethrones",
  url: "https://queenbeethrones.com",
  title: "Queen Bee Thrones",
  description: 'Wordpress site developed in collaboration with designer <a href="https://www.cultstudios.co.uk">Cult Studios</a>.',
  tech: ["wordpress"],
  gallery: 3
}, {
  folder: "construct1",
  url: "https://construct1services.com",
  title: "Construct1",
  description: 'Wordpress site developed in collaboration with designer <a href="https://www.cultstudios.co.uk">Cult Studios</a>.',
  tech: ["wordpress"],
  gallery: 5
}, {
  folder: "regaljoinery",
  url: "https://regaljoinery.co.uk",
  title: "Regal Joinery",
  description: 'Wordpress site developed in collaboration with designer <a href="https://www.cultstudios.co.uk">Cult Studios</a>.',
  tech: ["wordpress"],
  gallery: 4
}, {
  folder: "girls4girls",
  url: "https://girls4girlsbeauty.com",
  title: "Girls4Girls Homepage",
  description: 'Homepage developed in collaboration with in-house designer.',
  tech: ["shopify"],
  gallery: 4
}, {
  folder: "glowhub",
  url: "https://glowhub.com",
  title: "Glowhub Pages",
  description: "Glow your way and mini-market pages developed in collaboration with in-house designer.",
  tech: ["shopify"],
  gallery: 6
}, {
  folder: "soaksunday",
  url: "https://soaksunday.com",
  title: "Soak Sunday Pages",
  description: "Homepage and sustainability pages developed in collaboration with in-house designer.",
  tech: ["shopify"],
  gallery: 8
}, {
  folder: "scientia",
  url: "https://scientiabeauty.com",
  title: "Scientia App and Pages",
  description: "Custom ecard Shopify app and about pages developed in collaboration with in-house designer.",
  tech: ["shopify", "nodejs"],
  gallery: 7
}, {
  folder: "uniformstandard",
  url: "https://uniformstandard.com",
  title: "Uniform Standard Apps",
  description: "Custom Returns, Shipping, and IOSS Reports Shopify apps, and frontend adjustments developed in collaboration with in-house designer.",
  tech: ["shopify", "nodejs"],
  gallery: 4
}, {
  folder: "fitattitude",
  url: "https://fitattitude.fr",
  title: "FitAttitude Season Manager Plugin",
  description: "Custom WordPress plugin handling enrolment based on WooCommerce subscriptions.",
  tech: ["woocommerce", "wordpress"],
  gallery: 2
}];
const projectsContainer = document.querySelector('.projects-container');
projectsContainer.innerHTML = `
	<div class="swiper tilesSwiperLeft"></div>
	<div class="swiper mainSwiper">
	  <div class="swiper-wrapper">
	  	${projects.map((p, pIndex) => {
  return `
			    <div class="swiper-slide">
			    	<div class="row no-gutters mb-2">
			    		<div class="col-3 project-logo-col">
			    			<a href="${p.url ? p.url : 'javascript:void(0);'}" target="_blank">
			    				<img class="project-logo" src="/images/projects/${p.folder}/logo.jpg">
			    			</a>
			    			<div class="website-symbol">🌐&#xFE0E;</div>
			    		</div>
			    		<div class="col project-details">
			    			<h4><a href="${p.url ? p.url : 'javascript:void(0);'}" target="_blank">${p.title}</a></h4>
			    			<p>${p.description}</p>
			    			<!--<ul>
						 		${p.features && p.features.map(f => {
    return `<li>${f}</li>`;
  }).join('')}
						 	</ul>-->
			    		</div>
			    		<div class="col-3 tech-grid-container">
			    			<ul class="tech-grid">
						 		${p.tech && p.tech.map(t => {
    return `<li><img class="tech-logo" src="/images/logos/${t}-logo.png" alt="${t}" title="${t}"></li>`;
  }).join('')}
						 	</ul>
			    		</div>
			    	</div>
			    	<div class="swiper screenshots-swiper">
					  <div class="swiper-wrapper">
					  	${Array(p.gallery).fill(0).map((x, i) => {
    return `
					  			<div class="swiper-slide"><img src="/images/projects/${p.folder}/${i + 1}.jpg"></div>
					  		`;
  }).join('')}
					  </div>
					  <div class="swiper-pagination"></div>
					</div>
			    </div>
			`;
}).join('')}
	  </div>
	</div>
	<div class="swiper tilesSwiperRight"></div>
`;
const screenWidth = window.outerWidth;
const containerWidth = document.querySelector('body > .container').offsetWidth;
const col6Width = containerWidth / 2;
const logoColWidth = document.querySelector('.logo-container.col').offsetWidth;
const availableSpaceRight = (screenWidth - containerWidth) / 2 + (col6Width - logoColWidth);
const availableSpaceLeft = (screenWidth - containerWidth) / 2 + logoColWidth;
const arrowPadding = 8;
let tileWidth = document.querySelector('.project-logo').offsetWidth;
const spaceBetween = 8;
let tilesRightCols = Math.ceil((availableSpaceRight - arrowPadding) / (tileWidth + spaceBetween));
let tilesLeftCols = Math.ceil((availableSpaceLeft - arrowPadding) / (tileWidth + spaceBetween));
let tilesRows = 3;
let isMobile = window.outerWidth <= 750;

if (isMobile) {
  tilesRightCols = Math.ceil(window.outerWidth / 100) - 2;
  tilesRows = 1;
  tileWidth = containerWidth / tilesRightCols;

  if (window.outerWidth <= 400) {
    tilesRightCols = tilesRightCols * 2;
  }
}

let root = document.documentElement;
root.style.setProperty('--tilesRightCols', tilesRightCols);
root.style.setProperty('--tilesLeftCols', tilesLeftCols);
root.style.setProperty('--tilesRows', tilesRows);
root.style.setProperty('--tilesWidth', tileWidth + 'px');
root.style.setProperty('--tilesSpaceBetween', spaceBetween + 'px');
let projectRightTiles = [];

if (isMobile) {
  projectRightTiles = projects.map((p, i) => {
    return {
      index: i,
      folder: p.folder
    };
  });
} else {
  for (var i = 0; i < projects.length + tilesRightCols; i++) {
    for (var rowNo = 0; rowNo < tilesRows; rowNo++) {
      if (i + tilesRightCols * rowNo < projects.length) {
        projectRightTiles.push({
          index: i + tilesRightCols * rowNo,
          folder: projects[i + tilesRightCols * rowNo].folder
        });
      } else {
        projectRightTiles.push({});
      }
    }
  }
}

const projectLeftTiles = [];

for (var i = tilesLeftCols * -1; i < projects.length + tilesLeftCols; i++) {
  for (var rowNo = 0; rowNo < tilesRows; rowNo++) {
    if (i - tilesLeftCols * rowNo >= 0 && i - tilesLeftCols * rowNo < projects.length) {
      projectLeftTiles.push({
        index: i - tilesLeftCols * rowNo,
        folder: projects[i - tilesLeftCols * rowNo].folder
      });
    } else {
      projectLeftTiles.push({});
    }
  }
}

let mainSwiper;

function slideTo(index) {
  if (mainSwiper) {
    mainSwiper.slideTo(index, 300);
  }
}

const tilesSwiperRightEle = document.querySelector('.tilesSwiperRight');
tilesSwiperRightEle.innerHTML = `
	  <div class="swiper-wrapper">
	  	${projectRightTiles.map(p => {
  if (p.hasOwnProperty("index")) {
    return `
				    <div class="swiper-slide" onclick="slideTo(${p.index})">
				    	<img class="project-logo" src="/images/projects/${p.folder}/logo.png">
				    </div>
				`;
  } else {
    return `
				    <div class="swiper-slide blank-slide"></div>
				`;
  }
}).join('')}
	  </div>
`;
const tilesSwiperLeftEle = document.querySelector('.tilesSwiperLeft');

if (!isMobile) {
  tilesSwiperLeftEle.innerHTML = `
		  <div class="swiper-wrapper">
		  	${projectLeftTiles.map(p => {
    if (p.hasOwnProperty("index")) {
      return `
					    <div class="swiper-slide" onclick="slideTo(${p.index})">
					    	<img class="project-logo" src="/images/projects/${p.folder}/logo.png">
					    </div>
					`;
    } else {
      return `
					    <div class="swiper-slide blank-slide"></div>
					`;
    }
  }).join('')}
		  </div>
	`;
}

window.addEventListener('DOMContentLoaded', event => {
  function initialiseSubSwiper(ele) {
    return new Swiper(ele, {
      loop: true,
      spaceBetween,
      allowTouchMove: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      pagination: {
        el: ele + ' > .swiper-pagination',
        clickable: true
      }
    });
  }

  const tilesSwiperRight = new Swiper('.projects-container > .swiper.tilesSwiperRight', {
    slidesPerView: tilesRightCols,
    grid: {
      rows: tilesRows
    },
    spaceBetween,
    initialSlide: 1,
    allowTouchMove: isMobile
  });
  let tilesSwiperLeft;

  if (!isMobile) {
    tilesSwiperLeft = new Swiper('.projects-container > .swiper.tilesSwiperLeft', {
      slidesPerView: tilesLeftCols,
      grid: {
        rows: tilesRows
      },
      spaceBetween,
      initialSlide: 0,
      allowTouchMove: false
    });
  }

  const activeSlideSubSlider = '.projects-container > .swiper.mainSwiper > .swiper-wrapper > .swiper-slide.swiper-slide-active > .swiper.screenshots-swiper';
  const InactiveSlideSubSlider = '.projects-container > .swiper.mainSwiper > .swiper-wrapper > .swiper-slide:not(.swiper-slide-active) > .swiper.screenshots-swiper';
  const keyRight = document.querySelector('.key-right');
  const keyLeft = document.querySelector('.key-left');
  mainSwiper = new Swiper('.projects-container > .swiper.mainSwiper', {
    spaceBetween,
    threshold: 25,
    keyboard: true,
    navigation: {
      nextEl: '.key-right',
      prevEl: '.key-left'
    },
    on: {
      afterInit: function (swiper) {
        initialiseSubSwiper(activeSlideSubSlider);
      },
      slideNextTransitionStart: function (swiper) {
        keyRight.classList.remove('pressed');
        setTimeout(function () {
          keyRight.classList.add('pressed');
        }, 1);
      },
      slidePrevTransitionStart: function (swiper) {
        keyLeft.classList.remove('pressed');
        setTimeout(function () {
          keyLeft.classList.add('pressed');
        }, 1);
      },
      slideChangeTransitionStart: function (swiper) {
        initialiseSubSwiper(activeSlideSubSlider);
        tilesSwiperRight.slideTo(swiper.activeIndex + 1, 300);

        if (!isMobile) {
          tilesSwiperLeft.slideTo(swiper.activeIndex, 300);
        }
      },
      slideChangeTransitionEnd: function (swiper) {
        document.querySelectorAll(InactiveSlideSubSlider).forEach(s => {
          if (s.swiper) {
            s.swiper.destroy();
          }
        });
      }
    }
  });
});
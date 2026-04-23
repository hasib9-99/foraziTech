

// fach the xml data
fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("http://rpsandbox.airpear.net:8080/NewDevApi/api/properties?address=111"))
  .then(res => res.text())
  .then(str => {
    // Parse XML string into DOM
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(str, "application/xml");

    // Convert XML → JS object
    let json = xmlToJson(xmlDoc);
    console.log(json);

    const buildingWrap = document.querySelector('.building_wrap');
    const template = buildingWrap.querySelector('.buildings');

    json.list.properties.forEach((p, i) => {
      const building = template.cloneNode(true);

      building.querySelector('.building_type').textContent = p.buildingtype?.['#text'] || ' ';
      building.querySelector('.building_name').textContent = p.buildingname?.['#text'] || ' ';

      let address = building.href;
      building.href = `${address}?id=${p.id?.['#text'] || ''}`;

      buildingWrap.appendChild(building);

    });

    template.remove(); // remove template after use
    return json;

  }).then(x => window.bi = x);



function xmlToJson(xml) {
  // Return text node
  if (xml.nodeType === 3) {
    return xml.nodeValue.trim();
  }

  let obj = {};
  if (xml.attributes && xml.attributes.length > 0) {
    obj["@attributes"] = {};
    for (let attr of xml.attributes) {
      obj["@attributes"][attr.nodeName] = attr.nodeValue;
    }
  }

  // Process child nodes
  if (xml.hasChildNodes()) {
    for (let child of xml.childNodes) {
      let name = child.nodeName;
      let value = xmlToJson(child);

      if (value !== "") {
        if (obj[name] === undefined) {
          obj[name] = value;
        } else {
          // Turn into array if multiple children with same name
          if (!Array.isArray(obj[name])) {
            obj[name] = [obj[name]];
          }
          obj[name].push(value);
        }
      }
    }
  }

  return obj;
}
















const customHeader = document.querySelector(".the_header");
const menuBtn = document.querySelector(".show_custom_menu");
const customMenu = document.querySelector("._menu-popup");
const customPopup = document.querySelector(".custom_popup");
const lineContainer = document.querySelector(".line-container");

const menuDropdown = document.querySelector(".menu_dropdown");
const cards = document.querySelectorAll(".menu_dropdown ._card");

const bottmCard = document.querySelector("._bottom_card");
const menuList = document.querySelectorAll(".menu_list");


let lastScroll = 0;
let menuOpen = false;


// HEADER SCROLL BEHAVIOR
window.addEventListener("scroll", () => {

  if (menuOpen) return; // prevent header hide when menu is open

  const currentScroll = window.pageYOffset;

  // Hide / Show header
  if (currentScroll > lastScroll && currentScroll > 80) {
    customHeader.style.transform = "translateY(-100%)";
  } else {
    customHeader.style.transform = "translateY(0)";
  }

  // Background change
  if (currentScroll > 100) {
    customHeader.classList.add("scrolled");
  } else {
    customHeader.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});


// MENU TOGGLE
menuBtn?.addEventListener("click", () => {

  customMenu.classList.toggle("active");
  customPopup.classList.toggle("active");
  lineContainer.classList.toggle("active");

  menuOpen = customMenu.classList.contains("active");

  if (menuOpen) {
    document.body.style.overflow = "hidden";
    customHeader.style.transform = "translateY(0)";
  } else {
    document.body.style.overflow = "";
  }

});


// DROPDOWN CARD
cards.forEach(card => {
  card.addEventListener("click", () => {

    card.classList.toggle("active");
    menuDropdown.classList.toggle("collapsed");

  });
});

bottmCard.addEventListener("click", () => {
  bottmCard.classList.toggle("active");
  menuDropdown.classList.toggle("collapsed");
  menuList.forEach(list => list.classList.toggle("hide"));
});
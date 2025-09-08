

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

// Plants to choose from
const availablePlants = [
  {genus: 'Garrya',
    species: {
      sciName: 'eliptica',
      comName: 'Coast silktassel',
      src: './images/garrya_eliptica.jpg'}
  },
  {genus: 'Holodiscus',
    species: {
      sciName: 'discolor',
      comName: ['Oceanspray', 'Creambush'],
      src: './images/holodiscus_discolor.jpg'}
  },
  {genus: 'Hippophae',
    species: {
      sciName: 'rhamnoides',
      comName: 'Sea buckthorn',
      src: './images/hippophae_rhamnoides.jpg'}
  },
  {genus: 'Myrica',
    species: {
      sciName: 'californica',
      comName: 'Pacific wax myrtle',
      src: './images/myrica_californica.jpg'}
  },
  {genus: 'Philadelphus',
    species: {
      sciName: 'lewisii',
      comName: 'Mock Orange',
      src: './images/philadelphus_lewisii.jpg'}
  },
  {genus: 'Ceanothus',
    species: [
      {sciName: 'arboreus', comName: 'California lilac',
      src: './images/ceanothus_arboreus.jpg'},
      {sciName: 'sanguineus', comName: 'Oregon tea tree',
      src: './images/ceanothus_sanguineus.jpg'},
      {sciName: 'thysiflorus', comName: 'var. Skylark',
      src: './images/ceanothus_thysiflorus_skylark.jpg'},
      {sciName: 'x pallidus', comName: 'var. Marie Simon',
      src: './images/ceanothus_x_pallidus_Marie_Simon.jpg'}]
    }];

// Create HTML list with checkboxes
availablePlants.forEach(function (e) {
  const listGenus = document.createElement('div');
    listGenus.setAttribute('class', 'accordion');
    listGenus.setAttribute('id', 'accordion' + e.genus);

  //document.querySelector('#available-plants').appendChild(listGenus);

  // Next level div
    const itemContainer = document.createElement('div');
      itemContainer.setAttribute('class', 'accordion-item');

    listGenus.appendChild(itemContainer);

    // Accordion header
      const itemHeader = document.createElement('h2');
        itemHeader.setAttribute('class', 'accordion-header');
        itemHeader.setAttribute('id', 'heading' + e.genus);

      itemContainer.appendChild(itemHeader);

      // Header button
      const genusButton = document.createElement('button');
        genusButton.setAttribute('class', 'accordion-button');
        genusButton.setAttribute('type', 'button');
        genusButton.setAttribute('data-bs-toggle', 'collapse');
        genusButton.setAttribute('data-bs-target', '#collapse' + e.genus);
        genusButton.setAttribute('aria-controls', 'collapse' + e.genus);
        genusButton.innerHTML = e.genus;

      // Accordion container
      const listSpecies = document.createElement('div');
        listSpecies.setAttribute('class', 'accordion-collapse collapse');
        listSpecies.setAttribute('id', 'collapse' + e.genus);
        listSpecies.setAttribute('data-bs-parent', '#accordion' + e.genus);
        listSpecies.setAttribute('aria-labelledby', 'heading' + e.genus);

      itemHeader.appendChild(genusButton);
      itemContainer.appendChild(listSpecies);

      const accordionContainer = document.createElement('div');
        accordionContainer.setAttribute('class', 'accordion-body');

      listSpecies.appendChild(accordionContainer);

      // Species list items, with checkboxes
      // First create variables for species objects & prep for forEach
      let plantList
      if(Array.isArray(e.species)) {
        plantList = e.species;
        } else {
        plantList = [e.species];
      }

      // Now make the divs
      plantList.forEach(function(l) {

        const formCheckContainer = document.createElement('div');
          formCheckContainer.setAttribute('class', 'form-check d-flex flex-row py-2 align-items-center');

        accordionContainer.appendChild(formCheckContainer);

          const checkBox = document.createElement('input');
           checkBox.setAttribute('class', 'form-check-input');
           checkBox.setAttribute('type', 'checkbox');
           checkBox.setAttribute('id', e.genus + '-' + l.sciName);
           checkBox.setAttribute('value', e.genus + ' ' + l.sciName + ' - ' + l.comName);

          const thumbNail = document.createElement('div');
            thumbNail.setAttribute('class', 'thumbnail');
          //  thumbNail.innerHTML += '<img src=' + l.src + ' ' + 'alt=' + ' ' + 'width=100%>';

          const plantPic = document.createElement('img');
            plantPic.setAttribute('src', l.src);
            plantPic.setAttribute('alt', e.genus + ' ' + l.sciName + ' - ' + l.comName);
            plantPic.setAttribute('width', '100%');

            thumbNail.appendChild(plantPic);

          const plantInfo = document.createElement('label');
            plantInfo.setAttribute('class', 'form-check-label');
            plantInfo.setAttribute('for', '#' + e.genus + '-' + l.sciName);
            plantInfo.innerHTML += '<span>' + e.genus + ' ' + l.sciName + '</span>' + ' - ' + l.comName;

          formCheckContainer.appendChild(checkBox);
          formCheckContainer.appendChild(thumbNail);
          formCheckContainer.appendChild(plantInfo);

        })

document.querySelector('#available-plants').appendChild(listGenus);

});

// Get selected plants (checked checkboxes) and store values in Array
function getPlants(listGenus) {
  let plantSelections = [];
  const checkedBoxes = document.querySelectorAll('[type=checkbox]:checked');
  for(let i = 0; i < checkedBoxes.length; i++) {
    plantSelections.push(checkedBoxes[i].value);
  }

  // Send resulting array to modal
  plantSelections.forEach(function (m) {
    const myPlant = document.createElement('li');
    myPlant.textContent = m;
    document.querySelector('#plant-list-items').appendChild(myPlant);
  })
}

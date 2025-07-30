document.addEventListener("DOMContentLoaded", function () {

  function scaleContainer() {
    const container = document.querySelector(".container");
    const containerWidth = container.offsetWidth;
    const windowWidth = window.innerWidth;
    
    // Calcular el escalado basado en el ancho de la ventana
    // Usar un valor más pequeño para el divisor para hacer que los elementos se vean más grandes
    let scale = windowWidth / 2000; // Usar un valor menor para aumentar el tamaño en pantallas pequeñas
    
    // Ajustar el escalado según el tamaño de la pantalla
   /* if (windowWidth <= 480) { // Móviles pequeños
      scale = windowWidth / 900;
    } else if (windowWidth <= 768) { // Móviles
      scale = windowWidth / 1100;
    } else if (windowWidth <= 1024) { // Tablets
      scale = windowWidth / 1600;
    }*/
    
    // Limitar el escalado a un mínimo de 0.25 para que los elementos no se vean demasiado pequeños
    if (scale < 0.25) scale = 0.25;
    
    // Limitar el escalado a un máximo de 0.8 para que los elementos no se vean demasiado grandes
    if (scale > 0.8) scale = 0.8;
    
    container.style.transform = `scale(${scale})`;
    
    // Ajustar la altura del body para evitar scroll innecesario
    // Añadir 80px adicionales para el espacio del título
    document.body.style.height = (container.offsetHeight * scale)  + 50 + 'px';
    
    // Centrar el contenedor horizontalmente
    const scaledWidth = containerWidth * scale;
    const leftPosition = (windowWidth - scaledWidth) / 2;
    container.style.left = leftPosition > 0 ? leftPosition + 'px' : '0px';
  }

  window.addEventListener("resize", scaleContainer);
  scaleContainer(); // Initial scale

  const continuasRightContainer = document.getElementById("continuas-right");
  const continuasLeftContainer = document.getElementById("continuas-left");
  const farLeftControlsContainer = document.querySelector(".far-left-controls");
  const leftControlSectionContainer = document.querySelector(
    ".left-control-section"
  );
  const leftVerticalSectionContainer = document.querySelector(
    ".left-vertical-section"
  );
  const farLeftTowerContainer = document.querySelector(".far-left-tower");
  const mecheraSectionContainer = document.querySelector(".mechera-section");
  const manuarSectionContainer = document.querySelector(".manuar-section");
  const cardaSectionContainer = document.querySelector(".carda-section");
  const peinadorasSectionContainer = document.querySelector(
    ".peinadoras-section"
  );
  const transitoSectionContainer = document.querySelector(".transito-section");
  const batanesSectionContainer = document.querySelector(".batanes-section");

  // Clear existing elements
  continuasRightContainer.innerHTML = "";
  continuasLeftContainer.innerHTML = "";
  farLeftControlsContainer.innerHTML = "";
  leftControlSectionContainer.innerHTML = "";
  leftVerticalSectionContainer.innerHTML = "";
  farLeftTowerContainer.innerHTML = "";
  mecheraSectionContainer.innerHTML = "";
  manuarSectionContainer.innerHTML = "";
  cardaSectionContainer.innerHTML = "";
  peinadorasSectionContainer.innerHTML = "";
  transitoSectionContainer.innerHTML = "";
  batanesSectionContainer.innerHTML = "";

  // 1. 1 torre (shorter)
  const shorterTower = document.createElement("div");
  shorterTower.className = "vertical-segments";
  shorterTower.innerHTML = `
        ${Array(6)
          .fill(
            '<div class="vertical-segment"><div class="segment-detail"></div></div>'
          )
          .join("")}
    `;
  farLeftTowerContainer.appendChild(shorterTower);

  // 2. 8 controles
  for (let i = 0; i < 8; i++) {
    const control = document.createElement("div");
    control.className = "control-unit";
    control.innerHTML = `
            <div class="control-wheel">
                <div class="wheel-spokes  ">
                    ${Array(12).fill('<div class="spoke "></div>').join("")}
                </div>
                <div class="wheel-ring "></div>
                <div class="wheel-center"></div>
            </div>
        `;
    farLeftControlsContainer.appendChild(control);
  }

  // 3. 2 torres
  for (let i = 0; i < 2; i++) {
    const tower = document.createElement("div");
    tower.className = "vertical-equipment";
    tower.innerHTML = `
            <div class="vertical-segments">
                ${Array(8)
                  .fill(
                    '<div class="vertical-segment"><div class="segment-detail"></div></div>'
                  )
                  .join("")}
            </div>
        `;
    leftVerticalSectionContainer.appendChild(tower);
  }

  // 4. 6 controles
  for (let i = 0; i < 6; i++) {
    const control = document.createElement("div");
    control.className = "control-unit";
    control.innerHTML = `
            <div class="control-wheel">
                <div class="wheel-spokes">
                    ${Array(12).fill('<div class="spoke"></div>').join("")}
                </div>
                <div class="wheel-ring"></div>
                <div class="wheel-center"></div>
            </div>
        `;
    leftControlSectionContainer.appendChild(control);
  }

  // 5. 9 shorter continuas
  for (let i = 0; i < 9; i++) {
    const item = document.createElement("div");
    item.className = "equipment-item short";
    item.innerHTML = `<div class="equipment-detail"></div>`;
    continuasLeftContainer.appendChild(item);
  }

  // 6. 15 taller continuas
  for (let i = 0; i < 15; i++) {
    const item = document.createElement("div");
    item.className = "equipment-item";
    item.innerHTML = `<div class="equipment-detail"></div>`;
    continuasRightContainer.appendChild(item);
  }

  // 7. 2 mecheras
  for (let i = 0; i < 2; i++) {
    const mechera = document.createElement("div");
    mechera.className = "mechera";
    mechera.innerHTML = `
            <div class="mechera-arm"></div>
            <div class="mechera-body">
                <div class="mechera-details"></div>
            </div>
        `;
    mecheraSectionContainer.appendChild(mechera);
  }

  // --- Manuares Section ---

  // Group 1: 3 manuares (left)
  const manuarGroup1 = document.createElement("div");
  manuarGroup1.className = "manuar-group";
  manuarSectionContainer.appendChild(manuarGroup1);
  const header1 = document.createElement("div");
  header1.className = "manuar-header";
  header1.textContent = "MANUARES";
  manuarGroup1.appendChild(header1);
  const items1 = document.createElement("div");
  items1.className = "manuar-items";
  manuarGroup1.appendChild(items1);
  for (let i = 0; i < 3; i++) {
    const manuar = document.createElement("div");
    manuar.className = "manuar";
    manuar.innerHTML = `
            <div class="manuar-top"></div>
            <div class="manuar-body">
                <div class="manuar-detail"></div>
                <div class="manuar-detail"></div>
                <div class="manuar-detail"></div>
            </div>
        `;
    items1.appendChild(manuar);
  }

  // Group 2: 3 manuares tipo b
  const items2 = document.createElement("div");
  items2.className = "manuar-items";
  manuarSectionContainer.appendChild(items2);
  for (let i = 0; i < 3; i++) {
    const manuarB = document.createElement("div");
    manuarB.className = "manuar-b";
    manuarB.innerHTML = `
            <div class="manuar-b-top"></div>
            <div class="manuar-b-middle"></div>
            <div class="manuar-b-bottom">
                ${Array(8).fill('<div class="manuar-b-circle"></div>').join("")}
            </div>
        `;
    items2.appendChild(manuarB);
  }

  // Group 3: 2 manuares (with header)
  const manuarGroup3 = document.createElement("div");
  manuarGroup3.className = "manuar-group";
  manuarSectionContainer.appendChild(manuarGroup3);
  const header3 = document.createElement("div");
  header3.className = "manuar-header";
  header3.textContent = "MANUARES";
  manuarGroup3.appendChild(header3);
  const items3 = document.createElement("div");
  items3.className = "manuar-items";
  manuarGroup3.appendChild(items3);
  for (let i = 0; i < 2; i++) {
    const manuar = document.createElement("div");
    manuar.className = "manuar";
    manuar.innerHTML = `
            <div class="manuar-top"></div>
            <div class="manuar-body">
                <div class="manuar-detail"></div>
                <div class="manuar-detail"></div>
                <div class="manuar-detail"></div>
            </div>
        `;
    items3.appendChild(manuar);
  }

  // Group 4: 2 manuares tipo c
  const items4 = document.createElement("div");
  items4.className = "mechera-items";
  manuarSectionContainer.appendChild(items4);
  for (let i = 0; i < 2; i++) {
    const manuarC = document.createElement("div");
    manuarC.className = "manuar-c";
    manuarC.innerHTML = `
            <div class="manuar-c-top"></div>
            <div class="manuar-c-middle"></div>
            <div class="manuar-c-bottom">
                ${Array(8).fill('<div class="manuar-c-circle"></div>').join("")}
            </div>
        `;
    items4.appendChild(manuarC);
  }

  // Group 5: 2 mecheras tipo b
  const items5 = document.createElement("div");
  items5.className = "mechera-items";
  manuarSectionContainer.appendChild(items5);
  for (let i = 0; i < 2; i++) {
    const mecheraB = document.createElement("div");
    mecheraB.className = "mechera-b";
    mecheraB.innerHTML = `
            <div class="mechera-b-body">
                <div class="mechera-b-text">MECHERA</div>
            </div>
            <div class="mechera-b-side"></div>
        `;
    items5.appendChild(mecheraB);
  }

  // 13. 5 cardas
  const cardaGroup = document.createElement("div");
  cardaGroup.className = "manuar-group";
  cardaSectionContainer.appendChild(cardaGroup);

  const cardaContent = document.createElement("div");
  cardaContent.className = "carda-content";
  cardaGroup.appendChild(cardaContent);

  const grafico3 = document.createElement("div");
  grafico3.className = "grafico3";
  grafico3.innerHTML = `
    <div class="grafico3-top-pipes">
      <div class="grafico3-pipe"></div>
      <div class="grafico3-pipe"></div>
    </div>
    <div class="grafico3-main-body">
      <div class="grafico3-body-section"></div>
      <div class="grafico3-body-section"></div>
      <div class="grafico3-body-section"></div>
    </div>
    <div class="grafico3-nozzle"></div>
    <div class="grafico3-bottom-part">
      <div class="grafico3-connector"></div>
      <div class="grafico3-small-rect"></div>
    </div>
  `;
  cardaContent.appendChild(grafico3);

  const cardaItemsGroup = document.createElement("div");
  cardaItemsGroup.className = "carda-items-group";
  cardaContent.appendChild(cardaItemsGroup);

  const cardaHeader = document.createElement("div");
  cardaHeader.className = "manuar-header";
  cardaHeader.textContent = "CARDAS";
  cardaItemsGroup.appendChild(cardaHeader);

  const cardaItems = document.createElement("div");
  cardaItems.className = "manuar-items";
  cardaItemsGroup.appendChild(cardaItems);

  for (let i = 0; i < 5; i++) {
    const carda = document.createElement("div");
    carda.className = "carda";
    carda.innerHTML = `
            <div class="carda-top"></div>
            <div class="carda-middle"></div>
            <div class="carda-bottom"></div>
            <div class="carda-arm"></div>
        `;
    cardaItems.appendChild(carda);
  }

  const grafico1 = document.createElement("div");
  grafico1.className = "grafico1";
  grafico1.innerHTML = `
    <div class="grafico1-top">
      <div class="grafico1-circles-container">
        <div class="grafico1-circle-row">
          ${Array(5).fill('<div class="grafico1-circle"></div>').join("")}
        </div>
        <div class="grafico1-circle-row">
          ${Array(5).fill('<div class="grafico1-circle"></div>').join("")}
        </div>
      </div>
      <div class="grafico1-pattern-rect"></div>
      <div class="grafico1-large-circles">
        <div class="grafico1-large-circle"></div>
        <div class="grafico1-large-circle"></div>
      </div>
      <div class="grafico1-pattern-rect"></div>
    </div>
    <div class="grafico1-bottom"></div>
  `;
  cardaContent.appendChild(grafico1);
  

  const grafico2 = document.createElement("div");
  grafico2.className = "grafico2";
  grafico2.innerHTML = `
    <div class="grafico2-left-circles">
      <div class="grafico2-circle-row">
        ${Array(8).fill('<div class="grafico2-circle"></div>').join("")}
      </div>
      <div class="grafico2-circle-row">
        ${Array(8).fill('<div class="grafico2-circle"></div>').join("")}
      </div>
    </div>
    <div class="grafico2-center">
      <div class="grafico2-rect-large"></div>
      <div class="grafico2-door">
        <div class="grafico2-knob"></div>
      </div>
      <div class="grafico2-right-rects">
        <div class="grafico2-rect-small"></div>
        <div class="grafico2-rect-small-ext"></div>
      </div>
    </div>
    <div class="grafico2-bottom-circles">
      <div class="grafico2-circle-row">
        ${Array(8).fill('<div class="grafico2-circle"></div>').join("")}
      </div>
      <div class="grafico2-circle-row">
        ${Array(8).fill('<div class="grafico2-circle"></div>').join("")}
      </div>
    </div>
  `;
  cardaContent.appendChild(grafico2);

  const grafico4 = document.createElement("div");
  grafico4.className = "grafico4";
  grafico4.innerHTML = `
    <div class="grafico4-main-body">
      <div class="grafico4-body-section"></div>
      <div class="grafico4-body-section"></div>
      <div class="grafico4-body-section"></div>
    </div>
    <div class="grafico4-nozzle"></div>
    <div class="grafico4-bottom-part">
      <div class="grafico4-connector"></div>
      <div class="grafico4-small-rect"></div>
    </div>
  `;
  peinadorasSectionContainer.appendChild(grafico4);

  const peinadorasCardas = document.createElement("div");
  peinadorasCardas.className = "manuar-items";
  peinadorasSectionContainer.appendChild(peinadorasCardas);

  for (let i = 0; i < 3; i++) {
    const carda = document.createElement("div");
    carda.className = "carda";
    carda.innerHTML = `
            <div class="carda-top"></div>
            <div class="carda-middle"></div>
            <div class="carda-bottom"></div>
            <div class="carda-arm"></div>
        `;
    peinadorasCardas.appendChild(carda);
  }

  const grafico5 = document.createElement("div");
  grafico5.className = "grafico5";
  grafico5.innerHTML = `
    <div class="g5-top-boxes">
        <div class="g5-box"></div>
        <div class="g5-box g5-box-text">DEPÓSITOS<br>DE<br>FIBRA</div>
        <div class="g5-box"></div>
        <div class="g5-box"></div>
    </div>
    <div class="g5-bottom-machine">
        <div class="g5-machine-taper">
            <div class="g5-taper-segment"></div>
            <div class="g5-taper-segment"></div>
            <div class="g5-taper-segment"></div>
            <div class="g5-taper-segment"></div>
        </div>
        <div class="g5-machine-main">
            <div class="g5-machine-inner"></div>
        </div>
    </div>
  `;
  peinadorasSectionContainer.appendChild(grafico5);

  const grafico6 = document.createElement("div");
  grafico6.className = "grafico6";
  grafico6.innerHTML = `ROLLOS<br>DE<br>PINADORA`;
  peinadorasSectionContainer.appendChild(grafico6);

  const peinadorasGroup = document.createElement("div");
  peinadorasGroup.className = "manuar-group";
  peinadorasSectionContainer.appendChild(peinadorasGroup);

  const peinadorasHeader = document.createElement("div");
  peinadorasHeader.className = "manuar-header";
  peinadorasHeader.textContent = "PEINADORAS";
  peinadorasGroup.appendChild(peinadorasHeader);

  const peinadorasContainer = document.createElement("div");
  peinadorasContainer.className = "peinadoras-container";
  peinadorasGroup.appendChild(peinadorasContainer);

  for (let i = 0; i < 6; i++) {
    const peinadora = document.createElement("div");
    peinadora.className = "peinadora";
    peinadora.innerHTML = `
      <div class="p-top-section">
        <div class="p-top-box"></div>
        <div class="p-top-box-2"></div>
      </div>
      <div class="p-mid-section">
        <div class="p-mid-left">
          <div class="p-grid-pattern"></div>
          <div class="p-mid-main-structure">
            <div class="p-circle-container">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
            </div>
            <div class="p-vertical-bar">
              <div class="p-inner-detail"></div>
            </div>
          </div>
        </div>
        <div class="p-mid-right">
          <div class="p-top-circle"></div>
          <div class="p-long-vertical-bar"></div>
        </div>
      </div>
      <div class="p-bottom-section">
        <div class="p-bottom-arm">
          ${Array(12).fill('<div class="p-arm-segment"></div>').join("")}
        </div>
        <div class="p-main-shaft"></div>
      </div>
      <div class="p-base">
        <div class="p-base-top">
          <div class="p-base-arch"></div>
        </div>
        <div class="p-base-bottom"></div>
      </div>
    `;
    peinadorasContainer.appendChild(peinadora);
  }

  // Add 'active' class to all peinadoras
  const peinadoras = document.querySelectorAll(".peinadora");
  peinadoras.forEach((peinadora) => {
    peinadora.classList.add("active");
  });

  const grafico7 = document.createElement("div");
  grafico7.className = "grafico7";
  grafico7.innerHTML = `ZONA DE<br>TRÁNSITO DE<br>ROLLOS`;
  transitoSectionContainer.appendChild(grafico7);

  const grafico8 = document.createElement("div");
  grafico8.className = "grafico8";
  grafico8.innerHTML = `
    <div class="g8-left">
      <div class="g8-left-main">
        <div class="g8-left-inner"></div>
      </div>
      <div class="g8-left-bar"></div>
      <div class="g8-left-end">
        <div class="g8-end-top"></div>
        <div class="g8-end-bottom"></div>
      </div>
    </div>
    <div class="g8-right">
      <div class="g8-right-arm"></div>
      <div class="g8-right-main"></div>
      <div class="g8-right-bar"></div>
    </div>
  `;
  transitoSectionContainer.appendChild(grafico8);

  const transitoCardaGroup = document.createElement("div");
  transitoCardaGroup.className = "manuar-group";
  transitoSectionContainer.appendChild(transitoCardaGroup);

  const transitoCardaHeader = document.createElement("div");
  transitoCardaHeader.className = "manuar-header";
  transitoCardaHeader.textContent = "CARDAS";
  transitoCardaGroup.appendChild(transitoCardaHeader);

  const transitoCardaItems = document.createElement("div");
  transitoCardaItems.className = "manuar-items";
  transitoCardaGroup.appendChild(transitoCardaItems);

  for (let i = 0; i < 6; i++) {
    const carda = document.createElement("div");
    carda.className = "carda";
    carda.innerHTML = `
            <div class="carda-top"></div>
            <div class="carda-middle"></div>
            <div class="carda-bottom"></div>
            <div class="carda-arm"></div>
        `;
    transitoCardaItems.appendChild(carda);
  }

  for (let i = 0; i < 2; i++) {
    const grafico9 = document.createElement("div");
    grafico9.className = "grafico9";
    grafico9.innerHTML = `
      <div class="g9-top">
        <div class="g9-top-line"></div>
      </div>
      <div class="g9-mid"></div>
      <div class="g9-bottom">
        <div class="g9-bottom-line"></div>
        <div class="g9-bottom-detail"></div>
      </div>
    `;
    batanesSectionContainer.appendChild(grafico9);
  }

  const batanesGroup = document.createElement("div");
  batanesGroup.className = "manuar-group";
  batanesSectionContainer.appendChild(batanesGroup);

  const batanesHeader = document.createElement("div");
  batanesHeader.className = "manuar-header";
  batanesHeader.textContent = "BATANES";
  batanesGroup.appendChild(batanesHeader);

  const batanesItems = document.createElement("div");
  batanesItems.className = "manuar-items";
  batanesGroup.appendChild(batanesItems);

  for (let i = 0; i < 3; i++) {
    const batan = document.createElement("div");
    batan.className = "batan";
    batan.innerHTML = `
      <div class="batan-top-structure">
        <div class="batan-top-box"></div>
        <div class="batan-top-arms">
          <div class="batan-arm"></div>
          <div class="batan-arm"></div>
        </div>
      </div>
      <div class="batan-main-body"></div>
    `;
    batanesItems.appendChild(batan);
  }

  const grafico10 = document.createElement("div");
  grafico10.className = "grafico10";
  grafico10.innerHTML = `
    <div class="g10-header">ZONA DE ALGODÓN</div>
    <div class="g10-body">
      <div class="g10-section"></div>
      <div class="g10-section"></div>
    </div>
  `;
  batanesSectionContainer.appendChild(grafico10);

  const batanesCardaGroup = document.createElement("div");
  batanesCardaGroup.className = "manuar-group";
  batanesSectionContainer.appendChild(batanesCardaGroup);

  const batanesCardaHeader = document.createElement("div");
  batanesCardaHeader.className = "manuar-header";

  batanesCardaGroup.appendChild(batanesCardaHeader);

  const batanesCardaItems = document.createElement("div");
  batanesCardaItems.className = "manuar-items";
  batanesCardaGroup.appendChild(batanesCardaItems);

  for (let i = 0; i < 6; i++) {
    const carda = document.createElement("div");
    carda.className = "carda";
    carda.innerHTML = `
            <div class="carda-top"></div>
            <div class="carda-middle"></div>
            <div class="carda-bottom"></div>
            <div class="carda-arm"></div>
        `;
    batanesCardaItems.appendChild(carda);
  }
});

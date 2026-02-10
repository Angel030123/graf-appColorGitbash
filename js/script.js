document.addEventListener('DOMContentLoaded', () => {

    // Elementos del DOM
    const colorBox   = document.getElementById('colorBox');
    const rgbValue   = document.getElementById('rgbValue');
    const hexValue   = document.getElementById('hexValue');
  
    // Sliders
    const redRange   = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange  = document.getElementById('blueRange');
  
    // Inputs numéricos
    const redInput   = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput  = document.getElementById('blueInput');
  
    // Función que actualiza todo
    function updateColor() {
      let r = parseInt(redRange.value);
      let g = parseInt(greenRange.value);
      let b = parseInt(blueRange.value);
  
      // Asegurarnos que los valores estén entre 0 y 255
      r = Math.max(0, Math.min(255, r));
      g = Math.max(0, Math.min(255, g));
      b = Math.max(0, Math.min(255, b));
  
      // Actualizar sliders e inputs para que estén sincronizados
      redRange.value = r;
      greenRange.value = g;
      blueRange.value = b;
  
      redInput.value = r;
      greenInput.value = g;
      blueInput.value = b;
  
      // Color en formato rgb
      const rgbColor = `rgb(${r}, ${g}, ${b})`;
      rgbValue.textContent = rgbColor;
  
      // Convertir a hexadecimal
      const hex = rgbToHex(r, g, b);
      hexValue.textContent = hex.toUpperCase();
  
      // Aplicar al recuadro
      colorBox.style.backgroundColor = rgbColor;
    }
  
    // Convertir componente a hexadecimal (dos dígitos)
    function componentToHex(c) {
      const hex = Number(c).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }
  
    // RGB a HEX
    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
  
    // -----------------------------
    // Eventos de los sliders
    // -----------------------------
    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);
  
    // -----------------------------
    // Eventos de los inputs numéricos
    // -----------------------------
    redInput.addEventListener('input', () => {
      let value = parseInt(redInput.value);
      if (isNaN(value)) value = 0;
      redRange.value = value;
      updateColor();
    });
  
    greenInput.addEventListener('input', () => {
      let value = parseInt(greenInput.value);
      if (isNaN(value)) value = 0;
      greenRange.value = value;
      updateColor();
    });
  
    blueInput.addEventListener('input', () => {
      let value = parseInt(blueInput.value);
      if (isNaN(value)) value = 0;
      blueRange.value = value;
      updateColor();
    });
  
    // Validación al perder el foco (opcional pero mejora UX)
    [redInput, greenInput, blueInput].forEach(input => {
      input.addEventListener('blur', () => {
        let value = parseInt(input.value);
        if (isNaN(value)) value = 0;
        value = Math.max(0, Math.min(255, value));
        input.value = value;
        updateColor();
      });
    });
  
    // Inicialización
    updateColor();
  
  });
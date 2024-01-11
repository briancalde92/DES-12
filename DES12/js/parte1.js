document.addEventListener('DOMContentLoaded', function() {

    //Span 
    
    var tematicaElegida = "Equipos de audio";
    var nuevoSpan = document.createElement("span");
    
        nuevoSpan.textContent = "Temática elegida: " + tematicaElegida;
    
    document.body.prepend(nuevoSpan);
    
    // Paleta de colores
    
    // Color1: #f00000 ;
    // Color2: #FFFFFF ;
    // Color3: #32312f ;
    // Color4: #4c1e05 ;
    
    //Array colores
    
    var arreglo = ['#f00000','#FFFFFF', '#32312f', '#4c1e05 ' ];
    console.log(arreglo);
    
    //Select y option
    
    var selectElement = document.createElement('select');
    selectElement.id = 'colors';
    
    arreglo.forEach(function(color) {
      var optionElement = document.createElement('option');
      
      optionElement.value = color;
      optionElement.text = color;
      
      selectElement.add(optionElement);
    });
    
    document.body.prepend(selectElement);
    
    
    //Checkbox
    
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'superpuesto-checkbox';
    
    var label = document.createElement('label');
    label.htmlFor = 'superpuesto-checkbox';
    label.textContent = 'Modo superpuesto';
    
    document.body.prepend(checkbox);
    document.body.prepend(label);
    
    //Circulos 
    
    const circle = document.querySelector('div');
    
    const select = document.getElementById('colors');
    
    select.addEventListener('change', () => {
      const selectColor = select.value;
      console.log(selectColor);
    });
    
     const circleContainer = document.querySelector('.circle');
    
       arreglo = ['#f00000', '#FFFFFF', '#32312f', '#4c1e05'];
    
      const circles = {
        circle1: circleContainer.querySelector('.circle1'),
        circle2: circleContainer.querySelector('.circle2'),
        circle3: circleContainer.querySelector('.circle3'),
        circle4: circleContainer.querySelector('.circle4'),
      };
    
      const initialState = {
        circle1: '#FFFFFF',
        circle2: '#FFFFFF',
        circle3: '#FFFFFF',
        circle4: '#FFFFFF'
      };
    
      // Almacena los colores originales (Button 'Reset')
      Object.keys(initialState).forEach(circle => {
        circles[circle].style.backgroundColor = initialState[circle];
      });
    
      const input = document.getElementById('superpuesto-checkbox');
      
      input.addEventListener('change', () => {
        if (input.checked) {
          console.log('Modo superpuesto activado');
        }
      });
    
      // Event listeners para los círculos
      Object.keys(circles).forEach(circle => {
        circles[circle].addEventListener('click', () => {
          const circleElement = circles[circle];
          fondo(circleElement);
          if (input.checked) {
            // Cambiar los colores de fondo de otros círculos si el modo superpuesto está activado
            Object.keys(circles).forEach(otherCircle => {
              if (otherCircle !== circle) {
                circles[otherCircle].style.backgroundColor = circleElement.style.backgroundColor;
              }
            });
          }
        });
      });
    
      const fondo = (circle) => {
        switch (select.value) {
          case '#f00000':
            circle.style.backgroundColor = arreglo[0];
            break;
          case '#FFFFFF':
            circle.style.backgroundColor = arreglo[1];
            break;
          case '#32312f':
            circle.style.backgroundColor = arreglo[2];
            break;
          case '#4c1e05':
            circle.style.backgroundColor = arreglo[3];
            break;
          default:
            break;
        }
      };
    
       //Creo boton reset 
       let resetElement = document.createElement('button');
       resetElement.textContent = "reset";
       resetElement.id = 'resetButton';
    
       document.body.prepend(resetElement);
    
       
       const resetButton = document.getElementById('resetButton');
    
       resetButton.addEventListener('click', () => {
        // Restablecer los colores originales
        Object.keys(initialState).forEach(circle => {
          circles[circle].style.backgroundColor = initialState[circle];
        });
    
        // Desmarcar el checkbox de superpuesto
        input.checked = false;
      });
    });
    
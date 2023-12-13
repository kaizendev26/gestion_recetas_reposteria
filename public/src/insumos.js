import { createGrid } from '/node_modules/ag-grid-community/dist/ag-grid-community.auto.complete.esm.js'

async function fetchData(urlApi,data){
    const response = await fetch(urlApi, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"},
    })
    return await response.json();
  }

export const render = async (content) => {
    // Cargar HTML desde un archivo externo
    const response = await fetch('./insumos.html');
    const htmlContent = await response.text();
    content.innerHTML = htmlContent;

    const columnDefs = [
        { field: "ingrediente",minWidth: 300,resizable: false},
        { field: "precio",resizable: false },
        { field: "cantidad",resizable: false },
        { field: "unidad" ,resizable: false},
    ];

    //consultar lista de insumos
    const insumos = await fetchData('http://localhost:5000/insumos',{});    
    
    // specify the data
    // const rowData = [
    //     { ingrediente: 'Mantequilla ', 'precio unitario': '2.50', cantidad: 300, unidad: 'gr' },
    //     { ingrediente: 'Azúcar', 'precio unitario': '1.20', cantidad: 500, unidad: 'gr' },
    //     { ingrediente: 'Harina', 'precio unitario': '1.80', cantidad: 400, unidad: 'gr' },
    //     { ingrediente: 'Huevos', 'precio unitario': '0.50', cantidad: 6, unidad: 'unidad' },
    //     { ingrediente: 'Chocolate', 'precio unitario': '3.75', cantidad: 200, unidad: 'gr' },
    //     { ingrediente: 'Leche', 'precio unitario': '1.00', cantidad: 250, unidad: 'ml' },
    //     { ingrediente: 'Vainilla', 'precio unitario': '2.20', cantidad: 30, unidad: 'ml' },
    //     { ingrediente: 'Sal', 'precio unitario': '0.30', cantidad: 10, unidad: 'gr' },
    //     { ingrediente: 'Levadura', 'precio unitario': '1.50', cantidad: 15, unidad: 'gr' },
    //     { ingrediente: 'Frutas', 'precio unitario': '4.00', cantidad: 150, unidad: 'gr' },
    // ];
    
    // let the grid know which columns and what data to use
    const gridOptions = {
        defaultColDef: {
            wrapText: true,
            autoHeight: true,
            filter: true
        },
        columnDefs: columnDefs,
        rowData: insumos,
        autoSizeStrategy: {
            type: 'fitGridWidth'
          },
        //suppressHorizontalScroll: true, // para ocultar la barra de desplazamiento horizontal
    };
    
    const gridDiv = document.querySelector('#myGrid');
    const api = createGrid(gridDiv, gridOptions);

};
import { createGrid } from '/node_modules/ag-grid-community/dist/ag-grid-community.auto.complete.esm.js'

export const render = async (content) => {
    // Cargar HTML desde un archivo externo
    const response = await fetch('./recetas.html');
    const htmlContent = await response.text();
    content.innerHTML = htmlContent;

    console.log('si cargo de nuevo')

    const columnDefs = [
        { field: "make" },
        { field: "model" },
        { field: "price" }
    ];
    
    // specify the data
    const rowData = [
        { make: "Toyota2", model: `Corolla2`, price: 35000 },
        { make: "Ford2", model: "Mondeo2", price: 32000 },
        { make: "Porsche2", model: "Boxter2", price: 72000 }
    ];
    
    // let the grid know which columns and what data to use
    const gridOptions = {
        defaultColDef: {
            wrapText: true,
            autoHeight: true,
            filter: true
        },
        columnDefs: columnDefs,
        rowData: rowData
    };
    
    const gridDiv = document.querySelector('#myGrid');
    const api = createGrid(gridDiv, gridOptions);

};
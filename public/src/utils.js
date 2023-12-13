// Objeto para almacenar las páginas y sus módulos asociados
const pages = {
    insumos: 'insumos.js',
    recetas: 'recetas.js',
};

// Función para cargar una página
export const loadPage = async (page) => {
    const content = document.getElementById('pageContent');
    const modulePath = pages[page];

    try {

        // Importar y ejecutar el módulo de la página
        const module = await import(`./${modulePath}`);
        module.render(content);
    } catch (error) {
        console.error(`Error al cargar la página ${page}:`, error);
    }
};
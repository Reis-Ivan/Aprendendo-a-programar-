function alteraTema() {

    alteraClasse();
    alteraTexto();
};

function alteraClasse() {

    meuTitulo.classList.toggle(darkModeClass);
    meuBotao.classList.toggle(darkModeClass);
    meuFooter.classList.toggle(darkModeClass);
    meuBody.classList.toggle(darkModeClass);
}

function alteraTexto() {

    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (meuBody.classList.contains(darkModeClass)) {
        meuBotao.innerHTML = lightMode;
        meuTitulo.innerHTML = darkMode + ' ON'
        return
    }

    meuBotao.innerHTML = darkMode;
    meuTitulo.innerHTML = lightMode + ' ON';
}



const darkModeClass = 'dark-mode';
const meuTitulo = document.getElementById('page-title');
const meuBotao = document.getElementById('mode-selector');
const meuFooter = document.getElementsByTagName('footer')[0]; //cuidar pois aqui retorna uma string
const meuBody = document.getElementsByTagName('body')[0];




meuBotao.addEventListener("click", alteraTema);
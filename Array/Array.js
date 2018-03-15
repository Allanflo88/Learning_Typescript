var pessoas = [];
function add(pessoa) {
    pessoas.push(pessoa);
}
function show(pessoa) {
    document.getElementById('lista').innerText = pessoas.toString();
}

var pessoas = [];

function add(pessoa: string): void{
    pessoas.push(pessoa);
}

function show(pessoa: string): void{
    document.getElementById('lista').innerText = pessoas.toString();
}
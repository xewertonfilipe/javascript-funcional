const pessoa = Object.freeze({
    nome: 'Maria',
    altura: 1.80,
    cidade: 'São Paulo',
    end: Object.freeze({
        rua: 'Era uma casa muito engraçada'
    })
})

// Atribuição por Referência
const outraPessoa = pessoa

// Passagem por referência (Função inpura!)
function alteraPessoa(pessoa) {
    // clone de pirmeiro nível
    const novaPessoa = { ...pessoa }
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Recife'
    novaPessoa.end.rua = 'ABC1'
    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a = 3;
let b = a;


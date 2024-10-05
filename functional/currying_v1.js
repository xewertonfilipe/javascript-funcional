function textoComTamanhoEntre(min, max, erro, texto) {
    const tamanho = (texto || '').trim().length

    if (tamanho < min || tamanho > max) {
        throw erro
    }
}

const p1 = { nome: 'AA', preco: 15.99, desc: 0.25 }
textoComTamanhoEntre(4, 255, 'Nome inválido!', p1.nome)
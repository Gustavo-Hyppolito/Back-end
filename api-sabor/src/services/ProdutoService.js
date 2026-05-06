const ProdutoRepository = require('../repositories/ProdutoRepository');

class ProdutoService {
    async listarProdutos() {
        const listarProdutos = await ProdutoRepository.listarTodosProdutos();
        return {
            sucesso: true,
            dados: listarProdutos,
        };
    }
    async buscarProdutoPorId(id) {
        if (!id || isNaN(id)) {
            throw{status: 400, message: 'ID inválido'};
            //throw é usado para lançar um erro personalizado, onde podemos definir o status e a mensagem de erro. Nesse caso, se o ID não for fornecido ou não for um número, será lançado um erro com status 400 e uma mensagem indicando que o ID é inválido.
        }
        const produto = await ProdutoRepository.buscarProdutoPorId(id);
        if (!produto) {
            throw{status: 404, message: 'Produto não encontrado'};
            //Se o produto não for encontrado, será lançado um erro com status 404 e uma mensagem indicando que o produto não foi encontrado. 404 é para não encontrado.
        }
        return {
            sucesso: true,
            dados: produto,
        };
    }
    async cadastrarProduto(dados) {
        const { nome, descricao, preco, categoria, disponivel } = dados;
        if (!nome || !descricao || preco === undefined) {
            throw {status: 400, message: 'Dados incompletos'};
        }
        if (typeof preco !== 'number' || preco < 0) {
            throw {status: 400, message: 'Preço inválido'};
        }
        const novoProduto = {
            nome: nome.trim(),
            descricao: descricao.trim(),
            preco,
            categoria: categoria || null,
            disponivel: disponivel ?? true,
        };
        const id = await ProdutoRepository.cadastrarProduto(novoProduto);
        return {
            sucesso: true,
            dados: id,
        };
    }
    async atualizarProduto(id, dados) {
        const                                                                                     
         { nome, descricao, preco, categoria, disponivel } = dados; 

         if (nome!== undefined) produtoAtualizado.nome = nome.trim();
         if (descricao !== undefined) produtoAtualizado.descricao = descricao.trim();
            if (preco !== undefined) {
                if (typeof preco !== 'number' || preco < 0) {
                    throw {status: 400, message: 'Preço inválido'};
                }
                produtoAtualizado.preco = preco;
            }
            if (categoria !== undefined) produtoAtualizado.categoria = categoria;
            if (disponivel !== undefined) produtoAtualizado.disponivel = disponivel;

            if(Object.keys(produtoAtualizado).length === 0) {
                throw {status: 400, message: 'Nenhum dado para atualizar'};
            }
    await ProdutoRepository.atualizarProdutoPorID(id, produtoAtualizado);
    return{
        sucesso: true,
        dados: 'Produto atualizado com sucesso',
        }
    }
    async excluirProduto(id) {
        await ProdutoRepository.excluirProdutoPorID(id);
        return{
            sucesso: true,
            dados: 'Produto excluído com sucesso',
        }
    }                       
    async deletarProduto(id) {
        if (!id || isNaN(id)) {
            throw {status: 400, message: 'ID inválido'};
        }
        await ProdutoRepository.excluirProdutoPorID(id);
        return {
            sucesso: true,
            dados: 'Produto excluído com sucesso',
        };
    }
}

module.exports = new ProdutoService();

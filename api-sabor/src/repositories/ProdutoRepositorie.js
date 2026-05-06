const pool= require('../config/database');

class ProdutoRepositorie{
    async listarTodosProdutos(){
        const [listaTodosProdutos] = await pool.query('SELECT * FROM produtos');
        return listaTodosProdutos;
    }

    async buscarProdutoPorId(id){
        const [produto] = await pool.query('SELECT * FROM produtos WHERE id = ?', [id]);
        return produto[0];
    }
    async cadastrarNovoProduto(dados){
        const {nome, descricao, preco, categoria, disponivel} = dados;

        const id = await pool.query('INSERT INTO produtos (nome, descricao, preco, categoria, disponivel) VALUES (?, ?, ?, ?, ?)', [nome, descricao, preco, categoria, disponivel]);
        return id.insertId;
    }

    async atualizarProdutoPorId(id, dados){
        const nomeCampo = []
        const valorCampo = []

        for(const [key, value] of Object.entries(dados)){
            nomeCampo.push(`${key} = ?`);
            valorCampo.push(value);
        }
        if(nomeCampo.length === 0) return null;

        valorCampo.push(id);

        const query = `UPDATE produtos SET ${nomeCampo.join(', ')} WHERE id = ?`;
        const produtoAtualizado = await pool.query(query, valorCampo);
        return produtoAtualizado.affectedRows > 0;
    }
    async deletarProdutoPorId(id){
        const produtodell = await pool.query('DELETE FROM produtos WHERE id = ?', [id]);
        return produtodell.affectedRows > 0;
    }
}

module.exports = new ProdutoRepositorie();
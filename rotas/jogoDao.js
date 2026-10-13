const express = require('express');
const router = express.Router();
const mysql = require('./mysql').pool;

// 1. GET /api/jogo (Listar todos os jogos)
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error, response: null });
        }
        conn.query(
            'SELECT * FROM jogo;',
            (error, resultado, fields) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error, response: null });
                }
                return res.status(200).send({
                    response: resultado
                });
            }
        );
    });
});

// 2. GET /api/jogo/:id (Consultar jogo por ID)
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error, response: null });
        }
        conn.query(
            'SELECT * FROM jogo WHERE id = ?;',
            [id],
            (error, resultado, fields) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error, response: null });
                }
                if (resultado.length === 0) {
                    return res.status(404).send({ mensagem: 'Jogo não encontrado com esse ID' });
                }
                return res.status(200).send({
                    response: resultado[0]
                });
            }
        );
    });
});

// 3. POST /api/jogo (Cadastrar novo jogo)
router.post('/', (req, res, next) => {
    const { titulo, plataforma, genero } = req.body;

    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error, response: null });
        }
        conn.query(
            'INSERT INTO jogo (titulo, plataforma, genero) VALUES (?, ?, ?);',
            [titulo, plataforma, genero],
            (error, resultado, fields) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error, response: null });
                }
                return res.status(201).send({
                    mensagem: 'Jogo cadastrado com sucesso!',
                    id_cadastrado: resultado.insertId
                });
            }
        );
    });
});

// 4. PUT /api/jogo/:id (Atualizar jogo por ID)
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const { titulo, plataforma, genero } = req.body;

    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error, response: null });
        }
        conn.query(
            'UPDATE jogo SET titulo = ?, plataforma = ?, genero = ? WHERE id = ?;',
            [titulo, plataforma, genero, id],
            (error, resultado, fields) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error, response: null });
                }
                return res.status(200).send({
                    mensagem: 'Jogo atualizado com sucesso!',
                    dados_atualizados: { id, titulo, plataforma, genero }
                });
            }
        );
    });
});

// 5. DELETE /api/jogo/:id (Excluir jogo por ID)
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error, response: null });
        }
        conn.query(
            'DELETE FROM jogo WHERE id = ?;',
            [id],
            (error, resultado, fields) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error, response: null });
                }
                return res.status(200).send({
                    mensagem: 'Jogo excluído com sucesso!',
                    id_excluido: id
                });
            }
        );
    });
});

module.exports = router;
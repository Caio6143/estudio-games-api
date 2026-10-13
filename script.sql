CREATE DATABASE IF NOT EXISTS estudio_games;
USE estudio_games;

CREATE TABLE IF NOT EXISTS jogo (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    plataforma VARCHAR(100) NOT NULL,
    genero VARCHAR(100) NOT NULL
);

INSERT INTO jogo (titulo, plataforma, genero) 
VALUES ('God of War', 'PlayStation', 'Ação/Aventura');

SELECT * FROM jogo;
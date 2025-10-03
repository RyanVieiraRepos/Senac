create database makrama

use  makrama

create table clientes(
id int AUTO_INCREMENT not null PRIMARY KEY,
nome varchar(255) not null,
sobrenome varchar(255) not null,
email varchar(255)not null,
senha varchar(255) not null,
cep varchar(9)not null,
numero int not null,
celular varchar(255),
nascimento date   
)
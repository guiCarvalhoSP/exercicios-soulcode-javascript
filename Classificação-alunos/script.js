// Criando uma lista com as notas para cada aluno
alunos = new Array (3);
alunos[0] ="Joao";
alunos[1] ="Ana";
alunos[2] ="Fred";

notaJoao = new Array (3);
notaJoao[0] = 8
notaJoao[1] = 7
notaJoao[2] = 9

notaAna = new Array (3);
notaAna[0] = 8
notaAna[1] = 10
notaAna[2] = 9

notaFred = new Array (3);
notaFred[0] = 8
notaFred[1] = 6
notaFred[2] = 4

// Criando variavel com media dos alunos

var mediaJoao = (notaJoao[0] + notaJoao[1] + notaJoao[2]) / 3;
var mediaAna = (notaAna[0] + notaAna[1] + notaAna[2]) / 3;
var mediaFred = (notaFred[0] + notaFred[1] + notaFred[2]) / 3;

//Fazendo uma visualização sem usar tabelas

document.write("Alunos: " + alunos[0] + " | " + alunos[1] + " | "+ alunos[2]);

document.write("<br>Materias: ");
document.write("<br>Portug.: " + notaJoao[0] + " _|_ " + notaAna[0] + " _|_  " + notaFred[0]);
document.write("<br>Matem.: " + notaJoao[1] + " _|_  " + notaAna[1] + " _|_  " + notaFred[1] );
document.write("<br>Inglês: " + notaJoao[2] + " _|_  " + notaAna[2] + " _|_  " + notaFred[2]);
document.write("<br><br>Média: " + mediaJoao + " _|_ "  + mediaAna + " _|_ "  + mediaFred );

document.write("<br>Situação: ");
document.write(mediaJoao >= 7 ? "A _|_ " : "R _|_  ");
document.write(mediaAna >= 7 ? "A _|_  " : "R _|_ ");
document.write(mediaFred >= 7 ? "A" : "R");

document.write("<br><br>Situação A = Aprovado; Situação R = Repprovado.");



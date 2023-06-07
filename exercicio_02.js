/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/
class MyError extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos() {
    try{
    return this.atributos();
  } catch (error) {
    console.log(error)
  }
}

  atributos() {
  
      if (this.nome != "" ){
        return{
        nome: this.nome,
        idade: this.idade,
        turma: this.turma   
        };
      } else {
        throw new MyError("se pa deu errado ae")
      }
    }
  }

const estudante = new Estudante("", 16, "3A");

const atributos = estudante.mostrarAtributos();

console.log(atributos)
//console.log(atributos.nome);   
//console.log(atributos.idade);  
//console.log(atributos.turma); 


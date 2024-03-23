// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

let students = [
  {name: "Stela",
  gradeOne: 6,
  gradeTwo: 7
  },
  {name: "Carl",
  gradeOne: 3,
  gradeTwo: 8
  },
  {name: "John",
  gradeOne: 8,
  gradeTwo: 9
  },
  {name: "Stanys",
  gradeOne: 6,
  gradeTwo: 6
  }
]

const average = (index) => {
  let average = (students[index].gradeOne + students[index].gradeTwo) / 2
  return average
}

students.forEach((object, index) => {
  let verification = average(index) >= 7 ? `Parabéns, ${students[index].name}! Você foi aprovado(a)!` : `Não foi dessa vez, ${students[index].name}! Tente novamente!`
  
  alert(`
    A média do(a) aluno(a) é: ${average(index)}
    ${verification}
  `)
})

//input
anoNascimento = 1994
nome = "Otavio"

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade  = anoAtual - anoNascimento
mensagem = " Sou " + nome + " e tenho " + idade + " anos"

//output
alert(mensagem)

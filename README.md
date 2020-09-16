# Acelerando vídeo aulas bloqueadas no Moodle
O objetivo deste script é acelerar aulas de conteúdos em que o estudante já domine mas esteja bloqueado pelo professor, obrigando o aluno a assistir todo o vídeo na velocidade padrão.

Devido a utilização da API do youtube ao invés do seu próprio reprodutor, os professores que utilizam as aulas diretas no moodle como forma de presença, com o controlador de tempo e velocidade de reprodução bloqueadas, obrigando o aluno a assistir a aula inteira, caso a internet caia e a página precise ser atualizada, será necessário reiniciar e assistir todo o vídeo novamente, não podendo voltar para a posição que estava.

Para resolver isso, criei um script em javascript, o que fazemos é utilizar o console do navegador e simular uma query comunicando com a API do Youtube, como se fosse o próprio navegador solicitando a alteração.

Você pode:
- Pular para qualquer etapa do vídeo, definida em segundos.
- Acelerar ou desacelerar o vídeo de 0.25 até 2.0x a velocidade padrão.

ATENÇÃO: NÃO É RECOMENDADO PULAR AS AULAS SEM ASSISTI-LAS, É DE SUMA IMPORTÂNCIA QUE VOCÊ APRENDA O CONTEÚDO, ISSO BUSCA FACILITAR NOS CASOS INFORMADOS ANTERIORMENTE.
NÃO ME RESPONSABILIZO PELO USO DO CÓDIGO AQUI FORNECIDO E AS CONSEQUENCIAS QUE PODERÃO SER IMPOSTAS NO USO DESTE SCRIPT SÃO DE TOTAL RESPONSABILIDADE DO USUÁRIO. 

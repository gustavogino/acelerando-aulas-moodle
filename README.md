# Acelerando vídeo aulas bloqueadas pelo navegador
O objetivo deste script é acelerar aulas de conteúdos em que o estudante já domine mas esteja bloqueado pelo professor, obrigando o aluno a assistir todo o vídeo na velocidade padrão.

Devido a utilização da API do youtube ao invés do seu próprio reprodutor, os professores que utilizam as aulas diretas no moodle como forma de presença, com o controlador de tempo e velocidade de reprodução bloqueadas, obrigando o aluno a assistir a aula inteira, caso a internet caia e a página precise ser atualizada, será necessário reiniciar e assistir todo o vídeo novamente, não podendo voltar para a posição que estava.

Para resolver isso, criei um script em javascript, o que fazemos é utilizar o console do navegador e simular uma query comunicando com a API do Youtube, como se fosse o próprio navegador solicitando a alteração.

Você pode:
- Pular para qualquer etapa do vídeo, definida em segundos.
- Acelerar ou desacelerar o vídeo de 0.25 até 2.0x a velocidade padrão.

Confira como utilizar o código no **[vídeo](https://youtu.be/jLiCCBkBfK0)**.
<p>
    <a href="https://youtu.be/jLiCCBkBfK0" title="Video"><img align="center" src="https://raw.githubusercontent.com/gustavogino/acelerando-videoaulas-bloqueadas/master/Video-preview.gif"></a>
</p>

Fonte dos comandos utilizados: https://developers.google.com/youtube/iframe_api_reference

ATENÇÃO: O conteúdo fornecido busca demonstrar como é possível manipular dados do lado do cliente, fazendo com que pareça o servidor realizando a requisição. Sua utilização para burlar plataformas não é aconselhada. Use por sua conta e risco.


-------------------------

Gustavo Gino Scotton    |   Engenharia da Computação - UFSC   |   gustavo.gino@outlook.com

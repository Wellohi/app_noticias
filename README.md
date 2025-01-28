# Para executar a aplicação localmente:

# Abra uma aba no terminal e digite o seguinte comando:
"ng serve"

# Será apresentada uma porta local onde está hospedado o Frontend

# Abra uma segunda aba no terminal e digite o seguinte comando:
"npx json-server db.json"

# Será apresentada uma porta local onde está hospedado o Backend 


-------------------------------------------------------------------------------------

# Para testar a aplicação: 

 # Cenário: Apresentar Lista de Noticias
    Dado que o Frontend e Backend estão sendo executados corretamente
    Quando se é aberto a aplicação na porta correta
    Então a lista de endereços é apresentada corretamente

 # Cenário: Excluir Noticia da Lista
    Dado que é apresentado o botão 'Excluir'
    Quando se é clicado no botão
    Então a noticia e a descrição referente ao botão devem ser deletados do banco

# Cenário: Abrir Tela de Edição de Noticia 
    Dado que é apresentado o botão 'Editar'
    Quando se é clicado no botão
    Então uma tela de Editar Noticia deve ser apresentada

 # Cenário: Editar Noticia 
    Dado que é apresentado duas caixas, sendo uma de Título e outra de Descrição, e um botão escrito 'Enviar'
    Quando são preenchidas as caixas e clicado no botão 'Enviar'
    Então a noticia e a descrição deverão ser alteradas no banco, apresentando uma mensagem 'Noticia editada com sucesso' e um botão de 'Fechar'

# Cenário: Fechar caixa de dialogo de sucesso 
    Dado que é apresentando uma mensagem 'Noticia editada com sucesso' e um botão de 'Fechar'
    Quando se é clicado no botão 'Fechar'
    Então a mensagem de sucesso 'Noticia editada com sucesso' deverá ser fechada

# Cenário: Abrir Tela de Criação de Noticia 
    Dado que é apresentado o botão 'Criar nova noticia'
    Quando se é clicado no botão
    Então uma tela de Criar Noticia deve ser apresentada

 # Cenário: Editar Noticia 
    Dado que é apresentado duas caixas, sendo uma de Título e outra de Descrição, e um botão escrito 'Enviar'
    Quando são preenchidas as caixas e clicado no botão 'Enviar'
    Então a noticia e a descrição deverão ser enviadas no banco, apresentando uma mensagem 'Noticia salva na lista' e um botão de 'Fechar'

# Cenário: Fechar caixa de dialogo de sucesso 
    Dado que é apresentando uma mensagem 'Noticia salva na lista' e um botão de 'Fechar'
    Quando se é clicado no botão 'Fechar'
    Então a mensagem de sucesso 'Noticia salva na lista' deverá ser fechada

# Cenário: Abrir Tela de Lista de Noticias
    Dado que é apresentado o botão 'Lista de Noticias'
    Quando se é clicado no botão
    Então deve ser apresentada uma tela com uma lista de todas as noticias, seu número, seu título e sua descrição




-------------------------------------------------------------------------------------


# Sobre a estrutura de pastas e arquivos

A estrutuda do projeto foi feita de modo que melhorasse a legibilidade, procurando facilitar no entendimento e procura de pastas e arquivos. Além de ser destinada, também, ser amigavel para que, se necessário, sejam feitas alterações e/ou adições de novas funcionalidades.


-------------------------------------------------------------------------------------


# Crie a build docker com o seguinte comando:
docker build -t noticiasdockerfile .

# Após finalizar a build, execute o docker file com o seguinte comando:
docker run -p 82:82 noticiasdockerfile

# Com o ambiente docker pronto abra o aplicativo colocando no navegador o endereço
localhost:82
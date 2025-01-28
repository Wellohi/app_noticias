

# Crie a build docker com o seguinte comando:
docker build -t noticiasdockerfile .

# Após finalizar a build, execute o docker file com o seguinte comando:
docker run -p 82:82 noticiasdockerfile

# Com o ambiente docker pronto abra o aplicativo colocando no navegador o endereço
localhost:82
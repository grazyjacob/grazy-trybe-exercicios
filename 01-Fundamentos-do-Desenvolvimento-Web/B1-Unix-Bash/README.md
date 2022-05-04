
# Sumário
### Você está na parte de fundamentos Unix & Bash

- Parte I - Criação de arquivos e diretórios  
   -> Exercícios  
   -> History da minha resolução   
   
- Parte II - Manipulação & Busca  
   -> Exercícios  
   -> History da minha resolução  
   
- Skills desenvolvidas


   ### Skills desenvolvidas

- Utilizar o bash.
- Entender como a internet funciona, seus principais conceitos e terminologias.
- Utilizar de forma confortável o Git e o Github.
- Criar documentos HTML estilizados com CSS.
- Utilizar o JavaScript para adicionar comportamento às páginas web.
- Utilizar recursos de HTML e CSS Avançado.
- Trabalhar com JavaScript ES6.
- Criar códigos assíncronos em JavaScript.
- Escrever testes unitários.  
   
   
   
## Parte I - Criação de arquivos e diretórios

### Exercícios

1 -Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.

2- Crie um arquivo de texto com o nome trybe.txt .

3- Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .

4- Renomeie o arquivo trybe.txt .

5- Dentro de unix_tests , crie um novo diretório chamado backup .

6- Mova o arquivo trybe_backup.txt para o diretório backup .

7- Dentro de unix_tests , crie um novo diretório chamado backup2 .

8- Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .

9- Apague a pasta backup .

10- Renomeie a pasta backup2 para backup .

11- Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

12- Apague o diretório backup .

13- Limpe o terminal.

Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :
Copiar
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

14- Mostre na tela as 5 primeiras skills do arquivo skills.txt .

15- Mostre na tela as 4 últimas skills do arquivo skills.txt .

16- Apague todos os arquivos que terminem em .txt .

### History da minha resolução
```
  722  mkdir unix_tests
  723  cd unix_tests/
  724  touch trybe.txt
  725  cp trybe.txt trybe_backup.txt
  726  mv trybe.txt trybe1.txt
  727  mkdir backup
  728  mv trybe_backup.txt backup
  729  ls
  730  mkdir backup2
  731  cd backup2
  732  pwd
  733  cd ..
  734  cd backup
  735  mv trybe_backup.txt /home/graziely/Documents/unix_tests/backup2
  736  ls
  737  cd ..
  738  rm -r backup
  739  ls
  740  mv backup2 backup
  741  ls
  742  pwd
  743  cd backup
  744  pwd
  745  ls
  746  cd ..
  747  rm -r backup
  748  ls
  749  clear
  750  ls
  751  head -n5 skills.txt
  752  tail -n4 skills.txt
  753  rm *txt
  754  ls
  755  history
```

##  Parte II - Manipulação & Busca

### Exercícios

1 - Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
Copiar

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

2 - Mostre todo o conteúdo do arquivo countries.txt na tela.  
3 - Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.  
4 - Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.  
5 - Busque por Brazil no countries.txt.  
6 - Busque novamente por brazil, mas agora utilizando o lower case.  
7 - Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.  
8 - Busque pelas frases que não contenham a palavra fox.  
9 - Conte o número de palavras do arquivo phrases.txt.  
10 - Conte o número de linhas do arquivo phrases.txt.  
11 - Crie os arquivos empty.tbt e empty.pdf.  
12 - Liste todos os arquivos do diretório unix_tests.  
13 - Liste todos os arquivos que terminem com txt.  
14 - Liste todos os arquivos que terminem com tbt ou txt.  
15 - Acesse o manual do comando ls.  


### History da minha resolução

```
  971  cd unix_tests/
  972  curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
  973  ls
  974  less countries.txt
  975  grep Zambia countries.txt 
  976  grep Brazil countries.txt 
  977  grep brazil -i countries.txt 
  978  touch phrases.txt
  979  ls
  980  cat > phrases.txt
  981  grep -iv "fox" phrases.txt 
  982  wc -w phrases.txt 
  983  wc -l phrases.txt 
  984  touch empty.tbt empty.pdf
  985  ls
  986  ls *txt
  987  ls *txt *tbt
  988  man ls
  989  history

```

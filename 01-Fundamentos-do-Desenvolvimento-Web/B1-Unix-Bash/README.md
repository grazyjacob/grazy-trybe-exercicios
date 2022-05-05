
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

 ### Meu comentário sobre o bloco.
 Foi bem produtivo e gostoso aprender essas coisas que apesar de simples serão usadas no meu dia a dia de programação. É como o próprio nome já diz fundamento do desenvolvimento Web, devido a isso é visivel a importancia de ter essas bases bem fixadas. 04-05-22 Graziely Jacob

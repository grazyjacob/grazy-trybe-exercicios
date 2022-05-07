
# Sumário
### Você está na parte de fundamentos Unix & Bash

- Parte I - Comandos de input e output
   -> Exercícios  
   -> History da minha resolução   
   
- Parte II - Manipulação & Busca  
   -> Exercícios   
   -> History da minha resolução   
   
- Skills desenvolvidas


   ### Skills desenvolvidas

Utilizar o comando find;    
Utilizar os operadores > (maior), >> (maior maior) e | (pipe) no terminal;    
Alterar as permissões de arquivos e diretórios;    
Verificar o status e enviar sinais a processos UNIX;    
   
   
   
## Parte I - Criação de arquivos e diretórios

### Exercícios

 Um resumo básico do que foi pedido nos exercicios

1 - Crie um arquivo texto pelo terminal   
2 - Adicione texto nele  
3 - Adicione mais 5 itens à sua lista d  
4 - Conte quantas linhas tem o arquivo skills2.txt.  
5 - Crie um arquivo que contenha as três primeiras frases em ordem alfabética  
6 - conte o numero de linhas que contém br  


### History da minha resolução
```
 1209  cd unix_tests/
 1210  ls
 1211  touch skills2.txt
 1212  cat > skills2.txt 
 1213  ls
 1214  cat >> skills2.txt
 1215  cat skills2.txt 
 1216  wc -l skills2.txt 
 1217  touch top_skills.txt
 1218  ls
 1219  sort < skills2.txt | head -n 3 > top_skills.txt
 1220  ls
 1221  cat top_skills.txt
 1222  touch phrases3.txt
 1223  cat > phrases3.txt
 1224  grep -iv br phrases3.txt 
 1225  history
```

##  Parte II - Permissões

### Exercícios
Um resumo básico do que foi pedido nos exercicios

1 - Rode o comando que ve quais as permissões dos arquivos;  
2 - Mude a permissão de um dos arquivos para q todos usuarios possam ter acesso a leitura e escrita  
3 - retire a permissão de escrita  
4 - utilize o comando chmod 644  


### History da minha resolução

```
 1243  ls -l
 1244  chmod a+rw bunch_of_things.txt 
 1245  ls -l
 1246  chmod a-w bunch_of_things.txt 
 1247  ls -l
 1248  chmod 644 bunch_of_things.txt 
 1249  ls -l
 1250  history


```

##  Parte III - Processos e jobs

### Exercícios
Um resumo básico do que foi pedido nos exercicios

1 - Liste todos os processos;  
2 - execute um processo sleep ;
3 - encontre o PID e mate o processo;  
4 - execute um processo em background;  
5 - execute um processo em foreground; 


comandos utilizados
jobs
kill pid
sleep &

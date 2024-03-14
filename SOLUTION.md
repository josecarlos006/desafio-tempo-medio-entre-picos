# Explicação

## Como foi a implementação?

### No código existe 3 funções tais elas são:

- Função `encontrarPicosVerdadeiros`:

Ela itera sobre os valores fornecidos, verifica se cada valor é um pico verdadeiro e adiciona os picos verdadeiros a um array.

- Função `lerValoresDoArquivo`:

Após ler o conteúdo do arquivo, a função divide esse conteúdo em linhas e converte cada linha em um número. Em seguida, ela retorna uma lista contendo os valores numéricos lidos do arquivo. Em resumo, a função encapsula a lógica de leitura e conversão de valores de um arquivo de texto, tornando o código mais modular e legível.

- Função `calcularTempoMedioEntrePicos`:

Ela faz uso eficiente dos picos fornecidos e calcula o tempo médio corretamente.

## Como foram gerados os dados para validar a sua solução?

- Encontrar picos verdadeiros em uma série de valores, ler os valores de um arquivo e calcular o tempo médio entre os picos.
- Com função para encontrar picos verdadeiros, a função para ler valores do arquivo e a função para calcular o tempo médio entre os picos.

## Exemplo e Execução da solução:

- Para a execução do arquivo ``main.js`` é necessário ter em sua maquina o [*__Node.js__*](https://nodejs.org/en/download/) instalado e em seguida executar o comando no terminal de sua IDE:

```
node main
```

- Existe mais uma pasta chamada de `exemplo2.txt` criada com números sortidos para a elaboração de mais um teste da solução.

- Para a realização de mais um teste basta fazer a alteração de `exemplo.txt` para `exemplo2.txt` na linha '68' do arquivo **main.js** e assim executar normalmente com o comando `node main`.

## Quais as maiores dificuldades ou dúvidas encontradas para a execução da solução?

- A dificuldade e duvida seria o entendimento da problemática em si por ser complexa para a estruturação do código.
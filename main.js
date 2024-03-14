class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `(${this.key}, ${this.value})`;
    }
}

function encontrarPicosVerdadeiros(valores, distancia) {
    const picosVerdadeiros = [];
    for (let i = 1; i < valores.length - 1; i++) {
        // Consideração de valores para o reconhecimento do pico
        if (valores[i] < 0 || valores[i] > 100) {
            continue;
        }
        if (valores[i] >= 50 && valores[i] > valores[i - 1] && valores[i] > valores[i + 1]) {
            let picoVerdadeiro = true;
            // Verifica se o pico é válido comparando com os vizinhos dentro da distância especificada
            for (let j = 1; j <= distancia; j++) {
                if (i - j >= 0) {
                    if (valores[i] <= valores[i - j]) {
                        picoVerdadeiro = false;
                        break;
                    }
                }
                if (i + j < valores.length) {
                    if (valores[i] <= valores[i + j]) {
                        picoVerdadeiro = false;
                        break;
                    }
                }
            }
            if (picoVerdadeiro) {
                picosVerdadeiros.push(new Pair(i, valores[i]));
            }
        }
    }
    return picosVerdadeiros;
}

function lerValoresDoArquivo(nomeArquivo) {
    const fs = require('fs');
    const valores = fs.readFileSync(nomeArquivo, 'utf8').split('\n').map(Number);
    return valores;
}

function calcularTempoMedioEntrePicos(picos) {
    let diferencaTotal = 0;
    // Itera sobre os picos, começando do segundo pico desenvolvido
    for (let i = 1; i < picos.length; i++) {
        // Calcula a diferença entre os índices de pares de picos consecutivos
        const diferenca = picos[i].key - picos[i - 1].key;
        diferencaTotal += diferenca;
    }
    // Calcula o tempo médio entre os picos em segundos
    const tempoMedio = diferencaTotal / (picos.length - 1);
    // Converte o tempo médio para minutos e segundos
    const minutos = Math.floor(tempoMedio / 60);
    const segundos = Math.floor(tempoMedio % 60);
    // Formata o resultado como "mm:ss"
    /*
    mm = minutos
    ss = segundos
    */
    const resultadoFormatado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    return resultadoFormatado;
}

const nomeArquivo = 'exemplo.txt';
const distancia = 5;

try {
    const valores = lerValoresDoArquivo(nomeArquivo);
    const picosVerdadeiros = encontrarPicosVerdadeiros(valores, distancia);

    // Imprime os picos verdadeiros que foram verificados pela variavel 'picosVerdadeiros'
    console.log("Picos verdadeiros: (Segundo, Valor)");
    for (const pico of picosVerdadeiros) {
        console.log(pico);
    }

    // Calcula o tempo médio entre os picos
    const tempoMedioEntrePicos = calcularTempoMedioEntrePicos(picosVerdadeiros);

    // Imprime o tempo médio entre os picos
    console.log("\nTempo médio entre os picos:");
    console.log("TMEP =", tempoMedioEntrePicos);
} catch (error) {
    console.error("Erro ao ler o arquivo:", error);
}
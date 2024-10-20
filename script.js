const txt_dinamic = document.getElementById("txt_dinamic");
const array = ["Programador de Sites", "Desenvolvedor de Software"]; 

/* Variáveis de controle */
let index = 0; // Índice para referência ao elemento atual no array
let letters = ""; // String para exibição na tag dinâmica
let indexLetters = 0; // Índice para referência ao caracter no elemento do array
let interval = false; // Booleano para bloquear ações do código síncrono 

// Função que é chamada para escrever cada letra no `txt_dinamic`
function escrevaCaracter() {
    if (interval) return; // Condição para evitar execução novamente do código enquanto o `setTimeout` está pendente.

    if (index < array.length) { // Condição para só executar se ainda tiver texto para ser lido do `array`
        letters += array[index][indexLetters]; // Adiciona a letra correspondente no `letters` em relação ao índice do elemento do `array` e o índice da letra
        txt_dinamic.textContent = letters; // Atribui o conteúdo do `letters` a tag dinâmica
        indexLetters++; // Incrementa no índice da letra para ir para a próxima letra em relação ao elemento atual no `array`

        if (indexLetters >= array[index].length) { // Condição se atingir o limite de caracteres do elemento atual do `array`
            interval = true; // Define como `true` para o código paralizar e não continuar se chamar a função `escrevaCaracter()` novamente 
            txt_dinamic.classList.add("stop") // Atribui a classe para animação do cursor `|` ficar piscando quando terminar de escrever o elemento atual do `array`

            setTimeout(() => { // Cria o `setTimeout` para esperar 5s antes de começar a apagar a palavra do elemento atual do `array`
                txt_dinamic.classList.remove("stop") // Remove a classe para não piscar o cursor `|` e apenas ficar vísivel

                function removaCaracter() { // Função que será chamada para cada palavra até terminar a frase do elemento atual do `array`
                    if (letters.length !== 0) { // Condição para que enquanto não chegar ao fim da frase do elemento atual do `array`
                        letters = letters.slice(0, -1) // Remova a última letra da frase do elemento atual do `array`
                        txt_dinamic.textContent = letters; // Atribua o conteúdo do `letters` a tag dinâmica

                    } else { // Se chegou ao fim da frase do elemento atual do `array`
                        clearInterval(intervaloRemova); // Pare de executar a função `removaCaracter()` pois já terminou de apagar a frase inteira do elemento atual do `array`

                        index++; // Vá para o próximo índice do elemento do `array`
                        indexLetters = 0; // Define o índice da letra para 0 para ler a frase novamente do começo
                        interval = false; // Define que pode recomeçar o `escrevaCaracter()`, pois está pronto para escrever a nova frase do novo elemento que será percorrido do `array`

                        if (index >= array.length) { // Condição se já percorreu todos os elementos do `array`
                            index = 0; // Volta para o primeiro índice de elemento do `array` fazendo um looping
                        }
                    }
                }

                const intervaloRemova = setInterval(removaCaracter, 100); // Define o intervalo do `setInterval` para a função `removaCaracter()` a cada 100ms
            }, 2000)  // Define o intervalo do `setTimeout` para execução após 2s de escrever totalmente a frase do elemento atual do `array`

        }

    } else {
        clearInterval(escrevaCaracter);  // Define o fim do intervalo do `setInterval` da função `escrevaCaracter()`, pois ultrapassou o índice existente do `array`
    }
}

const intervalEscreva = setInterval(escrevaCaracter, 150);  // Define o início do intervalo do `setInterval` para a função `escrevaCaracter()`, que será executada a cada 150ms
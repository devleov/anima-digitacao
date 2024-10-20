## Conhecimentos Aplicados no Código ✨

Este código exibe um texto dinâmico que alterna entre escrever e apagar frases, criando um efeito de digitação animada. A seguir, estão descritos os principais conceitos utilizados e as linhas correspondentes:

### 1. Manipulação do DOM 🌐  
O código seleciona o elemento HTML onde o texto dinâmico será exibido e modifica seu conteúdo.

- **Linha 1:** `const txt_dinamic = document.getElementById("txt_dinamic");`
- **Linha 20:** `txt_dinamic.textContent = letters;` (para modificar o conteúdo exibido).

### 2. Arrays 📚  
As frases dinâmicas são armazenadas em um array e o código itera sobre os elementos para exibir cada frase.

- **Linha 2:** `const array = ["Programador de Sites", "Desenvolvedor de Software"];`

### 3. Strings ✏️  
O código constrói as strings letra por letra para criar o efeito de digitação. Também utiliza o método `slice()` para apagar as letras gradualmente.

- **Linha 10:** `letters += array[index][indexLetters];` (adiciona uma letra à string `letters`).
- **Linha 31:** `letters = letters.slice(0, -1);` (remove a última letra de `letters`).

### 4. Controle de Fluxo (Condicionais) 🔄  
Condicionais são usadas para verificar o estado do índice das letras e frases, determinando quando começar ou parar o processo de escrita e apagamento.

- **Linha 7:** `if (interval) return;` (impede a execução enquanto um temporizador estiver ativo).
- **Linha 12:** `if (index < array.length) {` (verifica se ainda há frases no array para serem exibidas).
- **Linha 27:** `if (indexLetters >= array[index].length) {` (verifica se todas as letras de uma frase foram exibidas).

### 5. Funções 🛠️  
As operações de escrita e apagamento de letras são encapsuladas em funções reutilizáveis, como `escrevaCaracter` para escrever e `removaCaracter` para apagar.

- **Linha 5:** Definição da função `escrevaCaracter`.
- **Linha 29:** Definição da função `removaCaracter`.

### 6. Temporizadores (`setTimeout` e `setInterval`) ⏳  
Os efeitos de animação de escrita e apagamento são controlados pelos temporizadores `setInterval()` e `setTimeout()`, que criam atrasos entre as operações.

- **Linha 40:** `setTimeout(() => { ... }, 2000);` (pausa de 2 segundos após terminar de escrever uma frase).
- **Linha 36:** `const intervaloRemova = setInterval(removaCaracter, 100);` (chama `removaCaracter` a cada 100 ms).
- **Linha 53:** `const intervalEscreva = setInterval(escrevaCaracter, 150);` (chama `escrevaCaracter` a cada 150 ms).

### 7. Controle de Estado com Variáveis 📊  
Variáveis de controle são usadas para rastrear o progresso da escrita e apagamento das frases, além de determinar se o código deve pausar.

- **Linha 4:** As variáveis `index`, `letters`, `indexLetters`, e `interval` controlam a exibição do texto dinâmico.

### 8. Manipulação de Classes CSS 🎨  
Classes CSS são adicionadas e removidas dinamicamente para controlar o efeito visual do cursor piscante no final da frase.

- **Linha 25:** `txt_dinamic.classList.add("stop");` (adiciona uma classe CSS).
- **Linha 43:** `txt_dinamic.classList.remove("stop");` (remove uma classe CSS).

### 9. Looping em Arrays ♻️  
Quando o código atinge o final do array de frases, ele reinicia o índice para criar um loop contínuo, repetindo as frases indefinidamente.

- **Linha 38:** `index = 0;` (reinicia o loop de frases após exibir todas).

### 10. Funções Assíncronas e Controle de Tempo 🕒  
As funções `setTimeout()` e `setInterval()` implementam a execução assíncrona das operações, permitindo controlar o tempo entre cada etapa da animação de escrita e apagamento.

- **Linha 40:** O `setTimeout` cria um atraso de 2 segundos antes de iniciar a remoção do texto.
- **Linha 36:** O `setInterval` controla o intervalo de tempo entre cada letra removida.

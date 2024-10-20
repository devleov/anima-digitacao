## Conhecimentos Aplicados no Código ✨

Este código foi criado para exibir um efeito de digitação dinâmica que alterna entre escrever e apagar frases, trazendo um toque moderno e interativo para sua página. Abaixo estão os principais conceitos aplicados, com explicações práticas que você pode usar no dia a dia de programação. 🖥️

### 1. Manipulação do DOM 🌐  
Manipulamos o DOM para acessar e modificar o conteúdo do elemento onde o texto será exibido. Isso é comum em qualquer site interativo.

- **Linha 1:** `const txt_dinamic = document.getElementById("txt_dinamic");`  
    Aqui selecionamos o elemento onde o texto será exibido.
- **Linha 20:** `txt_dinamic.textContent = letters;`  
    Atualizamos o conteúdo do texto dinamicamente, letra por letra.

### 2. Arrays 📚  
Um array simples armazena as frases que serão exibidas. Arrays são nossos melhores amigos quando precisamos lidar com múltiplos valores de uma vez.

- **Linha 2:** `const array = ["Programador de Sites", "Desenvolvedor de Software"];`  
    As frases que serão alternadas estão aqui, prontas para serem exibidas.

### 3. Strings ✏️  
Manipulamos strings para criar o efeito de digitação e apagamento de texto. O método `slice()` é uma mão na roda para remover caracteres de uma string.

- **Linha 10:** `letters += array[index][indexLetters];`  
    Adiciona cada letra ao texto exibido, simulando a digitação.
- **Linha 31:** `letters = letters.slice(0, -1);`  
    Aqui removemos a última letra para criar o efeito de apagar o texto.

### 4. Controle de Fluxo (Condicionais) 🔄  
Utilizamos condicionais para garantir que o código siga o fluxo correto, evitando erros ao manipular os índices das frases e letras.

- **Linha 7:** `if (interval) return;`  
    Isso evita que o código tente escrever enquanto o temporizador ainda está ativo.
- **Linha 12:** `if (index < array.length) {`  
    Apenas continua o processo se ainda houver frases para exibir.
- **Linha 27:** `if (indexLetters >= array[index].length) {`  
    Verifica se todas as letras de uma frase já foram exibidas.

### 5. Funções 🛠️  
Encapsulamos a lógica de escrita e apagamento em funções reutilizáveis. Isso é essencial para manter o código limpo e organizado, facilitando alterações futuras.

- **Linha 5:** Definimos a função `escrevaCaracter` para a escrita de letras.
- **Linha 29:** Definimos a função `removaCaracter` para apagar o texto letra por letra.

### 6. Temporizadores (`setTimeout` e `setInterval`) ⏳  
Usamos temporizadores para criar uma pausa entre as ações de escrever e apagar texto, adicionando fluidez à animação.

- **Linha 40:** `setTimeout(() => { ... }, 2000);`  
    Aguarda 2 segundos antes de começar a apagar o texto.
- **Linha 36:** `const intervaloRemova = setInterval(removaCaracter, 100);`  
    Apaga as letras uma a uma, com um intervalo de 100ms entre elas.
- **Linha 53:** `const intervalEscreva = setInterval(escrevaCaracter, 150);`  
    Inicia o efeito de digitação, escrevendo uma nova letra a cada 150ms.

### 7. Controle de Estado com Variáveis 📊  
Para manter o controle do que está acontecendo (e garantir que nada saia dos trilhos), usamos variáveis para monitorar o progresso da animação.

- **Linha 4:** Usamos variáveis como `index`, `letters`, `indexLetters`, e `interval` para controlar cada etapa da exibição.

### 8. Manipulação de Classes CSS 🎨  
Alteramos as classes CSS dinamicamente para controlar o efeito do cursor piscante ao final de cada frase.

- **Linha 25:** `txt_dinamic.classList.add("stop");`  
    Adiciona uma classe CSS para manter o cursor piscando quando o texto termina de ser exibido.
- **Linha 43:** `txt_dinamic.classList.remove("stop");`  
    Remove a classe CSS para interromper o cursor piscante enquanto apagamos o texto.

### 9. Looping em Arrays ♻️  
Para garantir que as frases sejam exibidas continuamente, o código reinicia o índice do array quando chega ao final, criando um loop infinito.

- **Linha 38:** `index = 0;`  
    Reinicia o loop de frases quando todas as opções já foram exibidas.

### 10. Funções Assíncronas e Controle de Tempo 🕒  
A execução assíncrona permite que o código continue rodando enquanto aguardamos os temporizadores, criando um efeito contínuo e sem bloqueios.

- **Linha 40:** O `setTimeout` cria uma pausa antes de começar a apagar o texto.
- **Linha 36:** O `setInterval` controla a remoção de cada letra, criando uma animação suave de apagamento.

---

### Veja visualmente no site 🔗
https://devleov.github.io/anima-digitacao/

Agora que você já viu os conceitos aplicados no código, pode usar essas ideias para criar seus próprios efeitos dinâmicos em páginas web. Não subestime o poder de um simples efeito de digitação para deixar sua aplicação mais interativa e interessante. 😉



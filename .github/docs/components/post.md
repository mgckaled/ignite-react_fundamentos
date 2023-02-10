# Componente `Post.tsx`

> Voltar para o [`index`](../index.md).

## Código

- `<time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">` - permite o usuário verificar o tempo exato ao deixar o cursor por cima do texto.
- `{'  '}` - forma de incluir espaçamentos entra tags no React
- `<button type="submit"></button>` - tipo que define a forma de que o botão tratará o resultado de seu clique.
- `format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})` - formatação de data em hora para o padrão em português BR.
- `formatDistanceToNow(publishedAt, {locale: ptBR,addSuffix: true})` - transformação do tempo em relação ao tempo de publicação com adição de um sufixo. Exemplo: há 9 horas.
- `dateTime={publishedAt.toISOString()}` - trasforma data para um formato padrão de string
- Conceito de Estado: variáveis que eu quero que o component monitore. O `useState()` considera o conceito de desestruturação, sempre com duas posições, cuja a primeira posição é um variável e a segunda é uma função que altera o valor da variável da posição anterior. Essa função também "avisa" o React que alterações foram realizadas. Por de baixo dos panos, o React possui uma fila de atualizações e renderizações, e o estado somente vai ser atualizado após ser processado nessa fila e feito uma nova renderização do componente com os valores atualizados.
- `setComments([...comments, comments.length + 1])` - `...comments` = retorna o array inicial + o tamanho do array + 1.
- `onChange={handleNewCommentChange}` - toda vez que houver uma alteração no `<textarea>`, a função será executada (programação declarativa).
- `value={newCommentText}` - toda vez que o valor do estado mudar, o conteúdo da `<textarea>` irá refletir essa alteração. (programação declarativa).
- método DOM `target` `setCustomValidity()` - método utilizado para identificar a mensagem de validação para um determinado elemento `HTML`.

## Estilos

- `.post + .post {margin-top: 2rem;}` - Estilisa-se todo post que antes dele haja um outro post. Desta forma o primeiro post não receberá `margin-top`.
- `.post > header` - sinal de maior `>` defini o estilo da primeira tag `<header>` dentro do `.post`, evitando o compatilhamento de estilos para eventuais futuras tags do mesmo tipo.
- `font-size: 0.875rem;` - tamanho de 14px (87,5% de 16px).
- `display: block;` dentro de `.authorInfo` - força a quebra de linha.
- a tag `<form>` não possui `witdh` de 100% por padrão
- `.commentForm textarea {resize: none;}` - não dá permissão de redimensionamento do `<textarea>` para o usuário.
- `cursor: pointer;` - altera o tipo de cursor dentro do botão. Precisa ser estilizado, pois não é uma configurção padrão do _CSS_.
- `.commentForm button[type='submit']` - especifica a estilização para o botão de "submit".header
- `.commentForm footer {visibility: hidden;max-height: 0;}` - retira a visibilidade do botão dentro da tag `<footer>` e reduz a altura para zero.
- `.commentForm:focus-within footer {}` - se houver qualquer _focus_ dentro do `commentForm`, a visibilidade da tag `<footer>` será ativada.
- `.commentForm button:disabled {cursor: not-allowed;}` - altera o cursos para não permissão quando o botão estiver desabilitado.

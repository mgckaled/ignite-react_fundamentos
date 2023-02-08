# Componente Comment

> Voltar para o [`index`](../index.md).

## Código

- `<span></span>` - tag utilizada para facilitar a separação do ícone do número com um ponto.
- `const [likeCount, setLikeCount] = useState(0)` criar-se uma estado para controlar a quantidade de "likes". É importante iniciar o estado "(0)" com o mesmo tipo de dado.
- `handleLikeComment() {setLikeCount(state => {return state + 1})}` - essa função aumenta o número de likes em +1 a cada clique no ícone. Para atualizar o valor de likes é o utilizado o `state` que representa o valor anterior de likes.

## Estilos

- A propriedade CSS `word-break` é usada para especificar se o navegador deve inserir ou não quebras de linha onde, normalmente, o texto vazaria de seu container. Mais informações, [aqui](https://developer.mozilla.org/pt-BR/docs/Web/CSS/word-break).
- `.commentBox footer button span::before {content: '\2022';}` - exibir o "pontinho" antes do número. Funciona como uma adição de um elemento antes da tag `<span>`.

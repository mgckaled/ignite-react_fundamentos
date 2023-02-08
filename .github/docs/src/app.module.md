<!-- markdownlint-disable MD010 -->

# Estilos do App

> Voltar para o [`index`](../index.md).

- `align-items: flex-start;` - mantém o _sidebar_ e o _post_ no ínicio, logo abaixo do _header_.
- O código abaixo confere responsividade ao aplicativo, reduzindo a fonte e alterando o _template grid_, conform a a largura estabelecida.

```css
@media (max-width: 768px) {
	html {
		font-size: 87.5%;
	}

	.wrapper {
		grid-template-columns: 1fr;
	}
}
```

## Rotas GET
# Listar Filmes :

 - Lista todos os filmes do banco de dados, ordenando os que não tem avaliação aparecendo primeiro como sugestões.

# Listar um único filme : 
 - Retorna um filme pelo titulo informado(nome igual ao cadastrado), o nome é passado como parametro

## Rota Post: 
- Cria o filme de acordo com o body em json com os campos do createUserDto{
	"title": "Harry Potter",
	"synopsis": "The boy who lived",
	"releaseDate" : "2001-11-19T00:00:00Z",
	"poster" : "foto1",
	"genre": ["ação", "aventura", "ficção cientifica"]
}

## Rotas Patch:
# Atualizar Filme
- Atualiza o filme com o mesmo body do createUserDto, ele atualiza o filme pelo id como parametro

# Avaliação do filme
- Como a avalição é presetada como 0 a rota é um post, então ele vai atualizar a nota do filme, o rating do filme é passado como parametro.

## Rota Delete:
# Deletar Filme
- Deleta Um filme pelo id informado



### Git Clone para copiar o projeto.
### Npm i
### nest start para rodar a aplicação
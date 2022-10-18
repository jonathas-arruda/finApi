# FinApi - Financeira

## Sobre o projeto

### Requisitos

-[X] Deve ser possível criar umma conta . <br />
-[X] Deve ser possível buscar o extrato bancário do cliente. <br />
-[X] Deve ser possível realizar um depósito. <br />
-[X] Deve ser possível realizar um saque. <br />
-[X] Deve ser possível buscar o extrato bancário do cliente por  data.<br />
-[x] Deve ser possível atualizar dados da conta do cliente. <br />
-[x] Deve ser possível obter dados da conta do cliente. <br />
-[X] Deve ser possível deletar uma conta. <br />

### Regras de negócio<br />

-[X] Não deve ser possível cadastrar uma conta com CPF já existente. <br />
-[X] Não deve ser possível buscar extrato em uma conta não existente. <br />
-[X] Não deve ser possível fazer depósito em uma conta não existente. <br />
-[X] Não deve ser possível fazer saque quando o saldo for insuficiente. <br />
-[X] Não deve ser possível fazer saque em uma conta não existente. <br />
-[X] Não deve ser possível excluir uma conta não existente. <br />
-[X] Deve ser possível retornar o saldo (balance). <br />

# Tecnologias utilizadas
## Back end
- NodeJs
- Express

## Implantação em produção

# Como executar o projeto

## Back end
Pré-requisitos: NodeJs, Yarn e Nodemon

```bash
# clonar repositório
https://github.com/jonathas-arruda/finApi.git

# instalar dependências
yarn

# executar o projeto
yarn dev
```
# Autor

Jonathas Arruda

https://www.linkedin.com/in/jonathas-arruda-79115a115/

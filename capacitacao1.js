//Criando as classes requeridas
var requisicao = require('readline-sync')

class pedido{
    constructor(ID_pedido,ID_cliente,status,data){
        this.ID_pedido=ID_pedido;
        this.ID_cliente=ID_cliente;
        this.status=status;
        this.data=data;
        //fazendo os atributos serem unicos
    }
}

class funcionario{
    constructor(ID_funcionario,nome_funcionario,cpf_funcionario,email_funcionario,senha_funcionario){
        this.ID_funcionario=ID_funcionario;
        this.nome_funcionario=nome_funcionario;
        this.cpf_funcionario=cpf_funcionario;
        this.email_funcionario=email_funcionario;
        this.senha_funcionario=senha_funcionario;
        
    
    }


}

class cliente{
    constructor(ID_cliente,nome_cliente,cpf_cliente,email_cliente,senha_cliente,data_nascimento){
        this.ID_cliente=ID_cliente;
        this.nome_cliente=nome_cliente;
        this.cpf_cliente=cpf_cliente;
        this.email_cliente=email_cliente;
        this.senha_cliente=senha_cliente;
        this.data_nascimento=data_nascimento
        
    }
    

    }

class produto{
    constructor(data_validade,preco,quantidade,nome_produto,descricao){
        this.data_validade=data_validade;
        this.preco=preco;
        this.quantidade=quantidade;
        this.nome_produto=nome_produto;
        this.descricao=descricao;

    }
}

class sistema{
    constructor(lista_funcionarios,lista_clientes,lista_produtos,lista_pedidos){
        this.lista_funcionarios = lista_funcionarios;
        this.lista_clientes = lista_clientes;
        this.lista_produtos = lista_produtos;
        this.lista_pedidos = lista_pedidos;
    }

    cadastro_funcionario(){
    
        var n = requisicao.question('Qual o seu nome?')
        var id = null
        var cpf = requisicao.question('Qual o seu CPF?')
        var email = requisicao.question('Qual o seu email?')
        var senha = requisicao.question('Qual é a sua senha?')
        var novofuncionario = new funcionario(id,n,cpf,email,senha)

        return novofuncionario
    }

    cadastro_cliente(){
        //pergunta os atrubutos
        var n = requisicao.question('Qual o seu nome?')
        var id = null
        var cpf = requisicao.question('Qual o seu CPF?')
        var email = requisicao.question('Qual o seu email?')
        var senha = requisicao.question('Qual é a sua senha?')
        var data = requisicao.question('Qual é a sua data de nascimento')
        
        //cria o objeto
        var novocliente = new cliente(id,n,cpf,email,senha,data)

        return novocliente
    
    
    }

    cadastro_produto(){
        var nomeprod = requisicao.question('Qual o nome do produto?')
        var preco = requisicao.question('Qual o preço do produto?')
        var quantidadeestoque = parseFloat(requisicao.question('Qual eh a quantidade em estoque?'))
        var datavalidade = requisicao.question('Qual eh a data de validade?')
        var descricao = requisicao.question('Qual eh a descricao')

        var novoproduto = new produto(datavalidade,preco,quantidadeestoque,nomeprod,descricao)

        return novoproduto



    }
}

function main(){

    //apresentação e opções
    console.log('BEM VINDO A REDE MERCADINHO BOM PREÇO, COMO PODEMOS AJUDAR?')
    var clientes = []
    var produtos = []
    //inicia o programa com a lista vazia de clientes, produtos
    var controle = 0
    var idc = 0
    //comeca o id no zero dos clientes e depois sao somados
    var idf = 0
    //comeca o id no zero dos funcionarios e depois sao somados
    var quantidadedetermosfun = 0
    var quantidadedetermosclientes = 0
    var tiposprod = 0
    //laço que permite a escolha de opções
    var system = new sistema([0],[0],[0],[0])
    while(controle !== 3){

        console.log('digite 1 para cadastro ou login de funcionario \n')
        console.log('digite 2 para cadastro ou login de cliente\n')
        console.log('digite 3 para sair\n')
        
        var controle = parseFloat(requisicao.question())


        //login funcionario ou cadastro funcionario
        if (controle == 1){

            console.log('desejas realizar o cadastro ou o login?\n')
            var escolha = parseFloat(requisicao.question('1 para cadastro / 2 para login\n'))

            

            if (escolha == 1){

                //cadastro funcionario
                
                if (system.lista_funcionarios[0]==0){
                system.lista_funcionarios.pop()}
                //caso a lista nao tenha nenhum funcionario
                   
                system.lista_funcionarios.push(system.cadastro_funcionario())
                //realiza o cadastro depois o seu ID é gerado.
                var addid = system.lista_funcionarios.pop()
                addid.ID_funcionario=idf
                system.lista_funcionarios.push(addid)
                //id é adicionado ao objeto
                console.log(system.lista_funcionarios)
                idf=idf+1
                //adiciona mais um para o proximo ID
                controle = 0
                console.log('FUNCIONARIO CADASTRADO COM SUCESSO!')
                quantidadedetermosfun = quantidadedetermosfun + 1
                //para termos controle de quantos funcionarios temos
                
                
            }
            //login funcionario

            if (escolha == 2){
                
                pos=0
                
                //verifivar lista
                if(system.lista_funcionarios[0]==0){
                     console.log('NAO EXISTEM FUNCIONARIOS CADASTRADOS\n')
                     console.log(system.lista_funcionarios)
                    }

                
                else{
                    var perguntaid = parseFloat(requisicao.question('Qual o seu id?\n'))
                    //pergunta o id
                    
                    while(pos<(quantidadedetermosfun)){

                        var control=0
                        // variavel que controla o que o funcionario vai fazer
                        console.log(system.lista_funcionarios[pos])
                        if (system.lista_funcionarios[pos].ID_funcionario == perguntaid){
                            
                            perguntasenha = requisicao.question('qual eh a sua senha?\n')
                            // caso a senha seja igual a respondida
                            if (perguntaid == system.lista_funcionarios[pos].senha_funcionario){
                            console.log(`BEM VINDO ${system.lista_funcionarios[pos].nome_funcionario}\n`) 
                                //laço acaba quando ususario responder 10
                                while(control != 10){

                                    
                                    console.log('O que desejas fazer?')
                                    console.log('Digite 1 para ver seus dados')
                                    console.log('Digite 2 para modificar seus dados')
                                    console.log('Digite 3 para ver os clientes')
                                    console.log('Digite 4 para cadastrar um produto')
                                    console.log('Digite 5 para editar um produto')
                                    console.log('Digite 6 para ver os produtos')
                                    console.log('Digite 10 para sair')
                                    var pergunta = parseFloat(requisicao.question())

                                    //apenas printa os dados
                                    if (pergunta == 1)
                                        console.log(system.lista_funcionarios[pos])


                                    //printa os dados e pergunta qual deve ser trocado
                                    if (pergunta == 2){
                                        console.log(system.lista_funcionarios[pos])
                                        console.log('O que desejas trocar? 1 para nome, 2 para cpf, 3 para email, 4 para senha')
                                        var pergunta_troca = parseFloat(requisicao.question())

                                        if (pergunta_troca == 1){
                                            //pede o nome do usuario e troca no sistema
                                            novo = requisicao.question('Digite seu novo nome: ')
                                            system.lista_funcionarios[pos].nome_funcionario = novo
                                        }
                                        
                                            //pede o novo cpf do usuario e troca
                                        if (pergunta_troca == 2){
                                            novo = requisicao.question('Digite seu novo cpf: ')
                                            system.lista_funcionarios[pos].cpf_funcionario = novo
                                            
                                        }
                                            //pede o novo email do usuario e o troca
                                        if (pergunta_troca == 3){
                                            novo = requisicao.question('Digite seu novo email: ')
                                            system.lista_funcionarios[pos].email_funcionario= novo
                                            
                                        }
                                            //pede a nova senha do usuario e a troca
                                        if (pergunta_troca == 4){
                                            novo = requisicao.question('Digite sua nova senha')
                                            system.lista_funcionarios[pos].senha_funcionario = novo
                                            
                                        }
                                    }


                                    if (pergunta == 3){
                                        //olha quantos clientes
                                        if (quantidadedetermosclientes == 0){
                                            console.log('NAO HA CLIENTES CADASTRADOS')
                                        }
                                        else{
                                            var newclientes = 0
                                            newclientes=clientes
                                            
                                            console.log(newclientes.sort())
                                            

                                        }
                                
                                    
                                    }

                                    if (pergunta == 4){

                                        if (system.lista_produtos[0]==0){
                                            system.lista_produtos.pop()}
                                            //caso a lista nao tenha nenhum funcionario
                                               
                                            system.lista_produtos.push(system.cadastro_produto())
                                            //realiza o cadastro depois o seu ID é gerado.
                                            var nameprod = system.lista_produtos.pop()
                                            nom = nameprod.nome_produto
                                            produtos.push(nom)
                                            system.lista_produtos.push(nameprod)
                                            
                                            console.log(system.lista_produtos)
                                        
                                            console.log('PRODUTO CADASTRADO COM SUCESSO!')
                                            tiposprod = tiposprod + 1
                                            //para termos controle de quantos produtos temos



                                    }

                                    if (pergunta==5){

                                        //confere a lista de produtos

                                        if (tiposprod == 0){

                                            console.log('NAO HA PRODUTOS CADASTRADOS')
                                        }
                                        
                                        else{

                                            console.log('Qual produto desejas alterar?')
                                            console.log(produtos)
                                            var perguntaprod = requisicao.question()

                                            contador=0
                                            
                                            while (contador<tiposprod){

                                                console.log(produtos,perguntaprod,produtos[contador])

                                                if (perguntaprod == produtos[contador]){

                                                    var produtomudar = system.lista_produtos[contador]
                                                    console.log(produtomudar)

                                                    if (produtomudar.nome_produto==perguntaprod){

                                                        console.log(system.lista_produtos[contador])
                                                        console.log('o que desejas alterar?')
                                                        console.log('Digite 1 para alterar o nome')
                                                        console.log('Digite 2 para alterar o preco')
                                                        console.log('Digite 3 para alterar o estoque')
                                                        console.log('Digite 4 para alterar a descricao')
                                                        console.log('Digite 5 para alterar a validade')
                                                        var ask = parseFloat(requisicao.question())

                                                        if (ask == 1){
                                                            
                                                            var newproduto = requisicao.question('escolha um novo')
                                                            produtomudar.nome_produto= newproduto
                                                            system.lista_produtos[contador]=produtomudar
                                                            console.log(system.lista_produtos[contador])
                                                            produtos[contador]=newproduto
                                                            


                                                        }

                                                        if (ask == 2){
                                                            var newproduto = requisicao.question('escolha um novo')
                                                            produtomudar.preco=newproduto
                                                            system.lista_produtos[contador]=produtomudar
                                                            console.log(system.lista_produtos[contador])


                                                            
                                                        }

                                                        if (ask == 3){
                                                            var newproduto = parseFloat(requisicao.question('escolha um novo'))
                                                            produtomudar.quantidade=newproduto
                                                            system.lista_produtos[contador]=produtomudar
                                                            console.log(system.lista_produtos[contador])

                                                
                                                            
                                                        }

                                                        if (ask == 4){
                                                            var newproduto = requisicao.question('escolha um novo')
                                                            produtomudar.descricao=newproduto
                                                            system.lista_produtos[contador]=produtomudar
                                                            console.log(system.lista_produtos[contador])

                                                            
                                                        }

                                                        if (ask == 5){
                                                            var newproduto = requisicao.question('escolha um novo')
                                                            produtomudar.data_validade=newproduto
                                                            system.lista_produtos[contador]=produtomudar
                                                            console.log(system.lista_produtos[contador])

                                                            
                                                        }




                                                    }

                                            contador=contador+1
                                                }
                                        

                                                }
                                        }


                                    }
                                    if(pergunta==6){

                                        console.log('bom dia')

                                        if(tiposprod=0){
                                            console.log('NAO HA PRODUTOS CADASTRADOS')
                                        }
                                            
                                        else{
                                        var newprodutos=0
                                        //cria uma nova variavel para armazenar a lista ordenada

                                        newprodutos = produtos

                                        newprodutos.sort()
                                        //cria a lista ordenada

                                        contador=0
                                        console.log(tiposprod)
                                        while(contador<tiposprod){
                                            //vai comparando cada termo da lista ordenada com os objetos produto da lista_produto
                                            
                                            
                                            count = 0
                                            while(count<tiposprod){
                                                if (newprodutos[contador]==system.lista_produtos[count].nome_produto){
                                                    console.log(system.lista_produtos[count])
                                                    //vai comparando um por um e imprime na posicao alfabetica correta
                                                }
                                                count=count+1
                                                    

                                            }


                                            contador=contador+1
                                        }
                                    }

                                    }


                                    
                                    
                                    //para sair do laço
                                    if (pergunta == 10){
                                        control = 10
                                    }
                                }
                            }
                            else{
                                console.log('senha errada\n')

                            }

                    
                        }
                    pos=pos+1
                    
                        



                    }

                }
                
                controle = 0



            }

        }
        //login ou cadastro cliente
        if (controle == 2){


            console.log('desejas realizar o cadastro ou o login?\n')
            var escolha = parseFloat(requisicao.question('1 para cadastro / 2 para login\n'))


            if (escolha == 1){

                //cadastro cliente
                system.lista_clientes.pop()
                system.lista_clientes.push(system.cadastro_cliente())
                //executa o cadastro
                var addid = system.lista_clientes.pop()
                addid.ID_cliente=idc
                //adiciona o ID ao cliente
                clientes.push(addid.nome_cliente)
                //adiciona o nome de cliente na lista dos clientes
                system.lista_clientes.push(addid)
                idc=idc+1
                //retira o cliente da lista, colaca-se seu ID, depois o devolve para a lista
                console.log(system.lista_clientes)
                console.log('CLIENTE CADASTRADO COM SUCESSO')
                quantidadedetermosclientes=quantidadedetermosclientes+1
                //aumenta a quantidade de clientes cadastrados
                controle = 0
                //controle volta para zero para podermos voltar para a pagina princilal
            }
                
            

            if (escolha == 2){
                
                pos=0

                //verificar lista clientrs
                if(system.lista_clientes[0]==0){
                    console.log('NAO EXISTEM CLIENTES CADASTRADOS')
                }

            else{
                var perguntaid = parseFloat(requisicao.question('Qual o seu id?\n'))
                //perggunta ID
                
                while(pos<quantidadedetermosclientes){

                    var control = 0
                    //variavel que diz o que o cliente pode fazer
                    console.log(system.lista_clientes[pos])
                    if (system.lista_clientes[pos].ID_cliente == perguntaid){

                        perguntasenha = requisicao.question('qual eh a sua senha\n')
                        // caso a senha seja igual a resposta
                        if (perguntasenha == system.lista_clientes[pos].senha_cliente){

                            while(control != 10){

                                console.log(`BEM VINDO ${system.lista_clientes[pos].nome_cliente}\n`)
                                console.log('O que desejas fazer?')
                                console.log('Digite 10 para sair')
                                var pergunta = parseFloat(requisicao.question())
                                if (pergunta==10){
                                    control = 10
                                }

                            }
                        }
                    }                        
                   
                    pos=pos+1
                }

            
            if(control == 0){
                // se a variavel continuar sendo zero, eh porque ela nao entrou no while depois da senha correta
                console.log('senha incorreta')
            }
            }

                

                
    
                }

            



        }

            
        
            

            


            
        }



}

    main()
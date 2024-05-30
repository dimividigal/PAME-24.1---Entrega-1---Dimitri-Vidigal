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
    constructor(data_validade,preço,quantidade,nome_produto,descrição){
        this.data_validade=data_validade;
        this.preço=preço;
        this.quantidade=quantidade;
        this.nome_produto=nome_produto;
        this.descrição=descrição;

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
        var id = requisicao.question('Qual o seu ID?')
        var cpf = requisicao.question('Qual o seu CPF?')
        var email = requisicao.question('Qual o seu email?')
        var senha = requisicao.question('Qual é a sua senha?')
        var novofuncionario = new funcionario(id,n,cpf,email,senha)

        return novofuncionario
    }

    cadastro_cliente(){
        var n = requisicao.question('Qual o seu nome?')
        var id = requisicao.question('Qual o seu ID?')
        var cpf = requisicao.question('Qual o seu CPF?')
        var email = requisicao.question('Qual o seu email?')
        var senha = requisicao.question('Qual é a sua senha?')
        var data = requisicao.question('Qual é a sua data de nascimento')
        

        var novocliente = new cliente(n,id,cpf,email,senha,data)

        return novocliente
    
    
    }

    login_funcionario(){
        console.log('Qual o seu nome?')
        var pergunta = requisicao.question()
        pos=0

        
        console.log(sistema.lista_funcionarios)





        console.log('Qual a sua senha')
        controle = 0


        



    

}
}

function main(){

    //apresentação e opções
    console.log('BEM VINDO A REDE MERCADINHO BOM PREÇO, COMO PODEMOS AJUDAR?')
    
    var controle = 0
    
    //laço que permite a escolha de opções
    var system = new sistema([],[],[],[])
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

                
                system.lista_funcionarios.push(system.cadastro_funcionario())
                console.log(system.lista_funcionarios)
                controle = 0
                
                
            }

            if (escolha == 2){



            }

        }
        //login ou cadastro cliente
        if (controle == 2){


            console.log('desejas realizar o cadastro ou o login?\n')
            var escolha = parseFloat(requisicao.question('1 para cadastro / 2 para login\n'))


            if (escolha == 1){

                
                system.lista_clientes.push(system.cadastro_cliente())
                console.log(system.lista_clientes)
                controle = 0
                
            

            if (escolha == 2){

                controle = 0
    
                }

            }



        }

            
        
            

            


            
        }











}

    main()
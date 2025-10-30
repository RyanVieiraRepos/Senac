// use('sala')

//acessando o metodo inserir
// db.sala.insertOne({
//     nome: 'Paulo',
//     idade: 22,
//     curso: 'Técnico em Informática para Internet'
// })

// db.sala.find()

// db.sala.insertMany([
// {nome:'Eduardo', idade:17, curso:'Enfermagem'},
// {nome:'Gabriel', idade:22, curso:'Estética'},
// {nome:'Pedro', idade:18, curso:'TST'},
// {nome:'Gabriel', idade:22, curso:'Estética'},

// ])

// db.sala.insertOne({
//     nome: 'murilo',
//     idade:16,
//     curso:'TST'
// })

// db.sala.find({
//     $and:[
//         {idade: {$gt:18}},
//         {idade: {$it:50}}
//     ]

// })


// use('loja')

// db.loja.insertMany([
//     {nome:'Notebook', preco:3500, estoque:10,},
//     {nome:'Mouse',preco:150,estoque:25,},
//     {nome:'Teclado',preco:300,estoque:15,},
//     {nome:'Cadeira',preco:1200,estoque:5,},
//     {nome:'Monitor',preco:800,estoque:8}
// ])

//db.loja.find()

// db.loja.find({estoque:{$lte:10}})

// use('clientes')

// db.clientes.insertMany([
//     {nome:'Carlos',idade:28,cidade:'São Paulo'},

//     {nome:'Beatriz',idade:22,cidade:'Curitiba'},

//     {nome:'Fernando',idade:35,cidade:'Rio de Janeiro'},

//     {nome:'Lucia',idade:30,cidade:'Belo Horizonte'}
// ])



// db.clientes.find()
// db.clientes.find({idade{$gte:25}})
// db.clientes.find({cidade{$in:"São Paulo"}})



// use('vendas')

// db.vendas.insertMany(
//     [
//         {produto:"Notebook",valor:3500,quantidade:1},
//         {produto:"Mouse",valor:150,quantidade:3},
//         {produto:"Teclado",valor:300,quantidade:2},
//         {produto:"Cadeira",valor:1200,quantidade:1},
//         {produto:"Monitor",valor:800,quantidade:2}
//     ]
// )

// db.vendas.find({
//     quantidade:{$gte:2}
// })

// use('loja')

// db.loja.insertMany([
//     {Nome:"TechDistribuidora",Cidade:"São Paulo",tipo:"Eletrônicos"},
//     {Nome:"Moveis C Cia",Cidade:"Curitiba",tipo:"Móveis"},
//     {Nome:"Acessórios Ltda",Cidade:"Rio de Janeiro",tipo:"Eletrônicos"},
//     {Nome:"DecorPlus",Cidade:"Belo Horizonte",tipo:"Decoração"},
// ])

// db.loja.find({
//     tipo:{$eq:"Móveis"}
// })



// use('clientes')

// db.sala.renameCollection('aluno')
// db.clientes.find()

// db.clientes.updateMany(
//     { nome: "Beatriz" },
//     {$set: {idade:18}}
// )

// db.aluno.updateOne({
//    {nome: 'Gabriel',idade:}
//
//})
// db.clientes.updateOne(
//     {_id: ObjectId('68eda4672cdceda1b118d548') },
//     {$rename: {"nomme": "nome"}}
// )



// db.clientes.find(
//     {nome: "Lucia"}
//     {idade: 0, _id:0,curso:0}
// )



// db.clientes.find().limit(3).sort({idade: -1})

//68eda4672cdceda1b118d548

// use('alienigenas_turistas')


// db.alienigenas_turistas.insertMany([
//     {nome:"zlorg",planeta_origem:"nebulon-5",especie:"lumifero",destino:"saturno",humor:"animado",numero_de_tentaculos:4,gasto_medio:230},
//     {nome:"xyra",planeta_origem:"glorptar",especie:"gelatina sentiente",destino:"marte",humor:"curioso",numero_de_tentaculos:0,gasto_medio:130},
//     {nome:"bliptor",planeta_origem:"Kronix",especie:"ciborgue etério",destino:"lua",humor:"entediado",numero_de_tentaculos:2,gasto_medio:90},
//     {nome:"t'quinn",planeta_origem:"vortex-12",especie:"anfíbio cósmigo",destino:"terra",humor:"fascinado",numero_de_tentaculos:6,gasto_medio:320},
//     {nome:"moolah",planeta_origem:"zeltra",especie:"felino galático",destino:"netuno",humor:"sonolento",numero_de_tentaculos:3,gasto_medio:150},
// ])


// db.alienigenas_turistas.find(
//    {gasto_medio:{$gt:200}}
// )

// db.alienigenas_turistas.updateOne(
//     {nome:"moolah"},
//     {$set:{numero_de_tentaculos:4}}

// )


//68f176e1872ad06fb2dbe761


//MAIOR ORDEM DECRESCENTE, PRIMEIRO RESULTADO/DOCUMENTO
// db.alienigenas_turistas.find().sort({gasto_medio:-1}).limit(1)


// db.alienigenas_turistas.find().sort({ destino:1 })

// use('naves_exploradoras')




// db.naves_exploradoras.insertMany([
//     {nome:"Estrela Veloz",modelo:"GX-900",comandante:"Capitã Luna",destino:"Andrômeda",tripulantes:8,status:"Em Missão",autonomia_dias:120,},
//     {nome:"Aurora Nebulosa",modelo:"ZX-12",comandante:"Comandante Vork",destino:"Galáxia Sombria",tripulantes:5,status:"Em manutenção",autonomia_dias:80,},
//     {nome:"Cometa Dourado",modelo:"TX-77",comandante:"Tenente Zog",destino:"Saturno",tripulantes:"12",status:"Em missão",autonomia_dias:150,},
//     {nome:"Eclipse Rubro",modelo:"RX-404",comandante:"Capitão Blork",destino:"Buraco Negro Beta",tripulantes:3,status:"Perdida",autonomia_dias:60,},
//     {nome:"Lótus Cósmica",modelo:"NX-222",comandante:"Dra. Kora",destino:"Terra",tripulantes:10,status:"Em reparos",autonomia_dias:100,}
// ])

// db.naves_exploradoras.find(
//     {autonomia_dias:{$gt:100}},
//     {modelo:0,comandante:0,tripulantes:0,status:0,_id:0}
// )





// db.clientes.updateOne(
//     {_id: ObjectId('68eda4672cdceda1b118d548') },
//     {$rename: {"nomme": "nome"}}                       //RENOMEANDO CAMPO
// )

// db.alienigenas_turistas.updateOne(
//     {nome:"moolah"},
//     {$set:{numero_de_tentaculos:4}}

// )

//68f61f9c3430629148bfbf67 //ecplipse rubro
// db.naves_exploradoras.updateOne(
//     {_id:ObjectId( '68f61f9c3430629148bfbf67')}, //consulta nichada para este documento, caso contrário, todos os status "Perdida" seriam alterados

//     {$set:{status:"Resgatada"}}

// )




//"68f61f9c3430629148bfbf65" // Aurora Nebulosa

// db.naves_exploradoras.updateOne(
//     {_id:ObjectId("68f61f9c3430629148bfbf65")},
//     {$set:{autonomia_dias:"120"}}
// )

// db.naves_exploradoras.find(
// {_id:ObjectId("68f61f9c3430629148bfbf65")}

// )


// use("sala");
// db.aluno.deleteMany({})

// db.aluno.insertMany([
//     { nome: "Paulo", idade: 22, curso: "TII", lab: "lab1" },
//     { nome: "Eduardo", idade: 17, curso: "Enfermagem", lab: "lab11" },
//     { nome: "Pedro", idade: 18, curso: "TST", lab: "lab6" },
//     { nome: "Victor", idade: 25, curso: "Enfermagem", lab: "lab11" },
//     { nome: "Murilo", idade: 40, curso: "TST", lab: "lab6" },
//     { nome: "Henrique", idade: 16, curso: "TST", lab: "lab6" },
//     { nome: "Gabriel", idade: 22, curso: "TII", lab: "lab4" }
// ])


// db.laboratorio.insertMany([
//     { nome: "lab1", qntd: 30, tipo: "informatica" },
//     { nome: "lab4", qntd: 24, tipo: "informatica" },
//     { nome: "lab5", qntd: 14, tipo: "informatica" },
//     { nome: "lab6", qntd: 30, tipo: "hardware" },
//     { nome: "lab7", qntd: 40, tipo: "informatica" },
//     { nome: "lab11", qntd: 35, tipo: "enfermagem" },
// ])

// db.laboratorio.find()

// db.sala.aggregate([
//     {
//         $lookup: {
//             from: "laboratorio",
//             localField: "lab",
//             foreignField: "nome",
//             as: "info_lab"
//         }
//     }
// ])




















use("autor")

// db.autor.insertMany([
//     {nome:"Machado de Assis",nacionalidade:"Brasileiro"},
//     {nome:"George Orwell",nacionalidade:"Britânico"},
//     {nome:"Clarice Lispector",nacionalidade:"Brasileira"},
//     {nome:"J.K Rowling",nacionalidade:"Britânica"},
//     {nome:"Gabriel Garcia Márquez",nacionalidade:"Colombiano"}
// ])




// db.livro.insertMany([
//     {titulo:"Dom Casmurro",autor:"Machado de Assis",ano:1899},
//     {titulo:"1984",autor:"George Orwell",ano:1949},
//     {titulo:"A Hora da Estrela",autor:"Clarice Lispector",ano:1977},
//     {titulo:"Harry Potter",autor:"J.K Rowling",ano:1997},
//     {titulo:"Cem Anos de Solidão",autor:"Gabriel Garcia Márquez",ano:1967},

// ])




// use("autor")
// db.autor.updateOne(
//     {}
// )


// db.naves_exploradoras.find(
// {_id:ObjectId("68f61f9c3430629148bfbf65")}

// )


// db.naves_exploradoras.updateOne(
//     {_id:ObjectId("68f61f9c3430629148bfbf65")},
//     {$set:{autonomia_dias:"120"}}
// )

// db.livro.updateOne(
//     {_id:ObjectId("68fffaa60b15538e7133d016")},
//     {$set:{ano:1998}}
// )


//

// db.autor.find(
//     {
//         $or: [
//             { nacionalidade:"Brasileira"  },

//             { nacionalidade:'Brasileiro'  }
//         ]
//     }
// )

//harry potter
//68fffaa60b15538e7133d016

//livros e dados dos clientes

// db.autor.aggregate([
//     {
//         $lookup: {
//             from: "livro",
//             localField: "nome",   // busco na atual, o campo com as informações iguais de outra tabela
//             foreignField: "autor",
//             as: "livroEautor"

//         }
//     }
// ]
// )


//"68fff9cfb096aa8bcf627f29"
//jk rowling

// use('informatica')

// db.clientes.insertMany([
//     {nome:"Ana",cidade:"São Paulo"},
//     {nome:"Bruno",cidade:"Rio de Janeiro"},
//     {nome:"Carla",cidade:"Belo Horizonte"},
//     {nome:"Daniel",cidade:"Curitiba"},
//     {nome:"Elisa",cidade:"Porto Alegre"}
// ])

// db.pedidos.insertMany([
//     {cliente:'Ana',produto:'Notebook',valor:3500},
//     {cliente:'Bruno',produto:'Celular',valor:1800},
//     {cliente:'Carla',produto:'Tablet',valor:1200},
//     {cliente:'Daniel',produto:'Monitor',valor:900},
//     {cliente:'Elisa',produto:'Impressora',valor:700},
// ])

// db.pedidos.updateOne(
//     {_id:ObjectId('6903b62cdba3708d31b49d34')},
//     {$set:{valor:950}}
// )

// db.livro.updateOne(
//     {_id:ObjectId("68fffaa60b15538e7133d016")},
//     {$set:{ano:1998}}
// )



// db.clientes.aggregate(
//     {
//         $lookup:{
//             from:'pedidos',
//             localField:'nome',
//             foreignField:'cliente',
//             as:'pedidosClientes'
//         }
//     }
// )



use('cinema')

// db.filmes.insertMany(
//     [
//         {titulo:'O grande Golpe',ano:2005,genero:'Ação',estudio:'CineMax'},
//         {titulo:'Amora em paris',ano:2010,genero:'Romance',estudio:'Lumière'},
//         {titulo:'Mistério na Neve',ano:2018,genero:'Suspense',estudio:'CineMax'},
//         {titulo:'Aventura Submarina',ano:2022,genero:'Aventura',estudio:'Oceanic'},
//         {titulo:'O Código Perdido',ano:2015,genero:'Mistério',estudio:'Lumière'}
//     ]
// )


// db.ator.insertMany([
//     {nome:'João Silva',idade:35,filme:'O Grande Golpe'},
//     {nome:'Maria Costa',idade:28,filme:'Amor em Paris'},
//     {nome:'Pedro Martins',idade:42,filme:'Mistério na Neve'},
//     {nome:'Ana Ribeiro',idade:30,filme:'Aventura Subimarina'},
//     {nome:'Lucas Andrade',idade:33,filme:'O Código Perdido'},
// ])


// db.estudio.insertMany([
//     {nome:'CineMax',sede:'São Paulo',fundado:1998},
//     {nome:'Lumière',sede:'Rio de Janeiro',fundado:2005},
//     {nome:'Oceanic',sede:'Recife',fundado:2012},
// ])



// db.filmes.updateOne(
//         {_id:ObjectId('6903bb2bd1f22df1fdf1ec2c')},
//         {$set:{genero:'Ação'}}
//     )



//6903bb2bd1f22df1fdf1ec2c

// db.estudio.find(
//         {fundado:{$lt:2010}}
//     )

db.filmes.aggregate([
    {
        $lookup: {
            from: 'estudio',
            localField: 'estudio',
            foreignField: 'nome',
            as: 'FilmeEestudio'
        }
    },
    {
        $lookup: {
            from: 'ator',
            localField: 'titulo',
            foreignField: 'filme',
            as: 'FilmeEator'
        }
    }
]
)
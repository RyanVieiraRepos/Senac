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

use('alienigenas_turistas')


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


db.alienigenas_turistas.find().sort({ destino:1 })
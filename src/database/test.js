const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')
Database.then(async db => {
    //inserir dados na tabela
       await saveOrphanage(db,{
        lat:"-27.222633",
        lng:"-49.6755874",
        name:"lar das ms",
        about:"presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.",
        whatsapp:"12345678",
        images:["https://images.unsplash.com/photo-1598135753053-2e3075f90763?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"].toString(),
        instructions:"Venha como se sentir avontade e traga muito amor e pasciência para dar.",
        opening_hours:"Horário de vistias Das 18h as 8h",
        open_on_weekends:"1"
      })

    //consuktar dados da tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    
    //consuktar pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

})
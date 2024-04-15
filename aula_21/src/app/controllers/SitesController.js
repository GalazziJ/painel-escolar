let sites = [
    {
        id: 1, name:"SENAI ES", site: "https://senaies.com.br"
    },
    {
        id: 2, name:"VALORANT", site: "https://playvalorant.com/pt-br"
    },
    {
        id: 3, name:"FINDES", site: "https://findes.com.br/"
    }
]

class SitesController{
    // Mostra a lista de sites
    index(req,res){
        console.debug("GET ::/sites")
        return res.json(sites)
    }

    //Mostrar um elemento da lista
    show(req,res){
        const id = parseInt(req.params.id)
        const site = sites.find(function(site) {
        console.debug("GET ::/sites/:id")
        return site.id === id
        })
        const status = site ? 200:404
        return res.status(status).json(site)
    }

    // Insere um elemento na lista
    create(req,res){
        const {name, site} = req.body
        const id = sites[sites.length-1].id+1
        const newSite = {id:id, name:name, site:site}

        sites.push(newSite)

        console.debug("POST ::/sites")
        return res.status(201).json(newSite)
    }

    // Atualiza um registro
    update(req,res){
        const id = parseInt(req.params.id)
        const {name,site} = req.body
        const index = sites.findIndex(function(site) {
        console.debug("PUT ::/sites/:id")
        return site.id === id
        })

        const status = index >=0 ? 200 : 400
        if(index >=0){
        sites[index] = {id,name,site}
        }
    return res.status(status).json(sites[index])
    }

    // Deletando um registro
    destroy(req,res){
        const id = parseInt(req.params.id)
        const index = sites.findIndex(function(site) {

            return site.id === id
        })
        
        const status = index >=0 ? 200:400
        if (index >=0){
            sites.splice(index,1)
        }
        console.debug("DELETE ::/sites/:id")
        return res.status(status).json()
    }

}

module.exports = new SitesController()
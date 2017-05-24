import request  from 'superagent'

export function getMeaning(word, cb){
    request.get('https://mashape-community-urban-dictionary.p.mashape.com/define')
    .query({term: word})
    .set("X-Mashape-Key", "32kjGIKA4gmshPKMZ8f2t8IZatFrp1OUNrHjsnNMHl4U2AdfDN")
    .end((err, res) => {
        if (err){
            cb(err.message)
            return
        }
        const response = res.body
        cb(null, response)
    })
}


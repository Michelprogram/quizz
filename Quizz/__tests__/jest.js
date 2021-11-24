import { describe, test, expect } from '@jest/globals'

import sum from '../jest/script'

/* Template pour crée un test

describe(Une description, ()=>{
    * Arrange -> Positionne le système dans un état choisi
    * Action -> Un test doit faire une seule action
    * Assert -> Vérifie l'état attendu
    
    test(Description,()=>{
        expect(méthode).toBe(resultat attendu)
    })
})

*/

//Test de jest
describe("Test du module jest avec une addition", () => {
    test("Addition 2 + 2", () =>{
        expect(sum(2, 2)).toBe(4)
    })
})
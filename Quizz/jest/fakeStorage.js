class FakeStorage{
    
    collector = {}

    constructor(){
        this.collector = {}
    }

    getItem = (key) => this.collector[key] || null

    setItem = (key,value) => this.collector[key] = String(value)

    removeItem = (key) => delete this.collector[key]
}

export default FakeStorage

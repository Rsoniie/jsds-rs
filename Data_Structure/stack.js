class stack {

    #list = []

    constructor()
    {
        this.#list = []
    }
    push(element)
    {
       this.#list.push(element);
    }

    pop()
    {
        this.#list.pop();
    }

    top()
    {
        if(this.#list.length == 0)
        {
            console.log("Error");
            return -1;
        }
        return this.#list[this.#list.length-1];
    }
    clear()
    {
        while(this.#list.length > 0)
        {
            this.#list.pop();
        }
    }
    isEmpty()
    {
        return this.#list.length;
    }
}

module.exports = stack;
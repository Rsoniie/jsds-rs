console.log("queue is reached");

class queue 
{
    #start = 0
    #end = 0
    #list = []
    #size = 1e8
    constructor()
    {
        this.#start = 0;
        this.#end = 0;
        this.#list = [...Array(size)].fill(undefined);
    }


    push(element)
    {
        this.#end = this.#end%this.#size;
        if(list[this.#end] != undefined)
        {
            console.log("queue is full");
        }
        else 
        {
        list[this.#end] = element;
        this.#end++;
        }
    }

    top()
    {

        this.#start = this.#start%this.#size;
        if(this.#list[this.#start] != undefined)
        {
            return this.#list[this.#start]
        }
        else 
        {
            return undefined;
        }
    }

    pop()
    {
        if(this.#list[this.#start] != undefined)
        {
              this.#list[this.#start] = undefined;
              this.#start++;
              this.#start = this.#start%this.#size;
        }
        else 
        {
            console.log("error")
        }
    }

    clear()
    {
        this.#list = [...Array(size)].fill(undefined);
    }

    isEmpty()
    {
        return this.#list[this.#start] === undefined;
    }

    isFull()
    {
        return this.#list[this.#end] != undefined;
    }
}

module.exports = queue;
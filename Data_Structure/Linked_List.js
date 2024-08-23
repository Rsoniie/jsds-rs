console.log("Linked List is reached")
// Code for Class and constructor of Linked List...

class Node {

    constructor(element) 
    {
          this.value = element;
          this.next = NULL;
    }
};

class LinkedList
{
    #head = NULL;
    #size = 0;

    constructor()
    {
        this.#head = NULL;
        this.#size = 0;
    }

    addAtTail(element)
    {
        var node = new Node(element);
        var curr;
        if(this.#head == NULL)
        {
            this.#head = node;
        }
        else 
        {
            curr = this.#head;
            while(curr.next)
            {
                curr = curr.next;
            }

            curr.next  = node;
        }

        this.#size++;
    }

    addAtIndex(element, index)
    {
        if(index < 0 || index > this.#size)
        {
            console.log("Enter correct value of Index");
        }
        else 
        {
            var curr = this.#head;
            while(index--)
            {
                curr = curr.next;
            }
            var node = new Node(element);
            var temp = curr.next;
            curr.next = node;
            curr = curr.next;
            curr.next  = temp;
            this.#size++;
        }
    }


    removeFromIndex(index)
    {
        if(index < 0 || index > this.#size)
        {
            console.log("Enter correct value");
        }
        else 
        {
            index--;
            while(index--)
            {
                curr = curr.next;
            }
            curr.next = curr.next.next;

            this.#size--;
        }
    }


    removeFirstElement()
    {
        this.#size--;
        var curr = this.#head;
        curr = curr.next;
        this.#head = curr;
    }


    FindIndex(element)
    {
         var ind = 0;
         var curr = this.#head;
         while(curr)
         { 
                if(curr.value == element)
                {
                    return ind;
                }
                ind++;
                curr = curr.next;
         }

         return -1;
    }

    FindValue(index)
    {
        var cnt = 0;
        var curr = this.#head;
        while(curr)
            {
                if(cnt === index)
                {
                    return curr.value;
                }
                cnt++;
                curr = curr.next;
            }   
    }


    isEmpty()
    {
        return this.#size == 0;
    }
    Size()
    {
        return this.#size;
    }

    printList()
    {
        var curr = this.#head;
        list = ""
        while(curr)
        {
            list = list  + curr.value + " ";
            curr = curr.next;
        }

        console.log(list);
    }
                                                                                                                                                                                                                                                                                                                                    

}

module.exports = LinkedList;
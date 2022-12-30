/* 
    whenever we create an javascript file and run that file 
    javascript start an execution context what does i mean by that let me explain 
    execution context mean the code that is currently runing 

    so javascript underhood start the global execution first the global execution gets changes 
    accroding to the environment so for example 
    for browser it is going to be 
    window object or this {
        window and this are always equal 
        if you do 
        console.log(window==this)
        it will return true 
    }
    for node it is going to be 
    global object 


    we can also add vaiable to the this global execution context 
    just by declaring a new variable 


    after gexecuting global execution we other function get started 

    for ex ->
        function top1(){
            console.log(true)
        }
        function top2(){
            top1()
        }
        top2()

        so it will work like 

        top1                        // top layer 
        top2                        // then second layer 
        global execution ,this      //last layer


        */
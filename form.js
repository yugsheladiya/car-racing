class form {
    constructor(){

    }

    display(){

        var title = createElement("h1");
        title.html("car racing");
        title.position(130,0);
        
        var input = createInput("name");

        var button = createButton("play");

        input.position(130,160);

        button.position(250,200);

        button.mousePressed(function(){
            input.hide();

            button.hide();

            var name = input.value();

            var greeting = createElement("h3");

            greeting.html("hello " + name);

            greeting.position(130,160);

        });
    }
}
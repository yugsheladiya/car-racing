class game {
    constructor(){

    }

 getState(){

    var gameStateRef = database.ref("gamestate");
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })
 }

 update(state){

database.ref("/").update({
    gameState : state
})

 }

 start(){

if(gameState === 0 ){
    Form = new form()
    Form.display();
}

 }
}
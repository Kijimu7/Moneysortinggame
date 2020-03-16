
  var stageWidth =  1000;
  var stageHeight =  800;

  var stage = new Konva.Stage({
    width: stageWidth,
    height: stageHeight,
    container: 'container'
});

    var layer = new Konva.Layer();
    stage.add(layer);

  

var data = {
    items: [ 
        {id: 'coin1yen', type: 'coin', src: "https://illustrain.com/img/work/2016/illustrain09-okane5.png", name: '1yen', x:20, y:20},
        {id: 'coin5yen', type: 'coin', src: "https://illustrain.com/img/work/2016/illustrain09-okane6.png", name: '5yen', x:130, y:20},
        {id: 'coin10yen', type: 'coin', src: "https://illustrain.com/img/work/2016/illustrain09-okane7.png", name: '10yen', x:250, y:20},
        {id: 'coin50yen', type: 'coin', src: "https://illustrain.com/img/work/2016/illustrain02-money04.png", name: '50yen', x:20, y:150},
        {id: 'coin100yen', type: 'coin', src: "https://illustrain.com/img/work/2016/illustrain09-okane8.png", name: '100yen', x:130, y:150},
        {id: 'coin500yen', type: 'coin', src: "https://illustrain.com/img/work/2016/illustrain02-money06.png", name: '500yen', x:250, y:150},
        {id: 'piggy1yen', type: 'piggy', src: "https://user-images.githubusercontent.com/31402838/63416628-a322b080-c3b4-11e9-96e8-e709ace70ec1.png", name: '1yen', x:20, y:320},
        {id: 'piggy5yen', type: 'piggy', src: "https://user-images.githubusercontent.com/31402838/63416629-a322b080-c3b4-11e9-94a8-eb6c008d4584.png", name: '5yen', x:120, y:320},
        {id: 'piggy10yen', type: 'piggy', src: "https://user-images.githubusercontent.com/31402838/63416630-a322b080-c3b4-11e9-95ef-a04228fc3c0d.png", name: '10yen', x:250, y:320},
        {id: 'piggy50yen', type: 'piggy', src: "https://user-images.githubusercontent.com/31402838/63416631-a322b080-c3b4-11e9-9e99-43061e2eaf2c.png", name: '50yen', x:20, y:450},
        {id: 'piggy100yen', type: 'piggy', src: "https://user-images.githubusercontent.com/31402838/63416626-a322b080-c3b4-11e9-9ff6-00b3babf3fe9.png", name: '100yen', x:130, y:450},
        {id: 'piggy500yen', type: 'piggy', src: "https://user-images.githubusercontent.com/31402838/63416627-a322b080-c3b4-11e9-86c4-4edf13a57063.png", name: '500yen', x:250, y:450}
    ]
}

//iterate the data items to create the canvas objects.
for (var i = 0; i < data.items.length; i = i + 1){
    var item = data.items[i];
    var isDraggable = item.type == 'coin';
    makeObject(item, isDraggable);
}

//object factory to trun data items into canvas objcts.
function makeObject(obj, draggable){

    var theImg = new Konva.Image({
        x:obj.x,
        y:obj.y,
        width: 100,
        height:100,
        draggable: draggable,
        name: obj.name
    });
    layer.add(theImg);

    theImg.setAttr('objType', obj.type); //same appproach as using html element custom data.
    console.log(theImg);
    drawImage(obj.src, theImg);
}

// This will draw the image on the canvas.
function drawImage(source, konvaImage) {
    var image = new Image();
    image.src = source;
    image.onload = function() {
        konvaImage.image(image);
        layer.draw();
    }
}

//use event delegation to update pointer style

layer.on('mouseover', function(evt){
    var shape = evt.target;
    document.body.style.cursor = 'pointer';
    shape.strokeEnabled(false);
    layer.draw();
});

layer.on('mouseout', function(evt){
    var shape = evt.target;
    document.body.style.cursor = 'default';
    shape.strokeEnabled(false);
    layer.draw();
});

//collision
layer.on('dragmove', function(e){
    var target = e.target;
    var targetRect = e.target.getClientRect();
    layer.children.each(function(obj){
        if(obj === target){
            return;
        }

 // capture the result of the intersection test
 var checkHit = haveIntersection(obj.getClientRect(), targetRect);

 //get the objects name attribute
 var nameDragged = e.target.attrs.name;
 var namePiggy = obj.attrs.name;

 //decide if they match
 var checkNames = (nameDragged === namePiggy);

 //finaly decide if we have a valid hit

 if(checkHit && obj.attrs.objType === 'piggy'){//added the objType check.
   if(checkNames) {
     playYesAudio();
   }
 else{
    playNoAudio();
 }
}    
 
 });
});

function haveIntersection(r1, r2){
    return!(
        r2.x > r1.x + r1.width/2 ||
        r2.x + r2.width/2 < r1.x ||
        r2.y > r1.y + r1.height/2 ||
        r2.y + r2.height/2 < r1.y
    );
}

var y = document.getElementById("yesAudio");
function playYesAudio() { 
 y.play(); 
} 

var x = document.getElementById("noAudio");
function playNoAudio() { 
 x.play(); 
} 

var p = document.getElementById("pause");
function pauseAudio(){
    p.pause();
}

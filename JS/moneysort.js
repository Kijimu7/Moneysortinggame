
  var stageWidth =  1000;
 var stageHeight =  800;

    var stage = new Konva.Stage({
        width: stageWidth,
        height: stageHeight,
        container: 'container'
    });

    var layer = new Konva.Layer();
    stage.add(layer);

    //1yen
    var ichiYenImg = new Konva.Image({
        x:20,
        y:20,
        width:100,
        height: 100,
        draggable: true,
        name: '1yen'
            }); 
    layer.add(ichiYenImg);

    //5yen
    var goYenImg = new Konva.Image({
        x:250,
        y:20,
        width:100,
        height: 100,
        draggable: true,
        name: '5yen'
    });
layer.add(goYenImg);

    //10yen
    var jyuYenImg = new Konva.Image({
        x:250,
        y:150,
        width:100,
        height: 100,
        draggable: true,
        name: '10yen'
    });
layer.add(jyuYenImg);

    //50yen
    var gojyuYenImg = new Konva.Image({
        x:20,
        y:150,
        width:100,
        height: 100,
        draggable: true,
        name: '50yen'
    });
layer.add(gojyuYenImg);

    //500yen
    var gohyakuYenImg = new Konva.Image({
        x:130,
        y:20,
        width:100,
        height: 100,
        draggable: true,
        name:'500yen'
    });
layer.add(gohyakuYenImg);

    //100yen
    var hyakuYenImg = new Konva.Image({
        x:130,
        y:150,
        width:100,
        height: 100,
        draggable: true,
        name: '100yen'
    });
layer.add(hyakuYenImg);

  //piggy bank 1yen
  var ichiYenpiggyImg = new Konva.Image({
        x:100,
        y:500,
        width:100,
        height: 100,
        draggable: false,
        name: '1yen'
    });
layer.add(ichiYenpiggyImg);

//piggy bank 5yen
var goYenpiggyImg = new Konva.Image({
        x:450,
        y:500,
        width:100,
        height: 100,
        draggable: false,
        name: '5yen'
    });
layer.add(goYenpiggyImg);

//piggy bank 10yen
var jyuYenpiggyImg = new Konva.Image({
        x:800,
        y:500,
        width:100,
        height: 100,
        draggable: false,
        name: '10yen'
    });
layer.add(jyuYenpiggyImg);

//piggy bank 50yen
var gojyuYenpiggyImg = new Konva.Image({
        x:100,
        y:650,
        width:100,
        height: 100,
        draggable: false,
        name: '50yen'
    });
layer.add(gojyuYenpiggyImg);

//piggy bank 100yen
var hyakuYenpiggyImg = new Konva.Image({
        x:450,
        y:650,
        width:100,
        height: 100,
        draggable: false,
        name: '100yen'
    });
layer.add(hyakuYenpiggyImg);

//piggy bank 500yen
var gohyakuYenpiggyImg = new Konva.Image({
        x:800,
        y:650,
        width:100,
        height: 100,
        draggable: false,
        name: '500yen'
    });
layer.add(gohyakuYenpiggyImg);

//1yen
var imageObj1 = new Image();
imageObj1.onload = function(){
    ichiYenImg.image(imageObj1);
    layer.draw();
};
var sourceImg1 = "https://illustrain.com/img/work/2016/illustrain09-okane5.png";
drawImage(sourceImg1, ichiYenImg);

//5yen
var sourceImg2 = "https://illustrain.com/img/work/2016/illustrain09-okane6.png";
drawImage(sourceImg2, goYenImg);

//10yen
var sourceImg3 = "https://illustrain.com/img/work/2016/illustrain09-okane7.png";
drawImage(sourceImg3, jyuYenImg);

//50yen
var sourceImg4 = "https://illustrain.com/img/work/2016/illustrain02-money04.png";
drawImage(sourceImg4, gojyuYenImg);

//100yen
var sourceImg5 = "https://illustrain.com/img/work/2016/illustrain09-okane8.png";
drawImage(sourceImg5, hyakuYenImg);

//500yen
var sourceImg6 = "https://illustrain.com/img/work/2016/illustrain02-money06.png";
drawImage(sourceImg6, gohyakuYenImg);

//piggy1yen
var sourceImg7 = "https://user-images.githubusercontent.com/31402838/63416628-a322b080-c3b4-11e9-96e8-e709ace70ec1.png";
drawImage(sourceImg7, ichiYenpiggyImg);

//piggy5yen
var sourceImg8 = "https://user-images.githubusercontent.com/31402838/63416629-a322b080-c3b4-11e9-94a8-eb6c008d4584.png";
drawImage(sourceImg8, goYenpiggyImg);

//piggy10yen
var sourceImg9 = "https://user-images.githubusercontent.com/31402838/63416630-a322b080-c3b4-11e9-95ef-a04228fc3c0d.png";
drawImage(sourceImg9, jyuYenpiggyImg);

//piggy50yen
var sourceImg10 = "https://user-images.githubusercontent.com/31402838/63416631-a322b080-c3b4-11e9-9e99-43061e2eaf2c.png";
drawImage(sourceImg10, gojyuYenpiggyImg);

//piggy100yen
var sourceImg11 = "https://user-images.githubusercontent.com/31402838/63416626-a322b080-c3b4-11e9-9ff6-00b3babf3fe9.png";
drawImage(sourceImg11, hyakuYenpiggyImg);

//piggy500yen
var sourceImg12 = "https://user-images.githubusercontent.com/31402838/63416627-a322b080-c3b4-11e9-86c4-4edf13a57063.png";
drawImage(sourceImg12, gohyakuYenpiggyImg);

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

//collistion
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
      var nameDragged1 = e.target.attrs.name;
      var namePiggy1 = obj.attrs.name;
      var nameDragged5 = e.target.attrs.name;
      var namePiggy5 = obj.attrs.name;
      var nameDragged500 = e.target.attrs.name;
      var namePiggy500 = obj.attrs.name;
      var nameDragged10 = e.target.attrs.name;
      var namePiggy10 = obj.attrs.name;
      var nameDragged100 = e.target.attrs.name;
      var namePiggy100 = obj.attrs.name;
      var nameDragged50 = e.target.attrs.name;
      var namePiggy50 = obj.attrs.name;
      
      //decide if they match
      var checkNames = (nameDragged1 === namePiggy1 && nameDragged5 === namePiggy5&& nameDragged500 === namePiggy500 && nameDragged10 === namePiggy10 && nameDragged100 === namePiggy100 && nameDragged50 === namePiggy50 );
      
      
      //finaly decide if we have a valid hit
 // finaly decide if we have a valid hit
if(checkHit) {
    // Decide if it's the right coin + piggy bank
    if (checkNames) {
        playYesAudio();
    } else {
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

/*
function fitStageIntoParentContainer(){
    var container = document.querySelector('#stage-parent');
    

    var containerWidth = container.offsetWidth;
    var scale = containerWidth / stageWidth;

    stage.width(stageWidth * scale);
    stage.height(stageHeight * scale);
    stage.scale({x:scale, y: scale});
    stage.draw(); 
}
fitStageIntoParentContainer();
window.addEventListener('resize', fitStageIntoParentContainer);
*/


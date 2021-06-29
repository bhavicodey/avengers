var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image('rr1.png')
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png')
		console.log("gr")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png')
		console.log("yr")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png")
		console.log("pr")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("br.png")
		console.log("br")
	}
	
}


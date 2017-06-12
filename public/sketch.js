var socket;
var win = false;
var player = 1;
var grid = [[,,,],
            [,,,],
            [,,,]];

function setup() {
  createCanvas(900, 601);
//  socket = io.connect("localhost:4000");
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      grid[i][j] = 0;
    }
  }
  // socket.on("from_server", function(data) {
  //   grid[data.j][data.i] = 2;
  // });
}

function draw() {
  background(112);
  which_player(true);
  print_grid();
  print_player();
  if (check_win()) {
    print_end();
    win = true;
  }
}

function reset_grid() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      grid[i][j] = 0;
    }
  }
}

function mousePressed()
{
  var x = floor(mouseX / 200);
  var y = floor(mouseY / 200);
  if (x >= 0 && x < 3 && y >= 0 && y < 3 && grid[x][y] == 0)
  {
    if (player == 2) {
      player = 1;
    }
    else {
      player = 2;
    }
    grid[x][y] = player;
//    socket.emit("from_client", data = {i:y,j:x})
  }
  if (win || grid_full()) {
    reset_grid();
    win = false;
  }
}

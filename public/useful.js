function print_player() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (grid[i][j] == 1) {
        fill(color(233, 49, 4))
        ellipse(i * 200 + 100, j * 200 + 100, 150, 150);
      }
      else if (grid[i][j] == 2) {
        fill(color(4, 38, 88))
        rect(i * 200 + 25, j * 200 + 25, 150, 150);
      }
    }
  }
}

function print_grid() {
  for (var i = 0; i < 3; i++)
  {
    for (var j = 0; j < 3; j++)
    {
      fill(51);
      rect(i * 200, j * 200, 200, 200);
    }
  }
  textSize(50);
  text("Player", 680, 200);
}

function which_player(choice) {
  if (player == 2 && choice) {
    fill(color(233, 49, 4))
    ellipse(750, 300, 150, 150);
  }
  else {
    fill(color(4, 38, 88))
    rect(675, 225, 150, 150);
  }
}

function check_win() {
  for (var i = 0; i < 3; i++) {
    if (grid[i][0] == 1 && grid[i][1] == 1 && grid[i][2] == 1 ||
        grid[i][0] == 2 && grid[i][1] == 2 && grid[i][2] == 2)
        return (true);
  }
  for (var i = 0; i < 3; i++) {
    if (grid[0][i] == 1 && grid[1][i] == 1 && grid[2][i] == 1 ||
        grid[0][i] == 2 && grid[1][i] == 2 && grid[2][i] == 2)
        return (true);
  }
  if (grid[0][0] == 1 && grid[1][1] == 1 && grid[2][2] == 1 ||
      grid[0][0] == 2 && grid[1][1] == 2 && grid[2][2] == 2 ||
      grid[2][0] == 1 && grid[1][1] == 1 && grid[0][2] == 1 ||
    grid[2][0] == 2 && grid[1][1] == 2 && grid[0][2] == 2)
      return (true);
}

function print_end() {
  text("Player", 680, 200);
  which_player(false);
  text("Win !", 700, 450);
}

function grid_full() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (grid[i][j] == 0)
        return (false);
    }
  }
  return (true);
}

function brick(color, length, x, y, speed, row, direction) {
    this.color = color;
    this.length = length;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.row = row;
    this.direction = direction;

    this.move = function() {
        this.x += this.direction == 'right' ? this.speed : (this.speed * -1);
        if (this.direction == 'right') {
            if (this.x >= 450) {
                this.x = -1;
            }
        }
        else {
            if (this.x <= -50) {
                this.x = 400;
            }
        }
    }
}

var logs = [
             new Log('red', 50, 20, 180, 0.75, 8, 'left'),
             new Log('red', 50, 120, 180, 0.75, 8, 'left'),
             new Log('red', 50, 220, 180, 0.75, 8, 'left'),
             new Log('red', 50, 320, 180, 0.75, 8, 'left'),
             // new Log('brown', 50, 20, 155, 0.6, 9, 'right'),
             // new Log('brown', 50, 150, 155, 0.6, 9, 'right'),
             // new Log('brown', 50, 280, 155, 0.6, 9, 'right'),
             // new Log('brown', 100, 20, 130, 0.75, 10, 'right'),
             // new Log('brown', 100, 220, 130, 0.75, 10, 'right'),
             // new Log('red', 30, 20, 105, 1, 11, 'left'),
             // new Log('red', 30, 1220, 105, 1, 11, 'left'),
             // new Log('red', 30, 220, 105, 1, 11, 'left'),
             // new Log('red', 30, 320, 105, 1, 11, 'left'),
             // new Log('brown', 75, 20, 80, 0.5, 12, 'right'),
             // new Log('brown', 75, 140, 80, 0.5, 12, 'right'),
             // new Log('brown', 75, 260, 80, 0.5, 12, 'right')
           ];

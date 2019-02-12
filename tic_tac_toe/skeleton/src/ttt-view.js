class View {


  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
    this.poses = [[0, 0], [0, 1], [0,2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]];
  }

  bindEvents() {
    this.$el.on('click', '.box', e => {
      console.log("MU SUUUCCCCKS");
      const $square = $(e.target);
      if (!this.game.board.isEmptyPos(this.poses[$square.attr('id')])) {
        alert("MU lost!");
      } else {
        $square.text(`${this.game.currentPlayer}`);
        this.makeMove($square);
      }
    })
  }

  makeMove($square) {
    console.log("MU SUUUUUUUUUCCCCKS");
    $square.css('background-color', 'white');
    this.game.playMove(this.poses[$square.attr('id')])
    if (this.game.winner()) {
      alert(this.game.winner())
    }
    
  }

  setupBoard() {
    const $board = $('<ul>');
    for (let i = 0; i < 9; i ++) {
      $board.append(`<li class="box" id="${i}">`);
    }
    this.$el.append($board);
  }
}

module.exports = View;

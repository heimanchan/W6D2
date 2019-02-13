class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
  }
 
  clickTower() {
    this.$el.on('click', '.pile', e => {
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

  setupTowers() {
    const $towers = $('<ul class="towers">');
    const $pile1 = $('<ul class="pile">');
    const $pile2 = $('<ul class="pile">');
    const $pile3 = $('<ul class="pile">');

    for (let i = 0; i < 3; i ++) {
      let $disc = $("<li class=\"disc\">")
      $disc.text(i+1)
      $pile1.append($disc);
    }
    for (let i = 0; i < 3; i++) {
      let $disc = $("<li class=\"disc\">")
      $pile2.append($disc);
    }
    for (let i = 0; i < 3; i++) {
      let $disc = $("<li class=\"disc\">")
      $pile3.append($disc);
    }
    $towers.append($pile1);
    $towers.append($pile2);
    $towers.append($pile3);
    this.$el.append($towers);
  }
}





module.exports = View;
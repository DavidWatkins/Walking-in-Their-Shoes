/**
 * Created by David on 8/25/2015.
 */
(function() {
    'use strict';

    function TextInput(game, width, height, text, fontSize, onPress) {
        this.style = new Style(game.constants.FONT, fontSize);
        Phaser.Text.call(this, game, game.width * width, game.height * height, text, this.style);
        this.anchor.set(0.5);

        this.addInput(onPress);
    }

    TextInput.prototype = Object.create(Phaser.Text.prototype);
    TextInput.prototype.constructor = TextInput;

    TextInput.prototype.setWordWrap = function(width) {
        this.wordWrap = true;
        this.wordWrapWidth = width;
    };

    TextInput.prototype.addInput = function(func) {
        var self = this;
        function onInputOver() {
            self.alpha = 0.5;
        }

        function onInputOut() {
            self.alpha = 1.0;
        }

        this.inputEnabled = true;
        this.events.onInputOver.add(onInputOver, this);
        this.events.onInputOut.add(onInputOut, this);

        if(func != null)
            this.events.onInputDown.add(func, this);
    };

    window.TextInput = TextInput;
}());

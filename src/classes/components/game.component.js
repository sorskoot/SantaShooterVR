AFRAME.registerComponent('game', {
    schema: {},
    init: function () {
        this.missilegroup = document.getElementById("missile-group");
    },
    update: function (oldData) { },
    tick: function (time, timeDelta) { },
    spawnMissile: function (direction, position) {
        let ball = document.createElement('a-entity');
        ball.setAttribute('mixin','xmas-ball');
        ball.setAttribute("projectile", { direction: direction, position: position });
        this.missilegroup.appendChild(ball);
    }
});
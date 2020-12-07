const { Vector3 } = require("three");

AFRAME.registerComponent('missile', {
    schema: {
        speed: {
            default: 133 // m/s (roughly the speed of a Tomahawk)
        },
        lifetime: {
            default: 250
        },
        collisionDistance: {
            default: 5
        },
        direction: {
            type: 'vec3'
        },
        position: {
            type: 'vec3'
        },
        yCorrection:{
            default:-.1
        }
    },
    init: function () {
        this.el.setAttribute("position", this.data.position);
     },
    tick: function (time, timeDelta) {
        let pos = this.el.object3D.position;
        pos.x -= this.data.direction.x * this.data.speed * (timeDelta / 1000);
        pos.y -= (this.data.direction.y + this.data.yCorrection) * this.data.speed * (timeDelta / 1000);
        pos.z -= this.data.direction.z * this.data.speed * (timeDelta / 1000);
        if (pos.z < -this.data.lifetime) {
            this.el.parentEl.removeChild(this.el);
        }
    },

});
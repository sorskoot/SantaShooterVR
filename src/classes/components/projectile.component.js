const { Vector3 } = require("three");

AFRAME.registerComponent('projectile', {
    schema: {
        speed: {
            default: 45
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
        yCorrection: {
            default: -.1
        }
    },
    init: function () {
        this.el.setAttribute("position", this.data.position);
        this.missilegroup = document.getElementById('missile-group');
        this.vY = this.data.speed;
        this.vXZ = this.data.speed;
        //raycaster="far:.1;objects: .touchable;showLine:true"
        this.el.setAttribute("raycaster","far:2;showLine:false;objects:.enemy");
        this.el.addEventListener('raycaster-intersection', (e)=>{
            let elm = e.detail.els[0];
            let explosion = document.createElement('a-entity');
            explosion.setAttribute('position', elm.object3D.position);
            explosion.setAttribute('explosion', '');
            this.missilegroup.appendChild(explosion);
            elm.remove();
        });
    },

    tick: function (time, timeDelta) {
        let pos = this.el.object3D.position;      
        this.el.object3D.lookAt(new THREE.Vector3(this.data.direction.x,this.data.direction.y,this.data.direction.z));
        pos.x -= this.data.direction.x * this.vXZ * (timeDelta / 1000);
        pos.y -= (this.data.direction.y + this.data.yCorrection) * this.vY * (timeDelta / 1000);
        pos.z -=  this.data.direction.z * this.vXZ * (timeDelta / 1000);
        this.vY -= .4;
        this.vXZ = Math.max(0, this.vXZ - .2);
        if (pos.y < 0) {
            this.el.parentEl.removeChild(this.el);
        }
    },

});


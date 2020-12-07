export default {
    keyboard: AFRAME.registerComponent('keyboardcontrols', {
        init: function () {
            let reload = false;
            document.body.addEventListener('keydown', e => {
                if(!this.game) this.game = this.el.sceneEl.components.game;
                if(!this.camera) this.camera = document.querySelector('a-entity[camera]').object3D;
                if (e.code === "Space" && !reload) {
                    reload = true;
                    fire(this.game, this.camera);
                }
            });

            document.body.addEventListener('keyup', e => {
                if (e.code === "Space") {
                    reload = false;
                }
            });
        }
    }),
    touch: AFRAME.registerComponent('touchcontrols', {
        init: function () {            
            let reload = false;
            document.body.addEventListener('touchstart', e => {
                if(!this.game) this.game = this.el.sceneEl.components.game;
                if(!this.camera) this.camera = document.querySelector('a-entity[camera]').object3D;
                if (!reload) {
                    reload = true;
                    fire(this.game, this.camera);
                }
            });

            document.body.addEventListener('touchstart', e => {
                reload = false;

            });
        }
    }),
}


function fire(game, camera) {

    let v = new THREE.Vector3(0, 0, 1);
    v.applyQuaternion(camera.quaternion);
    game.spawnMissile(
        {
            x: v.x,
            y: v.y,
            z: v.z
        },
        { x: 0, y: 0, z: 0 }
    );
}

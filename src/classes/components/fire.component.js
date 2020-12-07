AFRAME.registerComponent('fire', {
    schema: {},
    init: function () {
        this.el.addEventListener('buttondown',(e) => {
            let camrot = new THREE.Euler(
                this.el.object3D.rotation.x,
                this.el.object3D.rotation.y,
                this.el.object3D.rotation.z, 'XYZ');
            let v = new THREE.Vector3(0, 0, 1);
            v.applyEuler(camrot);
            this.el.sceneEl.components.game.spawnMissile(
                {
                    x: v.x,
                    y: v.y,
                    z: v.z
                }, {
                x: this.el.object3D.position.x,
                y: this.el.object3D.position.y,
                z: this.el.object3D.position.z
            })
        });
    },

});
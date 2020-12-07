//const velocityStart = 32;//64;
// const speedShrink = 4000;//3000;
// const outward = 2000;//1000;
// const downward = 1500;//1000;

AFRAME.registerComponent('explosion', {
    schema: {
        color: {
            type: 'color'
        },
        size:{
            default:.25
        },
        velocityStart:{
            default: 32
        },
        outward:{
            default:2000,
        },
        burst:{
            default:5
        },
        lifetime:{default:500}
    },
    init: function () {
        this.particleCount = 75;
        this.particles = new THREE.BufferGeometry();
        this.velocities = [];
        let vertices = [];

        this.material = new THREE.PointsMaterial(
            {
                size: this.data.size,
                color: new THREE.Color(this.data.color)
            });

        for (var p = 0; p < this.particleCount; p++) {
            let velocity = new THREE.Vector3(
                (Math.random() - 0.5) * this.data.velocityStart,
                (Math.random() - 0.5) * this.data.velocityStart,
                (Math.random() - 0.5) * this.data.velocityStart);
            // add it to the geometry
           
            vertices.push(Math.random() * this.data.burst - this.data.burst/2, Math.random() * this.data.burst - this.data.burst/2, Math.random() * this.data.burst- this.data.burst/2);
            this.velocities.push(velocity);
        }
        this.particles.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        // create the particle system
        this.particleSystem = new THREE.Points(
            this.particles,
            this.material);

            // add it to the scene
        this.el.setObject3D('particle-system', this.particleSystem);
        this.el.setAttribute('selfdestruct', { timer: this.data.lifetime });
    },
    tick: function (time, timeDelta) {
        this.material.size = Math.max(this.material.size - (timeDelta / 4000), 0);
        var positions = this.particleSystem.geometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
            var px = positions.getX(i);
            var py = positions.getY(i);
            var pz = positions.getZ(i);
            const timeDeltaOutward = timeDelta / this.data.outward;
            positions.setXYZ(
                i,
                px + (this.velocities[i].x * timeDeltaOutward),
                py + (this.velocities[i].y * timeDeltaOutward),
                pz + (this.velocities[i].z * timeDeltaOutward)
            );
            this.velocities[i].y -= (64 * timeDelta / 1500);
        }
        positions.needsUpdate = true;

    }
});
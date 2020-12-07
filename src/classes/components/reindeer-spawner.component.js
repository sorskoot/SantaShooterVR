AFRAME.registerComponent('reindeer-spawner', {
    schema: {
        interval: { default: 4000 },
        active: { default: true },
        start: { type:'selector'},
        end: { type:'selector'},
    },
    init: function () {
        this.group = document.getElementById('reindeer-group');    
        this.start = this.data.start.object3D.position;
        this.end = this.data.end.object3D.position;
        this.countdown = this.data.interval;
    },
    tick: function (time, timeDelta) {
        if (this.data.active) {
            this.countdown -= timeDelta;
            if (this.countdown < 0) {
                this.spawn();
                this.countdown = this.data.interval;
            }
        }
    },
    spawn: function () {
        let reindeer = document.createElement('a-entity');
        reindeer.setAttribute('mixin', 'reindeer-model');
        reindeer.classList.add('enemy');
        reindeer.setAttribute('position',this.start);
        reindeer.setAttribute('reindeer',{target:this.end});
        this.group.appendChild(reindeer);
    }
});
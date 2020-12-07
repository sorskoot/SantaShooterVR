AFRAME.registerComponent('reindeer', {
   schema: {
       target:{type:'vec3'},
       speed:{default:10}
   },
   init: function () {  
    this.direction =
        this.data.target.clone().sub(this.el.object3D.position).normalize();
    this.distance = this.el.object3D.position.distanceTo(this.data.target);
   },   
   tick: function (time, timeDelta) {        
       let v = this.data.speed/1000 * timeDelta;
        this.el.object3D.position.x += this.direction.x * v;
        this.el.object3D.position.y += this.direction.y * v;
        this.el.object3D.position.z += this.direction.z * v;
        this.distance -= v;
        if(this.distance <0){
            this.el.remove();        
        }
   },

});
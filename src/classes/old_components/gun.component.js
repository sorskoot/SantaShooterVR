import { createMesh } from '../utils/createMesh';

export default AFRAME.registerComponent('gun', {
    init: function () { 
        let m = createMesh([-0.05,0.03,-0.44,-0.06,0.02,-0.42,-0.05,0.04,-0.41,-0.05,0.02,-0.05,-0.05,0.02,0.05,-0.03,0.09,0.2,-0.05,0.1,-0.44,-0.06,0.12,-0.42,-0.02,0.14,-0.05,-0.05,0.15,0.05,-0.03,0.15,0.2,0.05,0.03,-0.44,0.06,0.02,-0.42,0.05,0.04,-0.41,0.05,0.02,-0.05,0.05,0.02,0.05,0.03,0.09,0.2,0.06,0.12,-0.42,0.05,0.09,-0.41,0.05,0.15,-0.03,0.05,0.15,0.05,0.03,0.15,0.2,-0.04,-0.04,-0.05,-0.04,-0.03,0.05,0.03,-0.04,-0.05,0.03,-0.03,0.05,-0.04,-0.13,-0.05,0.03,-0.13,-0.05,-0.04,-0.03,-0.14,0.03,-0.03,-0.14,-0.04,-0.1,-0.15,0.03,-0.1,-0.15,-0.02,0.12,-0.41,-0.05,0.09,-0.41,-0.05,0.15,-0.03,-0.05,0.11,-0.05,0.02,0.12,-0.41,0.02,0.14,-0.05,0.05,0.11,-0.05,-0.05,0.03,-0.47,-0.03,0.12,-0.47,0.05,0.03,-0.47,0.05,0.1,-0.47,-0.03,0.12,-0.44,0.03,0.12,-0.44,0.05,0.1,-0.44,-0.05,0.1,-0.47,0.03,0.12,-0.47],
            [7,1,0, 33,2,1, 2,33,35, 35,3,2, 3,34,9, 9,4,3, 4,9,10, 10,5,4, 11,12,17, 17,45,11, 12,13,18, 13,14,38, 38,18,13, 14,15,20, 20,38,14, 15,16,21, 21,20,15, 0,1,12, 12,11,0, 1,2,13, 13,12,1, 2,3,14, 14,13,2, 4,5,16, 16,15,4, 5,10,21, 21,16,5, 10,9,20, 20,21,10, 9,8,37, 19,20,9, 8,32,36, 36,37,8, 17,36,32, 7,43,44, 46,39,41, 41,47,40, 3,4,23, 23,22,3, 15,14,24, 24,25,15, 14,3,22, 22,24,14, 4,15,25, 25,23,4, 22,23,26, 23,25,27, 27,26,23, 25,24,27, 29,28,30, 30,31,29, 26,27,31, 31,30,26, 24,22,28, 28,29,24, 22,26,30, 30,28,22, 27,24,29, 29,31,27, 7,32,33, 8,34,35, 18,36,17, 19,37,38, 3,35,34, 20,19,38, 9,34,8, 1,7,33, 33,32,35, 8,35,32, 12,18,17, 36,18,37, 38,37,18, 9,37,19, 17,32,7, 6,0,39, 39,46,6, 11,45,42, 42,41,11, 0,11,41, 41,39,0, 44,43,40, 40,47,44, 6,43,7, 17,44,45, 0,6,7, 41,42,47, 7,44,17, 41,40,46, 43,6,40, 46,40,6, 45,44,42, 47,42,44]);
            this.el.setObject3D('mesh', m);
    },
});
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(75,innerWidth/window.innerHeight,0.1,1000);
var renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry=new THREE.BoxGeometry(11,11,11);
var geometry1 = new THREE.CylinderGeometry( 5, 5, 20, 32 );
var material=new THREE.MeshDistanceMaterial({color: 0xac1ae0});
var material1 = new THREE.MeshDistanceMaterial({color: 0x1ae0a4});
var cube=new THREE.Mesh(geometry,material);
var cylinder = new THREE.Mesh( geometry1, material1 );
scene.add(cube);
scene.add( cylinder );
camera.position.z=3;
camera.position.z = 30;
cube.position.x-=10;
cylinder.position.x+=10;
function animate(){
	requestAnimationFrame(animate);
	//Le aplica una rotacion en el eje x
	//sumandole o asignandole un valor a la variable
	//el 0.02 define la velocidad de rotacion
	cube.rotation.x+=0.02;
	cube.rotation.y+=0.02;
	cylinder.rotation.x+=0.05;
	cylinder.rotation.y+=0.05;
	renderer.render(scene,camera);
};
animate();
//Este archivo nos va a contruir una figura geometrica y luego se va a
//Mirar o revisar de diferentes formas
//Creado por: Alejandra Tamayo Rivera
//Fecha:22/04/2020

//Definir los elementos fundamentales
//para crear un animacion o imagen grafica en 3D
//Escena: Donde va a correr la acción, donde voy a ubicar.
//Camara:La camara es la que va a mostrar esos objetos.
//Render:Es las formas que tiene lo que he creado, malla u objeto que quiero hacer, serie de lineas y operaciones matematicas, la imagen obedece a formulas matematicas que generan objetos a partir de lineas.
//Objeto: elementos bases para construir la escena.

//La libreria es la que va a cargar el objeto
var scene=new THREE.Scene();
//Se modela la camara con los tres ejes de coordenasas, X,Y,Z
//innerWidth/window.innerHeight es to es para que se divida el ancho y el alto, para lograr una mejor perspectiva, se meta dentro de los navegadores en los que yo trabaje
//Coja proporcionalmente los espacios para que la imagen se vea bien en cualquier dispositivo donde corrar el objeto.
var camera=new THREE.PerspectiveCamera(75,innerWidth/window.innerHeight,0.1,1000);
//Averiguar WebGL la que permita que corra en navegadores
var renderer=new THREE.WebGLRenderer();
//Se ajusta en los navegadores
renderer.setSize(window.innerWidth, window.innerHeight);
//Cuerpo de objeto donde quiero que salga el objeto
//Averiguan dom que hace en js
document.body.appendChild(renderer.domElement);
//Cual es el objeto, caracteristicas de este
//Este es el que crea el objeto, hace la magia
var geometry=new THREE.BoxGeometry(11,11,11);
var geometry1 = new THREE.CylinderGeometry( 5, 5, 20, 32 );
//De que tipo de material se construye el objeto
//Averiguae Notaciones RGB para los colores, CMYK, Hexagesimal 
//Gama de colores que voy a utilizar
//mas cerca a ff es claro y mas cerca a oscuro
//los dos primeros rojo, los otros dos verde y los otros azul
var material=new THREE.MeshNormalMaterial({color: 0xff11ff});
var material1 = new THREE.MeshNormalMaterial( {color: 0xffff} );
//Se crea el cubo necesita que tipo de objeto y el material que le voy a ponel al objeto donde aparecera el color tambien
var cube=new THREE.Mesh(geometry,material);
var cylinder = new THREE.Mesh( geometry1, material1 );
//Necesito ponerlo en escena y si tuviera mas objetos tambien se colocan
scene.add(cube);
scene.add( cylinder );
//Se crea una posicion de la camara
//Esta en una posicion cercana al objeto
//El tres define desde que distancia se ve el objeto
camera.position.z=3;
camera.position.z = 30;
cube.position.x-=10;
cylinder.position.x+=10;
//Se crea una variable que se asocia a una funcion
//se anima el objeto para que se vea el objeto en 3d
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







//HACER UN CODIGO CON DOS OBJETOS, Y HACER UN CODIGO CON UN OBJETO QUE UTILICE OTRO MATERIA
//PUEDE SER CON ESTE CODIGO
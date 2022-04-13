// 创建场景对象Scene
const scene = new THREE.Scene();

// 创建网格模型
const geometry = new THREE.BoxGeometry(100, 100, 100); // 创建一个立方体几何对象Geometry
const material = new THREE.MeshLambertMaterial({
  color: 0x8899ff,
}); // 材质对象Material
const mesh = new THREE.Mesh(geometry, material); // 网格模型对象Mesh
scene.add(mesh); // 网格模型添加到场景中

// 光源设置
const point = new THREE.PointLight(0x3344ff);
point.position.set(400, 200, 300); // 点光源位置
scene.add(point); // 点光源添加到场景中

// 环境光
const ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);

// 相机设置
const width = window.innerWidth; // 窗口宽度
const height = window.innerHeight; // 窗口高度
const k = width / height; // 窗口宽高比
const s = 200; // 三维场景显示范围控制系数，系数越大，显示的范围越大

// 创建相机对象
const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
camera.position.set(200, 300, 200); // 设置相机位置
camera.lookAt(scene.position); // 设置相机方向(指向的场景对象)

// 创建渲染器对象
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); // 设置渲染区域尺寸
renderer.setClearColor(0xb9d3ff, 1); // 设置背景颜色
document.body.appendChild(renderer.domElement); // body元素中插入canvas对象

function render() {
  renderer.render(scene, camera); // 执行渲染操作 指定场景、相机作为参数
  mesh.rotateY(0.01); // 每次绕y轴旋转0.01弧度
  requestAnimationFrame(render);
}

render();

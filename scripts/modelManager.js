import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loader = new GLTFLoader();

export async function carregarModelo(path) {
  return new Promise((resolve) => {
    loader.load(path, (gltf) => {
      resolve(gltf.scene);
    });
  });
}

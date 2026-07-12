import * as THREE from "three";

import { MindARThree } from "mindar-image-three";

import { carregarModelo } from "./modelManager";

import { colocarNaFrente } from "./placement";

let camera;

let scene;

let renderer;

let modelo;

export async function iniciarAR() {
  const mindarThree = new MindARThree({
    container: document.querySelector("#ar-container"),

    imageTargetSrc: "/targets/marker.mind",
  });

  renderer = mindarThree.renderer;

  scene = mindarThree.scene;

  camera = mindarThree.camera;

  modelo = await carregarModelo("/models/motor.glb");

  const anchor = mindarThree.addAnchor(0);

  anchor.group.add(modelo);

  anchor.onTargetFound = () => {
    console.log("Imagem encontrada");
  };

  anchor.onTargetLost = () => {
    console.log("Imagem perdida");
  };

  await mindarThree.start();

  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
}

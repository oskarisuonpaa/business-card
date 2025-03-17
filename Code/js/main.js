// main.js
import { CSS3DObject } from "../../libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js";

// Use the THREE instance attached by MindAR
const THREE = window.MINDAR.IMAGE.THREE;

async function startAR() {
  // Initialize MindAR with your local target file
  const mindArThreejs = new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "./targets.mind", // Ensure this path is correct!
  });
  const { cssRenderer, renderer, cssScene, scene, camera } = mindArThreejs;

  // Create a CSS3D object from the business card details
  const businessCardDiv = document.querySelector("#ar-example");
  const cssObject = new CSS3DObject(businessCardDiv);

  // Attach the CSS3D object to the first image target anchor
  const anchor = mindArThreejs.addCSSAnchor(0);
  anchor.group.add(cssObject);

  await mindArThreejs.start();

  // Start the render loop
  renderer.setAnimationLoop(() => {
    cssRenderer.render(cssScene, camera);
  });
}

startAR();

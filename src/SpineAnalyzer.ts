import { Renderer } from "pixi.js";
import { analyzeClipping } from "./analyze/clipping";
import { analyzeSpineBlendModes } from "./analyze/blendModes";
import { Spine, VertexAttachment } from "@esotericsoftware/spine-pixi-v8";

export class SpineAnalyzer {
  public analyzeMeshes(spineInstance: Spine) {
      // analyzeMeshes(spine);
      // analyzeDeformations(spine);
      // analyzeSpineAttachments(spine as any);
      // analyzeSpineAttachments(spine as any);
      // analyzeSpineForParticles(spine as any);
      analyzeClipping(spineInstance);
      // analyzeSpineAnimations(spine as any);
      analyzeSpineBlendModes(spineInstance);
  
    return undefined;
  }
  
  public analyzeDrawCalls(renderer: Renderer) {
    // This is a simplified approximation and may not be 100% accurate
    const drawCalls = 0; //renderer.renderCounter;
    const triangles = 0; //renderer.geometry.boundCounters.points / 3;
    
    return { drawCalls, triangles };
  }
  
}

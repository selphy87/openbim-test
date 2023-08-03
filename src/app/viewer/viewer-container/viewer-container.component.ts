import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as OBC from "openbim-components";
import { OpenBimService } from '../openbim.service';


@Component({
  selector: 'app-viewer-container',
  templateUrl: './viewer-container.component.html',
  styleUrls: ['./viewer-container.component.css']
})
export class ViewerContainerComponent implements OnInit {

  @ViewChild('viewerTemplate', { static: true }) viewerTemplate?: ElementRef;

  components : OBC.Components = null as any;
  constructor(private openbimService: OpenBimService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {

    this.initViewer();
    
  }

  async initViewer() {
     const container = this.getContainer();
     this.openbimService.test(container);

   //  this.components = new OBC.Components();

    
   /*  this.components.scene = new OBC.SimpleScene(this.components);
    this.components.renderer = new OBC.PostproductionRenderer(this.components, container);
    this.components.camera = new OBC.SimpleCamera(this.components);
    this.components.raycaster = new OBC.SimpleRaycaster(this.components);  */

   /*  this.components.init();

    const scene = this.components.scene.get(); */
   // scene.background.setRGB(1, 1, 1);
   // this.components.camera.get().setLookAt(10, 10, 10, 0, 0, 0);
   //   this.components.camera.get().
  //    this.components.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);

  /*   const grid = new OBC.SimpleGrid(this.components);
    this.components.tools.add("grid", grid); */
    //  components.tools.add(grid);

   /*  const boxMaterial = new THREE.MeshStandardMaterial({ color: 'red' });
    const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    const cube = new THREE.Mesh(boxGeometry, boxMaterial);
    cube.position.set(0, 1.5, 0);
    scene.add(cube); */

   /*  const directionalLight = new THREE.DirectionalLight();
    directionalLight.position.set(5, 10, 3);
    directionalLight.intensity = 0.5;
    scene.add(directionalLight);
    const ambientLight = new THREE.AmbientLight();
    ambientLight.intensity = 0.5;
    scene.add(ambientLight); */

  }

  private getContainer() {
    return this.viewerTemplate?.nativeElement as HTMLElement;
  }
  
  ngOnDestroy() {
    this.components.dispose();
  }
}

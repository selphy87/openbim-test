import { Injectable } from "@angular/core";
import * as OBC from "openbim-components";
import * as THREE from 'three';

@Injectable({
    providedIn: 'root'
})
export class OpenBimService {
    
    
    constructor() {
    }
        

    test(container: HTMLElement) {
       const components = new OBC.Components();
        /* 
        components.scene = new OBC.SimpleScene(components);
        components.renderer = new OBC.SimpleRenderer(components, container);
        components.camera = new OBC.SimpleCamera(components);
        components.raycaster = new OBC.SimpleRaycaster(components);
        components.init(); */
    }



   

}
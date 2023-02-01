import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';




@NgModule({
    declarations:[
       ContadorComponent
    ],
    //cosas publicas o visibles
    exports:[
        ContadorComponent
    ],
    imports:[
        
    ]

})
export class ContadorModule {

}
import { Component,OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta[];

  constructor(private ofertasService: OfertasService){

  }

  ngOnInit(): void {
    this.ofertasService.getOfertas2()
    .then((ofertas: Oferta[]) => {
       console.log('a funcao resolve() foi resolvida depois de 3 segundos')
      this.ofertas = ofertas
      },
      )
      .catch((param: any) => {
        console.log(param)
      })
  }
}

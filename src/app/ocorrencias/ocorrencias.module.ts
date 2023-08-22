import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { OcorrenciasRoutingModule } from './ocorrencias-routing.module';

import { FaixaEtariaService } from './service/faixa-etaria.service';
import { RegiaoService } from './service/regiao.service';

import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { OcorrenciaService } from './service/ocorrencia.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatToolbarModule,
    OcorrenciasRoutingModule,
  ],
  declarations: [
    OcorrenciasComponent
  ],
  providers: [
    OcorrenciaService,
    RegiaoService,
    FaixaEtariaService,
  ]
})
export class OcorrenciasModule { }

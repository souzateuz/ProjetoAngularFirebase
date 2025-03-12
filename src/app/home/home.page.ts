import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { increment } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  

  perfil: any = {
    nome: null,
    profissao: null,
    nome_usuario: null,
    idioma: null,
    localidade: null,
    data_inicio: null,
    biografia: null,
    estatiticas: {
      curtidas: 0,
      seguidores: 0,
      amigos: 0
    },
  postagens: [
    {
      foto: 'https://avatars.githubusercontent.com/u/198257837?v=4',
      nome: 'Teteuz',
      nome_usuario: '@souza',
      texto: 'São Paulo maior time do Brasil',
      data: '12/03/2025'
    },
    {
      foto: 'https://avatars.githubusercontent.com/u/198257837?v=4',
      nome: 'Teteuz',
      nome_usuario: '@souza',
      texto: 'palmeiras não tem mundial',
      data: '12/03/2025'
    },
    {
      foto: 'https://avatars.githubusercontent.com/u/198257837?v=4',
      nome: 'Teteuz',
      nome_usuario: '@souza',
      texto: 'corinthians menor de São Paulo',
      data: '12/03/2025'
    },
    {
      foto: 'https://avatars.githubusercontent.com/u/198257837?v=4',
      nome: 'Teteuz',
      nome_usuario: '@souza',
      texto: 'São Paulo maior time do Brasil',
      data: '12/03/2025'
    },
    {
      foto: 'https://avatars.githubusercontent.com/u/198257837?v=4',
      nome: 'Teteuz',
      nome_usuario: '@souza',
      texto: 'palmeiras não tem mundial',
      data: '12/03/2025'
    },
    {
      foto: 'https://avatars.githubusercontent.com/u/198257837?v=4',
      nome: 'Teteuz',
      nome_usuario: '@souza',
      texto: 'corinthians menor de São Paulo',
      data: '12/03/2025'
    },
    {
      foto: 'https://avatars.githubusercontent.com/u/198257837?v=4',
      nome: 'Teteuz',
      nome_usuario: '@souza',
      texto: 'São Paulo maior time do Brasil',
      data: '12/03/2025'
    },
    {
      foto: 'https://avatars.githubusercontent.com/u/198257837?v=4',
      nome: 'Teteuz',
      nome_usuario: '@souza',
      texto: 'palmeiras não tem mundial',
      data: '12/03/2025'
    },
    {
      foto: 'https://avatars.githubusercontent.com/u/198257837?v=4',
      nome: 'Teteuz',
      nome_usuario: '@souza',
      texto: 'corinthians menor de São Paulo',
      data: '12/03/2025'
    }
  ]
  }

  constructor() {

  }



}

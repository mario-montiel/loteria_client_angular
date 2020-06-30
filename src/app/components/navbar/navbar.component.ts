import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/http/user.service';
import { Router } from '@angular/router';
import { LoteriaService } from 'src/app/services/ws/loteria.service';
import Ws from '@adonisjs/websocket-client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  ws: any
  socket: any
  username: string
  constructor(public userService: UserService, public router: Router) { 
    this.ws = Ws('ws://localhost:3333', { path: 'ws' })
    this.ws.connect()
    this.socket = this.ws.subscribe('loteria')
    this.socket.close()
  }

  logout() {
    let user = JSON.parse(sessionStorage.getItem('user'))
    this.socket.emitClose(user.id)

    sessionStorage.removeItem('user')
    this.userService.logout()
    this.router.navigateByUrl('')
  }

  ngOnInit(): void {
    if (this.userService.hasToken()) {
      let user = JSON.parse(sessionStorage.getItem('user'))
      this.username = user.username
    }
  }
}

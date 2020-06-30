import { Component, OnInit } from '@angular/core';
import { LoteriaService } from 'src/app/services/ws/loteria.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {
  isActive = false;
  user: any
  board: any

  constructor(private loteriaService: LoteriaService, private router: Router) {
    this.user = JSON.parse(sessionStorage.getItem('user'))
    this.board = router.getCurrentNavigation().extras.state
  }

  ngOnInit(): void {
  }

  public onCardSelect(card) {
    // const data = {
    //   user_id: JSON.parse(sessionStorage.getItem('user')).id,
    //   board_id: JSON.parse(sessionStorage.getItem('userBoard')).id,
    //   card_id: card.id
    // };

    const data = {
      user_id: 1,
      board_id: 1,
      card_id: 1
    }

    //this.loteriaService.onCardSelect(data)
  }

  /*onWin(params) {
    //this.loteriaService.onWin(params)
  }*/
}

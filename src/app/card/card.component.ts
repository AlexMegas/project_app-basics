import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
    // interpolation: ['[[', '}}']
})

export class CardComponent implements OnInit {

    @Input() card: Card
    @Input() index: number

    title = 'My Card Title h2'
    text: string = 'My sample text p'

    cardDate: Date = new Date()

    textColor: string

    ngOnInit() {
    }

    changeTitle() {
        this.card.title = 'Title has been changed!'
    }

    inputHandler(value) {
        // const value = event.target.value
        this.title = value
    }

    changeHandler() {
        console.log(this.title);

    }

}
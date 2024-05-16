import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `

  <figure><img class="image" src="https://www.saladeprensa.reyma.com.mx/posts/refacciones-camion.jpg"></figure>
  <p>&nbsp;</p>
  <figure><img class="image" src="https://www.saladeprensa.reyma.com.mx/posts/souvenirs.jpg"></figure>s
  `,
  styles: `
  .image{
    width: 800px;
  }
  `
})
export class CommentsComponent {

}

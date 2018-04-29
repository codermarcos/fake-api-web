import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Fake Api - Make Tests and mock backend');
    this.metaService.addTag({ name: 'description', content: 'Fake api - Mock backend return and make simple test by url return.' });
  }

}

import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaExcluir = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    console.log('Conseguiram me calar');
  }

  ngOnChanges(changes: SimpleChanges){ }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }

  excluirItem(){
    this.emitindoIdParaExcluir.emit(this.item.id);
  }

}

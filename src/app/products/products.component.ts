import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
selectedCategory: string | null = "";

  constructor(private route: ActivatedRoute,private router:Router) {
    this.selectedCategory = this.route.snapshot.paramMap.get("category");
  }

  ngOnInit(): void {

    //filter the products depends upon the category

  }

  backToPrevious(){
    this.router.navigate(['/fashion']);
  }

}



/**
 * Title: service-request.component.ts
 * Author: Brock Hemsouvanh
 * Date: 07/21/2024
 * Description: Service Request component logic for BCRS application
 */

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product'; 
import { MenuService } from '../menu.service';
import { Order } from '../order'; 
import { Router } from '@angular/router';
import { InvoiceSummaryComponent } from '../invoice-summary/invoice-summary.component'; 


@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {
  products: Array<Product>;
  order: Order;
  errorMessage: string;
  isLoading: boolean = false;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private invoiceService: InvoiceSummaryComponent
  ) {
    this.errorMessage = '';
    this.products = this.menuService.getProducts();
    this.order = new Order();
  }

  ngOnInit(): void {
    // Initialize form validation logic if needed
  }

  generateOrder(form: NgForm) {
    if (form.valid) {
      console.log('Form is valid');
      console.log('Order:', this.order);
      console.log('Products', this.products);

      for (let product of this.products) {
        if (product.checked) {
          this.order.menuItems.push(product);
        }
      }

      console.log('Ordered Items:', this.order.menuItems);
      console.log('Order Parts:', this.order.parts);
      console.log('Order Labor', this.order.labor);
      console.log('Order Total:', this.order.getOrderTotal());

      this.order.orderTotal = parseFloat(this.order.getOrderTotal());

      console.log('Order', this.order);

      let invoiceData = this.order;

      console.log('Contents of invoiceData:', invoiceData);

      this.isLoading = true;

      this.invoiceService.createInvoice(invoiceData).subscribe({
        next: (res) => {
          console.log('Invoice created successfully', res);
          this.isLoading = false;
          this.router.navigate(['./invoice'], {
            queryParams: { id: this.order.id }
          });
          console.log('Logging this.order.id:', this.order.id);
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Something went wrong';
          this.isLoading = false;
        }
      });
    } else {
      console.log('Form is invalid');
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }
}

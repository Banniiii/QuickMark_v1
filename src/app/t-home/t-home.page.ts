import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-t-home',
  templateUrl: './t-home.page.html',
  styleUrls: ['./t-home.page.scss'],
  standalone: false,
})
export class THomePage {
  showInput = false;
  className = '';
  classes: { name: string }[] = [];
  filteredClasses: { name: string }[] = [];
  searchQuery = '';

  constructor(private alertController: AlertController, private router: Router) {}

  toggleDropdown() {
    this.showInput = !this.showInput;
  }

  addClass() {
    if (this.className.trim()) {
      this.classes.push({ name: this.className });
      this.filteredClasses = [...this.classes];
      this.className = '';
      this.updateLocalStorage(); 
    }
  }

  // Handles the search functionality
  onSearch() {
    this.filteredClasses = this.classes.filter(classItem =>
      classItem.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Edit the selected class
  async editClass(event: Event, classItem: { name: string }) {
    event.stopPropagation();
    const alert = await this.alertController.create({
      header: 'Edit Class',
      inputs: [
        {
          name: 'newName',
          type: 'text',
          placeholder: 'Enter new class name',
          value: classItem.name
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Edit cancelled'),
          cssClass: 'custom-cancel-button',
        },
        {
          text: 'Save',
          cssClass: 'custom-save-button',
          handler: (data) => {
            if (data.newName && data.newName.trim()) {
              classItem.name = data.newName.trim(); 
              this.updateLocalStorage(); 
            }
          }
        }
      ]
    });

    await alert.present();
  }

  // Delete the selected class
  async deleteClass(event: Event, classItem: { name: string }) {
    event.stopPropagation();
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: `Are you sure you want to delete the class "${classItem.name}"?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Delete cancelled'),
          cssClass: 'custom-cancel-button',
        },
        {
          text: 'Delete',
          cssClass: 'custom-delete-button',
          handler: () => {
            this.classes = this.classes.filter(item => item !== classItem);
            this.updateLocalStorage(); 
            window.location.reload();
          }
        }
      ]
    });

    await alert.present();
  }

  // Save classes to local storage
  updateLocalStorage() {
    localStorage.setItem('classes', JSON.stringify(this.classes));
  }

  // Load classes from local storage
  loadClasses() {
    const storedClasses = localStorage.getItem('classes');
    if (storedClasses) {
      this.classes = JSON.parse(storedClasses);
      this.filteredClasses = [...this.classes];
    }
  }

  // Lifecycle hook to load classes when the component is initialized
  ngOnInit() {
    this.loadClasses();
  }

  goToClass(className: string) {
    this.router.navigate(['/t-class'], { queryParams: { name: className } });
  }

}

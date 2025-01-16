import { Component } from '@angular/core';

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

  constructor() {}

  // Toggles the visibility of the class input field
  toggleDropdown() {
    this.showInput = !this.showInput;
  }

  // Adds the class to the classes array and clears the input
  addClass() {
    if (this.className.trim()) {
      this.classes.push({ name: this.className });
      this.filteredClasses = [...this.classes];  
      this.className = '';  
    }
  }

  // Handles the search functionality
  onSearch() {
    this.filteredClasses = this.classes.filter(classItem =>
      classItem.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Navigate to the class details page (optional)
  goToClass(className: string) {
    // Navigate to class details or any other functionality
    console.log('Go to class:', className);
  }

  // Show options for each class (optional)
  showOptions(classItem: { name: string }) {
    // Implement any actions for class options here
    console.log('Show options for class:', classItem.name);
  }
}

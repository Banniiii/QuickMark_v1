import { Component, OnInit } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Component({
  selector: 'app-t-signup',
  templateUrl: './t-signup.page.html',
  styleUrls: ['./t-signup.page.scss'],
  standalone: false
})
export class TSignupPage implements OnInit {
  supabase = createClient('https://ygiecdduxzhavszahfpj.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnaWVjZGR1eHpoYXZzemFoZnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5ODM1MjcsImV4cCI6MjA1MjU1OTUyN30.1i9wkAZu8nJ41gxch9E7pSwY9C5E5KpCjju3Gm-P7Ac'); 

  password: string = '';
  confirmPassword: string = '';
  showConfirmPassword: boolean = false;
  userPhoto: string | undefined;
  firstName: string = '';
  lastName: string = '';
  idNumber: string = '';
  email: string = ''; 

  constructor() {}

  ngOnInit() {}

  onPasswordInput() {
    this.showConfirmPassword = this.password.length > 0;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.userPhoto = reader.result as string;
        console.log(this.userPhoto);
      };
      reader.readAsDataURL(file);
    }
  }

  async registerUser() {
    if (!this.firstName || !this.lastName || !this.email || !this.password || !this.idNumber) {
      alert('All fields are required!');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Step 1: Register the user with Supabase authentication
      const { data: authData, error: authError } = await this.supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });

      if (authError) {
        console.error('Authentication Error:', authError.message);
        alert('Registration failed. Please try again.');
        return;
      }

      // Step 2: Upload the profile photo (optional)
      let photoUrl = '';
      if (this.userPhoto) {
        const fileName = `profiles/${Date.now()}-${this.idNumber}.jpg`;
        const { data: uploadData, error: uploadError } = await this.supabase.storage
          .from('profile-photos')
          .upload(fileName, this.dataURItoBlob(this.userPhoto), { upsert: true });

        if (uploadError) {
          console.error('Photo Upload Error:', uploadError.message);
        } else {
          const { data: publicData } = this.supabase.storage.from('profile-photos').getPublicUrl(fileName);
          photoUrl = publicData.publicUrl;
        }
      }

      // Step 3: Store additional user details in the database
      const { error: dbError } = await this.supabase.from('users').insert([
        {
          id: authData.user?.id, // Link to the Supabase auth user
          first_name: this.firstName,
          last_name: this.lastName,
          id_number: this.idNumber,
          photo_url: photoUrl,
        },
      ]);

      if (dbError) {
        console.error('Database Error:', dbError.message);
        alert('Failed to save user details. Please try again.');
        return;
      }

      alert('Registration successful!');
    } catch (error) {
      console.error('Unexpected Error:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  }

  // Helper function to convert Base64 to Blob
  private dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const buffer = new ArrayBuffer(byteString.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < byteString.length; i++) {
      view[i] = byteString.charCodeAt(i);
    }
    return new Blob([buffer], { type: mimeString });
  }
}

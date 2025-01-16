import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-t-signup',
  templateUrl: './t-signup.page.html',
  styleUrls: ['./t-signup.page.scss'],
  standalone: false,
})
export class TSignupPage implements OnInit {
  password: string = '';
  confirmPassword: string = '';
  showConfirmPassword: boolean = false;
  userPhoto: string | undefined;
  firstName: string = '';
  lastName: string = '';
  idNumber: string = '';
  email: string = ''; 

  constructor(private supabaseService: SupabaseService) {}

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
      console.log('First Name:', this.firstName);
      console.log('Last Name:', this.lastName);
      console.log('Email:', this.email);
      console.log('ID Number:', this.idNumber);  // Log ID number to check the value
      console.log('Password:', this.password);
      console.log('Confirm Password:', this.confirmPassword);
    
      // Trim and validate inputs
      const trimmedFirstName = this.firstName?.trim() || '';
      const trimmedLastName = this.lastName?.trim() || '';
      const trimmedEmail = this.email?.trim() || '';
      const trimmedIdNumber = this.idNumber?.trim() || '';  // Ensure idNumber is treated as string
      const trimmedPassword = this.password?.trim() || '';
      const trimmedConfirmPassword = this.confirmPassword?.trim() || '';
    
      if (!trimmedFirstName || !trimmedLastName || !trimmedEmail || !trimmedIdNumber || !trimmedPassword) {
        console.error('Some fields are empty:');
        alert('All fields are required!');
        return;
      }
    
      if (trimmedPassword !== trimmedConfirmPassword) {
        console.error('Passwords do not match!');
        alert('Passwords do not match!');
        return;
      }
    
      try {
        // Step 1: Register user with Supabase authentication
        const { data: authData, error: authError } = await this.supabaseService.client.auth.signUp({
          email: this.email,
          password: this.password,
        });
    
        if (authError) {
          console.error('Authentication Error:', authError.message);
          alert('Registration failed. Please try again.');
          return;
        }
    
        // Step 2: Upload profile photo (if selected)
        let photoUrl = '';
        if (this.userPhoto) {
          const fileName = `profiles/${Date.now()}-${this.idNumber}.jpg`;
          const { data: uploadData, error: uploadError } = await this.supabaseService.client.storage
            .from('profile-photos')
            .upload(fileName, this.dataURItoBlob(this.userPhoto), { upsert: true });
    
          if (uploadError) {
            console.error('Photo Upload Error:', uploadError.message);
          } else {
            const { data: publicData } = this.supabaseService.client.storage
              .from('profile-photos')
              .getPublicUrl(fileName);
            photoUrl = publicData.publicUrl;
          }
        }
    
        // Step 3: Insert teacher data into the database
        const { data: dbData, error: dbError } = await this.supabaseService.client.from('teachers').insert([{
          id: authData.user?.id, 
          first_name: this.firstName,
          last_name: this.lastName,
          id_number: this.idNumber,  // Ensure id_number is passed correctly
          photo_url: photoUrl,
          email: this.email,  // Ensure email is passed
        }]);
    
        if (dbError) {
          console.error('Database Error:', dbError.message);
          alert('Failed to save user details. Please try again.');
          return;
        }
    
        console.log('Data inserted into database:', dbData);
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

import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

// Add your Supabase credentials here
const supabaseUrl = 'https://ygiecdduxzhavszahfpj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnaWVjZGR1eHpoYXZzemFoZnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5ODM1MjcsImV4cCI6MjA1MjU1OTUyN30.1i9wkAZu8nJ41gxch9E7pSwY9C5E5KpCjju3Gm-P7Ac';
const supabase = createClient(supabaseUrl, supabaseKey);

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor() { }

  // Function to upload image to Supabase Storage
  async uploadImage(file: File) {
    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from('user-photos')  // Replace with your bucket name
      .upload(fileName, file);

    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }

    // Get the public URL of the uploaded file
    const { data: urlData } = supabase.storage
      .from('user-photos')  // Replace with your bucket name
      .getPublicUrl(fileName);

    // Access the public URL from the returned data
    const publicUrl = urlData.publicUrl;

    return publicUrl;
  }

  // Function to insert user info into the database
  async insertUser(user: { first_name: string, last_name: string, id_number: number, password: string, user_photo_url: string }) {
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          first_name: user.first_name,
          last_name: user.last_name,
          id_number: user.id_number,
          password: user.password,
          user_photo_url: user.user_photo_url
        }
      ]);

    if (error) {
      console.error('Error inserting user:', error);
      return null;
    }

    return data;
  }
}
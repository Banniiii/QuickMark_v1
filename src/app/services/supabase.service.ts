import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://ygiecdduxzhavszahfpj.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnaWVjZGR1eHpoYXZzemFoZnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5ODM1MjcsImV4cCI6MjA1MjU1OTUyN30.1i9wkAZu8nJ41gxch9E7pSwY9C5E5KpCjju3Gm-P7Ac'
    );
  }

  get client(): SupabaseClient {
    return this.supabase;
  }
}
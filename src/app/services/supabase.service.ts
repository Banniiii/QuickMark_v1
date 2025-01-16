import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://ztykwcycerzfdnrfcbku.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0eWt3Y3ljZXJ6ZmRucmZjYmt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNjg4NzIsImV4cCI6MjA1MjY0NDg3Mn0.i9TuSPIm-aH5H8nDJnKsir_5gHq3oV9m0TDFoQtI-vY'
    );
  }

  get client(): SupabaseClient {
    return this.supabase;
  }
}
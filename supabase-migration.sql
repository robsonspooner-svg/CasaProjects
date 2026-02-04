-- Casa Project Management - Leads Table
-- Run this SQL in your Supabase SQL Editor to create the pm_leads table

CREATE TABLE IF NOT EXISTS pm_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Contact Information
  first_name TEXT NOT NULL,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,

  -- Project Details
  project_type TEXT NOT NULL,
  building_type TEXT NOT NULL,
  address TEXT,
  number_of_units TEXT,
  estimated_value TEXT,
  timeline TEXT,
  services_required TEXT,
  description TEXT,

  -- Marketing
  how_heard TEXT,

  -- Internal
  status TEXT DEFAULT 'new',
  notes TEXT,
  assigned_to TEXT
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_pm_leads_created_at ON pm_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_pm_leads_status ON pm_leads(status);
CREATE INDEX IF NOT EXISTS idx_pm_leads_email ON pm_leads(email);

-- Enable Row Level Security (RLS)
ALTER TABLE pm_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anonymous users (for the website form)
CREATE POLICY "Allow anonymous inserts" ON pm_leads
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all leads
CREATE POLICY "Allow authenticated read" ON pm_leads
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update leads
CREATE POLICY "Allow authenticated update" ON pm_leads
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_pm_leads_updated_at
  BEFORE UPDATE ON pm_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Sample query to view recent leads:
-- SELECT * FROM pm_leads ORDER BY created_at DESC LIMIT 10;

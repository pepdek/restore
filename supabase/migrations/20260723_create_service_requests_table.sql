create table public.service_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  phone text not null,
  email text,
  address text not null,
  service_needed text not null check (service_needed in ('Water Damage', 'Fire & Smoke Damage', 'Mold Remediation', 'Reconstruction', 'Not Sure')),
  is_emergency text not null check (is_emergency in ('Yes - need help now', 'No - can schedule ahead')),
  insurance_claim text not null check (insurance_claim in ('Yes', 'No', 'Not sure yet')),
  details text,
  status text not null default 'new'
);

alter table public.service_requests enable row level security;

-- Public schedule form inserts anonymously; no anon read/update/delete.
create policy "Anyone can submit a service request"
  on public.service_requests
  for insert
  to anon
  with check (true);

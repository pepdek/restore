create table public.referrals (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  partner_name text not null,
  partner_slug text,
  homeowner_name text not null,
  phone text not null,
  address text not null,
  damage_type text not null check (damage_type in ('Water', 'Mold', 'Fire', 'Other')),
  severity text not null check (severity in ('Minor', 'Moderate', 'Severe')),
  notes text,
  status text not null default 'new'
);

alter table public.referrals enable row level security;

-- Public referral form inserts anonymously; no anon read/update/delete.
create policy "Anyone can submit a referral"
  on public.referrals
  for insert
  to anon
  with check (true);

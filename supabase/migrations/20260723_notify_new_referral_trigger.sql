create extension if not exists pg_net with schema extensions;

create or replace function public.handle_new_referral()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  perform net.http_post(
    url := 'https://anezgmqbzbpabyzwpzke.supabase.co/functions/v1/notify-new-referral',
    headers := jsonb_build_object('Content-Type', 'application/json'),
    body := jsonb_build_object(
      'id', new.id,
      'partner_name', new.partner_name,
      'partner_slug', new.partner_slug,
      'homeowner_name', new.homeowner_name,
      'phone', new.phone,
      'address', new.address,
      'damage_type', new.damage_type,
      'severity', new.severity,
      'notes', new.notes,
      'created_at', new.created_at
    )
  );
  return new;
end;
$$;

create trigger on_referral_created
  after insert on public.referrals
  for each row
  execute function public.handle_new_referral();

create or replace function public.handle_new_service_request()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  perform net.http_post(
    url := 'https://anezgmqbzbpabyzwpzke.supabase.co/functions/v1/notify-new-service-request',
    headers := jsonb_build_object('Content-Type', 'application/json'),
    body := jsonb_build_object(
      'id', new.id,
      'first_name', new.first_name,
      'last_name', new.last_name,
      'phone', new.phone,
      'email', new.email,
      'address', new.address,
      'service_needed', new.service_needed,
      'is_emergency', new.is_emergency,
      'insurance_claim', new.insurance_claim,
      'details', new.details,
      'created_at', new.created_at
    )
  );
  return new;
end;
$$;

create trigger on_service_request_created
  after insert on public.service_requests
  for each row
  execute function public.handle_new_service_request();
